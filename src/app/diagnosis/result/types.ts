import type { FullDiagnosisResult, PerformanceLevel, SubCategoryScore } from "../data";
import type { AnalysisItem } from "./analysis";

export type MainCategoryResult = {
  name: string;
  nameEn: string;
  subs: SubCategoryScore[];
  totalScore: number;
  totalMax: number;
  level: PerformanceLevel;
};

export type DiagnosisApiResponse = {
  diagnosis: FullDiagnosisResult;
  scores: SubCategoryScore[];
  mainCategories: MainCategoryResult[];
  analysisItems: AnalysisItem[] | null;
};
