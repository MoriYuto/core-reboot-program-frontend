import type { AnalysisItem } from "../types";

export const BLOCKER_DEFENSIVE: AnalysisItem[] = [
  {
    name: "コア特徴",
    nameEn: "Core Characteristics",
    blocks: [
      {
        type: "highlight",
        text: "ブロッカー型の中でも最も\"閉じる力\"が強い。感情を抑える・本音を見せない・距離を一定以上縮めない・自己開示がほぼゼロ・恋愛を\"リスク\"として認識する「恋愛のフリーズ状態」。",
      },
      {
        type: "section",
        emoji: "🛡️",
        heading: "恋愛はしたいが心の奥にある恐れの方が大きく",
        items: [
          "近づかれると怖い",
          "嫌われたくない",
          "期待させたくない",
          "傷つきたくない",
        ],
        summary: "という防衛心が強烈に働き\"距離を保つことが最適解\"になる。",
        variant: "neutral",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "防衛型ブロッカーの特徴",
        items: [
          "感情を抑える",
          "本音を見せない",
          "距離を一定以上縮めない",
          "自己開示がほぼゼロ",
        ],
      },
      {
        type: "insight",
        label: "結果",
        text: "恋愛を\"リスク\"として認識し、心を閉ざすことで自分を守ろうとする。",
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
          "恋愛が始まる前に止まる",
          "相手の好意に気づかないor気づいても反応しない",
          "距離が縮まると逃げる",
          "\"好かれないための行動\"を無意識にとる",
          "関係を深める前に自然消滅しやすい",
        ],
      },
      {
        type: "insight",
        label: "",
        text: "",
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
          "気持ちを伝えない",
          "褒められても否定する",
          "予定を曖昧にする",
          "連絡頻度が極端に少ない",
          "「今は忙しい」で逃げる",
          "告白されても\"感情が動かないフリ\"をする",
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
        heading: "ブロッカー型の中でも特に\"心の安全\"を最優先",
        highlightText: "「恋愛=不安定」「親密さ=リスク」「深まるほど怖い」。",
        items: [
          "恋愛ではなく\"安心感の維持\"が主目的",
          "関係を深める行動を避ける",
          "本音は完全に守る",
          "静かな孤立を選ぶ",
        ],
      },
      {
        type: "insight",
        label: "結果",
        text: "距離を保つことで心の安全を守ろうとする心理構造。",
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
        heading: "本当は",
        items: [
          "愛されたい",
          "理解されたい",
          "大切にされたい",
        ],
        summary: "と願っている。",
        variant: "positive",
      },
      {
        type: "insight",
        label: "しかし",
        text: "「近づけば失う」「弱さを見せたくない」「信じるのが怖い」という恐れが強すぎて恋愛が「危険領域」に感じられてしまう。",
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
          "静か",
          "強く踏み込まない",
          "感情的でない",
          "尊重してくれる",
          "優しさの押し売りをしない",
        ],
        variant: "positive",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "注意",
        items: [
          "積極的な男性には\"拒絶反応\"が出やすい",
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
          "\"何を考えているか分からない\"と言われる",
          "相手が不安になる",
          "温度が伝わらず恋愛感情が育ちにくい",
          "踏み込まれるとシャットダウン",
          "愛されているのに\"引きこもる\"",
        ],
      },
      {
        type: "insight",
        label: "",
        text: "",
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
              "好きな人の前で緊張が強まり心を閉ざしやすい",
              "傷つくことへの恐れが高く\"関わらない選択\"が増える",
              "安心できる相手ほど距離を置きやすい",
            ],
          },
          {
            emoji: "🔹",
            label: "長期",
            items: [
              "\"自分を守るための恋愛回避\"が固定化し親密な関係が築けない",
              "近づきたいのに近づけない矛盾が続き孤独感が慢性化",
              "恋愛に対する自己否定と恐れが強化される",
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
            trigger: "返信が遅い",
            reactions: [
              "そもそも気にしない",
              "むしろ\"距離感がちょうどいい\"",
            ],
          },
          {
            trigger: "既読スルー",
            reactions: [
              "困らない",
              "「返さない選択」を自然にする",
            ],
          },
          {
            trigger: "押される（好意を示される）",
            reactions: [
              "一気に心が固まる",
              "\"逃げたい\"感覚が出る",
            ],
          },
          {
            trigger: "深い話を求められる",
            reactions: [
              "フリーズ",
              "避ける",
              "また距離を取る",
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
                text: "「好きだからもっと話したい」",
                isUser: false,
              },
              {
                speaker: "あなた",
                text: "「うーん…今はいいかな」（本心は\"怖い\"なのに\"興味がない\"ように見える）",
                isUser: true,
              },
              {
                speaker: "彼",
                text: "「なんで？何か嫌なことあった？」",
                isUser: false,
              },
              {
                speaker: "あなた",
                text: "「別に」（説明できず沈黙）",
                isUser: true,
              },
            ],
            summary: "\"恐怖が無関心に見える\"パターン",
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
            trigger: "踏み込み",
            reactions: ["シャットダウン"],
          },
          {
            trigger: "好意の告白",
            reactions: ["逃げる"],
          },
          {
            trigger: "甘え要求",
            reactions: ["無感情で返す"],
          },
          {
            trigger: "温度差の指摘",
            reactions: ["「別に」で終わらす"],
          },
          {
            trigger: "連絡増加",
            reactions: ["疲れる"],
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
        text: "男性が好意を示す→あなたは\"詰まる\"→距離を取る→男性が引く→「やっぱり恋愛向いてない」と思う。",
      },
      {
        type: "list",
        items: [
          "また心を閉じる",
          "悪循環が続く",
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
          "穏やか",
          "落ち着いている",
          "リアクション薄め",
          "感情が読めない",
          "距離が一定から縮まらない",
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
          "返信が遅い",
          "短文",
          "業務連絡のようになりやすい",
          "自分から話題を出さない",
          "好意を示さない",
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
            "大人っぽい",
            "落ち着いている",
            "穏やか",
          ],
        },
        bad: {
          heading: "誤解されやすい点",
          items: [
            "脈があるのか不明",
            "近づくと閉じる",
            "温度がまったく見えない",
            "恋愛が進んでいる気がしない",
            "何も伝わらないため諦められやすい",
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
            category: "愛着",
            action: "安心して近づく練習",
            detail: "安全に近づく感覚を育てる",
          },
          {
            num: "②",
            category: "自己認識",
            action: "防衛の癖を理解",
            detail: "自分の防衛パターンに気づく",
          },
          {
            num: "③",
            category: "感情マネジメント",
            action: "小さな感情の言語化",
            detail: "小さな気持ちを言葉にする練習",
          },
          {
            num: "④",
            category: "コミュニケーション",
            action: "1日1つの短い開示",
            detail: "毎日1つ小さな本音を伝える",
          },
        ],
        summary: "このステップで\"恋愛できる自分\"に戻っていけます。",
      },
    ],
  },
  {
    name: "改善後の未来ストーリー",
    nameEn: "Future Story After Improvement",
    blocks: [
      {
        type: "highlight",
        text: "ブロッカー型×防衛型は\"最も閉じる力が強い\"が温かさを秘めたタイプ。",
      },
      {
        type: "list",
        items: [
          "近づくことへの恐れが薄れる",
          "恋愛の\"温度\"が上がる",
          "男性が安心してアプローチできる",
          "静かな関係でも\"暖かさ\"が生まれる",
          "「恋愛できる自分」に戻っていく",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "恐れが薄れるほど繊細さが魅力に変わり深い信頼関係が築けるタイプ。",
      },
    ],
  },
  {
    name: "総評",
    nameEn: "Overall Assessment",
    blocks: [
      {
        type: "text",
        text: "ディフェンシブブロッカーは、不安の強さと自己防衛が最も色濃く出るタイプで、\"傷つかないために距離を置く\"行動が習慣化しやすい傾向があります。相手を信じたいのに踏み込めず、恋愛が浅いまま終わりやすいのが特徴。安心できる人に向けて、小さな弱さや本音を少しずつ開示できるようになると、守りの殻がゆっくり緩み、あなたの繊細さが\"愛される魅力\"として自然に伝わる関係へと変化します。",
      },
    ],
  },
];
