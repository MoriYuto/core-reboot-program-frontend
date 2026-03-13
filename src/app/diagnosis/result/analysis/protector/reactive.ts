import type { AnalysisItem } from "../types";

export const PROTECTOR_REACTIVE: AnalysisItem[] = [
  {
    name: "コア特徴",
    nameEn: "Core Characteristics",
    blocks: [
      {
        type: "highlight",
        text: "プロテクター型は基本的に誠実・安定・献身・優しさが強い。しかし反応型ではこの\"優しさ\"に「感情の揺れ」が乗り、相手の言動に敏感・少しの温度差でも不安・尽くしすぎる・気遣いすぎる・愛情深い分傷つきやすい・衝動的に心が反応。",
      },
      {
        type: "section",
        emoji: "✨",
        heading: "もともとプロテクターは",
        items: ["誠実で安定", "献身的で優しい", "相手を守りたい気持ちが強い", "愛情深い"],
        variant: "positive",
      },
      {
        type: "warning",
        emoji: "⚡",
        heading: "反応型になると",
        items: ["相手の言動に敏感", "少しの温度差でも不安", "尽くしすぎる・気遣いすぎる", "愛情深い分傷つきやすい", "衝動的に心が反応する"],
      },
      {
        type: "insight",
        label: "言い換えると、",
        text: "\"優しいのに脆く、穏やかだけど揺れやすい\"タイプ。",
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
          "相手を大切にしすぎて自分を後回し",
          "相手のちょっとした変化でも気持ちが不安定",
          "尽くす→不安→過剰に反応→自己嫌悪のループ",
          "優しいのに不安が隠せない",
          "関係を守りたい気持ちは強い",
          "でも不安が出ると一気に感情が表に出る",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "恋愛は\"安定したいのに揺れてしまう戦い\"に。",
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
          "相手の言動を読みすぎる",
          "ちょっとした変化で心がザワつく",
          "尽くしすぎて疲れる",
          "「嫌われた？」とすぐ思ってしまう",
          "感情が溢れやすく涙や落ち込みが表に出る",
          "安心を求める連絡が増える",
          "自分のケアを忘れがち",
          "優しさが\"重さ\"に変わる瞬間が出やすい",
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
        heading: "「愛されるためには頑張らなきゃ」「見捨てられたら怖い」という価値観",
        items: [
          "自己犠牲が評価される環境",
          "不安型の愛着形成",
          "相手の機嫌で安心が左右される恋愛",
          "尽くしたのに報われない経験",
          "\"守りたい気持ち\"と\"見捨てられ不安\"が同時に走りやすい",
        ],
      },
      {
        type: "insight",
        label: "この構造ゆえに、",
        text: "優しさと不安が表裏一体になりやすい。",
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
        heading: "誰よりも一途で深い愛を育てたい人",
        items: [
          "しかしその純粋さゆえに相手を失う怖さ",
          "温度差への敏感さ",
          "安心感への依存",
          "過度な自己責任（私のせい？）が浮上しやすい",
          "心は優しい分、繊細で傷つきやすい",
        ],
        variant: "neutral",
      },
      {
        type: "insight",
        label: "本質は、",
        text: "愛情深いがゆえに不安も深いタイプ。",
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
          "優しくしてくれる人",
          "情に厚いタイプ",
          "安心感をくれる男性",
          "温度の安定した男性",
        ],
        variant: "positive",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "注意",
        items: [
          "\"相手の気分に左右されやすい男性\"を選ぶと依存と不安の連鎖になりやすい。",
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
          "不安が爆発",
          "行動が重くなる",
          "尽くしすぎて疲弊",
          "感情が溢れ相手が驚く",
          "自分で自分を責める",
          "関係の温度差が激しくなる",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "突然の爆発ではなく\"小さな揺れが積み重なって大波になる\"のが特徴。",
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
              "優しさで受け止めるが心の中では小さな不安が積もりやすい。",
              "彼の態度の変化に敏感になり\"気にしないふり\"だけが増える。",
              "外では穏やか内ではモヤモヤが渦巻く\"静かな反応型\"になりやすい。",
            ],
          },
          {
            emoji: "🔹",
            label: "長期",
            items: [
              "不安の蓄積が限界を超えると突然涙が出たり大きく落ち込むことが増える。",
              "彼の言動を深読みしすぎて受け身の恋愛から抜け出せなくなる。",
              "「傷つきたくない」気持ちが大きくなり恋愛自体を避ける傾向に。",
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
              "心がザワつく",
              "「嫌われた？」の思考",
              "返信の意味を深読み",
              "安心のために連絡したくなる衝動",
            ],
          },
          {
            trigger: "LINEの温度差",
            reactions: [
              "不安",
              "過剰に気遣った文章",
              "「私何かした？」の確認欲求",
              "相手に合わせて無理する",
            ],
          },
          {
            trigger: "予定変更",
            reactions: [
              "「大事にされてない？」と感じる",
              "でも強く言えない",
              "その結果落ち込む",
            ],
          },
          {
            trigger: "衝突",
            reactions: [
              "感情が溢れる",
              "涙や怒りが出やすい",
              "でも後で強く後悔する",
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
              { speaker: "彼", text: "「返信遅れてごめん」", isUser: false },
              {
                speaker: "あなた",
                text: "「全然大丈夫だよ！気にしないでね！」",
                isUser: true,
              },
            ],
            summary: "（本当は寂しかった）",
          },
          {
            exchanges: [
              { speaker: "彼", text: "「今日は予定変わりそう」", isUser: false },
              {
                speaker: "あなた",
                text: "「OK！無理しないでね！」",
                isUser: true,
              },
            ],
            summary: "（本当は悲しい）",
          },
          {
            exchanges: [
              { speaker: "彼", text: "「怒ってる？」", isUser: false },
              { speaker: "あなた", text: "「怒ってないよ」", isUser: true },
            ],
            summary: "（怒ってはないけど悲しい）",
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
            trigger: "温度差",
            reactions: [
              "不安が一気に跳ね上がる",
              "過剰に気遣うor衝動的に反応",
            ],
          },
          {
            trigger: "不確実性",
            reactions: [
              "最も苦手",
              "予定が曖昧だと心が揺れる",
            ],
          },
          {
            trigger: "自分からばかり尽くしている",
            reactions: ["無意識に「返してほしい」が募る"],
          },
          {
            trigger: "対話不足",
            reactions: ["孤独感", "感情が溢れて泣いてしまう"],
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
        text: "あなたは彼の言葉や行動の温度に合わせて、必死で気遣い続けていた。",
      },
      {
        type: "list",
        items: [
          "しかしある日彼が言う「なんか…気持ちが重い時があるんだ。」",
          "一瞬心が真っ白になる。",
          "あなたはただ\"安心したいだけ\"だったのに。",
          "結局頑張りすぎた優しさがあなた自身を苦しめていた。",
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
          "相手に楽しんでもらおうと必死",
          "自分の気持ちより相手の機嫌",
          "笑顔が続くが時々疲れが出る",
          "少しの温度差でも敏感",
          "相手の反応を気にしすぎる",
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
          "丁寧でやや長文",
          "気遣いが強い（優しすぎる文）",
          "心の揺れが文章の温度に出る",
          "返事が早すぎる",
          "\"安心させたい\"文章が多い",
          "「大丈夫？」など確認ワードが増えやすい",
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
            "優しい",
            "一途",
            "頑張ってくれる",
            "大事にしてくれる",
          ],
        },
        bad: {
          heading: "⚠ 誤解される部分",
          items: [
            "気持ちが重い",
            "不安が強い",
            "感情の波が激しい",
            "自分で抱え込みすぎる",
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
            action: "不安の扱い",
            detail: "不安を感じた時に一呼吸おく習慣",
          },
          {
            num: "②",
            category: "自己肯定感",
            action: "自分の価値の再認識",
            detail: "自分の価値を相手の反応に依存させない",
          },
          {
            num: "③",
            category: "コミュニケーション",
            action: "本音の小出し",
            detail: "小さな本音を伝える練習",
          },
          {
            num: "④",
            category: "愛着",
            action: "安定型に向けた練習",
            detail: "安定した愛着パターンを育てる",
          },
        ],
        summary:
          "このステップで優しさが\"重さではなく温かさ\"として伝わる恋愛が実現します。",
      },
    ],
  },
  {
    name: "改善後の未来ストーリー",
    nameEn: "Future Story After Improvement",
    blocks: [
      {
        type: "highlight",
        text: "あなたが「安心は相手ではなく、自分の中に育てられる」と気づいたとき、恋愛は大きく変わる。",
      },
      {
        type: "list",
        items: [
          "反応しすぎない",
          "期待しすぎない",
          "尽くしすぎない",
          "本来の優しさが\"重たくない愛\"に戻る",
        ],
      },
      {
        type: "insight",
        label: "成長すると、",
        text: "あなたは穏やかで深い愛情のまま、安定した関係を築く力を取り戻す。",
      },
    ],
  },
  {
    name: "総評",
    nameEn: "Overall Assessment",
    blocks: [
      {
        type: "text",
        text: "インパルスプロテクターは、普段は穏やかで優しいのに、恋愛になると\"好きだからこそ揺れる\"繊細さが強く出るタイプです。相手の変化に敏感で、守りたい気持ちが不安や過剰な配慮に変わりやすい傾向があります。不安や寂しさをそのまま小さく共有できるようになると、安心と信頼が自然に深まり、あなたの優しさが\"重さではなく温かさ\"として伝わる関係へと育っていきます。",
      },
    ],
  },
];
