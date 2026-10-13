"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import RunningHighlight from "./RunningHighlight";

const stages = [
  ["ICP & Account Selection", "Identify the organizations and decision-makers you want to reach."],
  ["Intent & Audience Intelligence", "Understand where relevant interest and engagement may exist."],
  ["Pre-Lead Brand Exposure", "Build awareness through targeted display and digital engagement."],
  ["Content & Demand Capture", "Engage prospects through relevant content and campaign experiences."],
  ["Human Qualification", "Understand needs, challenges, priorities and buying context."],
  ["Qualified Lead Delivery", "Deliver actionable prospect intelligence to your sales team."],
  ["Personalized Post-Lead Engagement", "Continue display, email and digital engagement based on identified interests."],
  ["Sales Follow-Up", "Your team enters the conversation with greater context and brand familiarity."],
  ["Pipeline Opportunity", "The destination of the journey — where continued engagement meets sales readiness."],
];

export default function JourneyStages() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const section = scroller.closest(`.${styles.cycleSection}`);
    const timeline = timelineRef.current;
    const steps = Array.from(scroller.querySelectorAll<HTMLElement>("[data-cycle-step]"));

    const updateActiveStep = () => {
      const activeLine = window.innerHeight * 0.42;
      let current = section && section.getBoundingClientRect().top > activeLine ? -1 : 0;
      steps.forEach((step, index) => {
        if (step.getBoundingClientRect().top <= activeLine) current = index;
      });
      const activeStep = current > 0 ? steps[current] : undefined;
      const activeNumber = activeStep?.querySelector<HTMLElement>(`.${styles.cycleNumber}`);
      if (timeline) {
        const progress = activeStep && activeNumber
          ? activeStep.offsetTop + activeNumber.offsetTop + activeNumber.offsetHeight / 2
          : 0;
        timeline.style.setProperty("--cycle-progress", `${progress}px`);
      }
      setActiveIndex(current > 0 ? current : -1);
    };
    window.addEventListener("scroll", updateActiveStep, { passive: true });
    window.addEventListener("resize", updateActiveStep);
    updateActiveStep();
    return () => {
      window.removeEventListener("scroll", updateActiveStep);
      window.removeEventListener("resize", updateActiveStep);
    };
  }, []);

  return (
    <section className={styles.cycleSection} aria-labelledby="cycleTitle">
      <div className={styles.cycleLayout}>
        <div className={styles.cycleIntro}>
          <span className={`${styles.pill} ${styles.cyclePill}`}>THE JOURNEY. MULTIPLE TOUCHPOINTS.</span>
          <h2 id="cycleTitle"><RunningHighlight>Connecting demand</RunningHighlight><br />generation across the<br />buying cycle.</h2>
          <p>From the first account selected to the pipeline opportunity that follows — the connected steps, one coordinated engine.</p>
        </div>
        <div className={styles.cycleScroller} aria-label="Engagement journey stages" ref={scrollerRef}>
          <div className={styles.cycleTimeline} ref={timelineRef}>
            {stages.map(([title, description], index) => (
              <article key={title} data-cycle-step aria-current={activeIndex === index ? "step" : undefined} className={`${styles.cycleStep}${activeIndex === index ? ` ${styles.cycleStepActive}` : ""}${index === stages.length - 1 ? ` ${styles.cycleStepFinal}` : ""}`}>
                <span className={styles.cycleNumber}>{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
