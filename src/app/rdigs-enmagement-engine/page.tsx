import Link from "next/link";
import RunningHighlight from "./RunningHighlight";

export default function RdigsEngagementEnginePage() {
  return (
    <main className="text-[#111]">
      <section className="relative isolate overflow-hidden bg-gradient-to-r from-white via-[#e8f8ff] to-[#16a9e6]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_76%_35%,rgba(255,255,255,0.96),transparent_35%),radial-gradient(ellipse_at_53%_80%,rgba(255,255,255,0.45),transparent_42%)]" />
        <div className="mx-auto grid min-h-[650px] max-w-[1320px] items-center gap-4 px-6 py-14 md:grid-cols-[1.08fr_0.92fr] md:px-10 lg:py-16">
          <div className="z-10 max-w-[690px]">
            <span className="inline-flex rounded-full border border-[#32a8e9] bg-white/80 px-5 py-2 text-lg font-semibold shadow-[0_4px_16px_rgba(22,36,61,0.12)]">The RDIGS Engagement Engine</span>
            <h1 className="mt-6 text-[42px] leading-[1.12] tracking-[-0.04em] sm:text-[52px] lg:text-[56px]">
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
            <Link href="/contact" className="mt-7 inline-flex rounded-full border border-[#168fe0] bg-white/75 px-5 py-2 text-lg shadow-sm transition hover:bg-white hover:shadow-md">Build Your Engagement Engine</Link>
          </div>
          <div className="hidden min-h-[470px] md:block" aria-hidden="true" />
        </div>
      </section>

      <section className="bg-[#f4f4f4] px-6 py-14 md:px-10 md:py-16">
        <div className="mx-auto max-w-[1040px]">
          <div className="text-center">
            <span className="inline-flex rounded-full border border-[#32a8e9] bg-white px-6 py-2 text-lg font-semibold shadow-[0_4px_16px_rgba(22,36,61,0.12)]">The Problem With Traditional Lead Generation</span>
            <h2 className="mt-5 text-[32px] font-bold leading-tight tracking-[-0.035em] sm:text-[40px]">A Lead Doesn’t Mean <RunningHighlight>They Remember You</RunningHighlight></h2>
          </div>
          <div className="mt-8 grid items-center gap-10 md:grid-cols-[1.55fr_0.9fr] md:gap-14">
            <div className="text-[17px] leading-[1.4]">
              <p>Traditional lead generation often works in isolation.</p>
              <p className="mt-5">A prospect downloads an asset.<br />Their details are captured.<br />The lead is delivered to sales.</p>
              <p className="mt-4">And then?</p>
              <p className="mt-3">Your sales team reaches out to someone who may barely remember the content they engaged with - let alone the company behind it.</p>
              <p className="mt-4">That creates a fundamental disconnect between <strong>lead generation and buyer engagement.</strong></p>
              <p className="mt-3">The RDIGS Engagement Engine is designed to <span className="border-b-2 border-[#27a7e4] pb-1">close that gap.</span></p>
            </div>
            <div className="hidden min-h-[370px] md:block" aria-hidden="true" />
          </div>
        </div>
      </section>
    </main>
  );
}
