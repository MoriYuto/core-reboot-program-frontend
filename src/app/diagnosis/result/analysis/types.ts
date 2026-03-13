export type ContentBlock =
  | { type: "text"; text: string }
  | { type: "highlight"; text: string }
  | { type: "list"; items: string[] }
  | { type: "section"; emoji: string; heading: string; items: string[]; summary?: string; variant: "positive" | "negative" | "neutral" }
  | { type: "warning"; emoji: string; heading: string; highlightText?: string; items: string[]; summary?: string }
  | { type: "timeline"; periods: { emoji: string; label: string; items: string[] }[] }
  | { type: "reactions"; patterns: { trigger: string; reactions: string[] }[] }
  | { type: "dialogue"; conversations: { exchanges: { speaker: string; text: string; isUser: boolean }[]; summary?: string }[] }
  | { type: "evaluation"; good: { heading: string; items: string[] }; bad: { heading: string; items: string[] } }
  | { type: "steps"; steps: { num: string; category: string; action: string; detail: string }[]; summary: string }
  | { type: "insight"; label: string; text: string }
  | { type: "premium"; description: string; cta: string };

export type AnalysisItem = {
  name: string;
  nameEn: string;
  blocks: ContentBlock[];
};

export type SubTypeAnalysis = Record<string, AnalysisItem[]>;
