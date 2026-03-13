import type { AnalysisItem } from "../types";

export const DRIFTER_REACTIVE: AnalysisItem[] = [
  {
    name: "コア特徴",
    nameEn: "Core Characteristics",
    blocks: [
      {
        type: "highlight",
        text: "ドリフター型の情緒の軽さ・流れるスタイル・深追いしない距離感に、反応型の感情が急に揺れる・瞬間的に言動が出る・不安期待情熱が一気に表に出るが重なる。",
      },
      {
        type: "section",
        emoji: "✨",
        heading: "普段は淡々・でも突然感情の\"波\"が来る",
        items: [
          "一貫性があるようで揺れやすい",
          "自分でも感情の波を把握しにくい",
          "恋の温度が安定しにくい",
        ],
        variant: "neutral",
      },
      {
        type: "warning",
        emoji: "⚡",
        heading: "ドリフター型×反応型の複合",
        items: [
          "軽さと揺れが同時に働き、\"風と波の恋愛OS\"になる",
        ],
      },
      {
        type: "insight",
        label: "言い換えると、",
        text: "\"風と波の恋愛OS\"を持つ感受性豊かなタイプ。",
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
          "普段は軽く自然体、心が動いた瞬間だけ一気に距離を詰める",
          "でも深くなるとまた離れる",
          "相手からすると「温度が読めない」",
          "気まぐれに見えるが実は\"感情が追いついてない\"だけ",
          "刺激と安心が両方欲しい",
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
          "好意が湧いた時だけ熱量が急上昇",
          "連絡の温度差が激しい",
          "好意→不安→距離取りのループ",
          "感情に押されると考える前に動く",
          "衝動的なLINE急に冷めた対応",
          "相手のペースに振り回されやすい",
          "本気の恋になるほど揺れが激しくなる",
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
        heading: "「自由でいたい」「でも特別に愛されたい」「近すぎても遠すぎても落ち着かない」という\"二重欲求\"",
        items: [
          "ドリフター→距離を保ちたい、反応型→愛情を感じたい",
          "この矛盾が恋愛のリズムを不規則にする",
        ],
      },
      {
        type: "insight",
        label: "この構造ゆえに、",
        text: "軽さと愛情欲求が同時に働き、関係の波が生まれやすい。",
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
        heading: "本当は\"つながり\"を求めている",
        items: [
          "強い感情を長く抱えるのが苦手・でも瞬間的には恋愛にのめりやすい",
          "「追われたいけど束縛は嫌」「好きだけど深さは怖い」",
          "分析より感情が先に動く",
          "\"感情の波\"に巻き込まれたくないけど巻き込まれる",
        ],
        variant: "neutral",
      },
      {
        type: "insight",
        label: "本質は、",
        text: "感情の波を丁寧に扱えるようになると、軽やかさが最大の魅力になる。",
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
          "刺激的、楽しい、情熱がある、勢いがあるタイプ",
          "距離感が軽やかでノリが合う人",
        ],
        variant: "positive",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "注意",
        items: [
          "同じく反応型の男性と組むと\"炎上恋愛\"になりやすい",
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
          "最初は盛り上がるが長期安定しにくい",
          "連絡の温度差から誤解が生まれる",
          "一瞬の不安で衝動的に距離を置く",
          "相手が困惑しやすい",
          "「気持ちが読めない」と言われやすい",
        ],
      },
      {
        type: "insight",
        label: "最も典型なのは、",
        text: "温度差と感情の波による誤解の連鎖。",
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
              "気持ちの波がそのまま行動に出てしまい極端な言動が増える",
              "彼の連絡・態度の変化に敏感になり情緒が大きく揺れる",
              "不安と期待が交互に襲い自分でも気持ちの整理が難しい",
            ],
          },
          {
            emoji: "🔹",
            label: "長期",
            items: [
              "感情暴走→後悔→自己否定のループが固定化",
              "感情任せの恋愛が続き安定した関係が作れなくなる",
              "恋愛に疲れやすく回避傾向が強まる",
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
              "「え、何かあった？」とざわつく",
              "でも追うより自分から一旦距離を置く",
            ],
          },
          {
            trigger: "返信の遅さ",
            reactions: [
              "不安",
              "イラッ",
              "冷却",
              "何事もなかったように戻る",
            ],
          },
          {
            trigger: "温度差",
            reactions: [
              "「嫌われた？」という瞬間の反応が出る",
              "でも深追いはしない(むしろ引く)",
            ],
          },
          {
            trigger: "意見の違い",
            reactions: [
              "感情的に反応",
              "その後「言いすぎた？」と自己嫌悪",
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
              { speaker: "彼", text: "「また来週会おうよ」", isUser: false },
              { speaker: "あなた", text: "「うん、気分が合えば！」", isUser: true },
            ],
            summary: "\"軽さ\"が\"熱量の低さ\"と誤解される",
          },
          {
            exchanges: [
              { speaker: "あなた", text: "「ねえ、最近会えなくて寂しい」", isUser: true },
              { speaker: "彼", text: "「え、昨日はスルーしてたのに？」", isUser: false },
              { speaker: "あなた", text: "「…そうだけど、今は会いたい」", isUser: true },
            ],
            summary: "温度の波が相手を混乱させる典型",
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
            trigger: "返信の遅さ",
            reactions: [
              "一瞬不安",
              "急に冷静",
              "気分で態度が変わる",
            ],
          },
          {
            trigger: "距離が縮まる",
            reactions: [
              "気持ちが上がるor急に離れる",
            ],
          },
          {
            trigger: "言い合い",
            reactions: [
              "衝動で言い返す",
            ],
          },
          {
            trigger: "深い本音を求められる",
            reactions: [
              "プレッシャーでかわす",
            ],
          },
          {
            trigger: "期待された時",
            reactions: [
              "心が動けばOK動かなければスルー",
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
        text: "初期の盛り上がり→相手があなたにのめり込む→あなたは温度差を感じて距離を置く→相手が不安になって追う→追われると重く感じてさらに引く。",
      },
      {
        type: "list",
        items: [
          "「よく分からない」と終わる典型パターン",
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
          "ノリとテンションで動く",
          "気分が乗ると一気に距離を縮める",
          "会話は軽快、でも深い話になると急に曖昧にする",
          "テンションの波がある",
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
          "返す時は返す返さない時は返さない",
          "文章の温度が日によって違う",
          "絵文字もテンション依存",
          "よく言えば\"自然体\"悪く言えば\"一貫性が薄い\"",
          "衝動でメッセージを送る時がある",
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
            "一緒にいて楽しい",
            "軽やかで魅力的",
            "話していて飽きない",
            "駆け引きなしの自然体",
          ],
        },
        bad: {
          heading: "⚠ 誤解される部分",
          items: [
            "気持ちが読めない",
            "急に冷たくなることがある",
            "深い関係に進みづらい",
            "「本当に俺のこと好き？」と思われやすい",
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
            action: "感情波を可視化する",
            detail: "自分の感情パターンに気づく",
          },
          {
            num: "②",
            category: "感情マネジメント",
            action: "衝動・波の扱い",
            detail: "感情の波を安全に扱う力を育てる",
          },
          {
            num: "③",
            category: "コミュニケーション",
            action: "温度差の言語化",
            detail: "温度差を言葉にする力",
          },
          {
            num: "④",
            category: "愛着",
            action: "近づく恐怖を緩める",
            detail: "安全に近づく感覚を育てる",
          },
        ],
        summary: "このステップで\"軽やかさ\"があなたの魅力として存続しつつ安定性が加わります。",
      },
    ],
  },
  {
    name: "改善後の未来ストーリー",
    nameEn: "Future Story After Improvement",
    blocks: [
      {
        type: "highlight",
        text: "ドリフター型×反応型は\"風と波の恋愛OS\"を持つ感受性豊かなタイプ。",
      },
      {
        type: "list",
        items: [
          "気分に左右されず関係が安定",
          "連絡の温度差が減る",
          "急激な感情波が整い深い関係への土台ができる",
          "男性から「距離の変化が分かりやすくなった」と言われる",
          "\"軽やかさ\"があなたの魅力として存続しつつ安定性が加わる",
        ],
      },
      {
        type: "insight",
        label: "感情の波を丁寧に扱えるようになるほど",
        text: "軽やかさが最大の魅力になる。",
      },
    ],
  },
  {
    name: "総評",
    nameEn: "Overall Assessment",
    blocks: [
      {
        type: "text",
        text: "インパルスドリフターは、柔軟で受容的な一方で、恋愛になると\"相手の感情に強く左右される揺れやすさ\"が現れるタイプです。不安・期待・寂しさなどが一気に高まり、気持ちの波がそのまま行動に出やすい特徴があります。揺れた瞬間の気持ちを柔らかく共有できるようになると、安定感が増し、\"自由でありながら心が落ち着く恋愛\"へと自然に発展します。",
      },
    ],
  },
];
