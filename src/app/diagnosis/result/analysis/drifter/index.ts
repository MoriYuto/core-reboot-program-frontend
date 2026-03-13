import type { SubTypeAnalysis } from "../types";
import { DRIFTER_EVOLUTION } from "./evolution";
import { DRIFTER_SUPPRESSIVE } from "./suppressive";
import { DRIFTER_DEFENSIVE } from "./defensive";
import { DRIFTER_REACTIVE } from "./reactive";

export const DRIFTER_ANALYSIS: SubTypeAnalysis = {
  "エボリューション": DRIFTER_EVOLUTION,
  "サプレッシブ": DRIFTER_SUPPRESSIVE,
  "ディフェンシブ": DRIFTER_DEFENSIVE,
  "リアクティブ": DRIFTER_REACTIVE,
};
