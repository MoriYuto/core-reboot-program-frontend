import type { AnalysisItem } from "../types";

export const BLOCKER_EVOLUTION: AnalysisItem[] = [
  {
    name: "コア特徴",
    nameEn: "Core Characteristics",
    blocks: [
      {
        type: "highlight",
        text: "ブロッカー型は本来心を簡単に開かない・深い関係が怖い・本音を閉じる・距離をコントロールして安心を保つという\"防御OS\"を持つ。",
      },
      {
        type: "section",
        emoji: "✨",
        heading: "成長型では",
        items: [
          "感情を適切に感じる",
          "小さな自己開示ができる",
          "適切な距離感を言語化できる",
          "不安があっても逃げずに扱える",
          "壁は残るが\"扉\"として機能する",
        ],
        variant: "positive",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "注意",
        items: ["完全に壁がなくなるわけではないが、開閉を選べるようになる"],
      },
      {
        type: "insight",
        label: "特徴",
        text: "「守りすぎる恋」から「選んで開ける恋」へ進化した姿。",
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
          "相手との距離を健全に調整できる",
          "感情シャットダウンが減る",
          "本音に近い話が増える",
          "安心と温度のバランスが良くなる",
          "深い関係を\"負担ではなく安心\"として捉えられる",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "",
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
          "「怖いけど伝える」を選べる",
          "弱みを少しずつ開示",
          "感情を受け止めてから言葉にする",
          "必要な距離を説明できる",
          "防衛反応に気づき調整できる",
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
        heading: "「弱さを見せた瞬間に傷つく」「踏み込まれると苦しい」「自立している方が安全」という\"心の壁OS\"がベース",
        items: [
          "成長型では「開く・閉じる」を自分で選べる",
          "必要な時に踏み込める",
          "相手を信じる\"余白\"を持てる",
          "\"選択可能な情緒システム\"へ変化する",
        ],
      },
      {
        type: "insight",
        label: "心理",
        text: "心の壁が\"扉\"として機能し、自分で開閉をコントロールできるようになる。",
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
        heading: "深層心理（成長後）",
        items: [
          "本音を伝えることで得られる安心を知る",
          "相手との距離が縮む喜びを感じ始める",
          "逃げずに\"共にいる\"選択ができる",
          "大切な人の前では自然と柔らかくなる",
        ],
        summary: "「深い関係は怖い」→「深い関係は心地よい」に変換され始めている状態。",
        variant: "positive",
      },
      {
        type: "insight",
        label: "特徴",
        text: "深い関係への恐怖が、安心へと変換され始めている。",
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
          "穏やか",
          "誠実",
          "ゆっくり関係を深めるタイプ",
          "境界線を尊重してくれる大人の男性",
        ],
        variant: "positive",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "注意",
        items: ["成長後は\"急がない男性\"を最も居心地よく感じる"],
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
          "時々感情が固まる",
          "深まるスピードが早いと反動で閉じる",
          "本音は言えるが\"量が少ない\"",
          "説明が苦手な場面が残る",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "初期ブロッカー時代のような急激なシャットダウンは大幅に減少する。",
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
              "好きになるほど不安が強まり距離の詰め方が分からなくなる",
              "相手の行動を深読みしすぎて感情が揺れやすい",
              "積極的になりたいのにいざとなると動けず自己嫌悪が増える",
            ],
          },
          {
            emoji: "🔹",
            label: "長期",
            items: [
              "恋愛が\"怖いもの\"として定着しチャレンジ自体が減る",
              "「私には難しい」という思い込みが強化され恋愛回避が習慣化",
              "恋愛経験が増えず自己肯定感がさらに下がる",
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
              "以前ほど不信にならない",
              "気にしつつも落ち着いて待てる",
              "追撃はほぼ消える",
            ],
          },
          {
            trigger: "既読スルー",
            reactions: [
              "一呼吸置ける",
              "閉じずに様子を見る",
              "「どうしたんだろう？」と優しく確認できる",
            ],
          },
          {
            trigger: "深い話を求められる",
            reactions: [
              "ゆっくりなら話せる",
              "急ぎには弱い",
              "小さく開示できる",
            ],
          },
          {
            trigger: "温度差",
            reactions: [
              "閉じる前に言葉で調整できる",
              "反動で距離を取りすぎない",
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
                text: "「もっと深く話せたら嬉しい」",
                isUser: false,
              },
              {
                speaker: "あなた",
                text: "「うん、私も。少しずつでいいなら話したい」",
                isUser: true,
              },
            ],
            summary: "\"時間をかける\"スタンスが言える",
          },
          {
            exchanges: [
              {
                speaker: "彼",
                text: "「仕事忙しい？」",
                isUser: false,
              },
              {
                speaker: "あなた",
                text: "「ちょっとね。でも会えると安心するよ」",
                isUser: true,
              },
            ],
            summary: "ポジティブ開示ができる",
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
            reactions: [
              "以前: シャットアウト",
              "成長後: ペースを相談",
            ],
          },
          {
            trigger: "感情ぶつけ",
            reactions: [
              "以前: 逃避",
              "成長後: 「少し待ってね」と調整",
            ],
          },
          {
            trigger: "放置感",
            reactions: [
              "以前: 急な壁",
              "成長後: 理由を確認できる",
            ],
          },
          {
            trigger: "深い話",
            reactions: [
              "以前: 無反応",
              "成長後: 小さく返せる",
            ],
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
        text: "彼が距離を縮める→心がざわつく→以前なら閉じていた→今は「怖いけど話そう」と選択。",
      },
      {
        type: "list",
        items: [
          "関係が安定する",
          "男性は「本当に向き合ってくれるようになった」と感じる",
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
          "表情が柔らかい",
          "リアクションが増える",
          "手を繋がれると嬉しい",
          "沈黙も平気",
          "その場で小さな本音を伝えられる",
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
          "短文すぎない",
          "スタンプを使う",
          "既読スルーの耐性UP",
          "一言の本音が添えられる（例:「今日は嬉しかったよ」）",
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
            "近づきやすい",
            "安心感がある",
            "素直さが魅力",
            "大人の落ち着き",
          ],
        },
        bad: {
          heading: "誤解される点",
          items: [
            "時々距離が変わる",
            "深い話は時間が必要",
            "感情説明が控えめ",
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
            category: "愛着",
            action: "回避→安定へ",
            detail: "安定した愛着パターンへ移行する",
          },
          {
            num: "②",
            category: "自己認識",
            action: "防衛行動の把握",
            detail: "防衛パターンに気づく力を育てる",
          },
          {
            num: "③",
            category: "コミュニケーション",
            action: "開示の練習",
            detail: "小さな本音から伝える練習",
          },
          {
            num: "④",
            category: "感情マネジメント",
            action: "揺れの俯瞰",
            detail: "感情を俯瞰して扱う力を育てる",
          },
        ],
        summary: "このステップで\"守る恋\"から\"繋がる恋\"へ進化します。",
      },
    ],
  },
  {
    name: "改善後の未来ストーリー",
    nameEn: "Future Story After Improvement",
    blocks: [
      {
        type: "highlight",
        text: "ブロッカー型×成長型とは\"守る恋\"から\"繋がる恋\"へ進化した姿。",
      },
      {
        type: "list",
        items: [
          "距離が自然に縮まる",
          "逃げない恋になる",
          "甘える・頼るが自然にできる",
          "心の壁に\"扉\"がつく",
          "深い親密さに安心できる",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "心の壁が薄くなるほど深い信頼と温かい愛が生まれるタイプ。",
      },
    ],
  },
  {
    name: "総評",
    nameEn: "Overall Assessment",
    blocks: [
      {
        type: "text",
        text: "エヴォリューションブロッカーは、本来の繊細さや不安を丁寧に扱えるようになり、\"怖さがあっても前に進める力\"を手に入れた成熟タイプです。感情の揺れを自分で整えながら、相手にも誠実に向き合えるため、恋愛が安定しやすいのが特徴。小さな一歩を積み重ねるほど自己信頼が増し、\"守りから前進へ\"と変化し、あなたらしい優しさで深い関係を築ける健全な恋愛へと育っていきます。",
      },
    ],
  },
];
