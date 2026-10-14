import Image from "next/image";
import { Bricolage_Grotesque, Urbanist } from "next/font/google";
import RunningHighlight from "./RunningHighlight";
import WorksProcess from "./WorksProcess";
import JourneyStages from "./JourneyStages";
import styles from "./page.module.css";
import EngagementCampaignForm from "@/component/EngagementCampaignForm";

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
              <span className="font-light">Don&apos;t Just </span><RunningHighlight>Capture Leads.</RunningHighlight><br />
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
          <div className="hidden min-h-[470px] items-center justify-center md:flex">
            <Image src="/engagement-engine/rdigs-engagement-engine.png" alt="RDIGS Engagement Engine buyer journey diagram" width={1703} height={1853} priority sizes="(min-width: 768px) 42vw, 100vw" className={styles.heroEngineImage} />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f4f4f4] px-6 py-14 md:px-10 md:py-16">
        <div className={styles.decorativeArcs} aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-[1040px]">
          <header className="text-center">
            <span className={styles.pill}>The Problem With Traditional Lead Generation</span>
            <h2 className={`${styles.heading} mt-5 text-[32px] font-bold leading-tight tracking-[-0.035em] sm:text-[40px]`}>A Lead Doesnâ€™t Mean <RunningHighlight>They Remember You</RunningHighlight></h2>
          </header>
          <div className="mt-8 grid items-center gap-10 md:grid-cols-[0.9fr_1.55fr] md:gap-14">
            <div className="relative mx-auto w-full max-w-[300px] md:max-w-none">
              <Image
                src="/engagement-engine/traditional-lead-gen.png"
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
              That means one content download or one outbound call isnâ€™t enough. Your brand needs to show up consistently - with relevance - throughout the journey.
            </p>
          </div>
          <div className={styles.journeyImagePlaceholder}><Image src="/engagement-engine/6-pt-infographics.png" alt="Six points in the buyer journey" width={1498} height={303} sizes="(min-width: 1104px) 1040px, calc(100vw - 48px)" /></div>
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
              <svg className={styles.flowArrow} viewBox="0 0 56 30" aria-hidden="true"><defs><linearGradient id="engineArrowGradient1" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#168bc9"/><stop offset=".55" stopColor="#4fc3f7"/><stop offset="1" stopColor="#7657e8"/></linearGradient></defs><path d="M2 27C12 3 43 3 51 25" fill="none" stroke="url(#engineArrowGradient1)" strokeWidth="1.5"/><path d="m44 21 7 5 2-9" fill="none" stroke="url(#engineArrowGradient1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </article>
            <article className={styles.flowCard}>
              <h3>At the Point<br />of Engagement</h3>
              <p>Capture demand and understand what matters to each prospect.</p>
              <svg className={styles.flowArrow} viewBox="0 0 56 30" aria-hidden="true"><defs><linearGradient id="engineArrowGradient2" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#168bc9"/><stop offset=".55" stopColor="#4fc3f7"/><stop offset="1" stopColor="#7657e8"/></linearGradient></defs><path d="M2 27C12 3 43 3 51 25" fill="none" stroke="url(#engineArrowGradient2)" strokeWidth="1.5"/><path d="m44 21 7 5 2-9" fill="none" stroke="url(#engineArrowGradient2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </article>
            <article className={styles.flowCard}>
              <h3>After the Lead</h3>
              <p>Continue engaging the prospect with messaging relevant to their interests and challenges.</p>
              <svg className={styles.flowArrow} viewBox="0 0 56 30" aria-hidden="true"><defs><linearGradient id="engineArrowGradient3" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#168bc9"/><stop offset=".55" stopColor="#4fc3f7"/><stop offset="1" stopColor="#7657e8"/></linearGradient></defs><path d="M2 27C12 3 43 3 51 25" fill="none" stroke="url(#engineArrowGradient3)" strokeWidth="1.5"/><path d="m44 21 7 5 2-9" fill="none" stroke="url(#engineArrowGradient3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </article>
            <article className={styles.resultCard}>
              <span>The result?</span>
              <h3>A lead that doesnâ€™t arrive cold.</h3>
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
        <div className={styles.personalOutcome}><span className={styles.personalIcon} aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2"/></svg></span><span>One prospect</span></div>
        <div className={styles.personalOutcome}><span className={styles.personalIcon} aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="7"/><path d="m16 16 5 5"/></svg></span><span>One identified need</span></div>
        <div className={styles.personalOutcome}><span className={styles.personalIcon} aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H5l-3 2 1-5a8.5 8.5 0 1 1 18-5.5Z"/><path d="M8 12h.01M12 12h.01M16 12h.01"/></svg></span><span>More relevant follow-up engagement.</span></div>
      </div>
    </div>
  </div>
</section>
<section className={styles.continuationSection} aria-labelledby="continuationTitle">
  <div className={styles.continuationInner}>
    <span className={styles.pill}>THE LEAD IS CAPTURED. THE ENGAGEMENT CONTINUES.</span>
    <h2 id="continuationTitle">Most lead generation programs stop<br className={styles.continuationDesktopBreak} /> here. <RunningHighlight>We don&apos;t.</RunningHighlight></h2>
    <p className={styles.continuationIntro}>Once a lead has been delivered, traditional CPL programs consider their job complete. The RDIGS Engagement Engine continues working &#8212; qualified prospects can remain within a coordinated engagement sequence across channels such as:</p>
    <div className={styles.continuationCards}>
      <article className={styles.continuationCard}><div className={styles.continuationCardTop}><span className={styles.continuationIcon}><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="13" rx="2"></rect><path d="M8 21h8M12 17v4"></path></svg></span></div><h3>ABM Display</h3><p>Continue surrounding the prospect and their account with relevant brand messaging.</p><div className={styles.continuationRule}></div></article>
      <article className={styles.continuationCard}><div className={styles.continuationCardTop}><span className={styles.continuationIcon}><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m4 7 8 6 8-6"></path></svg></span></div><h3>Email</h3><p>Reinforce key messages and content aligned with the campaign.</p><div className={styles.continuationRule}></div></article>
      <article className={styles.continuationCard}><div className={styles.continuationCardTop}><span className={styles.continuationIcon}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h4l2 5-3 2a14 14 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2C10 19 5 14 4 5a2 2 0 0 1 2-2Z"></path><path d="M14 4a6 6 0 0 1 6 6M14 7a3 3 0 0 1 3 3"></path></svg></span></div><h3>Voice</h3><p>Create human conversations that add context and identify changes in requirement, priority or buying readiness.</p><div className={styles.continuationRule}></div></article>
      <article className={styles.continuationCard}><div className={styles.continuationCardTop}><span className={styles.continuationIcon}><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><circle cx="12" cy="12" r="3"></circle><path d="M12 1v4M12 19v4M1 12h4M19 12h4"></path></svg></span></div><h3>Retargeting</h3><p>Keep your brand visible as prospects continue researching and evaluating their options.</p><div className={styles.continuationRule}></div></article>
    </div>
    <p className={styles.continuationClosing}>This helps maintain momentum between the initial lead interaction and the next meaningful sales conversation.</p>
  </div>
</section>
      <JourneyStages />

      <section className={styles.memorySection} aria-labelledby="memoryTitle">
        <div className={styles.memoryInner}>
          <span className={`${styles.pill} ${styles.memoryEyebrow}`}>MORE THAN LEAD GENERATION</span>
          <h2 id="memoryTitle">Built to create <RunningHighlight>memory and momentum.</RunningHighlight></h2>
          <p className={styles.memoryIntro}>The Engagement Engine isnâ€™t designed simply to increase the number of times someone sees an advertisement. Every stage has a purpose.</p>
          <div className={styles.memoryCards}>
            <article className={styles.memoryCard}><span className={styles.memoryArrow} aria-hidden="true">â†˜</span><h3>Visibility</h3><p>builds familiarity</p></article>
            <article className={styles.memoryCard}><span className={styles.memoryArrow} aria-hidden="true">â†˜</span><h3>Content</h3><p>creates engagement</p></article>
            <article className={styles.memoryCard}><span className={styles.memoryArrow} aria-hidden="true">â†˜</span><h3>Intent</h3><p>helps prioritize</p></article>
            <article className={styles.memoryCard}><span className={styles.memoryArrow} aria-hidden="true">â†˜</span><h3>Human conversations</h3><p>create context</p></article>
            <article className={styles.memoryCard}><span className={styles.memoryArrow} aria-hidden="true">â†˜</span><h3>Qualification</h3><p>identifies needs</p></article>
            <article className={styles.memoryCard}><span className={styles.memoryArrow} aria-hidden="true">â†˜</span><h3>Personalization</h3><p>increases relevance</p></article>
          </div>
          <div className={styles.memoryClosing}><strong>Continued engagement keeps your brand present.</strong></div>
        </div>
      </section>
      <section className={styles.campaignSection} aria-labelledby="campaignTitle">
          <div className={styles.campaignLayout}>
            <div className={styles.campaignIntro}>
              <span className={`${styles.pill} ${styles.campaignEyebrow}`}>BUILT AROUND YOUR CAMPAIGN</span>
              <h2 id="campaignTitle">There is no one-size-fits-all <RunningHighlight>Engagement Engine.</RunningHighlight></h2>
              <p className={styles.campaignDescription}>Every program can be configured around your market, objectives, audience and sales process.</p>
              <p className={styles.campaignLabel}>PROGRAMS MAY COMBINE</p>
              <div className={styles.campaignChannels} aria-label="Available program channels">
                <span>ABM Display</span><span>Content Syndication</span><span>Telemarketing</span><span>Intent</span><span>Email</span><span>Retargeting</span>
              </div>
              <p className={styles.campaignNote}>Or we can build a custom channel mix around your specific campaign requirements.</p>
            </div>
            <article className={styles.campaignCard} aria-label="Typical program details">
              <div className={styles.campaignCardHeader}><span>TYPICAL PROGRAM</span><span className={styles.campaignDiamond} aria-hidden="true">â—†</span></div>
              <dl className={styles.campaignDetails}>
                <div><dt>DURATION</dt><dd>8â€“12+ weeks</dd></div>
                <div><dt>AUDIENCE</dt><dd>Custom ICP and/or Target Account List</dd></div>
                <div><dt>CHANNELS</dt><dd>Configured by campaign</dd></div>
                <div><dt>LEAD QUALIFICATION</dt><dd>Custom qualification framework</dd></div>
                <div><dt>INVESTMENT</dt><dd>Based on audience, channels, lead requirements and program scope</dd></div>
              </dl>
              <div className={styles.campaignPrice}>
                <div><span>STARTING FROM</span><strong>$10,000</strong></div>
                <a href="#engagement-campaign-request" className={styles.campaignCta}>Build Your Program <span aria-hidden="true">â†’</span></a>
              </div>
            </article>
          </div>
        </section>
        <section className={styles.whySection} aria-labelledby="whyTitle">
          <div className={styles.whyInner}>
            <span className={`${styles.pill} ${styles.whyEyebrow}`}>WHY RDIGS?</span>
            <h2 id="whyTitle">Demand generation with <RunningHighlight>more behind<br className={styles.whyDesktopBreak} /> the lead.</RunningHighlight></h2>
            <p className={styles.whyIntro}>We believe the value of a demand generation partner shouldnâ€™t be measured only by how many leads they deliver. It should be measured by how effectively they help create meaningful engagement with the market.</p>
            <div className={styles.whyCards}>
              <article className={styles.whyCard}><span className={styles.whyIcon} aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg></span><h3>Human + Digital</h3><p>Combine real conversations with digital engagement rather than relying on one channel alone.</p></article>
              <article className={styles.whyCard}><span className={styles.whyIcon} aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></svg></span><h3>Data-Driven Targeting</h3><p>Build programs around clearly defined accounts, audiences and buyer personas.</p></article>
              <article className={styles.whyCard}><span className={styles.whyIcon} aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><path d="M19.4 15A8 8 0 0 1 5 19M4.6 9A8 8 0 0 1 19 5M12 12a4 4 0 0 1 4-4M12 12a4 4 0 0 0 4 4M12 12a4 4 0 0 1-4 4M12 12a4 4 0 0 0-4-4M12 2v2M22 12h-2M4 12H2" /></svg></span><h3>Intent-Fused</h3><p>Use signals of interest to help prioritize relevant accounts and prospects.</p></article>
              <article className={styles.whyCard}><span className={styles.whyIcon} aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="4" width="14" height="18" rx="2" /><path d="M9 4.5V3h6v1.5M8 13l2.5 2.5L16 10" /></svg></span><h3>Qualification With Context</h3><p>Go beyond basic contact information to understand business needs and priorities.</p></article>
              <article className={styles.whyCard}><span className={styles.whyIcon} aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="2" width="6" height="5" rx="1" /><rect x="2" y="17" width="6" height="5" rx="1" /><rect x="16" y="17" width="6" height="5" rx="1" /><path d="M12 7v5M5 17v-3h14v3" /></svg></span><h3>Multi-Channel Engagement</h3><p>Connect display, content, email and voice throughout the campaign.</p></article>
              <article className={styles.whyCard}><span className={styles.whyIcon} aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></svg></span><h3>Transparent Delivery</h3><p>Clear campaign reporting and visibility into performance throughout the program.</p></article>
            </div>
          </div>
        </section>
        <EngagementCampaignForm />
        <section className={styles.campaignContactSection} aria-label="Contact our demand generation team">
          <div className={styles.campaignContactInner}>
            <h2>Let’s build an Engagement Engine around your next campaign.</h2>
            <a href="/contact">Talk to Our Demand Generation Team <span aria-hidden="true">→</span></a>
          </div>
        </section>
</main>
  );
}




