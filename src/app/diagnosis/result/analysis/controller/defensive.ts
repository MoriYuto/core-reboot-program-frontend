import type { AnalysisItem } from "../types";

export const CONTROLLER_DEFENSIVE: AnalysisItem[] = [
  {
    name: "コア特徴",
    nameEn: "Core Characteristics",
    blocks: [
      {
        type: "highlight",
        text: "外側は強く見えるのに内側は非常に脆い二層構造を持つ。自分の弱さを悟られたくない・感情を整理してからでないと話したくない・本音を隠して\"クール\"を保ちたい。",
      },
      {
        type: "section",
        emoji: "🛡️",
        heading: "防衛型の特徴",
        items: [
          "頼るのは苦手",
          "恋愛で傷ついた経験があると特に硬くなる",
          "心を許すのが怖い",
          "深い関係になるほどブレーキがかかる",
        ],
        summary: "相手からは\"冷静で自立した人\"に見える",
        variant: "neutral",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "注意",
        items: [
          "実際は心を許すのが怖く深い関係になるほどブレーキがかかる。",
        ],
      },
      {
        type: "insight",
        label: "",
        text: "コントローラー型の理性と防衛型の回避が組み合わさり\"静かで強い防衛システム\"が成立する。",
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
          "序盤は落ち着いていて魅力的",
          "深まるほど距離が出てくる",
          "好きなのに冷たくしてしまう",
          "甘えるのが苦手",
          "弱さを見せると\"負け\"と感じる",
          "言葉ではなく行動で示そうとする",
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
          "気持ちが揺れるとシャットダウンする",
          "本音はあるが言語化しない",
          "感情表現が薄くなる",
          "気持ちを聞かれると戸惑う",
          "相手から踏み込まれると逃げたくなる",
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
          "「自分の弱さを見せたら拒絶される」「心を開くのは危険」「自分で制御できる距離が一番安心」という回避型の保護OSが強く存在する。",
        ],
      },
      {
        type: "insight",
        label: "",
        text: "弱さ→隠す、不安→理屈で整える、甘え→苦手、怒り→無言で距離、心配→表に出さない。静かで強い防衛システムが成立する。",
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
        heading: "本心と恐れ",
        items: [
          "誰かに甘えたい",
          "愛されたい",
          "弱さを受け止めてほしい",
        ],
        summary: "でもそうすることが怖すぎる。「距離を取れば安全」「本音を見せなければ傷つかない」という方向へ自分を守る。",
        variant: "neutral",
      },
      {
        type: "insight",
        label: "",
        text: "",
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
        heading: "好みのタイプ",
        items: [
          "落ち着いた大人タイプ",
          "しつこくない・追わないタイプ",
          "尊重してくれる人",
          "束縛しない人",
        ],
        variant: "positive",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "注意",
        items: [
          "感情優位・熱量高め・詰めてくるタイプには一気に負担を感じる。",
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
          "相手が踏み込むと防衛反応が発動",
          "\"距離を取る=嫌いになった\"と誤解される",
          "誤解を説明しないためズレが広がる",
          "無言・返信遅延が喧嘩の原因に",
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
            label: "短期（1〜3ヶ月）",
            items: [
              "自分の正しさを守るために心を開かず距離をとりがち",
              "彼の感情を深読みし否定される前に先にシャットダウンする",
              "表向きは冷静でも内側は常に緊張状態",
            ],
          },
          {
            emoji: "🔹",
            label: "長期（6ヶ月〜1年以降）",
            items: [
              "\"心を開かない恋愛\"が習慣化し関係が深まらない",
              "本当は愛されたいのに距離を置くことで逆に孤独が増える",
              "恋愛自体を避ける回避パターンが固定化する",
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
              "「まぁ忙しいんだろう」で自分を守る",
              "でも本心では少し不安",
              "不安を感じた自分が嫌でさらに感情を隠す",
            ],
          },
          {
            trigger: "既読スルー",
            reactions: [
              "動揺する",
              "でも\"動揺したこと\"を悟られたくない",
              "返信の間隔を自分も空ける",
            ],
          },
          {
            trigger: "深い話を求められる",
            reactions: [
              "急に壁が出現",
              "「話す意味ある？」と思ってしまう",
            ],
          },
          {
            trigger: "予定変更",
            reactions: [
              "表面上は落ち着いて対応",
              "内心は静かな失望",
              "その後のテンションが下がる",
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
                text: "「最近どう思ってる？」",
                isUser: false,
              },
              {
                speaker: "あなた",
                text: "「別に」（本当は\"距離を詰められて怖い\"）",
                isUser: true,
              },
              {
                speaker: "彼",
                text: "「もっと話してよ」",
                isUser: false,
              },
              {
                speaker: "あなた",
                text: "「話すことない」（開きたいけど開けない）",
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
            trigger: "感情的に迫られる",
            reactions: ["シャットダウン", "冷却"],
          },
          {
            trigger: "詮索される",
            reactions: ["壁"],
          },
          {
            trigger: "頼られる",
            reactions: ["プレッシャー"],
          },
          {
            trigger: "相手が深く入り込む",
            reactions: ["逃げたくなる"],
          },
          {
            trigger: "本音を求められる",
            reactions: ["無言化"],
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
        text: "相手の距離が詰まる→防衛反応→冷たくなる→相手が不安→相手が追う→さらに逃げる→関係が急速に破綻。",
      },
      {
        type: "list",
        items: [
          "男性側は「冷めたの？」",
          "女性側は「違う…怖いだけ」",
          "というすれ違いが起きやすい",
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
          "笑顔はあるが感情の深さは見えにくい",
          "沈黙は苦にならない",
          "急な話題の転換が苦手",
          "距離が縮まると視線を避ける",
          "ベタベタしないスマートな関わり方",
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
          "文字は短い",
          "絵文字少なめ",
          "既読スルーは\"考えたい時間\"",
          "深い話はLINEではしない",
          "聞かれると「大丈夫」「平気」",
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
            "誠実",
            "自立している",
            "余裕があるように見える",
          ],
        },
        bad: {
          heading: "誤解される点",
          items: [
            "気持ちが読めない",
            "距離が縮まらない",
            "急に冷たく感じる",
            "何を考えているか分からない",
            "\"壁\"を感じる",
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
            action: "なぜ距離を取るのか",
            detail: "距離を取る理由に気づく",
          },
          {
            num: "②",
            category: "愛着",
            action: "安定型への移行",
            detail: "安定した愛着パターンへ移行する",
          },
          {
            num: "③",
            category: "コミュニケーション",
            action: "小さな開示",
            detail: "小さな本音から伝える練習",
          },
          {
            num: "④",
            category: "感情マネジメント",
            action: "抑圧から共有の練習",
            detail: "感情を共有する力を育てる",
          },
        ],
        summary:
          "このステップで\"静かでスマートな中に温かさのある恋愛\"が実現します。",
      },
    ],
  },
  {
    name: "改善後の未来ストーリー",
    nameEn: "Future Story After Improvement",
    blocks: [
      {
        type: "highlight",
        text: "コントローラー×防衛型は\"静かでスマートに見えて最も繊細で最も優しい\"。",
      },
      {
        type: "list",
        items: [
          "距離の取り方が柔らかくなる",
          "本音の小出しができる",
          "「怖い」を少しずつ共有できる",
          "相手に安心して甘えられる瞬間が増える",
          "男性から「やっと本当のあなたが見えた」と言われる",
        ],
      },
      {
        type: "insight",
        label: "",
        text: "心の壁が薄くなるほど深い信頼と温かい愛が生まれるタイプ。",
      },
    ],
  },
  {
    name: "総評",
    nameEn: "Overall Assessment",
    blocks: [
      {
        type: "text",
        text: "シールドコントローラーは、理性的で観察力が高い一方で、\"心を守るために距離を置く\"傾向が最も強く出るタイプです。親密さが近づくほど慎重になり、相手には「優しいのに心がつかめない」と映りやすい特徴があります。小さな弱さや本音を安全に共有できるようになると、壁がゆっくり溶け、知的な安心感に温かさが加わり、深い信頼関係を築きやすくなります。",
      },
    ],
  },
];
