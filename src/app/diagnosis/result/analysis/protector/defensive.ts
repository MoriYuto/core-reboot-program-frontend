import type { AnalysisItem } from "../types";

export const PROTECTOR_DEFENSIVE: AnalysisItem[] = [
  {
    name: "コア特徴",
    nameEn: "Core Characteristics",
    blocks: [
      {
        type: "highlight",
        text: "プロテクター型はもともと思いやり／誠実／献身／安定志向が強い。防衛型になると「感情を閉じる」×「距離を保つ」が加わり、「優しいのに壁がある」タイプ。",
      },
      {
        type: "section",
        emoji: "✨",
        heading: "防衛型の特徴が加わると",
        items: [
          "優しいけど入れない",
          "心の扉が重い",
          "深い関係が怖い",
          "甘えるのが苦手",
          "自分の世界を守る",
          "恋愛に\"温度差\"が出やすい",
        ],
        variant: "neutral",
      },
      {
        type: "warning",
        emoji: "🛡️",
        heading: "結果",
        items: ["優しさと壁が同居し、相手からは「近づけない」と感じられやすい"],
      },
      {
        type: "insight",
        label: "",
        text: "「優しいのに壁がある」タイプ。",
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
          "相手を尊重するが深く踏み込ませない",
          "好意はあるのに温度が低く見える",
          "距離感が常に一定",
          "\"必要以上に近づかない\"癖",
          "弱みを見せない",
          "相手からすると心が読めない",
          "長期的に\"静かな孤独\"が進むことがある",
        ],
      },
      {
        type: "insight",
        label: "",
        text: "優しさと距離の同居が、恋愛を静かに進ませる。",
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
          "不満を言わずに距離を取る",
          "愛情表現は控えめ（淡白）",
          "連絡の頻度が一定（増えない）",
          "頼られるのは得意だが頼るのは苦手",
          "悩みを抱え込む",
          "感情を見せたくない",
          "自分を守るために\"静かに引く\"",
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
        heading: "根底にある信念",
        items: [
          "「傷つきたくない」",
          "「期待すると裏切られる」",
          "「深く入りすぎると自分が壊れる」",
          "感情を出して否定された・距離が近い関係で苦しい経験・親が感情的／不安定で\"自己管理\"を覚えた・過去の恋愛で利用された裏切られた",
        ],
        summary: "\"感情を出さない＝安全\"というOSが形成。",
      },
      {
        type: "insight",
        label: "",
        text: "過去の傷が、心を閉じる防衛パターンを強化している。",
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
        heading: "心の奥では",
        items: [
          "好きだけど傷つくのが怖い",
          "踏み込むと自分が崩れる気がする",
          "本音を見せたら弱いと思われる",
          "相手の期待に応え続けるのが怖い",
        ],
        summary: "本当は優しさも愛情もあるのに表現が苦手なだけ。",
        variant: "neutral",
      },
      {
        type: "insight",
        label: "",
        text: "欲求と恐れが同居し、心を開く一歩が踏み出せない。",
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
          "落ち着いている男性",
          "深追いしない大人タイプ",
          "自立している男性",
          "しつこくない放任主義に近い人",
        ],
        variant: "positive",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "注意",
        items: [
          "距離を詰めてくれない男性だと永遠に浅い関係のまま終わる可能性も",
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
          "相手が踏み込みたくても扉が開かない",
          "誤解される（冷たい／興味ない）",
          "本音を言わずに静かに距離",
          "相手の不安が増える",
        ],
      },
      {
        type: "insight",
        label: "問題点",
        text: "\"優しさの背後にある静かな距離\"が問題となる。",
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
              "表面的には穏やかだが内面では\"本音を知られたくない恐れ\"が強くなる。",
              "彼が踏み込んでくると後ずさりし距離が一定以上縮まらない。",
              "優しさでカバーしつつ心の扉は固く閉じたまま。",
            ],
          },
          {
            emoji: "🔹",
            label: "長期（6ヶ月〜1年以降）",
            items: [
              "親密になるほど\"逃げたくなるOS\"が固定化し深い関係が築けなくなる。",
              "相手が「本心が掴めない」「壁を感じる」と受け取り恋愛が続かない。",
              "最終的に\"誰にも頼れない恋愛パターン\"が繰り返され孤立感が強まる。",
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
              "気にしない（表面上）",
              "内側では「距離があってちょうどいい」",
              "寂しさを感じても表には出さない",
            ],
          },
          {
            trigger: "LINEの温度差",
            reactions: [
              "あまり気にしない",
              "相手の熱量に押されると逆に距離を置く",
            ],
          },
          {
            trigger: "予定が曖昧",
            reactions: [
              "不満はあるが言わない",
              "\"静かに冷める\"方向へ",
            ],
          },
          {
            trigger: "衝突時",
            reactions: [
              "感情を出さない",
              "その場は冷静",
              "後から距離を取る",
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
                text: "「もっと気持ちを教えてほしい」",
                isUser: false,
              },
              {
                speaker: "あなた",
                text: "「うーん、特にないよ」（本当はあるが言えない）",
                isUser: true,
              },
              {
                speaker: "彼",
                text: "「最近距離を感じる」",
                isUser: false,
              },
              {
                speaker: "あなた",
                text: "「そんなことないよ」（実は意図的に距離を取った）",
                isUser: true,
              },
              {
                speaker: "彼",
                text: "「寂しい」",
                isUser: false,
              },
              {
                speaker: "あなた",
                text: "「無理しなくていいよ」（自分も寂しいが言えない）",
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
            trigger: "相手が感情的に踏み込んでくる",
            reactions: ["一気に心が閉じる", "距離を置く"],
          },
          {
            trigger: "過剰な期待",
            reactions: ["負担感", "回避・遮断"],
          },
          {
            trigger: "過去の恋愛を思い出す瞬間",
            reactions: ["一気に殻に戻る"],
          },
          {
            trigger: "\"弱さを見せなきゃいけない\"場面",
            reactions: ["防衛反応", "感情を切る"],
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
        text: "あなたは彼に優しく接していた。感情も安定していたし関係も悪くなかった。",
      },
      {
        type: "list",
        items: [
          "ところが彼が言う「もっと気持ちを知りたい。踏み込みたい。」",
          "その瞬間胸が重くなる。",
          "\"期待されている…重い…\"と感じゆっくり距離を取っていく。",
          "彼は混乱しあなたは\"負担をかけたくないから距離を置く\"。",
          "二人は同じ迷宮に迷い込む。",
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
          "控えめ",
          "優しいが淡白",
          "沈黙でも平気",
          "深い話を避ける",
          "相手に合わせすぎない（一定の距離）",
          "頼られるのは得意、甘えるのは苦手",
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
          "淡白",
          "温度の変化が少ない",
          "感情表現は最小限",
          "質問が少ない",
          "連絡頻度は一定",
          "相手に依存させない文面",
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
            "優しい",
            "束縛しない",
            "付き合いやすい",
            "自立している",
          ],
        },
        bad: {
          heading: "誤解される点",
          items: [
            "気持ちが分からない",
            "冷たく感じる",
            "本当に好きなのか不明",
            "距離を縮めても下がる",
            "恋愛に興味なさそう",
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
            detail: "極小さな本音から伝える練習",
          },
          {
            num: "③",
            category: "感情マネジメント",
            action: "安心して揺れる練習",
            detail: "感情の揺れを許可する",
          },
          {
            num: "④",
            category: "愛着",
            action: "安定型への更新",
            detail: "安定した愛着パターンを育てる",
          },
        ],
        summary:
          "このステップで\"守る恋愛\"から\"育てる恋愛\"へ進化します。",
      },
    ],
  },
  {
    name: "改善後の未来ストーリー",
    nameEn: "Future Story After Improvement",
    blocks: [
      {
        type: "highlight",
        text: "あなたが心の扉を少しずつ開き、\"弱さ＝迷惑\"ではないと理解すると、恋愛は劇的に変わる。",
      },
      {
        type: "list",
        items: [
          "距離を保ちながらも温度が増す",
          "相手との感情交流が深まる",
          "安心と親密さを両立できる",
          "\"守る恋愛\"→\"育てる恋愛\"へ進化",
        ],
      },
      {
        type: "insight",
        label: "",
        text: "あなたの優しさは本来\"深い絆を育てられる力\"を持っている。防衛型を抜けるとその力が最大限に花開く。",
      },
    ],
  },
  {
    name: "総評",
    nameEn: "Overall Assessment",
    blocks: [
      {
        type: "text",
        text: "シールドプロテクターは、優しさと誠実さが土台にある一方で、\"傷つきたくない気持ち\"が強く、心を開くまでに時間を要するタイプです。相手の気持ちを優先しすぎて、自分の本音を引っ込めやすい傾向があり、距離が縮まる前に守りに入りやすいのが特徴。小さな弱さや本音を少しずつ出せるようになると、相手はあなたの温かさに安心し、安全な距離感から\"心が触れ合う関係\"へと自然に進んでいきます。",
      },
    ],
  },
];
