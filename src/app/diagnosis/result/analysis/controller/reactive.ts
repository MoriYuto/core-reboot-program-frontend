import type { AnalysisItem } from "../types";

export const CONTROLLER_REACTIVE: AnalysisItem[] = [
  {
    name: "コア特徴",
    nameEn: "Core Characteristics",
    blocks: [
      {
        type: "highlight",
        text: "本来整理・分析・冷静・コントロールを得意とするが反応型のサブOSが加わり\"理性と感情のズレ\"が強い。",
      },
      {
        type: "section",
        emoji: "✨",
        heading: "外側は冷静・内側は揺れやすい",
        items: [
          "コントロールしたいのに感情の波で動く",
          "想定外の出来事に弱い",
          "相手の反応に過剰に反応してしまう",
          "自己評価は高めだが恋愛になると不安定に",
        ],
        variant: "neutral",
      },
      {
        type: "warning",
        emoji: "⚡",
        heading: "思考のOS×感情のOS",
        items: ["\"思考のOS×感情のOS\"がぶつかるタイプ。"],
      },
      {
        type: "insight",
        label: "言い換えると、",
        text: "理性と感情の狭間で揺れる繊細な知性タイプ。",
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
          "自分の中で\"答え\"を作ってから恋愛を進めたい",
          "相手の言動に一喜一憂してしまう",
          "理性的なLINEを送るが感情は乱れやすい",
          "\"正解の恋愛\"をしようとする",
          "計画が崩れると不安・怒りが出る",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "計画と感情のバランスが取りにくい恋愛パターン。",
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
          "相手の態度の変化にすぐ反応",
          "冷静な言葉の裏で気分が大きく揺れている",
          "自分の感情を説明するのが苦手",
          "\"こうあるべき\"が強く期待が高い",
          "感情が溜まると突然バーンと出る(衝動)",
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
        heading: "表層(理性)と深層(反応)の二層構造",
        items: [
          "表層(理性):「論理的に正しく恋愛を進めたい」",
          "深層(反応):「どうしよう…嫌われた？」「なんでそうなるの？」",
          "この二層構造があるため想定外に弱い・自分の感情と折り合いをつけにくい・真面目な分傷つきやすい",
        ],
      },
      {
        type: "insight",
        label: "この構造ゆえに、",
        text: "理性と感情のズレが大きくなりやすい。",
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
        heading: "コントローラー型の「管理したいOS」と反応型の「揺れる感情OS」が矛盾",
        items: [
          "思考→感情が追いつかず疲れる",
          "感情→思考で抑え込みすぎる",
          "その結果→誤解・衝動・後悔が起きる",
          "特に恋愛領域では\"予測不能な出来事\"が多いため自己コントロールへの負荷が高い",
        ],
        variant: "neutral",
      },
      {
        type: "insight",
        label: "本質は、",
        text: "感情の扱い方に課題があるタイプ。",
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
          "誠実で分かりやすいタイプ",
          "説明責任がしっかりしているタイプ",
          "思考型の男性",
          "リードしてくれる男性",
        ],
        variant: "positive",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "注意",
        items: [
          "感情優位なタイプ・自由すぎるタイプには振り回されやすい。",
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
          "期待通りに動かない相手にイライラ",
          "誤解が生まれやすい言語化不足",
          "不機嫌の理由を説明できない",
          "感情→反応→後悔のループ",
          "計画通りに進まないと急に冷める",
        ],
      },
      {
        type: "insight",
        label: "最も典型なのは、",
        text: "理性と感情のズレが関係の溝を広げるパターン。",
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
              "普段は冷静だが感情が揺れると\"一気に厳しくなる\"。",
              "彼の些細な行動にも\"なぜ？\"と問い詰めやすい。",
              "相手の温度差や連絡の遅れに強く反応してしまう。",
            ],
          },
          {
            emoji: "🔹",
            label: "長期",
            items: [
              "不安→管理したい→相手が逃げる→さらに不安のループが固定化。",
              "相手は「監視されている」「責められている」と感じ距離を取る。",
              "恋愛が長続きせず自己否定がさらに強まる。",
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
              "冷静さを保とうとする",
              "でも内心はバタつく",
              "携帯を見る回数が増える",
            ],
          },
          {
            trigger: "既読スルー",
            reactions: [
              "「え、なんで？」と即不安",
              "反射的に追加メッセージを送りたくなる(衝動)",
            ],
          },
          {
            trigger: "意見の不一致",
            reactions: [
              "理屈では分かるが感情が許せない",
              "\"気持ちがこじれる\"",
            ],
          },
          {
            trigger: "彼が急に淡白",
            reactions: [
              "「嫌われた？」",
              "でもプライドが邪魔して訊けない",
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
                text: "「今日は仕事大変で返せなかった」",
                isUser: false,
              },
              {
                speaker: "あなた",
                text: "「うん、大丈夫」",
                isUser: true,
              },
            ],
            summary: "感情と言葉がズレる典型（内心: 大丈夫じゃない）",
          },
          {
            exchanges: [
              {
                speaker: "彼",
                text: "「怒ってる？」",
                isUser: false,
              },
              {
                speaker: "あなた",
                text: "「怒ってないよ」",
                isUser: true,
              },
            ],
            summary: "感情の正体を言語化できない（怒ってはいないが不安+失望）",
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
            trigger: "想定外の予定変更",
            reactions: ["パニック&不信"],
          },
          {
            trigger: "連絡頻度が低い",
            reactions: ["内心でストーリーを作ってしまう"],
          },
          {
            trigger: "説明不足の相手",
            reactions: ["感情が暴走"],
          },
          {
            trigger: "温度差",
            reactions: ["反射的に求めすぎるor冷める"],
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
        text: "相手の一言に感情が大きく揺れる→表では冷静を装う→積もった不安や怒りがある時に\"理性的に見えるけど刺さる言葉\"を投げてしまう。",
      },
      {
        type: "list",
        items: [
          "男性側が傷ついて距離があく",
          "あなたは後悔",
          "さらに自責のループ",
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
          "相手のテンションに影響される",
          "ルールやマナーを丁寧に守る",
          "予定の変更に弱い",
          "感情が揺れると\"無言モード\"になる",
          "言葉より態度で示す(沈黙・距離)",
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
          "基本は丁寧",
          "でも感情が動くと文章が長くなる(または短すぎる)",
          "温度差に敏感",
          "不安な時の文章が\"固くなる\"",
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
            "しっかりしている",
            "真面目",
            "誠実",
            "安定している",
            "頑張り屋",
          ],
        },
        bad: {
          heading: "⚠ 誤解される部分",
          items: [
            "何を考えているか分からない",
            "反応が突然変わる",
            "説明がないと不安になる",
            "気持ちが落ちると距離ができる",
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
            action: "揺れの扱い方",
            detail: "感情の波を安全に扱う方法を学ぶ",
          },
          {
            num: "②",
            category: "自己認識",
            action: "揺れの原因の可視化",
            detail: "揺れの原因を理解する",
          },
          {
            num: "③",
            category: "コミュニケーション",
            action: "言語化",
            detail: "感情を言葉にする力を育てる",
          },
          {
            num: "④",
            category: "愛着",
            action: "安定型への移行",
            detail: "安定した愛着パターンへ移行する",
          },
        ],
        summary:
          "このステップで\"感情×思考のバランス\"が整い穏やかで知的な恋愛が実現します。",
      },
    ],
  },
  {
    name: "改善後の未来ストーリー",
    nameEn: "Future Story After Improvement",
    blocks: [
      {
        type: "highlight",
        text: "コントローラー×反応型は\"理性と感情の狭間で揺れる繊細な知性タイプ\"。",
      },
      {
        type: "list",
        items: [
          "感情の波が小さくなる",
          "不安や怒りを\"対話\"で扱えるようになる",
          "説明不足の男性にも落ち着いて対応できる",
          "恋愛でのストレスが激減",
          "穏やかで知的な恋愛が実現する",
        ],
      },
      {
        type: "insight",
        label: "感情を丁寧に扱えるようになるほど",
        text: "あなたの本来の魅力が最大化し落ち着いた大人の愛が手に入る。",
      },
    ],
  },
  {
    name: "総評",
    nameEn: "Overall Assessment",
    blocks: [
      {
        type: "text",
        text: "リアクティブコントローラーは、普段は理性的で落ち着いているのに、恋愛になると\"考えすぎ×感情の揺れ\"が一気に強まるタイプです。不安になるほど相手の行動を深読みし、自分を責めたり関係を管理しようとしがち。揺れた瞬間の気持ちを素直に共有できるようになると、感情が整い、\"知性と親密さが両立する安定した恋愛\"へと自然に近づいていきます。",
      },
    ],
  },
];
