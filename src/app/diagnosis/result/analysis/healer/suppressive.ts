import type { AnalysisItem } from "../types";

export const HEALER_SUPPRESSIVE: AnalysisItem[] = [
  {
    name: "コア特徴",
    nameEn: "Core Characteristics",
    blocks: [
      {
        type: "highlight",
        text: "「優しさ」×「我慢」×「感情抑制」の三角構造で恋愛が進むタイプ。",
      },
      {
        type: "section",
        emoji: "💚",
        heading: "ヒーラーは",
        items: [
          "相手の気持ちに敏感",
          "困っている人を放っておけない",
          "寄り添い力が高い",
          "平和な関係を求める",
        ],
        variant: "positive",
      },
      {
        type: "warning",
        emoji: "⚡",
        heading: "しかし抑制型になると",
        highlightText: "自分の気持ちを言えない・本音を\"隠す\"・相手を優先しすぎる・負担を背負ってしまう・感情が静かに疲れていく。",
        items: [
          "自分の気持ちを言えない",
          "本音を\"隠す\"",
          "相手を優先しすぎる",
          "負担を背負ってしまう",
          "感情が静かに疲れていく",
        ],
      },
      {
        type: "insight",
        label: "結果",
        text: "\"優しさが静かに消耗する恋愛\"になりやすい。",
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
          "聞き役に徹しすぎる",
          "相手を否定しない",
          "「大丈夫」の裏で無理をしている",
          "問題があっても話し合わない",
          "相手の気持ちを優先しすぎて疲れる",
          "相手が不調だと\"自分が支えないと\"と思ってしまう",
          "優しさの量が増えるほど苦しくなる",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "優しさが増すほど、内側の負担も増していく。",
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
          "感情を抑える",
          "本音を飲み込む",
          "遠慮する",
          "相手の相談を聞きすぎる",
          "頼られたら断れない",
          "気を遣いすぎる",
          "自分の負担を相手に悟られないように振る舞う",
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
        heading: "深層心理には",
        highlightText: "「優しさをやめた瞬間、関係が壊れる」という深い思い込み。",
        items: [
          "自分の要望を言えない",
          "不満や悲しみを表現できない",
          "感情を見せる＝迷惑",
          "\"重いと思われたくない\"",
        ],
      },
      {
        type: "insight",
        label: "結果",
        text: "本音を出す勇気が育っていないため愛情はあるのに心が枯渇しやすい。",
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
          "もっと大事にされたい",
          "もっと甘えたい",
          "誰かに頼りたい",
          "本当は寂しい時がある",
          "弱さを受け止めてほしい",
        ],
        summary: "でも負担をかけたくない・迷惑をかけたくない・嫌われたくない・優しい人でいたい。",
        variant: "neutral",
      },
      {
        type: "insight",
        label: "結果",
        text: "\"優しすぎる沈黙\"を作ってしまう。",
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
          "穏やか",
          "話を聞いてくれる",
          "頼ってくれる男性",
        ],
        variant: "positive",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "注意",
        items: [
          "問題の多い男性・不安定な男性・メンヘラ気味の相手→「助けてあげたい」で依存される相手を選びやすい",
          "依存されるほど抑制型は疲れていく",
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
          "相手を優先し続ける→感情を言えない",
          "相手は「悩みを受け止めてくれる人」と勘違い",
          "あなたは内側で限界に近づく",
          "突然感情がしんどくなり距離を置き始める",
          "相手は「言ってよ…」とショック",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "典型的な我慢→限界→静かな崩壊パターン。",
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
              "自分の気持ちを抑えてしまい相手に本音を言えなくなる。",
              "優しく振る舞うほど心の中の違和感が大きくなる。",
              "その場を穏やかに収めるための\"感情圧縮\"が増える。",
            ],
          },
          {
            emoji: "🔹",
            label: "長期",
            items: [
              "不満が蓄積し突然感情が爆発したり急に冷めるギャップが生まれる。",
              "彼は「急に態度が変わった」と受け取って距離が広がる。",
              "結果的に本音を抑える癖が恋愛破綻の原因になるパターンが固定化。",
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
              "不安になっても言わない",
              "彼を気遣う返信をする",
              "内側でモヤモヤが積み重なる",
            ],
          },
          {
            trigger: "返信が素っ気ない",
            reactions: [
              "自分の問題にすり替える",
              "本音を伝えない",
            ],
          },
          {
            trigger: "会えない日が続く",
            reactions: [
              "理解しようとする",
              "でも実は寂しい",
              "それでも言えない",
            ],
          },
          {
            trigger: "彼が悩んでいる",
            reactions: ["過剰な共感", "消耗"],
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
              { speaker: "彼", text: "「最近忙しいんだ…」", isUser: false },
              { speaker: "あなた", text: "「うん、大丈夫だよ。無理しないで」（本当は寂しい）", isUser: true },
              { speaker: "彼", text: "「なんか元気ない？」", isUser: false },
              { speaker: "あなた", text: "「ううん、全然」（本当は限界寸前）", isUser: true },
              { speaker: "彼", text: "「今日は会えなそう」", isUser: false },
              { speaker: "あなた", text: "「平気だよ」（全然平気じゃない）", isUser: true },
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
            trigger: "孤独感",
            reactions: ["さらに優しくして紛らわせる（逆効果）"],
          },
          {
            trigger: "彼の悩み",
            reactions: ["全部受け止めようとして疲れる"],
          },
          {
            trigger: "自分の不満",
            reactions: ["飲み込む"],
          },
          {
            trigger: "相手の温度差",
            reactions: ["過剰に\"理解\"しようとして感情が枯れる"],
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
        text: "あなたはいつも優しく寄り添ってきた。でも寂しさを隠し続けたせいであなたの内側には小さな亀裂ができていた。",
      },
      {
        type: "list",
        items: [
          "彼は「いつも大丈夫って言うから」あなたの気持ちに気づけなかった。",
          "気づいた時にはあなたの心は静かに閉じ始めていた。",
          "\"優しすぎる我慢\"が恋を壊す典型例。",
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
          "彼の好みを優先",
          "自分の希望は控えめ",
          "疲れても顔に出さない",
          "気遣いが細かい",
          "弱さを見せない",
          "笑顔でいる",
          "帰ってから一人で疲れが押し寄せる",
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
          "優しい",
          "相手優先の文章",
          "「大丈夫だよ」「気にしないで」が多い",
          "本音を言わない",
          "絵文字は柔らかく控えめ",
          "悩み相談されやすい",
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
            "癒される",
            "寄り添ってくれる",
            "居心地が良い",
          ],
        },
        bad: {
          heading: "誤解される点",
          items: [
            "本音が分からない",
            "気を遣わせないように気を遣っている感じ",
            "寂しいのか平気なのかが読めない",
            "突然距離を置かれると感じる",
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
            action: "我慢の癖を可視化",
            detail: "自分が何を我慢しているか認識する",
          },
          {
            num: "②",
            category: "自己肯定感",
            action: "自分も大切にする許可",
            detail: "自分を大切にすることを許可する",
          },
          {
            num: "③",
            category: "コミュニケーション",
            action: "小さな開示の練習",
            detail: "小さな本音を伝える練習",
          },
          {
            num: "④",
            category: "愛着",
            action: "安定型の育成",
            detail: "安定した愛着パターンを育てる",
          },
        ],
        summary: "このステップで\"優しさの質\"が愛の深さへ変わります。",
      },
    ],
  },
  {
    name: "改善後の未来ストーリー",
    nameEn: "Future Story After Improvement",
    blocks: [
      {
        type: "highlight",
        text: "あなたが\"優しすぎる自分\"を少し緩め、自分の本音も大切にし始めたとき、",
      },
      {
        type: "list",
        items: [
          "支えられる恋",
          "頼れる関係",
          "我慢ゼロの愛",
          "安心して弱さを見せられる距離感が自然と手に入る",
        ],
      },
      {
        type: "insight",
        label: "ヒーラー型×抑制型は",
        text: "成長すると\"優しさの質\"が愛の深さへ変わるタイプ。",
      },
    ],
  },
  {
    name: "総評",
    nameEn: "Overall Assessment",
    blocks: [
      {
        type: "text",
        text: "リストレインドヒーラーは、優しさと受容力が強みで、\"相手を癒す役割\"を自然に引き受けてしまいやすいタイプです。その分、自分の感情や疲れを抑え込みやすく、静かな消耗や我慢が蓄積しやすい傾向があります。小さな本音や限界を相手に伝えられるようになると、負担が軽くなり、\"癒すだけの関係\"から\"支え合う関係\"へとバランスよく進化します。",
      },
    ],
  },
];
