import type { AnalysisItem } from "../types";

export const EMPATH_EVOLUTION: AnalysisItem[] = [
  {
    name: "コア特徴",
    nameEn: "Core Characteristics",
    blocks: [
      {
        type: "section",
        emoji: "✨",
        heading: "もともとエンパスは",
        items: [
          "人の感情に敏感",
          "共感力が高い",
          "優しい",
          "聞き上手",
          "傷つきやすい",
          "感受性が豊か",
        ],
        variant: "neutral",
      },
      {
        type: "warning",
        emoji: "✨",
        heading: "成長型では、ここに",
        highlightText: "「自己境界」＋「対話力」＋「感情マネジメント」がうまく統合されており",
        items: [
          "相手の感情に流されない",
          "自分も相手も大切にできる",
          "過剰共感が落ち着く",
          "適切に距離を取れる",
          "本音が言える",
          "優しさが\"自己犠牲\"にならない",
        ],
      },
      { type: "insight", label: "という、", text: "大人エンパスの完成形" },
    ],
  },
  {
    name: "恋愛パターン",
    nameEn: "Love Patterns",
    blocks: [
      {
        type: "list",
        items: [
          "相手に気持ちよく話してもらえる",
          "彼は「癒される」と感じる",
          "共感力が高く、喧嘩が少ない",
          "自分の感情も比較的スムーズに表現できる",
          "過去のように\"感情に飲まれる\"ことが少ない",
          "安定した関係を作りやすい",
          "感情の波を穏やかに調整できる",
        ],
      },
      { type: "insight", label: "特徴", text: "\"感情の調律がうまい\"タイプ。" },
    ],
  },
  {
    name: "やりがちな行動",
    nameEn: "Your Love Behavior Patterns",
    blocks: [
      {
        type: "list",
        items: [
          "相手の気持ちを読むが、飲み込まない",
          "相手の変化に気づいてケアできる",
          "本音も自然に伝えられる",
          "衝動的な不安が減り、落ち着いて話せる",
          "感情が揺れたら自分を整えてから対話",
          "相手の感情に共鳴しすぎない",
          "→ エンパス特有の\"揺れ\"が減り、安定性が増している",
        ],
      },
    ],
  },
  {
    name: "根本にある心理構造",
    nameEn: "Core Psychological Structure",
    blocks: [
      {
        type: "highlight",
        text: "成長型エンパスは、過去の葛藤を乗り越えた結果、「相手を理解する」＝「自分を犠牲にすることではない」という深い理解を得ている。",
      },
      {
        type: "section",
        emoji: "🧠",
        heading: "そのため",
        items: [
          "相手の感情に巻き込まれない",
          "適切な境界線を引ける",
          "同調ではなく共感ができる",
          "一方的に受け止めずに対話できる",
        ],
        summary: "という\"成熟エンパス\"の心理構造を持つ。",
        variant: "positive",
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
        items: ["大切にされたい", "理解されたい", "寄り添われたい"],
        summary: "という強い欲求がある。",
        variant: "neutral",
      },
      {
        type: "section",
        emoji: "✨",
        heading: "成長型になると",
        items: [
          "この欲求を適切に伝えられる",
          "過剰共感ではなく\"共有\"ができる",
          "相手の気持ちと自分の気持ちの区別がつけられる",
        ],
        summary: "つまり、心の境界線の形成に成功している状態。",
        variant: "positive",
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
          "誠実で穏やか",
          "優しく寄り添ってくれるタイプ",
          "情緒の安定した男性",
          "コミュニケーションが丁寧",
        ],
        variant: "positive",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "一方で、",
        items: ["自己中心的な男性を選ぶと、関係が不均衡になりやすい。"],
      },
    ],
  },
  {
    name: "相手との関係性の特徴",
    nameEn: "Relationship Characteristics",
    blocks: [
      {
        type: "warning",
        emoji: "⚡",
        heading: "成長型なので極端な拗れは少ないが、",
        items: [
          "聞き役ばかりになって負担が増える",
          "相手が頼りすぎてくる",
          "自分が支え役になりすぎる",
          "刺激が少なすぎて関係が停滞",
        ],
        summary: "など、\"優しさによる偏り\"が起こりやすい。",
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
              "相手を優先しすぎて、自分のニーズがどんどん後回しになる。",
              "「嫌われたくない」気持ちで無理な合わせ方が増える。",
              "好意があるほど\"尽くしすぎの初期化\"が起きる。",
            ],
          },
          {
            emoji: "🔹",
            label: "長期（6ヶ月〜1年以降）",
            items: [
              "与えすぎによる疲労で、感情が枯渇し\"看護恋愛\"になりやすい。",
              "相手の問題を背負い込み、自己犠牲がデフォルト化する。",
              "最終的に「私ばっかり頑張ってる…」と感じ、突然距離を置きたくなる。",
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
              "\"不安\"より\"事情を理解しよう\"が先",
              "ただし2〜3回続くと丁寧に確認する",
              "過去ほど揺れない",
            ],
          },
          {
            trigger: "温度差のあるLINE",
            reactions: [
              "相手の状況を推測し、丁寧に距離調整",
              "自分の不安も落ち着いて伝えられる",
            ],
          },
          {
            trigger: "デート予定の変更",
            reactions: ["柔軟に対応", "ただし本音も後で共有する"],
          },
          {
            trigger: "衝突",
            reactions: [
              "冷静に対話",
              "感情に飲まれず\"問題解決型\"",
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
              { speaker: "彼", text: "「今日はちょっと疲れてて…」", isUser: false },
              { speaker: "あなた", text: "「そっか、無理しないでね。でも、少し寂しかった。」", isUser: true },
            ],
            summary: "（本音と配慮のバランスが良い）",
          },
          {
            exchanges: [
              { speaker: "彼", text: "「なんで分かってくれないの？」", isUser: false },
              { speaker: "あなた", text: "「あなたの気持ちは分かるよ。でも私の気持ちも聞いてほしい。」", isUser: true },
            ],
            summary: "（共感＋境界線）",
          },
          {
            exchanges: [
              { speaker: "彼", text: "「もう少し連絡減るかも」", isUser: false },
              { speaker: "あなた", text: "「大丈夫だよ。私も落ち着いて対応するね。」", isUser: true },
            ],
            summary: "（過去ほど不安に引っ張られない）",
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
            trigger: "相手が落ち込んでいる",
            reactions: [
              "気持ちを受け止める",
              "でも抱え込まずに区切りをつける",
            ],
          },
          {
            trigger: "温度差",
            reactions: [
              "自分責めは少ない",
              "対話で解決しようとする",
            ],
          },
          {
            trigger: "過度な依頼",
            reactions: ["無理なときは断る（成長の証）"],
          },
          {
            trigger: "相手の機嫌の揺れ",
            reactions: [
              "過剰に反応しない",
              "一定の距離でケア",
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
        text: "彼が仕事で疲れており、あなたは気遣った。しかし彼は次第にあなたに甘えすぎ、精神的な\"依存先\"にしていく。",
      },
      {
        type: "list",
        items: [
          "あなたも最初は支えていたが、次第に疲れを感じる。",
          "あなた「最近、少し距離が近すぎる気がする…」",
          "でも彼は言う。「なんで急に冷たくなるの？」",
          "あなたは優しく支えてきただけなのに、いつの間にか\"あなたがいないと無理\"な関係に。",
          "→ 成長型でも相手を選ばないと\"共感性疲労\"が起こる。",
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
          "相手の気持ちを察して寄り添う",
          "安心できる空間をつくる",
          "相手が話しやすい空気感",
          "温度調整が上手い",
          "自分の気持ちも適度に表現",
          "笑顔が多く、楽しい時間を作る才能",
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
          "あたたかい文章",
          "相手への配慮が自然",
          "落ち着いたペース",
          "感情の反応が穏やか",
          "丁寧だが重くない",
          "相手に安心感を与えるLINE",
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
            "話しやすい",
            "癒される",
            "理解してくれる",
            "受け入れてくれる",
          ],
        },
        bad: {
          heading: "誤解される点",
          items: [
            "優しすぎて怒らないのかと思われる",
            "気持ちが読めすぎて頼りにされやすい",
            "自分の負担に気づかれにくい",
            "他人の世話で自分を疲れさせがち",
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
            action: "相手の感情と自分の感情を分ける",
            detail: "相手の感情と自分の感情を区別し、境界線を意識する。",
          },
          {
            num: "②",
            category: "コミュニケーション",
            action: "負担を伝える",
            detail: "無理なときは適切に伝え、相手に理解を求める。",
          },
          {
            num: "③",
            category: "愛着",
            action: "安定型の強化",
            detail: "安定した愛着パターンを育成する。",
          },
          {
            num: "④",
            category: "恋愛行動",
            action: "依存させない距離のとり方",
            detail: "適切な距離感を保ち、共依存を防ぐ。",
          },
        ],
        summary: "この順序で改善することで、成熟した共感力を維持しながら健全な関係を築けます。",
      },
    ],
  },
  {
    name: "改善後の未来ストーリー",
    nameEn: "Future Story After Improvement",
    blocks: [
      {
        type: "highlight",
        text: "共感力が強いあなたが、\"自分も大事にする恋愛\"へ移行すると、",
      },
      {
        type: "list",
        items: [
          "共依存ではなく相互成長",
          "過剰な気遣いから脱却",
          "頼られすぎず、頼りすぎない",
          "穏やかで成熟した関係",
          "長く続く安心と温かさ",
        ],
      },
      {
        type: "insight",
        label: "成長型エンパスは、",
        text: "もっとも\"パートナーの人生を豊かにできるタイプ\"。その優しさは、成熟した対話と境界線によって最強の愛に変わる。",
      },
    ],
  },
  {
    name: "総評",
    nameEn: "Overall Assessment",
    blocks: [
      {
        type: "text",
        text: "エボリューションエンパスは、深い共感力と優しさを持ちながらも、自分の感情と相手の感情を健全に切り分けられる\"成熟した共感タイプ\"です。相手に寄り添いながらも自分を見失わず、関係性を丁寧に育てる力があります。小さな境界線を大事にしながら本音を共有していくことで、\"深い安心感 × 温かい愛情\"が循環する理想的なパートナーシップを築けるタイプです。",
      },
    ],
  },
];
