import { NextResponse } from "next/server";
import { CATEGORIES, type SubCategoryScore } from "../../diagnosis/data";
import {
  calcAllScores,
  classifyFull,
  getPerformanceLevel,
} from "../../diagnosis/scoring";
import { getAnalysisItems } from "../../diagnosis/result/analysis";
import type { DiagnosisApiResponse } from "../../diagnosis/result/types";

function isValidAnswers(
  value: unknown
): value is Record<number, string> {
  if (typeof value !== "object" || value === null) return false;
  const obj = value as Record<string, unknown>;
  return Object.entries(obj).every(
    ([key, val]) => !Number.isNaN(Number(key)) && typeof val === "string"
  );
}

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();

    if (
      typeof body !== "object" ||
      body === null ||
      !("answers" in body) ||
      !isValidAnswers((body as { answers: unknown }).answers)
    ) {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      );
    }

    const { answers } = body as { answers: Record<number, string> };

    const scores: SubCategoryScore[] = calcAllScores(answers);
    const diagnosis = classifyFull(scores);

    const analysisItems = getAnalysisItems(
      diagnosis.mainType.nameEn,
      diagnosis.subType.name
    );

    const mainCategories = CATEGORIES.map((cat) => {
      const subs = scores.filter((s) => s.mainCategory === cat.name);
      const totalScore = subs.reduce((sum, s) => sum + s.score, 0);
      const totalMax = subs.reduce((sum, s) => sum + s.maxScore, 0);
      return {
        name: cat.name,
        nameEn: cat.nameEn,
        subs,
        totalScore,
        totalMax,
        level: getPerformanceLevel(totalScore, totalMax),
      };
    });

    const response: DiagnosisApiResponse = {
      diagnosis,
      scores,
      mainCategories,
      analysisItems,
    };

    return NextResponse.json(response);
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
