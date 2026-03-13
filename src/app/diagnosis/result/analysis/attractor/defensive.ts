import type { AnalysisItem } from "../types";

export const ATTRACTOR_DEFENSIVE: AnalysisItem[] = [
  {
    name: "コア特徴",
    nameEn: "Core Characteristics",
    blocks: [
      {
        type: "highlight",
        text: "もともと直感が鋭く惹きつける空気を持つ\"魅力OS\"の持ち主。しかし防衛型では感情の扱いが苦手・人に心を開くのが怖い・裏切られたくない・安全第一・自分の本音を守る。",
      },
      {
        type: "section",
        emoji: "🛡️",
        heading: "外側と内側",
        items: ["外側：魅力がある", "内側：とても慎重で固い"],
        summary: "\"雰囲気は華やか、心は要塞\"",
        variant: "neutral",
      },
      {
        type: "list",
        items: [
          "恋愛が進むほど距離を置きやすい",
          "本音を隠す",
          "好意を持たれても一歩引く",
          "\"本当に大丈夫？\"と慎重にチェック",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "防衛型アトラクターは、魅力と惹きつける力を持ちながら、心の扉を閉じて自分を守るパターンが出やすい。",
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
          "最初はモテる好感を持たれやすい",
          "でも心を開くまでに時間がかかる",
          "好意を持たれても一歩引く",
          "\"本当に大丈夫？\"と慎重にチェック",
          "恋が始まると\"最悪の事態\"を予測する",
          "相手の感情より\"自分の安全\"が優先",
        ],
      },
      {
        type: "insight",
        label: "",
        text: "魅力がある一方で、親密さの手前で立ち止まりやすいパターン。",
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
          "感情を見せない",
          "好きでも様子を見る",
          "本音は慎重に出す",
          "期待しないように距離を置く",
          "深く関係が進む直前にブレーキ",
          "必要以上に自立しようとする",
          "→ 相手には「脈がない？」と誤解されやすい",
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
        heading: "核にある価値観",
        items: [
          "\"魅力で惹きつける\"\"心は簡単に渡さない\"",
          "過去の痛み・失望・裏切られ経験が根にある可能性が高い",
          "本当は愛したい・繋がりたい",
          "でも「もし傷ついたら？」「またあの痛みが来たら？」と考え心の扉を閉じたくなる",
        ],
      },
      {
        type: "insight",
        label: "",
        text: "心を開くことへの恐れが、恋愛における\"距離を取る\"パターンを生んでいる。",
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
        heading: "本当は…でも…",
        items: [
          "好きだからこそ慎重",
          "愛されたいからこそ距離を置く",
          "期待すると傷つくから期待しない",
          "相手を信じたいのに信じるのが怖い",
          "見せたい姿と守りたい心が矛盾する",
        ],
        summary: "\"矛盾\"ではなくあなたが優しいからこそ持っている防衛本能。",
        variant: "neutral",
      },
      {
        type: "insight",
        label: "",
        text: "欲求と恐れが同時に働き、恋愛で一歩踏み出せない状態になりやすい。",
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
        heading: "惹かれやすいタイプ",
        items: [
          "落ち着いた人",
          "誠実な人",
          "空気を読める人",
          "あまり押してこない人",
        ],
        variant: "positive",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "注意",
        items: ["感情表現が豊かな男性とは噛み合わないことも。"],
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
          "自分から距離を置いてしまう",
          "彼が「脈なし？」と誤解",
          "本音を言わないため関係が浅いまま",
          "自分を守るがゆえに相手を拒絶してしまう",
          "愛されているのに「本当？」と疑う",
        ],
      },
      {
        type: "insight",
        label: "結果",
        text: "魅力があるのに、親密さの手前で関係が終わりやすい。",
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
              "魅力的に振る舞えるが心の奥では警戒心が強く距離を取る。",
              "\"好かれたいけど踏み込まれるのは怖い\"が同時に発動。",
              "本音を隠しながら外側だけが明るく見える。",
            ],
          },
          {
            emoji: "🔹",
            label: "長期（6ヶ月〜1年以降）",
            items: [
              "親密になる前に自ら距離を置く\"恋愛の自己防衛\"が習慣化。",
              "相手から「明るいけど心は見えない」と評価される。",
              "深い関係に進めず孤独感が強まるパターンが繰り返される。",
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
              "「やっぱりね」と静かに心を閉じる",
              "表では平気でも内側では距離が増す",
            ],
          },
          {
            trigger: "温度差が出た",
            reactions: [
              "「期待しないようにしよう」",
              "急にスッと引く",
            ],
          },
          {
            trigger: "予定変更",
            reactions: [
              "失望",
              "無反応",
              "表では「大丈夫だよ」と言うが心では不信感",
            ],
          },
          {
            trigger: "深い話を持ちかけられた",
            reactions: ["感情が処理しきれず逃げたくなる"],
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
                text: "「今度真剣に話したいことがあって…」",
                isUser: false,
              },
              {
                speaker: "あなた",
                text: "（え、別れ話？）",
                isUser: true,
              },
              {
                speaker: "彼",
                text: "「もっと仲良くなりたいな」",
                isUser: false,
              },
              {
                speaker: "あなた",
                text: "「そうなんだ」（急に!?）",
                isUser: true,
              },
            ],
            summary: "本気の距離が近づくと\"身構え反応\"が出る",
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
            trigger: "相手の要求が増える",
            reactions: ["一気に逃げたくなる"],
          },
          {
            trigger: "自分の時間が奪われる",
            reactions: ["イライラor距離置き"],
          },
          {
            trigger: "相手が深く入ってくる",
            reactions: ["心がストップする"],
          },
          {
            trigger: "信じたいのに信じられない",
            reactions: ["自己矛盾で苦しくなる"],
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
        text: "惹かれる→でも深まる前に\"防御スイッチON\"→相手が距離を感じる→あなたは「やっぱり関係は難しい」と諦める。",
      },
      {
        type: "list",
        items: [
          "次の恋も同じパターン。",
          "\"私って恋愛向いてないかも…\"に行きやすい。",
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
          "楽しんでいるのにクールに見える",
          "深い話になると静かになる",
          "甘えるのがぎこちない",
          "本心は言わない",
          "距離感が絶妙に一定",
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
          "返信は安定しているが短め",
          "必要以上に踏み込まない",
          "自分の感情を隠す",
          "押されると逃げる",
          "急に返信ペースが落ちることがある",
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
            "ミステリアス",
            "落ち着いていて魅力的",
            "大人っぽくて余裕がある",
          ],
        },
        bad: {
          heading: "誤解される点",
          items: [
            "本心が分からない",
            "どこまで踏み込んでいいのか不明",
            "急に距離を置かれる",
            "冷たいと誤解される",
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
            action: "防衛が発動する瞬間を知る",
            detail: "防衛反応のパターンに気づく",
          },
          {
            num: "②",
            category: "愛着",
            action: "安定型の強化",
            detail: "安定した愛着パターンを育てる",
          },
          {
            num: "③",
            category: "コミュニケーション",
            action: "言語化",
            detail: "気持ちを言葉にする力を育てる",
          },
          {
            num: "④",
            category: "感情マネジメント",
            action: "感情処理",
            detail: "感情を安全に処理する方法を学ぶ",
          },
        ],
        summary:
          "このステップで\"心を開いた瞬間から世界が変わる\"が実現します。",
      },
    ],
  },
  {
    name: "改善後の未来ストーリー",
    nameEn: "Future Story After Improvement",
    blocks: [
      {
        type: "highlight",
        text: "アトラクター×防衛型は\"心を開いた瞬間から一気に世界が変わるタイプ\"。",
      },
      {
        type: "list",
        items: [
          "過度に守らなくても大丈夫だと感じられる",
          "本音が自然と出せる",
          "距離が縮まる恐怖が減る",
          "相手があなたの魅力を安心して受け取れる",
          "恋が安定し深まる",
        ],
      },
      {
        type: "insight",
        label: "",
        text: "防御の鎧が外れた先に本当に豊かな愛を築けるポテンシャルがある。",
      },
    ],
  },
  {
    name: "総評",
    nameEn: "Overall Assessment",
    blocks: [
      {
        type: "text",
        text: "ガードアトラクターは、本来の魅力・存在感が強い一方で、\"傷つきたくない気持ち\"が強まり、恋愛で急に距離を取る傾向があるタイプです。相手からは華やかに見えるのに、心の奥では慎重さや不安が大きく、親密さの手前で立ち止まりやすいのが特徴。弱さや本音を少しずつ共有できるようになると、あなたの魅力に温かさが加わり、\"近づける安心\"と\"惹きつける魅力\"を同時に持つ理想的な関係が育ちます。",
      },
    ],
  },
];
