import type { SubTypeAnalysis } from "../types";
import { STRATEGIST_EVOLUTION } from "./evolution";
import { STRATEGIST_SUPPRESSIVE } from "./suppressive";
import { STRATEGIST_DEFENSIVE } from "./defensive";
import { STRATEGIST_REACTIVE } from "./reactive";

export const STRATEGIST_ANALYSIS: SubTypeAnalysis = {
  "エボリューション": STRATEGIST_EVOLUTION,
  "サプレッシブ": STRATEGIST_SUPPRESSIVE,
  "ディフェンシブ": STRATEGIST_DEFENSIVE,
  "リアクティブ": STRATEGIST_REACTIVE,
};
