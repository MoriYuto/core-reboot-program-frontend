import type { SubTypeAnalysis } from "../types";
import { EXPLORER_EVOLUTION } from "./evolution";
import { EXPLORER_SUPPRESSIVE } from "./suppressive";
import { EXPLORER_DEFENSIVE } from "./defensive";
import { EXPLORER_REACTIVE } from "./reactive";

export const EXPLORER_ANALYSIS: SubTypeAnalysis = {
  "エボリューション": EXPLORER_EVOLUTION,
  "サプレッシブ": EXPLORER_SUPPRESSIVE,
  "ディフェンシブ": EXPLORER_DEFENSIVE,
  "リアクティブ": EXPLORER_REACTIVE,
};
