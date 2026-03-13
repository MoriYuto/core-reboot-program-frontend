import type { AnalysisItem } from "../types";

export const THINKER_REACTIVE: AnalysisItem[] = [
  {
    name: "コア特徴",
    nameEn: "Core Characteristics",
    blocks: [
      {
        type: "highlight",
        text: "シンカー型は冷静・理性的・分析力が高い・感情より論理優先の\"思考OS\"。",
      },
      {
        type: "section",
        emoji: "✨",
        heading: "反応型(情動活性型)が掛け合わさると",
        items: [
          "理性ではわかっていても感情が暴走する",
          "落ち着いて話したいのに気持ちが先に動く",
          "伝えすぎる・聞きすぎる・考えすぎるの三重苦",
          "本音を言った後に後悔しやすい",
        ],
        variant: "neutral",
      },
      {
        type: "warning",
        emoji: "⚡",
        heading: "\"賢いのに恋愛になると不安定\"",
        items: [
          "非常に人間味があり愛情深いタイプ",
        ],
      },
      {
        type: "insight",
        label: "言い換えると、",
        text: "思考と感情のギャップに揺れる繊細な知性タイプ。",
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
          "頭で理解しようとするが感情が追いつかない",
          "彼の一言で急に落ち込んだり不安になる",
          "説明不足に弱い",
          "「好き」が強くなると不安も強くなる",
          "言いすぎ→敏感に反省→自己嫌悪",
          "恋愛初期は勢いと直感で進む",
        ],
      },
      {
        type: "insight",
        label: "特徴",
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
          "感情の揺れを言語化しすぎる",
          "相手の言葉を深読みする",
          "\"なぜそう言った？\"を考えすぎる",
          "説明不足に反応しすぎてしまう",
          "自分の感情を処理できず相手に投げてしまう",
          "落ち込みからの回復に時間がかかる",
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
        heading: "「理解したい」「誤解を避けたい」「正しく愛したい」という強い欲求",
        items: [
          "しかし反応型の影響で気持ちが溢れる・不安が急上昇する・感情と言葉が一致しなくなる",
          "\"思考と感情のズレ\"が起きる",
        ],
      },
      {
        type: "insight",
        label: "この構造ゆえに、",
        text: "理性と感情が噛み合わず苦しみやすい。",
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
        heading: "本当はこう思っている",
        items: [
          "安心したい",
          "わかり合いたい",
          "丁寧に扱ってほしい",
          "信頼されたい",
        ],
        summary: "その気持ちが強すぎるため相手の反応に敏感になりすぎてしまう。",
        variant: "neutral",
      },
      {
        type: "insight",
        label: "本質は、",
        text: "繊細な欲求が過剰反応として表に出てしまう。",
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
          "知的",
          "落ち着いている",
          "丁寧な言葉遣い",
          "誠実",
          "論理と感情どちらも扱えるタイプ",
        ],
        variant: "positive",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "注意",
        items: [
          "感情乱高下・言葉が乱暴・説明しないタイプ・気分屋は疲労を引き起こす",
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
          "相手の一言で過剰反応",
          "説明不足の相手に不信感",
          "本音と建前のズレ",
          "感情を伝えすぎて後悔",
          "相手が静かになると不安が爆発",
        ],
      },
      {
        type: "insight",
        label: "最も典型なのは、",
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
              "普段は冷静だが感情が動いた瞬間に急に不安が大きくなる",
              "彼の言動を過剰に深読みしネガティブ妄想が増えやすい",
              "気持ちが揺れると極端な言動に走りやすい",
            ],
          },
          {
            emoji: "🔹",
            label: "長期",
            items: [
              "\"考えすぎる不安型恋愛\"が固定化し自己否定がじわじわ増える",
              "避けたいのに感情が暴走し相手との距離が安定しない",
              "恋愛が疲れるものとして認識され回避傾向が強まる",
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
              "落ち着こうとする",
              "でも感情が暴走",
              "「嫌われた？」と不安",
              "不安を悟られたくなくて理性的に振る舞う(このギャップで苦しくなる)",
            ],
          },
          {
            trigger: "深い話を求められる",
            reactions: [
              "喜ぶ",
              "話しすぎて自分で疲れる",
            ],
          },
          {
            trigger: "予定変更",
            reactions: [
              "理性は理解",
              "感情は落ち込む",
              "そのギャップにまた落ち込む",
            ],
          },
          {
            trigger: "相手の態度が冷たい",
            reactions: [
              "\"理由分析\"が止まらなくなる",
              "さらに不安が増幅",
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
              { speaker: "彼", text: "「最近ちょっと忙しくて」", isUser: false },
              {
                speaker: "あなた",
                text: "「うん、大丈夫。わかってるよ」",
                isUser: true,
              },
            ],
            summary: "理性の返答と内面の暴走のギャップ",
          },
          {
            exchanges: [
              {
                speaker: "あなた",
                text: "「…ねえ、最近ちょっと不安なんだけど」",
                isUser: true,
              },
              { speaker: "彼", text: "「え、何が？」", isUser: false },
              {
                speaker: "あなた",
                text: "「分かんない…でもなんか怖い」",
                isUser: true,
              },
            ],
            summary: "言えずに抱え突然感情が溢れる",
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
            trigger: "説明不足",
            reactions: ["深読み・不安"],
          },
          {
            trigger: "返信遅い",
            reactions: ["感情暴走"],
          },
          {
            trigger: "壁を感じる",
            reactions: ["過剰に想像"],
          },
          {
            trigger: "愛情表現が減る",
            reactions: ["自己否定"],
          },
          {
            trigger: "不安を言えない",
            reactions: ["限界で爆発"],
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
        text: "彼の反応に敏感→言えない不安が蓄積→些細なことで感情爆発→その後自己嫌悪→謝る→関係がギクシャク。",
      },
      {
        type: "list",
        items: [
          "「感情調整×言葉選び」の難しさでこじれやすい",
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
          "相手のリアクションを細かく観察",
          "良くも悪くも影響されやすい",
          "愛情表現は言語中心",
          "雰囲気の変化に敏感",
          "考え込んで突然静かになることも",
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
          "文章が長くなりがち",
          "感情説明が多い",
          "返信の温度で気持ちが揺れる",
          "疑問形が多い",
          "不安定な時は「大丈夫？」が増える",
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
            "誠実",
            "丁寧",
            "理解しようとする姿勢が素敵",
            "思慮深い",
            "安心感があるときは非常に安定",
          ],
        },
        bad: {
          heading: "⚠ 誤解される部分",
          items: [
            "感情が急に動く",
            "深読みされていると感じる",
            "話しすぎ/考えすぎで疲れる",
            "\"正しさ\"と\"感情\"のギャップがある",
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
            action: "暴走→観察へ",
            detail: "感情の暴走を観察する力を育てる",
          },
          {
            num: "②",
            category: "愛着",
            action: "不安の扱い方",
            detail: "不安を安全に扱う力を育てる",
          },
          {
            num: "③",
            category: "自己認識",
            action: "思考と感情の分離",
            detail: "思考と感情を分けて扱う力",
          },
          {
            num: "④",
            category: "コミュニケーション",
            action: "短く伝える",
            detail: "感情を短く的確に伝える力",
          },
        ],
        summary: "このステップで安定した大人の恋愛ができるようになります。",
      },
    ],
  },
  {
    name: "改善後の未来ストーリー",
    nameEn: "Future Story After Improvement",
    blocks: [
      {
        type: "highlight",
        text: "シンカー型×反応型は\"賢いのに恋愛で揺れる繊細な知性タイプ\"。",
      },
      {
        type: "list",
        items: [
          "感情の暴走が激減",
          "彼の一言で落ちない強さが生まれる",
          "\"説明不足=不安\"のパターンから脱却",
          "短く的確な感情共有ができる",
          "安定した大人の恋愛ができる",
          "あなたの思慮深さがそのまま強い魅力に進化",
        ],
      },
      {
        type: "insight",
        label: "感情を丁寧に扱えるようになるほど",
        text: "思考の深さが愛の深さに変わる。",
      },
    ],
  },
  {
    name: "総評",
    nameEn: "Overall Assessment",
    blocks: [
      {
        type: "text",
        text: "インパルスシンカーは、普段は思考的で冷静なのに、恋愛では\"深読みしすぎる繊細さ\"が強く出て揺れやすいタイプです。相手の言動を分析しすぎて不安が膨らみ、感情と思考のギャップに苦しみやすい傾向があります。揺れを素直に共有できるようになると、思考の過剰さが和らぎ、\"理解の深さ×心の安定\"が両立する落ち着いたパートナーシップへと変化します。",
      },
    ],
  },
];
