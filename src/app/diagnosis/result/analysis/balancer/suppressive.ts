import type { AnalysisItem } from "../types";

export const BALANCER_SUPPRESSIVE: AnalysisItem[] = [
  {
    name: "コア特徴",
    nameEn: "Core Characteristics",
    blocks: [
      {
        type: "highlight",
        text: "バランサー特有の「穏やかさ」「調和重視」「安定志向」を持ちながら、そこに\"感情の抑制\"\"距離の維持\"が強く働くタイプ。",
      },
      {
        type: "section",
        emoji: "💫",
        heading: "恋愛では",
        items: [
          "自分の気持ちを抑えてしまう",
          "衝突を避ける",
          "自分より相手を優先しがち",
          "言いたいことが半分も言えない",
        ],
        variant: "neutral",
      },
      {
        type: "insight",
        label: "外から見ると\"大人で落ち着いている\"が、",
        text: "内面では「本音が置き去りになるパターン」が溜まりやすい。",
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
          "相手の期待に自然と合わせてしまう",
          "言い返さずに飲み込んでしまう",
          "問題があっても「今は言わない方がいい」と判断",
          "距離感は保てるが深まりに時間がかかる",
          "自分の感情に鈍くなる",
          "関係が停滞しやすいが本人も理由が分からない",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "関係は安定するが、温度が低く\"静かな関係\"になりやすい。",
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
          "「言わないことで平和になる」と思い込む",
          "相手の気持ちを優先し自分のニーズは後回し",
          "不満は溜めていき限界が近づくと突然距離を取る",
          "感情が分からなくなり\"好きかどうか\"の判断が鈍る",
          "相手に合わせすぎて自分の意志が見えなくなる",
          "本音を求められた時言語化が苦手で詰まりやすい",
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
        heading: "抑制型バランサーの内側には",
        highlightText: "「本音を出すと関係が乱れる」という深い恐れがある。",
        items: [
          "①過去の\"衝突の痛み\" - 言ったら嫌われた／関係が壊れた経験",
          "②\"優しさのOS\"が強すぎる - 相手の負担にさせたくない・空気を乱したくない・感情は自分で処理するべきという思い込み型の優しさ",
          "結果: 感情の抑圧→温度の低下→距離の固定化という構造になりやすい",
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
        heading: "\"本音を出す＝相手を困らせる\"という感覚を持ちやすい。しかし本当は",
        items: [
          "甘えたい",
          "気持ちを分かってほしい",
          "頼りたい",
          "安心したい",
        ],
        summary: "という\"内側の欲求\"が存在。",
        variant: "positive",
      },
      {
        type: "insight",
        label: "満たされないまま関係が進むと",
        text: "静かな孤独感を抱えやすい。",
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
          "穏やかで優しい男性",
          "自分のペースで関わってくれる男性",
          "言葉より\"行動\"で示してくれるタイプ",
          "落ち着いた大人の男性",
        ],
        variant: "positive",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "注意",
        items: [
          "同じく\"抑制傾向\"の男性を選ぶと→お互い本音が言えない→誤解が増える→距離が縮まらないという\"察する恋愛の負のスパイラル\"に入りやすい",
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
          "不満や違和感を言えず心の距離が静かに広がる",
          "限界が来た時に突然「冷めた」と感じる",
          "相手からすると\"急に離れたように見える\"",
          "お互いが優しすぎて深まりが止まる",
          "気持ちの温度が下がっていく",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "衝突はなく、\"静かなフェードアウト\"型で関係が崩れやすい。",
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
              "自己管理が強すぎて恋愛の楽しさより「正しくあろう」が勝ち始める。",
              "彼のちょっとした行動にも\"評価・採点\"が入ってしまう。",
              "完璧さを求めて柔軟性が落ちデートが堅さで埋もれる。",
            ],
          },
          {
            emoji: "🔹",
            label: "長期",
            items: [
              "感情を出さない癖が強まり相手にとって\"何を考えてるかわからない人\"になる。",
              "彼が距離を置き始めそれを「やっぱり私は選ばれない」と誤解して自己否定へ。",
              "自分を抑え続けた反動で突然離れるフェードアウトの行動が出やすい。",
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
            reactions: ["「忙しいのかな…」と自分を納得させる", "不安は感じるが\"言わない\"選択"],
          },
          {
            trigger: "返信が遅い",
            reactions: ["表面上は落ち着いているが心の中には静かな違和感", "しかし表現はしない"],
          },
          {
            trigger: "予定が曖昧",
            reactions: ["モヤッとしながらも飲み込む", "自分の希望より\"相手優先\""],
          },
          {
            trigger: "デート後に素っ気ない",
            reactions: ["気になるけど聞かない", "次会うまで「その話題に触れない」"],
          },
          {
            trigger: "意見の違い",
            reactions: ["衝突を恐れて\"同意\"する", "しかし心の中には不満が残る"],
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
              { speaker: "彼", text: "「ごめん、今日は疲れてて…」", isUser: false },
              { speaker: "あなた", text: "「そっか…ゆっくり休んでね（本当は寂しい）」", isUser: true },
            ],
            summary: "内側：「迷惑かけたくないし…言わない方がいいよね」あなたは\"平和\"を守るが、彼は\"本当に大丈夫なのかな？\"と不安になる。お互い遠慮が積み重なりすれ違いへ。",
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
            trigger: "関係の温度差",
            reactions: ["不安を感じるが表現せず飲み込む"],
          },
          {
            trigger: "期待が叶わない瞬間",
            reactions: ["\"仕方ない\"で処理", "しかし内側では小さな失望"],
          },
          {
            trigger: "感情的な場面",
            reactions: ["\"感情＝迷惑\"と感じ距離を取る"],
          },
          {
            trigger: "自分が疲れている時",
            reactions: ["「弱さは見せられない」と思い込む"],
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
        text: "相手に合わせ続け、本音が引き返せないほど溜まった時——突然、感情が冷めたように感じる。",
      },
      {
        type: "list",
        items: [
          "意見を求められても「任せるよ」「どっちでも大丈夫」と答えることが多い。しかし本当は\"行きたい場所\"\"してほしいこと\"\"気にしていること\"がある。",
          "相手からすると「急に距離を置かれた」と驚くが、あなたにとっては「ずっと言えなかったことの積み重ね」だった。",
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
          "相手の話を優先しすぎる",
          "自分の意見は控えめ",
          "行き先や予定決めは相手任せ",
          "些細な違和感を飲み込む",
          "\"気を使う\"動きが多い",
          "相手のテンションや機嫌を読みすぎる",
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
          "短めで当たり障りのない文章",
          "質問は少なめ",
          "スタンプ多め",
          "ネガティブを隠す",
          "本音は見えない",
          "相手に温度を合わせやすい",
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
          items: ["優しい", "落ち着いてる", "大人", "癒し系", "聞き上手"],
        },
        bad: {
          heading: "誤解されやすい点",
          items: [
            "何を考えているか分からない",
            "本当に好きなのか不安になる",
            "頼ってほしいのに距離がある",
            "気を使わせている気がする",
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
            action: "\"言わない癖\"の理解",
            detail: "自分が本音を抑える癖があることを認識し、パターンに気づく力を育てます。",
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
            action: "抑圧→共有へ",
            detail: "感情を抑え込むのではなく、共有する選択肢を育てます。",
          },
          {
            num: "④",
            category: "愛着",
            action: "\"頼る＝迷惑\"の再定義",
            detail: "頼ることは迷惑ではなく信頼の表現だと再定義していきます。",
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
        text: "あなたが少しずつ\"本音をやわらかく伝える習慣\"を身に付けると…",
      },
      {
        type: "list",
        items: [
          "関係の温度が自然に上がる",
          "相手があなたにさらに安心する",
          "優しさが\"一方通行\"ではなく\"循環\"になる",
          "深まりがスムーズに起こる",
          "沈黙の平和ではなく\"感情のある平和\"へ進化する",
        ],
      },
      {
        type: "insight",
        label: "あなたの穏やかさは、",
        text: "本音と共存した時、最強の愛の土台になる。",
      },
    ],
  },
  {
    name: "総評",
    nameEn: "Overall Assessment",
    blocks: [
      {
        type: "text",
        text: "リストレインドバランサーは、穏やかさと気遣いに優れた安定タイプですが、「自分より相手を優先する」が習慣化し、静かな我慢が積もりやすい傾向があります。本音を抑えるほど\"距離は近いのに深まらない関係\"が続きやすいため、感情の小出しが鍵に。弱さや要望を少しずつ伝えられるようになると、関係は一気に深度を増し、愛情循環が豊かに育ちます。",
      },
    ],
  },
];
