import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function DataVerificationPage() {
    return (
        <div className="w-full bg-white font-sans text-[#16243D]">
            <style>{`
                /* =========================================================
                DATA VERIFICATION HERO SECTION
                ========================================================= */
                
                .data-verification-section {
                    position: relative;
                    padding: 0px 0 30px;
                    background: url('/acc-base-marketting/BG ABM.jpg');
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                    overflow: hidden;
                }
                /* =========================================================
                WRAPPER
                ========================================================= */
                
                .data-verification-wrapper {
                    position: relative;
                    overflow: hidden;
                }
                /* =========================================================
                LEFT CONTENT
                ========================================================= */
                
                .data-content {
                    position: relative;
                    z-index: 5;
                    padding: 21px 10px 50px 0;
                }
                /* =========================================================
                BADGE
                ========================================================= */
                
                .data-badge {
                    position: relative;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    height: 48px;
                    padding: 0 28px;
                    border-radius: 999px;
                    color: #ffffff;
                    font-size: 15px;
                    font-weight: 700;
                    overflow: hidden;
                    border: none;
                    margin-bottom: 18px;
                    background: linear-gradient( 90deg, #1CB7E9 0%, #2A95D3 38%, #2E7EE4 68%, #AFC5F3 100%);
                    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.18), 0 2px 6px rgba(0, 0, 0, 0.08);
                }
                
                .data-badge::before {
                    content: '';
                    position: absolute;
                    width: 120px;
                    height: 120px;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.35) 32%, rgba(255, 255, 255, 0.08) 58%, transparent 75%);
                    right: -42px;
                    bottom: -78px;
                }
                /* =========================================================
                TITLE
                ========================================================= */
                
                .data-title {
                    font-size: 48px;
                    font-weight: 700;
                    color: #3099D5;
                    margin-bottom: 20px;
                    max-width: 720px;
                }
                /* =========================================================
                DESC
                ========================================================= */
                
                .data-desc {
                    font-size: 18px;
                    line-height: 1.8;
                    color: #5F6B7A;
                    max-width: 680px;
                    margin-bottom: 28px;
                }
                /* =========================================================
                BUTTON
                ========================================================= */
                
                .data-btn {
                    height: 48px;
                    padding: 0 8px 0 20px;
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
                    background: linear-gradient( 90deg, #2D99CD 0%, #4C9FBE 25%, #739FAF 50%, #8EA1A9 75%, #9CA2A5 100%);
                    border: none;
                    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.10);
                }
                
                .data-btn:hover {
                    color: #ffffff;
                    transform: translateY(-2px);
                }
                
                .data-btn-icon {
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    background: #ffffff;
                    color: #2D99CD;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-left: 14px;
                    font-size: 13px;
                    font-weight: 700;
                    flex-shrink: 0;
                }
                /* =========================================================
                RIGHT IMAGE
                ========================================================= */
                
                .data-image-box {
                    position: relative;
                    z-index: 5;
                    text-align: right;
                }
                
                .data-image {
                    width: 100%;
                    max-width: 588px;
                    display: block;
                    margin-left: auto;
                }
                /* =========================================================
                RESPONSIVE
                ========================================================= */
                
                @media(max-width:1199px) {
                    .data-title {
                        font-size: 48px;
                    }
                    .data-desc {
                        font-size: 18px;
                    }
                }
                
                @media(max-width:991px) {
                    .data-verification-section {
                        padding: 35px 0 45px;
                    }
                    .data-content {
                        text-align: center;
                        padding: 10px 0 40px;
                    }
                    .data-title {
                        font-size: 38px;
                        max-width: 100%;
                    }
                    .data-desc {
                        font-size: 16px;
                        max-width: 100%;
                    }
                    .data-image-box {
                        text-align: center;
                    }
                    .data-image {
                        margin: auto;
                        max-width: 430px;
                    }
                }
                
                @media(max-width:576px) {
                    .data-verification-section {
                        padding: 30px 0 40px;
                    }
                    .data-badge {
                        height: 42px;
                        font-size: 13px;
                        padding: 0 20px;
                    }
                    .data-title {
                        font-size: 30px;
                        line-height: 1.2;
                    }
                    .data-desc {
                        font-size: 14px;
                        line-height: 1.8;
                    }
                    .data-btn {
                        width: 100%;
                        justify-content: center;
                        font-size: 13px;
                        padding: 0 6px 0 16px;
                    }
                    .data-btn-icon {
                        width: 26px;
                        height: 26px;
                        font-size: 11px;
                    }
                    .data-image {
                        max-width: 100%;
                    }
                }
                /* crm section */
                
                .crm-section {
                    padding: 30px 0;
                    overflow: hidden;
                }
                /* =========================================================
                WRAPPER
                ========================================================= */
                
                .crm-wrapper {
                    max-width: 1180px;
                    margin: auto;
                }
                /* =========================================================
                LEFT SIDE
                ========================================================= */
                
                .crm-left {
                    padding-right: 25px;
                }
                /* BADGE */
                
                .crm-badge {
                    position: relative;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    height: 28px;
                    padding: 0 16px;
                    border-radius: 999px;
                    color: #ffffff;
                    font-size: 13px;
                    font-weight: 700;
                    overflow: hidden;
                    margin-bottom: 18px;
                    background: linear-gradient( 90deg, #1CB7E9 0%, #2A95D3 38%, #2E7EE4 68%, #AFC5F3 100%);
                    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.18), 0 2px 6px rgba(0, 0, 0, 0.08);
                }
                
                .crm-badge::before {
                    content: '';
                    position: absolute;
                    width: 70px;
                    height: 70px;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.35) 32%, rgba(255, 255, 255, 0.08) 58%, transparent 75%);
                    right: -28px;
                    bottom: -48px;
                }
                /* TITLE */
                
                .crm-title {
                    font-size: 44px;
                    font-weight: 700;
                    color: #3099D5;
                    margin-bottom: 15px;
                    max-width: 480px;
                }
                /* DESCRIPTION */
                
                .crm-desc {
                    font-size: 17px;
                    max-width: 430px;
                    margin: 0;
                }
                /* =========================================================
                RIGHT SIDE
                ========================================================= */
                
                .crm-right {
                    position: relative;
                }
                /* GRID */
                
                .crm-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 18px 22px;
                }
                /* CARD */
                
                .crm-card {
                    background: #DDEBF5;
                    border: 1.5px solid #7FC0E9;
                    border-radius: 12px;
                    min-height: 76px;
                    padding: 14px 18px;
                    display: flex;
                    align-items: flex-start;
                    gap: 12px;
                    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.06);
                }
                /* ICON */
                .crm-icon{
                    width:48px;
                    height:48px;
                    min-width:48px;
                    border-radius:50%;
                    background:white;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    flex-shrink:0;
                    margin-top:0;
                }
                
                /* ICON IMAGE */
                .crm-icon img{
                    width:24px;
                    height:24px;
                    object-fit:contain;
                    display:block;
                }
                /* TEXT */
                
                .crm-card p {
                    margin: 0;
                    font-size: 15px;
                    line-height: 1.5;
                    font-weight: 500;
                    color: #2C2C2C;
                }
                /* =========================================================
                BOTTOM BAR
                ========================================================= */
                
                .crm-bottom {
                    margin-top: 22px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                /* ICON */
                
                .crm-bottom-icon img {
                    width: 45px;
                }
                /* BAR */
                
                .crm-bottom-bar {
                    flex: 1;
                    min-height: 46px;
                    border-radius: 14px;
                    display: flex;
                    align-items: center;
                    padding: 12px 22px;
                    font-size: 17px;
                    font-weight: 600;
                    color: #1f2937;
                    background: linear-gradient( to right, #DDEBF5 0%, rgba(221, 235, 245, 0.95) 22%, rgba(37, 99, 235, 0.10) 45%, rgba(37, 99, 235, 0.04) 60%, rgba(255, 255, 255, 0) 78%);
                    border: none;
                    box-shadow: none;
                }
                /* =========================================================
                RESPONSIVE
                ========================================================= */
                
                @media(max-width:991px) {
                    .crm-left {
                        text-align: center;
                        padding-right: 0;
                        margin-bottom: 40px;
                    }
                    .crm-title {
                        font-size: 40px;
                        max-width: 100%;
                    }
                    .crm-desc {
                        max-width: 100%;
                    }
                    .crm-grid {
                        grid-template-columns: 1fr;
                    }
                }
                
                @media(max-width:576px) {
                    .crm-section {
                        padding: 45px 0;
                    }
                    .crm-title {
                        font-size: 30px;
                    }
                    .crm-desc {
                        font-size: 14px;
                    }
                    .crm-card {
                        min-height: auto;
                        padding: 14px;
                    }
                    .crm-card p {
                        font-size: 14px;
                    }
                    .crm-bottom {
                        align-items: flex-start;
                    }
                    .crm-bottom-bar {
                        height: auto;
                        padding: 14px;
                        font-size: 14px;
                        line-height: 1.6;
                    }
                }
                /* =========================================================
                VERIFICATION MODEL SECTION
                ========================================================= */
                
                .verification-model-section {
                    padding: 45px 0;
                    background: #EEF5FF;
                    overflow: hidden;
                }
                /* =========================================================
                TOP
                ========================================================= */
                
                .verification-top {
                    margin-bottom: 8px;
                }
                /* BADGE */
                
                .verification-badge {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    padding: 10px 34px;
                    border-radius: 999px;
                    font-size: 18px;
                    font-weight: 700;
                    color: #fff;
                    background: linear-gradient( 90deg, #5FE0F7 0%, #1987E8 45%, #BFD8F6 100%);
                    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 4px 10px rgba(0, 0, 0, 0.08);
                    margin-bottom: 18px;
                }
                /* TITLE */
                
                .verification-title {
                    font-size: 40px;
                    font-weight: 700;
                    color: #1873C9;
                    margin-bottom: 8px;
                }
                /* DESC */
                
                .verification-desc {
                    font-size: 21px;
                    margin: 0 auto;
                    max-width: 980px;
                }
                /* =========================================================
                WRAPPER
                ========================================================= */
                
                .verification-wrapper {
                    position: relative;
                    max-width: 1200px;
                    margin: auto;
                }
                /* =========================================================
                ITEMS
                ========================================================= */
                
                .verification-item {
                    position: relative;
                    max-width: 360px;
                }
                
                .verification-item h3 {
                    font-size: 19px;
                    font-weight: 700;
                    color: #2B9DE4;
                    margin-bottom: 10px;
                }
                
                .verification-item ul {
                    margin: 0;
                    padding-left: 18px;
                }
                
                .verification-item ul li {
                    font-size: 13px;
                    color: #333;
                    margin-bottom: 2px;
                }
                /* =========================================================
                LEFT SIDE
                ========================================================= */
                
                .verification-left {
                    display: flex;
                    flex-direction: column;
                    gap: 56px;
                }
                
                .left-item {
                    text-align: left;
                    position: relative;
                }
                /* =========================================================
                CENTER IMAGE
                ========================================================= */
                
                .verification-image-box {
                    position: relative;
                    z-index: 2;
                }
                
                .verification-image {
                    width: 100%;
                    max-width: 520px;
                    display: block;
                    filter: drop-shadow(0 10px 14px rgba(0, 0, 0, 0.12));
                }
                /* =========================================================
                RESPONSIVE
                ========================================================= */
                
                @media(max-width:991px) {
                    .verification-model-section {
                        padding: 50px 0;
                    }
                    .verification-title {
                        font-size: 34px;
                    }
                    .verification-desc {
                        font-size: 16px;
                    }
                    .verification-left {
                        gap: 30px;
                        margin-bottom: 30px;
                    }
                    .verification-right {
                        justify-content: center;
                        margin-top: 30px;
                    }
                    .verification-item {
                        max-width: 100%;
                        text-align: center;
                        margin: auto;
                    }
                    .verification-item ul {
                        padding-left: 0;
                        list-style-position: inside;
                    }
                    .verification-dot,
                    .left-item::after,
                    .bottom-item::after,
                    .right-item::before {
                        display: none;
                    }
                    .verification-image {
                        max-width: 260px;
                    }
                }
                
                @media(max-width:576px) {
                    .verification-title {
                        font-size: 28px;
                    }
                    .verification-desc {
                        font-size: 14px;
                        line-height: 1.7;
                    }
                    .verification-badge {
                        font-size: 14px;
                        padding: 8px 18px;
                    }
                    .verification-item h3 {
                        font-size: 16px;
                    }
                    .verification-item ul li {
                        font-size: 13px;
                    }
                    .verification-image {
                        max-width: 220px;
                    }
                }
                /* =========================================================
                CHOOSE VERIFICATION SECTION
                ========================================================= */
                
                .choose-verification-section {
                    padding: 30px 0;
                    overflow: hidden;
                }
                /* =========================================================
                TOP
                ========================================================= */
                
                .choose-top {
                    margin-bottom: 30px;
                }
                /* BADGE */
                
                .choose-badge {
                    position: relative;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    height: 42px;
                    padding: 0 28px;
                    border-radius: 999px;
                    color: #ffffff;
                    font-size: 18px;
                    font-weight: 700;
                    overflow: hidden;
                    background: linear-gradient( 90deg, #1CB7E9 0%, #2A95D3 38%, #2E7EE4 68%, #AFC5F3 100%);
                    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.18), 0 2px 6px rgba(0, 0, 0, 0.08);
                    margin-bottom: 18px;
                }
                
                .choose-badge::before {
                    content: '';
                    position: absolute;
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.35) 32%, rgba(255, 255, 255, 0.08) 58%, transparent 75%);
                    right: -35px;
                    bottom: -70px;
                }
                /* TITLE */
                
                .choose-title {
                    font-size: 45px;
                    font-weight: 700;
                    color: #3099D5;
                    margin-bottom: 10px;
                }
                /* DESC */
                
                .choose-desc {
                    max-width: 980px;
                    margin: auto;
                    font-size: 20px;
                }
                /* =========================================================
                CHART
                ========================================================= */
                
                .choose-chart-box {
                    text-align: center;
                }
                
                .choose-chart-image {
                    width: 100%;
                    max-width: 955px;
                    display: block;
                    margin: auto;
                }
                /* =========================================================
                RESPONSIVE
                ========================================================= */
                
                @media(max-width:1199px) {
                    .choose-title {
                        font-size: 44px;
                    }
                    .choose-desc {
                        font-size: 18px;
                    }
                }
                
                @media(max-width:991px) {
                    .choose-verification-section {
                        padding: 55px 0;
                    }
                    .choose-title {
                        font-size: 36px;
                    }
                    .choose-desc {
                        font-size: 16px;
                        max-width: 100%;
                    }
                    .choose-chart-image {
                        max-width: 100%;
                    }
                }
                
                @media(max-width:576px) {
                    .choose-verification-section {
                        padding: 40px 0;
                    }
                    .choose-badge {
                        height: 38px;
                        padding: 0 18px;
                        font-size: 13px;
                    }
                    .choose-title {
                        font-size: 28px;
                        line-height: 1.25;
                    }
                    .choose-desc {
                        font-size: 14px;
                        line-height: 1.8;
                    }
                }
                
                /* =========================================================
                SMS PERMISSION SECTION
                ========================================================= */
                
                .sms-permission-section{
                    background:#EEF3FA;
                    padding:6px 40px 70px;
                    overflow:hidden;
                    position:relative;
                }
                
                /* =========================
                LEFT CONTENT
                ========================= */
                
                .sms-content{
                    padding-top:20px;
                }
                
                .sms-top-badge{
                    position:relative;
                    display:inline-flex;
                    align-items:center;
                    justify-content:center;
                
                    height:50px;
                    padding:0 28px;
                
                    border-radius:999px;
                
                    color:#fff;
                    font-size:18px;
                    font-weight:700;
                
                    overflow:hidden;
                
                    background:linear-gradient(
                    90deg,
                    #73DDF7 0%,
                    #2895EA 55%,
                    #005ED9 100%
                    );
                
                    box-shadow:
                    inset 0 1px 0 rgba(255,255,255,0.2),
                    0 3px 8px rgba(0,0,0,0.08);
                
                    margin-bottom:28px;
                }
                
                .sms-top-badge::before{
                    content:'';
                    position:absolute;
                
                    width:90px;
                    height:90px;
                
                    border-radius:50%;
                
                    background:radial-gradient(
                    circle,
                    rgba(255,255,255,0.9) 0%,
                    rgba(255,255,255,0.3) 35%,
                    transparent 70%
                    );
                
                    left:-30px;
                    top:-40px;
                }
                
                /* =========================
                TITLE
                ========================= */
                
                .sms-main-title{
                    font-size:42px;
                    font-weight:700;
                    color:#3099D5;
                    max-width:860px;
                }
                
                /* =========================
                DESCRIPTION
                ========================= */
                
                .sms-description{
                    font-size:21px;
                    max-width:950px;
                    font-weight:400;
                }
                
                
                /* =========================
                RIGHT IMAGE
                ========================= */
                
                .sms-image-box{
                    text-align:center;
                }
                
                .sms-right-image{
                    width:100%;
                    max-width:350px;
                    display:block;
                    margin:auto;
                }
                
                /* =========================
                BOTTOM CARDS
                ========================= */
                
                .sms-card-wrapper{
                    display:flex;
                    justify-content:center;
                    gap:18px;
                
                    margin-top:30px;
                
                    flex-wrap:nowrap;
                }
                
                .sms-card{
                    width:318px;
                    height:88px;
                
                    border-radius:18px;
                
                    background:linear-gradient(
                    90deg,
                    #1498DD 0%,
                    #49b7e2 100%
                    );
                
                    display:flex;
                    align-items:center;
                    justify-content:center;
                
                    text-align:center;
                
                    color:#fff;
                
                    font-size:17px;
                    line-height:1.45;
                    font-weight:400;
                
                    padding:12px 18px;
                
                    box-shadow:
                    0 6px 14px rgba(0,0,0,0.10),
                    inset 0 0 0 2px rgba(255,255,255,0.6);
                }
                
                /* =========================================================
                RESPONSIVE
                ========================================================= */
                
                @media(max-width:1199px){
                
                    .sms-main-title{
                        font-size:48px;
                    }
                
                    .sms-description{
                        font-size:20px;
                    }
                
                    .sms-card{
                        width:260px;
                        font-size:15px;
                    }
                }
                
                @media(max-width:991px){
                
                    .sms-permission-section{
                        padding:55px 0;
                        text-align:center;
                    }
                
                    .sms-content{
                        padding-top:0;
                    }
                
                    .sms-main-title{
                        font-size:40px;
                        max-width:100%;
                    }
                
                    .sms-description{
                        font-size:17px;
                        max-width:100%;
                    }
                
                    .sms-image-box{
                        margin-top:35px;
                    }
                
                    .sms-right-image{
                        max-width:340px;
                    }
                
                    .sms-card-wrapper{
                        flex-wrap:wrap;
                        margin-top:35px;
                    }
                
                    .sms-card{
                        width:48%;
                    }
                }
                
                @media(max-width:576px){
                
                    .sms-permission-section{
                        padding:45px 0;
                    }
                
                    .sms-top-badge{
                        height:42px;
                        padding:0 20px;
                        font-size:14px;
                    }
                
                    .sms-main-title{
                        font-size:31px;
                        line-height:1.2;
                    }
                
                    .sms-description{
                        font-size:15px;
                        line-height:1.8;
                    }
                
                    .sms-card-wrapper{
                        gap:14px;
                    }
                
                    .sms-card{
                        width:100%;
                        height:auto;
                        min-height:78px;
                
                        font-size:15px;
                
                        padding:16px;
                    }
                }
                
                /* =========================================================
                COMMERCIAL OUTCOMES SECTION
                ========================================================= */
                
                .commercial-section{
                    background:#f3f3f3;
                    padding:10px 0 35px;
                    overflow:hidden;
                }
                
                /* =========================================================
                TOP
                ========================================================= */
                
                .commercial-top{
                    text-align:center;
                    margin-bottom:38px;
                }
                
                /* BADGE */
                
                .commercial-badge{
                    display:inline-flex;
                    align-items:center;
                    justify-content:center;
                
                    height:38px;
                    padding:0 28px;
                
                    border-radius:999px;
                
                    font-size:16px;
                    font-weight:700;
                    color:#fff;
                
                    background:linear-gradient(
                    90deg,
                    #14b7f0 0%,
                    #1c8fe9 45%,
                    #bfd5ff 100%
                    );
                
                    margin-bottom:20px;
                }
                
                /* TITLE */
                
                .commercial-title{
                    font-size:42px;
                    line-height:1.2;
                    font-weight:700;
                    color:#1f7dcb;
                
                    margin:0;
                }
                
                /* =========================================================
                GRID
                ========================================================= */
                
                .commercial-grid{
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 32px;
                    margin-top: 30px;
                    padding: 10px 108px;
                }
                
                /* =========================================================
                CARD
                ========================================================= */
                
                .commercial-card{
                    background:#e6edf5;
                
                    border-radius:28px;
                
                    min-height:285px;
                
                    padding:38px 25px 30px;
                
                    text-align:center;
                
                    border-top:3px solid #1d63ff;
                }
                
                /* ICON */
                
                .commercial-icon{
                    width:78px;
                    height:78px;
                
                    margin:0 auto 24px;
                
                    display:flex;
                    align-items:center;
                    justify-content:center;
                }
                
                .commercial-icon img{
                    width:100%;
                    height:100%;
                    object-fit:contain;
                }
                
                /* TEXT */
                
                .commercial-card h3{
                    font-size:21px;
                    line-height:1.45;
                    font-weight:700;
                    color:#000;
                
                    margin:0;
                }
                
                /* =========================================================
                BOTTOM TEXT
                ========================================================= */
                
                .commercial-bottom-text{
                    text-align:center;
                
                    font-size:22px;
                    line-height:1.5;
                    font-weight:500;
                
                    color:#222;
                
                    margin-top:28px;
                    margin-bottom:0;
                }
                
                /* =========================================================
                RESPONSIVE
                ========================================================= */
                
                @media(max-width:991px){
                
                    .commercial-grid{
                        grid-template-columns:repeat(2,1fr);
                        padding: 10px 20px;
                    }
                
                    .commercial-title{
                        font-size:34px;
                    }
                }
                
                @media(max-width:576px){
                
                    .commercial-grid{
                        grid-template-columns:1fr;
                        padding: 10px 0px;
                    }
                
                    .commercial-title{
                        font-size:28px;
                    }
                
                    .commercial-card{
                        min-height:auto;
                    }
                
                    .commercial-bottom-text{
                        font-size:16px;
                    }
                }
            `}</style>

            {/* =========================================================
            DATA VERIFICATION HERO SECTION
            ========================================================= */}
            <section className="data-verification-section">
                <div className="max-w-[1320px] mx-auto px-11 w-full">
                    <div className="data-verification-wrapper">
                        <div className="flex flex-col lg:flex-row items-center flex-wrap">
                            {/* LEFT */}
                            <div className="lg:w-1/2 w-full">
                                <div className="data-content lg:pr-[15px]">
                                    {/* BADGE */}
                                    <div className="data-badge"> Data Verification </div>
                                    {/* TITLE */}
                                    <h1 className="data-title">
                                        Is Your Data Helping You<br />
                                        Sell or Holding You Back?
                                    </h1>
                                    {/* DESCRIPTION */}
                                    <p className="data-desc"> Accurate, verified contact and account data so your campaigns reach the right people, at the right time, with the right message. </p>
                                    {/* BUTTON */}
                                    <Link href="#" className="data-btn">
                                        <span>
                                            Fix Your Data Before You Scale Your Outreach
                                        </span>
                                        <span className="data-btn-icon">
                                            ↗
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            {/* RIGHT */}
                            <div className="lg:w-1/2 w-full">
                                <div className="data-image-box lg:pl-[15px]">
                                    <Image
                                        src="/data-verification/Data Verification.png"
                                        alt="Data Verification"
                                        width={588}
                                        height={450}
                                        className="data-image"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
            CRM SECTION
            ========================================================= */}
            <section className="crm-section">
                <div className="max-w-[1320px] mx-auto px-4 w-full">
                    <div className="crm-wrapper">
                        <div className="flex flex-col lg:flex-row items-center flex-wrap">
                            {/* LEFT */}
                            <div className="lg:w-[41.666%] w-full">
                                <div className="crm-left lg:pr-[15px]">
                                    {/* BADGE */}
                                    <div className="crm-badge"> The Problem </div>
                                    {/* TITLE */}
                                    <h2 className="crm-title">
                                        Your CRM Might Look<br />
                                        Full But Is It Usable?
                                    </h2>
                                    {/* DESC */}
                                    <p className="crm-desc"> Outdated or inaccurate data slows down your outreach, wastes your team’s time and makes campaigns look busy without producing enough pipeline. </p>
                                </div>
                            </div>
                            {/* RIGHT */}
                            <div className="lg:w-[58.333%] w-full">
                                <div className="crm-right lg:pl-[15px]">
                                    {/* GRID */}
                                    <div className="crm-grid">
                                        {/* CARD */}
                                        <div className="crm-card">
                                            <div className="crm-icon">
                                                <Image src="/data-verification/wrong-email.png" width={24} height={24} alt="Wrong email" />
                                            </div>
                                            <p> Your team is calling & emailing the wrong people </p>
                                        </div>
                                        {/* CARD */}
                                        <div className="crm-card">
                                            <div className="crm-icon">
                                                <Image src="/data-verification/user.png" width={24} height={24} alt="User" />
                                            </div>
                                            <p> Contacts have moved roles or left the business </p>
                                        </div>
                                        {/* CARD */}
                                        <div className="crm-card">
                                            <div className="crm-icon">
                                                <Image src="/data-verification/briefcase.png" width={24} height={24} alt="Briefcase" />
                                            </div>
                                            <p> Job titles look right but have no real buying influence </p>
                                        </div>
                                        {/* CARD */}
                                        <div className="crm-card">
                                            <div className="crm-icon">
                                                <Image src="/data-verification/bounce.png" width={24} height={24} alt="Bounce" />
                                            </div>
                                            <p> Bounce rates are high </p>
                                        </div>
                                        {/* CARD */}
                                        <div className="crm-card" style={{ gridColumn: '1 / -1' }}>
                                            <div className="crm-icon">
                                                <Image src="/data-verification/pipeline.png" width={24} height={24} alt="Pipeline" />
                                            </div>
                                            <p> Campaigns look active but produce little pipeline </p>
                                        </div>
                                    </div>
                                    {/* BOTTOM */}
                                    <div className="crm-bottom">
                                        <div className="crm-bottom-icon">
                                            <Image src="/data-verification/target.png" width={45} height={45} alt="Target" />
                                        </div>
                                        <div className="crm-bottom-bar"> Most data gives you volume. Very little gives you accuracy. </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
            VERIFICATION MODEL SECTION
            ========================================================= */}
            <section className="verification-model-section">
                <div className="max-w-[1320px] mx-auto px-4 w-full">
                    {/* TOP */}
                    <div className="verification-top text-center">
                        <div className="verification-badge"> Our Data Verification Approach </div>
                        <h2 className="verification-title">
                            A 3 Layer Verification Model
                        </h2>
                        <p className="verification-desc"> We do not just check if a record exists. We verify whether it is worth your team spending time on. </p>
                    </div>
                    {/* CONTENT */}
                    <div className="verification-wrapper pt-8">
                        <div className="flex flex-col lg:flex-row items-center justify-center flex-wrap">
                            {/* LEFT */}
                            <div className="lg:w-1/4 w-full lg:pr-[15px]">
                                <div className="verification-left">
                                    {/* ITEM */}
                                    <div className="verification-item left-item">
                                        <div className="verification-dot"></div>
                                        <h3>
                                            1. Account Level Verification
                                        </h3>
                                        <ul>
                                            <li>Is the company still active and relevant?</li>
                                            <li>Does it match your ICP today, not 12 months ago?</li>
                                            <li>Are they likely to have the problem you solve?</li>
                                        </ul>
                                    </div>
                                    {/* ITEM */}
                                    <div className="verification-item left-item bottom-item">
                                        <div className="verification-dot"></div>
                                        <h3>
                                            3. Context Verification
                                        </h3>
                                        <ul>
                                            <li>Are they seeing relevant challenges right now?</li>
                                            <li>Is there a real reason to speak?</li>
                                            <li>Is your outreach timely or just more noise?</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* CENTER IMAGE */}
                            <div className="lg:w-[41.666%] w-full text-center px-[15px]">
                                <div className="verification-image-box inline-block">
                                    <Image
                                        src="/data-verification/verification.png"
                                        alt="Verification Model"
                                        width={520}
                                        height={400}
                                        className="verification-image"
                                    />
                                </div>
                            </div>
                            {/* RIGHT */}
                            <div className="lg:w-1/4 w-full lg:pl-[15px]">
                                <div className="verification-right">
                                    <div className="verification-item right-item">
                                        <div className="verification-dot"></div>
                                        <h3>
                                            2. Contact Level Verification
                                        </h3>
                                        <ul>
                                            <li>Is the person still in role?</li>
                                            <li>Are they part of the buying committee?</li>
                                            <li>Do they have influence or just the right looking job title?</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
            CHOOSE VERIFICATION SECTION
            ========================================================= */}
            <section className="choose-verification-section">
                <div className="max-w-[1320px] mx-auto px-4 w-full">
                    {/* TOP */}
                    <div className="choose-top text-center">
                        <div className="choose-badge"> Choose Your Level of Verification </div>
                        <h2 className="choose-title">
                            Choose the Right Level of Data Verification
                        </h2>
                        <p className="choose-desc"> Different campaigns need different levels of data confidence. Whether you need cleaner lists, better targeting or deeper market context, we can support the level of verification your outreach requires. </p>
                    </div>
                    {/* CHART IMAGE */}
                    <div className="choose-chart-box">
                        <Image
                            src="/data-verification/Data Verification Chart.png"
                            alt="Verification Chart"
                            width={955}
                            height={600}
                            className="choose-chart-image"
                        />
                    </div>
                </div>
            </section>

            {/* =========================================================
            SMS PERMISSION SECTION
            ========================================================= */}
            <section className="sms-permission-section">
                <div className="max-w-[1380px] mx-auto px-4 w-full">
                    <div className="flex flex-col lg:flex-row items-center flex-wrap">
                        {/* LEFT */}
                        <div className="lg:w-[58.333%] w-full lg:pr-[15px]">
                            <div className="sms-content">
                                <div className="sms-top-badge">
                                    Want to Use SMS?
                                </div>
                                <h2 className="sms-main-title">
                                    You Need the Right Permission First
                                </h2>
                                <p className="sms-description">
                                    SMS can be a powerful channel, but only when permission has been
                                    captured properly.<br />
                                    We help you gain clear SMS permission from relevant contacts and
                                    provide call recordings of each permission capture, giving your
                                    team more confidence to use SMS as part of your outreach.
                                </p>
                            </div>
                        </div>
                        {/* RIGHT */}
                        <div className="lg:w-[41.666%] w-full lg:pl-[15px]">
                            <div className="sms-image-box">
                                <Image
                                    src="/data-verification/SMS Marketing.png"
                                    alt="SMS"
                                    width={350}
                                    height={350}
                                    className="sms-right-image"
                                />
                            </div>
                        </div>
                    </div>

                    {/* BOTTOM CARDS */}
                    <div className="sms-card-wrapper">
                        <div className="sms-card">
                            Capture clear permission <br />
                            for SMS outreach
                        </div>
                        <div className="sms-card">
                            Receive recordings <br />
                            for each permission capture
                        </div>
                        <div className="sms-card">
                            Use SMS with more <br />
                            confidence
                        </div>
                        <div className="sms-card">
                            Add another channel to <br />
                            your sales & marketing follow up
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
            COMMERCIAL OUTCOMES SECTION
            ========================================================= */}
            <section className="commercial-section">
                <div className="max-w-[1550px] mx-auto px-4 w-full">
                    {/* TOP BADGE */}
                    <div className="commercial-top text-center">
                        <div className="commercial-badge">
                            Commercial Outcomes
                        </div>
                        <h2 className="commercial-title">
                            What Better Data Means for Your Outreach
                        </h2>
                    </div>

                    {/* CARDS */}
                    <div className="commercial-grid">
                        {/* CARD */}
                        <div className="commercial-card">
                            <div className="commercial-icon">
                                <Image src="/data-verification/fewer.png" width={78} height={78} alt="Fewer Wasted Outreach Attempts" />
                            </div>
                            <h3>
                                Fewer Wasted <br />
                                Outreach Attempts
                            </h3>
                        </div>

                        {/* CARD */}
                        <div className="commercial-card">
                            <div className="commercial-icon">
                                <Image src="/data-verification/hingher-res.png" width={78} height={78} alt="Higher Response Rates" />
                            </div>
                            <h3>
                                Higher Response <br />
                                Rates
                            </h3>
                        </div>

                        {/* CARD */}
                        <div className="commercial-card">
                            <div className="commercial-icon">
                                <Image src="/data-verification/more-relevant.png" width={78} height={78} alt="More Relevant Conversations" />
                            </div>
                            <h3>
                                More Relevant <br />
                                Conversations
                            </h3>
                        </div>

                        {/* CARD */}
                        <div className="commercial-card">
                            <div className="commercial-icon">
                                <Image src="/data-verification/stronger-pipeline.png" width={78} height={78} alt="Stronger Pipeline" />
                            </div>
                            <h3>
                                Stronger Pipeline <br />
                                From The Same <br />
                                Level Of Activity
                            </h3>
                        </div>
                    </div>

                    {/* BOTTOM TEXT */}
                    <p className="commercial-bottom-text">
                        Better data does not just mean more contacts. It means more of the right conversations.
                    </p>
                </div>
            </section>

            {/* =========================================================
            CTA SECTION
            ========================================================= */}
            <section className="cta-section" style={{ padding: '40px 0' }}>
                <div className="max-w-[1131px] mx-auto px-4 w-full">
                    <div className="cta-box"
                        style={{
                            background: 'linear-gradient(90deg, #1D75D9 0%, #1968C6 100%)',
                            borderRadius: '28px',
                            padding: '17px 45px',
                            overflow: 'hidden'
                        }}>
                        <div className="flex flex-col lg:flex-row items-center flex-wrap">
                            {/* LEFT */}
                            <div className="lg:w-1/2 w-full lg:pr-0">
                                <h2 className="cta-title"
                                    style={{
                                        fontSize: '44px',
                                        lineHeight: 1.12,
                                        fontWeight: 700,
                                        color: 'white',
                                        marginBottom: '18px'
                                    }}>
                                    Fix Your Data Before You Scale Your Outreach
                                </h2>
                                <p className="cta-desc"
                                    style={{
                                        fontSize: '18px',
                                        lineHeight: 1.7,
                                        color: 'white',
                                        maxWidth: '520px',
                                        marginBottom: '22px'
                                    }}>
                                    Before you invest more into campaigns, make sure your data is accurate, relevant and usable
                                </p>

                                {/* BUTTON */}
                                <Link href="#"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '4px',
                                        height: '30px',
                                        padding: '0 6px 0 10px',
                                        borderRadius: '999px',
                                        textDecoration: 'none',
                                        fontSize: '11px',
                                        fontWeight: 700,
                                        letterSpacing: '0.2px',
                                        textTransform: 'uppercase',
                                        color: '#ffffff',
                                        background: 'linear-gradient(to right, #ffffff 0%, #5EA9F4 14%, #1229CD 48%, #1229CD 52%, #5EA9F4 86%, #ffffff 100%)',
                                        border: '1px solid rgba(255,255,255,0.7)',
                                        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.55), 0 1px 2px rgba(0,0,0,0.18)',
                                        width: 'max-content'
                                    }}>
                                    <span style={{ color: '#ffffff', lineHeight: 1 }}>
                                        Get a Data Quality Review
                                    </span>
                                    <span style={{
                                        width: '15px',
                                        height: '15px',
                                        borderRadius: '50%',
                                        background: '#ffffff',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#2E7ED9',
                                        fontSize: '9px',
                                        flexShrink: 0
                                    }}>
                                        →
                                    </span>
                                </Link>
                            </div>

                            {/* RIGHT */}
                            <div className="lg:w-1/2 w-full text-center lg:pl-0 mt-8 lg:mt-0">
                                <Image
                                    src="/data-verification/CTA  Data Verification.png"
                                    className="cta-image"
                                    alt="cta"
                                    width={420}
                                    height={250}
                                    style={{
                                        width: '100%',
                                        maxWidth: '420px',
                                        display: 'block',
                                        margin: 'auto'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
