import Link from "next/link";
import styles from "./page.module.css";

export const metadata = { title: "Take Our Quiz | The Center for Child and Family Psychiatry, PC", description: "Explore our brief mental health screening quizzes." };

export default function TakeOurQuizPage() {
 return (
 <main className={styles.page}>
  <div className={styles.blob} aria-hidden="true" />
  <div className={styles.inner}>
   <span className={styles.eyebrow}>Concerned you or your loved one may have a condition?</span>
   <h1>Take Our Quiz</h1>
   <p className={styles.intro}>Take a quick, judgment-free quiz to find out — pick whatever feels closest to what you or your child has been experiencing, and we&apos;ll help point you toward what might be going on.</p>
   <div className={styles.grid}>
    <Link className={styles.card} href="/quiz-anxiety">
      <span className={styles.icon}><svg aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M3 9h10a2.5 2.5 0 1 0-2.5-2.5"></path><path d="M3 14h14a2.5 2.5 0 1 1-2.5 2.5"></path><path d="M3 19h7"></path></svg></span>
      <span className={styles.cardLabel}>Anxiety</span>
      <span className={styles.cardArrow}>Take the quiz →</span>
    </Link>
    <Link className={styles.card} href="/quiz-depression">
      <span className={styles.icon}><svg aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M7 14.5a4 4 0 0 1-.5-7.97A5.5 5.5 0 0 1 17 8a3.5 3.5 0 0 1 .5 6.5H7Z"></path><path d="M8 17.5l-1 2.5M12.5 17.5l-1 2.5M17 17.5l-1 2.5"></path></svg></span>
      <span className={styles.cardLabel}>Depression</span>
      <span className={styles.cardArrow}>Take the quiz →</span>
    </Link>
    <Link className={styles.card} href="/quiz-adhd">
      <span className={styles.icon}><svg aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M13 3 5 13.5h6L10 21l8-10.5h-6L13 3Z"></path></svg></span>
      <span className={styles.cardLabel}>ADHD</span>
      <span className={styles.cardArrow}>Take the quiz →</span>
    </Link>
    <Link className={styles.card} href="/quiz-bipolar">
      <span className={styles.icon}><svg aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M2 12c2-7 4-7 6 0s4 7 6 0 4-7 6 0"></path></svg></span>
      <span className={styles.cardLabel}>Bipolar Disorder</span>
      <span className={styles.cardArrow}>Take the quiz →</span>
    </Link>
    <Link className={styles.card} href="/quiz-autism">
      <span className={styles.icon}><svg aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z"></path></svg></span>
      <span className={styles.cardLabel}>Autism</span>
      <span className={styles.cardArrow}>Take the quiz →</span>
    </Link>
    <Link className={styles.card} href="/quiz-borderline">
      <span className={styles.icon}><svg aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="M7 21h10"></path><path d="M12 3v18"></path><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path></svg></span>
      <span className={styles.cardLabel}>Borderline Personality Disorder</span>
      <span className={styles.cardArrow}>Take the quiz →</span>
    </Link>
    <Link className={styles.card} href="/quiz-ocd">
      <span className={styles.icon}><svg aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M4 12a8 8 0 0 1 13.7-5.6L20 8.5"></path><path d="M20 4v4.5h-4.5"></path><path d="M20 12a8 8 0 0 1-13.7 5.6L4 15.5"></path><path d="M4 20v-4.5h4.5"></path></svg></span>
      <span className={styles.cardLabel}>OCD</span>
      <span className={styles.cardArrow}>Take the quiz →</span>
    </Link>
   </div>
   <p className={styles.note}>Each quiz takes about two minutes. The autism quiz is designed for children; the others can be taken for yourself or for a child in your life.</p>
  </div>
 </main>
 );
}
