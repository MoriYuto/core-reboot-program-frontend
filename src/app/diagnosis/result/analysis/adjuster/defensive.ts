import type { AnalysisItem } from "../types";

export const ADJUSTER_DEFENSIVE: AnalysisItem[] = [
  {
    name: "コア特徴",
    nameEn: "Core Characteristics",
    blocks: [
      {
        type: "highlight",
        text: "アジャスター型の\"相手に合わせる優しさ\"と防衛型の\"心を守るために距離を置くクセ\"が同居。基本は穏やか・優しい・でも傷つくのが怖い・深くなると距離が出る・言いたいことを飲み込みやすい・甘えたいけど自分から近づけない。",
      },
      {
        type: "section",
        emoji: "🛡️",
        heading: "「関係を壊したくない」と思って抑えるが",
        items: [
          "抑えすぎて\"距離ができる恋\"になりがち",
        ],
        variant: "neutral",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "アジャスター×防衛型の特徴",
        items: [
          "相手に合わせる優しさと距離を置く防衛が同時に働く",
          "関係を壊したくないがために本音を抑えすぎる",
        ],
      },
      {
        type: "insight",
        label: "結果",
        text: "\"優しさ\"と\"距離\"が同居し、深い関係になりにくい傾向。",
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
          "自分より相手を優先する",
          "本音は隠して調整役になる",
          "深い関係になると急に慎重になり距離が出る",
          "傷つきたくない気持ちが強い",
          "優しいけれど\"心の入口\"が固い",
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
          "自分から距離を置くことで心を守る",
          "恋愛が始まっても「依存したくない」が強い",
          "気になることがあっても言わない",
          "問題が起きても話し合いを避けがち",
          "「嫌われたくない」が先に立つ",
          "波風を立てないように極端に合わせる",
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
        heading: "\"優しさ\"と\"自分を守る鎧\"の二重構造",
        highlightText: "「近づきたいけど怖い」「本音はあるけど隠す」。",
        items: [
          "アジャスターの「合わせる力」と防衛型の「距離を取る防御反応」が合わさる",
          "表面: 落ち着いて優しい → 内面: 感情の露出が怖い → 結果: 距離が出る",
        ],
      },
      {
        type: "insight",
        label: "構造",
        text: "優しさで相手に寄り添いながら、心は一定の距離を保とうとする。",
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
        heading: "本当は「大切にされたい」「理解されたい」「甘えたい」",
        items: [
          "頼りすぎて重く思われたくない",
          "拒絶が怖い",
          "弱さを見せると嫌われると思う",
          "近づきたい → でも怖い → 距離が出る",
        ],
        summary: "\"引力と斥力の恋愛OS\"。",
        variant: "neutral",
      },
      {
        type: "insight",
        label: "本質は",
        text: "温かい欲求が強い一方で、傷つく恐怖が距離を生む。",
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
          "優しい",
          "安心感がある",
          "穏やか",
          "しつこくない男性",
          "自立している男性",
        ],
        variant: "positive",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "注意",
        items: [
          "感情表現が薄い男性と組むと「距離×距離」で冷めやすい",
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
          "相手に合わせすぎて疲れる",
          "言わないまま距離だけ開く",
          "相手が「何を考えてるのか分からない」と困る",
          "衝突を避けるために大事なことを飲み込む",
          "浅い関係で終わりやすい",
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
              "相手合わせと防衛心が同時に働き言動がちぐはぐになる",
              "近づきたいのに心を開くのは怖いという矛盾が出る",
              "明るく振る舞いながら内側では緊張が続く",
            ],
          },
          {
            emoji: "🔹",
            label: "長期",
            items: [
              "親密さの手前で止まり続け関係が深まらない",
              "距離調整ばかりに意識が向き自分の気持ちが二の次になる",
              "\"浅い関係は作れるが深い関係が作れないOS\"が固定化",
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
              "「追うのは怖い」",
              "何も言わずに静かに距離を空ける",
            ],
          },
          {
            trigger: "返信の遅さ",
            reactions: [
              "「気にしないフリ」をする",
              "実は少し気になってるが言わない",
            ],
          },
          {
            trigger: "温度差",
            reactions: [
              "近づくのも怒るのも聞くのも怖い",
              "とりあえず放置して様子を見る",
            ],
          },
          {
            trigger: "意見の違い",
            reactions: [
              "波風を立てたくない",
              "「私が折れればいいか」と譲る",
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
                text: "「最近忙しくて…」",
                isUser: false,
              },
              {
                speaker: "あなた",
                text: "「そっか」（気になるけど聞けない）",
                isUser: true,
              },
              {
                speaker: "彼",
                text: "「何か言いたいことある？」",
                isUser: false,
              },
              {
                speaker: "あなた",
                text: "「ううん、大丈夫だよ」（内心は気になる→でも本音を言うと関係が壊れそう→結果的に距離が開く）",
                isUser: true,
              },
            ],
            summary: "\"壊したくない\"が\"距離を作る\"パターン",
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
            trigger: "彼の温度差",
            reactions: ["静かに距離を置く"],
          },
          {
            trigger: "返信の遅さ",
            reactions: ["気にするが何も言わない"],
          },
          {
            trigger: "曖昧な態度",
            reactions: ["深読みするが聞けない"],
          },
          {
            trigger: "衝突",
            reactions: ["回避"],
          },
          {
            trigger: "弱さを見せる場面",
            reactions: ["緊張して隠す"],
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
        text: "優しさを優先して譲り続ける→小さな不満が溜まる→でも衝突が怖い→伝えられない→距離が開く→「最近冷たくない？」と彼に言われる。",
      },
      {
        type: "list",
        items: [
          "本当の本音を言えないまま別れる",
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
          "「やりたいこと」を隠す",
          "自分の感情を抑える",
          "沈黙でも本音は言わない",
          "優しい時間には強い満足感",
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
          "必要以上に重くならないように調整",
          "既読スルーにも無反応（実は気にしている）",
          "本音が出ない",
          "気を遣った文が多い",
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
            "落ち着いている",
            "一緒にいて安心",
            "気遣いが神レベル",
          ],
        },
        bad: {
          heading: "誤解されやすい点",
          items: [
            "本音が分からない",
            "距離が読めない",
            "深い関係に進みにくい",
            "\"気持ちが見えない\"と誤解されやすい",
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
            category: "コミュニケーション",
            action: "本音の伝え方",
            detail: "小さな本音を伝える力を育てる",
          },
          {
            num: "②",
            category: "愛着",
            action: "距離の恐怖を緩める",
            detail: "安全に近づく感覚を育てる",
          },
          {
            num: "③",
            category: "自己認識",
            action: "自分を尊重する感覚",
            detail: "自己肯定感を高める",
          },
          {
            num: "④",
            category: "感情マネジメント",
            action: "抑圧しない練習",
            detail: "感情を安全に開く力を育てる",
          },
        ],
        summary: "このステップで\"優しさ×本音\"が合わさって温度ある関係ができます。",
      },
    ],
  },
  {
    name: "改善後の未来ストーリー",
    nameEn: "Future Story After Improvement",
    blocks: [
      {
        type: "highlight",
        text: "アジャスター型×防衛型は\"優しさの裏に繊細さを持つ\"タイプ。",
      },
      {
        type: "list",
        items: [
          "本音を穏やかに言えるようになる",
          "相手と深い関係性を築ける",
          "「安心の壁」が少しずつ溶けていく",
          "男性から「話してくれて嬉しい」「近くなれた」と言われる",
          "優しさ×本音が合わさって温度ある関係ができる",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "壁が薄くなるほど優しさが温かさとして届き最も深い信頼関係が築ける。",
      },
    ],
  },
  {
    name: "総評",
    nameEn: "Overall Assessment",
    blocks: [
      {
        type: "text",
        text: "シールドアジャスターは、優しさと調整力を持ちながら、\"傷つかないために本音を隠す\"傾向が最も強く出るタイプです。相手に合わせながらも距離を保とうとするため、関係が深まりきらず停滞しやすい特徴があります。弱さや不安を小さく共有できるようになると、あなたの優しさが一方通行ではなく相手に温かく届き、\"寄り添いながらも安心して近づける関係\"へと静かに進化していきます。",
      },
    ],
  },
];
