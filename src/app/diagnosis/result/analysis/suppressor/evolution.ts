import type { AnalysisItem } from "../types";

export const SUPPRESSOR_EVOLUTION: AnalysisItem[] = [
  {
    name: "コア特徴",
    nameEn: "Core Characteristics",
    blocks: [
      {
        type: "highlight",
        text: "サプレッサー型が成長型に進化。「静かな強さ×落ち着いた感情×誠実なパートナーシップ」を兼ね備える。",
      },
      {
        type: "section",
        emoji: "✨",
        heading: "本来は感情を抑える傾向が強いが成長型では",
        items: [
          "感情を認識できる",
          "落ち着いて処理できる",
          "適切に伝えられる",
          "関係に温度が生まれる",
        ],
        summary: "\"繊細なのに穏やか\"\"優しいのに安定している\"という魅力。",
        variant: "positive",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "注意点",
        items: ["元々は感情を抑圧しがちなタイプのため、無理は禁物"],
      },
      {
        type: "insight",
        label: "特徴",
        text: "成長型では控えめさが落ち着き・安心感という魅力に変わる。",
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
          "相手を尊重する落ち着いた恋愛",
          "感情を押し込めず適度に共有できる",
          "急に冷める／距離を取るが激減",
          "恋愛が安定しやすい",
          "誤解が少ない",
          "相手に\"安心する\"と言われる",
          "曖昧な関係から明確な関係に変わる",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "穏やかで安定した恋愛が築きやすい。",
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
          "考えてから話す",
          "ゆっくり距離を縮める",
          "自分のペースを守る",
          "穏やかに相手を受け止める",
          "衝突でも逃げずに向き合える",
          "急にシャットダウンしない",
          "感情表現が穏やかで安定",
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
        heading: "サプレッサー型の根は「感情はあるけど出したくない／出すと疲れる」",
        items: [
          "しかし成長型では「出しても大丈夫」「伝えた方が関係が楽になる」「逃げなくていい」という\"許可\"が内側に生まれ恋愛での行動が劇的に変わる。",
        ],
      },
      {
        type: "insight",
        label: "心理",
        text: "感情を抑圧するパターンから、適切に表現できるパターンへと進化している。",
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
        heading: "心の平和を守りたい・衝突を避けたい・でも本音は分かってほしい",
        items: [
          "ゆっくり関係を育てたい",
          "急な感情のぶつかり合いが苦手",
          "愛は深いのに表に出すのが控えめ",
        ],
        summary: "この\"控えめさ\"が成長型では落ち着き・安心感という魅力に変わる。",
        variant: "neutral",
      },
      {
        type: "insight",
        label: "特徴",
        text: "内側の深い愛情を、穏やかに伝えられるようになっている。",
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
          "安定している",
          "優しい",
          "距離感が自然",
          "感情を押しつけてこない",
          "言葉より行動が丁寧なタイプ",
        ],
        variant: "positive",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "注意",
        items: ["成長型のため注意は軽め"],
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
          "忙しいと感情処理が後回し",
          "無意識に距離を取ることがある",
          "\"大丈夫\"と言いがち",
          "相手が不満に気づきにくい",
        ],
      },
      {
        type: "insight",
        label: "成長型",
        text: "しかし以前ほど致命的にはならない。",
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
              "穏やかさが裏目に出て本音を言わずに相手に合わせすぎる。",
              "\"これくらい大丈夫\"の我慢が当たり前になる。",
              "気づくと\"恋愛が相手主導\"になっている。",
            ],
          },
          {
            emoji: "🔹",
            label: "長期",
            items: [
              "自分のニーズが分からなくなり\"恋愛迷子\"状態に入る。",
              "穏やかさ＝都合の良さと扱われ軽く見られやすい。",
              "最終的に我慢が限界になり突然感情がシャットダウンする。",
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
              "怒らない",
              "不安にもならない",
              "「落ち着いたら返信くるでしょ」",
              "心の安定が強い",
            ],
          },
          {
            trigger: "返信遅い",
            reactions: [
              "過剰に気にしない",
              "逆に自分時間を楽しめる",
            ],
          },
          {
            trigger: "意見食い違い",
            reactions: [
              "感情を抑圧せず",
              "でも冷静に話せる",
              "「私はこう思う」を伝えられる",
            ],
          },
          {
            trigger: "温度差",
            reactions: [
              "焦らず観察",
              "距離を詰め直すことができる",
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
              {
                speaker: "彼",
                text: "「少し考えたい」",
                isUser: false,
              },
              {
                speaker: "あなた",
                text: "「OK、必要なら言ってね」",
                isUser: true,
              },
            ],
            summary: "相手は\"安心して頼れる人\"と感じる",
          },
          {
            exchanges: [
              {
                speaker: "彼",
                text: "「忙しくて…」",
                isUser: false,
              },
              {
                speaker: "あなた",
                text: "「うん、落ち着いたらで大丈夫だよ」",
                isUser: true,
              },
            ],
            summary: "余裕が魅力に変わる",
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
            trigger: "他の女性の影",
            reactions: [
              "一瞬モヤっとする",
              "でも感情に飲まれない",
              "冷静に\"事実と感情\"を切り分ける",
            ],
          },
          {
            trigger: "予定変更",
            reactions: [
              "すぐ受け入れられる",
              "ただし「続くと嫌だな」は言語化できる",
            ],
          },
          {
            trigger: "急な温度差",
            reactions: [
              "焦らない",
              "状況を理解し落ち着く",
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
        text: "あなたは元々、傷つかないように静かに距離を取ってきた。でも成長した今、距離を取る代わりに\"伝えてみる\"という選択ができる。",
      },
      {
        type: "list",
        items: [
          "その小さな一歩のおかげで恋はこじれず相手の心に届くようになる。",
          "以前のあなたなら離れていた場面で今のあなたは\"繋がり続けられる\"。",
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
          "落ち着いた雰囲気を作る",
          "気を使いすぎない",
          "相手の話を丁寧に聞く",
          "適度に自分の話をする",
          "疲れたら自然に本音が言える",
          "無理に盛り上げようとしない",
          "\"自然な親密さ\"が生まれる",
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
          "短すぎず長すぎず",
          "スタンプを適切に使う",
          "感情は落ち着いて表現",
          "確認LINEは少ない",
          "温度の安定感が強い",
          "相手のペースに振り回されない",
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
          items: [
            "落ち着く",
            "話しやすい",
            "安心する",
            "一緒にいて疲れない",
            "信頼できる",
            "安定している",
          ],
        },
        bad: {
          heading: "誤解される点",
          items: [
            "時々\"本音の深い部分\"が見えにくい",
            "気を使わせてしまう瞬間がある",
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
            action: "小さな不満に気づく",
            detail: "自分の小さな不満を認識する練習",
          },
          {
            num: "②",
            category: "コミュニケーション",
            action: "境界線の共有",
            detail: "自分の境界線を言葉で伝える",
          },
          {
            num: "③",
            category: "愛着",
            action: "より安定へ",
            detail: "安定した愛着パターンをさらに強化",
          },
          {
            num: "④",
            category: "感情マネジメント",
            action: "言葉化の強化",
            detail: "感情を言葉にする力を育てる",
          },
        ],
        summary: "このステップで\"深い安心感と信頼の恋\"が実現します。",
      },
    ],
  },
  {
    name: "改善後の未来ストーリー",
    nameEn: "Future Story After Improvement",
    blocks: [
      {
        type: "highlight",
        text: "あなたの恋愛は\"穏やかなだけの恋\"から\"深い安心感と信頼の恋\"へ進化する。",
      },
      {
        type: "list",
        items: [
          "本音が少しずつ言える",
          "距離が縮まりやすい",
          "彼から「居心地いい」と言われる",
          "愛情が安定して続く関係になる",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "サプレッサー型×成長型は\"静かな優しさと成熟\"を兼ね備えた特別なパートナー。誰かの心に長く深く寄り添うことができるタイプ。",
      },
    ],
  },
  {
    name: "総評",
    nameEn: "Overall Assessment",
    blocks: [
      {
        type: "text",
        text: "エボリューションサプレッサーは、本来繊細で内省的な気質を持ちながら、その弱さに振り回されず\"静かな安定\"を手に入れたタイプです。自分の気持ちを丁寧に扱い、相手にも穏やかに向き合えるため、関係はゆっくり確実に深まります。控えめな優しさと誠実さが魅力となり、対等で安心できるパートナーシップを築きやすい成熟タイプです。",
      },
    ],
  },
];
