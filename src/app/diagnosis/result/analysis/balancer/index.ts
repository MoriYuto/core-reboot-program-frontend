import type { SubTypeAnalysis } from "../types";
import { BALANCER_EVOLUTION } from "./evolution";
import { BALANCER_SUPPRESSIVE } from "./suppressive";
import { BALANCER_DEFENSIVE } from "./defensive";
import { BALANCER_REACTIVE } from "./reactive";

export const BALANCER_ANALYSIS: SubTypeAnalysis = {
  "エボリューション": BALANCER_EVOLUTION,
  "サプレッシブ": BALANCER_SUPPRESSIVE,
  "ディフェンシブ": BALANCER_DEFENSIVE,
  "リアクティブ": BALANCER_REACTIVE,
};
