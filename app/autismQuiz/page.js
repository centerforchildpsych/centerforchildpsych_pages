"use client";

import { useMemo, useState } from "react";
import styles from "./page.module.css";

const CONFIG = {
  title: "Autism",
  intro:
    "This screening quiz is designed for parents and caregivers thinking about a child's social communication and behavior patterns.",
  ageNote: "This quiz is only for children ages 12 and under.",

  mainScale: [
    { label: "Not at all", value: 0 },
    { label: "Several days", value: 1 },
    { label: "More than half the days", value: 2 },
    { label: "Nearly every day", value: 3 },
  ],

  items: [
    "Does the child have difficulty with back-and-forth conversation or social interaction?",
    "Does the child have limited eye contact or difficulty reading facial expressions and body language?",
    "Does the child have a strong preference for routines and get distressed when routines change?",
    "Does the child have intense, narrow interests that take up a lot of their time and attention?",
    "Does the child show repetitive movements or behaviors, such as hand-flapping, rocking, or lining up objects?",
    "Is the child sensitive to sounds, textures, lights, or other sensory input?",
    "Does the child have difficulty making or keeping friendships with same-age peers?",
    "Does the child take language very literally or have trouble with sarcasm and idioms?",
  ],

  thresholds: {
    likelyMin: 16,
    inconclusiveMin: 8,
  },

  structuredResults: {
    tiers: {
      likely: {
        opener:
          "Your answers show a number of patterns that are often seen in autism spectrum traits.",
        subtext:
          "We highly recommend making an appointment with one of our providers so they can evaluate whether this — or something else — might be playing a role in what you're experiencing.",
      },

      possible: {
        opener:
          "Your answers show a few signs that could be related to autism spectrum traits, but the pattern isn't strong enough to say either way.",
        subtext:
          "We highly recommend making an appointment with one of our providers so they can evaluate whether this — or something else — might be playing a role in what you're experiencing.",
      },

      not_likely: {
        opener:
          "Your answers didn't show a strong pattern of autism spectrum traits.",
        subtext:
          "We highly recommend making an appointment with one of our providers so they can evaluate whether this — or something else — might be playing a role in what you're experiencing.",
      },
    },

    definition:
      "Autism is a developmental difference that affects social communication, behavior patterns, interests, and how a child processes sensory information, usually noticeable from early childhood.",

    differentials: [
      {
        name: "ADHD",
        desc: "Can also involve difficulty with attention, transitions, or impulsivity.",
      },
      {
        name: "Social Communication Disorder",
        desc: "Affects social skills without the repetitive behaviors or sensory differences seen in autism.",
      },
      {
        name: "Anxiety",
        desc: "Can also cause a child to avoid social situations.",
      },
    ],

    family:
      "Consistency across home, school, and other settings makes a real difference for autistic children. Family therapy and parent coaching help caregivers learn strategies that reduce stress at home and support communication.",

    group:
      "Group settings, like social skills groups, give children a chance to build friendships and practice new skills with peers.",
  },
};

function Icon({ children }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const icons = {
  sparkle: (
    <Icon>
      <path d="M12 3v4M12 17v4M5 12H3M21 12h-2M6.3 6.3 4.9 4.9M19.1 19.1l-1.4-1.4M17.7 6.3l1.4-1.4M4.9 19.1l-1.4 1.4" />
      <circle cx="12" cy="12" r="3.2" />
    </Icon>
  ),

  brain: (
    <Icon>
      <path d="M9.5 4a2.8 2.8 0 0 0-2.8 2.8v.3A2.6 2.6 0 0 0 5 9.6v.6a2.6 2.6 0 0 0-1 2v1a2.6 2.6 0 0 0 1.6 2.4 2.8 2.8 0 0 0 2.7 3.2h.4v1.2a1.2 1.2 0 0 0 2.4 0V6.8A2.8 2.8 0 0 0 9.5 4Z" />
      <path d="M14.5 4a2.8 2.8 0 0 1 2.8 2.8v.3A2.6 2.6 0 0 1 19 9.6v.6a2.6 2.6 0 0 1 1 2v1a2.6 2.6 0 0 1-1.6 2.4 2.8 2.8 0 0 1-2.7 3.2H15v1.2a1.2 1.2 0 0 1-2.4 0V6.8A2.8 2.8 0 0 1 14.5 4Z" />
    </Icon>
  ),

  compass: (
    <Icon>
      <circle cx="12" cy="12" r="9" />
      <path d="m14.5 9.5-2 5-5 2 2-5 5-2Z" />
    </Icon>
  ),

  users: (
    <Icon>
      <path d="M17 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 5 18.5V20" />
      <circle cx="9.5" cy="7.5" r="3" />
      <path d="M19 20v-1.5a3.5 3.5 0 0 0-2.5-3.35M15 4.15a3 3 0 0 1 0 5.7" />
    </Icon>
  ),

  calendar: (
    <Icon>
      <rect x="3.5" y="5" width="17" height="16" rx="2.5" />
      <path d="M8 3v4M16 3v4M3.5 10h17" />
      <path d="m9 15 2 2 4-4" />
    </Icon>
  ),

  check: (
    <Icon>
      <path d="m5 12 5 5L20 7" />
    </Icon>
  ),
};

export default function AutismQuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const steps = useMemo(
    () => CONFIG.items.map((text, index) => ({ text, index })),
    []
  );

  const restart = () => {
    setStep(0);
    setAnswers({});
  };

  const selectAnswer = (value) => {
    setAnswers((current) => ({
      ...current,
      [step]: value,
    }));

    setStep((current) => current + 1);
  };

  const score = Object.values(answers).reduce(
    (sum, value) => sum + value,
    0
  );

  let tier = "not_likely";

  if (score >= CONFIG.thresholds.likelyMin) {
    tier = "likely";
  } else if (score >= CONFIG.thresholds.inconclusiveMin) {
    tier = "possible";
  }

  return (
    <main>
      <div className={styles.quizHero}>
        <span className={styles.eyebrow}>Screening quiz</span>

        <h1>Autism Quiz</h1>

        <p>{CONFIG.intro}</p>
      </div>

      <div className={styles.quizPageApp}>
        <div className={styles.quizApp}>
          <div className={styles.quizStaticHeader}>
            <p>This quiz is only for children ages 12 and under.</p>
          </div>

          {step < steps.length ? (
            <QuizQuestion
              step={step}
              total={steps.length}
              question={steps[step].text}
              onAnswer={selectAnswer}
              onBack={() =>
                setStep((current) => Math.max(0, current - 1))
              }
              onRestart={restart}
            />
          ) : (
            <QuizResults
              tier={tier}
              onRestart={restart}
            />
          )}
        </div>

        <div className={styles.backLinkWrap}>
          <a className={styles.quizBackLink} href="/">
            &larr; Back to all quizzes
          </a>
        </div>
      </div>
    </main>
  );
}

function QuizQuestion({
  step,
  total,
  question,
  onAnswer,
  onBack,
  onRestart,
}) {
  const progress = Math.round((step / total) * 100);

  return (
    <>
      <div className={styles.quizProgress}>
        <div
          className={styles.quizProgressBar}
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className={styles.quizStepLabel}>
        Question {step + 1} of {total}
      </div>

      <div className={styles.quizQuestion}>
        {question}
      </div>

      <div className={styles.quizOptions}>
        {CONFIG.mainScale.map((option) => (
          <button
            key={option.value}
            type="button"
            className={styles.quizOption}
            onClick={() => onAnswer(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className={styles.quizNav}>
        {step > 0 ? (
          <button
            type="button"
            className={styles.quizBack}
            onClick={onBack}
          >
            &larr; Back
          </button>
        ) : (
          <span />
        )}

        <button
          type="button"
          className={styles.quizRestart}
          onClick={onRestart}
        >
          Start over
        </button>
      </div>
    </>
  );
}

function QuizResults({ tier, onRestart }) {
  const tierTags = {
    likely: "Some Patterns Noticed",
    possible: "Mixed Signals",
    not_likely: "Few Patterns Noticed",
  };

  const tierInfo = CONFIG.structuredResults.tiers[tier];

  return (
    <>
      <div className={styles.resultHero}>
        <div className={styles.resultIconBadge}>
          {icons.sparkle}
        </div>

        <div className={styles.resultTagNew}>
          {tierTags[tier]}
        </div>

        <h2 className={styles.resultOpener}>
          {tierInfo.opener}
        </h2>

        <p className={styles.resultSubtext}>
          {tierInfo.subtext}
        </p>
      </div>

      <ResultSection
        icon={icons.brain}
        title={`About ${CONFIG.title}`}
      >
        <p>{CONFIG.structuredResults.definition}</p>
      </ResultSection>

      <ResultSection
        icon={icons.compass}
        title="Conditions That Can Look Similar"
      >
        <div className={styles.diffGrid}>
          {CONFIG.structuredResults.differentials.map((item) => (
            <div
              className={styles.diffCard}
              key={item.name}
            >
              <span className={styles.diffName}>
                {item.name}
              </span>

              <span className={styles.diffDesc}>
                {item.desc}
              </span>
            </div>
          ))}
        </div>
      </ResultSection>

      <ResultSection
        icon={icons.users}
        title="Support for the Whole Family"
      >
        <div className={styles.supportGrid}>
          <div className={styles.supportCard}>
            <span className={styles.supportLabel}>
              Family Therapy
            </span>

            <p>{CONFIG.structuredResults.family}</p>
          </div>

          <div className={styles.supportCard}>
            <span className={styles.supportLabel}>
              Group Therapy
            </span>

            <p>{CONFIG.structuredResults.group}</p>
          </div>
        </div>
      </ResultSection>

      <div className={styles.resultCtaSection}>
        <h3>
          Not sure what's next? Let's talk it through.
        </h3>

        <p>
          Only a licensed clinician can sort out what's really
          going on — a quiz can't do that.
        </p>

        <div className={styles.quizResultActions}>
          <a
            className={`${styles.btn} ${styles.btnSolid} ${styles.btnPurple}`}
            href="https://consumer.scheduling.athena.io?locationId=27185-1"
          >
            {icons.calendar}
            Book an Appointment
          </a>

          <button
            type="button"
            className={`${styles.btn} ${styles.btnOutline} ${styles.btnNavy}`}
            onClick={onRestart}
          >
            Retake the Quiz
          </button>
        </div>

        <div className={styles.badgeChipRow}>
          <span className={styles.badgeChip}>
            {icons.check}
            All ages welcome
          </span>

          <span className={styles.badgeChip}>
            {icons.users}
            Family & friends welcome too
          </span>
        </div>
      </div>

      <div className={styles.quizDisclaimer}>
        This quiz is a screening tool for informational purposes
        only. It does not provide a medical diagnosis, and only a
        licensed clinician can diagnose a mental health condition.
        If you are experiencing a mental health emergency, call
        911 or the 988 Suicide & Crisis Lifeline. Please schedule
        an appointment with one of our providers to get a clear
        sense of any diagnosis you may have.
      </div>
    </>
  );
}

function ResultSection({ icon, title, children }) {
  return (
    <section className={styles.resultSection}>
      <div className={styles.resultSectionHead}>
        <span className={styles.iconCircle}>
          {icon}
        </span>

        <h3>{title}</h3>
      </div>

      {children}
    </section>
  );
}