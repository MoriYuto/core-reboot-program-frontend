"use client";

import Image, { type StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { ButtonComponent } from "../../component/button_component";
import {
  STORAGE_KEY,
  type PerformanceLevel,
} from "../data";

import type { AnalysisItem, ContentBlock } from "./analysis";
import type { DiagnosisApiResponse, MainCategoryResult } from "./types";

import adjusterImg from "@/assets/images/main_type/adjuster_type.webp";
import attractorImg from "@/assets/images/main_type/attractor_type.webp";
import balancerImg from "@/assets/images/main_type/balancer_type.webp";
import blockerImg from "@/assets/images/main_type/blocker_type.webp";
import controllerImg from "@/assets/images/main_type/controller_type.webp";
import dreamerImg from "@/assets/images/main_type/dreamer_type.webp";
import drifterImg from "@/assets/images/main_type/drifter_type.webp";
import empathImg from "@/assets/images/main_type/empath_type.webp";
import explorerImg from "@/assets/images/main_type/explorer_type.webp";
import healerImg from "@/assets/images/main_type/healer_type.webp";
import leaderImg from "@/assets/images/main_type/leader_type.webp";
import protectorImg from "@/assets/images/main_type/protector_type.webp";
import reflectorImg from "@/assets/images/main_type/reflector_type.webp";
import strategistImg from "@/assets/images/main_type/strategist_type.webp";
import suppressorImg from "@/assets/images/main_type/suppressor_type.webp";
import thinkerImg from "@/assets/images/main_type/thinker_type.webp";

const TYPE_IMAGES: Record<string, StaticImageData> = {
  balancer: balancerImg,
  strategist: strategistImg,
  leader: leaderImg,
  protector: protectorImg,
  empath: empathImg,
  healer: healerImg,
  reflector: reflectorImg,
  suppressor: suppressorImg,
  attractor: attractorImg,
  dreamer: dreamerImg,
  controller: controllerImg,
  blocker: blockerImg,
  explorer: explorerImg,
  thinker: thinkerImg,
  adjuster: adjusterImg,
  drifter: drifterImg,
};


async function fetchDiagnosis(answers: Record<number, string>): Promise<DiagnosisApiResponse | null> {
  try {
    const res = await fetch("/api/diagnosis", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answers }),
    });
    if (!res.ok) return null;
    return (await res.json()) as DiagnosisApiResponse;
  } catch {
    return null;
  }
}

const LEVEL_STYLES: Record<PerformanceLevel, string> = {
  Excellent: "bg-accent-green-glass text-accent-green",
  Good: "bg-accent-amber-glass text-accent-amber",
  Fair: "bg-accent-blue-glass text-accent-blue",
  "Needs Work": "bg-accent-red-glass text-accent-red",
};

function PerformanceBadge({ level }: { level: PerformanceLevel }) {
  return (
    <span
      className={`px-[0.8rem] py-[0.4rem] rounded text-[1.2rem] font-semibold leading-[1.6rem] ${LEVEL_STYLES[level]}`}
    >
      {level}
    </span>
  );
}

function ProgressBar({ percent }: { percent: number }) {
  return (
    <div className="relative w-full h-[0.8rem] rounded-full bg-surface overflow-hidden">
      <div
        className="absolute inset-y-0 left-0 rounded-full"
        style={{
          width: `${percent}%`,
          background: "linear-gradient(90deg, var(--primary) 0%, var(--primary-highlight) 100%)",
        }}
      />
      <div
        className="absolute inset-y-0 left-0 rounded-full"
        style={{
          width: `${percent}%`,
          background:
            "linear-gradient(90deg, transparent 0%, var(--white-glass) 50%, transparent 100%)",
        }}
      />
    </div>
  );
}

function ScoreCard({
  name,
  nameEn,
  subs,
  totalScore,
  totalMax,
  level,
}: MainCategoryResult) {
  return (
    <div className="flex flex-col bg-surface-container border border-border-subtle rounded-xl p-[2.4rem]">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-[0.2rem]">
          <h4 className="text-[2rem] font-bold leading-[2.8rem] text-on-surface">
            {name}
          </h4>
          <p className="text-[1.4rem] leading-[2rem] text-on-surface-container">
            {nameEn}
          </p>
        </div>
        <div className="flex items-baseline gap-[0.4rem] shrink-0">
          <span className="text-[3rem] font-bold leading-[3.6rem] text-primary">
            {totalScore}
          </span>
          <span className="text-[1.8rem] leading-[2.8rem] text-text-muted">
            / {totalMax}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-[1.6rem] mt-[2.4rem]">
        {subs.map((sub) => {
          const percent = (sub.score / sub.maxScore) * 100;
          return (
            <div key={sub.subCategory} className="flex flex-col gap-[0.6rem]">
              <div className="flex items-baseline justify-between">
                <span className="text-[1.4rem] leading-[2rem] text-text-secondary">
                  {sub.subCategory}
                </span>
                <span className="text-[1.4rem] font-semibold leading-[2rem] text-primary">
                  {sub.score} / {sub.maxScore}
                </span>
              </div>
              <ProgressBar percent={percent} />
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between mt-[2.4rem] pt-[1.6rem] border-t border-border-subtle">
        <span className="text-[1.2rem] leading-[1.6rem] text-text-muted">
          Performance Level
        </span>
        <PerformanceBadge level={level} />
      </div>
    </div>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path d="M6 9l6 6 6-6" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BlockHighlight({ text }: { text: string }) {
  return (
    <div
      className="border border-primary-border-strong rounded-lg p-[2.5rem]"
      style={{ background: "linear-gradient(90deg, var(--primary-glass-light) 0%, var(--primary-highlight-glass) 100%)" }}
    >
      <p className="text-[2.4rem] font-bold leading-[1.333em] text-primary text-center">{text}</p>
    </div>
  );
}

function BlockList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-col gap-[1.2rem]">
      {items.map((text) => (
        <div
          key={text}
          className="bg-surface border border-primary-glass-light rounded-lg px-[1.7rem] py-[1.7rem]"
        >
          <p className="text-[1.6rem] leading-[1.625em] text-text-secondary">・{text}</p>
        </div>
      ))}
    </div>
  );
}

function BlockSection({ emoji, heading, items, summary }: Extract<ContentBlock, { type: "section" }>) {
  return (
    <div
      className="border border-primary-border rounded-lg p-[2.5rem] flex flex-col gap-[1.6rem]"
      style={{ background: "linear-gradient(175deg, var(--surface) 0%, var(--surface-light) 100%)" }}
    >
      <h5 className="flex items-center gap-[0.8rem] text-[2rem] font-bold leading-[1.4em] text-white">
        <span>{emoji}</span>{heading}
      </h5>
      <div className="flex flex-wrap gap-[1.2rem]">
        {items.map((text) => (
          <div key={text} className="bg-surface border border-primary-glass-light rounded-lg px-[1.7rem] py-[1.7rem]">
            <p className="text-[1.6rem] leading-[1.625em] text-text-secondary">・{text}</p>
          </div>
        ))}
      </div>
      {summary && <p className="text-[1.6rem] leading-[1.625em] text-text-secondary">{summary}</p>}
    </div>
  );
}

function BlockWarning({ emoji, heading, highlightText, items, summary }: Extract<ContentBlock, { type: "warning" }>) {
  return (
    <div
      className="border border-primary-border rounded-lg p-[2.5rem] flex flex-col gap-[1.6rem]"
      style={{ background: "linear-gradient(168deg, var(--surface) 0%, var(--surface-light) 100%)" }}
    >
      <h5 className="flex items-center gap-[0.8rem] text-[2rem] font-bold leading-[1.4em] text-white">
        <span>{emoji}</span>{heading}
      </h5>
      {highlightText && (
        <div className="bg-primary-glass-subtle border border-primary-border rounded-lg px-[1.7rem] py-[1.7rem]">
          <p className="text-[1.8rem] font-bold leading-[1.556em] text-primary text-center">{highlightText}</p>
        </div>
      )}
      <div className="flex flex-col gap-[1.2rem] pl-[2.4rem]">
        {items.map((text) => (
          <div key={text} className="flex items-start gap-[1.2rem]">
            <span className="text-[1.6rem] leading-[1.625em] text-primary shrink-0">•</span>
            <span className="text-[1.6rem] leading-[1.625em] text-text-secondary">{text}</span>
          </div>
        ))}
      </div>
      {summary && <p className="text-[1.6rem] leading-[1.625em] text-text-secondary">{summary}</p>}
    </div>
  );
}

function BlockTimeline({ periods }: Extract<ContentBlock, { type: "timeline" }>) {
  return (
    <div className="flex flex-col gap-[2.4rem]">
      {periods.map((period) => (
        <div
          key={period.label}
          className="border border-primary-border rounded-lg p-[2.5rem] flex flex-col gap-[1.6rem]"
          style={{ background: "linear-gradient(175deg, var(--surface) 0%, var(--surface-light) 100%)" }}
        >
          <h5 className="flex items-center gap-[0.8rem] text-[2rem] font-bold leading-[1.4em] text-white">
            <span>{period.emoji}</span>{period.label}
          </h5>
          <div className="flex flex-col gap-[1.2rem] pl-[2.4rem]">
            {period.items.map((text) => (
              <div key={text} className="flex items-start gap-[1.2rem]">
                <span className="text-[1.6rem] leading-[1.625em] text-primary shrink-0">•</span>
                <span className="text-[1.6rem] leading-[1.625em] text-text-secondary">{text}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function BlockReactions({ patterns }: Extract<ContentBlock, { type: "reactions" }>) {
  return (
    <div className="flex flex-col gap-[1.6rem]">
      {patterns.map((p) => (
        <div
          key={p.trigger}
          className="border border-primary-border rounded-lg p-[2.5rem] flex flex-col gap-[1.2rem]"
          style={{ background: "linear-gradient(175deg, var(--surface) 0%, var(--surface-light) 100%)" }}
        >
          <h5 className="text-[1.8rem] font-bold leading-[1.556em] text-white">
            <span className="mr-[0.8rem] text-primary">■</span>{p.trigger}
          </h5>
          {p.reactions.map((r) => (
            <div key={r} className="flex items-start gap-[1.2rem] pl-[2.4rem]">
              <span className="text-[1.6rem] leading-[1.625em] text-primary shrink-0">→</span>
              <span className="text-[1.6rem] leading-[1.625em] text-text-secondary">{r}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function BlockDialogue({ conversations }: Extract<ContentBlock, { type: "dialogue" }>) {
  return (
    <div className="flex flex-col gap-[1.6rem]">
      {conversations.map((conv, ci) => (
        <div
          key={ci}
          className="border border-primary-border rounded-lg p-[2.5rem] flex flex-col gap-[1.6rem]"
          style={{ background: "linear-gradient(175deg, var(--surface) 0%, var(--surface-light) 100%)" }}
        >
          {conv.exchanges.map((e) => (
            <div key={`${e.speaker}-${e.text}`} className="flex items-start gap-[1.2rem]">
              <span className={`text-[1.4rem] font-bold leading-[1.625em] shrink-0 px-[1.2rem] py-[0.4rem] rounded-lg ${e.isUser ? "bg-primary text-surface-deep" : "bg-primary-glass text-primary"}`}>
                {e.speaker}
              </span>
              <span className="text-[1.6rem] leading-[1.625em] text-text-secondary">{e.text}</span>
            </div>
          ))}
          {conv.summary && (
            <p className="text-[1.8rem] font-bold leading-[1.556em] text-primary mt-[0.8rem]">
              {conv.summary}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

function BlockEvaluation({ good, bad }: Extract<ContentBlock, { type: "evaluation" }>) {
  return (
    <div className="flex flex-col gap-[1.6rem]">
      <div
        className="border border-primary-border rounded-lg p-[2.5rem] flex flex-col gap-[1.6rem]"
        style={{ background: "linear-gradient(175deg, var(--surface) 0%, var(--surface-light) 100%)" }}
      >
        <h5 className="text-[2rem] font-bold leading-[1.4em] text-white">{good.heading}</h5>
        <div className="flex flex-wrap gap-[1.2rem]">
          {good.items.map((text) => (
            <span key={text} className="px-[1.7rem] py-[1.7rem] bg-surface border border-primary-glass-light rounded-lg text-[1.6rem] leading-[1.625em] text-text-secondary">
              {text}
            </span>
          ))}
        </div>
      </div>
      <div
        className="border border-primary-border rounded-lg p-[2.5rem] flex flex-col gap-[1.6rem]"
        style={{ background: "linear-gradient(175deg, var(--surface) 0%, var(--surface-light) 100%)" }}
      >
        <h5 className="text-[2rem] font-bold leading-[1.4em] text-white">{bad.heading}</h5>
        <div className="flex flex-wrap gap-[1.2rem]">
          {bad.items.map((text) => (
            <span key={text} className="px-[1.7rem] py-[1.7rem] bg-surface border border-primary-glass-light rounded-lg text-[1.6rem] leading-[1.625em] text-text-secondary">
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function BlockSteps({ steps, summary }: Extract<ContentBlock, { type: "steps" }>) {
  return (
    <div className="flex flex-col gap-[1.6rem]">
      {steps.map((step) => (
        <div
          key={step.num}
          className="flex gap-[1.6rem] border border-primary-border rounded-lg p-[2.5rem]"
          style={{ background: "linear-gradient(175deg, var(--surface) 0%, var(--surface-light) 100%)" }}
        >
          <span className="w-[4rem] h-[4rem] rounded-full bg-primary shrink-0 flex items-center justify-center text-[1.8rem] font-bold text-surface-deep">
            {step.num}
          </span>
          <div className="flex flex-col gap-[0.4rem]">
            <h5 className="text-[2rem] font-bold leading-[1.4em] text-white">{step.category}</h5>
            <p className="text-[1.8rem] font-bold leading-[1.556em] text-primary">{step.action}</p>
            <p className="text-[1.6rem] leading-[1.625em] text-text-secondary">{step.detail}</p>
          </div>
        </div>
      ))}
      <div
        className="flex items-center gap-[1.2rem] border border-primary-border-strong rounded-lg p-[2.5rem]"
        style={{ background: "linear-gradient(90deg, var(--primary-glass-light) 0%, var(--primary-highlight-glass) 100%)" }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
          <path d="M10 2L12.5 7.5L18 8L14 12L15 18L10 15L5 18L6 12L2 8L7.5 7.5L10 2Z" fill="var(--primary)" />
        </svg>
        <p className="text-[1.8rem] font-bold leading-[1.556em] text-white">{summary}</p>
      </div>
    </div>
  );
}

function BlockInsight({ label, text }: Extract<ContentBlock, { type: "insight" }>) {
  return (
    <div
      className="border border-primary-border-strong rounded-lg p-[2.5rem] flex items-start gap-[1.2rem]"
      style={{ background: "linear-gradient(90deg, var(--primary-glass-light) 0%, var(--primary-highlight-glass) 100%)" }}
    >
      <span className="w-[4rem] h-[4rem] rounded-full bg-primary shrink-0 flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 2L12.5 7.5L18 8L14 12L15 18L10 15L5 18L6 12L2 8L7.5 7.5L10 2Z" fill="var(--surface-deep)" />
        </svg>
      </span>
      <div className="flex flex-col gap-[0.8rem]">
        <p className="text-[1.6rem] leading-[1.625em] text-text-secondary">{label}</p>
        <p className="text-[2.4rem] font-bold leading-[1.333em] text-primary">{text}</p>
      </div>
    </div>
  );
}

function BlockPremium({ description, cta }: Extract<ContentBlock, { type: "premium" }>) {
  return (
    <div className="flex flex-col gap-[1.6rem]">
      <div className="relative">
        <p className="text-[1.4rem] leading-[2rem] text-text-secondary blur-[2px]">{description}</p>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface-container" />
      </div>
      <button
        type="button"
        className="w-full flex items-center justify-center gap-[0.8rem] bg-primary rounded-lg px-[2.4rem] py-[1.2rem] text-[1.6rem] font-bold text-surface-deep hover:bg-primary/90 transition-colors"
      >
        🔒 {cta}
      </button>
    </div>
  );
}

function BlockText({ text }: { text: string }) {
  return <p className="text-[1.6rem] leading-[1.75em] text-text-secondary">{text}</p>;
}

function ContentBlockRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "text": return <BlockText text={block.text} />;
    case "highlight": return <BlockHighlight text={block.text} />;
    case "list": return <BlockList items={block.items} />;
    case "section": return <BlockSection {...block} />;
    case "warning": return <BlockWarning {...block} />;
    case "timeline": return <BlockTimeline {...block} />;
    case "reactions": return <BlockReactions {...block} />;
    case "dialogue": return <BlockDialogue {...block} />;
    case "evaluation": return <BlockEvaluation {...block} />;
    case "steps": return <BlockSteps {...block} />;
    case "insight": return <BlockInsight {...block} />;
    case "premium": return <BlockPremium {...block} />;
  }
}

function AnalysisCard({ num, item }: { num: string; item: AnalysisItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col bg-surface-light border border-primary-border rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-[1.6rem] p-[2.4rem] w-full text-left"
      >
        <span className="w-[4.8rem] h-[4.8rem] bg-primary-glass-light rounded-lg text-[1.8rem] font-bold leading-[1.556em] text-primary shrink-0 flex items-center justify-center">
          {num}
        </span>
        <div className="flex flex-col gap-[0.4rem] flex-1 min-w-0">
          <h4 className="text-[2rem] font-bold leading-[1.4em] text-white">
            {item.name}
          </h4>
          <p className="text-[1.6rem] leading-[1.625em] text-text-secondary">
            {item.nameEn}
          </p>
        </div>
        <ChevronIcon open={open} />
      </button>

      {open && (
        <div className="flex flex-col gap-[2.4rem] px-[2.4rem] pb-[2.4rem]">
          {item.blocks.map((block, i) => (
            <ContentBlockRenderer key={i} block={block} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function DiagnosisResultPage() {
  const router = useRouter();
  const [data, setData] = useState<DiagnosisApiResponse | null>(null);
  const [loading, setLoading] = useState(true);

  const loadData = useCallback(async () => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      router.replace("/diagnosis/step1");
      return;
    }
    try {
      const answers = JSON.parse(raw) as Record<number, string>;
      const result = await fetchDiagnosis(answers);
      if (!result) {
        router.replace("/diagnosis/step1");
        return;
      }
      setData(result);
    } catch {
      router.replace("/diagnosis/step1");
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  if (loading || !data) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center">
        <div className="flex flex-col items-center gap-[2.4rem]">
          <div className="w-[4.8rem] h-[4.8rem] border-4 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-[1.6rem] text-on-surface-container">分析中...</p>
        </div>
      </div>
    );
  }

  const { diagnosis, mainCategories, analysisItems } = data;

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <header className="border-b border-surface-container bg-surface">
        <div className="max-w-[128rem] mx-auto px-[2.4rem] py-[2.4rem] flex items-center justify-between">
          <div className="flex flex-col gap-[0.2rem]">
            <h1 className="text-[2rem] sm:text-[2.4rem] font-bold leading-[1.33em] text-on-surface">
              Diagnostic Analysis Result
            </h1>
            <p className="text-[1.4rem] leading-[2rem] text-on-surface-container">
              診断分析結果レポート
            </p>
          </div>
          <div className="flex items-center gap-[0.8rem] px-[1.6rem] py-[0.8rem] bg-surface-container border border-primary rounded-lg shrink-0">
            <span className="w-[0.8rem] h-[0.8rem] rounded-full bg-accent-green" />
            <span className="text-[1.4rem] font-semibold leading-[2rem] text-primary">
              Analysis Complete
            </span>
          </div>
        </div>
      </header>

      {/* Type Section */}
      <section className="px-[2.4rem] py-[8rem]">
        <div className="max-w-[102.4rem] mx-auto flex flex-col items-center gap-[2.4rem]">
          <span className="px-[2.4rem] py-[0.8rem] border border-primary-border bg-surface-container rounded-full text-[1.4rem] font-medium leading-[2rem] text-primary">
            YOUR DIAGNOSTIC TYPE
          </span>
          {TYPE_IMAGES[diagnosis.mainType.imageKey] && (
            <Image
              src={TYPE_IMAGES[diagnosis.mainType.imageKey]}
              alt={diagnosis.mainType.displayName}
              width={256}
              height={256}
              priority
            />
          )}
          <h2 className="text-[clamp(4rem,10vw,6rem)] font-bold leading-[1em] tracking-[-0.025em] text-primary text-center font-mincho">
            {diagnosis.combinedNameEn}
          </h2>
          <p className="text-[3rem] font-light leading-[3.6rem] text-on-surface/90 text-center">
            {diagnosis.combinedName}
          </p>
        </div>
      </section>

      {/* Core Metrics Section */}
      <section className="px-[2.4rem] py-[6.4rem] bg-surface-deep">
        <div className="max-w-[128rem] mx-auto flex flex-col gap-[4.8rem]">
          <div className="flex flex-col items-center gap-[1.2rem]">
            <h3 className="text-[3rem] font-bold leading-[3.6rem] text-on-surface text-center">
              Core Metrics Analysis
            </h3>
            <p className="text-[1.4rem] sm:text-[1.6rem] leading-[2.4rem] text-on-surface-container text-center">
            5つのコア指標による多角的分析
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2.4rem]">
            {mainCategories.filter((cat) => cat.nameEn !== "Relationship Behavior").map((cat) => (
              <ScoreCard key={cat.name} {...cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Analysis Report */}
      {analysisItems && (
        <section className="px-[2.4rem] py-[6.4rem] bg-surface">
          <div className="max-w-[102.4rem] mx-auto flex flex-col gap-[4.8rem]">
            <div className="flex flex-col items-center gap-[1.2rem]">
              <h3 className="text-[3rem] font-bold leading-[3.6rem] text-on-surface text-center">
                Detailed Analysis Report
              </h3>
              <p className="text-[1.4rem] sm:text-[1.6rem] leading-[2.4rem] text-on-surface-container text-center">
                {analysisItems.length}項目の詳細分析レポート
              </p>
            </div>

            <div className="flex flex-col gap-[2.4rem]">
              {analysisItems.map((item, index) => {
                const num = String(index + 1).padStart(2, "0");
                return (
                  <AnalysisCard key={item.nameEn} num={num} item={item} />
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Premium Note */}
      <section className="px-[2.4rem] py-[2.4rem] bg-surface">
        <div className="max-w-[102.4rem] mx-auto">
          <div className="flex items-center gap-[1.2rem] bg-surface-container border border-primary-border rounded-lg px-[2rem] py-[1.6rem]">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
              <path d="M10 1.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zm0 12a.75.75 0 110-1.5.75.75 0 010 1.5zm.75-3.5a.75.75 0 01-1.5 0V6.5a.75.75 0 011.5 0V10z" fill="var(--on-surface-container)" />
            </svg>
            <p className="text-[1.4rem] leading-[2rem] text-on-surface-container">
              残り14項目の詳細分析は、LINE登録後にPDFレポートとして提供されます
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="px-[2.4rem] py-[6.4rem] bg-surface-deep border-t border-surface-container">
        <div className="max-w-[102.4rem] mx-auto flex flex-col items-center gap-[3.2rem]">
          <div className="w-[6.4rem] h-[0.4rem] bg-primary rounded-full" />

          <h3 className="text-[3rem] font-bold leading-[3.6rem] text-on-surface text-center">
            この結果は、あなたの現在地です。
          </h3>
          <p className="text-[1.8rem] leading-[2.8rem] text-text-secondary text-center">
            未来はここから変えられます。
          </p>
          <p className="max-w-[64rem] text-[1.4rem] sm:text-[1.6rem] leading-[2.4rem] text-on-surface-container text-center">
            完全版レポートでは、18項目すべての詳細分析に加え、専門家による個別アドバイス、具体的な改善ステップ、そしてあなただけの成長ロードマップをPDF形式で提供します。
          </p>

          <button
            type="button"
            className="flex items-center justify-center gap-[1.2rem] bg-[linear-gradient(135deg,var(--accent-green)_0%,var(--accent-green-dark)_100%)] rounded-xl px-[3.2rem] py-[1.6rem] text-[1.8rem] font-bold text-white shadow-[0_4px_14px_var(--accent-green-glass)] hover:shadow-[0_6px_20px_var(--accent-green-glass)] transition-shadow"
          >
            LINEで完全版レポート(PDF)を受け取る
          </button>

          <div className="flex items-center gap-[2.4rem]">
            <span className="text-[1.2rem] leading-[1.6rem] text-on-surface-container">完全無料</span>
            <span className="text-[1.2rem] leading-[1.6rem] text-on-surface-container">即時配信</span>
            <span className="text-[1.2rem] leading-[1.6rem] text-on-surface-container">プライバシー保護</span>
          </div>

          <div className="mt-[2.4rem]">
            <ButtonComponent
              onClick={() => router.push("/")}
              className="bg-surface-container border border-primary-border text-label-small text-on-surface"
            >
              トップへ戻る
            </ButtonComponent>
          </div>
        </div>
      </footer>
    </div>
  );
}
