import type { SubTypeAnalysis } from "../types";
import { HEALER_EVOLUTION } from "./evolution";
import { HEALER_SUPPRESSIVE } from "./suppressive";
import { HEALER_DEFENSIVE } from "./defensive";
import { HEALER_REACTIVE } from "./reactive";

export const HEALER_ANALYSIS: SubTypeAnalysis = {
  "エボリューション": HEALER_EVOLUTION,
  "サプレッシブ": HEALER_SUPPRESSIVE,
  "ディフェンシブ": HEALER_DEFENSIVE,
  "リアクティブ": HEALER_REACTIVE,
};
