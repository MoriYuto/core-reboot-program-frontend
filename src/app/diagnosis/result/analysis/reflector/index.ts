import type { SubTypeAnalysis } from "../types";
import { REFLECTOR_EVOLUTION } from "./evolution";
import { REFLECTOR_SUPPRESSIVE } from "./suppressive";
import { REFLECTOR_DEFENSIVE } from "./defensive";
import { REFLECTOR_REACTIVE } from "./reactive";

export const REFLECTOR_ANALYSIS: SubTypeAnalysis = {
  "エボリューション": REFLECTOR_EVOLUTION,
  "サプレッシブ": REFLECTOR_SUPPRESSIVE,
  "ディフェンシブ": REFLECTOR_DEFENSIVE,
  "リアクティブ": REFLECTOR_REACTIVE,
};
