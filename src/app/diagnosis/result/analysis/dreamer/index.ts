import type { SubTypeAnalysis } from "../types";
import { DREAMER_EVOLUTION } from "./evolution";
import { DREAMER_SUPPRESSIVE } from "./suppressive";
import { DREAMER_DEFENSIVE } from "./defensive";
import { DREAMER_REACTIVE } from "./reactive";

export const DREAMER_ANALYSIS: SubTypeAnalysis = {
  "エボリューション": DREAMER_EVOLUTION,
  "サプレッシブ": DREAMER_SUPPRESSIVE,
  "ディフェンシブ": DREAMER_DEFENSIVE,
  "リアクティブ": DREAMER_REACTIVE,
};
