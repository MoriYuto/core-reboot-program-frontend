import type { AnalysisItem } from "../types";

export const THINKER_DEFENSIVE: AnalysisItem[] = [
  {
    name: "コア特徴",
    nameEn: "Core Characteristics",
    blocks: [
      {
        type: "highlight",
        text: "シンカー型×防衛型。一見冷静で落ち着いているが内側では\"心を開く怖さ\"が強い。不安になるとさらに思考に逃げる・傷ついた経験を忘れにくく慎重・深い関係になるほど距離を置く。「思考×回避(防衛)」の組み合わせ。近づきたい・でも近づかれると怖い・気持ちはある・でも弱さを見せられない。\"静かなジレンマ\"を抱えやすい。",
      },
      {
        type: "section",
        emoji: "🛡️",
        heading: "思考×回避の防衛OS",
        items: [
          "不安になるとさらに思考に逃げる",
          "傷ついた経験を忘れにくく慎重",
          "深い関係になるほど距離を置く",
          "弱さを見せられない",
        ],
        summary: "\"静かなジレンマ\"を抱えやすい。",
        variant: "neutral",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "防衛型シンカーの特徴",
        items: [
          "感情を抑える",
          "本音を隠す",
          "不安を考え込む",
          "距離を置いて安心する",
        ],
      },
      {
        type: "insight",
        label: "結果",
        text: "\"思考で感情を管理する防衛OS\"。心を開く怖さが強く、近づきたいのに近づかれると逃げたくなる。",
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
          "恋愛初期はとても落ち着いていて魅力的",
          "心が動くほど慎重さが増す",
          "考え込みすぎて行動が遅れる",
          "弱さを見せるのに抵抗がある",
          "本音を言う代わりに距離を置く",
          "誤解を解くのが苦手",
        ],
      },
      {
        type: "insight",
        label: "",
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
          "不安や寂しさを\"考えて処理\"しようとする",
          "相手の言動を分析しすぎる",
          "感情は見せず静かに距離を置く",
          "弱音を吐くより黙る",
          "近づかれすぎると逃げる",
          "慎重すぎてタイミングを逃す",
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
        heading: "防衛型の信念",
        highlightText: "「弱さを見せたら傷つく」「感情は面倒だから抑えた方が安全」「相手より先に開いたら負け」「慎重であれば失敗しない」。",
        items: [
          "感情→抑える",
          "本音→隠す",
          "不安→考え込む",
          "距離→安心",
        ],
      },
      {
        type: "insight",
        label: "結果",
        text: "\"思考で感情を管理する防衛OS\"。安全を最優先に心を守ろうとする。",
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
          "愛されたい",
          "大切にされたい",
          "理解されたい",
        ],
        summary: "と願っている。",
        variant: "positive",
      },
      {
        type: "insight",
        label: "しかし",
        text: "怖い・傷つきたくない・期待しすぎないようにしたいという気持ちが先に出て「安全」を優先する。",
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
          "落ち着いた人",
          "理性的で優しい",
          "過剰に追ってこない人",
          "誠実で安心感がある人",
        ],
        variant: "positive",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "注意",
        items: [
          "感情的すぎる",
          "詰めてくる",
          "依存度が高い",
          "急に距離を詰める人",
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
          "気持ちを聞かれて黙る",
          "\"冷めた\"と誤解される",
          "言わないことでズレが広がる",
          "不安を考え込む→距離",
          "\"どうしたの？\"に答えられない",
        ],
      },
      {
        type: "insight",
        label: "",
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
              "近づきたいのに慎重になりすぎて一歩踏み込めない",
              "相手の反応を\"脅威\"として解釈しやすく防衛反応が増える",
              "本音を見せないため相手が「壁がある」と感じる",
            ],
          },
          {
            emoji: "🔹",
            label: "長期",
            items: [
              "心の壁が固まり親密な関係に進めない恋愛OSが固定化",
              "愛情はあるのに距離が縮まらない停滞状態が続く",
              "\"深い関係が怖い→避ける→一人がラク\"の方向に進む",
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
              "不安",
              "でも不安を見せたくない",
              "\"普通に振る舞う\"ことで自分を守る",
              "返信が控えめになる",
            ],
          },
          {
            trigger: "深い話を求められる",
            reactions: [
              "気持ちを整理したい",
              "\"今は話したくない\"が本音",
              "理由を説明できず黙る",
            ],
          },
          {
            trigger: "予定変更",
            reactions: [
              "理性は理解",
              "感情は落ち込む",
              "その落ち込みを隠す",
            ],
          },
          {
            trigger: "距離を詰められる",
            reactions: [
              "反射的に防衛スイッチ→突然静かになる",
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
                text: "「本当はどう思ってる？」",
                isUser: false,
              },
              {
                speaker: "あなた",
                text: "「うまく言えない…」",
                isUser: true,
              },
              {
                speaker: "彼",
                text: "「冷めたの？」",
                isUser: false,
              },
              {
                speaker: "あなた",
                text: "「違うけど…」",
                isUser: true,
              },
            ],
            summary: "\"怖さ\"が\"拒絶\"に見えるすれ違い（怖さで言えないだけ。相手は\"拒絶\"と感じる。あなたは\"本音を見せるのが怖い\"）",
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
            trigger: "詰められる",
            reactions: ["シャットダウン"],
          },
          {
            trigger: "意味深な沈黙",
            reactions: ["深読みし不安"],
          },
          {
            trigger: "愛情表現を求められる",
            reactions: ["逃避"],
          },
          {
            trigger: "距離を詰められる",
            reactions: ["無言・冷却"],
          },
          {
            trigger: "嘘やごまかし",
            reactions: ["一気に心が閉じる"],
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
        text: "相手の好意→うれしい→深まる→期待が怖くなる→距離を置く→相手が不安になる→詰められる→さらに閉じる。",
      },
      {
        type: "list",
        items: [
          "\"回避の負のループ\"が発生しやすい",
          "破局に至りやすい",
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
          "楽しいが心の深さは見せない",
          "感情表現は控えめ",
          "会話は丁寧で大人",
          "沈黙は気にならない",
          "深い話になると話題を変える",
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
          "すぐ返信する時と遅い時の差が大きい",
          "気持ちは文章に出さない",
          "スタンプや短文で済ませる",
          "長文で気持ちを書くのは苦手",
          "距離を感じた時ほど返信が淡くなる",
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
            "知的で魅力的",
            "丁寧",
            "大人",
            "安心できる",
          ],
        },
        bad: {
          heading: "誤解",
          items: [
            "気持ちが見えない",
            "本音がわからない",
            "冷たく感じる瞬間がある",
            "距離が詰まらない",
            "不安があっても黙る",
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
            action: "安定型へ",
            detail: "安定した愛着パターンへ移行する",
          },
          {
            num: "②",
            category: "コミュニケーション",
            action: "本音の小出し",
            detail: "小さな本音から伝える練習",
          },
          {
            num: "③",
            category: "感情マネジメント",
            action: "抑圧を緩める",
            detail: "感情の抑圧を安全に緩める",
          },
          {
            num: "④",
            category: "自己認識",
            action: "弱さを見せる許可",
            detail: "弱さを見せる許可を自分に与える",
          },
        ],
        summary: "このステップで静かで深いパートナーシップが築けます。",
      },
    ],
  },
  {
    name: "改善後の未来ストーリー",
    nameEn: "Future Story After Improvement",
    blocks: [
      {
        type: "highlight",
        text: "シンカー型×防衛型は\"思考×回避\"だが深い愛情を秘めたタイプ。",
      },
      {
        type: "list",
        items: [
          "\"本音が言えない\"から解放される",
          "距離感が柔らかくなる",
          "不安を一人で抱えない",
          "彼に「話してくれて嬉しい」と言われる",
          "静かで深いパートナーシップが築ける",
          "思慮深さがそのまま魅力になる",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "壁が薄くなるほど知性に温かさが加わり最も深い信頼関係が築ける。",
      },
    ],
  },
  {
    name: "総評",
    nameEn: "Overall Assessment",
    blocks: [
      {
        type: "text",
        text: "シールドシンカーは、思考の深さと慎重さに加えて、\"心を守るために距離を置く\"傾向が最も強く出るタイプです。感情を整理しきれないときにシャットダウンしやすく、相手には「優しいのに心が遠い」と映ることも。弱さや不安を少しだけ共有できるようになると、壁がゆっくり緩み、知的な安心感に温かさが加わった、深く静かなパートナーシップへと進んでいきます。",
      },
    ],
  },
];
