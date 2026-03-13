import type { AnalysisItem } from "../types";

export const DREAMER_SUPPRESSIVE: AnalysisItem[] = [
  {
    name: "コア特徴",
    nameEn: "Core Characteristics",
    blocks: [
      {
        type: "highlight",
        text: "理想を大切にしながらも現実を冷静に判断しようとするタイプ。想像力・ロマン・未来志向・理想の恋愛像に加え、落ち着いた感情処理・急がない姿勢・距離感調整・警戒心の高さ・慎重な意思決定。",
      },
      {
        type: "section",
        emoji: "✨",
        heading: "特徴",
        items: [
          "感情に流されずに理想を育てる",
          "でも一歩踏み出すのは遅い",
          "相手の動きに敏感で慎重になる",
        ],
        variant: "neutral",
      },
      {
        type: "list",
        items: [
          "「静かに夢を見るタイプ」",
        ],
      },
      {
        type: "insight",
        label: "結果",
        text: "理想と慎重さが同居した、ゆっくり深まる恋愛スタイル。",
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
          "理想の相手像は明確",
          "恋に落ちるのはそこそこ早い",
          "でも行動は慎重",
          "相手の様子をよく観察する",
          "本気になるのに時間がかかる",
          "最初は距離を置きながら進む",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "理想はあるが、一歩一歩確かめながら進む恋愛。",
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
          "気持ちはあるのに慎重すぎて進みが遅い",
          "様子見期間が長い",
          "関係を急ぎたくない",
          "感情の波が穏やか",
          "自分の理想と現実を比較しがち",
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
        heading: "ドリーマーの本質は「理想で恋を照らしたい」。慎重型がこれを制御するため",
        items: [
          "期待しすぎて傷つきたくない",
          "本音を出しすぎて壊したくない",
          "飛び込む前に確認したい",
        ],
      },
      {
        type: "insight",
        label: "結果",
        text: "「ゆっくり深まる恋」を選びやすい。",
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
          "理想の恋愛を求めたい",
          "でも焦りたくない",
          "相手にがっかりしたくない",
          "自分の気持ちを守りたい",
          "安全に親密になりたい",
        ],
        summary: "夢を見る力と慎重さが同居しているタイプ。",
        variant: "neutral",
      },
      {
        type: "insight",
        label: "特徴",
        text: "理想と安全の両立を無意識に求めている。",
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
          "誠実",
          "穏やか",
          "思慮深い",
          "先走らないタイプ",
          "価値観の合う人",
        ],
        variant: "positive",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "注意",
        items: [
          "「猛烈に押す男性」には距離を置きやすい",
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
          "気づかない不満が蓄積",
          "理想とのズレが気になる",
          "相手のペースが早いと逃げたくなる",
          "はっきり言わずモヤモヤが残る",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "大きな衝突は少ないが慎重型ゆえの「ため込み」でズレやすい。",
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
              "自分の感情を抑え相手に合わせて「いい子の恋愛」をしやすい",
              "不安や疑問を飲み込むため内側でストレスが溜まる",
              "理想が強いぶん現実にがっかりしやすい",
            ],
          },
          {
            emoji: "🔹",
            label: "長期",
            items: [
              "抑え込みすぎて自分の気持ちが分からなくなる",
              "相手に尽くしすぎ依存的or都合よく扱われやすい",
              "報われない恋愛を繰り返すパターンが固定化する",
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
              "すぐは不安にならない",
              "落ち着いて理由を考える",
              "ただし続くと「合うのかな？」と静かに迷う",
            ],
          },
          {
            trigger: "デート後の温度差",
            reactions: [
              "表面上は平気",
              "内側では理想と比較してジャッジが始まる",
            ],
          },
          {
            trigger: "踏み込まれすぎる",
            reactions: ["心の準備ができず距離を置く"],
          },
          {
            trigger: "深い話を求められる",
            reactions: [
              "正直に話したいが様子を見て言う",
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
              { speaker: "彼", text: "「もっと会いたい」", isUser: false },
              { speaker: "あなた", text: "「うん、私も（でも急ぐのは違う…）」", isUser: true },
              { speaker: "彼", text: "「どう思ってる？」", isUser: false },
              { speaker: "あなた", text: "「考えてるよ（本当はもう少し様子を見たい）」", isUser: true },
            ],
            summary: "本音を出すのに時間がかかるタイプ",
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
            trigger: "彼の暴走気味の積極性",
            reactions: ["一気にブレーキ"],
          },
          {
            trigger: "理想と違う行動",
            reactions: ["「この人でいい？」と見直しが始まる"],
          },
          {
            trigger: "曖昧な約束",
            reactions: ["不信感よりも「違和感」が生まれる"],
          },
          {
            trigger: "自分の気持ちが急に冷める瞬間",
            reactions: ["理想とのギャップシグナル"],
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
        text: "理想の恋が始まりそう→慎重に関係を育てる→彼の温度が上がる→あなたのペースが追いつかない。",
      },
      {
        type: "list",
        items: [
          "一旦距離を置く",
          "相手が「脈なし？」と誤解",
          "すれ違いが起きる",
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
          "雰囲気に敏感",
          "落ち着いたコミュニケーション",
          "相手の話をよく聞く",
          "ペースはゆっくり",
          "感情を表に出しすぎない",
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
          "返信は安定",
          "急に長文になることも",
          "気持ちは表現するが慎重",
          "過度な駆け引きはしない",
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
            "落ち着いていて話しやすい",
            "理想が高いのが魅力",
            "上品で大人っぽい",
            "急かさない優しさ",
          ],
        },
        bad: {
          heading: "誤解されやすい点",
          items: [
            "心の距離が一定",
            "本音が読みにくい",
            "踏み込むと引かれる",
            "温度差を感じる",
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
            action: "慎重が発動するタイミングを理解",
            detail: "慎重モードに気づく力を育てる",
          },
          {
            num: "②",
            category: "コミュニケーション",
            action: "本音を早めに共有",
            detail: "小さな本音を早めに伝える練習",
          },
          {
            num: "③",
            category: "愛着",
            action: "安心を強くする",
            detail: "安定した愛着パターンを育てる",
          },
          {
            num: "④",
            category: "感情マネジメント",
            action: "ため込み防止",
            detail: "感情を溜め込まない習慣を作る",
          },
        ],
        summary: "このステップで「静かに深まる恋」が実現します。",
      },
    ],
  },
  {
    name: "改善後の未来ストーリー",
    nameEn: "Future Story After Improvement",
    blocks: [
      {
        type: "highlight",
        text: "ドリーマー×慎重型は理想を守りながら丁寧に深まる恋愛ができるタイプ。",
      },
      {
        type: "list",
        items: [
          "慎重さが「関係の安定」に変わる",
          "本音が少しずつ出せる",
          "ペースを合わせられる",
          "理想と現実の橋渡しができる",
          "「静かに深まる恋」が実現する",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "スピードよりも安心と理解を大切にする「静かで美しい愛の育て方」を身に付けている。",
      },
    ],
  },
  {
    name: "総評",
    nameEn: "Overall Assessment",
    blocks: [
      {
        type: "text",
        text: "レギュレイトドリーマーは、独自の世界観と柔らかな魅力を持ちながら、恋愛では「自分の気持ちを抑え込みすぎる」傾向が強く出るタイプです。理想はあるのに言葉にするのが苦手で、距離は近いのに心の深い部分が伝わりづらい特徴があります。小さな本音や願いを少しずつ共有できるようになると、あなたの魅力が自然に開花し、「幻想だけでなく現実でも満たされる恋愛」へと関係がスムーズに進みます。",
      },
    ],
  },
];
