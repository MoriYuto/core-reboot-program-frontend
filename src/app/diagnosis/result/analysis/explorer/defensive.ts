import type { AnalysisItem } from "../types";

export const EXPLORER_DEFENSIVE: AnalysisItem[] = [
  {
    name: "コア特徴",
    nameEn: "Core Characteristics",
    blocks: [
      {
        type: "highlight",
        text: "エクスプローラー本来の自由・好奇心・社交性・刺激追求・行動力に防衛型の感情抑圧・距離保持・心を閉じる癖が掛け合わさる。",
      },
      {
        type: "section",
        emoji: "✨",
        heading: "エクスプローラー型×防衛型",
        items: [
          "明るく話しやすく人当たりは抜群",
          "しかし深い関係になるほど「急に壁」が出てくる",
          "近づきたいのに近づかれすぎると逃げる",
          "感情の取り扱いが苦手で「言わない」「閉じる」が基本",
          "恋愛がある程度進むと「急に冷めたように見える」",
        ],
        summary: "自分では「嫌いになったわけじゃない」と思っていても相手からは「急に距離を取られた」と見えてしまう。",
        variant: "neutral",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "防衛型エクスプローラーの特徴",
        items: [
          "深い関係になるほど壁が強くなる",
          "感情を抑えて距離を保つ",
          "心を閉じやすい",
        ],
      },
      {
        type: "insight",
        label: "結果",
        text: "明るさと防衛心が同居し、相手を混乱させやすい傾向がある。",
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
          "最初は軽やかでフットワークが軽い",
          "浅めの関係は得意",
          "しかし深く入られると逃げる",
          "本音を見せるのに時間がかかる",
          "自分の感情に疎く誤解されやすい",
          "相手から追われる恋になりやすい",
        ],
      },
      {
        type: "insight",
        label: "",
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
          "気持ちを聞かれると沈黙してしまう",
          "不安・怒り・寂しさを隠すクセがある",
          "自分のペースが乱れると一気にシャットダウン",
          "「考えたい」と距離を置きやすい",
          "SNSは更新するのに相手には返信しない",
          "予定が詰まると人間関係を切る",
          "悩みは1人で抱え込む",
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
        heading: "静かな防衛OS",
        highlightText: "「弱さを見せたら否定される」「他人に依存したら自由を失う」「感情を出すと面倒になる」「自分を守るには距離が必要」",
        items: [
          "行動力や社交性と矛盾して見えるが実は繊細で傷つきやすい性質を持っている",
        ],
      },
      {
        type: "insight",
        label: "結果",
        text: "表面は明るくても、心の奥では距離を保つことで自分を守ろうとしている。",
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
          "愛されたい",
          "認められたい",
          "理解されたい",
        ],
        summary: "と願っている。",
        variant: "positive",
      },
      {
        type: "insight",
        label: "しかし",
        text: "深く踏み込まれるのが怖い・弱みを見せるのが怖い。恋愛が一定の深さを超えると「守りのスイッチ」が入る。",
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
          "優しくて圧をかけない人",
          "自由を尊重してくれる人",
          "明るくて軽やかな人",
          "会話が自然にできる人",
        ],
        variant: "positive",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "注意",
        items: [
          "しつこい・依存度が高い・感情を詰めてくる・「答えを迫ってくる」タイプは苦手",
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
          "本音を聞かれると距離を置く",
          "感情を出さないため相手が不安になる",
          "「冷めた？」と誤解される",
          "シャットダウン（既読スルー・音信不通）が起きる",
          "関係が進むほど壁が強くなる",
        ],
      },
      {
        type: "insight",
        label: "",
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
              "積極性と防衛心が同時に働き「熱いのに慎重」という矛盾が出る",
              "急に距離を詰めたかと思うと急に引く",
              "相手が困惑しやすい振る舞いになる",
            ],
          },
          {
            emoji: "🔹",
            label: "長期",
            items: [
              "親密さの手前で停滞し深い関係が築けない",
              "自信はあるのに「傷つく恐れ」が強まり恋愛にブレーキがかかる",
              "恋愛を軽く見られやすいor続かないパターンが習慣化",
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
            trigger: "既読スルーされた",
            reactions: [
              "「嫌われたわけじゃない」…ただ「気持ちが重い」",
              "心が閉じて止まる",
            ],
          },
          {
            trigger: "詰められる/問い詰められる",
            reactions: [
              "逃避スイッチが入る",
              "距離を置きたくなる",
            ],
          },
          {
            trigger: "愛情表現を求められる",
            reactions: [
              "「負担」と感じる",
              "愛がないのではなく言語化が難しい",
            ],
          },
          {
            trigger: "深い話を求められる",
            reactions: [
              "内心焦る",
              "自己開示が苦手で黙ってしまう",
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
              {
                speaker: "彼",
                text: "「最近どう思ってるの？」",
                isUser: false,
              },
              {
                speaker: "あなた",
                text: "「…うまく言えない」",
                isUser: true,
              },
              {
                speaker: "彼",
                text: "「本音を聞きたいんだけど」",
                isUser: false,
              },
              {
                speaker: "あなた",
                text: "「ちょっと考えたい」",
                isUser: true,
              },
            ],
            summary: "あなたは「気持ちを整理する時間」が必要だが彼は「拒絶された」と感じる",
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
            trigger: "深い話の要求",
            reactions: ["シャットダウン"],
          },
          {
            trigger: "詰められる",
            reactions: ["逃避"],
          },
          {
            trigger: "自由が奪われる感覚",
            reactions: ["音信不通に"],
          },
          {
            trigger: "感情を出す必要",
            reactions: ["スイッチが切れる"],
          },
          {
            trigger: "相手の焦り",
            reactions: ["距離を置く"],
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
        text: "軽やかにスタート→関係が深まる→相手が本音を求める→防衛スイッチが入り距離が開く→相手が追う→余計に閉じる。",
      },
      {
        type: "list",
        items: [
          "誤解が蓄積",
          "破局へ",
          "典型的「自由と防衛のループ」",
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
          "雰囲気作りは上手い",
          "外向的に振る舞う",
          "悩みは話さない",
          "考えていることが読みにくい",
          "恋愛感情は行動より態度に出る",
          "深い話になると曖昧な笑顔でごまかす",
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
          "軽快",
          "返信は波がある",
          "気持ちが重くなると返信が止まる",
          "本音はLINEでは言わない",
          "スタンプ多め",
          "既読スルーが発生しやすい",
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
            "明るくて魅力的",
            "一緒にいて楽しい",
            "強依存しないからラク",
            "初期は距離感がちょうど良い",
          ],
        },
        bad: {
          heading: "誤解されやすい点",
          items: [
            "本音が分からない",
            "急に壁を感じる",
            "深い関係に進めない",
            "感情が見えにくい",
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
            action: "防衛スイッチを理解",
            detail: "自分の防衛パターンに気づく",
          },
          {
            num: "②",
            category: "愛着",
            action: "安定型に寄せる",
            detail: "安定した愛着パターンへ移行する",
          },
          {
            num: "③",
            category: "コミュニケーション",
            action: "小さな自己開示",
            detail: "小さな本音から伝える練習",
          },
          {
            num: "④",
            category: "感情マネジメント",
            action: "感情を閉じない",
            detail: "感情を安全に開く力を育てる",
          },
        ],
        summary: "このステップで「自由×つながり」の両立が可能になります。",
      },
    ],
  },
  {
    name: "改善後の未来ストーリー",
    nameEn: "Future Story After Improvement",
    blocks: [
      {
        type: "highlight",
        text: "エクスプローラー型×防衛型は「明るさの裏に繊細さを持つ」魅力タイプ。",
      },
      {
        type: "list",
        items: [
          "本音が少しずつ言えるようになる",
          "シャットダウン頻度が激減",
          "相手の不安が減り関係が安定",
          "「自由×つながり」の両立が可能に",
          "あなたの軽やかさがそのまま魅力として残る",
          "深い愛情を築けるようになる",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "壁が薄くなるほどあなたの明るさが深い安心感として届く恋愛が実現する。",
      },
    ],
  },
  {
    name: "総評",
    nameEn: "Overall Assessment",
    blocks: [
      {
        type: "text",
        text: "シャットダウンエクスプローラーは、明るさ・行動力・魅力を持ちながら、恋愛になると「踏み込まれる怖さ」が同時に強く出るタイプです。距離を詰める勢いと、心を守る慎重さが交互に現れ、相手を混乱させやすい傾向があります。弱さや不安を安全に共有できるようになると、勢いに安定感が加わり、「近づける安心×惹きつける魅力」を両立した深い関係へと育っていきます。",
      },
    ],
  },
];
