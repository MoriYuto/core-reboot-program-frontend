import type { AnalysisItem } from "../types";

export const ADJUSTER_SUPPRESSIVE: AnalysisItem[] = [
  {
    name: "コア特徴",
    nameEn: "Core Characteristics",
    blocks: [
      {
        type: "highlight",
        text: "「衝突を避け優しさで調整し静かに自分を後回しにする」タイプ。感情はコントロールできるが本音を言語化する力が弱く\"沈黙の自己犠牲\"が起こりやすい。",
      },
      {
        type: "section",
        emoji: "✨",
        heading: "特徴",
        items: [
          "相手に合わせすぎる",
          "感情は抑えられる",
          "でも言葉にできず溜め込む",
          "すれ違いは\"静かに大きく\"なっていく",
          "心の距離がゆっくり広がりやすい",
        ],
        variant: "neutral",
      },
      {
        type: "list",
        items: [
          "優しさと理性のバランスは良い",
          "自己表現の弱さが恋愛を止めてしまう",
        ],
      },
      {
        type: "insight",
        label: "結果",
        text: "静かな自己犠牲が積もり、関係が一方通行になりやすい。",
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
          "「言わなくて大丈夫」で済ませる",
          "自分の気持ちより相手の状況を優先",
          "衝突回避のための\"静かな我慢\"",
          "相手が楽な恋愛になりすぎてあなたが疲弊",
          "察してほしい気持ちが強くなる",
          "温度差に気づいても言わない",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "我慢が積もるほど静かに心が離れていく恋愛になりやすい。",
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
          "本音を飲み込む",
          "相手に合わせすぎる",
          "不満があっても平気なふりをする",
          "相手のペースに巻き込まれやすい",
          "自分の感情を後回しにする",
          "「なんでもいいよ」と言いがち",
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
        heading: "アジャスター型×抑制型の信念",
        highlightText: "\"迷惑をかけたくない\"・\"嫌われたくない\"・\"感情を出すと重いと思われる\"という愛の不安が隠れている。",
        items: [
          "感情を抑える",
          "言語化しない",
          "自然消滅を待つ",
          "\"静かな自己保全OS\"が発動しやすい",
        ],
      },
      {
        type: "insight",
        label: "結果",
        text: "自己犠牲の優しさが先に出て、本音が伝わりにくくなる。",
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
          "頼りたい",
          "甘えたい",
          "聞いてほしい",
        ],
        summary: "という欲求がある。",
        variant: "positive",
      },
      {
        type: "insight",
        label: "しかし",
        text: "「相手に負担をかけるぐらいなら言わない方がいい」という自己犠牲の優しさが先に出てしまう。相手には\"何を考えているか分からない人\"と見られやすい。",
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
          "誠実",
          "主導してくれるタイプ",
          "優しさのある男性",
          "落ち着いた大人の男性",
        ],
        variant: "positive",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "注意",
        items: [
          "\"押しが強くて自己中心的な男性\"に飲まれやすい側面も",
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
          "静かな我慢→小さな距離→大きな温度差",
          "「大丈夫」が嘘になる",
          "気持ちが冷めたように見えてしまう",
          "相手が気づく頃には心が離れている",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "言わないことで関係が静かに冷えていく。",
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
              "自分の気持ちを抑えながら相手に合わせ疲労が溜まりやすい",
              "本音より\"正しく振る舞う\"ことを優先してしまう",
              "表面的にはうまくいくのに心は満たされない",
            ],
          },
          {
            emoji: "🔹",
            label: "長期",
            items: [
              "本音を抑える癖が固定化し恋愛が\"義務的な関係\"に見え始める",
              "相手基準の恋愛が続き自己肯定感が下がる",
              "感情が枯れて急に距離を置きたくなる",
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
              "「忙しいんだろう」で一旦飲み込む",
              "でも少し不安",
              "しかし聞けない",
              "溜まっていく",
            ],
          },
          {
            trigger: "予定変更",
            reactions: [
              "受け入れる",
              "本当はショックでも言わない",
              "積み重なると距離ができる",
            ],
          },
          {
            trigger: "冷たさ",
            reactions: [
              "どうしたのか聞けない",
              "気を使いすぎて温度が上がらない",
            ],
          },
          {
            trigger: "相手の不機嫌",
            reactions: [
              "\"自分が悪いのかも\"と過剰に自責",
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
                text: "「今日は無理かも」",
                isUser: false,
              },
              {
                speaker: "あなた",
                text: "「…そっか、大丈夫だよ」",
                isUser: true,
              },
            ],
            summary: "言わないことで関係が静かに冷えていく（本当は寂しい。本音を飲み込み後から寂しさが増える）",
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
            trigger: "返信の温度差",
            reactions: ["言えずに内側で不安が溜まる"],
          },
          {
            trigger: "距離が変わる",
            reactions: ["\"私が悪い？\"と自責"],
          },
          {
            trigger: "相手の無関心",
            reactions: ["自分の話を減らす"],
          },
          {
            trigger: "否定",
            reactions: ["黙って引く"],
          },
          {
            trigger: "価値観違い",
            reactions: ["飲み込んで同意"],
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
        text: "あなた:本音を言わない→相手:察せない→誤解が蓄積→温度差が広がる→あなた:静かに距離を置く。",
      },
      {
        type: "list",
        items: [
          "相手:「急に冷たくなった？」",
          "\"静かに壊れていく恋\"が典型",
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
          "相手の機嫌を最優先",
          "自分の希望を控えめにする",
          "遠慮しすぎて疲れる",
          "「合わせるのが自然」と思っている",
          "我慢が癖になっている",
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
          "柔らかいが自分の意見は少なめ",
          "返信ペースは相手任せ",
          "既読スルーを深読みする",
          "寂しさがあっても言わない",
          "\"優しさの裏の我慢\"が多い",
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
            "穏やか",
            "気遣いができる",
            "一緒にいて楽",
          ],
        },
        bad: {
          heading: "誤解されやすい点",
          items: [
            "本音が分かりにくい",
            "静かに距離を置く",
            "突然冷めたように見える",
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
            action: "自己表現",
            detail: "小さな本音を伝える力を育てる",
          },
          {
            num: "②",
            category: "自己認識",
            action: "自己価値",
            detail: "自分の価値を確信する",
          },
          {
            num: "③",
            category: "感情マネジメント",
            action: "境界線スキル",
            detail: "健全な境界線を引く力",
          },
          {
            num: "④",
            category: "愛着",
            action: "不安の言語化",
            detail: "不安を安全に言語化する力",
          },
        ],
        summary: "このステップで\"我慢の恋愛\"が終わります。",
      },
    ],
  },
  {
    name: "改善後の未来ストーリー",
    nameEn: "Future Story After Improvement",
    blocks: [
      {
        type: "highlight",
        text: "アジャスター型×抑制型は\"静かな自己犠牲型\"だが温かさを解放できるタイプ。",
      },
      {
        type: "list",
        items: [
          "優しさと自己表現が両立する",
          "相手から「もっと教えてほしい」と言われる",
          "寂しい・嬉しいを自然に伝えられる",
          "\"我慢の恋愛\"が終わる",
          "大切にされる実感が増える",
          "対等で穏やかな関係が続く",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "本音を少しずつ開示できるほど優しさが循環し最も温かい恋愛が実現する。",
      },
    ],
  },
  {
    name: "総評",
    nameEn: "Overall Assessment",
    blocks: [
      {
        type: "text",
        text: "サプレスアジャスターは、相手に合わせる力や思いやりが強みですが、恋愛では\"自分の気持ちより相手を優先しすぎる\"傾向が最も出やすいタイプです。優しさが過剰になるほど本音が隠れ、関係が一方通行になりやすい特徴があります。小さな要求や気持ちを少しずつ言葉にできるようになると、負担が軽くなり、\"寄り添いながらも自分を大切にできる恋愛\"へと自然にバランスが整っていきます。",
      },
    ],
  },
];
