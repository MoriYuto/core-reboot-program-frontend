import type { AnalysisItem } from "../types";

export const EXPLORER_SUPPRESSIVE: AnalysisItem[] = [
  {
    name: "コア特徴",
    nameEn: "Core Characteristics",
    blocks: [
      {
        type: "highlight",
        text: "「外向きはオープンだが内心はミステリアス」という男女問わずモテる構造。",
      },
      {
        type: "section",
        emoji: "✨",
        heading: "エクスプローラー型×抑制型",
        items: [
          "知的好奇心・行動性・広い世界観 × 感情の処理は得意だが言葉にするのが控えめ",
          "行動力はあるが深い本音は慎重",
          "自由×理性が強く刺激的で魅力的",
        ],
        variant: "neutral",
      },
      {
        type: "list",
        items: [
          "距離感が一定で深まりにくい",
          "\"大人の落ち着き\"があり近寄りがたい雰囲気も",
          "自分の世界と恋愛の世界を分けやすい",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "行動力と社交性を持ちながら、恋愛では感情を抑えて距離を保ちやすい。",
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
          "出会い自体は多い、初対面の印象が良くモテる",
          "でも心の奥までは見せない",
          "自分のペースを崩さない",
          "深い恋愛になるまで時間がかかる",
          "相手から「何を考えてるかわからない」と言われる",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "出会いは多いが、心を開くまでに時間がかかりやすい。",
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
          "興味のある相手には自分から動ける、ただし深まる前に距離を一定に保つ",
          "本音より\"事実ベース\"で話しやすい",
          "感情が動いても表に出にくい",
          "相手の感情的な反応を苦手に感じる",
          "ネガティブな話題になると静かになる",
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
        heading: "自立防衛OS",
        highlightText: "「感情は慎重に扱うべき」「自由は守らないといけない」「人に依存したくない」「恋愛に飲まれたくない」",
        items: [
          "深い依存関係は怖い・心を預けすぎるのはリスク",
          "自分の世界が揺らぐのが苦手",
          "恋愛の序盤では魅力的だが深まるほど慎重に",
        ],
      },
      {
        type: "insight",
        label: "結果",
        text: "自由と親密さのバランスを無意識にコントロールしている。",
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
          "自分の価値観を理解してほしい",
          "過度に踏み込まれたくない",
          "コントロールされるのは嫌",
          "でも安心できるなら深まりたい",
          "\"自由と親密さの両立\"を求めている",
        ],
        summary: "騒がしい人・感情的な人・距離を強制する人には警戒しやすい。",
        variant: "neutral",
      },
      {
        type: "insight",
        label: "結果",
        text: "安心感があれば心を開けるが、プレッシャーを感じると距離を取る。",
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
          "価値観が面白い",
          "自立している",
          "情緒が安定している",
          "経験が豊富",
          "話が深い",
          "束縛がない男性",
        ],
        variant: "positive",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "注意",
        items: [
          "依存傾向・感情的すぎる・被害者意識が強い・距離を詰めたがるは相性が悪い",
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
          "熱量差が出る",
          "相手の感情の波に疲れる",
          "会う頻度や連絡ペースが合わない",
          "距離を詰められすぎると心が閉じる",
          "深い話になると避ける",
          "「大切に思ってない？」と誤解される",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "熱量差や距離感の違いがすれ違いの原因になりやすい。",
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
              "感情の強さを抑えようとするが表では明るく振る舞うためギャップが生まれる",
              "無理に大人の対応をしようとして疲れやすい",
              "相手のリアクションを\"自分への評価\"として受け取りやすい",
            ],
          },
          {
            emoji: "🔹",
            label: "長期",
            items: [
              "内面の不安を抑える癖が強まり疲労が蓄積",
              "無理に安定させようとして関係が不自然に",
              "\"自信はあるのに恋愛だけ不安定\"という矛盾が深まる",
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
            reactions: ["気にしない", "ただし長期放置されると「合わないかも」と判断"],
          },
          {
            trigger: "返信が遅い",
            reactions: ["自分のことに集中", "感情は揺れない"],
          },
          {
            trigger: "距離を詰められる",
            reactions: ["優しく整えて距離を調整", "内心は疲れている"],
          },
          {
            trigger: "深い話を求められる",
            reactions: ["理性的に答える", "感情はあまり開示しない"],
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
              { speaker: "彼", text: "「最近、気持ちが見えないよ」", isUser: false },
              { speaker: "あなた", text: "「え？普通に話してるけど…」", isUser: true },
              { speaker: "彼", text: "「もっと気持ち聞きたいんだよね」", isUser: false },
              { speaker: "あなた", text: "「言わなきゃダメ？」", isUser: true },
            ],
            summary: "\"事実共有\"と\"感情共有\"のズレ",
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
            trigger: "感情の押し付け",
            reactions: ["距離を置く"],
          },
          {
            trigger: "依存",
            reactions: ["心が閉じる"],
          },
          {
            trigger: "束縛・制限",
            reactions: ["不快感"],
          },
          {
            trigger: "泣かれる/怒られる",
            reactions: ["理性モード発動"],
          },
          {
            trigger: "深い話の強要",
            reactions: ["内心で疲労"],
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
        text: "最初は楽しく盛り上がる→相手が感情的だと負担に→「重い」と感じる→しかし言わない。",
      },
      {
        type: "list",
        items: [
          "距離が開いていく",
          "相手は不安になり更に追う",
          "あなたは静かにフェードアウト",
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
          "軽やかで楽しい",
          "話題が豊富",
          "でも深い話題は避けがち",
          "沈黙も平気",
          "相手に合わせすぎない",
          "自分の世界観を大事にする",
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
          "テンポが良い",
          "話が面白い",
          "でも感情表現は少ない",
          "短文でも気にしない",
          "忙しい時は返信しない",
          "距離を一定に保つ",
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
            "自然体",
            "話していて楽しい",
            "価値観が広い",
            "賢さや落ち着きを感じる",
          ],
        },
        bad: {
          heading: "誤解されやすい点",
          items: [
            "本音が見えない",
            "急に距離を感じる",
            "温度差が読めない",
            "深まりにくい",
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
            action: "\"距離を取りすぎる癖\"の見える化",
            detail: "距離感の癖に気づく",
          },
          {
            num: "②",
            category: "愛着",
            action: "感情を少しずつ共有する練習",
            detail: "感情共有の練習",
          },
          {
            num: "③",
            category: "コミュニケーション",
            action: "本音を短く・小さく伝える",
            detail: "小さな本音を伝える力",
          },
          {
            num: "④",
            category: "感情マネジメント",
            action: "相手の不安に寄り添う余白を作る",
            detail: "相手の不安への余白を作る",
          },
        ],
        summary: "このステップで\"自由×親密\"を両立できます。",
      },
    ],
  },
  {
    name: "改善後の未来ストーリー",
    nameEn: "Future Story After Improvement",
    blocks: [
      {
        type: "highlight",
        text: "エクスプローラー型×抑制型は\"外向的だが内心ミステリアス\"な魅力タイプ。",
      },
      {
        type: "list",
        items: [
          "感情を少し共有できるようになる",
          "距離感の調整がスムーズに",
          "\"自由×親密\"を両立できる",
          "男性から「本音を出してくれた」と安心される",
          "長期的な関係でも摩擦が減る",
          "深いつながりを持てる恋愛へステップアップ",
        ],
      },
      {
        type: "insight",
        label: "結果",
        text: "自由さの中に温かさが加わるほど最も魅力的な恋愛が実現する。",
      },
    ],
  },
  {
    name: "総評",
    nameEn: "Overall Assessment",
    blocks: [
      {
        type: "text",
        text: "リストレインドエクスプローラーは、魅力・行動力・社交性を持ちながら、恋愛では\"感情を抑えて大人の余裕を保とうとする\"傾向が強く出るタイプです。明るく振る舞う一方で、内側では不安や戸惑いを抱え込み、温度差が生まれやすい特徴があります。自分の感情を少しだけ素直に言葉にできるようになると、軽やかさに深みが加わり、\"勢いと安定が両立する関係性\"へと自然にシフトしていきます。",
      },
    ],
  },
];
