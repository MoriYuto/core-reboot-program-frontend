import Image from "next/image";
import BackgroundImage from "../assets/images/background.webp";
import AdjusterTypeImage from "../assets/images/main_type/adjuster_type.webp";
import AttractorTypeImage from "../assets/images/main_type/attractor_type.webp";
import BalancerTypeImage from "../assets/images/main_type/balancer_type.webp";
import BlockerTypeImage from "../assets/images/main_type/blocker_type.webp";
import ControllerTypeImage from "../assets/images/main_type/controller_type.webp";
import DreamerTypeImage from "../assets/images/main_type/dreamer_type.webp";
import DrifterTypeImage from "../assets/images/main_type/drifter_type.webp";
import EmpathTypeImage from "../assets/images/main_type/empath_type.webp";
import ExplorerTypeImage from "../assets/images/main_type/explorer_type.webp";
import HealerTypeImage from "../assets/images/main_type/healer_type.webp";
import LeaderTypeImage from "../assets/images/main_type/leader_type.webp";
import ProtectorTypeImage from "../assets/images/main_type/protector_type.webp";
import ReflectorTypeImage from "../assets/images/main_type/reflector_type.webp";
import StrategistTypeImage from "../assets/images/main_type/strategist_type.webp";
import SuppressorTypeImage from "../assets/images/main_type/suppressor_type.webp";
import ThinkerTypeImage from "../assets/images/main_type/thinker_type.webp";
import { AnalysisFormula } from "./component/analysis_formula";
import { StartDiagnosisButton } from "./component/button_component";
import { Header } from "./component/header";
import { IconAndDescription } from "./component/icon_and_description";
import { ArrowDownIcon, AutorenewIcon, BrainIcon, ChatBubbleOffIcon, ConversionPathIcon, DatabaseIcon, MonitoringIcon, MoodIcon, PersonHeartIcon, ScheduleIcon, StacksIcon, VisibilityIcon, VisibilityOffIcon } from "./component/icon_component";
import { IdealAudienceCard } from "./component/ideal_audience_card";
import { ReportCard } from "./component/report_card";
import { SectionContainer, SectionContainerLight } from "./component/section";
import { TypeCard } from "./component/type_card";

const TYPE_TILES = [
  { image: LeaderTypeImage, label: "リーダー型" },
  { image: StrategistTypeImage, label: "ストラテジスト型" },
  { image: ControllerTypeImage, label: "コントローラー型" },
  { image: ProtectorTypeImage, label: "プロテクター型" },
  { image: HealerTypeImage, label: "ヒーラー型" },
  { image: ThinkerTypeImage, label: "シンカー型" },
  { image: DreamerTypeImage, label: "ドリーマー型" },
  { image: SuppressorTypeImage, label: "サプレッサー型" },
  { image: AttractorTypeImage, label: "アトラクター型" },
  { image: ReflectorTypeImage, label: "リフレクター型" },
  { image: BlockerTypeImage, label: "ブロッカー型" },
  { image: ExplorerTypeImage, label: "エクスプローラー型" },
  { image: EmpathTypeImage, label: "エンパス型" },
  { image: AdjusterTypeImage, label: "アジャスター型" },
  { image: DrifterTypeImage, label: "ドリフター型" },
  { image: BalancerTypeImage, label: "バランサー型" },
] as const;

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Core Reboot Program",
    url: siteUrl,
    inLanguage: "ja-JP",
  };
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Core Reboot Program",
    url: siteUrl,
    logo: `${siteUrl}${BackgroundImage.src}`,
  };

  return (
    <div className="flex flex-col bg-surface">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Header headerHeight={80} />
      <main>
      <section
        className="flex flex-col items-center h-screen bg-cover bg-center touch-pan-y px-[1.5vw]"
        style={{ backgroundImage: `url(${BackgroundImage.src})`, paddingTop: 80 }}
        aria-label="メインビジュアル"
      >
        <div className="flex-1 flex flex-col items-center justify-center gap-[2rem] lg:gap-[4rem]">
          <h1 className="text-title-large text-on-surface text-center font-mincho">
            <span className="block lg:inline">
              なぜ、仕事は
            </span>
            <span className="block lg:inline">
              うまくいくのに
              <br className="hidden lg:block" />
              恋愛だけ
            </span>
            <span className="block lg:inline">
              「空回り」してしまうのか
            </span>
          </h1>
          <p className="text-body-large text-on-surface font-roboto text-center">
            <span>
              運やタイミングのせいにするのは、
              <br className="block lg:hidden" />
              もう終わりにしませんか。
              <br className="hidden lg:block" />
              3,000名の
              <br className="block lg:hidden" />
              データに基づく
              <span className="whitespace-nowrap">
                <span className="text-primary font-semibold">
                  「64タイプ行動分析」
                </span>
                が
              </span>
            </span>
            <br className="hidden lg:block" />
            <span>
              <br className="block md:hidden" />
              あなたが気づいていない
              <br className="block lg:hidden" />
              <span className="whitespace-nowrap">
                「無意識のパターン」を
              </span>
              可視化します。
            </span>
          </p>
          <div className="flex flex-col items-center gap-4">
            <StartDiagnosisButton>
              <span className="text-label-small text-on-primary font-roboto">無料診断を開始</span>
            </StartDiagnosisButton>
            <p className="text-body-small text-on-surface font-roboto text-center">※所要時間: 約10分</p>
          </div>
        </div>
        <div className="pb-[4rem]" aria-hidden="true">
          <ArrowDownIcon size="4rem" className="text-primary" />
        </div>
      </section>
      <SectionContainer >
        <div className="flex flex-col items-center">
          <h2 className="text-headline-large text-primary text-center font-mincho">
            なぜ、あえて「90問」もの<br className="block lg:hidden" />設問が必要なのか？
          </h2>
          <div className="rounded-2xl px-[10vw] py-[4rem] bg-surface-container mt-[2.4rem]">
            <p className="text-body-large text-on-surface font-roboto text-center">
              <span>
                一般的な心理テストとは異なり、
                <br className="block lg:hidden" />
                この診断はあなたの
                <span className="font-semibold whitespace-nowrap">
                  「表面的な性格」
                </span>
                だけでなく、
                <br className="hidden lg:block" />
                <span className="font-semibold whitespace-nowrap text-primary">
                  「深層心理(OS)」
                </span>
                までを
                <br className="block lg:hidden" />
                分析します
              </span>
              <br />
              <br />
              <span>
                本気で現状を変えたいと願う方のために、一切の妥協なく設計しました。
              </span>
              <br />
              <br />
            </p>
            <p className="text-body-medium text-on-surface font-roboto text-center">
              時間と心に余裕がある時にスタートしてください。
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-[3.2rem] pb-[2rem] w-full">
          <IconAndDescription Icon={BrainIcon} title="深層心理分析" description="表面だけでなく無意識の層まで" />
          <IconAndDescription Icon={DatabaseIcon} title="3,000名のデータ" description="実証された科学的根拠" />
          <IconAndDescription Icon={MonitoringIcon} title="精密な分析" description="妥協のない90の質問" />
        </div>
      </SectionContainer>
      <SectionContainerLight>
        <div className="flex flex-col items-center gap-[3.2rem]">
          <h2 className="text-headline-large text-primary text-center font-mincho">
            人は、少数のタイプで語れるほど単純ではない
          </h2>
          <p className="text-body-large text-on-surface font-roboto text-center">
            <span className="font-semibold whitespace-nowrap">
            「16のメインタイプ」
            </span>
            ×
            <span className="font-semibold whitespace-nowrap">
            「4つのサブタイプ」
            </span>
            =計
            <span className="font-semibold whitespace-nowrap text-primary">
            64通りの行動パターン
            </span>
            で、
            <br className="hidden lg:block" />
            あなたを精密に分析します
          </p>
          <p className="text-body-medium text-on-surface font-roboto text-center">
            「普段は冷静なのに、なぜか焦ってしまう」といった、
            <br className="hidden lg:block" />
            矛盾する行動の原因まで言語化します。
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-[3.2rem] w-full">
          <TypeCard
            Icon={BrainIcon}
            title="16のメインタイプ"
            subtitle="基本的な行動傾向"
            description="あなたの基本的な思考パターン、感情の処理方法、対人関係における傾向を16のタイプで分類。これがあなたの「ベースOS」となります。"
          />
          <TypeCard
            Icon={StacksIcon}
            title="4つのサブタイプ"
            subtitle="状況別の反応パターン"
            description="ストレス下、恋愛場面、初対面など、状況によって変化するあなたの「モード」を4つのサブタイプで解析。矛盾する行動の理由が明らかに。"
          />
        </div>
        <AnalysisFormula />
        <div className="flex flex-col items-center gap-[1.6rem]">
          <h3 className="text-headline-small text-on-surface text-center font-mincho">
          16 Main Archetypes
          <br className="block md:hidden" />
          (Basic OS)
          </h3>
          <p className="text-headline-medium text-primary text-center font-mincho">
          × 4 Stress Modes =
          <span className="hidden md:inline"> </span>
          <br className="block md:hidden" />
          64 Unique Patterns
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-[2.4rem] w-full list-none p-0 m-0">
            {TYPE_TILES.map((tile) => (
              <li
                key={tile.label}
                className="rounded-xl overflow-hidden border border-primary-glass-light bg-linear-to-br from-surface-container to-surface-container-light px-[1.6rem]"
              >
                <div className="w-fit mx-auto mt-[1.2rem] mb-[0.6rem] bg-primary-glass rounded-lg border border-primary-glass-light">
                  <Image
                    src={tile.image}
                    alt={tile.label}
                    className="w-full h-auto object-cover rounded-md sm:max-w-[10.5rem] sm:mx-auto"
                  />
                </div>
                <p className="px-[1.2rem] py-[1rem] text-body-small text-primary text-center font-roboto">
                  {tile.label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </SectionContainerLight>
      <SectionContainer >
        <div className="flex flex-col items-center">
          <h2 className="text-headline-large text-primary text-center font-mincho">
          あなた自身を知るための<br className="block lg:hidden" />「18の分析レポート」
          </h2>
          <p className="text-body-medium text-on-surface font-roboto text-center mt-[2.4rem]">
          目を背けたくなる課題も、<br className="hidden lg:block" />データとして客観的にお伝えします。
          </p>
        </div>
        <div className="flex flex-col items-center gap-[4.8rem]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[2.4rem] w-full">
            <ReportCard
              index="01"
              title="あなたの恋愛プロファイリング"
              Icon={PersonHeartIcon}
            />
            <ReportCard
              index="04"
              title="繰り返しがちな「思考の癖」"
              Icon={AutorenewIcon}
            />
            <ReportCard
              index="06"
              title="無意識に選んでしまう男性の特徴"
              Icon={VisibilityOffIcon}
            />
            <ReportCard
              index="08"
              title="今後の未来予測シミュレーション"
              Icon={ScheduleIcon}
            />
            <ReportCard
              index="09"
              title="彼とのシチュエーション別・反応パターン"
              Icon={MoodIcon}
            />
            <ReportCard
              index="10"
              title="彼とのコミュニケーションのすれ違い要因"
              Icon={ChatBubbleOffIcon}
            />
            <ReportCard
              index="15"
              title="男性から見たあなたの客観的な印象データ（※重要）"
              Icon={VisibilityIcon}
            />
            <ReportCard
              index="16"
              title="最短ルートの改善ステップ"
              Icon={ConversionPathIcon}
            />
          </div>
          <div className="rounded-2xl px-[3.2rem] py-[3.2rem] border-[0.1rem] border-primary-glass-light bg-primary-glass flex flex-col items-center justify-center gap-[1.6rem] w-full">
              <p className="text-body-medium text-on-surface text-center">
                <span className="text-primary font-semibold">
                 全18項目
                </span>
                の詳細レポートを無料でお届けします
              </p>
              <p className="text-body-small text-on-surface text-center">
               ※一部抜粋してご紹介しています。実際のレポートには全18項目が含まれます。
              </p>
          </div>
        </div>
      </SectionContainer>
      <SectionContainer >
        <h2 className="text-headline-large text-primary text-center font-mincho">
          このような方の<br className="block lg:hidden" />お役に立てる診断です
        </h2>
        <div className="flex flex-col items-center gap-[4.8rem]">
          <div className="flex flex-col md:flex-row items-center justify-center gap-[3.2rem] w-full">
            <IdealAudienceCard
              title="こんな方に最適です"
              items={[
                "感覚的なアドバイスに違和感がある方",
                "自分の課題を論理的に知りたい方",
                "「なぜうまくいかないのか」の理由が知りたい方",
                "本気で現状を変えたいと考えている方",
                "データに基づいた客観的な分析を求める方",
              ]}
              isOptimal={true}
            />
            <IdealAudienceCard
              title="お役に立てない可能性があります"
              items={[
                "手軽なエンタメ診断を求めている方",
                "耳の痛い指摘を受け入れたくない方",
                "今の自分を変える必要を感じていない方",
                "すぐに結果だけを知りたい方",
                "時間をかけて向き合う余裕がない方",
              ]}
              isOptimal={false}
            />
          </div>
          <div className="rounded-2xl px-[2.5rem] py-[4rem] bg-surface-container">
            <p className="text-body-small text-on-surface font-roboto text-center">
              <span>
              この診断は、真剣に自分と向き合い、現状を変えたいと願う方のために設計されています。
                <br className="block lg:hidden" />
                表面的な慰めではなく、
                <span className="font-semibold whitespace-nowrap">
                  事実に基づいた分析
                </span>
                をお届けします。
              </span>
            </p>
          </div>
        </div>
      </SectionContainer>
      <SectionContainerLight>
        <div className="flex flex-col items-center gap-[3.2rem]">
            <h2 className="text-headline-large text-primary text-center font-mincho">
              事実を知ることが、変化への第一歩です。
            </h2>
            <div className="flex flex-col items-center gap-[1.6rem]">
              <p className="text-body-medium text-on-surface font-roboto text-center">
              うまくいかない原因がわからない状態こそが、一番のストレスです。
              </p>
              <p className="text-body-medium text-on-surface font-roboto text-center">
              まずは現状をデータで把握してください。
              </p>
            </div>
            <div className="flex flex-col items-center gap-[1.6rem]">
              <StartDiagnosisButton>
                <span className="text-label-small text-on-primary font-roboto">精密分析を開始する（無料・完全レポート付）</span>
              </StartDiagnosisButton>
              <p className="text-body-small text-on-surface font-roboto text-center">※所要時間: 約10分/メールアドレスのみで開始できます</p>
            </div>
        </div>
      </SectionContainerLight>
      </main>
      <footer className="px-[4vw] py-[3.2rem] bg-surface border-t border-surface-container">
        <p className="text-body-small text-on-surface-container text-center font-roboto">
          © 2026 Core Reboot Program. 無断転載・複製を禁じます。
        </p>
      </footer>
    </div>
  );
}
