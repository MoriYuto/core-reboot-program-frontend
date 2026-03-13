import type { AnalysisItem } from "../types";

export const ADJUSTER_REACTIVE: AnalysisItem[] = [
  {
    name: "コア特徴",
    nameEn: "Core Characteristics",
    blocks: [
      {
        type: "highlight",
        text: "アジャスター型の柔らかさに反応型の\"感情の波の大きさ\"が掛け合わさる。優しい・感受性が強い・感情が動きやすい・その場で反応しすぎる・後で後悔しやすい。",
      },
      {
        type: "section",
        emoji: "✨",
        heading: "本音は「もっと仲良くしたい」「理解してほしい」",
        items: [
          "感情の揺れによって距離が近づいたり遠のいたりしやすい",
        ],
        variant: "neutral",
      },
      {
        type: "warning",
        emoji: "⚡",
        heading: "アジャスター×反応型の特徴",
        items: [
          "相手に合わせたい気持ちと感情の波が同時に働き、揺れ幅が大きくなりやすい",
        ],
      },
      {
        type: "insight",
        label: "言い換えると、",
        text: "\"優しさ × 感情の波 × 反応しやすさ\" の複合OS。",
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
          "感情の波が恋愛の温度に直結",
          "相手の態度に一喜一憂",
          "仲良くなると甘えが強く出る",
          "少しの変化を過敏に察知する",
          "我慢と爆発を繰り返しやすい",
          "相手中心になるが満たされないと衝動的に言ってしまう",
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
          "寂しさをそのままLINEでぶつける",
          "理解してほしくて説明が長くなる",
          "温度差に弱い",
          "相手の気持ちを深読みしすぎる",
          "「察してほしい」が強くなる",
          "言いすぎて後悔",
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
        heading: "愛の感受性の強さと負のループ",
        items: [
          "\"愛情を感じたい\"・\"不安が出るとすぐ確認したくなる\"・\"距離が縮まると甘えたい\"という愛の感受性の強さ",
          "アジャスター特有の「相手に合わせたい」「傷つけたくない」がブレーキとなり→感情が溢れる→我慢→どこかのタイミングで溢れる(反応)→言いすぎて後悔→負のループ",
        ],
      },
      {
        type: "insight",
        label: "この構造ゆえに、",
        text: "感情の波に飲まれると伝え方が乱れやすい。",
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
        heading: "本当は「もっと愛されたい」「もっと安心したい」「もっと仲良くしたい」",
        items: [
          "\"感じる力\"が強い",
          "恋愛の温度差に一瞬で反応してしまう",
          "優しさで調整しつつも感情の波に飲まれると「伝え方」が乱れやすい",
          "ただそれだけ",
        ],
        variant: "neutral",
      },
      {
        type: "insight",
        label: "本質は、",
        text: "愛情深さと感受性の強さが、感情の波と結びつくと伝え方が乱れやすい。",
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
          "優しい",
          "包容力がある",
          "感情的に安定している",
          "話を聞いてくれる男性",
        ],
        variant: "positive",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "注意",
        items: [
          "\"鈍感で温度差のある男性\"を選ぶと感情が振り回されやすい",
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
          "衝動LINEでこじれる",
          "不安で確認しすぎる",
          "相手の温度が下がると一気に落ち込む",
          "話し合いで感情が爆発しやすい",
        ],
      },
      {
        type: "insight",
        label: "最も典型なのは、",
        text: "",
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
              "普段は調整上手なのにふとした不安で感情が暴走しやすい",
              "彼の反応の変化に敏感になり気持ちが上下しやすい",
              "コミュ力が高いぶん言いすぎたり早とちりしやすい",
            ],
          },
          {
            emoji: "🔹",
            label: "長期",
            items: [
              "感情の揺れ幅が大きく相手が疲れて距離を置きやすくなる",
              "相手軸→不安→暴走→後悔のループが固定化",
              "恋愛が不安定になり長続きしにくい",
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
              "「何かあった？」が頭の中で渦巻く",
              "我慢しようとしてもムズムズ",
              "抑えきれず気持ちが反応LINEに出る",
            ],
          },
          {
            trigger: "返信の遅さ",
            reactions: [
              "不安",
              "寂しさ",
              "怒り",
              "「どうせ私だけ好きなんだよね」みたいな衝動言語になりやすい",
            ],
          },
          {
            trigger: "温度差",
            reactions: [
              "感情化しやすい",
              "\"確認したい衝動\"が強く出る",
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
              { speaker: "彼", text: "「今日は疲れてて…」", isUser: false },
              { speaker: "あなた", text: "「なんで？私のこと面倒になった？」", isUser: true },
              { speaker: "彼", text: "「いや、ただ疲れただけ」", isUser: false },
            ],
            summary: "\"距離の変化\"を敏感に感じる vs 相手はただ疲れている",
          },
          {
            exchanges: [
              { speaker: "あなた", text: "「最近なんか冷たくない？」", isUser: true },
              { speaker: "彼", text: "「そんなことないよ」", isUser: false },
              { speaker: "あなた", text: "「でも前と違う気がして…」", isUser: true },
            ],
            summary: "温度差への過敏さが確認行動を生む",
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
            trigger: "返信の遅さ",
            reactions: ["すぐ不安が立ち上がる"],
          },
          {
            trigger: "温度差",
            reactions: ["\"嫌われた？\"と自動反応"],
          },
          {
            trigger: "曖昧な態度",
            reactions: ["深読み開始"],
          },
          {
            trigger: "否定",
            reactions: ["強い感情が出る"],
          },
          {
            trigger: "距離が開く",
            reactions: ["寂しさ", "反応LINE"],
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
        text: "少しの温度差で不安→我慢→でも感情が溢れる→感情のままに伝えて後悔→相手は疲れる→あなたはもっと不安。",
      },
      {
        type: "list",
        items: [
          "負の連鎖へ",
          "典型的な\"反応ループOS\"",
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
          "甘えたくなる",
          "相手の表情を観察しすぎる",
          "\"好きの温度\"を常にチェック",
          "少し素っ気ないと気持ちが乱れる",
          "良い時はめちゃくちゃ楽しい",
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
          "感情が文章に出やすい",
          "嬉しい時は長文",
          "不安な時も長文",
          "返信が早い",
          "返信がないと気になる",
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
          heading: "✓ 良い印象",
          items: [
            "素直",
            "可愛げがある",
            "愛情深い",
            "一緒にいて楽しい",
          ],
        },
        bad: {
          heading: "⚠ 誤解される部分",
          items: [
            "感情に波がある",
            "ちょっと重いと感じられることがある",
            "衝動的なLINEに困惑する",
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
            category: "感情マネジメント",
            action: "波の調整",
            detail: "感情の波を穏やかにする力を育てる",
          },
          {
            num: "②",
            category: "自己認識",
            action: "安心の土台づくり",
            detail: "自己肯定感を高める",
          },
          {
            num: "③",
            category: "コミュニケーション",
            action: "伝え方",
            detail: "感情を柔らかく伝える力",
          },
          {
            num: "④",
            category: "愛着",
            action: "不安の言語化",
            detail: "不安を安全に言語化する力",
          },
        ],
        summary: "このステップで甘えと自立のバランスが取れます。",
      },
    ],
  },
  {
    name: "改善後の未来ストーリー",
    nameEn: "Future Story After Improvement",
    blocks: [
      {
        type: "highlight",
        text: "アジャスター型×反応型は\"愛情深く感受性の強い\"タイプ。",
      },
      {
        type: "list",
        items: [
          "感情の波が整い恋愛が穏やかに",
          "\"寂しい\"\"嬉しい\"が優しく伝えられる",
          "男性から「分かりやすくて安心」と言われる",
          "甘えと自立のバランスが取れる",
          "愛される実感が増え恋が安定する",
        ],
      },
      {
        type: "insight",
        label: "感情を丁寧に扱えるようになるほど",
        text: "愛情の深さが最大の魅力になる。",
      },
    ],
  },
  {
    name: "総評",
    nameEn: "Overall Assessment",
    blocks: [
      {
        type: "text",
        text: "リアクトアジャスターは、相手への思いやりが強い一方で、恋愛では\"気持ちの揺れ\"を自分だけで抱え込みやすいタイプです。相手の言動に敏感に反応し、合わせすぎて疲れたり、我慢が溜まりやすい特徴があります。揺れた瞬間の本音や不安を小さく共有できるようになると、感情が安定し、\"優しさが循環し合う関係\"へと自然に変化していきます。",
      },
    ],
  },
];
