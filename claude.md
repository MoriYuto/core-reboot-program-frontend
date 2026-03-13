# Project Rules

## 技術スタック

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Material Design 3 カラートークン

## ディレクトリ構成

```
src/
├── app/
│   ├── component/          # 共通コンポーネント
│   ├── style/              # カラー・フォント定義
│   ├── diagnosis/
│   │   ├── [step]/page.tsx # 診断ページ（動的ルート）
│   │   ├── data.ts         # 質問・カテゴリ・スコア計算・分類ロジック
│   │   └── result/
│   │       ├── page.tsx    # 診断結果ページ（スコア表示・分析レポート）
│   │       └── analysis/
│   │           ├── types.ts   # ContentBlock / AnalysisItem 型定義
│   │           ├── index.ts   # getAnalysisItems() ルックアップ関数
│   │           └── <type>/    # メインタイプ別フォルダ (例: empath/)
│   │               ├── index.ts       # SubTypeAnalysis をまとめて export
│   │               ├── reactive.ts    # サブタイプ別 AnalysisItem[]
│   │               ├── evolution.ts
│   │               ├── suppressive.ts
│   │               └── defensive.ts
│   └── globals.css
├── assets/                 # 画像・アイコン
└── types/                  # 型定義
```

## 診断システム

### 分類ロジック (`diagnosis/data.ts`)

- **一次分類**: 4カテゴリ（自己肯定感・感情マネジメント・コミュニケーション・自己認識力）の H/L パターンで16メインタイプに分類
- **二次分類**: 愛着スタイル（安定型・不安型・回避型）のスコアで4サブタイプに分類
- **最終結果**: `{サブタイプ}・{メインタイプ}` (例: エボリューション・エンパス)

### 分析データ (`analysis/`)

- メインタイプごとにフォルダを作成（例: `empath/`）
- フォルダ内に4サブタイプのファイルを配置
- 各ファイルは `AnalysisItem[]`（18項目）を export
- `ContentBlock` 型で多様なレイアウト（highlight, list, section, warning, timeline, reactions, dialogue, evaluation, steps, insight, text, premium）を表現
- `blocks[]` の要素数はリアクティブを基準とし、減らすことはあっても増やさない。内部の `items` 等の配列は増減可

### 新しいメインタイプの追加手順

1. `analysis/<type>/` フォルダを作成
2. 4サブタイプの `.ts` ファイルを作成（`import type { AnalysisItem } from "../types"`）
3. `<type>/index.ts` で `SubTypeAnalysis` を export
4. `analysis/index.ts` の `ANALYSIS_MAP` にエントリを追加

## コーディング規約

- テストは必ずセットで書く

### コンポーネント

- 関数コンポーネントを使用
- Props の型は `ComponentNameProps` で定義
- `"use client"` はインタラクティブなコンポーネントのみ

### スタイリング

- Tailwind CSS ユーティリティクラスを直接使用
- コンポーネントは `className` props で柔軟にスタイル適用
- カスタムカラーは Tailwind クラス (`bg-primary`, `text-on-surface` など) を使用

```typescript
// ✅ Good - Tailwind クラス直接指定
<ButtonComponent className="bg-primary hover:bg-primary/80">

// ❌ Bad - ハードコードされた色
className="bg-[#D4AF37]"
```

### カラートークン

```
primary / onPrimary
surface / onSurface
surfaceContainer / onSurfaceContainer
```

### インポート

- 画像: `import Image from "@/assets/images/xxx"`
- コンポーネント: 相対パス `./component/xxx`
- 分析データ型: `import type { AnalysisItem } from "../types"`

## よく使うコマンド

- `npm run dev` - 開発サーバー起動
- `npm test` - テスト実行
- `npm run lint` - Lint実行

## 日本語対応

- ユーザーへの応答は日本語で行う

