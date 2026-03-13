import type { AnalysisItem } from "../types";

export const STRATEGIST_REACTIVE: AnalysisItem[] = [
  {
    name: "コア特徴",
    nameEn: "Core Characteristics",
    blocks: [
      {
        type: "highlight",
        text: "「頭では理解してるのに、感情が暴走する」という強烈なギャップ。頭脳は冷静（自己認識・観察力・分析力は高い）でも感情マネジメントが弱く衝動で動きやすい。",
      },
      {
        type: "section",
        emoji: "✨",
        heading: "言語化や対話力は高いので感情が乗ると長文に",
        items: [
          "賢いのに不器用",
          "冷静なのに感情的",
          "相手の気持ちが分かるのにうまく扱えない",
        ],
        variant: "neutral",
      },
      {
        type: "warning",
        emoji: "⚡",
        heading: "二面性",
        items: [
          "恋愛で悩む層に最も多い\"頭良い系・恋愛難民タイプ\"",
        ],
      },
      {
        type: "insight",
        label: "言い換えると、",
        text: "知性と感情のギャップが恋愛で顕著になるタイプ。",
      },
    ],
  },
  {
    name: "恋愛パターン",
    nameEn: "Love Patterns",
    blocks: [
      {
        type: "list",
        items: [
          "感情が揺れると考えるより先に反応する",
          "不安を言語化しすぎて重くなる",
          "「なんでわかってくれないの？」が口癖",
          "相手の言葉を深読みしやすい",
          "LINEの温度やテンポに強く影響を受ける",
          "気持ちが高ぶると距離が一気に縮まるが同時に不安も増す",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "\"冷静と情熱の間\"で揺れ動く恋愛。",
      },
    ],
  },
  {
    name: "やりがちな行動",
    nameEn: "Your Love Behavior Patterns",
    blocks: [
      {
        type: "list",
        items: [
          "相手の言葉を過剰に解釈",
          "不安になると説明的な長文を送る",
          "相手の一言に即反応し後で後悔",
          "「どうして？」と質問攻めになる",
          "感情が先に溢れ思いやりが置いていかれる",
          "怒りや不安の熱量が高くなると論理が攻撃的に見える",
        ],
      },
    ],
  },
  {
    name: "根本にある心理構造",
    nameEn: "Core Psychological Structure",
    blocks: [
      {
        type: "warning",
        emoji: "🧠",
        heading: "「分かり合いたいのに、分かってもらえない」という強い欲求",
        items: [
          "相手を深く理解したい・自分も理解されたい・関係を改善したいという\"良い意図\"があるのに",
          "焦り→情動→言い過ぎる→落ち込むという悪循環",
          "思考力が高いため自分で自分の感情を複雑にする\"知性型の罠\"にハマる",
        ],
      },
      {
        type: "insight",
        label: "この構造ゆえに、",
        text: "良い意図が伝わらず自己嫌悪に陥りやすい。",
      },
    ],
  },
  {
    name: "恋愛における深層心理",
    nameEn: "Your Love Psychology",
    blocks: [
      {
        type: "section",
        emoji: "💎",
        heading: "本当に欲しいのは「愛情」ではなく\"理解される幸せ\"",
        items: [
          "相手の反応が少しズレるだけで大きな不安",
          "無視された・評価されていない・距離を置かれた・愛情が減ったと誤解しやすい",
          "本当は安心したいだけなのに\"強い言葉\"や\"先回りした分析\"で伝えてしまう",
        ],
        variant: "neutral",
      },
      {
        type: "insight",
        label: "本質は、",
        text: "理解を求める気持ちが強すぎて、伝え方が重くなりがち。",
      },
    ],
  },
  {
    name: "惹かれやすい男性タイプ",
    nameEn: "Your Attraction Type (Men)",
    blocks: [
      {
        type: "section",
        emoji: "❤️",
        heading: "惹かれやすい",
        items: [
          "誠実で優しい男性",
          "知性のある男性",
          "コミュ力が高い明るい男性",
          "相談に乗ってくれるタイプ",
        ],
        variant: "positive",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "注意",
        items: [
          "無関心系・淡泊系・自己中心タイプを選ぶと確実に苦しむ。\"反応してくれる人\"が必要。",
        ],
      },
    ],
  },
  {
    name: "相手との関係性の特徴",
    nameEn: "Relationship Characteristics",
    blocks: [
      {
        type: "list",
        items: [
          "不安になる→言語化しすぎて長文→相手が負担に感じる→距離ができる→さらに不安になり追いLINE",
          "相手の沈黙を「拒絶」と誤解しやすい",
        ],
      },
      {
        type: "insight",
        label: "最も典型なのは、",
        text: "この\"愛情の逆流\"が典型。",
      },
    ],
  },
  {
    name: "今のまま進んだ場合の未来像",
    nameEn: "If This Pattern Continues…",
    blocks: [
      {
        type: "timeline",
        periods: [
          {
            emoji: "🔹",
            label: "短期",
            items: [
              "普段冷静な分感情が揺れた時に\"考えすぎる癖\"が悪化。彼の一言を深読みし勝手に不安を増幅。",
              "「大丈夫？」よりも「なぜ？」が先に出て相手が戸惑う。",
            ],
          },
          {
            emoji: "🔹",
            label: "長期",
            items: [
              "思考と感情が常に衝突し恋愛自体が\"疲れる活動\"に。",
              "男性の本心を読み取れなくなり関係が誤解ベースで進む。",
              "\"距離を縮めるほど不安になる恋愛\"パターンが繰り返される。",
            ],
          },
        ],
      },
    ],
  },
  {
    name: "彼の行動別：典型反応パターン",
    nameEn: "Typical Response Patterns",
    blocks: [
      {
        type: "reactions",
        patterns: [
          {
            trigger: "既読スルー",
            reactions: [
              "一気に不安が上昇",
              "「何かあった？」",
              "小さなことで不安が増幅",
            ],
          },
          {
            trigger: "返信遅い",
            reactions: [
              "待っている時間に妄想が進む",
              "LINEを読み返す",
              "過去の失敗を思い出す",
            ],
          },
          {
            trigger: "言われた一言が刺さる",
            reactions: [
              "冷静に処理しようとするが感情が先に動く",
              "深読み",
              "推論",
              "不安のループ",
            ],
          },
          {
            trigger: "デート後素っ気ない",
            reactions: [
              "「楽しんでなかったのかも」と即不安",
              "追加のLINEを送りやすい",
            ],
          },
        ],
      },
    ],
  },
  {
    name: "会話に見られる特徴",
    nameEn: "Examples of Miscommunication With Him",
    blocks: [
      {
        type: "dialogue",
        conversations: [
          {
            exchanges: [
              { speaker: "彼", text: "「今日はちょっと疲れてる」", isUser: false },
              {
                speaker: "あなた",
                text: "「疲れてるって、私といるのが嫌ってこと？」",
                isUser: true,
              },
            ],
            summary: "（本音：拒絶じゃないか不安）",
          },
          {
            exchanges: [
              { speaker: "彼", text: "「明日連絡するね」", isUser: false },
              {
                speaker: "あなた",
                text: "「なんで今日じゃないの？」",
                isUser: true,
              },
            ],
            summary: "（本音：愛情を確かめたい）",
          },
          {
            exchanges: [
              {
                speaker: "彼",
                text: "「そんなに深く考えなくていいよ」",
                isUser: false,
              },
              {
                speaker: "あなた",
                text: "「考えるのが悪いことなの？」",
                isUser: true,
              },
            ],
            summary: "（本音：理解してほしいだけ）",
          },
        ],
      },
    ],
  },
  {
    name: "不安の引き金(トリガーポイント)",
    nameEn: "Anxiety Triggers",
    blocks: [
      {
        type: "reactions",
        patterns: [
          {
            trigger: "温度差",
            reactions: ["全部自分のせいにしやすい"],
          },
          {
            trigger: "連絡ペースの違い",
            reactions: ["安心のために\"確認行動\"が増える"],
          },
          {
            trigger: "言われた言葉のズレ",
            reactions: ["解釈しすぎて不安を膨らませる"],
          },
          {
            trigger: "自分が大切にされてない気がする",
            reactions: ["感情を抑えられず爆発or長文"],
          },
        ],
      },
    ],
  },
  {
    name: "こじれストーリー",
    nameEn: "Conflict Story",
    blocks: [
      {
        type: "highlight",
        text: "彼のLINEの一文に反応し、深読みし、不安がつのり、勇気を出して想いを長文で送る。",
      },
      {
        type: "list",
        items: [
          "でも彼は疲れていた。既読がついたまま数時間返事がない。",
          "あなたの不安は頂点に達し追いLINEをしてしまう。",
          "彼はプレッシャーを感じて距離を置きたくなる。",
          "あなたは傷つき「やっぱり私は愛されない」と心が折れる。",
          "この連鎖が反応型の典型。",
        ],
      },
    ],
  },
  {
    name: "デート中の行動パターン",
    nameEn: "Dating Behavior Patterns",
    blocks: [
      {
        type: "list",
        items: [
          "テンションが波のように上下する",
          "楽しい時は最高に楽しめる",
          "少しの違和感に過剰反応",
          "相手の言動の\"意図\"をずっと考えてしまう",
          "リアクションが大きい（良い意味でも悪い意味でも）",
        ],
      },
    ],
  },
  {
    name: "LINEの癖",
    nameEn: "LINE Communication Habits",
    blocks: [
      {
        type: "list",
        items: [
          "長文になりがち",
          "説明が多い",
          "感情と言葉が混ざる",
          "確認質問が増える",
          "言い過ぎて後で後悔",
          "既読やテンポに強く影響される",
        ],
      },
    ],
  },
  {
    name: "男性から見たあなた",
    nameEn: "How Men See You",
    blocks: [
      {
        type: "evaluation",
        good: {
          heading: "✓ 良い印象",
          items: [
            "話しやすい",
            "感情表現が豊か",
            "理解力が高い",
            "共感力がある",
          ],
        },
        bad: {
          heading: "⚠ 誤解される部分",
          items: [
            "感情が重い時がある",
            "深読みされて怖い",
            "長文に圧を感じる",
            "気持ちが不安定に見える",
          ],
        },
      },
    ],
  },
  {
    name: "改善に向けた行動ステップ",
    nameEn: "Action Steps for Improvement",
    blocks: [
      {
        type: "steps",
        steps: [
          {
            num: "①",
            category: "感情マネジメント",
            action: "自分の不安との付き合い方",
            detail: "不安を感じた時に一呼吸おく習慣",
          },
          {
            num: "②",
            category: "愛着",
            action: "見捨てられ不安の修正",
            detail: "「愛情は不安定なもの」という思い込みを修正",
          },
          {
            num: "③",
            category: "自己認識",
            action: "深読み癖の理解",
            detail: "自分が深読みする癖に気づく",
          },
          {
            num: "④",
            category: "コミュニケーション",
            action: "言いすぎの調整",
            detail: "感情を小さく伝える練習",
          },
        ],
        summary:
          "このステップで知性と感情が調和した安定恋愛が実現します。",
      },
    ],
  },
  {
    name: "改善後の未来ストーリー",
    nameEn: "Future Story After Improvement",
    blocks: [
      {
        type: "highlight",
        text: "あなたが不安を客観視し、1テンポ置いて伝えられるようになると、",
      },
      {
        type: "list",
        items: [
          "恋愛の誤解が激減",
          "長文が\"温度ある会話\"に変わる",
          "相手が安心して愛情を注げる",
          "関係が安定し深い絆が生まれる",
        ],
      },
      {
        type: "insight",
        label: "ストラテジスト反応型は、",
        text: "\"感情を力に変えられるタイプ\"。心の温度を上手に扱い始めた瞬間、恋愛は確実に好転する。",
      },
    ],
  },
  {
    name: "総評",
    nameEn: "Overall Assessment",
    blocks: [
      {
        type: "text",
        text: "リアクティブストラテジストは、普段は思考的で冷静なのに、恋愛の場面では\"考えすぎ×感情の揺れ\"が一気に表に出やすいタイプです。洞察力が高いぶん相手の言動を深読みして疲れやすいが、本音を共有できれば一気に安定します。不安を\"分析\"ではなく\"言葉\"に変えられるようになると、知性と感情が調和し、安心感のある深い関係へ進みます。",
      },
    ],
  },
];
