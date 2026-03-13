import type { AnalysisItem } from "../types";

export const CONTROLLER_SUPPRESSIVE: AnalysisItem[] = [
  {
    name: "コア特徴",
    nameEn: "Core Characteristics",
    blocks: [
      {
        type: "highlight",
        text: "思考・計画・管理がベースにある一方で慎重型では感情面の揺れがやや強くなる。",
      },
      {
        type: "section",
        emoji: "🧠",
        heading: "特徴",
        items: [
          "感情は抑える(見せない)・でも内心は不安になりやすい",
          "関係を壊さないように慎重に行動",
          "\"正しさ\"よりも\"失敗しない選択\"を優先",
          "本音の開示は苦手",
          "物事を自分ペースで進めたい",
        ],
        variant: "neutral",
      },
      {
        type: "list",
        items: [
          "外から見ると\"落ち着いた大人\"",
          "内側では人一倍傷つきやすく慎重な心が存在する",
        ],
      },
      {
        type: "insight",
        label: "本質",
        text: "外から見ると\"落ち着いた大人\"だが内側では人一倍傷つきやすく慎重な心が存在する。",
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
          "相手に合わせすぎず一定の距離を保つ",
          "慎重に関係を進めるため\"進展が遅い\"",
          "本音は言わず分かりやすい優しさを選びがち",
          "主導したい気持ちはあるが慎重すぎて動けない",
          "相手の反応を気にして言葉を選びすぎる",
        ],
      },
      {
        type: "insight",
        label: "バランス",
        text: "「管理×不安×抑制」のバランス。",
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
          "会う予定や関係構築に\"慎重すぎる段取り\"",
          "相手に気を使いすぎて様子見になる",
          "衝突を避けるために本音を飲み込む",
          "感情より理性で動くが理性の裏側で迷う",
          "完璧に近い状態でないと動けない",
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
        heading: "根底にある防衛",
        highlightText: "\"失敗したくない・嫌われたくない\"という繊細な防衛。",
        items: [
          "コントローラー型の「うまくやりたい」管理OS+慎重型の「悪い方向に行きたくない」抑制OSが重なる",
          "\"責任感は強いのに踏み切れない\"という矛盾が生まれる",
        ],
      },
      {
        type: "insight",
        label: "結果",
        text: "責任感は強いのに踏み切れないという矛盾が生まれる。",
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
        heading: "本来関係を丁寧に育てたいタイプ",
        items: [
          "曖昧な関係・曖昧な言葉が不安",
          "相手の気持ちを探りながら進める",
          "自分から強い主張をしにくい",
          "本音を言って関係が壊れるのが怖い",
          "内面の揺れが発生しやすい",
        ],
        variant: "neutral",
      },
      {
        type: "insight",
        label: "結果",
        text: "相手の気持ちを探りながら進めるが、内心の揺れは大きくなりやすい。",
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
          "誠実、安心感のある人",
          "一定のテンポで向き合ってくれる人",
          "知的で落ち着いた男性",
        ],
        variant: "positive",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "注意",
        items: [
          "「感情優位なタイプ」は相性が悪い",
          "「急に距離を詰めるタイプ」は相性が悪い",
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
          "\"様子見\"しすぎる",
          "感情を言わずに溜めてしまう",
          "相手が不満に気づかない",
          "突然気持ちが離れる",
          "衝突ではなく\"フェードアウト\"で終わる",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "慎重型なのにコントローラー型なので最後は急にスパッと切ることも。",
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
              "感情を出すのが苦手で説明口調が増えやすい",
              "相手の曖昧さを許容できず自分の正解に寄せようとする",
              "会話が\"指摘・アドバイス\"中心になりがち",
            ],
          },
          {
            emoji: "🔹",
            label: "長期",
            items: [
              "相手が萎縮し関係性の主導権が一方的になる",
              "自己肯定感が低いため相手の反応を\"拒否\"と誤解しやすい",
              "距離がどんどん離れてフェードアウトされやすい",
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
              "「迷惑かけてる？」と不安が出る",
              "でも表には出さない",
              "返信を待つ姿勢",
            ],
          },
          {
            trigger: "意見の対立",
            reactions: [
              "自分の意見を控える",
              "\"空気を読むモード\"に切り替わる",
            ],
          },
          {
            trigger: "彼の曖昧な態度",
            reactions: ["気持ちは揺れる","でも問い詰める勇気は出ない"],
          },
          {
            trigger: "要求が強い相手",
            reactions: ["負担を感じる","少しずつ距離を置く"],
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
              { speaker: "彼", text: "「何か気になる？」", isUser: false },
              { speaker: "あなた", text: "「大丈夫だよ」(本当は気になっている)", isUser: true },
              { speaker: "彼", text: "「言ってくれないと分からないよ」", isUser: false },
              { speaker: "あなた", text: "「うん…でも大丈夫」", isUser: true },
            ],
            summary: "\"伝えたいのに伝えられない\"ギャップ",
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
            reactions: ["心の中で考えすぎる"],
          },
          {
            trigger: "曖昧な関係",
            reactions: ["どう動いていいか分からなくなる"],
          },
          {
            trigger: "相手が急に積極的になる",
            reactions: ["ペースが乱れて不安"],
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
        text: "本音を隠して関係を穏やかに保つ→相手は「問題なし」と判断→あなたの中には小さな不満が溜まる。",
      },
      {
        type: "list",
        items: [
          "ある日突然「無理だ」となる",
          "衝突ではなく\"静かな崩壊\"が典型",
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
          "控えめなリード",
          "相手に合わせながらも疲れていく",
          "予定を丁寧に立てる",
          "快適さを重視",
          "突然テンションが下がる日がある",
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
          "短文が多め",
          "丁寧",
          "温度は安定",
          "本音は言わない",
          "スタンプで誤魔化すことも",
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
          heading: "良い",
          items: [
            "落ち着いている",
            "礼儀正しい",
            "優しい",
            "丁寧に向き合ってくれる",
            "疲れさせないタイプ",
          ],
        },
        bad: {
          heading: "誤解",
          items: [
            "何を考えているか分かりにくい",
            "本音が見えない",
            "突然距離を取られる",
            "安心した頃に離れてしまう",
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
            action: "本音の可視化",
            detail: "自分の本音に気づく力を育てる",
          },
          {
            num: "②",
            category: "感情マネジメント",
            action: "不安の扱い",
            detail: "不安を安全に扱う方法を学ぶ",
          },
          {
            num: "③",
            category: "コミュニケーション",
            action: "言語化スキル",
            detail: "感情を言葉にする力を育てる",
          },
          {
            num: "④",
            category: "愛着",
            action: "安定型への移行",
            detail: "安定した愛着パターンへ移行する",
          },
        ],
        summary: "このステップで\"丁寧で安心できる恋愛\"が実現します。",
      },
    ],
  },
  {
    name: "改善後の未来ストーリー",
    nameEn: "Future Story After Improvement",
    blocks: [
      {
        type: "highlight",
        text: "コントローラー×慎重型は\"丁寧さと誠実さを持つ守りの恋愛リーダー\"。",
      },
      {
        type: "list",
        items: [
          "自分のペースを保ちながら関係を深められる",
          "\"不安\"が減り余裕が生まれる",
          "本音を伝えることへの抵抗が減る",
          "相手があなたの気持ちを理解できるようになる",
          "丁寧で安心できる恋愛が実現",
        ],
      },
      {
        type: "insight",
        label: "あなたの慎重さは",
        text: "欠点ではなく関係を大切にしたい気持ちの証。正しく使えば最も誠実で長続きする恋愛を作るタイプ。",
      },
    ],
  },
  {
    name: "総評",
    nameEn: "Overall Assessment",
    blocks: [
      {
        type: "text",
        text: "コーシャスコントローラーは、冷静さと理性的な判断力が魅力ですが、\"正しさを優先するあまり感情を抑え込みすぎる\"傾向が最も強く出るタイプです。相手を思って丁寧に対応しているつもりでも、気づけば距離が生まれ、関係が固くなりやすい特徴があります。本音や感情を少しだけ柔らかく共有できるようになると、知性の中に温度が生まれ、\"落ち着き×親しみやすさ\"が両立する信頼深いパートナーシップへと進化します。",
      },
    ],
  },
];
