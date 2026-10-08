"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
export default function WorksProcess() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const updateActiveStep = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const steps = Array.from(scroller.querySelectorAll<HTMLElement>("[data-process-step]"));
    const activeLine = scroller.getBoundingClientRect().top + 44;
    let current = 0;
    steps.forEach((step, index) => {
      if (step.getBoundingClientRect().top <= activeLine) current = index;
    });
    if (scroller.scrollTop + scroller.clientHeight >= scroller.scrollHeight - 2) {
      current = steps.length - 1;
    }
    setActiveIndex((previous) => previous === current ? previous : current);
  }, []);
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    updateActiveStep();
    scroller.addEventListener("scroll", updateActiveStep, { passive: true });
    window.addEventListener("resize", updateActiveStep);
    return () => {
      scroller.removeEventListener("scroll", updateActiveStep);
      window.removeEventListener("resize", updateActiveStep);
    };
  }, [updateActiveStep]);
  const stepClass = (index: number) => `${styles.worksStep}${activeIndex === index ? ` ${styles.activeStep}` : ""}`;
  return (
    <section className={styles.worksSection} aria-labelledby="works-title">
      <div className={styles.worksLayout}>
        <h2 className={styles.worksTitle} id="works-title">How The <span className="running-gradient-text">Engagement<br />Engine Works</span></h2>
        <div className={styles.worksScroller} aria-label="How the engagement engine works" ref={scrollerRef}>
          <article data-process-step className={stepClass(0)}><span className={styles.worksNumber}>01.</span><div className={styles.worksStepBody}><h3>Define Your Ideal Audience</h3><p>Every program begins with your ICP.</p><p>We build the campaign around:</p><div className={styles.worksTags}><span>Target accounts</span><span>Industries</span><span>Company size</span><span>Geographies</span><span>Job functions and seniority</span><span>Buyer personas</span><span>Priority solutions</span><span>Campaign objectives</span></div><p>This creates the audience foundation for everything that follows.</p></div></article>
          <article data-process-step className={stepClass(1)}><span className={styles.worksNumber}>02.</span><div className={styles.worksStepBody}><h3>Identify Signals of Interest</h3><p>Not every account in your ICP is actively researching a solution today.</p><p>We combine audience intelligence, engagement data and intent signals to identify accounts and prospects demonstrating relevant interests.</p><p>This helps us prioritize audiences based not only on <strong>who they are</strong>, but also on <strong>what they appear to care about.</strong></p></div></article>
          <article data-process-step className={stepClass(2)}><span className={styles.worksNumber}>03.</span><div className={styles.worksStepBody}><h3>Build Awareness Before Lead Capture</h3><p>Before asking your audience to engage, we help your brand become familiar.</p><p>Target accounts can be exposed to your messaging through ABM display and digital engagement aligned with the campaign.</p><p>This creates repeated opportunities for prospects to:</p><div className={styles.worksOutcomes}><div>See your brand</div><div>Recognize your message</div><div>Understand your proposition.</div></div><p>So when they eventually interact with your content or speak with our team, your brand isn’t appearing for the first time.</p></div></article>
          <article data-process-step className={stepClass(3)}><span className={styles.worksNumber}>04.</span><div className={styles.worksStepBody}><h3>Capture &amp; Qualify Demand</h3><p>Once engagement is established, we move from visibility to conversation.</p><p>Depending on the program, leads can be generated through:</p><div className={`${styles.worksTags} ${styles.blueTags}`}><span>Content Syndication</span><span>Telemarketing</span><span>MQL Programs</span><span>HQL Programs</span><span>BANT Qualification</span><span>Sales-Ready Leads</span><span>Webinar &amp; Event Registration</span><span>Custom Qualification Programs</span></div><p>But we don’t stop at collecting contact details.</p><p>Our qualification process is designed to uncover the prospect’s needs, challenges, priorities and buying context.</p></div></article>
        </div>
      </div>
    </section>
  );
}
