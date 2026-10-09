import Image from "next/image";
import { Bricolage_Grotesque, Urbanist } from "next/font/google";
import RunningHighlight from "./RunningHighlight";
import WorksProcess from "./WorksProcess";
import styles from "./page.module.css";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage" });
const urbanist = Urbanist({ subsets: ["latin"], variable: "--font-urbanist" });


export default function RdigsEngagementEnginePage() {
  return (
    <main className={`${styles.page} ${bricolage.variable} ${urbanist.variable}`}>
      <section className="relative isolate overflow-hidden bg-gradient-to-r from-white via-[#e8f8ff] to-[#16a9e6]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_76%_35%,rgba(255,255,255,0.96),transparent_35%),radial-gradient(ellipse_at_53%_80%,rgba(255,255,255,0.45),transparent_42%)]" />
        <div className="mx-auto grid min-h-[650px] max-w-[1320px] items-center gap-4 px-6 py-14 md:grid-cols-[1.08fr_0.92fr] md:px-10 lg:py-16">
          <div className="z-10 max-w-[690px]">
            <span className="inline-flex rounded-full border border-[#32a8e9] bg-white/80 px-5 py-2 text-lg font-semibold shadow-[0_4px_16px_rgba(22,36,61,0.12)]">The RDIGS Engagement Engine</span>
            <h1 className={`${styles.heading} mt-6 text-[42px] leading-[1.12] tracking-[-0.04em] sm:text-[52px] lg:text-[56px]`}>
              <span className="font-light">Don’t Just </span><RunningHighlight>Capture Leads.</RunningHighlight><br />
              <span className="font-bold">Build Memory.<br />Create Momentum.</span>
            </h1>
            <p className="mt-6 max-w-[690px] text-[17px] leading-[1.42]">
              Most demand generation programs focus on one moment: the lead conversion.<br className="hidden xl:block" /> We believe what happens <strong>before and after that moment matters just as much.</strong>
            </p>
            <p className="mt-4 max-w-[700px] text-[17px] leading-[1.42]">
              The RDIGS Engagement Engine is our proprietary approach to demand generation, designed to surround your target audience with relevant brand experiences across the buying journey - building awareness before conversion and reinforcing engagement after the lead is captured.
            </p>
            <p className="mt-5 text-[17px]">Because generating a lead is only the beginning.</p>
            <a href="/contact" className="mt-7 inline-flex rounded-full border border-[#168fe0] bg-white/75 px-5 py-2 text-lg shadow-sm transition hover:bg-white hover:shadow-md">Build Your Engagement Engine</a>
          </div>
          <div className="hidden min-h-[470px] md:block" aria-hidden="true" />
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f4f4f4] px-6 py-14 md:px-10 md:py-16">
        <div className={styles.decorativeArcs} aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-[1040px]">
          <header className="text-center">
            <span className={styles.pill}>The Problem With Traditional Lead Generation</span>
            <h2 className={`${styles.heading} mt-5 text-[32px] font-bold leading-tight tracking-[-0.035em] sm:text-[40px]`}>A Lead Doesn’t Mean <RunningHighlight>They Remember You</RunningHighlight></h2>
          </header>
          <div className="mt-8 grid items-center gap-10 md:grid-cols-[0.9fr_1.55fr] md:gap-14">
            <div className="relative mx-auto w-full max-w-[300px] md:max-w-none">
              <Image
                src="/engagement-engine/Traditional%20Lead%20Gen.png"
                alt="A prospect downloads an asset, their details are captured, and the lead is delivered to sales"
                width={722}
                height={718}
                priority
                sizes="(min-width: 768px) 240px, 70vw"
                className="relative z-10 h-auto w-full rounded-2xl"
              />
            </div>
            <div className="text-[17px] leading-[1.4]">
              <p>Traditional lead generation often works in isolation.</p>
              <div className={styles.processSteps}>
                <p>A prospect downloads an asset.</p>
                <p>Their details are captured.</p>
                <p>The lead is delivered to sales.</p>
              </div>
              <p className="mt-4">And then?</p>
              <p>Your sales team reaches out to someone who may barely remember the content they engaged with - let alone the company behind it.</p>
              <div className="mt-4">
                <p>That creates a fundamental disconnect between <strong>lead generation and buyer engagement.</strong></p>
                <p className="mt-3">The RDIGS Engagement Engine is designed to <span className="border-b-2 border-[#27a7e4] pb-1">close that gap.</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ruleSection}>
        <div className={styles.contentWidth}>
          <div className={styles.ruleIntro}>
            <div>
              <span className={styles.pill}>The Rule of 7 Has Changed</span>
              <h2 className={`${styles.heading} ${styles.ruleHeading}`}>B2B buyers rarely act after a <RunningHighlight>single interaction.</RunningHighlight></h2>
            </div>
            <p className={styles.ruleCopy}>
              They research independently, consume content, compare solutions, encounter brands across multiple channels and involve multiple stakeholders before entering a serious sales conversation.<br />
              That means one content download or one outbound call isn’t enough. Your brand needs to show up consistently - with relevance - throughout the journey.
            </p>
          </div>
          <div className={styles.journeyImagePlaceholder}><Image src="/engagement-engine/6%20Pt%20Infographics.png" alt="Six points in the buyer journey" width={1498} height={303} sizes="(min-width: 1104px) 1040px, calc(100vw - 48px)" /></div>
        </div>
      </section>

      <section className={styles.engineSection}>
        <div className={styles.engineInner}>
          <header className={styles.engineHeader}>
            <span className={styles.pill}>What Is the RDIGS Engagement Engine?</span>
            <h2 className={styles.heading}>Demand Generation<br /><RunningHighlight>Built Around the Entire Journey</RunningHighlight></h2>
            <p>The RDIGS Engagement Engine brings together audience intelligence, intent, content, display advertising, telemarketing and multi-channel engagement into one connected demand generation program.</p>
            <p>Instead of treating every channel as a separate activity, we use them together to create continuity across the buyer journey.</p>
          </header>
          <div className={styles.engineFlow}>
            <article className={styles.flowCard}>
              <h3>Before the Lead</h3>
              <p>Build awareness and familiarity across your target audience.</p>
            </article>
            <article className={styles.flowCard}>
              <h3>At the Point<br />of Engagement</h3>
              <p>Capture demand and understand what matters to each prospect.</p>
            </article>
            <article className={styles.flowCard}>
              <h3>After the Lead</h3>
              <p>Continue engaging the prospect with messaging relevant to their interests and challenges.</p>
            </article>
            <article className={styles.resultCard}>
              <span>The result?</span>
              <h3>A lead that doesn’t arrive cold.</h3>
              <p>It arrives with context, familiarity and continued brand exposure behind it.</p>
            </article>
          </div>
        </div>
      </section>
<WorksProcess />
<section className={styles.personalSection} aria-labelledby="personalSectionTitle">
  <div className={styles.personalInner}>
    <div className={styles.personalPillWrap}><span className={styles.pill + " " + styles.personalPill}>From Qualification to Personalization</span></div>
    <div className={styles.personalIntro}>
      <h2 className={styles.personalHeading} id="personalSectionTitle">What Your Prospect<br /><RunningHighlight>Tells Us Shapes What<br />They See Next</RunningHighlight></h2>
      <div className={styles.personalIntroCopy}>
        <p>This is where the Engagement Engine becomes more powerful.</p>
        <p>During qualification, prospects can be asked targeted questions designed to uncover their specific business requirements.</p>
        <p>For example:</p>
      </div>
    </div>
    <div className={styles.personalQuestions} aria-label="Example qualification questions">
      <div className={styles.personalQuestion}><span>Q1</span><p>What challenge are you currently trying<br className={styles.personalWideBreak} /> to solve?</p></div>
      <div className={styles.personalQuestion}><span>Q3</span><p>What is driving your current requirement?</p></div>
      <div className={styles.personalQuestion}><span>Q2</span><p>What capability is most important to your<br className={styles.personalWideBreak} /> organization?</p></div>
      <div className={styles.personalQuestion}><span>Q3</span><p>What are your priorities when evaluating<br className={styles.personalWideBreak} /> a solution?</p></div>
    </div>
    <div className={styles.personalOutcomeRow}>
      <div className={styles.personalClosingCopy}>
        <p>Those answers create context.</p>
        <p>And that context can inform what happens next. Instead of serving every lead the same generic message, post-lead engagement can reinforce messaging aligned with the needs and interests identified during qualification.</p>
      </div>
      <div className={styles.personalOutcomes}>
        <div className={styles.personalOutcome}><span className={styles.personalIcon}>♙</span><span>One prospect</span></div>
        <div className={styles.personalOutcome}><span className={styles.personalIcon}>⌕</span><span>One identified need</span></div>
        <div className={styles.personalOutcome}><span className={styles.personalIcon}>▣</span><span>More relevant follow-up engagement.</span></div>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}
