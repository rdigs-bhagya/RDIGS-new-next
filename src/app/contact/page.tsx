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
    <section className="bg-gray-50 py-12 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto pb-8 mb-15">
          <h4 className="text-[#3099D5] font-semibold text-lg">Contact Us</h4>
          <h1 className="text-4xl md:text-5xl font-bold text-[#16243D] mt-2">
            If you have any comments, please apply now
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Image side */}
          {/* Image side */}
          <div className="flex items-center justify-center">
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
          <div className="flex flex-col justify-center">
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
      </div>
    </section>
  );
}
