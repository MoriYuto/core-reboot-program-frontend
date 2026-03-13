import type { SubTypeAnalysis } from "../types";
import { CONTROLLER_EVOLUTION } from "./evolution";
import { CONTROLLER_SUPPRESSIVE } from "./suppressive";
import { CONTROLLER_DEFENSIVE } from "./defensive";
import { CONTROLLER_REACTIVE } from "./reactive";

export const CONTROLLER_ANALYSIS: SubTypeAnalysis = {
  "エボリューション": CONTROLLER_EVOLUTION,
  "サプレッシブ": CONTROLLER_SUPPRESSIVE,
  "ディフェンシブ": CONTROLLER_DEFENSIVE,
  "リアクティブ": CONTROLLER_REACTIVE,
};
