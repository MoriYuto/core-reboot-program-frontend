import type { AnalysisItem } from "../types";

export const REFLECTOR_SUPPRESSIVE: AnalysisItem[] = [
  {
    name: "コア特徴",
    nameEn: "Core Characteristics",
    blocks: [
      {
        type: "highlight",
        text: "「観察力が高い×慎重×感情を抑え込みがち×自分の中で解決しようとする」。内側ではたくさん感じているのに外側に出す量が少ないため\"静かに我慢する恋愛\"をしやすい。",
      },
      {
        type: "section",
        emoji: "✨",
        heading: "特徴",
        items: [
          "思慮深く優しいが自分の気持ちを抑える癖があるため誤解されやすい",
          "気持ちが伝わらない・距離が徐々に広がる\"静かなすれ違い\"",
        ],
        variant: "neutral",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "ただし",
        items: ["調和を大切にするため争いごとは圧倒的に少ない"],
      },
      {
        type: "insight",
        label: "結果",
        text: "静かに我慢する恋愛になりやすいが、争いは少ない。",
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
          "相手の気持ちを読みすぎて疲れる",
          "自分の方が折れてしまう",
          "感情を言わずに溜める",
          "確信を得るまで行動しない",
          "本音が深すぎて言語化に時間がかかる",
          "深く理解しようとしすぎて慎重になる",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "観察力が高い分、慎重になりすぎて距離が縮まりにくい。",
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
          "気持ちを伝える前に結論を出して黙る",
          "相手の気持ちを深読みして遠慮する",
          "\"嫌われない選択\"を優先する",
          "我慢しすぎて突然限界になる",
          "話し合いを避ける",
          "正しい答えを探すのに時間をかける",
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
        heading: "抑制型リフレクターの信念",
        highlightText: "「迷惑をかけず穏やかに愛したい」という優しさが感情の抑制・自己犠牲・自己後回しとして出やすい。",
        items: [
          "\"静かに抱える\"という癖が長年のOSとなり「言わないことで関係を守る」と誤解してしまっている",
        ],
      },
      {
        type: "insight",
        label: "結果",
        text: "言わないことで関係を守ろうとするほど、すれ違いが生まれやすい。",
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
          "深く関わりたい・でも相手の負担になりたくない",
          "自分の気持ちは整理してから伝えたい",
          "愛されたいけど急に近づくのが怖い",
          "本音を言ったら嫌われるのでは？",
        ],
        summary: "これらの複雑な内側が「静かな距離」を生み出している。",
        variant: "neutral",
      },
      {
        type: "insight",
        label: "結果",
        text: "内側は深いのに、外側には伝わりにくい。",
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
          "精神的に落ち着いている",
          "強引でない",
          "丁寧に向き合える",
          "誠実",
          "情緒が安定した相手",
        ],
        variant: "positive",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "注意",
        items: ["相手も\"控えめタイプ\"だと互いに距離が縮みにくい"],
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
          "気持ちを隠しすぎて誤解される",
          "沈黙が長くなる",
          "相手に「何を考えているのかわからない」と思われる",
          "本音に到達するまで時間がかかる",
          "距離が付かず離れず状態のまま進展しない",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "静かなすれ違いが積み重なり、気づいたら距離が開いている。",
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
              "自分の感情を抑えすぎて相手に本心を悟られないように振る舞う",
              "説明や言語化はできるのに\"本当の気持ち\"だけは表に出ない",
              "彼の曖昧さが怖くなり慎重な距離感が続く",
            ],
          },
          {
            emoji: "🔹",
            label: "長期",
            items: [
              "抑え込みが蓄積し突然距離を置きたくなる\"感情シャットダウン\"が起きる",
              "関係が安定しないまま続き相手から「何を考えてるか分からない」と言われがち",
              "恋愛が\"淡々と続くが深まらない\"状態で停滞する",
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
              "表では気にしない",
              "でも内側では「理由」を分析してしまう",
              "しかし言葉にはしない",
            ],
          },
          {
            trigger: "距離が曖昧な時",
            reactions: [
              "相手の様子を観察",
              "自分から詰めない",
              "状況が動くのを待つ",
            ],
          },
          {
            trigger: "デート後の連絡が少ない",
            reactions: [
              "不安より「理由」を考える",
              "行動は変えない",
              "表情で伝わらないタイプ",
            ],
          },
          {
            trigger: "意見の違い",
            reactions: [
              "衝突を避ける",
              "自分の意見を控える",
              "話し合いを避ける",
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
              { speaker: "彼", text: "「最近忙しいんだよね」", isUser: false },
              {
                speaker: "あなた",
                text: "「うん、大変だよね」（本当はさみしい）",
                isUser: true,
              },
              {
                speaker: "彼",
                text: "「もっと気持ちを言ってほしい」",
                isUser: false,
              },
              {
                speaker: "あなた",
                text: "「言いたいけど、どう言えばいいかわからなくて…」",
                isUser: true,
              },
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
            trigger: "相手の急な変化",
            reactions: ["まず分析", "感情は隠す"],
          },
          {
            trigger: "本音を求められる",
            reactions: ["一度黙る", "整理が終わるまで時間が必要"],
          },
          {
            trigger: "相手の強い感情",
            reactions: ["少し引く", "冷静さを保つ"],
          },
          {
            trigger: "絆の深まり",
            reactions: ["嬉しい半面慎重さが出る"],
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
        text: "あなたは相手の気持ちを読み、自分の感情は胸の奥にしまっていた。争わない恋は続くけれど心は少しずつ距離を感じていた。",
      },
      {
        type: "list",
        items: [
          "ある日相手が言った「本当の気持ち、聞かせてよ。」",
          "その時あなたは気づく。\"言わなかった優しさ\"が\"伝わらない壁\"になっていたことを。",
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
          "聞き役に回る",
          "気遣いが細やか",
          "ペースを相手に合わせる",
          "沈黙が苦ではない",
          "感情の揺れが少ない",
          "手を繋ぐタイミングなど慎重",
          "相手の反応をよく観察している",
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
          "淡々としている",
          "短文になりがち",
          "深い本音は文章では書かない",
          "返信速度は相手のペースに合わせる",
          "不安があっても表現しない",
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
            "落ち着く",
            "優しい",
            "穏やか",
            "誠実",
            "居心地がいい",
          ],
        },
        bad: {
          heading: "誤解されやすい点",
          items: [
            "本音が見えにくい",
            "距離が縮むまで時間がかかる",
            "反応が控えめで分かりづらい",
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
            category: "自己表現",
            action: "小さな本音",
            detail: "小さな本音を言葉にする練習",
          },
          {
            num: "②",
            category: "感情マネジメント",
            action: "抑圧でなく言語化",
            detail: "感情を抑えるのではなく言葉にする",
          },
          {
            num: "③",
            category: "コミュニケーション",
            action: "意見の共有",
            detail: "自分の意見を共有する練習",
          },
          {
            num: "④",
            category: "愛着の強化",
            action: "安心の言語化",
            detail: "安心を言葉にして伝える",
          },
        ],
        summary: "このステップで\"静けさの中に深い愛情\"を育てられる関係が実現します。",
      },
    ],
  },
  {
    name: "改善後の未来ストーリー",
    nameEn: "Future Story After Improvement",
    blocks: [
      {
        type: "highlight",
        text: "あなたが感情と言葉の間にある\"静かな壁\"を越えた時、恋愛は深まり安定し信頼で満たされる。",
      },
      {
        type: "list",
        items: [
          "自分の気持ちを伝えられる",
          "誤解が減る",
          "距離が自然に縮まる",
          "相手が安心する",
          "静かで穏やかな絆が生まれる",
        ],
      },
      {
        type: "insight",
        label: "リフレクター×抑制型は",
        text: "\"静けさの中に深い愛情\"を育てられる稀有なタイプ。",
      },
    ],
  },
  {
    name: "総評",
    nameEn: "Overall Assessment",
    blocks: [
      {
        type: "text",
        text: "リストレインドリフレクターは、洞察力が高く落ち着いて見える一方で、自分の感情を抑え込みすぎて\"内側だけが疲れていく\"タイプです。相手の気持ちには敏感なのに、自分の気持ちは後回しにしやすく、距離は近いのに親密さが深まりにくい状態が起きがち。本音を少しずつ開示できるようになると、安心と理解が自然に循環し、穏やかさの中に温度のある関係を育てられます。",
      },
    ],
  },
];
