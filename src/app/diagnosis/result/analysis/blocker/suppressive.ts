import type { AnalysisItem } from "../types";

export const BLOCKER_SUPPRESSIVE: AnalysisItem[] = [
  {
    name: "コア特徴",
    nameEn: "Core Characteristics",
    blocks: [
      {
        type: "highlight",
        text: "感情は暴れずコントロールできる・冷静な対応ができる・落ち着いた大人の印象・ただし「心の本丸」には踏み込ませない「静かに壁を保つタイプ」。",
      },
      {
        type: "section",
        emoji: "✨",
        heading: "特徴",
        items: [
          "トラブルは起こさない",
          "穏やかで安定して見える",
          "内側では距離を取らないと不安",
          "親密さに対して軽い防衛",
          "「何も感じていないように見せる」癖",
          "本音が伝わらないことで誤解されやすい",
        ],
        variant: "neutral",
      },
      {
        type: "list",
        items: [
          "「静かな防衛型」",
          "穏やかだが心の壁はしっかり保っている",
        ],
      },
      {
        type: "insight",
        label: "結果",
        text: "静かさの裏で距離を保ち、本音が伝わりにくい傾向がある。",
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
          "大きなトラブルはないが「深まらない」",
          "相手が距離を縮めようとすると固まる",
          "穏やかだが温度が低く見える",
          "本音を出さないことで相手が不安になる",
          "関係が落ち着きすぎて停滞しやすい",
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
          "感情の説明が少ない",
          "気持ちを感じても表に出さない",
          "相手の好意を受けてもうまく反応できない",
          "「大丈夫」「平気」で済ませがち",
          "本音は後からゆっくり整理するタイプ",
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
        heading: "抑制型ブロッカーの信念",
        highlightText: "「混乱しないために抑える」「踏み込まれたら負担になる」「弱さを見せると関係が重くなる」という思考で動く。",
        items: [
          "感情は乱れないが抑えすぎることで「静かな孤立」を生みやすい",
          "心の壁に加えて感情の抑圧が重なる",
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
          "甘えたい",
          "気持ちを理解してほしい",
          "寄りかかる安心を感じたい",
        ],
        summary: "という欲求がある。",
        variant: "positive",
      },
      {
        type: "insight",
        label: "しかし",
        text: "「迷惑をかけたくない」「重く見られたくない」という抑制が働き「素っ気ない人」に見えやすい。",
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
          "距離を尊重してくれる",
          "感情的にぶつからない人",
        ],
        variant: "positive",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "注意",
        items: [
          "同じく「踏み込まない男性」を選ぶと関係が無風のまま停滞",
          "「友達のような恋」になりがち",
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
          "言わない誤解",
          "説明不足",
          "感情の「温度低い誤解」",
          "相手が「好かれてるの？」と不安になる",
          "静かすぎて本心が伝わらない",
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
              "自分の気持ちを抑え込みすぎて相手に興味が伝わらない",
              "恥ずかしさや怖さが先に立ち行動が止まりやすい",
              "アプローチされても受け身すぎて進展しない",
            ],
          },
          {
            emoji: "🔹",
            label: "長期",
            items: [
              "「何も言わない・動かない自分」が固定され恋愛が始まりにくい",
              "相手から「脈がない」と判断され関係が途切れやすい",
              "恋愛のチャンスが減り自己肯定感がさらに低下する",
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
              "表面上は平気",
              "内側で不安になるが言わない",
              "「離れすぎ」ると急に冷める",
            ],
          },
          {
            trigger: "既読スルー",
            reactions: [
              "怒らない",
              "しかし心が閉じる準備を始める",
              "「期待しない」という防衛",
            ],
          },
          {
            trigger: "深い話を求められる",
            reactions: [
              "話すのが重く感じる",
              "「うまく言えない」と逃げたくなる",
              "返答が遅くなる",
            ],
          },
          {
            trigger: "温度差",
            reactions: [
              "感情は揺れない",
              "だが距離が一定以上縮むと怖くなる",
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
                text: "「本当はどう思ってる？」",
                isUser: false,
              },
              {
                speaker: "あなた",
                text: "「別に、大丈夫」",
                isUser: true,
              },
              {
                speaker: "彼",
                text: "「もっと知りたいんだ」",
                isUser: false,
              },
              {
                speaker: "あなた",
                text: "「うまく言えない」",
                isUser: true,
              },
            ],
            summary: "「抑え込みが誤解を生む」パターン（本当は「大丈夫じゃない」が言えない／本音へのアクセスが遅い）",
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
            trigger: "踏み込み",
            reactions: ["スッと距離を取る"],
          },
          {
            trigger: "本音要求",
            reactions: ["言語化できず沈黙"],
          },
          {
            trigger: "感情的な相手",
            reactions: ["閉じる"],
          },
          {
            trigger: "予定変更",
            reactions: ["失望", "感情は出ないが心は引く"],
          },
          {
            trigger: "放置感",
            reactions: ["無反応", "諦観"],
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
        text: "彼が距離を縮める→心が詰まる→本音が出ない→「冷たい人」と誤解される。",
      },
      {
        type: "list",
        items: [
          "男性が不安になり距離を取る",
          "悪循環が始まる",
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
          "穏やか、落ち着いている",
          "リアクションは控えめ",
          "手を繋がれても反応薄め",
          "本音は帰宅後に気づく",
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
          "事務的",
          "テンポが一定",
          "感情表現が少ない",
          "長文は苦手",
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
            "落ち着いてる",
            "優しい",
            "安定感がある",
            "大人っぽい",
          ],
        },
        bad: {
          heading: "誤解されやすい点",
          items: [
            "何を考えているか分からない",
            "温度が低く見える",
            "関係が進んでいるのか見えない",
            "踏み込むと距離を取られる",
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
            action: "抑えている感情の把握",
            detail: "自分が抑えている感情に気づく",
          },
          {
            num: "②",
            category: "愛着",
            action: "安心して近づく練習",
            detail: "安全に近づく感覚を育てる",
          },
          {
            num: "③",
            category: "コミュニケーション",
            action: "小さな開示",
            detail: "小さな本音から伝える練習",
          },
          {
            num: "④",
            category: "感情マネジメント",
            action: "表現量を増やす練習",
            detail: "感情表現の幅を広げる",
          },
        ],
        summary: "このステップで「落ち着きと温かさを両立した大人の恋」が手に入ります。",
      },
    ],
  },
  {
    name: "改善後の未来ストーリー",
    nameEn: "Future Story After Improvement",
    blocks: [
      {
        type: "highlight",
        text: "ブロッカー型×抑制型は「静かな防衛型」だが温かさを解放できるタイプ。",
      },
      {
        type: "list",
        items: [
          "距離を取らなくても安心できる",
          "感情を言葉で伝えられるようになる",
          "男性から「近づきやすい」と感じてもらえる",
          "深まりが「負担」ではなく「喜び」に変わる",
          "落ち着きと温かさを両立した大人の恋が手に入る",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "静かさの中に温かさが生まれるほど深い信頼関係が築けるタイプ。",
      },
    ],
  },
  {
    name: "総評",
    nameEn: "Overall Assessment",
    blocks: [
      {
        type: "text",
        text: "レギュレイトブロッカーは、元々の繊細さに加えて「自分の気持ちを抑え込むクセ」が最も強く出るタイプです。不安や戸惑いを抱えていても表に出せず、距離が近づくほど慎重になりすぎて関係が停滞しやすい傾向があります。小さな感情を安全に伝えられるようになると、心の負担が軽くなり、前に進む力が自然に戻ります。弱さを共有できた分だけ信頼が深まり、あなたらしい優しさが安心として伝わる恋愛へと変わっていきます。",
      },
    ],
  },
];
