import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ProblemAwareLeadGenerationPage() {
    return (
        <div className="w-full bg-white font-sans text-[#16243D]">
            <style>{`
                .problem-aware-page {
                    padding: 0 0 55px;
                    position: relative;
                }
                .problem-container {
                    width: 100%;
                    max-width: 1320px;
                    margin: auto;
                    padding: 0 35px;
                }
                .problem-hero {
                    position: relative;
                    padding: 35px 0 70px;
                    background: url('/acc-base-marketting/BG ABM.jpg');
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                    overflow: hidden;
                }
                .problem-hero .row {
                    --bs-gutter-x: 0rem;
                }
                .hero-content {
                    padding-right: 10px;
                }
                .hero-image-wrapper {
                    text-align: right;
                }
                .hero-badge {
                    position: relative;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    height: 46px;
                    padding: 0 28px;
                    border-radius: 999px;
                    color: #ffffff;
                    font-size: 14px;
                    font-weight: 700;
                    overflow: hidden;
                    border: none;
                    margin-bottom: 16px;
                    background: linear-gradient(90deg, #1CB7E9 0%, #2A95D3 38%, #2E7EE4 68%, #AFC5F3 100%);
                    box-shadow: inset 0 1px 0 rgba(255,255,255,0.18), 0 2px 6px rgba(0,0,0,0.08);
                }
                .hero-badge::before {
                    content: '';
                    position: absolute;
                    width: 120px;
                    height: 120px;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.35) 32%, rgba(255,255,255,0.08) 58%, transparent 75%);
                    right: -42px;
                    bottom: -78px;
                }
                .hero-title {
                    font-size: 46px;
                    line-height: 1.18;
                    font-weight: 700;
                    color: #3099D5;
                    margin-bottom: 18px;
                    max-width: 620px;
                }
                .hero-desc {
                    font-size: 17px;
                    line-height: 1.8;
                    color: #5F6B7A;
                    max-width: 580px;
                    margin-bottom: 26px;
                }
                .hero-btns {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    flex-wrap: wrap;
                }
                .hero-btn {
                    height: 46px;
                    padding: 0 8px 0 18px;
                    border-radius: 999px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    text-decoration: none;
                    font-size: 14px;
                    font-weight: 600;
                    position: relative;
                    overflow: hidden;
                    transition: 0.3s ease;
                    color: #ffffff;
                    background: linear-gradient(90deg, #2D99CD 0%, #4C9FBE 25%, #739FAF 50%, #8EA1A9 75%, #9CA2A5 100%);
                    border: none;
                    box-shadow: 0 3px 8px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.10);
                }
                .hero-btn span {
                    width: 28px;
                    height: 28px;
                    border-radius: 50%;
                    background: #ffffff;
                    color: #2D99CD;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-left: 12px;
                    font-size: 13px;
                    font-weight: 700;
                }
                .hero-btn:hover {
                    color: #fff;
                    transform: translateY(-2px);
                }
                .hero-image {
                    width: 100%;
                    max-width: 456px;
                    display: block;
                    margin-left: 60px;
                }
                .sales-section {
                    padding: 35px 0 20px;
                }
                .sales-image {
                    width: 100%;
                    max-width: 440px;
                }
                .sales-title {
                    color: #3099D5;
                    font-size: 48px;
                    font-weight: 700;
                    margin-bottom: 10px;
                }
                .sales-desc {
                    font-size: 20px;
                    font-weight: 500;
                    margin-bottom: 20px;
                }
                .sales-points {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                .sales-points li {
                    position: relative;
                    background: linear-gradient(90deg, #DDF3FF 0%, #EEF8FF 48%, #FFFFFF 100%);
                    border: 1px solid #CFE9F7;
                    border-radius: 14px;
                    padding: 15px 18px 15px 58px;
                    margin-bottom: 16px;
                    font-size: 15px;
                    color: #4F5D6B;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    min-height: 62px;
                    box-shadow: 0 4px 12px rgba(48,153,213,0.08);
                    overflow: hidden;
                    transition: 0.3s ease;
                }
                .sales-points li::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 54px;
                    height: 100%;
                    background: linear-gradient(180deg, #4AB6F2 0%, #2D99CD 100%);
                }
                .sales-points li::after {
                    content: '✓';
                    position: absolute;
                    left: 20px;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 16px;
                    height: 16px;
                    color: #ffffff;
                    font-size: 14px;
                    font-weight: 700;
                }
                .sales-points li:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 10px 22px rgba(48,153,213,0.14);
                }
                .why-section {
                    margin-top: 70px;
                    position: relative;
                }
                .why-wrapper {
                    background: #ECECEC;
                    border-radius: 26px;
                    padding: 30px 40px 115px;
                    position: relative;
                    overflow: visible;
                }
                .why-title {
                    text-align: center;
                    color: #2D8FD5;
                    font-size: 48px;
                    line-height: 1.1;
                    font-weight: 700;
                    margin-bottom: 14px;
                    letter-spacing: -1px;
                }
                .why-title span {
                    color: #9BC7F3;
                    font-weight: 500;
                }
                .why-desc {
                    text-align: center;
                    max-width: 900px;
                    margin: auto;
                    font-size: 22px;
                    color: #4D4D4D;
                    font-weight: 400;
                }
                .why-cards {
                    position: relative;
                    margin-top: -78px;
                    z-index: 5;
                    margin-bottom: 30px;
                    display: flex;
                    flex-wrap: wrap;
                }
                .why-card {
                    position: relative;
                    background: #DCE7F2;
                    border-radius: 22px;
                    padding: 65px 21px 28px;
                    text-align: center;
                    width: 100%;
                    min-height: 361px;
                    overflow: visible;
                    border-top: 3px solid #2C8CFF;
                    transition: 0.3s ease;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .why-card.card-1 {
                    background: #DCE5F0;
                }
                .why-card.card-2 {
                    background: #DCE7EE;
                }
                .why-card.card-3 {
                    background: #E7E2EF;
                    border-top: 3px solid #7E61FF;
                }
                .card-icon {
                    width: 108px;
                    height: 108px;
                    background: #F3F3F3;
                    border-radius: 50%;
                    position: absolute;
                    top: -54px;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 4px solid #E9E9E9;
                    box-shadow: 0 8px 14px rgba(0,0,0,0.08);
                }
                .card-icon img {
                    width: 48px;
                }
                .card-number {
                    font-size: 28px;
                    font-weight: 600;
                    color: #0a53f4;
                    margin-bottom: 10px;
                }
                .card-title {
                    font-size: 25px;
                    font-weight: 700;
                    color: #111;
                    min-height: 63px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 10px;
                }
                .card-line {
                    width: 58px;
                    height: 3px;
                    background: #2D8FD5;
                    border-radius: 10px;
                    margin-bottom: 8px;
                    flex-shrink: 0;
                }
                .card-3 .card-line {
                    background: #7E61FF;
                }
                .card-desc {
                    font-size: 18px;
                    color: #444;
                    font-weight: 400;
                    margin: 0;
                    margin-top: auto;
                    display: flex;
                    align-items: flex-start;
                    justify-content: center;
                    min-height: 117px;
                    max-width: 290px;
                }
                .why-card:hover {
                    transform: translateY(-6px);
                }
                .buyer-journey-section {
                    padding: 5px 0;
                    background: #F6F6F6;
                    overflow: hidden;
                }
                .buyer-journey-wrapper {
                    width: 100%;
                }
                .buyer-journey-top {
                    text-align: center;
                    margin-bottom: 8px;
                    margin-top: 30px;
                }
                .journey-badge {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    padding: 10px 26px;
                    border-radius: 999px;
                    font-size: 20px;
                    font-weight: 700;
                    color: #fff;
                    background: linear-gradient(90deg, #6FD6FF 0%, #237BDE 100%);
                    margin-bottom: 12px;
                    box-shadow: 0 4px 12px rgba(35,123,222,0.18);
                }
                .journey-title {
                    font-size: 48px;
                    line-height: 1.05;
                    font-weight: 700;
                    color: #2374BB;
                    margin: 0;
                }
                .buyer-journey-image-box {
                    width: 100%;
                    border-radius: 26px;
                    overflow: hidden;
                }
                .buyer-journey-image {
                    width: 100%;
                    display: block;
                    border-radius: 26px;
                }
                .process-section {
                    padding: 40px 0 35px;
                    overflow: hidden;
                }
                .process-top {
                    text-align: center;
                    margin-bottom: 24px;
                }
                .process-badge {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    height: 34px;
                    padding: 0 34px;
                    border-radius: 999px;
                    background: linear-gradient(90deg, #27C8F7 0%, #0D66E8 100%);
                    color: #fff;
                    font-size: 14px;
                    font-weight: 700;
                    position: relative;
                    box-shadow: inset 0 1px 0 rgba(255,255,255,0.45), 0 4px 10px rgba(13,102,232,0.18);
                }
                .process-badge::before {
                    content: '';
                    position: absolute;
                    inset: 3px;
                    border-radius: 999px;
                    background: linear-gradient(90deg, rgba(255,255,255,0.18), rgba(255,255,255,0));
                }
                .process-title {
                    font-size: 32px;
                    line-height: 1.15;
                    font-weight: 700;
                    color: #3099D5;
                    margin: 0px 0 0;
                }
                .process-steps {
                    display: flex;
                    justify-content: center;
                    gap: 32px;
                    flex-wrap: nowrap;
                    margin-top: 24px;
                }
                .process-card {
                    width: 207px;
                    min-height: 190px;
                    background: #EEF5FF;
                    border-radius: 20px;
                    padding: 38px 18px 26px;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }
                .process-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 3px;
                    background: #216DFF;
                    border-radius: 30px 30px 0 0;
                }
                .process-card h3 {
                    font-size: 18px;
                    font-weight: 700;
                    color: #111;
                    min-height: 58px;
                    margin-bottom: 18px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .process-card h3::after {
                    content: '';
                    position: absolute;
                    width: 38px;
                    height: 3px;
                    background: #216DFF;
                    border-radius: 10px;
                    margin-top: 91px;
                }
                .process-card p {
                    font-size: 15px;
                    margin: 0;
                    margin-top: 34px;
                }
                .result-bar {
                    max-width: 668px;
                    margin: 28px auto 0;
                    height: 47px;
                    border-radius: 999px;
                    background: linear-gradient(50deg, #20a7cc 36%, #1E7BE8 45%, #173BE6 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    color: #fff;
                    font-size: 16px;
                    font-weight: 700;
                    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 6px 14px rgba(17, 85, 255, 0.14);
                }
                .result-bar::after {
                    content: '';
                    position: absolute;
                    right: 0;
                    top: 0;
                    width: 70px;
                    height: 100%;
                    background: linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.95));
                    border-radius: 0 999px 999px 0;
                }
                .rocket-icon {
                    position: absolute;
                    left: -38px;
                    top: -39px;
                    font-size: 86px;
                    transform: rotate(-2deg);
                }
                .receive-section {
                    background: #EEF3F8;
                    padding: 32px 0 58px;
                    overflow: hidden;
                }
                .receive-title {
                    text-align: center;
                    font-size: 45px;
                    font-weight: 700;
                    color: #2378BF;
                    margin-bottom: 42px;
                }
                .receive-grid {
                    max-width: 975px;
                    margin: auto;
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 26px 28px;
                }
                .receive-card {
                    background: #DCEAF6;
                    border: 2px solid #4AA8F5;
                    border-radius: 16px;
                    min-height: 126px;
                    padding: 18px 33px;
                    display: flex;
                    align-items: center;
                    gap: 18px;
                    position: relative;
                    box-shadow: 8px 10px 18px rgba(0, 0, 0, 0.04);
                }
                .receive-number {
                    width: 50px;
                    height: 50px;
                    min-width: 50px;
                    border-radius: 50%;
                    background: #F4F4F4;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 20px;
                    font-weight: 700;
                    color: #2477BF;
                }
                .receive-content h3 {
                    font-size: 22px;
                    font-weight: 600;
                    color: #000;
                    margin-bottom: 8px;
                }
                .receive-content p {
                    font-size: 18px;
                    font-weight: 400;
                    color: #2E2E2E;
                    margin: 0;
                }
                .cta-section {
                    padding-bottom: 30px;
                    margin-top: 51px;
                }
                .cta-box {
                    background: #1f79c7;
                    border-radius: 32px;
                    overflow: visible;
                    padding: 10px 42px;
                    position: relative;
                }
                .cta-title {
                    font-size: 40px;
                    font-weight: 600;
                    color: #fff;
                    margin-bottom: 19px;
                }
                .cta-desc {
                    font-size: 19px;
                    color: rgba(255,255,255,.92);
                    margin-bottom: 19px;
                }
                .cta-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    background: #fff;
                    color: #1f79c7;
                    text-decoration: none;
                    border-radius: 100px;
                    padding: 16px 34px;
                    font-size: 16px;
                    font-weight: 800;
                }
                .cta-image {
                    max-width: 72%;
                    position: relative;
                    z-index: 2;
                }
                
                @media(max-width:991px){
                    .problem-container { padding: 0 20px; }
                    .problem-hero { padding: 35px 0 50px; }
                    .hero-content { text-align: center; margin-bottom: 40px; padding-right: 0; }
                    .hero-title { font-size: 34px; margin: auto auto 16px; }
                    .hero-desc { margin: auto auto 24px; font-size: 16px; }
                    .hero-btns { justify-content: center; }
                    .hero-image-wrapper { text-align: center; }
                    .hero-image { max-width: 360px; margin: auto; }
                    .sales-section { text-align: center; }
                    .sales-image { margin-bottom: 30px; }
                    .sales-title { font-size: 30px; }
                    .sales-desc { font-size: 16px; }
                    .sales-points li { text-align: left; }
                    .why-card { margin-bottom: 80px; }
                    .journey-title { font-size: 40px; }
                    .journey-badge { font-size: 17px; padding: 9px 22px; }
                    .buyer-journey-image-box, .buyer-journey-image { border-radius: 18px; }
                    .buyer-journey-section { padding: 50px 0; }
                    .buyer-journey-top { margin-bottom: 28px; }
                    .process-steps { flex-wrap: wrap; justify-content: center; }
                    .process-card { width: 48%; }
                    .result-bar { height: auto; padding: 16px 22px 16px 70px; font-size: 13px; line-height: 1.5; }
                    .rocket-icon { font-size: 56px; left: -10px; top: -2px; }
                    .receive-title { font-size: 42px; }
                    .receive-grid { grid-template-columns: 1fr; max-width: 700px; }
                    .receive-content h3 { font-size: 24px; }
                    .receive-content p { font-size: 16px; }
                }
                
                @media(max-width:576px){
                    .hero-title { font-size: 28px; }
                    .hero-desc { font-size: 14px; }
                    .hero-btn { width: 100%; }
                    .sales-title { font-size: 26px; }
                    .sales-desc { font-size: 14px; }
                    .sales-points li { font-size: 14px; padding: 14px 14px 14px 54px; }
                    .why-title { font-size: 28px; }
                    .why-desc { font-size: 14px; }
                    .card-title { font-size: 20px; }
                    .card-desc { font-size: 14px; }
                    .buyer-journey-section { padding: 40px 0; }
                    .journey-title { font-size: 30px; }
                    .journey-badge { font-size: 14px; padding: 8px 18px; }
                    .buyer-journey-image-box, .buyer-journey-image { border-radius: 14px; }
                    .process-section { padding: 35px 0 20px; }
                    .process-title { font-size: 24px; }
                    .process-card { width: 100%; min-height: auto; }
                    .process-card h3 { font-size: 20px; }
                    .process-card p { font-size: 14px; }
                    .result-bar { border-radius: 20px; padding: 18px 18px 18px 60px; font-size: 12px; }
                    .rocket-icon { font-size: 48px; left: -8px; top: 4px; }
                    .receive-section { padding: 40px 0; }
                    .receive-title { font-size: 32px; margin-bottom: 28px; }
                    .receive-card { min-height: auto; padding: 20px 18px; gap: 14px; }
                    .receive-number { width: 42px; height: 42px; min-width: 42px; font-size: 18px; }
                    .receive-content h3 { font-size: 20px; }
                    .receive-content p { font-size: 14px; line-height: 1.6; }
                    .cta-content h2 { font-size: 26px; }
                    .cta-image img { width: 120px; }
                }
            `}</style>

            <section className="problem-aware-page">
                {/* HERO SECTION */}
                <section className="problem-hero">
                    <div className="problem-container">
                        <div className="flex flex-col lg:flex-row items-center">
                            <div className="lg:w-1/2 hero-content w-full">
                                <div className="hero-badge">
                                    Problem-Aware Lead Generation
                                </div>
                                <h1 className="hero-title">
                                    Get Into Deals Before Your Competitors Show Up
                                </h1>
                                <p className="hero-desc">
                                    Engage buyers before they enter the shortlist stage.
                                    Identify problem-aware prospects early and influence
                                    decisions before they become pricing conversations.
                                </p>
                                <div className="hero-btns">
                                    <Link href="#" className="hero-btn">
                                        Book a Demo
                                        <span>↗</span>
                                    </Link>
                                    <Link href="#" className="hero-btn">
                                        Talk to expert
                                        <span>☎</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
                                <div className="hero-image-wrapper">
                                    <Image
                                        src="/problem-aware/Problem-Aware Lead Generation.png"
                                        alt="Problem-Aware Lead Generation Hero"
                                        width={456}
                                        height={456}
                                        className="hero-image"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="problem-container">
                    {/* SALES SECTION */}
                    <section className="sales-section">
                        <div className="flex flex-col lg:flex-row items-center gap-8">
                            <div className="lg:w-5/12 text-center w-full">
                                <Image
                                    src="/problem-aware/Problem-Aware Lead Generation SALE.png"
                                    alt="Entering Sales Deals Too Late?"
                                    width={440}
                                    height={440}
                                    className="sales-image mx-auto"
                                />
                            </div>
                            <div className="lg:w-7/12 w-full">
                                <h2 className="sales-title">
                                    Entering Sales Deals Too Late?
                                </h2>
                                <p className="sales-desc">
                                    Most buyers are already deep into their decision
                                    journey before talking to sales. By then:
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    <li style={{ marginBottom: '18px' }}>
                                        <div style={{
                                            display: 'inline-block',
                                            minWidth: '380px',
                                            padding: '16px 24px',
                                            borderRadius: '14px',
                                            fontSize: '17px',
                                            fontWeight: 500,
                                            color: '#1f2937',
                                            background: 'linear-gradient(to right, rgba(37,99,235,0.24) 0%, rgba(37,99,235,0.16) 22%, rgba(37,99,235,0.10) 38%, rgba(37,99,235,0.04) 52%, rgba(255,255,255,0) 72%)'
                                        }}>
                                            <span style={{ marginRight: '10px' }}>●</span>
                                            <span>Shortlists already exist</span>
                                        </div>
                                    </li>
                                    <li style={{ marginBottom: '18px' }}>
                                        <div style={{
                                            display: 'inline-block',
                                            minWidth: '380px',
                                            padding: '16px 24px',
                                            borderRadius: '14px',
                                            fontSize: '17px',
                                            fontWeight: 500,
                                            color: '#1f2937',
                                            background: 'linear-gradient(to right, rgba(37,99,235,0.24) 0%, rgba(37,99,235,0.16) 22%, rgba(37,99,235,0.10) 38%, rgba(37,99,235,0.04) 52%, rgba(255,255,255,0) 72%)'
                                        }}>
                                            <span style={{ marginRight: '10px' }}>●</span>
                                            <span>Competitors already have influence</span>
                                        </div>
                                    </li>
                                    <li style={{ marginBottom: '18px' }}>
                                        <div style={{
                                            display: 'inline-block',
                                            minWidth: '380px',
                                            padding: '16px 24px',
                                            borderRadius: '14px',
                                            fontSize: '17px',
                                            fontWeight: 500,
                                            color: '#1f2937',
                                            background: 'linear-gradient(to right, rgba(37,99,235,0.24) 0%, rgba(37,99,235,0.16) 22%, rgba(37,99,235,0.10) 38%, rgba(37,99,235,0.04) 52%, rgba(255,255,255,0) 72%)'
                                        }}>
                                            <span style={{ marginRight: '10px' }}>●</span>
                                            <span>Conversations become price-driven</span>
                                        </div>
                                    </li>
                                    <li style={{ marginBottom: '18px' }}>
                                        <div style={{
                                            display: 'inline-block',
                                            minWidth: '380px',
                                            padding: '16px 24px',
                                            borderRadius: '14px',
                                            fontSize: '17px',
                                            fontWeight: 500,
                                            color: '#1f2937',
                                            background: 'linear-gradient(to right, rgba(37,99,235,0.24) 0%, rgba(37,99,235,0.16) 22%, rgba(37,99,235,0.10) 38%, rgba(37,99,235,0.04) 52%, rgba(255,255,255,0) 72%)'
                                        }}>
                                            <span style={{ marginRight: '10px' }}>●</span>
                                            <span>Winning becomes harder</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>

                {/* WHY SECTION */}
                <section className="why-section px-4">
                    <div className="why-wrapper max-w-[1150px] mx-auto">
                        <h2 className="why-title">
                            Why Engage Earlier?
                        </h2>
                        <p className="why-desc">
                            Early engagement gives you the opportunity to influence the
                            conversation, build credibility, and improve your chances
                            of winning the deal.
                        </p>
                    </div>
                    <div className="why-cards max-w-[1150px] mx-auto flex flex-col md:flex-row justify-center gap-6 md:gap-8 px-4">
                        {/* CARD 1 */}
                        <div className="w-full md:w-[31%] flex">
                            <div className="why-card card-1 w-full">
                                <div className="card-icon">
                                    <Image src="/problem-aware/Engage Earlier-01.png" alt="Engage Earlier 1" width={48} height={48} />
                                </div>
                                <div className="card-number">01</div>
                                <h3 className="card-title">
                                    Shape Problem<br />
                                    Understanding
                                </h3>
                                <div className="card-line"></div>
                                <p className="card-desc">
                                    Early engagement allows
                                    you to shape how the
                                    problem is understood.
                                </p>
                            </div>
                        </div>
                        {/* CARD 2 */}
                        <div className="w-full md:w-[31%] flex">
                            <div className="why-card card-2 w-full">
                                <div className="card-icon">
                                    <Image src="/problem-aware/Engage Earlier-03.png" alt="Engage Earlier 2" width={48} height={48} />
                                </div>
                                <div className="card-number">02</div>
                                <h3 className="card-title">
                                    Build Trust Early
                                </h3>
                                <div className="card-line"></div>
                                <p className="card-desc">
                                    Build trust before
                                    competitors are involved.
                                </p>
                            </div>
                        </div>
                        {/* CARD 3 */}
                        <div className="w-full md:w-[31%] flex">
                            <div className="why-card card-3 w-full">
                                <div className="card-icon">
                                    <Image src="/problem-aware/Engage Earlier-02.png" alt="Engage Earlier 3" width={48} height={48} />
                                </div>
                                <div className="card-number">03</div>
                                <h3 className="card-title">
                                    Improve Your Odds
                                </h3>
                                <div className="card-line"></div>
                                <p className="card-desc">
                                    Increase your chances
                                    of making the shortlist
                                    and winning the deal.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* BUYER JOURNEY SECTION */}
                <section className="buyer-journey-section">
                    <div className="container mx-auto px-4 max-w-[1320px]">
                        <div className="buyer-journey-wrapper">
                            {/* TOP CONTENT */}
                            <div className="buyer-journey-top">
                                <div className="journey-badge">
                                    Where This Fits
                                </div>
                                <h2 className="journey-title">
                                    The Buyer Journey
                                </h2>
                            </div>

                            {/* MAIN IMAGE */}
                            <div className="buyer-journey-image-box">
                                <Image
                                    src="/problem-aware/The Buyer Journey Img 2 (2).png"
                                    alt="The Buyer Journey"
                                    width={1200}
                                    height={600}
                                    className="buyer-journey-image object-contain w-full"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* PROCESS SECTION */}
                <section className="process-section">
                    <div className="problem-container">
                        {/* TOP */}
                        <div className="process-top">
                            <div className="process-badge">
                                Our Process
                            </div>
                            <h2 className="process-title">
                                How We Generate Problem-Aware Leads
                            </h2>
                        </div>

                        {/* CARDS */}
                        <div className="process-steps">
                            {/* CARD */}
                            <div className="process-card">
                                <h3>Real Conversations</h3>
                                <p>We start meaningful conversations with the right people</p>
                            </div>

                            {/* CARD */}
                            <div className="process-card">
                                <h3>Identify symptoms & explore impact</h3>
                                <p>We uncover what they&apos;re experiencing and how it&apos;s affecting their business.</p>
                            </div>

                            {/* CARD */}
                            <div className="process-card">
                                <h3>Understand why the issue is difficult to fix</h3>
                                <p>We dig into the root causes and internal challenges holding them back.</p>
                            </div>

                            {/* CARD */}
                            <div className="process-card">
                                <h3>Confirm relevance & agree a call-back</h3>
                                <p>We confirm fit and set up a call back to discuss next steps.</p>
                            </div>
                        </div>

                        {/* RESULT */}
                        <div className="result-bar">
                            {/* <span className="rocket-icon">🚀</span> */}
                            The Result: Problem-aware leads who are open to help shaping their solution.
                        </div>
                    </div>
                </section>

                {/* RECEIVE SECTION */}
                <section className="receive-section">
                    <div className="problem-container">
                        {/* TITLE */}
                        <h2 className="receive-title">
                            What You Receive
                        </h2>

                        {/* GRID */}
                        <div className="receive-grid">
                            {/* CARD 1 */}
                            <div className="receive-card">
                                <div className="receive-number">01</div>
                                <div className="receive-content">
                                    <h3>Confirmed Conversation</h3>
                                    <p>A contact who has agreed<br />to a conversation.</p>
                                </div>
                            </div>

                            {/* CARD 2 */}
                            <div className="receive-card">
                                <div className="receive-number">02</div>
                                <div className="receive-content">
                                    <h3>Lead Handover Sheet</h3>
                                    <p>Detailed notes capturing<br />what was discussed on the call.</p>
                                </div>
                            </div>

                            {/* CARD 3 */}
                            <div className="receive-card">
                                <div className="receive-number">03</div>
                                <div className="receive-content">
                                    <h3>Problem Context</h3>
                                    <p>Clear context on the problem<br />they are experiencing.</p>
                                </div>
                            </div>

                            {/* CARD 4 */}
                            <div className="receive-card">
                                <div className="receive-number">04</div>
                                <div className="receive-content">
                                    <h3>Qualified Opportunity</h3>
                                    <p>A problem-aware lead<br />ready for your next step.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cta-section">
                    <div className="container mx-auto px-4 max-w-[1131px]">
                        <div className="cta-box bg-gradient-to-r from-[#1D75D9] to-[#1968C6] rounded-[28px] py-4 px-10 overflow-hidden">
                            <div className="flex flex-col lg:flex-row items-center">
                                {/* LEFT */}
                                <div className="lg:w-1/2 w-full lg:pr-8 text-center lg:text-left">
                                    <h2 className="text-[32px] md:text-[44px] leading-[1.12] font-bold text-white mb-[18px]">
                                        Engage Buyers Earlier. <br />
                                        Win More Deals.
                                    </h2>
                                    <p className="text-[16px] md:text-[18px] leading-[1.7] text-white max-w-[520px] mb-[22px] mx-auto lg:mx-0">
                                        Connect with decision makers before your competitors influence the conversation.
                                    </p>

                                    {/* BUTTON */}
                                    <Link href="#" className="inline-flex items-center justify-center gap-1 h-[30px] px-2.5 rounded-full no-underline text-[11px] font-bold tracking-[0.2px] uppercase text-white bg-gradient-to-r from-white via-[#5EA9F4] via-[#1229CD] via-[#1229CD] via-[#5EA9F4] to-white border border-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_1px_2px_rgba(0,0,0,0.18)] w-max mx-auto lg:mx-0">
                                        <span className="text-white leading-none">
                                            SCHEDULE A CONSULTATION
                                        </span>
                                        <span className="w-[15px] h-[15px] rounded-full bg-white flex items-center justify-center text-[#2E7ED9] text-[9px] shrink-0 ml-1">
                                            →
                                        </span>
                                    </Link>
                                </div>

                                {/* RIGHT */}
                                <div className="lg:w-1/2 w-full text-center mt-8 lg:mt-0">
                                    <Image
                                        src="/problem-aware/Win More Deals.png"
                                        className="cta-image w-full max-w-[420px] mx-auto block"
                                        alt="Win More Deals"
                                        width={420}
                                        height={300}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
}
