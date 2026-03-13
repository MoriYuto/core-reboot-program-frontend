import type { AnalysisItem } from "../types";

export const LEADER_SUPPRESSIVE: AnalysisItem[] = [
  {
    name: "コア特徴",
    nameEn: "Core Characteristics",
    blocks: [
      {
        type: "highlight",
        text: "責任感が強い・優秀に見える・落ち着いている・頼られる・決断力があるというリーダー型の強みに加えて、本音が言えない・弱さを見せられない・感情を抑え込みやすい・不満を\"静かに溜め込む\"という抑制型の特徴。",
      },
      {
        type: "section",
        emoji: "✨",
        heading: "ギャップ",
        items: [
          "\"しっかりしてるのに、心の距離が近づかない\"",
          "\"強く見えるのに、急に折れる\"",
        ],
        variant: "neutral",
      },
      {
        type: "warning",
        emoji: "💫",
        heading: "外見と内側",
        items: ["外見は安定、内側は静かな混乱"],
      },
      {
        type: "insight",
        label: "特徴",
        text: "リーダー型×抑制型の組み合わせが生む独特のギャップ。",
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
          "相手に気を遣わせないよう問題を自分で処理",
          "本音を言わず落ち着いた対話で済ませる",
          "感情の衝突を避ける",
          "「大丈夫」が癖になる",
          "自分が我慢して関係を維持する",
          "限界が来る瞬間まで誰にも言わない",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "まさに\"静かに燃えるタイプ\"。",
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
          "相手を優先しすぎる",
          "自分の弱さを後回しにする",
          "\"強さキャラ\"をキープする",
          "感情を抑えて合理的に処理",
          "言葉が説明的で気持ちが乗らない",
          "嫌なことがあっても伝えない",
          "疲れたときは一気に距離を置く",
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
        heading: "価値観",
        highlightText: "「弱さを見せるのは迷惑」「感情を出すと相手が困る」「自分が頑張れば丸く収まる」",
        items: [
          "幼少期に自分がしっかりしなきゃいけなかった",
          "弱音が受け止めてもらえなかった",
          "責任を背負いがち",
          "言い合いが苦手だった背景",
        ],
        summary: "\"強くて優しいけど、一番傷つきやすい\"という構造。",
      },
      {
        type: "insight",
        label: "本質",
        text: "過去の体験が\"感情抑制\"のOSを形成している。",
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
          "甘えたい",
          "頼りたい",
          "弱音を受け止めてほしい",
        ],
        summary: "と誰よりも強く思っている。",
        variant: "positive",
      },
      {
        type: "insight",
        label: "しかし",
        text: "相手に負担をかけたくない・迷惑をかけたくない・嫌われたくない・弱さを見せるのが怖い・プライドもある。だからこそ恋愛は\"理性の恋\"になり感情の交流が減りやすい。",
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
          "誠実で真面目",
          "落ち着いた大人",
          "優しい人",
          "安定感のある男性",
        ],
        variant: "positive",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "注意",
        items: [
          "鈍感・依存・未成熟な男性とは地獄の相性（あなたが\"お母さん役\"になり感情はさらに抑制）",
          "コミュニケーションが丁寧で感情知性の高い男性とは相性抜群",
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
          "不満を言わない→相手が気づかない→あなたが静かに疲れる→一気に心が離れる",
          "もしくは全部自分で処理→相手が\"頼られない寂しさ\"を感じる→関係が浅くなる",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "リーダー型の離脱は「静かな決断」が特徴で、戻らない。",
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
              "主導権を握る癖が強まり相手のペースを尊重できなくなる",
              "正しさや効率を優先し恋愛が\"プロジェクト管理\"のように",
              "彼の曖昧さが許容できず言葉が鋭くなりやすい",
            ],
          },
          {
            emoji: "🔹",
            label: "長期",
            items: [
              "相手に\"上から目線\"や\"圧\"として感じられ距離を置かれる",
              "自分の気持ちより結果を優先するため深い親密感が築けない",
              "「努力してるのに報われない恋愛」が続き自己否定がじわじわ増える",
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
              "「仕事だろう」と思考で処理",
              "でも胸の奥では少しざわつく",
              "それでも言わない",
            ],
          },
          {
            trigger: "返信遅い",
            reactions: [
              "「仕方ない」と感情を抑える",
              "しかし積み重なると\"静かな冷め\"につながる",
            ],
          },
          {
            trigger: "感情をぶつけられる",
            reactions: [
              "冷静に対応する",
              "だが内心はとても傷ついている",
              "これも言わない",
            ],
          },
          {
            trigger: "踏み込まれる質問「本音は？」",
            reactions: [
              "固まる",
              "顔も気持ちも動かない",
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
              { speaker: "彼", text: "「最近なんか元気ない？」", isUser: false },
              {
                speaker: "あなた",
                text: "「大丈夫、ちょっと考え事してただけ」（本音:寂しかったけど言えない）",
                isUser: true,
              },
              { speaker: "彼", text: "「話したいことある？」", isUser: false },
              {
                speaker: "あなた",
                text: "「ううん、特にないよ」（本音:あるけど迷惑かなと躊躇）",
                isUser: true,
              },
              { speaker: "彼", text: "「怒ってる？」", isUser: false },
              {
                speaker: "あなた",
                text: "「怒ってないよ」（本音:怒りじゃなくて\"悲しみ\"）",
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
            trigger: "相手の不誠実さ",
            reactions: ["言わずに耐える", "ある日限界が来て終了"],
          },
          {
            trigger: "価値観のズレ",
            reactions: ["話し合いを避ける", "距離が広がる"],
          },
          {
            trigger: "甘えてほしいタイミングで甘えてくれない",
            reactions: ["「必要とされてない？」", "でも言えない"],
          },
          {
            trigger: "自分が弱った時",
            reactions: [
              "甘えられず一人で背負う",
              "彼が\"気づかない\"のがつらい",
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
        text: "あなたはずっと我慢していた。彼の小さな無関心も、言われた一言も、軽い約束の破りも、すべて「しょうがない」で済ませてきた。",
      },
      {
        type: "list",
        items: [
          "そしてある日突然心が限界に達する",
          "彼は驚く「え？そんなに溜めてたの？言ってよ…」",
          "あなたは静かに言う「もう言いたい気持ちも、無いんだよね」",
          "リーダー型×抑制型が別れを選ぶときは、静かで、でも完全に\"終わっている\"",
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
          "リードは自然にできる",
          "相手のために段取りをする",
          "でも自分の気持ちは控えめ",
          "気遣いが多い",
          "沈黙は保てるが本音の沈黙が多くなる",
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
          "安定してる",
          "無駄がない",
          "感情が薄い",
          "必要な情報だけ",
          "本音は書かない",
          "短文が多い",
          "男性からすると\"優しいのに距離がある\"と感じられやすい",
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
            "しっかり者",
            "優しい",
            "頼れる",
            "話し合いができる",
            "大人の余裕",
          ],
        },
        bad: {
          heading: "誤解されやすい点",
          items: [
            "本音が読めない",
            "距離を感じる",
            "甘えてほしいのに甘えてくれない",
            "\"強すぎて寂しい\"と言われる",
            "自分が必要とされていない感覚",
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
            action: "自分が我慢している点の可視化",
            detail: "自分が何を我慢しているか認識する",
          },
          {
            num: "②",
            category: "愛着",
            action: "\"頼る＝迷惑\"の修正",
            detail: "頼ることは迷惑ではないと思えるようにする",
          },
          {
            num: "③",
            category: "コミュニケーション",
            action: "弱さの言語化",
            detail: "小さな弱音を言葉にする練習",
          },
          {
            num: "④",
            category: "感情マネジメント",
            action: "抑圧ではなく共有へ",
            detail: "感情を抑えるのではなく共有する習慣",
          },
        ],
        summary:
          "このステップで弱さが魅力として機能する温かい関係が実現します。",
      },
    ],
  },
  {
    name: "改善後の未来ストーリー",
    nameEn: "Future Story After Improvement",
    blocks: [
      {
        type: "highlight",
        text: "あなたが小さく弱音を言えるようになると、",
      },
      {
        type: "list",
        items: [
          "相手があなたを守りたくなる",
          "愛情が循環しはじめる",
          "\"頼るあなた\"が魅力として機能する",
          "リーダー性はそのままにやわらかさが加わる",
          "恋愛が深まり長期的な関係に向きやすい",
        ],
      },
      {
        type: "insight",
        label: "本質",
        text: "リーダー型×抑制型は「弱さを見せられた瞬間、最も魅力が開花するタイプ」。強さだけではなく柔らかさが恋愛を決定的に豊かにしていく。",
      },
    ],
  },
  {
    name: "総評",
    nameEn: "Overall Assessment",
    blocks: [
      {
        type: "text",
        text: "リストレインドリーダーは、責任感・判断力・安定感が際立つ\"頼られる大人タイプ\"です。ただ、その強さが行きすぎると、感情より「正しさ」を優先し、相手が委縮しやすい関係が生まれがちです。本音や弱さを抑えるほど、距離は近いのに\"心の温度差\"が広がりやすい点が特徴。感情を少し柔らかく言葉に乗せられるようになると、強さと優しさが調和し、深い信頼を築ける魅力が一気に引き立ちます。",
      },
    ],
  },
];
