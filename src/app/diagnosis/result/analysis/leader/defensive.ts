import type { AnalysisItem } from "../types";

export const LEADER_DEFENSIVE: AnalysisItem[] = [
  {
    name: "コア特徴",
    nameEn: "Core Characteristics",
    blocks: [
      {
        type: "highlight",
        text: "「人を導く強さ」×「傷つきたくない防御」——リーダーとしての優秀さを持ちながら、感情面では\"自己防衛フィルター\"が分厚いタイプ",
      },
      {
        type: "section",
        emoji: "🔍",
        heading: "リーダー型の強み",
        items: [
          "判断力",
          "行動力",
          "責任感",
          "冷静さ",
          "決断力",
        ],
        variant: "positive" as const,
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "防衛型の特徴",
        items: [
          "感情表現は控えめ",
          "距離の詰め方は慎重",
          "本音は見せない",
          "弱さは隠す",
          "頼ることが苦手",
        ],
      },
      {
        type: "insight",
        label: "本質",
        text: "恋愛が進むほど距離を置きやすい・本音を隠す・沈黙が増えるという「静かな後退」が起き、\"話し合いができないままフェードアウト\"になりやすいタイプ。",
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
          "相手をリードできる",
          "誠実で落ち着いている",
          "主導権を自然に握る",
          "問題を冷静に処理できる",
          "距離が縮まると急に慎重になる",
          "自分の領域を大事にする",
          "本音を見せるのが遅い",
          "相手は「気持ちが読めない」と感じやすい",
        ],
      },
      {
        type: "insight",
        label: "傾向",
        text: "リーダー型の頼もしさはあるが、恋愛では\"ミステリアス\"になりがち。",
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
          "弱みを隠す",
          "感情を論理で処理する",
          "本音を言う前に状況分析する",
          "頼らず、自分で抱え込む",
          "曖昧な関係を続けがち",
          "相手の気持ちを見極めてから動く",
          "温度差を最小化しようとする",
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
        emoji: "⚠️",
        heading: "根底にある信念",
        highlightText: "「弱みを見せる＝主導権を失う」「感情は扱いにくいもの」",
        items: [
          "甘えたら裏切られた経験",
          "感情を出したら否定された経験",
          "弱さを見せて損をした経験",
          "家庭環境が緊張感のあるものだった",
        ],
      },
      {
        type: "insight",
        label: "構造",
        text: "恋愛では\"傷つかないように距離をコントロールする\"＝防衛型の典型パターンが強く出る。",
      },
    ],
  },
  {
    name: "恋愛における深層心理",
    nameEn: "Your Love Psychology",
    blocks: [
      {
        type: "section",
        emoji: "💭",
        heading: "本当の欲求 vs 恐れ",
        items: [
          "信頼したい・寄りかかりたい・甘えたい・安心して弱さを見せたい",
          "「主導権が奪われる」「弱みを握られる」「相手に依存してしまう」という恐れ",
          "\"一歩引いた距離\"をキープしてしまう",
        ],
        summary: "誠実だけど、深さには時間がかかる恋愛スタイルになる。",
        variant: "neutral" as const,
      },
      {
        type: "insight",
        label: "矛盾",
        text: "本当は愛されたい・理解されたい・寄りかかりたい・誰かに心を開きたいと思っているのに、傷つくことへの恐れがそれを阻む。",
      },
    ],
  },
  {
    name: "惹かれやすい男性タイプ",
    nameEn: "Your Attraction Type (Men)",
    blocks: [
      {
        type: "section",
        emoji: "💕",
        heading: "惹かれやすいタイプ",
        items: [
          "尊敬できる人",
          "自立している人",
          "穏やかで誠実",
          "圧をかけてこない男性",
          "境界線を守れる男性",
        ],
        variant: "positive" as const,
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "要注意タイプ",
        items: [
          "急に距離を詰める人",
          "感情的に押してくる人",
          "依存体質",
          "感情表現が強いタイプ（あなたの\"防衛スイッチ\"を入れてしまう）",
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
          "相手「もっと気持ちを見せてほしい」",
          "あなた（心）「見せたい気持ちはある」→（行動）「でも怖い」→後退",
          "相手「距離感じる…」→あなた「どうして？」（本音：困惑）",
        ],
      },
      {
        type: "insight",
        label: "パターン",
        text: "この\"慎重さ×誤解\"が摩擦を生む。",
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
              "表向きは明るいが、心の奥では傷つきを恐れて距離を縮められない",
              "彼に合わせて動きながらも、本音を見せるのは避ける",
              "\"強い私を見せなきゃ\"が働き、弱さが隠され続ける",
            ],
          },
          {
            emoji: "🔹",
            label: "長期（6ヶ月〜1年以降）",
            items: [
              "常に\"強い自分を演じる恋愛\"が続き、内面的な孤独が深まる",
              "パートナーが「壁がある」「本音が見えない」と感じて距離が空く",
              "最終的に心を開けない恋愛が続き\"親密さが怖いOS\"が固定化する",
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
              "冷静に受け止める",
              "ただし少しだけ心が閉じる",
              "「追う必要はない」と切り替える",
            ],
          },
          {
            trigger: "LINEが素っ気ない",
            reactions: [
              "\"距離調整モード\"に入る",
              "自分も温度を下げてバランスを取る",
            ],
          },
          {
            trigger: "デートが曖昧",
            reactions: [
              "「忙しいんだろうな」と合理化",
              "ただし内心は少し萎える",
            ],
          },
          {
            trigger: "相手が感情的になる",
            reactions: [
              "一気に冷静モード",
              "感情を抑えて処理しようとする",
              "その\"冷静さ\"が相手を不安にさせやすい",
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
              { speaker: "彼", text: "もっと気持ちを言ってほしい", isUser: false },
              { speaker: "あなた", text: "言ってるつもりだけど？（本音：どう見せればいいのか分からない）", isUser: true },
              { speaker: "彼", text: "最近距離感じるよ", isUser: false },
              { speaker: "あなた", text: "そんなことないよ（本音：距離は保って安心したい）", isUser: true },
              { speaker: "彼", text: "この関係どうしたい？", isUser: false },
              { speaker: "あなた", text: "ゆっくりでいいんじゃない？（本音：焦ると崩れるのが怖い）", isUser: true },
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
            trigger: "自分への過度な依存",
            reactions: ["重いと感じる", "距離を取る"],
          },
          {
            trigger: "感情的な圧",
            reactions: ["一気にシャットダウン", "対話を避ける（防衛型の典型）"],
          },
          {
            trigger: "スピードの速い恋",
            reactions: ["主導権を握る or 距離を置く"],
          },
          {
            trigger: "相手の感情爆発",
            reactions: ["表情が消える", "冷静になりすぎて誤解される"],
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
        text: "あなたは彼からのメッセージを読み、「また後で返そう」と思った。しかし彼は「なんで読んで返さないの？」と怒り、不安をぶつけてきた。",
      },
      {
        type: "list",
        items: [
          "あなたは混乱し冷静に言う「そんなに責められても困る」",
          "彼は「冷たい」と感じ、距離を取る",
          "あなたは「どうしてこんなに誤解されるんだろう…」と静かに傷つく",
          "防衛型の\"距離保持\"と反応型の\"感情圧\"が衝突した例",
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
          "落ち着いていて安心感がある",
          "会話のリードが得意",
          "相手を尊重",
          "甘えられるのは得意",
          "甘えるのは苦手",
          "距離が縮まるほど慎重になる",
          "思っているほど感情は表に出ない",
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
          "短く、簡潔",
          "必要以上の温度を出さない",
          "既読スルーは悪意なし",
          "明確・論理的",
          "長文はほぼ無い",
          "深い話題は対面でしたいタイプ",
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
            "落ち着いている",
            "頼れる",
            "大人っぽい",
            "ペースが安定",
            "感情に振り回されない",
          ],
        },
        bad: {
          heading: "誤解されやすい点",
          items: [
            "気持ちが見えにくい",
            "優しいのに距離がある",
            "本音に触れさせてくれない",
            "興味がないように見える",
            "何を考えているか分からない",
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
            num: "01",
            category: "自己認識",
            action: "境界線と恐れの可視化",
            detail: "自分がどこに壁を作っているか認識する",
          },
          {
            num: "02",
            category: "コミュニケーション",
            action: "感情の言語化",
            detail: "小さな感情を言葉にする練習",
          },
          {
            num: "03",
            category: "愛着",
            action: "回避パターンの修正",
            detail: "距離を置く癖に気づき少しずつ踏み込む",
          },
          {
            num: "04",
            category: "感情マネジメント",
            action: "抑制→共有へ",
            detail: "感情を抑えるのではなく共有する習慣を育てる",
          },
        ],
        summary: "このステップで冷静さと誠実さが\"深い愛の土台\"になる関係が実現します。",
      },
    ],
  },
  {
    name: "改善後の未来ストーリー",
    nameEn: "Future Story After Improvement",
    blocks: [
      {
        type: "highlight",
        text: "あなたが少しずつでも「弱さ」→「信頼の証」と認識を変えられると、",
      },
      {
        type: "list",
        items: [
          "相手の不安が激減",
          "あなた自身も負担が軽くなる",
          "本音の交流が増える",
          "衝突ゼロの\"静かな愛\"から\"深く持続する愛\"へ進化する",
        ],
      },
      {
        type: "insight",
        label: "未来像",
        text: "リーダー型×防衛型は「最も安定したパートナーシップを築ける潜在力を持つタイプ」。あなたの冷静さと誠実さは\"深い愛の土台\"になる。",
      },
    ],
  },
  {
    name: "総評",
    nameEn: "Overall Assessment",
    blocks: [
      {
        type: "text",
        text: "シールドリーダーは、明るさ・誠実さ・頼もしさを持つ一方で、内側では\"弱さを見せるのが怖い\"という繊細さを抱えるタイプです。表向きは自然体でも、親密になりそうな場面ほど距離をとりやすく、相手に「壁がある」と思わせてしまうことがあるのが特徴。本音や弱さを一部だけでも共有できるようになると、あなたの温かさがより伝わり、深い信頼と安心が生まれやすくなります。",
      },
    ],
  },
];
