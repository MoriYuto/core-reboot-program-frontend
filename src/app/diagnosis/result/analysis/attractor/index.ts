import type { SubTypeAnalysis } from "../types";
import { ATTRACTOR_EVOLUTION } from "./evolution";
import { ATTRACTOR_SUPPRESSIVE } from "./suppressive";
import { ATTRACTOR_DEFENSIVE } from "./defensive";
import { ATTRACTOR_REACTIVE } from "./reactive";

export const ATTRACTOR_ANALYSIS: SubTypeAnalysis = {
  "エボリューション": ATTRACTOR_EVOLUTION,
  "サプレッシブ": ATTRACTOR_SUPPRESSIVE,
  "ディフェンシブ": ATTRACTOR_DEFENSIVE,
  "リアクティブ": ATTRACTOR_REACTIVE,
};
