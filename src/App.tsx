import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { DataDecor } from "./components/DataDecor";
import { Welcome } from "./pages/Welcome";
import { Profile } from "./pages/Profile";
import { Diagnostic } from "./pages/Diagnostic";
import { Calculating } from "./pages/Calculating";
import { Results } from "./pages/Results";
import { profileQuestions } from "./data/profileQuestions";
import { questions } from "./data/questions";
import { calculateResult } from "./utils/scoring";
import type { Answers } from "./types/diagnostic";

type Page = "welcome" | "profile" | "diagnostic" | "calculating" | "results";

const PROFILE_COUNT = profileQuestions.length; // 2
const DIAGNOSTIC_COUNT = questions.length; // 10
const TOTAL_STEPS = PROFILE_COUNT + DIAGNOSTIC_COUNT; // 12

const emptyAnswers: Answers = {
  profile: {},
  profileFreeText: {},
  diagnostic: {},
  optionalFields: {},
};

function App() {
  const [page, setPage] = useState<Page>("welcome");
  const [profileStep, setProfileStep] = useState(0);
  const [diagnosticStep, setDiagnosticStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(emptyAnswers);

  useEffect(() => {
    if (page !== "calculating") return;
    const timer = setTimeout(() => setPage("results"), 1200);
    return () => clearTimeout(timer);
  }, [page]);

  function handleProfileAnswer(questionId: string, optionId: string) {
    setAnswers((prev) => ({
      ...prev,
      profile: { ...prev.profile, [questionId]: optionId },
    }));
  }

  function handleProfileFreeText(questionId: string, value: string) {
    setAnswers((prev) => ({
      ...prev,
      profileFreeText: { ...prev.profileFreeText, [questionId]: value },
    }));
  }

  function handleDiagnosticAnswer(questionId: string, optionId: string) {
    setAnswers((prev) => ({
      ...prev,
      diagnostic: { ...prev.diagnostic, [questionId]: optionId },
    }));
  }

  function handleOptionalField(fieldId: string, value: string | string[]) {
    setAnswers((prev) => ({
      ...prev,
      optionalFields: { ...prev.optionalFields, [fieldId]: value },
    }));
  }

  function handleProfileNext() {
    if (profileStep < PROFILE_COUNT - 1) {
      setProfileStep((s) => s + 1);
    } else {
      setPage("diagnostic");
      setDiagnosticStep(0);
    }
  }

  function handleProfileBack() {
    if (profileStep > 0) {
      setProfileStep((s) => s - 1);
    } else {
      setPage("welcome");
    }
  }

  function handleDiagnosticNext() {
    if (diagnosticStep < DIAGNOSTIC_COUNT - 1) {
      setDiagnosticStep((s) => s + 1);
    } else {
      setPage("calculating");
    }
  }

  function handleDiagnosticBack() {
    if (diagnosticStep > 0) {
      setDiagnosticStep((s) => s - 1);
    } else {
      setPage("profile");
      setProfileStep(PROFILE_COUNT - 1);
    }
  }

  function handleRestart() {
    setAnswers(emptyAnswers);
    setProfileStep(0);
    setDiagnosticStep(0);
    setPage("welcome");
  }

  const result = page === "results" ? calculateResult(answers) : null;

  return (
    <div className="min-h-svh bg-bg">
      <DataDecor />
      <Header />
      {page === "welcome" && <Welcome onStart={() => setPage("profile")} />}
      {page === "profile" && (
        <Profile
          stepIndex={profileStep}
          totalSteps={TOTAL_STEPS}
          answers={answers}
          onAnswer={handleProfileAnswer}
          onFreeText={handleProfileFreeText}
          onNext={handleProfileNext}
          onBack={handleProfileBack}
        />
      )}
      {page === "diagnostic" && (
        <Diagnostic
          stepIndex={diagnosticStep}
          currentStepNumber={PROFILE_COUNT + diagnosticStep + 1}
          totalSteps={TOTAL_STEPS}
          answers={answers}
          onAnswer={handleDiagnosticAnswer}
          onOptionalField={handleOptionalField}
          onNext={handleDiagnosticNext}
          onBack={handleDiagnosticBack}
        />
      )}
      {page === "calculating" && <Calculating />}
      {page === "results" && result && <Results result={result} onRestart={handleRestart} />}
    </div>
  );
}

export default App;
