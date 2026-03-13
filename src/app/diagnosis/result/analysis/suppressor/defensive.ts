import type { AnalysisItem } from "../types";

export const SUPPRESSOR_DEFENSIVE: AnalysisItem[] = [
  {
    name: "コア特徴",
    nameEn: "Core Characteristics",
    blocks: [
      {
        type: "highlight",
        text: "「感情を抑える×心を開かない×自分で処理する」恋愛で最も\"静かな内向防衛タイプ\"。本当は繊細で優しいのにその優しさが\"守りの壁\"に。",
      },
      {
        type: "section",
        emoji: "🛡️",
        heading: "特徴",
        items: [
          "感じている・気づいている・愛情もある",
          "でも表に出さない・言わない・踏み込まない",
          "\"静かな距離感\"を保ち続ける",
        ],
        variant: "neutral",
      },
      {
        type: "list",
        items: [
          "相手からは「本当はどう思ってるの？」と不安にさせてしまいやすい",
        ],
      },
      {
        type: "insight",
        label: "結果",
        text: "本当は繊細で優しいのに、その優しさが守りの壁になってしまうタイプ。",
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
          "好意があっても表に出さない",
          "傷つきたくなくて距離を取る",
          "自分の中で全部完結する",
          "相手の問題を\"察して静かに受け止める\"",
          "相手に求めない",
          "深まる前に壁ができる",
          "恋愛が穏やかすぎて相手が物足りないと感じる",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "静かに距離を保ち続けるため、相手からは物足りなさを感じられやすい。",
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
          "自分から誘わない",
          "甘えない",
          "相談しない",
          "本音を言わない",
          "「大丈夫、平気」と繰り返す",
          "気持ちが冷めたように見える",
          "心が少しずつ閉じる",
          "相手が近づくと一歩引く",
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
        heading: "防衛型サプレッサーの信念",
        highlightText: "「深い関係になるほどリスクが増える」。相手が近づく→距離を取る・求められる→プレッシャー・不安→抑え込む・傷つきそう→引く。防衛反応＝安全戦略。",
        items: [
          "本当は愛したいのに自分を守るために\"遮断\"してしまうタイプ",
        ],
      },
      {
        type: "insight",
        label: "結果",
        text: "本当は愛したいのに、自分を守るために心を閉じてしまう。",
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
          "人に踏み込まれるのが怖い",
          "深い関係は負担",
          "本音を見せるのが怖い",
          "無言で理解してほしい",
          "頼れない・弱さを見せたくない",
          "同時に本当は分かってほしい・甘えてみたい・安心したいという静かな願望もある",
        ],
        variant: "neutral",
      },
      {
        type: "insight",
        label: "特徴",
        text: "表には出さないが、心の奥では分かってほしい・甘えたいという静かな願望がある。",
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
          "無理に踏み込まない",
          "優しい",
          "安心感がある",
          "感情を押しつけてこない",
          "ゆっくり進めるタイプ",
          "特に\"静かな優しさ\"を持つ男性と相性が良い",
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
          "沈黙が\"拒絶\"と誤解される",
          "自分の気持ちを言わない",
          "不安を隠してしまう",
          "相手から見ると\"距離がある\"",
          "徐々に関係が希薄になる",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "衝突は少ないが静かに離れてしまう典型タイプ。",
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
              "自分を守るために本音を完全に隠して距離を取る",
              "相手に優しくはできるが心の扉は固く閉じたまま",
              "\"傷つきたくない\"気持ちが強まり恋愛に慎重になりすぎる",
            ],
          },
          {
            emoji: "🔹",
            label: "長期",
            items: [
              "親密さの手前で止まり続ける\"安全距離恋愛\"が定着",
              "男性から「壁がある」「踏み込めない」と思われ長続きしにくい",
              "最終的に孤立と自己否定が強まり\"恋愛回避型OS\"が定着する",
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
              "気にはなる",
              "でも何も言わない",
              "「忙しいよね」で処理",
              "寂しさを飲み込む",
              "何度も続くと距離が開く",
            ],
          },
          {
            trigger: "返信遅い",
            reactions: ["感情は揺れるが\"抑える\"", "言わずに自分で処理"],
          },
          {
            trigger: "温度差",
            reactions: ["追わない", "ただ引く", "気持ちが冷めたように見える"],
          },
          {
            trigger: "深い話を求められる",
            reactions: ["壁を作る", "話題を変える", "少し距離を取る"],
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
              { speaker: "彼", text: "「どう思ってる？」", isUser: false },
              {
                speaker: "あなた",
                text: "「別に、特にないよ」（本当は色々思っている→彼が\"拒絶\"と誤解）",
                isUser: true,
              },
              { speaker: "彼", text: "「寂しい？」", isUser: false },
              {
                speaker: "あなた",
                text: "「大丈夫」（本音は寂しい→相手は安心するがあなたは孤立する）",
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
            trigger: "相手が踏み込む",
            reactions: ["防衛が作動", "距離を取る"],
          },
          {
            trigger: "感情共有を求められる",
            reactions: ["心が閉じる", "話さない"],
          },
          {
            trigger: "相手が感情的",
            reactions: ["重く感じる", "一気に距離が開く"],
          },
          {
            trigger: "不安",
            reactions: ["誰にも言わず自己処理", "心が消耗する"],
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
        text: "あなたは静かに恋を進める。でも相手が近づくたびに心の奥で\"ざわつき\"が生まれる。「深く入られたら苦しい」「期待されると重い」「本音は見せられない」。",
      },
      {
        type: "list",
        items: [
          "そう感じているうちにあなたは少しずつ距離を取り始める",
          "相手は気づけない",
          "あなたの\"静かな後退\"こそが恋がこじれる始まり",
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
          "落ち着いている",
          "自分から手を繋がない",
          "深い話を避ける",
          "気持ちを表現しない",
          "スキンシップは慎重",
          "相手を尊重しすぎる",
          "自分の欲求を抑える",
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
          "短く控えめ",
          "絵文字少なめ",
          "感情を表に出さない",
          "\"大丈夫だよ\"が多い",
          "既読スルーされても追わない",
          "返信が淡々としている",
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
            "穏やか",
            "落ち着く",
            "優しい",
            "丁寧",
            "気遣いがある",
          ],
        },
        bad: {
          heading: "誤解されやすい点",
          items: [
            "気持ちが分からない",
            "壁を感じる",
            "距離が縮まらない",
            "本音が見えない",
            "自分に興味ないと思われる",
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
            action: "本音・不安の言語化",
            detail: "自分の本音に気づく力を育てる",
          },
          {
            num: "②",
            category: "愛着",
            action: "回避傾向の緩和",
            detail: "距離を置く癖に気づき少しずつ踏み込む",
          },
          {
            num: "③",
            category: "コミュニケーション",
            action: "小さな開示習慣",
            detail: "極小さな本音から伝える練習",
          },
          {
            num: "④",
            category: "感情マネジメント",
            action: "心の許容の拡大",
            detail: "感情の揺れを許可する",
          },
        ],
        summary: "このステップで\"心の壁をゆっくり溶かしていく恋愛\"が実現します。",
      },
    ],
  },
  {
    name: "改善後の未来ストーリー",
    nameEn: "Future Story After Improvement",
    blocks: [
      {
        type: "highlight",
        text: "あなたの静かな優しさは、本来\"深く安定した愛\"に向いている。",
      },
      {
        type: "list",
        items: [
          "心の壁が薄くなる",
          "小さな本音を言える",
          "すれ違いが減る",
          "相手から「一緒にいると安心」と言われる",
          "距離が自然に縮まり恋が成熟する",
        ],
      },
      {
        type: "insight",
        label: "サプレッサー型×防衛型は",
        text: "\"心の壁をゆっくり溶かしていく恋愛\"が得意。その過程こそあなただけの魅力的な恋の形。",
      },
    ],
  },
  {
    name: "総評",
    nameEn: "Overall Assessment",
    blocks: [
      {
        type: "text",
        text: "シールドサプレッサーは、優しさや誠実さがある一方で、\"自分の心を守るために感情を閉じてしまう\"傾向が最も強いタイプです。相手に踏み込まれそうになると無意識に距離を置き、恋愛が浅いまま終わりやすい特徴があります。安心できる相手に対して、小さな本音や弱さを少しずつ開示できるようになると、自分を守りながらも深い関係を築ける\"安定した内向型の恋愛\"へと進化します。",
      },
    ],
  },
];
