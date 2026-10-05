"use client";

import Image from "next/image";
import { useState } from "react";

// Contact page – a Tailwind replica of the original PHP/Bootstrap version.
// The design follows the same visual language used across the site:
//   • Grayscale‑to‑color image hover (filter grayscale → grayscale‑0)
//   • Fade‑in‑up entrance animation (wow fadeInUp)
//   • Clean, border‑less input fields with floating labels
//   • Success message displayed after form submission.

export default function ContactPage() {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch(
        "https://0cecifp2q1.execute-api.us-east-1.amazonaws.com/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error("The message could not be submitted. Please try again.");
      }

      setSuccessMessage("Your message has been submitted successfully!");
      form.reset();
    } catch {
      setErrorMessage("The message could not be submitted. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-gray-50 to-white py-14 md:py-20 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container mx-auto flex flex-col px-6 lg:px-12">
        {/* Header */}
        <div className="order-0 text-center max-w-3xl mx-auto pb-15">
          <span className="inline-flex items-center rounded-full bg-[#3099D5]/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-[#1682bf]">Contact Us</span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#16243D] mt-4">
            If you have any comments, please apply now
          </h1>
        </div>

        <div className="order-2 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-10 w-full">
          <a href="mailto:contact@rdigs.com" className="group rounded-2xl border border-sky-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-[#1682bf]">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
            </span>
            <span className="block text-sm font-medium text-gray-500">Email us</span>
            <span className="mt-1 block font-semibold text-[#16243D] group-hover:text-[#1682bf]">contact@rdigs.com</span>
          </a>
          <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm">
            <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-[#1682bf]">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 16.5v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 10.2 18a19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 1.9 3.2 2 2 0 0 1 3.9 1h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L7.8 9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.9 2.6Z"/></svg>
            </span>
            <span className="block text-sm font-medium text-gray-500">Call our offices</span>
            <span className="mt-1 block text-sm font-semibold leading-6 text-[#16243D]">
              <a className="hover:text-[#1682bf]" href="tel:+13023085310">US: +1 302-308-5310</a><br/>
              <a className="hover:text-[#1682bf]" href="tel:+442075517242">UK: +44 20 7551 7242</a>
            </span>
          </div>
          <a href="https://www.google.com/maps/search/523B,+Downtown+City+Vista,+Fountain+Road,+Kharadi,+Pune+411014/@18.5564281,73.9277702,15z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer" className="group rounded-2xl border border-sky-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-[#1682bf]">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>
            </span>
            <span className="block text-sm font-medium text-gray-500">Find our India office</span>
            <span className="mt-1 block font-semibold text-[#16243D] group-hover:text-[#1682bf]">523B, Downtown City Vista<br/>Fountain Road, Kharadi<br/>Pune 411014, India</span>
            <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#1682bf]">Open in Google Maps <span aria-hidden="true">↗</span></span>
          </a>
        </div>

        <div className="order-1 grid items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Image side */}
          {/* Image side */}
          <div className="order-1 flex items-center justify-center">
            <div className="relative w-full max-w-sm">

              {/* White fluid background */}
              <div
                className="
        absolute inset-[-8%]
        bg-white/90
        rounded-[30%_70%_70%_30%/30%_30%_70%_70%]
        animate-pulse
        duration-[3000ms]
      "
              />

              {/* Second fluid layer */}
              <div
                className="
        absolute inset-[-5%]
        bg-white/70
        rounded-[70%_30%_30%_70%/60%_40%_60%_40%]
        animate-bounce
        [animation-duration:6s]
      "
              />

              {/* Image */}
              <div className="relative z-10">
                <Image
                  src="/Contact-Image.png"
                  alt="Contact"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>

            </div>
          </div>

          {/* Form side */}
          <div className="order-2 flex flex-col justify-center rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_18px_55px_-28px_rgba(22,36,61,0.28)] sm:p-8">
            <h4 className="text-[#3099D5] font-semibold text-lg mb-2">Send Your Message</h4>
            <p className="mb-4 text-gray-600">Fill in the form below and your details will be stored.</p>

            {/* Success message */}
            {successMessage && (
              <div className="bg-green-100 border border-green-200 text-green-800 rounded p-4 mb-4 text-center">
                {successMessage}
              </div>
            )}
            {errorMessage && (
              <div role="alert" className="bg-red-100 border border-red-200 text-red-800 rounded p-4 mb-4 text-center">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="peer block w-full appearance-none border-0 bg-gray-100 rounded-md py-3 px-4 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#3099D5]"
                    placeholder="Your Name"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-3 top-[-0.55rem] z-10 bg-gray-100 px-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:px-0 peer-placeholder-shown:text-base peer-focus:top-[-0.55rem] peer-focus:bg-gray-100 peer-focus:px-1 peer-focus:text-sm"
                  >
                    Your Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="peer block w-full appearance-none border-0 bg-gray-100 rounded-md py-3 px-4 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#3099D5]"
                    placeholder="Your Email"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-3 top-[-0.55rem] z-10 bg-gray-100 px-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:px-0 peer-placeholder-shown:text-base peer-focus:top-[-0.55rem] peer-focus:bg-gray-100 peer-focus:px-1 peer-focus:text-sm"
                  >
                    Your Email
                  </label>
                </div>
              </div>

              {/* Phone & Project */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    required
                    className="peer block w-full appearance-none border-0 bg-gray-100 rounded-md py-3 px-4 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#3099D5]"
                    placeholder="Phone"
                  />
                  <label
                    htmlFor="phone"
                    className="absolute left-3 top-[-0.55rem] z-10 bg-gray-100 px-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:px-0 peer-placeholder-shown:text-base peer-focus:top-[-0.55rem] peer-focus:bg-gray-100 peer-focus:px-1 peer-focus:text-sm"
                  >
                    Your Phone
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="project"
                    id="project"
                    className="peer block w-full appearance-none border-0 bg-gray-100 rounded-md py-3 px-4 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#3099D5]"
                    placeholder="Project"
                  />
                  <label
                    htmlFor="project"
                    className="absolute left-3 top-[-0.55rem] z-10 bg-gray-100 px-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:px-0 peer-placeholder-shown:text-base peer-focus:top-[-0.55rem] peer-focus:bg-gray-100 peer-focus:px-1 peer-focus:text-sm"
                  >
                    Your Project
                  </label>
                </div>
              </div>

              {/* Subject */}
              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="peer block w-full appearance-none border-0 bg-gray-100 rounded-md py-3 px-4 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#3099D5]"
                  placeholder="Subject"
                />
                <label
                  htmlFor="subject"
                  className="absolute left-3 top-[-0.55rem] z-10 bg-gray-100 px-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:px-0 peer-placeholder-shown:text-base peer-focus:top-[-0.55rem] peer-focus:bg-gray-100 peer-focus:px-1 peer-focus:text-sm"
                >
                  Subject
                </label>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={5}
                  className="peer block w-full appearance-none border-0 bg-gray-100 rounded-md py-3 px-4 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#3099D5] resize-none"
                  placeholder="Leave a message here"
                />
                <label
                  htmlFor="message"
                  className="absolute left-3 top-[-0.55rem] z-10 bg-gray-100 px-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:px-0 peer-placeholder-shown:text-base peer-focus:top-[-0.55rem] peer-focus:bg-gray-100 peer-focus:px-1 peer-focus:text-sm"
                >
                  Message
                </label>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#3099D5] text-white py-3 rounded-md hover:bg-[#2874a6] transition-colors"
              >
                {isSubmitting ? "Submitting..." : "Save Message"}
              </button>
            </form>
          </div>
        </div>

        <div className="order-3 mt-14 grid gap-6 rounded-3xl bg-[#16243D] p-5 text-white shadow-xl sm:p-7 md:grid-cols-[1fr_1.2fr] md:items-center">
          <div className="px-2 py-3 sm:px-4">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">Visit us</span>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Come say hello in Pune</h2>
            <p className="mt-3 max-w-md leading-7 text-slate-300">523B, Downtown City Vista, Fountain Road, Kharadi, Pune 411014, India</p>
            <div className="mt-5 space-y-3 border-t border-white/15 pt-4 text-sm leading-6 text-slate-300">
              <p><span className="font-semibold text-white">United States</span><br/>919, North Market Street, Suite 950, Wilmington, Delaware 19801</p>
              <p><span className="font-semibold text-white">United Kingdom</span><br/>71-75 Shelton Street, Covent Garden, London WC2H 9JQ</p>
            </div>
            <a href="https://www.google.com/maps/search/523B,+Downtown+City+Vista,+Fountain+Road,+Kharadi,+Pune+411014/@18.5564281,73.9277702,15z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#3099D5] px-5 py-3 font-semibold text-white transition hover:bg-sky-500">Get directions <span aria-hidden="true">↗</span></a>
          </div>
          <a href="https://www.google.com/maps/search/523B,+Downtown+City+Vista,+Fountain+Road,+Kharadi,+Pune+411014/@18.5564281,73.9277702,15z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer" aria-label="Open the Pune office location in Google Maps" className="relative block min-h-64 overflow-hidden rounded-2xl border border-white/15 bg-[linear-gradient(135deg,#d9f0fb,#f2f8fc_45%,#d5e6ef)]">
            <div aria-hidden="true" className="absolute inset-0 opacity-50" style={{ backgroundImage: "linear-gradient(35deg, transparent 46%, #9bb8c7 47%, #9bb8c7 49%, transparent 50%), linear-gradient(145deg, transparent 42%, #a8c4d2 43%, #a8c4d2 45%, transparent 46%), linear-gradient(90deg, transparent 48%, #fff 49%, #fff 52%, transparent 53%)", backgroundSize: "130px 100px, 160px 120px, 80px 80px" }} />
            <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#3099D5] text-white shadow-xl ring-8 ring-white/60"><svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg></span>
              <span className="mt-3 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#16243D] shadow-lg">Downtown City Vista, Kharadi</span>
            </span>
            <span className="absolute bottom-3 right-3 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#16243D] shadow">View map ↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
