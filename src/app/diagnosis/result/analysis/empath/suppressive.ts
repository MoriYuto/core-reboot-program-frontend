import type { AnalysisItem } from "../types";

export const EMPATH_SUPPRESSIVE: AnalysisItem[] = [
  {
    name: "コア特徴",
    nameEn: "Core Characteristics",
    blocks: [
      {
        type: "section",
        emoji: "✨",
        heading: "エンパス型はもともと",
        items: [
          "人の気持ちに敏感",
          "優しい",
          "空気を読む",
          "相手を傷つけたくない",
          "繊細で感受性が高い",
        ],
        summary: "という \"人の心に寄り添えるタイプ\"。",
        variant: "positive",
      },
      {
        type: "warning",
        emoji: "⚡",
        heading: "しかし抑制型になると、この優しさが",
        highlightText: "「本音の抑圧」に変わりやすい。",
        items: [
          "自分の気持ちを飲み込む",
          "相手に気を使いすぎる",
          "嫌われたくない",
          "衝突を避ける",
          "気づきすぎて疲れる",
          "\"察する恋愛\"になりがち",
        ],
        summary: "という静かな我慢型エンパスになる。",
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
          "相手に合わせる",
          "不満があっても言わない",
          "傷つくのが怖くて踏み込めない",
          "\"わかってほしい\"のに伝えられない",
          "優しすぎて役割負担が大きい",
          "相手の機嫌を読む習慣がある",
          "「気づかれるまで待つ」癖",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "最初は順調でも、後半になるほど静かな負担と疲れが増える。",
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
          "相手に気をつかって本音を隠す",
          "\"嫌われたくない\"が強い",
          "相手中心の行動",
          "感情を上手く表現できない",
          "自分だけが頑張りすぎる",
          "相手が幸せなら自分は我慢していいと思う",
          "優しさでカバーするが疲れが溜まる",
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
        heading: "深層心理には次の価値観がある：",
        items: [
          "「衝突は怖い」",
          "「言わない方が安全」",
          "「気づいてもらえた方が安心」",
          "「感情を出したら迷惑」",
          "家庭で気を使って育った",
          "怒りや悲しみを表現すると否定された",
          "過去の恋愛で\"優しさが利用された\"",
          "感情表現＝危険、と学習した",
        ],
      },
      {
        type: "insight",
        label: "多くは、",
        text: "上記のような過去の体験に由来。",
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
          "わかってほしい",
          "受け入れてほしい",
          "安心したい",
          "頼りたい",
          "甘えたい",
        ],
        summary: "という \"強い欲求\" がある。",
        variant: "positive",
      },
      {
        type: "insight",
        label: "だが言えないために",
        text: "「察してほしい」が積もり、恋愛後半で温度差が生まれる。",
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
          "優しい男性",
          "穏やかなコミュニケーションの人",
          "自立していて依存しないタイプ",
          "相手のペースに合わせてくれる人",
        ],
        variant: "positive",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "ただし、",
        items: [
          "自己中心タイプの男性に惹かれると「優しい彼女が都合よく扱われる」ケースが多発する",
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
          "我慢が積もる",
          "心が疲れていく",
          "突然、距離を置く",
          "相手は理由が分からない",
          "静かな別れになりやすい",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "衝突しない分、別れが \"静かで深い\" のが特徴。",
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
              "\"感じすぎ\"を抑えようとして、逆に内側でストレスが溜まる。",
              "彼に合わせるための努力が増え、自然体でいられなくなる。",
              "期待に応えようとして言葉を慎重に選びすぎる。",
            ],
          },
          {
            emoji: "🔹",
            label: "長期（6ヶ月〜1年以降）",
            items: [
              "我慢が習慣化し、「本音を言えない関係」に入りやすい。",
              "相手の気分に左右され、恋愛の主導権を失う。",
              "最終的に \"従属的な恋愛OS\" が固定化し、自己価値がますます下がる。",
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
            reactions: ["すごく気になる", "でも連絡できない", "心が少しずつ沈む"],
          },
          {
            trigger: "温度差LINE",
            reactions: ["表向きは合わせる", "内側は不安", "自分の思いは出さない"],
          },
          {
            trigger: "デート曖昧",
            reactions: ["\"言いにくい\"ので飲み込む", "でもモヤモヤする"],
          },
          {
            trigger: "衝突",
            reactions: ["避ける", "その場では平和", "後で心が疲れる"],
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
              { speaker: "彼", text: "「本当はどう思ってるの？」", isUser: false },
              { speaker: "あなた", text: "「うーん、大丈夫だよ」", isUser: true },
              { speaker: "彼", text: "「もっと言ってよ」", isUser: false },
              { speaker: "あなた", text: "「言うほどでもないよ」", isUser: true },
              { speaker: "彼", text: "「なんか距離感じる」", isUser: false },
              { speaker: "あなた", text: "「そんなことないよ」", isUser: true },
            ],
            summary: "（本当は不安・悲しさがある／本当はたくさんある／距離を置いていた）\"傷つかないようにして、傷ついてしまう\"構造。",
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
            trigger: "相手が冷たくなる",
            reactions: ["何も言えない", "一人で落ち込む"],
          },
          {
            trigger: "気を使いすぎる関係",
            reactions: ["自己喪失", "感情の鈍化"],
          },
          {
            trigger: "相手が踏み込む",
            reactions: ["逃げたくなる", "シャットアウト"],
          },
          {
            trigger: "言えない本音が溜まる",
            reactions: ["突然の静かな拒絶へ"],
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
        text: "\"気を使い続ける → 自分が分からなくなる → 静かに距離が生まれる\" という流れ",
      },
      {
        type: "list",
        items: [
          "あなたは彼が喜ぶように気を使い続けていた。",
          "しかし、気づいたら自分が何を感じているのか分からなくなっていた。",
          "彼「最近、全然本音言ってくれないよね？」",
          "あなた「そうかな…」（心は疲れているが言えない）",
          "そのまま静かに距離が生まれ、別れに向かっていく。",
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
          "相手に合わせる",
          "自分の感情は隠す",
          "相手の気持ちを気遣いすぎる",
          "楽しいけど疲れやすい",
          "笑顔で誤魔化す",
          "衝突しないので \"いい子のまま\"",
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
          "控えめ",
          "自分の希望は書かない",
          "気遣いが強い",
          "返信は早い or 遅い（不安度で揺れる）",
          "温度差があっても言えない",
          "\"察してほしい\"が含まれている",
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
          items: ["優しい", "気遣いがすごい", "癒し", "話しやすい"],
        },
        bad: {
          heading: "誤解される点",
          items: [
            "本音が見えない",
            "距離が読めない",
            "何を考えているか分からない",
            "感情が薄いと誤解される",
            "急に距離を取られる",
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
            action: "本音の明確化",
            detail: "自分が本当は何を感じているのか、何を望んでいるのかを言語化する力を育てます。",
          },
          {
            num: "②",
            category: "コミュニケーション",
            action: "小さな自己開示",
            detail: "一度に全部ではなく、少しずつ本音を伝える練習をします。",
          },
          {
            num: "③",
            category: "感情マネジメント",
            action: "抑圧癖の改善",
            detail: "感情を出すことへの恐れを和らげ、安全な場面で表現する習慣をつけます。",
          },
          {
            num: "④",
            category: "愛着",
            action: "安定型の形成",
            detail: "安心できる関係性の中で、安定した愛着パターンを育てていきます。",
          },
        ],
        summary: "このステップを順番に進めることで、静かな我慢から解放された恋愛が実現します。",
      },
    ],
  },
  {
    name: "改善後の未来ストーリー",
    nameEn: "Future Story After Improvement",
    blocks: [
      {
        type: "highlight",
        text: "\"言わずに察してもらう\" ではなく \"小さく伝える\" を選べるようになったとき、あなたの恋愛は大きく変わる。",
      },
      {
        type: "list",
        items: [
          "気を使いすぎない",
          "相手に依存されすぎない",
          "自分の感情が戻ってくる",
          "\"優しいだけの恋\" ではなく \"育つ恋\" に変わる",
        ],
      },
      {
        type: "insight",
        label: "エンパス型 × 抑制型は、",
        text: "成長すると最も温かく深い関係を作れるタイプになる。",
      },
    ],
  },
  {
    name: "総評",
    nameEn: "Overall Assessment",
    blocks: [
      {
        type: "text",
        text: "リストレインドエンパスは、深い優しさと共感力を持ちながら、自分の気持ちより\"相手を優先すること\"が習慣化しやすいタイプです。感情を抑えてしまうほど、静かに疲れやすく、恋愛が一方通行になりやすい傾向があります。自分の感情を小さく表現することを許せるようになると、負担が減って関係が対等に整い、\"優しさが無理なく循環する恋愛\"へと自然に進んでいきます。",
      },
    ],
  },
];
