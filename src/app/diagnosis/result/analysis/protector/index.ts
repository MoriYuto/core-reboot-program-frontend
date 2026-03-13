import type { SubTypeAnalysis } from "../types";
import { PROTECTOR_EVOLUTION } from "./evolution";
import { PROTECTOR_SUPPRESSIVE } from "./suppressive";
import { PROTECTOR_DEFENSIVE } from "./defensive";
import { PROTECTOR_REACTIVE } from "./reactive";

export const PROTECTOR_ANALYSIS: SubTypeAnalysis = {
  "エボリューション": PROTECTOR_EVOLUTION,
  "サプレッシブ": PROTECTOR_SUPPRESSIVE,
  "ディフェンシブ": PROTECTOR_DEFENSIVE,
  "リアクティブ": PROTECTOR_REACTIVE,
};
