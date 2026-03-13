import type { SubTypeAnalysis } from "../types";
import { THINKER_EVOLUTION } from "./evolution";
import { THINKER_SUPPRESSIVE } from "./suppressive";
import { THINKER_DEFENSIVE } from "./defensive";
import { THINKER_REACTIVE } from "./reactive";

export const THINKER_ANALYSIS: SubTypeAnalysis = {
  "エボリューション": THINKER_EVOLUTION,
  "サプレッシブ": THINKER_SUPPRESSIVE,
  "ディフェンシブ": THINKER_DEFENSIVE,
  "リアクティブ": THINKER_REACTIVE,
};
