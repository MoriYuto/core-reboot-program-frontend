"use client";

import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { ButtonComponent } from "../../component/button_component";
import { ANSWER_OPTIONS, QUESTIONS, STORAGE_KEY } from "../data";

function parseStep(raw: string | undefined): number {
  if (!raw) {
    return 1;
  }
  const parsed = Number(raw.replace("step", ""));
  if (Number.isNaN(parsed) || parsed < 1 || parsed > QUESTIONS.length) {
    return 1;
  }
  return parsed;
}

function getValidStep(answers: Record<number, string>): number {
  const answeredSteps = Object.keys(answers).map(Number);
  if (answeredSteps.length === 0) return 1;
  return Math.max(...answeredSteps) + 1;
}

export default function DiagnosisStepPage() {
  const params = useParams<{ step?: string | string[] }>();
  const router = useRouter();
  const step = Array.isArray(params?.step) ? params.step[0] : params?.step;
  const currentStep = parseStep(step);
  const question = QUESTIONS[currentStep - 1];
  const totalSteps = QUESTIONS.length;
  const [answersByStep, setAnswersByStep] = useState<Record<number, string>>(
    () => {
      if (typeof window === "undefined") return {};
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? (JSON.parse(saved) as Record<number, string>) : {};
      } catch {
        return {};
      }
    }
  );

  const validStep = getValidStep(answersByStep);
  const isAuthorized = currentStep <= validStep;

  useEffect(() => {
    if (currentStep > validStep) {
      router.replace(validStep > QUESTIONS.length ? "/diagnosis/result" : `/diagnosis/step${validStep}`);
    }
  }, [currentStep, validStep, router]);

  const selectedOption = answersByStep[currentStep] ?? "";
  const progressPercent = (currentStep / totalSteps) * 100;
  const isLastStep = currentStep >= totalSteps;

  const handleAnswer = useCallback(
    (value: string) => {
      setAnswersByStep((prev) => {
        const next = { ...prev, [currentStep]: value };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        console.log(`[診断] Step ${currentStep}: 選択=${value}, 保存済み回答数=${Object.keys(next).length}/${totalSteps}`);
        return next;
      });
    },
    [currentStep, totalSteps]
  );

  const handlePrevious = useCallback(() => {
    setAnswersByStep((prev) => {
      const next = { ...prev };
      delete next[currentStep];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      console.log(`[診断] Step ${currentStep} の回答をクリア, 残り回答数=${Object.keys(next).length}/${totalSteps}`);
      return next;
    });
    router.push(currentStep > 1 ? `/diagnosis/step${currentStep - 1}` : "/");
  }, [currentStep, totalSteps, router]);

  const handleNext = useCallback(() => {
    if (isLastStep) {
      router.push("/diagnosis/result");
      
    } else {
      router.push(`/diagnosis/step${currentStep + 1}`);
    }
  }, [isLastStep, router, currentStep]);

  if (!isAuthorized) return null;

  return (
    <main
      className="min-h-screen flex flex-col items-center px-[4vw] py-[4.8rem] bg-surface"
    >
      <div className="w-full flex flex-col gap-[3.2rem] ">
        <div className="w-full flex flex-col gap-[0.4rem]">
          <div className="flex justify-between">
            <span id="progress-label" className="text-body-small text-on-surface-container font-mincho">Analysis Progress</span>
            <span className="text-body-small text-on-surface-container font-mincho">{Math.round(progressPercent)} %</span>
          </div>
          <div
            role="progressbar"
            aria-valuenow={Math.round(progressPercent)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-labelledby="progress-label"
            className="w-full h-[0.8rem] rounded-full bg-surface-container overflow-hidden"
          >
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
        <form aria-label={`質問 ${currentStep} / ${totalSteps}`} className="flex flex-col gap-[2.4rem] rounded-xl bg-surface-container max-w-[72.2rem] px-[3.3vw] py-[4.8rem] mx-auto">
          <p id="step-indicator" className="text-body-small text-on-surface-container text-start">
            Question {currentStep} of {totalSteps}
          </p>
          <fieldset aria-describedby="step-indicator" className="flex flex-col ">
            <legend className="text-title-medium text-on-surface font-mincho">
              {question}
            </legend>
            <div className="h-[4.0rem]">
            </div>
            <div className="flex flex-col gap-[0.8rem]">
              {ANSWER_OPTIONS.map((option, optionIndex) => {
                const optionId = `step-${currentStep}-a-${optionIndex + 1}`;
                const isSelected = selectedOption === String(optionIndex + 1);
                return (
                  <label
                    key={optionId}
                    htmlFor={optionId}
                    className={`flex items-center gap-[1.2rem] rounded-lg border px-[2.8rem] py-[2.0rem] text-body-small cursor-pointer transition ${
                      isSelected
                        ? "border-primary bg-primary-glass text-primary"
                        : "border-surface-container-light bg-surface text-on-surface"
                    }`}
                  >
                    <input
                      id={optionId}
                      type="radio"
                      name={`step-${currentStep}`}
                      value={String(optionIndex + 1)}
                      className="sr-only"
                        checked={isSelected}
                        onChange={(event) => handleAnswer(event.target.value)}
                      required
                    />
                    <span className={`font-roboto min-w-[2.4rem] ${isSelected ? "text-primary" : "text-on-surface-container"}`}>
                      {optionIndex + 1}.
                    </span>
                    <span className={`font-roboto ${isSelected ? "text-primary" : "text-on-surface"}`}>{option}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>


        </form>
        <div className="flex items-center justify-between gap-[1.2rem] pt-[0.8rem] max-w-[72.2rem] w-full mx-auto">
            <ButtonComponent
              onClick={handlePrevious}
              className="border border-surface-container text-label-small text-on-surface"
            >
              {"< Previous"}
            </ButtonComponent>

            <ButtonComponent
              onClick={handleNext}
              disabled={!selectedOption}
              className="bg-primary text-label-small text-on-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLastStep ? "結果を見る" : "Next >"}
            </ButtonComponent>
          </div>
      </div>
    </main>
  );
}