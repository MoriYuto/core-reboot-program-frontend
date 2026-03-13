import {
  CATEGORIES,
  type SubCategoryScore,
  type ScoringDirection,
  type PerformanceLevel,
  type DiagnosticType,
  type AttachmentSubType,
  type FullDiagnosisResult,
} from "./data";

export const DIAGNOSTIC_TYPES: readonly DiagnosticType[] = [
  { id: 1,  name: "バランサー型",       nameEn: "Balancer",    displayName: "The Balancer",    imageKey: "balancer",    pattern: [true,  true,  true,  true]  },
  { id: 2,  name: "ストラテジスト型",   nameEn: "Strategist",  displayName: "The Strategist",  imageKey: "strategist",  pattern: [true,  true,  false, true]  },
  { id: 3,  name: "リーダー型",         nameEn: "Leader",      displayName: "The Leader",      imageKey: "leader",      pattern: [true,  true,  true,  false] },
  { id: 4,  name: "プロテクター型",     nameEn: "Protector",   displayName: "The Protector",   imageKey: "protector",   pattern: [true,  true,  false, false] },
  { id: 5,  name: "エンパス型",         nameEn: "Empath",      displayName: "The Empath",      imageKey: "empath",      pattern: [false, true,  true,  true]  },
  { id: 6,  name: "ヒーラー型",         nameEn: "Healer",      displayName: "The Healer",      imageKey: "healer",      pattern: [false, true,  false, true]  },
  { id: 7,  name: "リフレクター型",     nameEn: "Reflector",   displayName: "The Reflector",   imageKey: "reflector",   pattern: [false, true,  true,  false] },
  { id: 8,  name: "サプレッサー型",     nameEn: "Suppressor",  displayName: "The Suppressor",  imageKey: "suppressor",  pattern: [false, true,  false, false] },
  { id: 9,  name: "アトラクター型",     nameEn: "Attractor",   displayName: "The Attractor",   imageKey: "attractor",   pattern: [false, false, true,  true]  },
  { id: 10, name: "ドリーマー型",       nameEn: "Dreamer",     displayName: "The Dreamer",     imageKey: "dreamer",     pattern: [false, false, false, false] },
  { id: 11, name: "コントローラー型",   nameEn: "Controller",  displayName: "The Controller",  imageKey: "controller",  pattern: [false, false, false, true]  },
  { id: 12, name: "ブロッカー型",       nameEn: "Blocker",     displayName: "The Blocker",     imageKey: "blocker",     pattern: [true,  false, false, false] },
  { id: 13, name: "エクスプローラー型", nameEn: "Explorer",    displayName: "The Explorer",    imageKey: "explorer",    pattern: [true,  false, true,  true]  },
  { id: 14, name: "シンカー型",         nameEn: "Thinker",     displayName: "The Thinker",     imageKey: "thinker",     pattern: [true,  false, false, true]  },
  { id: 15, name: "アジャスター型",     nameEn: "Adjuster",    displayName: "The Adjuster",    imageKey: "adjuster",    pattern: [true,  false, true,  false] },
  { id: 16, name: "ドリフター型",       nameEn: "Drifter",     displayName: "The Drifter",     imageKey: "drifter",     pattern: [false, false, true,  false] },
] as const;

const CLASSIFICATION_CAT_INDICES = [0, 1, 2, 4] as const;

function calcScore(answerValue: number, direction: ScoringDirection): number {
  return direction === "asc" ? answerValue : 6 - answerValue;
}

export function calcAllScores(
  answers: Record<number, string>
): SubCategoryScore[] {
  const results: SubCategoryScore[] = [];
  let questionIndex = 0;

  for (const main of CATEGORIES) {
    for (const sub of main.subCategories) {
      let score = 0;
      for (let i = 0; i < sub.questions.length; i++) {
        const step = questionIndex + i + 1;
        const raw = Number(answers[step]);
        if (!Number.isNaN(raw) && raw >= 1 && raw <= 5) {
          score += calcScore(raw, sub.scoringDirection);
        }
      }
      results.push({
        mainCategory: main.name,
        subCategory: sub.name,
        score,
        maxScore: sub.questions.length * 5,
      });
      questionIndex += sub.questions.length;
    }
  }

  return results;
}

export function getPerformanceLevel(score: number, maxScore: number): PerformanceLevel {
  const percent = (score / maxScore) * 100;
  if (percent >= 80) return "Excellent";
  if (percent >= 60) return "Good";
  if (percent >= 40) return "Fair";
  return "Needs Work";
}

export function classifyType(scores: SubCategoryScore[]): DiagnosticType {
  const pattern = CLASSIFICATION_CAT_INDICES.map((catIndex) => {
    const cat = CATEGORIES[catIndex];
    const catScores = scores.filter((s) => s.mainCategory === cat.name);
    const totalScore = catScores.reduce((sum, s) => sum + s.score, 0);
    const totalMax = catScores.reduce((sum, s) => sum + s.maxScore, 0);
    return totalScore > totalMax / 2;
  }) as [boolean, boolean, boolean, boolean];

  const match = DIAGNOSTIC_TYPES.find(
    (t) =>
      t.pattern[0] === pattern[0] &&
      t.pattern[1] === pattern[1] &&
      t.pattern[2] === pattern[2] &&
      t.pattern[3] === pattern[3]
  );

  return match ?? DIAGNOSTIC_TYPES[9];
}

export function classifyAttachmentSubType(scores: SubCategoryScore[]): AttachmentSubType {
  const stable = scores.find((s) => s.mainCategory === "愛着スタイル" && s.subCategory === "安定型")?.score ?? 0;
  const anxious = scores.find((s) => s.mainCategory === "愛着スタイル" && s.subCategory === "不安型")?.score ?? 0;
  const avoidant = scores.find((s) => s.mainCategory === "愛着スタイル" && s.subCategory === "回避型")?.score ?? 0;

  if (stable >= anxious && stable >= avoidant) {
    return { name: "エボリューション", nameEn: "Evolution" };
  }
  if (anxious === avoidant) {
    return { name: "ディフェンシブ", nameEn: "Defensive" };
  }
  if (anxious > avoidant) {
    return { name: "リアクティブ", nameEn: "Reactive" };
  }
  return { name: "サプレッシブ", nameEn: "Suppressive" };
}

export function classifyFull(scores: SubCategoryScore[]): FullDiagnosisResult {
  const mainType = classifyType(scores);
  const subType = classifyAttachmentSubType(scores);
  const mainBase = mainType.name.replace("型", "");
  return {
    mainType,
    subType,
    combinedName: `${subType.name}・${mainBase}`,
    combinedNameEn: `The ${subType.nameEn} ${mainType.nameEn}`,
  };
}
