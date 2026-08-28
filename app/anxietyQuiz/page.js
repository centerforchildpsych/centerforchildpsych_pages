"use client";

import { useMemo, useState } from "react";
import styles from "./page.module.css";

const CONFIG = {
  title: "Anxiety",

  intro:
    "Answer honestly — there's no wrong response. This takes about two minutes.",

  hasSafety: true,

  safetyScale: [
    { label: "Not at all", value: 0 },
    { label: "Several days", value: 1 },
    { label: "More than half the days", value: 2 },
    { label: "Nearly every day", value: 3 },
  ],

  backgroundText:
    "In the past two weeks, has the person of interest:",

  isBackgroundFullQuestion: false,

  mainScale: [
    { label: "Not at all", value: 0 },
    { label: "Several days", value: 1 },
    { label: "More than half the days", value: 2 },
    { label: "Nearly every day", value: 3 },
  ],

  items: [
    "felt nervous, anxious, or on edge?",
    "found it hard to stop or control worrying?",
    "felt restless, or had trouble relaxing or sitting still?",
    "worried about a lot of different things?",
    "avoided situations, activities, or social settings because they caused anxiety?",
    "had trouble falling or staying asleep because of worry?",
    "had physical complaints, such as stomachaches or headaches, tied to worry?",
    "sought frequent reassurance from others?",
  ],

  excludeFromScore: [],

  thresholds: {
    likelyMin: 16,
    inconclusiveMin: 8,
  },

  trailing: [],

  results: {
    likely:
      "Your answers show a number of patterns that are often linked to anxiety. That doesn't mean this is a for-sure diagnosis — a screening quiz can only point us in a direction, not confirm what's going on. Anxiety is marked by ongoing worry that's hard to control, along with feelings of restlessness, tension, or trouble sleeping. Because anxiety can overlap with other conditions, it's worth knowing that panic disorder involves sudden waves of intense fear, social anxiety centers on a fear of being judged in social settings, and OCD pairs unwanted thoughts with repetitive behaviors. Depression and ADHD can also look similar on the surface, since low mood and trouble focusing sometimes go along with anxiety too. Anxiety often affects the whole household — family members may find themselves offering constant reassurance or helping avoid anxiety triggers without realizing it can make things harder over time. Family therapy helps loved ones learn how to support without accidentally reinforcing the anxiety, and group therapy connects people with others working through similar worries, which can make the experience feel less isolating. No matter which of these sounds most familiar, we recommend scheduling an appointment with one of our psychiatrists or psychologists. Only a licensed clinician who gets to know the person you're asking about can sort out what's really going on and recommend the right therapy or medication — a quiz can't do that. We see patients of all ages, including young children, so if you were answering on behalf of a child, we're glad to help. And if a family member or friend is affected by what you described, they're welcome to come in too — we offer both family therapy and group therapy alongside individual care.",

    possible:
      "Your answers show a few signs that could be related to anxiety, but the pattern isn't strong enough to say one way or the other. That's completely normal, and it doesn't mean nothing is going on. Anxiety is marked by ongoing worry that's hard to control, along with feelings of restlessness, tension, or trouble sleeping. Because anxiety can overlap with other conditions, it's worth knowing that panic disorder involves sudden waves of intense fear, social anxiety centers on a fear of being judged in social settings, and OCD pairs unwanted thoughts with repetitive behaviors. Depression and ADHD can also look similar on the surface, since low mood and trouble focusing sometimes go along with anxiety too. Anxiety often affects the whole household — family members may find themselves offering constant reassurance or helping avoid anxiety triggers without realizing it can make things harder over time. Family therapy helps loved ones learn how to support without accidentally reinforcing the anxiety, and group therapy connects people with others working through similar worries, which can make the experience feel less isolating. No matter which of these sounds most familiar, we recommend scheduling an appointment with one of our psychiatrists or psychologists. Only a licensed clinician who gets to know the person you're asking about can sort out what's really going on and recommend the right therapy or medication — a quiz can't do that. We see patients of all ages, including young children, so if you were answering on behalf of a child, we're glad to help. And if a family member or friend is affected by what you described, they're welcome to come in too — we offer both family therapy and group therapy alongside individual care.",

    not_likely:
      "Your answers didn't show a strong pattern of anxiety. That's good news, but a quiz like this can't rule anything out completely, and some people show up differently on a questionnaire than they do in everyday life. Anxiety is marked by ongoing worry that's hard to control, along with feelings of restlessness, tension, or trouble sleeping. Because anxiety can overlap with other conditions, it's worth knowing that panic disorder involves sudden waves of intense fear, social anxiety centers on a fear of being judged in social settings, and OCD pairs unwanted thoughts with repetitive behaviors. Depression and ADHD can also look similar on the surface, since low mood and trouble focusing sometimes go along with anxiety too. Anxiety often affects the whole household — family members may find themselves offering constant reassurance or helping avoid anxiety triggers without realizing it can make things harder over time. Family therapy helps loved ones learn how to support without accidentally reinforcing the anxiety, and group therapy connects people with others working through similar worries, which can make the experience feel less isolating. No matter which of these sounds most familiar, we recommend scheduling an appointment with one of our psychiatrists or psychologists. Only a licensed clinician who gets to know the person you're asking about can sort out what's really going on and recommend the right therapy or medication — a quiz can't do that. We see patients of all ages, including young children, so if you were answering on behalf of a child, we're glad to help. And if a family member or friend is affected by what you described, they're welcome to come in too — we offer both family therapy and group therapy alongside individual care.",
  },

  safetyResponse:
    `If you or someone you're asking about is having thoughts of suicide or self-harm, please get help right away. Go to your nearest emergency room, or call 911 if you believe someone is in immediate danger. You can also call or text 988 to reach the 988 Suicide & Crisis Lifeline, available 24 hours a day, or call Central Counties Services at 1-800-888-4036, the local mental health crisis line here in Bell County. If you or someone you know has served in the military, the Veterans Crisis Line is available by calling 988 and pressing 1.

Please know that The Center for Child and Family Psychiatry is an outpatient clinic — we are not an emergency room or urgent care facility, and we are not able to respond to crisis situations in real time. Because safety comes first, we strongly recommend getting help immediately from one of the resources above rather than waiting for a scheduled appointment.`,

  accent: "blue-light",

  structuredResults: {
    tiers: {
      likely: {
        opener:
          "Your answers show a number of patterns that are often linked to anxiety.",
        subtext:
          "We highly recommend making an appointment with one of our providers so they can evaluate whether this — or something else — might be playing a role in what you're experiencing.",
      },

      possible: {
        opener:
          "Your answers show a few signs that could be related to anxiety, but the pattern isn't strong enough to say either way.",
        subtext:
          "We highly recommend making an appointment with one of our providers so they can evaluate whether this — or something else — might be playing a role in what you're experiencing.",
      },

      not_likely: {
        opener:
          "Your answers didn't show a strong pattern of anxiety.",
        subtext:
          "We highly recommend making an appointment with one of our providers so they can evaluate whether this — or something else — might be playing a role in what you're experiencing.",
      },
    },

    definition:
      "Anxiety is marked by ongoing worry that's hard to control, along with feelings of restlessness, tension, or trouble sleeping.",

    differentials: [
      {
        name: "Panic Disorder",
        desc: "Sudden waves of intense fear that come on quickly.",
      },
      {
        name: "Social Anxiety",
        desc: "Fear of being judged or embarrassed in social settings.",
      },
      {
        name: "OCD",
        desc: "Unwanted thoughts paired with repetitive behaviors.",
      },
      {
        name: "Depression & ADHD",
        desc: "Low mood and trouble focusing can sometimes look like anxiety too.",
      },
    ],

    family:
      "Anxiety often affects the whole household — family members may find themselves offering constant reassurance or helping avoid triggers without realizing it can make things harder over time. Family therapy helps loved ones learn how to support without accidentally reinforcing the anxiety.",

    group:
      "Group therapy connects people with others working through similar worries, which can make the experience feel less isolating.",
  },

  safetyQuestion:
    "In the past two weeks, has the person of interest had thoughts that they would be better off dead, or thoughts of hurting themselves?",

  icons: {
    sparkle:
      `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4M12 17v4M5 12H3M21 12h-2M6.3 6.3 4.9 4.9M19.1 19.1l-1.4-1.4M17.7 6.3l1.4-1.4M4.9 19.1l1.4-1.4"/><circle cx="12" cy="12" r="3.2"/></svg>`,

    brain:
      `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 4a2.8 2.8 0 0 0-2.8 2.8v.3A2.6 2.6 0 0 0 5 9.6v.6a2.6 2.6 0 0 0-1 2v1a2.6 2.6 0 0 0 1.6 2.4 2.8 2.8 0 0 0 2.7 3.2h.4v1.2a1.2 1.2 0 0 0 2.4 0V6.8A2.8 2.8 0 0 0 9.5 4Z"/><path d="M14.5 4a2.8 2.8 0 0 1 2.8 2.8v.3A2.6 2.6 0 0 1 19 9.6v.6a2.6 2.6 0 0 1 1 2v1a2.6 2.6 0 0 1-1.6 2.4 2.8 2.8 0 0 1-2.7 3.2H15v1.2a1.2 1.2 0 0 1-2.4 0V6.8A2.8 2.8 0 0 1 14.5 4Z"/></svg>`,

    compass:
      `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m14.5 9.5-2 5-5 2 2-5 5-2Z"/></svg>`,

    users:
      `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 5 18.5V20"/><circle cx="9.5" cy="7.5" r="3"/><path d="M19 20v-1.5a3.5 3.5 0 0 0-2.5-3.35"/><path d="M15 4.15a3 3 0 0 1 0 5.7"/></svg>`,

    calendar:
      `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="16" rx="2.5"/><path d="M8 3v4M16 3v4M3.5 10h17"/><path d="m9 15 2 2 4-4"/></svg>`,

    lifebuoy:
      `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.5"/><path d="m7.5 7.5 2.2 2.2M16.5 7.5l-2.2 2.2M16.5 16.5l-2.2-2.2M7.5 16.5l2.2-2.2"/></svg>`,

    check:
      `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg>`,
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

export default function AnxietyQuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const steps = useMemo(() => {
  const allSteps = [];

  if (CONFIG.hasSafety) {
    allSteps.push({
      type: "safety",
      text: CONFIG.safetyQuestion,
      scale: CONFIG.safetyScale,
      index: -1,
    });
  }

  CONFIG.items.forEach((text, index) => {
    allSteps.push({
      type: "question",
      text,
      scale: CONFIG.mainScale,
      index,
    });
  });

  return allSteps;
}, []);

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

        <h1>Anxiety Quiz</h1>

        <p>{CONFIG.intro}</p>
      </div>

      <div className={styles.quizPageApp}>
        <div className={styles.quizApp}>
          <div className={styles.quizStaticHeader}>
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
      {step === 0 ? (
          ""
        ) : (
          <>
            <p className={styles.quizQuestion}>
              In the past two weeks, has the person of interest:
            </p>
            <div className={styles.quizQuestionSep}></div>
          </>
        )}
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