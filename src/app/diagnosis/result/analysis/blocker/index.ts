import type { SubTypeAnalysis } from "../types";
import { BLOCKER_EVOLUTION } from "./evolution";
import { BLOCKER_SUPPRESSIVE } from "./suppressive";
import { BLOCKER_DEFENSIVE } from "./defensive";
import { BLOCKER_REACTIVE } from "./reactive";

export const BLOCKER_ANALYSIS: SubTypeAnalysis = {
  "エボリューション": BLOCKER_EVOLUTION,
  "サプレッシブ": BLOCKER_SUPPRESSIVE,
  "ディフェンシブ": BLOCKER_DEFENSIVE,
  "リアクティブ": BLOCKER_REACTIVE,
};
