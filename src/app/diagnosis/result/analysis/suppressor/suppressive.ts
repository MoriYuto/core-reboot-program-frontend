import type { AnalysisItem } from "../types";

export const SUPPRESSOR_SUPPRESSIVE: AnalysisItem[] = [
  {
    name: "コア特徴",
    nameEn: "Core Characteristics",
    blocks: [
      {
        type: "highlight",
        text: "「感情を抑える×理性でコントロール×自分のペース死守」。内側には繊細さがありながら表には穏やかで整った自分を出す。",
      },
      {
        type: "section",
        emoji: "🧠",
        heading: "特徴",
        items: [
          "自分の気持ちを優先しない",
          "相手に合わせすぎる",
          "不満を\"言わないまま処理する\"",
          "距離感がずっと一定",
        ],
        variant: "neutral",
      },
      {
        type: "list",
        items: [
          "恋愛で大きく崩れないが大きく深まることも少ない",
          "\"安定のまま停滞しやすいタイプ\"",
        ],
      },
      {
        type: "insight",
        label: "結果",
        text: "穏やかで整った自分を出す一方、本音が伝わりにくい傾向がある。",
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
          "問題が起きても深刻化する前に避ける",
          "感情を言語化せず自己処理",
          "相手のペースに合わせる",
          "よく言えば安定悪く言えば停滞",
          "自分が我慢することで関係を保つ",
          "情熱的な相手に戸惑う",
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
          "「大丈夫」が口癖",
          "不安を表に出さない",
          "\"無難な距離感\"を維持",
          "衝突を避ける",
          "甘える前に自分で処理",
          "自分のペースで恋を進める",
          "相手のテンションに合わせて疲れやすい",
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
        heading: "抑制型サプレッサーの信念",
        highlightText: "感情があるのに「感じる前に抑える」自制心が強い。「感情を出す＝迷惑」「重い」「面倒」と学習。",
        items: [
          "気持ちはある・相手のことは好き・でもうまく出せないという葛藤",
          "抑制が行きすぎると\"無難で浅い恋愛\"に",
        ],
      },
      {
        type: "insight",
        label: "結果",
        text: "感情を抑え込むほど、関係の深さが失われやすい。",
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
          "自分の気持ちを優先したいのにできない",
          "嫌われたくないより「波風立てたくない」",
          "深まりたいけど深まるほど負担",
          "一歩踏み込むのが怖い",
          "心は揺れているが表には出さない",
        ],
        summary: "\"静かに深く愛したい\"のにそのための感情表現が難しいタイプ。",
        variant: "neutral",
      },
      {
        type: "insight",
        label: "結果",
        text: "相手は\"心の距離を置かれている\"と感じ、あなたは\"どうして伝わらないんだろう\"と悩む。",
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
          "強引じゃない",
          "優しい",
          "落ち着いている",
          "丁寧に距離を縮める人",
          "受け入れてくれるタイプ",
        ],
        variant: "positive",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "注意",
        items: [
          "情熱的すぎる・押しが強いタイプには身構える",
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
          "気持ちを隠す",
          "考えすぎて距離を置く",
          "自分の意見を飲み込む",
          "\"察してほしい\"が言葉にならない",
          "相手が「本当の気持ちがわからない」と感じる",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "衝突より静かなすれ違いが多い。",
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
              "感情を抑え込みすぎて相手に気持ちが全く伝わらない",
              "言いたいことを隠して\"良い人\"を続ける",
              "相手の曖昧さにも言及できず関係が進まない",
            ],
          },
          {
            emoji: "🔹",
            label: "長期",
            items: [
              "抑圧が蓄積し自分の気持ちを見失う",
              "\"何も言わない私\"が固定化し相手が努力しなくなる",
              "恋愛が停滞し続けフェードアウトされやすい",
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
            reactions: ["深く考えすぎず", "\"忙しいのかな\"で処理", "ただし回数が増えると静かに距離が開く"],
          },
          {
            trigger: "返信遅い",
            reactions: ["不安は感じるが出さない", "心で\"期待値調整\"をして自分を守る"],
          },
          {
            trigger: "予定変更",
            reactions: ["表向き「全然大丈夫だよ」", "内側:少し傷つくがその場で処理"],
          },
          {
            trigger: "温度差",
            reactions: ["焦らず落ち着いて対応", "ただし深まりにくい"],
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
              { speaker: "彼", text: "「もっと気持ちを言ってほしい」", isUser: false },
              { speaker: "あなた", text: "「言ってるつもりなんだけど…」（実際は\"ほんの少ししか出していない\"）", isUser: true },
              { speaker: "彼", text: "「本当に大丈夫？」", isUser: false },
              { speaker: "あなた", text: "「うん、平気」（平気ではないが言わない→彼は誤解する）", isUser: true },
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
            trigger: "深い話を求められる",
            reactions: ["心が閉じる", "距離を置く"],
          },
          {
            trigger: "相手の強めの感情",
            reactions: ["負担になる", "一時的に引く"],
          },
          {
            trigger: "嫉妬・不安",
            reactions: ["表に出さない", "内側で処理し疲れる"],
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
        text: "あなたの恋愛は静かな調和で成り立っている。でもその静けさの中に実は伝えられなかった気持ちが眠っている。",
      },
      {
        type: "list",
        items: [
          "\"言わなくても分かってほしい\"\"迷惑をかけたくない\"",
          "その優しさが少しずつ二人の距離を広げることがある",
          "気づけばすれ違いは大きな問題ではなく\"言わなかった小さな本音\"の積み重ね",
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
          "穏やか",
          "相手を尊重",
          "深い話を避けがち",
          "自分の話が少ない",
          "甘えるのが苦手",
          "無理に盛り上げない",
          "落ち着いた空気を作る",
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
          "短文で丁寧",
          "気遣いの文が多い",
          "絵文字少なめ",
          "感情は書かない",
          "確認する側ではなく合わせる側",
          "返信は遅すぎず早すぎず\"無難\"",
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
            "気遣いができる",
            "安定している",
            "安心感がある",
          ],
        },
        bad: {
          heading: "誤解されやすい点",
          items: [
            "気持ちが読めない",
            "距離が縮まらない",
            "本音が見えない",
            "何を考えているのかわからない",
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
            action: "感情の可視化",
            detail: "自分の感情に気づく力を育てる",
          },
          {
            num: "②",
            category: "コミュニケーション",
            action: "小さな開示",
            detail: "小さな本音を伝える練習",
          },
          {
            num: "③",
            category: "愛着",
            action: "回避傾向の緩和",
            detail: "距離を置く癖に気づき少しずつ踏み込む",
          },
          {
            num: "④",
            category: "感情マネジメント",
            action: "感情処理の習慣化",
            detail: "感情を言葉にする習慣を育てる",
          },
        ],
        summary: "このステップで\"穏やかで誠実な理性派パートナー\"が実現します。",
      },
    ],
  },
  {
    name: "改善後の未来ストーリー",
    nameEn: "Future Story After Improvement",
    blocks: [
      {
        type: "highlight",
        text: "\"静かな優しさ\"がそのまま\"深い安心感と信頼\"へと変わる。",
      },
      {
        type: "list",
        items: [
          "小さな本音が言える",
          "関係がゆっくり深まる",
          "無理せず自然に甘えられる",
          "相手が「もっと話したい」と思える距離感へ",
          "すれ違いが減り安定した恋愛が続く",
        ],
      },
      {
        type: "insight",
        label: "サプレッサー型×抑制型は",
        text: "成長すると\"穏やかで誠実な理性派パートナー\"になる。あなたの静かな魅力は安心と安定を求める男性にとって理想的な存在。",
      },
    ],
  },
  {
    name: "総評",
    nameEn: "Overall Assessment",
    blocks: [
      {
        type: "text",
        text: "ロジックサプレッサーは、静かな優しさと控えめな誠実さが魅力のタイプですが、同時に\"自分の感情を抑え込みすぎる\"傾向が最も強く出ます。相手に合わせるほど本音が見えなくなり、気づけば距離が縮まらない恋愛になりがち。小さな要望や弱さを少しずつ共有できるようになるだけで、関係に温度が宿り、あなたの内側の優しさが自然に伝わっていくパートナーシップへ変わります。",
      },
    ],
  },
];
