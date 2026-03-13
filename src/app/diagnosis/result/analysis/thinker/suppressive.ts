import type { AnalysisItem } from "../types";

export const THINKER_SUPPRESSIVE: AnalysisItem[] = [
  {
    name: "コア特徴",
    nameEn: "Core Characteristics",
    blocks: [
      {
        type: "highlight",
        text: "「思考と抑制のハイブリッドタイプ」。表面は大人で落ち着いているが内側は繊細で実はかなり感情的。",
      },
      {
        type: "section",
        emoji: "✨",
        heading: "シンカー型は",
        items: [
          "論理的",
          "言語化が得意",
          "感情に流されない",
          "状況分析ができる",
        ],
        summary: "という理性のOS。",
        variant: "neutral",
      },
      {
        type: "list",
        items: [
          "抑制型がかかると感情はあるのに言えない",
          "本音を言う前に「正しさ」で調整する",
          "理性で恋愛を安定させようとする",
          "衝突を避けるために言いたいことを抑える",
          "相手から見ると「考えてばかりで気持ちが見えない」",
        ],
      },
      {
        type: "insight",
        label: "結果",
        text: "理性と抑制の組み合わせで、安定しやすい一方で本音が伝わりにくい傾向がある。",
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
          "最初は穏やかで信頼されやすい",
          "感情的な衝突はしない",
          "しかし本音を言わずにため込みがち",
          "「正しさ」で相手を説得してしまう場面がある",
          "相手に合わせすぎて疲れる",
          "恋愛の問題を「理屈」で片付けようとする",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "安定はするが、感情の温度が伝わりにくい恋愛になりやすい。",
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
          "本音を言う前に合理性を優先",
          "気持ちより「結論」を伝えがち",
          "話し合いの途中で相手の感情を読みすぎて黙る",
          "気まずさを避けて問題を先送り",
          "「考えすぎ」になりやすい",
          "相手の言葉を深読みする癖がある",
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
        heading: "抑制の信念",
        highlightText: "「感情を出すと関係が崩れる」「言葉を慎重に扱わないと傷つける」「自分の感情は隠した方が安全」という思考で動く。",
        items: [
          "感情→抑える",
          "本音→論理に変換",
          "不安→無言で処理",
          "衝突→回避",
          "「静かな防衛」が強まる",
        ],
      },
      {
        type: "insight",
        label: "結果",
        text: "感情を抑えることで安定はするが、関係が深まりにくい。",
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
          "深く理解されたい",
          "自分の感情を丁寧に扱ってほしい",
          "一緒に問題を解決したい",
        ],
        summary: "という欲求がある。",
        variant: "positive",
      },
      {
        type: "insight",
        label: "しかし",
        text: "気持ちを出す＝リスク・衝突＝怖い・言葉は慎重に→本音を閉じやすい。「伝えればよかったのに…」という後悔を抱えやすい。",
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
          "冷静",
          "誠実",
          "言動が安定",
          "落ち着いて話ができる",
          "理屈の通るタイプ",
        ],
        variant: "positive",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "注意",
        items: [
          "感情的すぎる",
          "頻繁に確認してくる",
          "詰めてくる",
          "曖昧な言動はストレスになりやすく距離が開く",
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
          "本音を言わずに「正しさ」で会話する",
          "相手が感情的だと黙ってしまう",
          "説明不足で誤解が蓄積",
          "「なに考えてるかわからない」と言われる",
          "問題を蓄積→突然感情が爆発",
        ],
      },
      {
        type: "insight",
        label: "結果",
        text: "誤解が積もり、相手が距離を取る悪循環になりやすい。",
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
              "自分の感情を抑え説明・分析だけで会話しがち",
              "デートでも「正しくふるまう」ことを優先して緊張が続く",
              "自分の弱さを出さないため相手が踏み込みにくい雰囲気に",
            ],
          },
          {
            emoji: "🔹",
            label: "長期",
            items: [
              "感情の抑圧が続き心の距離が離れた関係性が形成される",
              "相手にとって「優しいけど近づけない人」の印象が強まる",
              "深い関係になる前に自然消滅しやすい",
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
            trigger: "返信が遅い",
            reactions: [
              "論理的に解釈しようとする",
              "でも内側は不安",
              "不安を悟られないように振る舞う",
            ],
          },
          {
            trigger: "感情的に責められる",
            reactions: [
              "理性が前に出て距離を置く",
              "「落ち着いてから話そう」と思う",
            ],
          },
          {
            trigger: "本音を求められる",
            reactions: [
              "感情より「結論」を先に伝えてしまう",
            ],
          },
          {
            trigger: "予定を後回しにされた",
            reactions: [
              "口では「大丈夫」",
              "内心では傷つく",
              "でもその気持ちを言えない",
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
                text: "「なんで言ってくれなかったの？」",
                isUser: false,
              },
              {
                speaker: "あなた",
                text: "「言っても仕方ないかと思って…」",
                isUser: true,
              },
              {
                speaker: "彼",
                text: "「なんで？」",
                isUser: false,
              },
              {
                speaker: "あなた",
                text: "「あなたを責めたくなかったから」",
                isUser: true,
              },
            ],
            summary: "「本音の怖さ」が「冷たさ」に見える典型（本音は「怖さ」なのに相手は「冷めてる？」と誤解する）",
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
            trigger: "感情的な要求",
            reactions: ["黙る", "距離を取る"],
          },
          {
            trigger: "説明不足",
            reactions: ["深読みして不安"],
          },
          {
            trigger: "詰められる",
            reactions: ["逃避"],
          },
          {
            trigger: "価値観の衝突",
            reactions: ["理性優位で処理する"],
          },
          {
            trigger: "本音の要求",
            reactions: ["「言わない」を選ぶ"],
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
        text: "相手が気持ちを聞く→あなたは「正しさ」で答える→彼「気持ちは？」→あなた「うまく言えない」→彼が不安になる。",
      },
      {
        type: "list",
        items: [
          "あなたは「面倒にしたくない」と黙る",
          "すれ違いが加速",
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
          "リアクションが控えめ",
          "言葉を選びすぎて無口になる瞬間",
          "相手が感情的だと静かになる",
          "褒められても照れ隠し",
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
          "丁寧だが感情の温度は薄め",
          "返信を考えすぎて遅れる",
          "深いやりとりは苦手",
          "疑問形を使うのが控えめ",
          "スタンプでごまかす癖あり",
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
            "安心感がある",
            "誠実",
            "ブレない",
            "大人",
          ],
        },
        bad: {
          heading: "誤解されやすい点",
          items: [
            "気持ちが見えない",
            "本音が分からない",
            "「正しさ」で返されると疲れる",
            "時々「壁」を感じる",
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
            action: "感情と言葉の一致",
            detail: "感情を言葉に乗せる練習",
          },
          {
            num: "②",
            category: "愛着",
            action: "不安を共有する練習",
            detail: "不安を安全に共有する力を育てる",
          },
          {
            num: "③",
            category: "感情マネジメント",
            action: "抑えている感情を扱う",
            detail: "抑圧された感情を安全に扱う",
          },
          {
            num: "④",
            category: "自己認識",
            action: "「言ってもいい」の許可",
            detail: "本音を出す許可を自分に与える",
          },
        ],
        summary: "このステップで穏やかな「知性と感情のバランス関係」が完成します。",
      },
    ],
  },
  {
    name: "改善後の未来ストーリー",
    nameEn: "Future Story After Improvement",
    blocks: [
      {
        type: "highlight",
        text: "シンカー型×抑制型は「思考と抑制のハイブリッド」。温かさを解放できるタイプ。",
      },
      {
        type: "list",
        items: [
          "「言わない」が「少しずつ言える」に変わる",
          "誤解が減り関係が驚くほど安定",
          "彼に「本音を話してくれて嬉しい」と言われる",
          "伝える勇気が自信に変わる",
          "穏やかな「知性と感情のバランス関係」が完成",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "本音を少しずつ開示できるほど知性に温かさが加わり最も信頼される恋愛が実現する。",
      },
    ],
  },
  {
    name: "総評",
    nameEn: "Overall Assessment",
    blocks: [
      {
        type: "text",
        text: "サプレスシンカーは、思考の深さと慎重さが魅力ですが、恋愛では「感情より思考が前に出すぎる」ため、本音が伝わりにくいタイプです。正しく距離を保とうとするほど、相手には近いようで遠い印象を与えやすい傾向があります。小さな気持ちをその場で柔らかく伝えられるようになると、関係がほぐれ、知的な安心感に温かさが加わった「寄り添える恋愛」へと進みます。",
      },
    ],
  },
];
