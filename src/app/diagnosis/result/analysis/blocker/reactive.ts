import type { AnalysisItem } from "../types";

export const BLOCKER_REACTIVE: AnalysisItem[] = [
  {
    name: "コア特徴",
    nameEn: "Core Characteristics",
    blocks: [
      {
        type: "highlight",
        text: "普段は「冷静・寡黙・抑えた人」だが恋愛になると押し込めた感情が揺れ動きやすくなる。",
      },
      {
        type: "section",
        emoji: "✨",
        heading: "日常は\"静\"・恋愛は\"揺れ\"・本心は\"閉じる\"・外側では\"反応する\"",
        items: [
          "「外静×内動の二重構造」を持つ",
        ],
        variant: "neutral",
      },
      {
        type: "warning",
        emoji: "⚡",
        heading: "ブロッカー型の「抑える力」と反応型の「揺れる力」が同時に働く",
        items: [
          "表面は落ち着いて見えても内側では不安・焦り・孤独が渦巻きやすい",
        ],
      },
      {
        type: "insight",
        label: "言い換えると、",
        text: "\"外静×内動の二重構造\"を持つ繊細タイプ。",
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
          "普段は冷静なのに恋愛中だけ情緒が揺れる",
          "本音は言えないが反応だけ先に出てしまう",
          "気持ちが伝わらず誤解される",
          "相手が距離を取り始めると不安が強くなる",
          "静か→揺れる→冷めるの波がある",
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
          "返信が遅いと急に不安になる、しかし不安を言えない",
          "言葉にできないイライラを態度に出してしまう",
          "「もういい」と言いながら心では求めている",
          "気持ちを言わない分反応が強くなる",
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
        heading: "ブロッカー型の\"閉じるOS\"と反応型の\"揺れるOS\"が衝突",
        items: [
          "「本音は隠す」「感情は出る」「説明はできない」という自己矛盾が起きやすい",
          "根底には愛されたい・でも怖い・近づきたい・でも傷つくのは嫌という防衛と欲求のせめぎ合い",
        ],
      },
      {
        type: "insight",
        label: "この構造ゆえに、",
        text: "内側で感情が凝縮し、反応として出てしまう。",
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
        heading: "本当は\"つながり\"を求めている",
        items: [
          "表現が苦手・本音が言えない・甘えるのが怖いため気持ちが内側で凝縮し",
          "反応(既読スルー不安、イライラ、冷たさ)として出てしまう",
          "言葉にできたらもっと優しいタイプ",
        ],
        variant: "neutral",
      },
      {
        type: "insight",
        label: "本質は、",
        text: "言葉にできるようになれば、本来の優しさが伝わる。",
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
          "追ってくるタイプ",
          "優しくて包容力がある人",
          "積極的に気持ちを伝えてくれる人",
        ],
        variant: "positive",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "注意",
        items: [
          "気分で距離が変わる男性・連絡が乱れる男性には依存・反発の波が出やすい",
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
          "本音が見えないのに反応は強い、相手が混乱する",
          "「何を考えてるの？」と言われやすい",
          "説明できず沈黙",
          "\"感情だけ届く恋愛\"になりやすい",
        ],
      },
      {
        type: "insight",
        label: "最も典型なのは、",
        text: "感情が伝わり、本音が伝わらないギャップ。",
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
              "不安が刺激されると衝動的な行動をして後悔しやすい",
              "返信の遅れや温度差に強く反応してしまう",
              "情緒が不安定になり恋愛疲れが出やすい",
            ],
          },
          {
            emoji: "🔹",
            label: "長期",
            items: [
              "感情の揺れが激しく安定した関係が築けない",
              "不安→衝動→後悔のループが習慣化する",
              "「恋愛すると自分が壊れる」と感じ恋愛自体を遠ざける",
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
              "不安",
              "返事が来ても素直に喜べない",
              "気持ちの波で距離を調整しがち",
            ],
          },
          {
            trigger: "既読スルー",
            reactions: [
              "内側でパニック",
              "でも何も言えない",
              "突然LINEが冷たくなることも",
            ],
          },
          {
            trigger: "押される(好意を向けられる)",
            reactions: [
              "嬉しい",
              "でも怖い",
              "甘えたいのに甘えられない",
            ],
          },
          {
            trigger: "温度差",
            reactions: [
              "一気に不安",
              "でも感情を説明できず誤解される",
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
              { speaker: "彼", text: "「最近どうしたの？なんか距離感じる」", isUser: false },
              {
                speaker: "あなた",
                text: "「別に」",
                isUser: true,
              },
            ],
            summary: "本音と表現のギャップ（心では\"寂しい\"と思っているが言えない）",
          },
          {
            exchanges: [
              { speaker: "彼", text: "「もっと話そうよ」", isUser: false },
              {
                speaker: "あなた",
                text: "「なんか疲れた」",
                isUser: true,
              },
            ],
            summary: "疲れの裏にある\"理解されたい\"気持ち",
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
            trigger: "既読スルー",
            reactions: ["表:無表情・冷静", "内側:不安MAX"],
          },
          {
            trigger: "温度差",
            reactions: ["表:素っ気ない", "内側:焦り"],
          },
          {
            trigger: "予定変更",
            reactions: ["表:「そうなんだ」", "内側:失望感"],
          },
          {
            trigger: "器の小ささ指摘",
            reactions: ["表:沈黙", "内側:傷つき"],
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
        text: "相手が距離を取る→不安が爆発しそうになる→でも何も言えない→態度が冷たくなる→相手が「冷めたの？」と誤解。",
      },
      {
        type: "list",
        items: [
          "あなたは\"さらに閉じる\"",
          "関係が静かに壊れていく",
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
          "最初は落ち着いている",
          "急に視線をそらす",
          "気持ちを伝えたいのに言えない",
          "手を繋がれると嬉しいが反応薄",
          "帰り道で「もっと話せばよかった」と後悔",
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
          "温度差が出やすい",
          "冷たく見える",
          "返信が波のように変わる",
          "イライラを文章に出さないが短文になる",
          "「何でもない」で終わらせる",
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
            "落ち着いてる",
            "大人っぽい",
            "たまに見せる素直さが可愛い",
          ],
        },
        bad: {
          heading: "⚠ 誤解される部分",
          items: [
            "何を考えているか分からない",
            "温度の変動が読めない",
            "本音がまったく分からず不安",
            "近づくと逃げられる",
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
            action: "感情の波を理解",
            detail: "自分の感情パターンに気づく",
          },
          {
            num: "②",
            category: "感情マネジメント",
            action: "衝動の言語化",
            detail: "衝動を言葉に変える力を育てる",
          },
          {
            num: "③",
            category: "愛着",
            action: "安心してつながる感覚づくり",
            detail: "安全な繋がりの感覚を育てる",
          },
          {
            num: "④",
            category: "コミュニケーション",
            action: "短文ではなく気持ちを添える",
            detail: "気持ちを一言添える練習",
          },
        ],
        summary: "このステップで\"静か×温かい恋愛\"が実現します。",
      },
    ],
  },
  {
    name: "改善後の未来ストーリー",
    nameEn: "Future Story After Improvement",
    blocks: [
      {
        type: "highlight",
        text: "ブロッカー型×反応型は\"外静×内動の二重構造\"を持つ繊細タイプ。",
      },
      {
        type: "list",
        items: [
          "気持ちの波に振り回されなくなる",
          "言えなかった\"不安\"を少しずつ言える",
          "男性が安心して寄り添える関係に",
          "揺れが減り恋愛の継続力が上がる",
          "静か×温かい恋愛が実現する",
        ],
      },
      {
        type: "insight",
        label: "言葉にできるようになるほど",
        text: "あなたの本来の優しさが伝わり深い関係が築ける。",
      },
    ],
  },
  {
    name: "総評",
    nameEn: "Overall Assessment",
    blocks: [
      {
        type: "text",
        text: "リアクティブブロッカーは、普段は控えめで静かなのに、恋愛になると\"不安・期待・寂しさ\"が一気に押し寄せ、感情が揺れやすいタイプです。揺れを抑え込もうとして負荷がかかり、相手に伝わらないまま自分だけが苦しくなりがち。揺れた瞬間の気持ちを小さく共有できるようになると、感情が安定し、\"臆病さが優しさに変わる恋愛\"へと自然にシフトしていきます。",
      },
    ],
  },
];
