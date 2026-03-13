import type { AnalysisItem } from "../types";

export const ATTRACTOR_SUPPRESSIVE: AnalysisItem[] = [
  {
    name: "コア特徴",
    nameEn: "Core Characteristics",
    blocks: [
      {
        type: "highlight",
        text: "\"本当は動けるのに動けなくなる\"アトラクター。感情はある・魅力もある・直感もあるのに慎重さ・理性・抑制が前に出てしまう。",
      },
      {
        type: "section",
        emoji: "✨",
        heading: "本来のエネルギー",
        items: [
          "直感・感情・魅力・瞬発力が強い",
          "抑制型ではその魅力にブレーキがかかる",
        ],
        variant: "neutral",
      },
      {
        type: "list",
        items: [
          "感情はある・魅力もある・直感もある",
          "慎重さ・理性・抑制が前に出てしまう",
        ],
      },
      {
        type: "insight",
        label: "ジレンマ",
        text: "「魅力は高いのに恋愛の流れが止まる」というジレンマ。",
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
          "好きな気持ちはあるのに慎重になりすぎる",
          "惹かれても一歩引く",
          "関係が深まる前に自制してしまう",
          "自分の魅力を活かしきれない",
          "好意の証拠を求めすぎる",
          "相手に合わせてペースダウンする",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "魅力は高いのに恋愛の流れが止まりやすい。",
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
          "「焦って失敗したくない」と慎重",
          "自分の気持ちより\"安全\"を優先",
          "相手の反応を探りすぎる",
          "駆け引きはしないが\"静かな探り\"をする",
          "本音が薄くなる",
          "行動スピードが落ちる",
          "好意が誤解されて届かない",
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
        heading: "抑制型アトラクターの心理",
        highlightText: "本来直感と魅力で恋が動くタイプだが、エネルギーが\"理性\"で抑え込まれる。",
        items: [
          "「大切にしたいほど慎重になる」",
          "「失いたくなくて様子を伺う」",
          "「感情をぶつけず静かになる」",
        ],
        summary: "大人っぽいけれど静かすぎる恋になりやすい。",
      },
      {
        type: "insight",
        label: "結果",
        text: "本来の直感と魅力が理性で抑え込まれ、恋愛のテンポが止まりやすい。",
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
        heading: "本当は情熱的なのに",
        items: [
          "本音を出して拒否されたくない",
          "傷つきたくない・軽く見られたくない",
          "真剣だから慎重になる",
          "相手に合わせて\"安全地帯\"に逃げる",
        ],
        summary: "\"好きだからこそ静かになる\"。",
        variant: "neutral",
      },
      {
        type: "insight",
        label: "本質",
        text: "本当は情熱的なのに、好きだからこそ静かになる。",
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
          "誠実、真面目、穏やか",
          "感情が安定している",
          "責任感が強い",
          "ゆっくり向き合うタイプ",
        ],
        variant: "positive",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "注意",
        items: [
          "同じく慎重な男性を選ぶと静かすぎて何も起きない関係になりがち",
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
          "慎重になりすぎて\"興味がない人\"に見える",
          "感情表現が弱く相手が不安になる",
          "相手の行動を受け身で待つ",
          "やり取りが淡白になりすぎる",
          "好意を誤解されて終わる",
        ],
      },
      {
        type: "insight",
        label: "結果",
        text: "魅力があるのに伝わらず、関係が浅いまま終わりやすい。",
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
              "感情を抑えながら良い自分を演じるため疲労感が増す",
              "本当は不安なのに「大丈夫」を装ってしまう",
              "彼のペースに合わせて無理が増える",
            ],
          },
          {
            emoji: "🔹",
            label: "長期",
            items: [
              "抑え込んだ本音が積み重なり突然関係を終わらせたくなる",
              "「こんなはずじゃない」と自己否定が強化される",
              "自分を抑えた恋愛が続き持続的な関係を築けなくなる",
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
              "「忙しいんだろう」と冷静に判断",
              "でも本当は少し気にしている",
              "行動に出ず静かに見守る（伝わらない）",
            ],
          },
          {
            trigger: "温度差",
            reactions: [
              "表には出さない",
              "内側でだけ考え込む",
              "一歩下がるので距離が生まれる",
            ],
          },
          {
            trigger: "予定変更",
            reactions: [
              "柔軟に対応",
              "本心は少し残念",
              "でも言わない",
            ],
          },
          {
            trigger: "愛情表現が減った",
            reactions: [
              "感情を表に出さず様子を見る",
              "誤解されやすい",
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
              { speaker: "彼", text: "「最近忙しくて…」", isUser: false },
              { speaker: "あなた", text: "「そっか、大変だね」（本音→寂しい。言わない）", isUser: true },
              { speaker: "彼", text: "「少し考えたいことがある」", isUser: false },
              { speaker: "あなた", text: "「うん、わかったよ」（本音→不安。飲み込む）", isUser: true },
            ],
            summary: "内心と表情のギャップが大きく、すれ違いの火種になりやすい",
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
            trigger: "好意の不確実さ",
            reactions: ["表に出さず静かに不安"],
          },
          {
            trigger: "温度差",
            reactions: ["理性的に処理しすぎて素っ気なくなる"],
          },
          {
            trigger: "予定変更",
            reactions: ["柔軟だけど本音は抑える"],
          },
          {
            trigger: "恋が進む",
            reactions: ["深まりすぎる前に慎重になる"],
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
        text: "\"アトラクターの勢い\"で始まったのに深まるにつれてあなたが抑制モードに入り…彼「最近距離感じるけど…？」あなた「そんなことないよ（本当は不安）」",
      },
      {
        type: "list",
        items: [
          "感情を飲み込みすぎて彼が\"気持ちが冷めた？\"と勘違いして離れていくパターン",
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
          "落ち着いている",
          "大人っぽい",
          "感情の波を見せない",
          "笑顔はあるが深い話は避ける",
          "相手に合わせがち",
          "本音の温度が伝わりにくい",
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
          "短め・淡白",
          "様子を見る癖",
          "自分からは多く送らない",
          "既読スルーでも追わない",
          "好意が伝わらず誤解されがち",
          "愛情表現が薄い",
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
            "落ち着いている",
            "大人",
            "気を使わなくて楽",
            "安定した女性",
          ],
        },
        bad: {
          heading: "誤解されやすい点",
          items: [
            "好意を感じにくい",
            "何を考えているか分からない",
            "自信があるのか冷めているのか判断しにくい",
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
            category: "コミュニケーション",
            action: "自己開示強化",
            detail: "自分の気持ちを少しずつ伝える",
          },
          {
            num: "②",
            category: "感情マネジメント",
            action: "本音を抑えすぎない",
            detail: "感情を適度に表現する",
          },
          {
            num: "③",
            category: "自己認識",
            action: "自分の不安を理解",
            detail: "不安の正体を認識する",
          },
          {
            num: "④",
            category: "愛着",
            action: "安定の強化",
            detail: "安定した愛着パターンを育てる",
          },
        ],
        summary: "このステップで本来の魅力が隠れずに届くようになります。",
      },
    ],
  },
  {
    name: "改善後の未来ストーリー",
    nameEn: "Future Story After Improvement",
    blocks: [
      {
        type: "highlight",
        text: "抑制型アトラクターは\"魅力はあるのに伝わらない\"状態を脱したときに爆発的にモテる。",
      },
      {
        type: "list",
        items: [
          "\"魅力\"が隠れずに届くようになる",
          "相手が安心する",
          "恋愛のテンポが整う",
          "誤解が減る",
          "自然体なのに愛され続ける",
        ],
      },
      {
        type: "insight",
        label: "ポイント",
        text: "本来の直感×魅力に\"適度な感情表現\"が乗るだけで恋愛成功率が大幅に上がる。",
      },
    ],
  },
  {
    name: "総評",
    nameEn: "Overall Assessment",
    blocks: [
      {
        type: "text",
        text: "ロジックアトラクターは、本来の魅力や感性が豊かで、人から好かれやすい資質を持ちながら、恋愛では\"自分の温度を抑えすぎる\"傾向があります。相手に合わせるほどあなたの良さが薄まり、関係が浅いまま進んでしまいやすいタイプ。自分の気持ちや欲しさを少しずつ表現できるようになると、魅力に深みが増し、\"愛されながらも自分らしくいられる恋愛\"へとシフトします。",
      },
    ],
  },
];
