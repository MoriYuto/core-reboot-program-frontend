import type { AnalysisItem } from "../types";

export const REFLECTOR_DEFENSIVE: AnalysisItem[] = [
  {
    name: "コア特徴",
    nameEn: "Core Characteristics",
    blocks: [
      {
        type: "highlight",
        text: "「深い洞察力×受け取りすぎる感受性×だからこそ守りに入る」。心で感じている量は非常に多い。しかし外に出すのが怖い。",
      },
      {
        type: "section",
        emoji: "✨",
        heading: "特徴",
        items: [
          "相手の気持ちは分かりすぎる・でも自分の気持ちは見せられない",
          "気づきすぎる・傷つきたくない・だから距離を取る",
        ],
        variant: "neutral",
      },
      {
        type: "warning",
        emoji: "🛡️",
        heading: "静かな防衛システム",
        items: ["優しさと慎重さのバランスがとても繊細"],
      },
      {
        type: "insight",
        label: "結果",
        text: "心で感じている量は非常に多いのに、外に出すのが怖いタイプ。",
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
          "相手を深読みしすぎる",
          "自分の気持ちを言えない",
          "察しすぎて疲れる",
          "慎重に距離を保つ",
          "好きな人ほど逃げ腰になる",
          "相手の気持ちを信じきれない",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "深く理解する力があるのに、自分の心は閉じがち。",
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
          "自分からは動かない",
          "本音を隠す",
          "甘えるのが苦手",
          "気持ちを飲み込む",
          "不満をため込む",
          "距離を置くことで安心しようとする",
          "脈ありでも受け身になる",
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
        heading: "繊細な心を守る高機能な防御システム",
        highlightText: "深く感じるタイプだからこそ深く傷つく可能性を常に想定。",
        items: [
          "慎重になる・自分から進まない・気持ちがあっても抑える・安全圏から出ない",
          "ただしこの防御が働きすぎると恋愛が始まらない/進まない問題につながる",
        ],
      },
      {
        type: "insight",
        label: "結果",
        text: "守りが強すぎると、恋愛が前に進みにくくなる。",
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
          "もっと甘えたい・もっと近づきたい・もっと理解されたい・もっと安心したい",
          "でも「相手が本気とは限らない」「傷ついたら立ち直れない」",
        ],
        summary: "深い優しさも深い愛もあるのに自分の内側で止まってしまうタイプ。",
        variant: "neutral",
      },
      {
        type: "insight",
        label: "結果",
        text: "望みと怖さが同居し、心が内側で止まりやすい。",
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
          "優しい",
          "安心感がある",
          "ゆっくり距離を縮めてくれる",
          "押しつけがましくない",
          "聞き上手",
          "感情が安定している",
        ],
        variant: "positive",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "注意",
        items: ["積極的すぎる相手には引いてしまうことも"],
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
          "気持ちを隠しすぎる",
          "相手が何を考えているかを読みすぎる",
          "言葉にしないストレスが溜まる",
          "相手から見ると\"どう思ってるのか分からない人\"になる",
          "距離が縮まるほど逃げたくなる",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "親密さが増すほど、防衛本能が働きやすくなる。",
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
              "自分を守るために本音を見せないまま優しく振る舞う",
              "彼が心を開こうとすると逆に距離を取りたくなる",
              "「嫌われたくない」「踏み込まれたくない」が同時に立ち上がる",
            ],
          },
          {
            emoji: "🔹",
            label: "長期",
            items: [
              "親密さを避ける癖が固定化し深い関係が育たない",
              "相手からは「優しいけど壁がある人」と評価されやすい",
              "\"誰にも本音を見せない恋愛スタイル\"が続き孤独感が深まる",
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
              "不安ではなく\"観察モード\"に入る",
              "「何かあるのかな」「忙しいのかな」",
              "深読みするが言わない",
              "距離を置くことでバランスを取る",
            ],
          },
          {
            trigger: "返信が遅い",
            reactions: [
              "少し寂しい",
              "でも言わない",
              "その代わり自分の期待値を下げる",
              "慣れると\"感情が冷える\"",
            ],
          },
          {
            trigger: "予定変更された",
            reactions: [
              "表向き「大丈夫だよ」",
              "内側:落ち込む・距離が開く",
              "自分からフォローしない",
            ],
          },
          {
            trigger: "温度差が出た",
            reactions: ["\"引く\"という選択をしがち", "自分を守るための距離取り"],
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
              { speaker: "彼", text: "「今日は会えないかも」", isUser: false },
              {
                speaker: "あなた",
                text: "「うん、大丈夫」（本当は大丈夫じゃない）",
                isUser: true,
              },
              { speaker: "彼", text: "本当に大丈夫だと思う", isUser: false },
              { speaker: "—", text: "すれ違い発生", isUser: false },
              { speaker: "彼", text: "「最近どう？」", isUser: false },
              {
                speaker: "あなた",
                text: "「普通かな」（心ではいろいろ感じてる）",
                isUser: true,
              },
              { speaker: "彼", text: "気持ちを読み取れず困る", isUser: false },
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
            trigger: "突然の温度差",
            reactions: ["心が閉じる", "内側で処理しようとする"],
          },
          {
            trigger: "曖昧な言葉",
            reactions: ["深読み", "沈黙"],
          },
          {
            trigger: "気持ちを求められる",
            reactions: ["急に距離を置く"],
          },
          {
            trigger: "相手の押しが強い",
            reactions: ["防衛本能が働く", "一度引くと戻りにくい"],
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
        text: "あなたは穏やかで静かに恋を育てる。でも相手が一歩近づいた時、心のどこかがざわつく。「近づきすぎると壊れるかも…」。優しさが防衛に変わる瞬間。",
      },
      {
        type: "list",
        items: [
          "あなたは距離を取る",
          "相手から見ると\"急に冷たくなった\"ように見えてしまう",
          "そしてあなたはまた「こんなはずじゃなかった」と自分を責める",
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
          "相手をよく観察する",
          "自分から深く踏み込まない",
          "手を繋がれると心が揺れる",
          "沈黙を気にしない",
          "過剰に甘えたくない",
          "感情が表に出にくい",
          "深い話を求められると戸惑う",
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
          "短文",
          "絵文字少なめ",
          "返信は丁寧",
          "気持ちを言葉にしない",
          "相手の期待値を上げないようにする",
          "自分の話より相手の話を優先",
          "本音や不安を送らない",
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
          items: ["落ち着く", "優しい", "穏やか", "気遣いができる"],
        },
        bad: {
          heading: "誤解されやすい点",
          items: [
            "本音が見えない",
            "気持ちを読めない",
            "距離を縮めづらい",
            "自分に興味がないと誤解される",
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
            category: "自己開示",
            action: "小さな本音を話す練習",
            detail: "極小さな本音から伝える練習",
          },
          {
            num: "②",
            category: "愛着",
            action: "回避傾向の緩和",
            detail: "距離を置く癖に気づき少しずつ踏み込む",
          },
          {
            num: "③",
            category: "感情マネジメント",
            action: "感じ方の整理",
            detail: "感情の揺れを許可する",
          },
          {
            num: "④",
            category: "コミュニケーション",
            action: "境界線の共有",
            detail: "自分の境界線を言葉で伝える",
          },
        ],
        summary: "このステップで\"ゆっくり丁寧に愛を育てる\"関係が実現します。",
      },
    ],
  },
  {
    name: "改善後の未来ストーリー",
    nameEn: "Future Story After Improvement",
    blocks: [
      {
        type: "highlight",
        text: "あなたは\"深く愛せる人\"。心が開いた時のあたたかさは、相手にとって大きな安心と魅力になる。",
      },
      {
        type: "list",
        items: [
          "小さく開示できる",
          "距離が自然に縮まる",
          "誤解が減る",
          "穏やかで安定した恋愛が長続きする",
        ],
      },
      {
        type: "insight",
        label: "リフレクター×防衛型は",
        text: "閉じているようで実は「ゆっくり丁寧に愛を育てたい人」。心を開く練習を進めるにつれ本来の優しさと深い愛がより自然に相手へ届くようになる。",
      },
    ],
  },
  {
    name: "総評",
    nameEn: "Overall Assessment",
    blocks: [
      {
        type: "text",
        text: "シールドリフレクターは、洞察力が高く相手の気持ちに敏感ですが、\"自分の心を守るために距離を置く\"傾向が最も強く出るタイプです。理解力はあるのに、自分の本音を見せる場面では慎重になりすぎて、親密さの前で立ち止まりやすい特徴があります。小さな感情や弱さを安全な形で共有できるようになるほど、壁がゆっくり溶け、あなたの繊細さと優しさが自然に伝わる深い関係へと育っていきます。",
      },
    ],
  },
];
