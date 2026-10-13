'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { DynamicFormFields, useFormFields } from '@/component/DynamicFormFields';

const apiBaseUrl = (process.env.NEXT_PUBLIC_API_URL || 'https://0cecifp2q1.execute-api.us-east-1.amazonaws.com').replace(/\/$/, '');

export default function MediaDeckSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasDownloaded, setHasDownloaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const triggerRef = useRef<HTMLButtonElement>(null);
  const { fields, loading: fieldsLoading, error: fieldsError } = useFormFields('mediaDeck');

  useEffect(() => {
    if (!isModalOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && !isSubmitting) {
        setIsModalOpen(false);
        triggerRef.current?.focus();
      }
    };
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [isModalOpen, isSubmitting]);

  function openModal() {
    setErrorMessage('');
    setSuccessMessage('');
    setHasDownloaded(false);
    setIsModalOpen(true);
  }

  function closeModal() {
    if (isSubmitting) return;
    setIsModalOpen(false);
    triggerRef.current?.focus();
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    setSuccessMessage('');

    const formData = new FormData(event.currentTarget);
    try {
      const response = await fetch(`${apiBaseUrl}/mediadeck/download`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => ({})) as { error?: string };
        throw new Error(result.error || 'Your details could not be submitted. Please try again.');
      }

      const pdf = await response.blob();
      if (pdf.type !== 'application/pdf' || pdf.size === 0) {
        throw new Error('The media deck PDF could not be downloaded. Please try again.');
      }

      const downloadUrl = URL.createObjectURL(pdf);
      const downloadLink = document.createElement('a');
      downloadLink.href = downloadUrl;
      downloadLink.download = 'rdigs-media-deck.pdf';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      downloadLink.remove();
      window.setTimeout(() => URL.revokeObjectURL(downloadUrl), 60_000);
      setHasDownloaded(true);
      setSuccessMessage('Your media deck is downloading.');
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Your details could not be submitted. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="border-t border-gray-50 bg-white px-6 py-14 lg:px-14">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex flex-col justify-center md:w-1/2">
          <h2 className="mb-2 text-3xl font-bold tracking-tight text-[#3099D5] sm:text-4xl md:text-[40px]">
            Our Strategy, Your Spotlight!
          </h2>
          <p className="mb-5 text-[20px] font-medium leading-snug text-[#606060] sm:text-[22px] md:text-[24px]">
            See How We Position B2B Brands for Maximum Reach and Revenue Impact.
          </p>
          <div>
            <button
              ref={triggerRef}
              type="button"
              onClick={openModal}
              className="inline-block rounded-md bg-[#3099D5] px-7 py-2.5 text-[15px] font-medium text-white shadow-sm transition-colors hover:bg-[#16243D] sm:text-[16px]"
            >
              Download Now
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center md:w-1/2">
          <Image
            src="/home/corporatedeck.png"
            alt="RDIGS Media Deck 2026"
            width={450}
            height={320}
            className="h-auto w-full max-w-[420px] object-contain drop-shadow-md"
            priority
          />
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center overflow-y-auto bg-black/80 p-3 sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeModal();
          }}
        >
          <section
            className="relative w-full max-w-[500px] rounded-[30px] bg-[#f4fbff] p-4 shadow-2xl sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="media-deck-title"
          >
            <button
              type="button"
              onClick={closeModal}
              disabled={isSubmitting}
              aria-label="Close media deck form"
              className="absolute right-5 top-3 z-10 text-[27px] font-bold leading-none text-[#3099d5] hover:text-[#16243d] disabled:opacity-50"
            >
              ×
            </button>
            <div className="rounded-[25px] bg-white px-6 pb-8 pt-6 shadow-[0_2px_5px_rgba(22,36,61,0.12)] sm:px-6 sm:pb-10 sm:pt-6">
              <h2 id="media-deck-title" className="mb-3 pr-5 text-[23px] font-bold leading-tight text-[#3099d5] sm:text-[24px]">
                Get the RDIGS Media Deck
              </h2>
              <p className="mb-4 text-[12px] leading-[1.55] text-[#65748b]">
                If you’re serious about driving pipeline—not just filling your CRM—this is where you start. Our Media Deck breaks down exactly how we generate high-intent, problem-aware leads and keep your brand visible when buying decisions are actually made. No fluff. Just what works! Fill in your details below, and we’ll send it straight to your inbox.
              </p>

              <form className="space-y-4" onSubmit={handleSubmit}>
                {fieldsError && <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{fieldsError}</p>}
                {fieldsLoading ? <p className="text-sm text-[#65748b]">Loading form…</p> : (
                  <div className="space-y-3">
                    <DynamicFormFields fields={fields} disabled={isSubmitting || hasDownloaded} variant="pill" />
                  </div>
                )}

                <p className="px-1 text-center text-[14px] leading-6 text-[#16243d]">
                  We’ll share the media deck with you right away—no spam, just value.
                </p>

                {errorMessage && <p role="alert" className="text-center text-sm text-red-600">{errorMessage}</p>}
                {successMessage && <p role="status" className="text-center text-sm text-green-700">{successMessage}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting || hasDownloaded || fieldsLoading || Boolean(fieldsError)}
                  className="h-[46px] w-full rounded-full bg-[#309bd5] text-[15px] font-bold text-white transition-colors hover:bg-[#168bc9] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? 'Preparing your download…' : hasDownloaded ? 'Media Deck Downloaded' : 'Download Media Deck'}
                </button>
              </form>
            </div>
          </section>
        </div>
      )}
    </section>
  );
}
