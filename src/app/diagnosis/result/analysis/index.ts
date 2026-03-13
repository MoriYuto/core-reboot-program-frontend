import type { AnalysisItem } from "./types";
import { EMPATH_ANALYSIS } from "./empath";
import { BALANCER_ANALYSIS } from "./balancer";
import { STRATEGIST_ANALYSIS } from "./strategist";
import { LEADER_ANALYSIS } from "./leader";
import { PROTECTOR_ANALYSIS } from "./protector";
import { HEALER_ANALYSIS } from "./healer";
import { REFLECTOR_ANALYSIS } from "./reflector";
import { SUPPRESSOR_ANALYSIS } from "./suppressor";
import { ATTRACTOR_ANALYSIS } from "./attractor";
import { DREAMER_ANALYSIS } from "./dreamer";
import { CONTROLLER_ANALYSIS } from "./controller";
import { BLOCKER_ANALYSIS } from "./blocker";
import { EXPLORER_ANALYSIS } from "./explorer";
import { THINKER_ANALYSIS } from "./thinker";
import { ADJUSTER_ANALYSIS } from "./adjuster";
import { DRIFTER_ANALYSIS } from "./drifter";

const ANALYSIS_MAP: Record<string, Record<string, AnalysisItem[]>> = {
  Empath: EMPATH_ANALYSIS,
  Balancer: BALANCER_ANALYSIS,
  Strategist: STRATEGIST_ANALYSIS,
  Leader: LEADER_ANALYSIS,
  Protector: PROTECTOR_ANALYSIS,
  Healer: HEALER_ANALYSIS,
  Reflector: REFLECTOR_ANALYSIS,
  Suppressor: SUPPRESSOR_ANALYSIS,
  Attractor: ATTRACTOR_ANALYSIS,
  Dreamer: DREAMER_ANALYSIS,
  Controller: CONTROLLER_ANALYSIS,
  Blocker: BLOCKER_ANALYSIS,
  Explorer: EXPLORER_ANALYSIS,
  Thinker: THINKER_ANALYSIS,
  Adjuster: ADJUSTER_ANALYSIS,
  Drifter: DRIFTER_ANALYSIS,
};

export function getAnalysisItems(
  mainTypeNameEn: string,
  subTypeName: string
): AnalysisItem[] | null {
  const mainData = ANALYSIS_MAP[mainTypeNameEn];
  if (!mainData) return null;
  return mainData[subTypeName] ?? null;
}

export type { AnalysisItem, ContentBlock } from "./types";
