import type { AnalysisItem } from "../types";

export const EMPATH_DEFENSIVE: AnalysisItem[] = [
  {
    name: "コア特徴",
    nameEn: "Core Characteristics",
    blocks: [
      {
        type: "highlight",
        text: "エンパス型 × 防衛型は、「人の感情に敏感」なのに「自分の感情は隠してしまう」という真逆の2つが共存するタイプ。",
      },
      {
        type: "section",
        emoji: "✨",
        heading: "エンパスなので",
        items: ["相手の気持ちを察しすぎる", "空気を読みすぎる", "人を傷つけたくない", "優しすぎる"],
        variant: "positive",
      },
      {
        type: "warning",
        emoji: "🛡️",
        heading: "しかし防衛型のOSが働くと",
        highlightText: "\"感情のシャッター\"が降りる。",
        items: ["本音を言わない", "必要以上に距離を取る", "弱さを見せられない", "感情を表に出さない"],
      },
      {
        type: "insight",
        label: "結果、",
        text: "「人の心には入り込みすぎるのに、自分の心は閉ざす」という恋愛難易度MAXのOSが完成する。",
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
          "相手の気持ちは敏感に察する",
          "でも自分の気持ちは言えない",
          "優しさの仮面で本音をごまかす",
          "仲良くなった瞬間、距離を取りたくなる",
          "曖昧な関係が続きやすい",
          "相手に頼れない",
          "恋愛が\"静かな気配り合戦\"になりがち",
        ],
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
          "感情を飲み込む",
          "問題があっても何も言わない",
          "優しさで相手を包み込む",
          "相手の機嫌に合わせる",
          "心を開きたいのに開けない",
          "不安を見せないために笑顔でごまかす",
          "自分の限界を相手に伝えない",
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
        heading: "エンパス型 × 防衛型の根底には",
        items: [
          "「本音を見せたら距離を置かれる」",
          "「優しくしていれば、関係は壊れない」",
          "「弱さは迷惑になる」",
          "「嫌われるくらいなら、離れる方が楽」",
        ],
        summary: "という深い信念がある。",
      },
      {
        type: "insight",
        label: "",
        text: "\"敏感さ\"と\"防衛\"が同時に動くので、恋愛が常にブレーキを踏みながらアクセルも踏む状態。",
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
        heading: "心の奥には本当はこう思っている",
        items: [
          "本当は甘えたい",
          "安心して泣ける場所が欲しい",
          "優しくされると心が緩む",
          "大事にされたい",
          "弱さを受け止めてほしい",
        ],
        summary: "しかし同時に「甘えたら嫌われる」「期待されたくない」「相手に迷惑をかけたくない」「深く入られると息苦しい」と感じて、心を閉ざす。",
        variant: "positive",
      },
      {
        type: "insight",
        label: "",
        text: "「望み」と「怖さ」が同時に存在するOS。",
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
        heading: "惹かれやすいタイプ",
        items: ["安心感がある男性", "落ち着きがあるタイプ", "優しくて気遣いのできる人"],
        variant: "positive",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "ただし、問題点も…",
        items: [
          "積極的に距離を縮める男性 → 心が追いつかず一気に逃げたくなる",
          "感情表現が多い男性 → 受け止めきれず疲れやすい",
          "自由人タイプ → 傷つく前に距離を取ろうとする",
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
          "気づかれない優しさを続ける",
          "本音を言わない",
          "相手は「距離を感じる」と不安に",
          "あなたは「私のせい？」と申し訳なくなる",
          "さらに距離をとる",
          "関係がフェードアウト",
        ],
      },
      {
        type: "insight",
        label: "",
        text: "典型的な無言のすれ違い。",
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
            label: "短期（1〜3ヶ月）",
            items: [
              "相手の気持ちは察せるのに、自分の弱さは絶対に見せられない。",
              "「嫌われるかも」が強まり、距離を詰めるのが怖くなる。",
              "本音を隠しながら相手に尽くす\"不健全な優しさ\"が増える。",
            ],
          },
          {
            emoji: "🔹",
            label: "長期（6ヶ月〜1年以降）",
            items: [
              "\"察するけど開けない恋愛\"になり、深い関係が築けない。",
              "優しさの仮面が固定化し、相手は「壁がある」と感じやすい。",
              "最終的に、親密さが怖い → 距離が縮まらない → 選ばれない の自己強化ループが続く。",
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
            reactions: ["不安はある", "でも「聞けない」", "優しく振る舞うが内心は揺れる"],
          },
          {
            trigger: "温度差LINE",
            reactions: ["すぐ気づく", "でも追及しない", "自分を抑えて\"落ち着いた返信\""],
          },
          {
            trigger: "会えない日が続く",
            reactions: ["寂しい", "でも「会いたい」と言えない", "そのまま距離が広がる"],
          },
          {
            trigger: "彼が冷たく感じる",
            reactions: ["何も言わず、察して遠ざかる"],
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
              { speaker: "彼", text: "「最近忙しくてさ」", isUser: false },
              { speaker: "あなた", text: "「うん、分かるよ（本当は寂しい）」", isUser: true },
              { speaker: "彼", text: "「会えなくてごめん」", isUser: false },
              { speaker: "あなた", text: "「大丈夫、無理しないでね（本当は抱きしめてほしい）」", isUser: true },
              { speaker: "彼", text: "「何かあった？」", isUser: false },
              { speaker: "あなた", text: "「ううん、何もないよ（実は泣きそう）」", isUser: true },
            ],
            summary: "\"優しさで覆われた沈黙\"が関係を曇らせる。",
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
            trigger: "相手の冷たさ",
            reactions: ["心はざわつく", "でも何も言わない"],
          },
          {
            trigger: "曖昧な関係",
            reactions: ["本当は不安", "でも聞くと重くなると思って我慢"],
          },
          {
            trigger: "相手の悩み",
            reactions: ["聞く側に回りすぎて疲労する"],
          },
          {
            trigger: "自己嫌悪",
            reactions: ["「私が悪い」と一人で抱える"],
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
        text: "\"優しさゆえの静かな別れ\"はエンパス防衛型で最も起きやすい。",
      },
      {
        type: "list",
        items: [
          "あなたは優しく寄り添い続けた。",
          "でも心はどこか少し苦しかった。",
          "彼は、「大丈夫」と言い続けるあなたの本音に気づかなかった。",
          "気づいた時には、あなたはもう心の扉を閉ざし始めていた。",
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
          "気遣いのプロ",
          "相手が喜ぶ行動を察して動く",
          "弱みを見せない",
          "甘えるのが苦手",
          "お願いが言えない",
          "会話が穏やか",
          "でも内側では緊張している時が多い",
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
          "丁寧",
          "優しい",
          "短め",
          "感情を悟られないように整える",
          "深い話は避ける",
          "本音は書かない",
          "「無理しないでね」が口癖",
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
          heading: "良い印象",
          items: ["落ち着いてる", "優しい", "癒される", "安心感がある"],
        },
        bad: {
          heading: "難しく感じる点",
          items: [
            "本音が分からない",
            "壁を感じる",
            "何を考えているか読みづらい",
            "距離が縮まりそうで縮まらない",
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
            category: "自己認識",
            action: "本音の整理",
            detail: "自分の本当の気持ちを整理し、言語化する力を育てます。",
          },
          {
            num: "②",
            category: "愛着",
            action: "安定型の育成",
            detail: "安心できる関係性の中で、安定した愛着パターンを新しく育てていきます。",
          },
          {
            num: "③",
            category: "コミュニケーション",
            action: "小さな開示",
            detail: "一気に心を開くのではなく、小さな自己開示から始める技術を身につけます。",
          },
          {
            num: "④",
            category: "感情マネジメント",
            action: "弱さを扱えるように",
            detail: "弱さや不安を見せることを少しずつ練習し、感情を適切に扱えるようになります。",
          },
        ],
        summary: "このステップを順番に進めることで、本音で繋がる恋愛が実現します。",
      },
    ],
  },
  {
    name: "改善後の未来ストーリー",
    nameEn: "Future Story After Improvement",
    blocks: [
      {
        type: "highlight",
        text: "あなたが\"不安を優しさで隠す恋\"から\"本音で繋がる恋\"に移行した瞬間、",
      },
      {
        type: "list",
        items: ["甘えられる安心", "頼れる関係", "深い信頼と絆", "温度差のない愛情"],
      },
      {
        type: "insight",
        label: "エンパス型 × 防衛型は、",
        text: "成長すると「静かな優しさ × 深い安心」を与える理想のパートナーになる。",
      },
    ],
  },
  {
    name: "総評",
    nameEn: "Overall Assessment",
    blocks: [
      {
        type: "text",
        text: "シールドエンパスは、深い共感力と優しさを持ちながら、\"傷つきたくない気持ち\"が強く、本音を隠して距離を保ちやすいタイプです。相手の気持ちはよくわかるのに、いざ自分の感情を出す場面では急に慎重になり、親密さの手前で止まりやすいのが特徴。弱さや寂しさを少しだけ共有できるようになると、壁が溶けて安心の循環が生まれ、あなたの温かさがやっと相手にまっすぐ伝わる関係へと育っていきます。",
      },
    ],
  },
];
