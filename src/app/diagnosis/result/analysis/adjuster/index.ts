import type { SubTypeAnalysis } from "../types";
import { ADJUSTER_EVOLUTION } from "./evolution";
import { ADJUSTER_SUPPRESSIVE } from "./suppressive";
import { ADJUSTER_DEFENSIVE } from "./defensive";
import { ADJUSTER_REACTIVE } from "./reactive";

export const ADJUSTER_ANALYSIS: SubTypeAnalysis = {
  "エボリューション": ADJUSTER_EVOLUTION,
  "サプレッシブ": ADJUSTER_SUPPRESSIVE,
  "ディフェンシブ": ADJUSTER_DEFENSIVE,
  "リアクティブ": ADJUSTER_REACTIVE,
};
