import type { AnalysisItem } from "../types";

export const STRATEGIST_SUPPRESSIVE: AnalysisItem[] = [
  {
    name: "コア特徴",
    nameEn: "Core Characteristics",
    blocks: [
      {
        type: "highlight",
        text: "「思考の強さ＞感情表現」「理性の壁を作りやすい」「本音を言えない」が明確。",
      },
      {
        type: "section",
        emoji: "🧠",
        heading: "特徴",
        items: [
          "感情マネジメントは高い（冷静）だがコミュニケーションが弱い（言語化×自己開示が苦手）",
          "「大人で落ち着いているけれど、本音が見えない」印象",
        ],
        variant: "neutral",
      },
      {
        type: "list",
        items: [
          "\"優しい沈黙\"\"安定の裏の距離\"が生まれやすい",
          "「何を考えてるか分からない人」になりやすい",
        ],
      },
      {
        type: "insight",
        label: "結果",
        text: "理性が強く出すぎると、本音との距離が広がりやすい。",
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
          "冷静で落ち着いた恋愛",
          "衝突を避けるために黙りやすい",
          "相手の気持ちに先回りして遠慮する",
          "本音を言わないので相手が不安になりやすい",
          "付き合うと安定するが温度は低め",
          "「好き」の感情が表に出にくい",
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
          "自分の気持ちを深読みしすぎて言わない",
          "小さな不満を飲み込む（そして蓄積）",
          "感情が動いても表情に出さない",
          "話し合いの場で「冷静すぎる」と言われる",
          "関係を壊したくないあまり必要な話も避ける",
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
        heading: "抑制型ストラテジストの信念",
        highlightText: "「感情を出すと関係が乱れる」「黙っていた方が平和」「理性で処理すべき」",
        items: [
          "幼少期に感情表現が抑えられた・怒りや悲しみを否定された・\"落ち着いた子\"を求められた背景",
          "恋愛でも感情より\"正解の行動\"を優先する無意識の癖",
        ],
      },
      {
        type: "insight",
        label: "結果",
        text: "理性で感情を処理しようとするほど、本音との距離が広がりやすい。",
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
        heading: "本当は感情もあるし甘えたい気持ちもある。しかし",
        items: [
          "「伝えたら迷惑かな…」",
          "「こんなこと話してもしょうがない」",
          "「大げさだと思われたくない」",
        ],
        summary: "と抑圧してしまう。",
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
          "誠実で穏やかな男性",
          "落ち着いた人",
          "論理的なタイプ",
        ],
        variant: "positive",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "注意",
        items: [
          "感情表現が少ない同タイプ（ストラテジスト、プロテクターなど）とは相性が悪い→無言のまま距離が開く",
          "コミュ力が高く優しく引き出してくれる男性がベスト",
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
          "自分が黙る→相手が不安→距離ができる",
          "「話してよ」と言われるがどう伝えていいか分からない",
          "誤解が誤解を生み徐々に心が離れる",
        ],
      },
      {
        type: "insight",
        label: "最後は",
        text: "「話してくれなかった」の一言で終わる。",
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
              "自分の考えが正しいという感覚が強まり相手の\"曖昧さ\"にイライラしやすくなる",
              "彼の行動を論理的に解釈しすぎて感情的なニュアンスを取りこぼす",
              "会話が\"説明と分析\"ばかりになり距離が縮まらない",
            ],
          },
          {
            emoji: "🔹",
            label: "長期",
            items: [
              "コミュニケーションの硬さが定着し男性が「話しづらい・疲れる」と感じる",
              "相手をコントロールしたい心理が強まり恋愛が\"管理構造\"になりがち",
              "相手の意思が見えないと不安→管理が強まる→相手が離れるの負の連鎖へ",
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
            reactions: ["理性で処理「忙しいんだろう」", "でも内側では少し不安"],
          },
          {
            trigger: "返信遅い",
            reactions: ["表では落ち着いているが心の奥ではモヤっとする", "しかしそれを伝えない"],
          },
          {
            trigger: "デート後素っ気ない",
            reactions: ["「聞くべきかな？」と迷った末何も言わない", "気まずさを溜め込む"],
          },
          {
            trigger: "意見違い",
            reactions: ["対立を避け「うん…そうだね」と合わせる"],
          },
          {
            trigger: "彼が不安定",
            reactions: ["冷静に対応できるが自分の気持ちは後回し"],
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
              { speaker: "彼", text: "「最近、距離感じるんだけど…？」", isUser: false },
              { speaker: "あなた", text: "「え？そんなつもりないよ」（本当は不安で言えないことがあった）", isUser: true },
              { speaker: "彼", text: "「何考えてるか分からない」", isUser: false },
              { speaker: "あなた", text: "「大丈夫、気にしないで」（本当は話したいのに言葉にならない）", isUser: true },
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
            trigger: "相手が突然そっけない",
            reactions: ["理性では平気を装うが心の中でざわつく", "伝えないので相手は気づかない"],
          },
          {
            trigger: "言い争い",
            reactions: ["強い感情表現が苦手すぎてフリーズ", "無言", "相手が傷つく"],
          },
          {
            trigger: "相手が深く踏み込んでくる",
            reactions: ["心の準備ができておらず距離を取る"],
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
        text: "相手の意図を察しながら問題を\"理性で処理\"し続けていたが、内側には言いたいこと・不安・不満が少しずつ溜まっていた。",
      },
      {
        type: "list",
        items: [
          "ある日彼が言った一言がトリガーとなり「もう無理…」と静かにシャットダウン",
          "彼は驚く「そんなに悩んでたの？言ってくれればよかったのに…」",
          "あなたは言う「どう伝えればいいか分からなかった」",
          "これが抑制型の典型的破綻",
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
          "聞き役になる",
          "自分の気持ちを言わない",
          "楽しんでいても表情に出にくい",
          "相手が察してくれるのを期待しがち",
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
          "丁寧",
          "絵文字少なめ",
          "情報は伝えるが感情は伝えない",
          "返信ペースは安定",
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
            "落ち着いてて大人",
            "気持ちに波が少ない",
            "扱いやすい",
            "優しい",
          ],
        },
        bad: {
          heading: "誤解されやすい点",
          items: [
            "気持ちが分からない",
            "何を考えてるのか不透明",
            "本気なのか疑われる",
            "冷たいと思われることも",
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
            action: "感情の抑圧に気づく",
            detail: "自分が感情を抑え込む癖を認識する",
          },
          {
            num: "②",
            category: "感情マネジメント",
            action: "安全な感情表現",
            detail: "安全な場面で少しずつ感情を出す練習",
          },
          {
            num: "③",
            category: "コミュニケーション",
            action: "本音の練習",
            detail: "小さな本音を伝える練習",
          },
          {
            num: "④",
            category: "愛着",
            action: "\"踏み込み\"への恐れを溶かす",
            detail: "深い関係への恐れを少しずつ緩める",
          },
        ],
        summary: "このステップで本音が通る温かい関係が実現します。",
      },
    ],
  },
  {
    name: "改善後の未来ストーリー",
    nameEn: "Future Story After Improvement",
    blocks: [
      {
        type: "highlight",
        text: "あなたが少しだけ本音を伝えられるようになると、恋愛は劇的に変わる。",
      },
      {
        type: "list",
        items: [
          "誤解が減る",
          "関係の温度が上がる",
          "愛情表現が自然になる",
          "相手が安心する",
          "あなた自身も愛を受け取れるようになる",
        ],
      },
      {
        type: "insight",
        label: "ストラテジスト×抑制型は",
        text: "「本音さえ通れば最高のパートナーになるタイプ」。",
      },
    ],
  },
  {
    name: "総評",
    nameEn: "Overall Assessment",
    blocks: [
      {
        type: "text",
        text: "リストレインドストラテジストは、冷静さ・判断力・誠実さが魅力の知性派タイプですが、\"正しさ\"が強く出すぎると、相手を無意識に管理したり、会話が固くなりやすい一面があります。本音や感情を抑え込むほど、良かれと思った配慮がすれ違いに変わりやすい点が特徴です。感情の柔らかさを少し乗せるだけで、知性と優しさがバランスよく届き、関係が格段にスムーズに深まります。",
      },
    ],
  },
];
