import type { SubTypeAnalysis } from "../types";
import { SUPPRESSOR_EVOLUTION } from "./evolution";
import { SUPPRESSOR_SUPPRESSIVE } from "./suppressive";
import { SUPPRESSOR_DEFENSIVE } from "./defensive";
import { SUPPRESSOR_REACTIVE } from "./reactive";

export const SUPPRESSOR_ANALYSIS: SubTypeAnalysis = {
  "エボリューション": SUPPRESSOR_EVOLUTION,
  "サプレッシブ": SUPPRESSOR_SUPPRESSIVE,
  "ディフェンシブ": SUPPRESSOR_DEFENSIVE,
  "リアクティブ": SUPPRESSOR_REACTIVE,
};
