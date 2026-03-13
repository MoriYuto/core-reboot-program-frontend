import type { AnalysisItem } from "../types";

export const ATTRACTOR_REACTIVE: AnalysisItem[] = [
  {
    name: "コア特徴",
    nameEn: "Core Characteristics",
    blocks: [
      {
        type: "highlight",
        text: "16タイプの中でも最も「恋に落ちる力が強い」タイプ。感情が豊か・魅力がある・直感が鋭い・相手を惹きつける力が突出。",
      },
      {
        type: "section",
        emoji: "⚡",
        heading: "反応型は\"感情→行動\"のスピードが速い",
        items: [
          "深く惹かれる",
          "深く喜ぶ",
          "深く不安になる",
          "深く考える",
          "深く落ち込む",
        ],
        variant: "neutral",
      },
      {
        type: "warning",
        emoji: "🎢",
        heading: "恋愛の波",
        items: [
          "恋がうまくいくと爆発的に楽しい",
          "つまずくと一気に不安が加速しやすいタイプ",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "感情の振幅が大きく、恋愛がジェットコースターになりやすい。",
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
          "好きになるスピードが速い",
          "相手に気持ちが一気に向かう",
          "温度差が不安の引き金になる",
          "連絡の頻度や表情の変化に敏感",
          "感情をすぐ言葉にしたくなる",
          "相手の反応を過剰に分析",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "恋愛のパワーが大きいぶんジェットコースターになりやすい。",
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
          "返信が早い",
          "愛情表現も早い",
          "不安になるのも早い",
          "寂しさが募ると長文になる",
          "確証が欲しくなる",
          "気持ちをそのまま伝えたくなる",
          "一方で気持ちの変化も激しい",
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
        heading: "恋愛OSは一言で言うと「愛に正直」",
        items: [
          "自分の気持ちにウソがつけず恋愛が始まると全エネルギーが相手に向かう",
          "その正直さはときに相手への依存・相手軸の不安・衝動的な行動・感情優先の判断を引き起こす",
          "恋愛の喜びも不安も\"増幅して感じる\"脳のパターン",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "感情の増幅が恋愛の強みにも弱みにもなる。",
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
          "好かれたい・愛されたい",
          "不安にさせたくない",
          "相手の気持ちを全部知りたい",
          "関係の温度差が怖い",
          "意図としては\"愛を大事にしたいだけ\"",
        ],
        variant: "positive",
      },
      {
        type: "insight",
        label: "しかし、",
        text: "感情が強すぎるあまり相手のペースを超えてしまうことがある。",
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
          "優しい",
          "まっすぐ",
          "構ってくれる",
          "レスが速い",
          "自分の温度に合わせてくれる",
        ],
        variant: "positive",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "注意",
        items: [
          "\"受け身な男性\"に惹かれると恋愛が不安ジェットコースター化しやすい。",
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
          "連絡の温度差",
          "彼が冷静なタイプだと不安が爆発",
          "感情をそのまま伝えてしまいすぎる",
          "相手が\"重い\"と感じる瞬間がある",
          "気持ちの確認が増えすぎる",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "愛情の強さが相手へのプレッシャーに変わりやすい。",
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
              "\"惹きつける力\"と\"感情の揺れ\"が同時に強まり恋愛が不安定に。",
              "彼の反応ひとつで気持ちが大きく上下する。",
              "LINEの返信速度や態度に敏感になり自己嫌悪が増える。",
            ],
          },
          {
            emoji: "🔹",
            label: "長期",
            items: [
              "不安と魅力が共存し刺激的だが不安定な恋愛を繰り返す。",
              "深まるほど不安が増え自己肯定感がさらに低下。",
              "\"熱く始まり冷たく終わる恋愛OS\"が固定化する。",
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
            reactions: ["即不安", "「何かあった？」", "追いLINEしやすい"],
          },
          {
            trigger: "返信遅い",
            reactions: [
              "\"興味がないのでは？\"と感じやすい",
              "直前の会話を読み返す",
              "原因探しをする",
            ],
          },
          {
            trigger: "予定変更",
            reactions: [
              "本当は理解はある",
              "でも「私優先じゃないの？」と揺れやすい",
            ],
          },
          {
            trigger: "愛情表現が減った",
            reactions: ["深い不安", "温度差のギャップに弱い"],
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
                text: "「最近ちょっと忙しいんだよね」",
                isUser: false,
              },
              {
                speaker: "あなた",
                text: "「え…私のこともう好きじゃなくなった？」",
                isUser: true,
              },
            ],
            summary: "彼はただの説明、あなたの感情が先に反応",
          },
          {
            exchanges: [
              {
                speaker: "彼",
                text: "「今日はゆっくりしたい」",
                isUser: false,
              },
              {
                speaker: "あなた",
                text: "「理由は？ 私何かした？」",
                isUser: true,
              },
            ],
            summary: "事実より感情を先に読むため誤解しやすい",
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
            trigger: "返信の温度差",
            reactions: ["不安が一気に上昇"],
          },
          {
            trigger: "距離ができる",
            reactions: ["感情が暴走"],
          },
          {
            trigger: "他の女性の影",
            reactions: ["激しく感情が揺れる"],
          },
          {
            trigger: "理屈で説明される",
            reactions: ["傷つきやすい"],
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
        text: "あなたの気持ちが溢れて→追う→確認する→感情が伝わりすぎる→彼が少し引く→余計不安になる。",
      },
      {
        type: "list",
        items: ["「愛が大きいほど不安も大きくなる」という悪循環。"],
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
          "楽しさが表に出る",
          "リアクションが大きい",
          "気持ちの温度が伝わりやすい",
          "少しの違和感で表情が曇る",
          "相手の言動にすぐ反応",
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
          "返信が速い",
          "長文になりがち",
          "不安になると質問が増える",
          "感情がそのまま文章に出る",
          "既読スルーに弱い",
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
            "素直",
            "感情豊か",
            "愛情が伝わる",
            "一緒にいると楽しい",
          ],
        },
        bad: {
          heading: "⚠ 誤解される部分",
          items: [
            "感情の波が読めない",
            "距離をおきにくい",
            "確認が多い",
            "落ち込みやすい",
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
            action: "反応の速度を抑える",
            detail: "感情の波をワンテンポ遅らせる",
          },
          {
            num: "②",
            category: "コミュニケーション",
            action: "言語化の整理",
            detail: "伝える前に整理する力を育てる",
          },
          {
            num: "③",
            category: "愛着",
            action: "安定の強化",
            detail: "安定した愛着パターンを育てる",
          },
          {
            num: "④",
            category: "自己認識",
            action: "不安の根本理解",
            detail: "不安の本質を理解する",
          },
        ],
        summary:
          "このステップで\"愛情の強さ\"が最大の才能として輝きます。",
      },
    ],
  },
  {
    name: "改善後の未来ストーリー",
    nameEn: "Future Story After Improvement",
    blocks: [
      {
        type: "highlight",
        text: "アトラクター×反応型は\"愛情の強さ\"こそ最大の才能。",
      },
      {
        type: "list",
        items: [
          "感情の強さが\"魅力\"として伝わる",
          "不安の波が小さくなる",
          "愛情表現が過不足なく届く",
          "彼が安心して向き合える",
          "恋が安定し深まっていく",
        ],
      },
      {
        type: "insight",
        label: "ポイント",
        text: "それを\"感情の制御\"と\"距離感の調整\"で整えたとき最も幸福度の高い恋愛ができるタイプ。",
      },
    ],
  },
  {
    name: "総評",
    nameEn: "Overall Assessment",
    blocks: [
      {
        type: "text",
        text: "インパルスアトラクターは、魅力と感情表現が豊かで、\"惹きつける力\"と\"揺れやすい繊細さ\"が同時に現れるタイプです。感情の波が強いほど、自分の魅力に自信を持てなくなり、相手の反応に振り回されやすい傾向があります。揺れた瞬間の気持ちをそのまま柔らかく共有できるようになると、関係が安定し、本来の華やかさが\"安心できる愛情\"として相手に深く届く恋愛へと変わります。",
      },
    ],
  },
];
