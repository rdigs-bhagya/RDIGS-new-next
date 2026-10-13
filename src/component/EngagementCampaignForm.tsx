"use client";

import { useState, type FormEvent } from "react";
import RunningHighlight from "@/app/rdigs-enmagement-engine/RunningHighlight";
import styles from "./EngagementCampaignForm.module.css";

const apiBaseUrl = (
  process.env.NEXT_PUBLIC_API_URL ||
  "https://0cecifp2q1.execute-api.us-east-1.amazonaws.com"
).replace(/\/+$/, "");

export default function EngagementCampaignForm() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ message: string; error: boolean } | null>(null);

  async function submitCampaignRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = new FormData(form);
    setSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch(`${apiBaseUrl}/engagement-engine/requests`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: values.get("name"),
          email: values.get("email"),
          company: values.get("company"),
          message: values.get("message"),
        }),
      });
      const result = await response.json().catch(() => ({})) as { error?: string };
      if (!response.ok) throw new Error(result.error || "Your request could not be sent. Please try again.");

      form.reset();
      setStatus({ message: "Your campaign request has been sent. Thank you.", error: false });
    } catch (requestError) {
      setStatus({
        message: requestError instanceof Error ? requestError.message : "Your request could not be sent. Please try again.",
        error: true,
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="engagement-campaign-request" className={styles.section} aria-labelledby="engineRequestTitle">
      <div className={styles.layout}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>THE ENGAGEMENT ENGINE</span>
          <h2 id="engineRequestTitle">Stop generating leads in isolation. <RunningHighlight>Start building demand that stays with the buyer.</RunningHighlight></h2>
          <p className={styles.lead}>Your prospects don’t experience your marketing as separate channels. Neither should your demand generation strategy.</p>
          <p className={styles.body}>The RDIGS Engagement Engine connects audience intelligence, content, digital engagement and human conversations to create more meaningful interactions before, during and after lead capture. So when your sales team starts the conversation, your brand has already started the journey.</p>
          <p className={styles.prompt}>Let’s build an Engagement Engine around your next campaign.</p>
          <a className={styles.cta} href="/contact">Talk to Our Demand Generation Team <span aria-hidden="true">→</span></a>
        </div>

        <div className={styles.card}>
          <span className={styles.formEyebrow}>REQUEST A CAMPAIGN PLAN</span>
          <h3>Tell us about your next campaign.</h3>
          {status && (
            <p role={status.error ? "alert" : "status"} className={`${styles.status} ${status.error ? styles.error : ""}`}>
              {status.message}
            </p>
          )}
          <form onSubmit={submitCampaignRequest}>
            <label className="sr-only" htmlFor="campaign-request-name">Full name</label>
            <input id="campaign-request-name" name="name" type="text" autoComplete="name" placeholder="Full name" required maxLength={200} />
            <label className="sr-only" htmlFor="campaign-request-email">Work email</label>
            <input id="campaign-request-email" name="email" type="email" autoComplete="email" placeholder="Work email" required maxLength={200} />
            <label className="sr-only" htmlFor="campaign-request-company">Company (optional)</label>
            <input id="campaign-request-company" name="company" type="text" autoComplete="organization" placeholder="Company (optional)" maxLength={200} />
            <label className="sr-only" htmlFor="campaign-request-details">What are you looking to build? (optional)</label>
            <textarea id="campaign-request-details" name="message" rows={4} placeholder="What are you looking to build? (optional)" maxLength={2000} />
            <button type="submit" disabled={submitting}>
              {submitting ? "Sending request…" : <>Request a Campaign Plan <span aria-hidden="true">→</span></>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
