import type { AnalysisItem } from "../types";

export const SUPPRESSOR_REACTIVE: AnalysisItem[] = [
  {
    name: "コア特徴",
    nameEn: "Core Characteristics",
    blocks: [
      {
        type: "highlight",
        text: "普段は感情を抑えるのに恋愛になると急に感情が揺れる\"二面性タイプ\"。落ち着いて見える・冷静に振る舞える・穏やかで安定しているのに\"好きになると感情が一気に動く\"。",
      },
      {
        type: "section",
        emoji: "✨",
        heading: "抑制型の静けさと反応型の情熱が同居した",
        items: [
          "最もギャップが強いタイプ",
          "そのギャップが可愛さや魅力にもなる",
          "恋愛が最も乱れやすいタイプでもある",
        ],
        variant: "neutral",
      },
      {
        type: "warning",
        emoji: "⚡",
        heading: "二面性ゆえに",
        items: [
          "普段は落ち着いているのに恋だけは感情が強い",
          "理性で抑えてきた不安が一気に噴き出す",
        ],
      },
      {
        type: "insight",
        label: "言い換えると、",
        text: "抑制型の静けさと反応型の情熱が同居した\"最もギャップが強いタイプ\"。",
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
          "普段は落ち着いているのに恋だけは感情が強い",
          "理性で抑えてきた不安が一気に噴き出す",
          "優しさと情熱の振れ幅が大きい",
          "自分の感情に戸惑う",
          "関係が深まると不安が強くなる",
          "感情の浮き沈みが\"周期的\"に出る",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "抑制型の静けさと反応型の情熱が同居した恋愛パターン。",
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
          "相手の反応に一気に気分が揺れる",
          "距離が縮まると急に不安が出る",
          "言いたくないのに気持ちが溢れてしまう",
          "受け身なのに思いつめると急に行動する",
          "「大丈夫」が口癖だが本当は不安",
          "感情を抑え続けて後で爆発する",
          "心配性が愛情と混ざりやすい",
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
        heading: "根本はサプレッサーの「感情を抑えたい」。しかし反応型の「感じたら一気に動く」が同時に存在。",
        items: [
          "抑えたい・でも気になる",
          "落ち着きたい・でも不安",
          "言いたくない・でも言いたいという葛藤",
          "恋愛だけ\"安定と情熱の波\"が起きる",
        ],
      },
      {
        type: "insight",
        label: "この構造ゆえに、",
        text: "恋愛だけ\"安定と情熱の波\"が起きる。",
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
        heading: "本音はこう",
        items: [
          "もっと安心したい",
          "拒絶が怖い",
          "本音を見せたいけど迷惑かけたくない",
          "頑張りたいのに空回る",
          "感情を抑えすぎて苦しい",
          "愛情が深いのに上手く出せない",
        ],
        variant: "neutral",
      },
      {
        type: "insight",
        label: "本質は、",
        text: "\"深く愛する力\"があるがその分不安の振れ幅も大きい。",
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
        items: [
          "穏やか",
          "誠実",
          "優しい",
          "受け止めてくれる",
          "気持ちの変化を丁寧に扱ってくれる",
          "ストレートに安心をくれる人",
          "特に\"一貫性のある男性\"に惹かれる",
        ],
        variant: "positive",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "注意",
        items: ["特になし"],
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
          "気持ちを隠したまま不安が膨らむ",
          "突然の感情反応が出る",
          "自己処理しようとして限界が来る",
          "相手からは矛盾して見える",
          "\"察してほしい\"が強くなる",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "衝突ではなく誤解から崩れることが多い。",
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
              "普段抑えているぶんちょっとした不安で心が大きく揺れる。彼の温度差に敏感になり内側でモヤモヤが急増。でも言葉にできず自己嫌悪が強まる。",
            ],
          },
          {
            emoji: "🔹",
            label: "長期",
            items: [
              "不安が積もりすぎて恋愛自体に疲れを感じる。言えない→我慢→感情爆発→後悔のループが固定化。\"深まるほど不安が出る恋愛OS\"が形成される。",
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
              "落ち着こうとするが",
              "数時間後に不安がじわじわくる",
              "夜になると気になりすぎる時も",
            ],
          },
          {
            trigger: "返信遅い",
            reactions: [
              "\"嫌われた？\"より\"私何かした？\"思考",
              "でも自分から追わない",
              "その代わり考え込む",
            ],
          },
          {
            trigger: "温度差を感じる",
            reactions: [
              "抑えようとして心がざわつく",
              "だんだん態度が曖昧になり相手に伝わる",
            ],
          },
          {
            trigger: "予定が合わない",
            reactions: [
              "表向き「大丈夫」",
              "内側:静かに落ち込む",
              "感情が溜まると突然冷たくなることも",
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
              { speaker: "彼", text: "「返信遅れてごめん」", isUser: false },
              {
                speaker: "あなた",
                text: "「全然大丈夫だよ」",
                isUser: true,
              },
              { speaker: "彼", text: "「最近どう？」", isUser: false },
              {
                speaker: "あなた",
                text: "「普通」",
                isUser: true,
              },
            ],
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
            reactions: [
              "抑えた不安が表情に出る",
              "静かに落ち込む",
            ],
          },
          {
            trigger: "曖昧な発言",
            reactions: [
              "深読みが加速",
              "相手の意図を探りすぎる",
            ],
          },
          {
            trigger: "他の女性の影",
            reactions: [
              "心では大きく揺れる",
              "でも表では何も言わない",
            ],
          },
          {
            trigger: "時間が合わない",
            reactions: [
              "理解するが\"寂しさ\"を溜め込む",
            ],
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
        text: "あなたは感情を抑えながら恋を進める。でも相手のちょっとした変化を見ると心が大きく反応する。「言わない方がいい」「迷惑かけたくない」。",
      },
      {
        type: "list",
        items: [
          "その優しさがあなた自身の不安を増やしていく。",
          "そしてある日限界が来てポロっと感情が出る。",
          "相手は驚く。あなたも驚く。",
          "\"抑えた感情が突然あふれる瞬間\"。",
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
          "相手に合わせる",
          "自分から深い話をしない",
          "急なスキンシップに弱い",
          "気遣いが多い",
          "安心すると甘えに変わる",
          "沈黙は大丈夫だが温度差には敏感",
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
          "普段は落ち着いた短文",
          "揺れると長文になる",
          "返信ペースが相手に寄る",
          "感情は書かないのに溢れる時は勢いがある",
          "「大丈夫」が多い",
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
            "落ち着く",
            "気遣いがすごい",
            "穏やかで癒される",
          ],
        },
        bad: {
          heading: "⚠ 誤解される部分",
          items: [
            "本音が読めない",
            "急な変化に驚く",
            "感情が振れる時がある",
            "静かに落ち込んでしまう",
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
            action: "感情の波を言葉に",
            detail: "揺れた瞬間の気持ちを言葉にする練習",
          },
          {
            num: "②",
            category: "自己認識",
            action: "自分の不安の正体の可視化",
            detail: "不安の正体を認識する",
          },
          {
            num: "③",
            category: "愛着",
            action: "安心感の土台作り",
            detail: "安定した愛着パターンを育てる",
          },
          {
            num: "④",
            category: "コミュニケーション",
            action: "小さな一言を増やす",
            detail: "小さな本音を伝える習慣",
          },
        ],
        summary:
          "このステップで\"静かな情熱×深い優しさ\"という唯一無二の恋愛スタイルが輝きます。",
      },
    ],
  },
  {
    name: "改善後の未来ストーリー",
    nameEn: "Future Story After Improvement",
    blocks: [
      {
        type: "highlight",
        text: "あなたは元々\"深く愛する才能\"の持ち主。感情が抑制から安定に変わると、",
      },
      {
        type: "list",
        items: [
          "不安の波が少なくなる",
          "誤解が減る",
          "気持ちの揺れが穏やかになる",
          "相手と心地よい距離感を作れる",
          "恋愛が長く安定して続く",
        ],
      },
      {
        type: "insight",
        label: "サプレッサー型×反応型は",
        text: "\"静かな情熱×深い優しさ\"という唯一無二の恋愛スタイルを持っている。その魅力は安定した恋愛に進化した時最も強く輝く。",
      },
    ],
  },
  {
    name: "総評",
    nameEn: "Overall Assessment",
    blocks: [
      {
        type: "text",
        text: "インパルスサプレッサーは、普段は控えめで落ち着いているのに、恋愛になると\"不安や寂しさを一気に抱え込む\"繊細さが強く出るタイプです。感情を抑えようとするほど内側だけが揺れ、相手に伝わらないまま苦しくなりやすい傾向があります。揺れた瞬間の気持ちを小さく共有できるようになると、心の安定が生まれ、あなたの静かな優しさが\"安心として伝わる恋愛\"へと変わっていきます。",
      },
    ],
  },
];
