import type { SubTypeAnalysis } from "../types";
import { EMPATH_EVOLUTION } from "./evolution";
import { EMPATH_SUPPRESSIVE } from "./suppressive";
import { EMPATH_DEFENSIVE } from "./defensive";
import { EMPATH_REACTIVE } from "./reactive";

export const EMPATH_ANALYSIS: SubTypeAnalysis = {
  "エボリューション": EMPATH_EVOLUTION,
  "サプレッシブ": EMPATH_SUPPRESSIVE,
  "ディフェンシブ": EMPATH_DEFENSIVE,
  "リアクティブ": EMPATH_REACTIVE,
};
