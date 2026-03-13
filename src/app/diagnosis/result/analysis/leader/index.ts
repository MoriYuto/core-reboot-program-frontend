import type { SubTypeAnalysis } from "../types";
import { LEADER_EVOLUTION } from "./evolution";
import { LEADER_SUPPRESSIVE } from "./suppressive";
import { LEADER_DEFENSIVE } from "./defensive";
import { LEADER_REACTIVE } from "./reactive";

export const LEADER_ANALYSIS: SubTypeAnalysis = {
  "エボリューション": LEADER_EVOLUTION,
  "サプレッシブ": LEADER_SUPPRESSIVE,
  "ディフェンシブ": LEADER_DEFENSIVE,
  "リアクティブ": LEADER_REACTIVE,
};
