"use client";

import { useState } from "react";
import styles from "./page.module.css";

const cx = (...classes) => classes.filter(Boolean).map((name) => styles[name]).join(" ");

export default function CareersPage() {


  return (
    <div className={cx("page")}>

<div className={cx("careers-hero")}>
<span className={cx("eyebrow")}>Join Our Team</span>
<h1>Build a Career With Us at The Center for Child and Family Psychiatry</h1>
<p>We're a veteran- and family-owned practice growing right here in Killeen, and we're looking for compassionate, dedicated people to grow with us. Meet a few of the faces you'd be joining, and explore our open roles below.</p>
</div>
<div className={cx("careers-hero-banner")}>
<img alt="The Center for Child and Family Psychiatry team gathered together, laughing" src="/careers/careers-2.jpg"/>
</div>
<div className={cx("story-strip")}>
<p>We were founded in 2022 by <strong>Dr. Andrey Shalomov</strong> to help improve mental health care in Killeen and Central Texas. We're still a young, growing practice — which means the people who join us now aren't just filling a role. You're helping shape how we do things.</p>
</div>
<section className={cx("careers-section")}>
<div className={cx("careers-section-head")}>
<span className={cx("eyebrow","eyebrowPurple")}>Open Positions</span>
<h2>Where You Could Fit In</h2>
<p>We're actively hiring across clinical care, behavioral health therapy, and practice operations.</p>
</div>
<div className={cx("job-grid")}>
<div className={cx("job-card","accent-blue")}>
<div className={cx("job-photo")}>
<img alt="A provider reviewing TMS treatment training materials with a clinical team member" src="/careers/careers-3.jpg"/>
</div>
<div className={cx("job-body")}>
<div className={cx("job-icon")}><svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M6 4v6a4.5 4.5 0 0 0 9 0V4"></path><path d="M6 4H4.5M15 4h1.5"></path><path d="M19 10v2a5 5 0 0 1-5 5h-.5"></path><circle cx="19" cy="8" r="2"></circle><circle cx="9.5" cy="19.5" r="2.5"></circle></svg></div>
<span className={cx("job-roles")}>Physician Assistants · Nurse Practitioners · Psychiatrists</span>
<h3>Psychiatric Providers</h3>
<p>Join our clinical team delivering medication management, TMS, diagnostic evaluations, and ongoing psychiatric care for patients of all ages. We welcome PAs, nurses, and psychiatrists who want to practice thoughtful, whole-person care in a supportive, veteran- and family-owned setting.</p>
<a className={cx("btn","btn-solid","btn-blue")} href="mailto:zrobins@centerforchildpsych.com?subject=Career%20Interest%20-%20The%20Center%20for%20Child%20and%20Family%20Psychiatry%20-%20Psychiatric%20Provider">Inquire About This Role</a>
</div>
</div>
<div className={cx("job-card","accent-purple")}>
<div className={cx("job-photo")}>
<img alt="A warm, welcoming therapy room with calming colors and feelings-based resources for young patients" src="/careers/careers-4.jpg"/>
</div>
<div className={cx("job-body")}>
<div className={cx("job-icon")}><svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M20 11.5c0 4-4.5 7-8 9-3.5-2-8-5-8-9a4 4 0 0 1 7-2.6A4 4 0 0 1 20 11.5Z"></path></svg></div>
<span className={cx("job-roles")}>LMSW · LPC · LMSW-Associate · LPC-Associate</span>
<h3>Therapists</h3>
<p>We're building out our therapy team at every level of licensure, from Associates growing their supervised hours to fully licensed clinicians. You'll work in warm, purpose-built spaces like this one, providing individual therapy and helping shape our growing group and family therapy offerings.</p>
<a className={cx("btn","btn-solid","btn-purple")} href="mailto:zrobins@centerforchildpsych.com?subject=Career%20Interest%20-%20The%20Center%20for%20Child%20and%20Family%20Psychiatry%20-%20Therapist">Inquire About This Role</a>
</div>
</div>
<div className={cx("job-card","accent-sage")}>
<div className={cx("job-photo")}>
<img alt="Two team members reviewing a pediatric and adolescent psychiatric interview manual together" src="/careers/careers-5.jpg"/>
</div>
<div className={cx("job-body")}>
<div className={cx("job-icon")}><svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24"><rect height="17" rx="2" width="13" x="5.5" y="4.5"></rect><path d="M9 4.5V3.8A1.8 1.8 0 0 1 10.8 2h2.4A1.8 1.8 0 0 1 15 3.8v.7"></path><path d="m9 12.5 2 2 4-4"></path></svg></div>
<span className={cx("job-roles")}>Credentialing &amp; Provider Enrollment</span>
<h3>Credentialing Manager</h3>
<p>Keep our providers enrolled, credentialed, and in-network with the insurance plans our patients rely on. This detail-oriented role manages payer applications and re-credentialing timelines, working closely with our clinical and billing teams to keep everything running smoothly.</p>
<a className={cx("btn","btn-solid","btn-sage")} href="mailto:zrobins@centerforchildpsych.com?subject=Career%20Interest%20-%20The%20Center%20for%20Child%20and%20Family%20Psychiatry%20-%20Credentialing%20Manager">Inquire About This Role</a>
</div>
</div>
<div className={cx("job-card","accent-yellow")}>
<div className={cx("job-photo")}>
<img alt="A team member answering phones at the front desk" className={cx("imgCenter55")} src="/careers/careers-6.jpg"/>
</div>
<div className={cx("job-body")}>
<div className={cx("job-icon")}><svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M4 19h16"></path><path d="M6 19V9a6 6 0 0 1 12 0v10"></path><path d="M12 3v1.5"></path></svg></div>
<span className={cx("job-roles")}>Front Office &amp; Patient Experience</span>
<h3>Receptionist</h3>
<p>Be the welcoming first face our patients and families see. You'll manage scheduling, check-in, and phone calls with warmth and organization, helping set the tone for a calm, upscale, modern patient experience throughout our renovated downtown office.</p>
<a className={cx("btn","btn-solid","btn-yellow")} href="mailto:zrobins@centerforchildpsych.com?subject=Career%20Interest%20-%20The%20Center%20for%20Child%20and%20Family%20Psychiatry%20-%20Receptionist">Inquire About This Role</a>
</div>
</div>
</div>
</section>
<div className={cx("culture-panel")}>
<div className={cx("culture-panel-inner")}>
<div className={cx("culture-copy")}>
<span className={cx("eyebrow")}>Why Join Us</span>
<h2>A Practice Built Around People</h2>
<p>We're a veteran- and family-owned outpatient practice in the heart of downtown Killeen, dedicated to serving patients of all ages with medication management, TMS, esketamine, ADHD and autism assessments, and individual therapy. We also partner with Texas A&amp;M, Texas State, Texas Tech, and the Ft. Cavazos Army Career Skills Program to train the next generation of providers — and we're working toward becoming a true center for mental health education, not just a clinic.</p>
<p>Education doesn't stop once you're hired, either. We regularly bring in guest speakers and host presentations, staff trainings, and other educational events so our whole team keeps learning and growing together.</p>
<p className={cx("whiteStrong")}>What we value:</p>
<div className={cx("value-chip-row")}>
<span className={cx("value-chip")}>Education</span>
<span className={cx("value-chip")}>Improvement</span>
<span className={cx("value-chip")}>Modern, Evidence-Based Care</span>
<span className={cx("value-chip")}>Accountability</span>
<span className={cx("value-chip")}>Teamwork</span>
<span className={cx("value-chip")}>Ingenuity &amp; Innovation</span>
<span className={cx("value-chip")}>Honesty &amp; Transparency</span>
</div>
<p className={cx("whiteNote")}>Veteran &amp; family owned · 401(k) with Safe Harbor match · ICHRA health reimbursement · growing toward a second location in Austin</p>
</div>
<div className={cx("culture-photo-wrap")}>
<div className={cx("culture-photo")}>
<img alt="A staff training session and guest presentation" src="/careers/careers-7.jpg"/>
</div>
</div>
</div>
</div>
<div className={cx("seat-heading")}>
<span className={cx("eyebrow")}>Before You Apply</span>
<h2>Thinking About Taking a Seat at the Table?</h2>
<p>Here's what it actually takes to thrive here.</p>
</div>
<div className={cx("seat-banner")}>
<img alt="Our empty conference room table, ready for the next conversation" src="/careers/careers-8.jpg"/>
</div>
<section className={cx("fit-section")}>
<div className={cx("fit-panel")}>
<div className={cx("fit-copy")}>
<span className={cx("eyebrow")}>Is This You?</span>
<h2>We'd Rather Tell You Now Than Later</h2>
<p>We're honest about where we are: we're a new, small, and fast-growing practice, and things here change as we grow. We don't have every process figured out yet — and we're looking for people who find that exciting rather than stressful.</p>
<p>If you do your best work with clear structure and established systems already in place, that's completely valid — it just might not be us yet. But if you want a real hand in building something and are comfortable figuring things out as you go, you'll fit right in.</p>
<div className={cx("fit-quote")}>"You are a founding member of our team."</div>
<p className={cx("mutedNote")}>We also run an open-door policy — direct access to leadership is part of how we operate, not an exception to it.</p>
</div>
<div className={cx("trait-list")}>
<div className={cx("trait-item")}>
<span className={cx("trait-check")}><svg fill="none" viewBox="0 0 24 24"><path d="m5 12 5 5L20 7"></path></svg></span>
<div><span className={cx("trait-label")}>Clear Communication</span><p>You say what you mean and keep people in the loop.</p></div>
</div>
<div className={cx("trait-item")}>
<span className={cx("trait-check")}><svg fill="none" viewBox="0 0 24 24"><path d="m5 12 5 5L20 7"></path></svg></span>
<div><span className={cx("trait-label")}>Entrepreneurial Spirit</span><p>You see gaps and want to help fill them.</p></div>
</div>
<div className={cx("trait-item")}>
<span className={cx("trait-check")}><svg fill="none" viewBox="0 0 24 24"><path d="m5 12 5 5L20 7"></path></svg></span>
<div><span className={cx("trait-label")}>Thrives on Challenges</span><p>New problems energize you more than they drain you.</p></div>
</div>
<div className={cx("trait-item")}>
<span className={cx("trait-check")}><svg fill="none" viewBox="0 0 24 24"><path d="m5 12 5 5L20 7"></path></svg></span>
<div><span className={cx("trait-label")}>Flexibility</span><p>You adjust well when priorities shift.</p></div>
</div>
<div className={cx("trait-item")}>
<span className={cx("trait-check")}><svg fill="none" viewBox="0 0 24 24"><path d="m5 12 5 5L20 7"></path></svg></span>
<div><span className={cx("trait-label")}>Honesty &amp; Directness</span><p>You'd rather raise an issue early than let it slide.</p></div>
</div>
<div className={cx("trait-item")}>
<span className={cx("trait-check")}><svg fill="none" viewBox="0 0 24 24"><path d="m5 12 5 5L20 7"></path></svg></span>
<div><span className={cx("trait-label")}>Patience</span><p>You know good things take time to build right.</p></div>
</div>
<div className={cx("trait-item")}>
<span className={cx("trait-check")}><svg fill="none" viewBox="0 0 24 24"><path d="m5 12 5 5L20 7"></path></svg></span>
<div><span className={cx("trait-label")}>Self-Starter</span><p>You take initiative without waiting to be asked.</p></div>
</div>
</div>
</div>
</section>
<div className={cx("apply-cta")}>
<h2>Don't See the Exact Fit?</h2>
<p>We're always glad to hear from compassionate, driven people who want to be part of our team. Email <strong>Zariah Robins</strong>, our Admin Director, at <a href="mailto:zrobins@centerforchildpsych.com?subject=Career%20Interest%20-%20The%20Center%20for%20Child%20and%20Family%20Psychiatry">zrobins@centerforchildpsych.com</a> to inquire about a job, or reach out below.</p>
<div className={cx("cta-row")}>
<a className={cx("btn","btn-solid","btn-purple")} href="mailto:zrobins@centerforchildpsych.com?subject=Career%20Interest%20-%20The%20Center%20for%20Child%20and%20Family%20Psychiatry">Email Us Your Resume</a>
<a className={cx("btn","btn-outline","btn-navy")} href="tel:2547741163">Call (254) 774-1163</a>
</div>
</div>



    </div>
  );
}
