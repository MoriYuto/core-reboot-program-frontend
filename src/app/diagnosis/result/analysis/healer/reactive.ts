import type { AnalysisItem } from "../types";

export const HEALER_REACTIVE: AnalysisItem[] = [
  {
    name: "コア特徴",
    nameEn: "Core Characteristics",
    blocks: [
      {
        type: "highlight",
        text: "「優しさの温度」と「不安の揺れ」が共存するタイプ。",
      },
      {
        type: "section",
        emoji: "💚",
        heading: "ヒーラーは",
        items: [
          "相手の痛みに敏感",
          "寄り添いたい",
          "誰かの力になりたい",
          "愛情を注ぐ人",
        ],
        variant: "positive",
      },
      {
        type: "warning",
        emoji: "⚡",
        heading: "しかし反応型が重なると",
        items: [
          "急に不安になる",
          "好きが強すぎて苦しくなる",
          "感情が溢れる",
          "相手の温度に過敏",
          "自分の価値を揺らしやすい",
        ],
      },
      {
        type: "insight",
        label: "言い換えると",
        text: "\"愛情が深い分だけ壊れやすく\"\"優しい分だけ苦しくなりやすい\"繊細な構造。",
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
          "最初は献身的で優しい",
          "相手の反応に過敏",
          "不安が高まると過保護or静かな怒り",
          "相手に尽くしすぎる",
          "相手の問題を背負う",
          "愛情が重たくなる",
          "依存関係に入りやすい",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "優しさと不安が混ざり合う恋愛パターン。",
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
          "急に気持ちが溢れて泣いてしまう",
          "相手を優先しすぎる",
          "問題が起きた時不安で押しつぶされる",
          "LINEの温度差で心がざわつく",
          "「嫌われた？」の感覚が強い",
          "感情を飲み込みきれず急に爆発",
          "疲れても相手を支えようと頑張ってしまう",
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
        heading: "深層には",
        items: [
          "「見捨てられたくない」",
          "「必要とされたい」",
          "「愛されたい証拠が欲しい」",
          "という深い愛着欲求。ヒーラー特有の過共感（相手の痛みを吸う）・献身（尽くしすぎ）・愛情過多（溢れすぎ）と結びつく。",
        ],
      },
      {
        type: "insight",
        label: "結果",
        text: "\"優しさと不安の無限ループ\"が起きる。",
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
        heading: "本音は",
        items: [
          "愛されたい・大事にされたい・抱きしめてほしい・安心がほしい。",
          "しかし不安が先に出る・嫌われるのが怖い・求められたい・関係を失いたくない。",
        ],
        variant: "neutral",
      },
      {
        type: "insight",
        label: "表面化",
        text: "\"優しさに隠れた依存\"という形で表面化する。",
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
        heading: "良い意味で惹かれやすい",
        items: [
          "頼れる男性",
          "甘えてくれる男性",
          "優しい人",
          "包容力がある人",
        ],
        variant: "positive",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "危険パターン",
        items: [
          "問題を抱えた男性",
          "情緒が不安定な男性",
          "依存してくる男性",
          "→「私がいなきゃ」でハマる。",
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
          "最初は完璧に尽くす",
          "不安が出てくる",
          "相手を過剰にケア",
          "重く感じて彼が距離を取る",
          "あなたの不安が増大",
          "感情が溢れ\"察してほしいモード\"へ",
          "関係が不安定化",
        ],
      },
      {
        type: "insight",
        label: "典型的な",
        text: "典型的な「愛しすぎて壊す」パターン。",
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
              "普段は癒しタイプだが不安が出ると\"急にネガティブ\"になる。",
              "彼の言動を深読みしすぎて小さなことでも心が揺れやすい。",
              "自分の気持ちより「相手がどう思ってるか」で行動してしまう。",
            ],
          },
          {
            emoji: "🔹",
            label: "長期",
            items: [
              "感情の揺れが続き恋愛そのものが\"しんどいもの\"に変わる。",
              "尽くす→不安→自己嫌悪→また尽くすのループにハマりやすい。",
              "深まるほど不安が増え\"安心感のない恋愛OS\"が固定化する。",
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
              "不安増大",
              "感情的にモヤモヤ",
              "優しさと不安の両方が入り乱れる",
              "「大丈夫？」の連投or完全沈黙のどちらか",
            ],
          },
          {
            trigger: "会えない日が続く",
            reactions: [
              "頭では理解",
              "心は不安",
              "過剰にケアをしようとする",
            ],
          },
          {
            trigger: "返信が曖昧",
            reactions: [
              "自信が揺れる",
              "「求められてない？」の不安",
            ],
          },
          {
            trigger: "彼が冷たい",
            reactions: [
              "自分を責める",
              "その後感情が一気に溢れる",
              "優しさと涙のループ",
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
              { speaker: "彼", text: "「ちょっと今日は疲れてて…」", isUser: false },
              { speaker: "あなた", text: "「そっか…」（不安が走る）", isUser: true },
            ],
          },
          {
            exchanges: [
              { speaker: "彼", text: "「ごめん、返信遅れた」", isUser: false },
              { speaker: "あなた", text: "「大丈夫だよ！」（本当は寂しい）", isUser: true },
            ],
          },
          {
            exchanges: [
              { speaker: "あなた", text: "「最近冷たくない？」", isUser: true },
              { speaker: "あなた", text: "「私、何かした？」", isUser: true },
            ],
            summary: "彼は驚きや戸惑いを感じる。",
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
            trigger: "彼の温度差",
            reactions: ["感情が激しく揺れる"],
          },
          {
            trigger: "曖昧な関係",
            reactions: ["愛情過多で埋めようとする"],
          },
          {
            trigger: "相手の悩み",
            reactions: ["自分も巻き込まれて情緒不安定に"],
          },
          {
            trigger: "返信の遅さ",
            reactions: ["\"拒絶\"として受け取りやすい"],
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
        text: "あなたの優しさは誰よりも深くて温かい。でもその優しさの裏で「愛されたい」の気持ちと「失うのが怖い」が混ざり合い揺れが大きくなる。",
      },
      {
        type: "list",
        items: [
          "その感情が重くなった時、相手は「支えきれない」と感じて離れていく。",
          "ヒーラー×反応型は\"強すぎる愛\"が恋を壊す瞬間がある。",
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
          "相手に尽くす",
          "相手の気持ちに過敏",
          "少しの沈黙で不安",
          "リアクションが豊か",
          "不安が出ると急に甘える",
          "相手の機嫌で気分が左右される",
          "帰った後に涙が出ることも",
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
          "丁寧で愛情深い",
          "気遣いが多い",
          "不安が出ると長文",
          "絵文字が増える",
          "「大丈夫？」「無理しないでね」が多い",
          "返信が来ないと心が揺れる",
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
            "優しい",
            "気持ちを分かってくれる",
            "愛情深い",
            "献身的",
          ],
        },
        bad: {
          heading: "⚠ 誤解",
          items: [
            "急な情緒の揺れ",
            "重く感じる瞬間",
            "本音が涙として出てくる",
            "\"ありがとう\"と\"不安\"が混ざる",
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
            action: "特に情動調整",
            detail: "不安を感じた時に感情を客観視する",
          },
          {
            num: "②",
            category: "自己認識",
            action: "不安の正体の言語化",
            detail: "不安の正体を言葉にする練習",
          },
          {
            num: "③",
            category: "自己肯定感",
            action: "愛される安心の基盤",
            detail: "自分の価値を相手の反応に依存させない",
          },
          {
            num: "④",
            category: "愛着の安定化",
            action: "安心安全の構築",
            detail: "安定した愛着パターンを育てる",
          },
        ],
        summary: "このステップで\"最強の包容力×安心感\"の恋愛が実現します。",
      },
    ],
  },
  {
    name: "改善後の未来ストーリー",
    nameEn: "Future Story After Improvement",
    blocks: [
      {
        type: "highlight",
        text: "あなたの優しさは愛の源泉。その優しさを\"自己犠牲\"ではなく\"自己肯定×安心感\"で満たしたとき、",
      },
      {
        type: "list",
        items: [
          "感情が安定する",
          "恋愛が軽くなる",
          "不安ではなく信頼で結ばれる",
          "愛が穏やかに循環する",
        ],
      },
      {
        type: "insight",
        label: "ヒーラー型×反応型は",
        text: "成長すると「最強の包容力×安心感」の恋愛になる。",
      },
    ],
  },
  {
    name: "総評",
    nameEn: "Overall Assessment",
    blocks: [
      {
        type: "text",
        text: "インパルスヒーラーは、普段は優しく穏やかなのに、\"相手の感情の揺れ\"を敏感に拾ってしまう繊細さを持つタイプです。その優しさが不安や情緒の波に変わると、自分を後回しにして疲れやすい傾向があります。不安・寂しさ・疲れをそのまま小さく言葉にできるようになると、心の負担が軽くなり、\"揺れない優しさ\"へと安定し、深い安心感のある関係を育てられます。",
      },
    ],
  },
];
