import type { AnalysisItem } from "../types";

export const DREAMER_EVOLUTION: AnalysisItem[] = [
  {
    name: "コア特徴",
    nameEn: "Core Characteristics",
    blocks: [
      {
        type: "highlight",
        text: "16タイプの中でも\"理想を最も現実化できるタイプ\"。ビジョンを描ける・感性が豊か・発想力が高い・愛にロマンを重ねる・相手の可能性を信じるという強みに感情の安定・言語化力・距離感調整・現実との折り合い・自己認識が加わる。",
      },
      {
        type: "section",
        emoji: "✨",
        heading: "ただ夢を見るだけでなく実現まで導ける恋愛力",
        items: [
          "感情に流されず理想を\"行動\"に変換できる",
          "ドリーマー最大の弱点（理想化→失望・感情の揺れ・現実逃避）をほぼ克服",
        ],
        variant: "positive",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "注意点",
        items: ["理想が暴走しないよう、現実との折り合いを意識する"],
      },
      {
        type: "insight",
        label: "特徴",
        text: "感情に流されず理想を\"行動\"に変換できるドリーマー。",
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
          "恋愛に希望を見いだせる",
          "相手の魅力をすぐ見つける",
          "関係を前向きに捉える",
          "不安よりも可能性を見る",
          "落ち着いたアプローチができる",
          "相手の成長を信じられる",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "理想が暴走せず関係を育てる方向に働く。",
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
          "相手の\"良くなる未来\"を具体的に思い描く",
          "不安を言語化して解決に進もうとする",
          "ポジティブだが地に足がついている",
          "相手のいいところを伸ばす言動",
          "感情を整えてから伝える",
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
        heading: "ドリーマーの根にあるのは「理想が私を導いてくれる」という信念",
        items: [
          "成長型では「理想×感情×行動」のバランスが取れている。",
          "理想は大切にする・でも現実を無視しない・感情を自分で調整できる・恋愛を\"育てる視点\"を持てる。",
          "ドリーマー最大の弱点（理想化→失望・感情の揺れ・現実逃避）をほぼ克服。",
        ],
      },
      {
        type: "insight",
        label: "心理",
        text: "\"希望×現実\"のバランスが美しい。",
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
        heading: "信念",
        items: [
          "愛は育てるもの",
          "関係は成長するもの",
          "お互いの理想をすり合わせたい",
          "自分の理想も大切にしたい",
          "現実と夢をどちらも尊重",
        ],
        variant: "neutral",
      },
      {
        type: "insight",
        label: "特徴",
        text: "\"希望×現実\"のバランスが美しい。",
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
          "ポジティブ",
          "挑戦心がある",
          "未来志向",
          "優しい",
          "成長したい人",
        ],
        variant: "positive",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "注意",
        items: ["\"ズルズルして動かない男性\"には疲れやすい"],
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
          "相手がネガティブすぎる",
          "夢がない",
          "受け身",
          "関係の改善に非協力的だとあなたの理想が先に進みすぎて温度差が起きることがある",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "成長型なので大きな崩れは少ない。",
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
              "好きになった相手を理想化しやすく気持ちの進むスピードが早い。",
              "現実より\"ストーリー\"で恋を見てしまうことが増える。",
              "温度差が出ると不安と期待が混ざりモヤモヤしやすい。",
            ],
          },
          {
            emoji: "🔹",
            label: "長期",
            items: [
              "理想と現実のギャップに疲れ\"恋愛疲労\"が蓄積。",
              "自己肯定感が低下し「私は愛されにくい」という思い込みが強化。",
              "恋愛が続かない→理想化→失望のスパイラルになる。",
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
              "一瞬不安",
              "でも「忙しいのかも」と現実的に受け止める",
              "落ち着いて待てる",
            ],
          },
          {
            trigger: "デート後の連絡が減る",
            reactions: [
              "「もっと良くするには？」と建設的に考える",
              "深い不安には陥らない",
            ],
          },
          {
            trigger: "予定変更",
            reactions: [
              "柔軟に対応",
              "ただし説明が曖昧だと少し距離を感じる",
            ],
          },
          {
            trigger: "気になる女性の影",
            reactions: ["感情は揺れるが冷静に会話を試みる"],
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
                text: "「最近ちょっと忙しくてさ…」",
                isUser: false,
              },
              {
                speaker: "あなた",
                text: "「そっか。じゃあ落ち着いたら会える日教えてね」",
                isUser: true,
              },
            ],
            summary: "不安ではなく\"関係維持\"にフォーカス",
          },
          {
            exchanges: [
              {
                speaker: "彼",
                text: "「なんか仕事うまくいかなくて…」",
                isUser: false,
              },
              {
                speaker: "あなた",
                text: "「そういう時あるよね。どうしたいの？」",
                isUser: true,
              },
            ],
            summary: "サポートしつつ依存にはさせない",
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
            trigger: "理想と現実のギャップ",
            reactions: ["受け止めて調整し直せる"],
          },
          {
            trigger: "相手の停滞",
            reactions: ["自分ばかり頑張る展開になりやすい"],
          },
          {
            trigger: "振り回す男性",
            reactions: ["一定距離で冷静に見つめられる"],
          },
          {
            trigger: "温度差",
            reactions: ["正直に言語化して合わせにいく"],
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
        text: "大きな崩れは少ないが…相手が成長しない・関係が停滞・あなたが未来を一人で背負う。",
      },
      {
        type: "list",
        items: [
          "我慢し続ける。",
          "気づいたら「無理しすぎた…」。",
          "\"静かな疲弊\"が起こることがある。",
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
          "楽しさを自然に表せる",
          "相手の気持ちを読むのも得意",
          "未来を語るのが好き",
          "相手の良さを見つけて褒めれる",
          "重さも軽さもバランスが良い",
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
          "ポジティブな文面",
          "返信が安定",
          "未来の話が出やすい",
          "気にしすぎない",
          "愛情表現も自然",
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
            "優しい",
            "一緒にいて前向きになれる",
            "夢がある",
            "話していて楽しい",
            "受け入れてくれる感がある",
          ],
        },
        bad: {
          heading: "誤解される点",
          items: [
            "熱量が高いと感じる人も",
            "未来への期待にプレッシャーを感じる男性もいる",
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
            action: "理想の境界線チェック",
            detail: "理想と現実の境界を認識する",
          },
          {
            num: "②",
            category: "愛着",
            action: "安定の維持",
            detail: "安定した愛着パターンを維持する",
          },
          {
            num: "③",
            category: "感情マネジメント",
            action: "疲れの予防",
            detail: "心の疲れを予防する",
          },
          {
            num: "④",
            category: "コミュニケーション",
            action: "期待の伝え方調整",
            detail: "期待の伝え方を調整する",
          },
        ],
        summary:
          "このステップで\"夢を現実にする恋愛\"が実現します。",
      },
    ],
  },
  {
    name: "改善後の未来ストーリー",
    nameEn: "Future Story After Improvement",
    blocks: [
      {
        type: "highlight",
        text: "ドリーマー×成長型は「恋愛の成功率が最も高いドリーマー」。夢があるから愛され、現実を理解するから続く。",
      },
      {
        type: "list",
        items: [
          "理想がそのまま現実に浸透する",
          "感情と行動が一致",
          "恋のペースが自然に合う",
          "相手の成長も自分の成長も楽しめる",
          "\"夢を現実にする恋愛\"ができる",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "あなたが\"理想を形にする恋愛\"を選べばその関係は長続きし深まる。",
      },
    ],
  },
  {
    name: "総評",
    nameEn: "Overall Assessment",
    blocks: [
      {
        type: "text",
        text: "エボリューションドリーマーは、独自の感性・創造性・柔らかい雰囲気を持ちながら、現実とのバランスを取り、恋愛を安定して育てられる成熟タイプです。夢見がちな理想と落ち着いた判断力が調和しているため、相手に安心と刺激を同時に与えられます。自己理解が進むほど魅力が深まり、あなたらしい世界観を共有し合える\"温度と安定のある恋愛\"へ発展します。",
      },
    ],
  },
];
