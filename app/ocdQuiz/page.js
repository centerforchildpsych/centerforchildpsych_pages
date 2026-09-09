"use client";

import { useMemo, useState } from "react";
import styles from "./page.module.css";

const CONFIG = {
  title: "OCD",

  intro:
    "Answer honestly — there's no wrong response. This takes about two minutes.",

  hasSafety: true,

  safetyScale: [
    { label: "Yes", value: 1 },
    { label: "No", value: 0 },
    { label: "Not sure", value: 0.5 },
  ],

  backgroundText:
    "Has the person of interest experienced any of the following in a way that caused significant distress, took up a great deal of time, or made it difficult to carry out daily responsibilities:",

  isBackgroundFullQuestion: true,

  mainScale: [
    { label: "Yes", value: 1 },
    { label: "No", value: 0 },
    { label: "Not sure", value: 0.5 },
  ],

  items: [
    "Unwanted, repeated thoughts that are hard to stop",
    "Repeating certain actions, such as checking, washing, or counting",
    "Spending an hour or more a day on thoughts or behaviors that are intrusive or unwanted",
    "Intense anxiety when unable to complete a repeated behavior",
    "Needing things arranged or done in a very particular way",
    "Avoiding situations that trigger unwanted thoughts",
    "Getting very upset when routines or arrangements are disrupted",
  ],

  excludeFromScore: [],

  thresholds: {
    likelyMin: 4,
    inconclusiveMin: 2,
  },

  trailing: [],

  results: {
    likely:
      "Your answers show a number of patterns that are often linked to OCD. That doesn't mean this is a for-sure diagnosis — a screening quiz can only point us in a direction, not confirm what's going on. OCD involves unwanted, intrusive thoughts (obsessions) paired with repetitive behaviors or mental rituals (compulsions) done to ease the distress those thoughts cause. It can resemble generalized anxiety, though anxiety alone doesn't usually include compulsions; body dysmorphic disorder, which centers specifically on perceived flaws in appearance; and autism spectrum traits, where routines and repetition serve a different purpose. Family members often become part of a loved one's compulsions without meaning to — for example, offering reassurance over and over, or helping complete rituals to ease the person's distress. Unfortunately, this can unintentionally make OCD stronger over time. Family therapy teaches loved ones how to offer support in healthier ways, and group therapy connects people with others working through similar patterns using proven approaches like exposure and response prevention (ERP). No matter which of these sounds most familiar, we recommend scheduling an appointment with one of our psychiatrists or psychologists. Only a licensed clinician who gets to know the person you're asking about can sort out what's really going on and recommend the right therapy or medication — a quiz can't do that. We see patients of all ages, including young children, so if you were answering on behalf of a child, we're glad to help. And if a family member or friend is affected by what you described, they're welcome to come in too — we offer both family therapy and group therapy alongside individual care.",

    possible:
      "Your answers show a few signs that could be related to OCD, but the pattern isn't strong enough to say one way or the other. That's completely normal, and it doesn't mean nothing is going on. OCD involves unwanted, intrusive thoughts (obsessions) paired with repetitive behaviors or mental rituals (compulsions) done to ease the distress those thoughts cause. It can resemble generalized anxiety, though anxiety alone doesn't usually include compulsions; body dysmorphic disorder, which centers specifically on perceived flaws in appearance; and autism spectrum traits, where routines and repetition serve a different purpose. Family members often become part of a loved one's compulsions without meaning to — for example, offering reassurance over and over, or helping complete rituals to ease the person's distress. Unfortunately, this can unintentionally make OCD stronger over time. Family therapy teaches loved ones how to offer support in healthier ways, and group therapy connects people with others working through similar patterns using proven approaches like exposure and response prevention (ERP). No matter which of these sounds most familiar, we recommend scheduling an appointment with one of our psychiatrists or psychologists. Only a licensed clinician who gets to know the person you're asking about can sort out what's really going on and recommend the right therapy or medication — a quiz can't do that. We see patients of all ages, including young children, so if you were answering on behalf of a child, we're glad to help. And if a family member or friend is affected by what you described, they're welcome to come in too — we offer both family therapy and group therapy alongside individual care.",

    not_likely:
      "Your answers didn't show a strong pattern of OCD. That's good news, but a quiz like this can't rule anything out completely, and some people show up differently on a questionnaire than they do in everyday life. OCD involves unwanted, intrusive thoughts (obsessions) paired with repetitive behaviors or mental rituals (compulsions) done to ease the distress those thoughts cause. It can resemble generalized anxiety, though anxiety alone doesn't usually include compulsions; body dysmorphic disorder, which centers specifically on perceived flaws in appearance; and autism spectrum traits, where routines and repetition serve a different purpose. Family members often become part of a loved one's compulsions without meaning to — for example, offering reassurance over and over, or helping complete rituals to ease the person's distress. Unfortunately, this can unintentionally make OCD stronger over time. Family therapy teaches loved ones how to offer support in healthier ways, and group therapy connects people with others working through similar patterns using proven approaches like exposure and response prevention (ERP). No matter which of these sounds most familiar, we recommend scheduling an appointment with one of our psychiatrists or psychologists. Only a licensed clinician who gets to know the person you're asking about can sort out what's really going on and recommend the right therapy or medication — a quiz can't do that. We see patients of all ages, including young children, so if you were answering on behalf of a child, we're glad to help. And if a family member or friend is affected by what you described, they're welcome to come in too — we offer both family therapy and group therapy alongside individual care.",
  },

  safetyResponse: `If you or someone you're asking about is having thoughts of suicide or self-harm, please get help right away. Go to your nearest emergency room, or call 911 if you believe someone is in immediate danger. You can also call or text 988 to reach the 988 Suicide & Crisis Lifeline, available 24 hours a day, or call Central Counties Services at 1-800-888-4036, the local mental health crisis line here in Bell County. If you or someone you know has served in the military, the Veterans Crisis Line is available by calling 988 and pressing 1.

Please know that The Center for Child and Family Psychiatry is an outpatient clinic — we are not an emergency room or urgent care facility, and we are not able to respond to crisis situations in real time. Because safety comes first, we strongly recommend getting help immediately from one of the resources above rather than waiting for a scheduled appointment.`,

  accent: "teal-deep",

  structuredResults: {
    tiers: {
      likely: {
        opener:
          "Your answers show a number of patterns that are often linked to OCD.",
        subtext:
          "We highly recommend making an appointment with one of our providers so they can evaluate whether this — or something else — might be playing a role in what you're experiencing.",
      },

      possible: {
        opener:
          "Your answers show a few signs that could be related to OCD, but the pattern isn't strong enough to say either way.",
        subtext:
          "We highly recommend making an appointment with one of our providers so they can evaluate whether this — or something else — might be playing a role in what you're experiencing.",
      },

      not_likely: {
        opener:
          "Your answers didn't show a strong pattern of OCD.",
        subtext:
          "We highly recommend making an appointment with one of our providers so they can evaluate whether this — or something else — might be playing a role in what you're experiencing.",
      },
    },

    definition:
      "OCD involves unwanted, intrusive thoughts (obsessions) paired with repetitive behaviors or mental rituals (compulsions) done to ease the distress those thoughts cause.",

    differentials: [
      {
        name: "Generalized Anxiety",
        desc: "Anxiety alone doesn't usually include compulsions.",
      },
      {
        name: "Body Dysmorphic Disorder",
        desc: "Centers specifically on perceived flaws in appearance.",
      },
      {
        name: "Autism Spectrum Traits",
        desc: "Routines and repetition serve a different purpose.",
      },
    ],

    family:
      "Family members often become part of a loved one's compulsions without meaning to — offering reassurance over and over, or helping complete rituals. Family therapy teaches loved ones how to offer support in healthier ways.",

    group:
      "Group therapy connects people with others working through similar patterns using proven approaches like exposure and response prevention (ERP).",
  },

  safetyQuestion:
    "In the past two weeks, has the person of interest had thoughts that they would be better off dead, or thoughts of hurting themselves?",
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
      <path d="M12 3v4M12 17v4M5 12H3M21 12h-2M6.3 6.3 4.9 4.9M19.1 19.1l-1.4-1.4M17.7 6.3l1.4-1.4M4.9 19.1l1.4-1.4" />
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

  lifebuoy: (
    <Icon>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="m7.5 7.5 2.2 2.2M16.5 7.5l-2.2 2.2M16.5 16.5l-2.2-2.2M7.5 16.5l2.2-2.2" />
    </Icon>
  ),

  check: (
    <Icon>
      <path d="m5 12 5 5L20 7" />
    </Icon>
  ),
};

export default function OCDQuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  /*
   * This matches the working HTML quiz:
   *
   * 1. Safety question first.
   * 2. OCD questions after it.
   * 3. Optional trailing questions after the OCD questions.
   */
  const steps = useMemo(() => {
    const allSteps = [];

    if (CONFIG.hasSafety) {
      allSteps.push({
        type: "safety",
        text: CONFIG.safetyQuestion,
        scale: CONFIG.safetyScale,
      });
    }

    CONFIG.items.forEach((text, index) => {
      allSteps.push({
        type: "question",
        text,
        scale: CONFIG.mainScale,
        index,
        excluded: CONFIG.excludeFromScore.includes(index),
      });
    });

    CONFIG.trailing.forEach((trailingQuestion, index) => {
      allSteps.push({
        type: "trailing",
        text: trailingQuestion.text,
        choices: trailingQuestion.choices,
        modifierTrigger: trailingQuestion.modifierTrigger,
        trailingIndex: index,
      });
    });

    return allSteps;
  }, []);

  const restart = () => {
    setStep(0);
    setAnswers({});
  };

  const selectAnswer = (value) => {
    setAnswers((currentAnswers) => ({
      ...currentAnswers,
      [step]: value,
    }));

    setStep((currentStep) => currentStep + 1);
  };

  /*
   * ---------------------------------------------------------
   * SCORING
   * ---------------------------------------------------------
   *
   * This intentionally follows the original working quiz.
   *
   * The safety question is NOT part of the OCD score.
   *
   * Every actual "question" step contributes its answer value
   * unless that question is marked excluded.
   */
  let safetyFlag = false;
  let score = 0;

  steps.forEach((quizStep, index) => {
    const answer = answers[index];

    if (quizStep.type === "safety") {
      /*
       * IMPORTANT:
       * The original quiz uses:
       *
       * if (Number(answer) > 0) safetyFlag = true;
       *
       * Therefore:
       * Yes      = 1   -> safety warning
       * No       = 0   -> no warning
       * Not sure = 0.5 -> safety warning
       */
      if (Number(answer) > 0) {
        safetyFlag = true;
      }
    } else if (
      quizStep.type === "question" &&
      !quizStep.excluded
    ) {
      /*
       * Safety is never added here.
       * Only OCD questions are scored.
       */
      score += Number(answer) || 0;
    }
  });

  /*
   * Determine the initial OCD result tier.
   */
  let tier;

  if (score >= CONFIG.thresholds.likelyMin) {
    tier = "likely";
  } else if (score >= CONFIG.thresholds.inconclusiveMin) {
    tier = "possible";
  } else {
    tier = "not_likely";
  }

  /*
   * ---------------------------------------------------------
   * TRAILING QUESTION MODIFIERS
   * ---------------------------------------------------------
   *
   * Matches the original HTML behavior:
   *
   * Only a "likely" result can be downgraded.
   *
   * If a trailing question's answer matches its
   * modifierTrigger, the result becomes "possible".
   */
  steps.forEach((quizStep, index) => {
    if (
      quizStep.type === "trailing" &&
      tier === "likely"
    ) {
      const answer = answers[index];

      if (answer === quizStep.modifierTrigger) {
        tier = "possible";
      }
    }
  });

  return (
    <main>
      <div className={styles.quizHero}>
        <span className={styles.eyebrow}>
          Screening quiz
        </span>

        <h1>OCD Quiz</h1>

        <p>{CONFIG.intro}</p>
      </div>

      <div className={styles.quizPageApp}>
        <div className={styles.quizApp}>
          <div className={styles.quizStaticHeader}></div>

          {step < steps.length ? (
            <QuizQuestion
              step={step}
              total={steps.length}
              question={steps[step].text}
              quizStep={steps[step]}
              onAnswer={selectAnswer}
              onBack={() =>
                setStep((currentStep) =>
                  Math.max(0, currentStep - 1)
                )
              }
              onRestart={restart}
            />
          ) : (
            <QuizResults
              tier={tier}
              safetyFlag={safetyFlag}
              onRestart={restart}
            />
          )}
        </div>

        <div className={styles.backLinkWrap}>
          <a
            className={styles.quizBackLink}
            href="/"
          >
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
  quizStep,
  onAnswer,
  onBack,
  onRestart,
}) {
  const progress = Math.round(
    (step / total) * 100
  );

  const isSafetyQuestion =
    quizStep.type === "safety";

  /*
   * Use the safety scale for the safety question.
   * Use the main scale for OCD questions.
   *
   * This is important because the quiz has two
   * different logical sections.
   */
  const options =
    quizStep.type === "trailing"
      ? quizStep.choices.map((choice) => ({
          label: choice,
          value: choice,
        }))
      : quizStep.scale.map((option) => ({
          label: option.label,
          value: option.value,
        }));

  return (
    <>
      <div className={styles.quizProgress}>
        <div
          className={styles.quizProgressBar}
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <div className={styles.quizStepLabel}>
        Question {step + 1} of {total}
      </div>

      {quizStep.type === "question" &&
      CONFIG.backgroundText ? (
        <>
          <p className={styles.quizQuestion}>
            {CONFIG.backgroundText}
          </p>

          <div
            className={styles.quizQuestionSep}
          ></div>
        </>
      ) : null}

      <div className={styles.quizQuestion}>
        {question}
      </div>

      <div className={styles.quizOptions}>
        {options.map((option, index) => (
          <button
            key={`${option.label}-${index}`}
            type="button"
            className={styles.quizOption}
            onClick={() =>
              onAnswer(option.value)
            }
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

function QuizResults({
  tier,
  safetyFlag,
  onRestart,
}) {
  const tierTags = {
    likely: "Some Patterns Noticed",
    possible: "Mixed Signals",
    not_likely: "Few Patterns Noticed",
  };

  const tierInfo =
    CONFIG.structuredResults.tiers[tier];

  return (
    <>
      {/*
       * SAFETY RESPONSE
       *
       * This is intentionally before the results,
       * matching the original working quiz.
       *
       * safetyFlag is true for:
       * Yes = 1
       * Not sure = 0.5
       *
       * safetyFlag is false for:
       * No = 0
       */}
      {safetyFlag ? (
        <div className={styles.quizCrisis}>
          <div>
            <h4>
              {icons.lifebuoy}
              Please reach out for support
            </h4>

            {CONFIG.safetyResponse
              .split("\n\n")
              .map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
          </div>
        </div>
      ) : null}

      <div className={styles.resultHero}>
        <div
          className={styles.resultIconBadge}
        >
          {icons.sparkle}
        </div>

        <div className={styles.resultTagNew}>
          {tierTags[tier]}
        </div>

        <h2
          className={styles.resultOpener}
        >
          {tierInfo.opener}
        </h2>

        <p
          className={styles.resultSubtext}
        >
          {tierInfo.subtext}
        </p>
      </div>

      <ResultSection
        icon={icons.brain}
        title={`About ${CONFIG.title}`}
      >
        <p>
          {CONFIG.structuredResults.definition}
        </p>
      </ResultSection>

      <ResultSection
        icon={icons.compass}
        title="Conditions That Can Look Similar"
      >
        <div className={styles.diffGrid}>
          {CONFIG.structuredResults.differentials.map(
            (item) => (
              <div
                className={styles.diffCard}
                key={item.name}
              >
                <span
                  className={styles.diffName}
                >
                  {item.name}
                </span>

                <span
                  className={styles.diffDesc}
                >
                  {item.desc}
                </span>
              </div>
            )
          )}
        </div>
      </ResultSection>

      <ResultSection
        icon={icons.users}
        title="Support for the Whole Family"
      >
        <div className={styles.supportGrid}>
          <div className={styles.supportCard}>
            <span
              className={styles.supportLabel}
            >
              Family Therapy
            </span>

            <p>
              {CONFIG.structuredResults.family}
            </p>
          </div>

          <div className={styles.supportCard}>
            <span
              className={styles.supportLabel}
            >
              Group Therapy
            </span>

            <p>
              {CONFIG.structuredResults.group}
            </p>
          </div>
        </div>
      </ResultSection>

      <div className={styles.resultCtaSection}>
        <h3>
          Not sure what's next? Let's talk it
          through.
        </h3>

        <p>
          Only a licensed clinician can sort
          out what's really going on — a quiz
          can't do that.
        </p>

        <div
          className={styles.quizResultActions}
        >
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
            Family &amp; friends welcome too
          </span>
        </div>
      </div>

      <div className={styles.quizDisclaimer}>
        This quiz is a screening tool for
        informational purposes only. It does not
        provide a medical diagnosis, and only a
        licensed clinician can diagnose a mental
        health condition. If you are experiencing
        a mental health emergency, call 911 or the
        988 Suicide &amp; Crisis Lifeline. Please
        schedule an appointment with one of our
        providers to get a clear sense of any
        diagnosis you may have.
      </div>
    </>
  );
}

function ResultSection({
  icon,
  title,
  children,
}) {
  return (
    <section className={styles.resultSection}>
      <div
        className={styles.resultSectionHead}
      >
        <span className={styles.iconCircle}>
          {icon}
        </span>

        <h3>{title}</h3>
      </div>

      {children}
    </section>
  );
}