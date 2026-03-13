import type { AnalysisItem } from "../types";

export const BALANCER_DEFENSIVE: AnalysisItem[] = [
  {
    name: "コア特徴",
    nameEn: "Core Characteristics",
    blocks: [
      {
        type: "highlight",
        text: "防衛型バランサーは、バランサー特有の「穏やか・安定・調和」を持ちながら、回避傾向・自己開示の弱さ・感情抑制が強く掛け合わさったタイプ。",
      },
      {
        type: "section",
        emoji: "✨",
        heading: "外側から見ると",
        items: ["優しい", "落ち着いてる", "大人"],
        variant: "positive",
      },
      {
        type: "warning",
        emoji: "🛡️",
        heading: "しかし内側は",
        highlightText: "\"静かな緊張\"と\"感情の距離\"を保ちやすい。",
        items: [
          "自分の内面を話さない",
          "弱みを見せない",
          "感情を抑える",
          "深い関係への恐れがある",
          "優しいのに距離がある",
        ],
      },
      {
        type: "insight",
        label: "結果、",
        text: "恋は安定するが\"情熱や深い絆\"は育ちにくい独特のパターンが出る。",
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
          "最初から落ち着いていて安心感がある",
          "優しさはあるが、心の領域は慎重に守る",
          "一気に距離を縮めることはない",
          "親密さが増すと\"静かに距離を取る\"",
          "言葉が少ないため、相手が不安になりやすい",
          "ケンカにならないが、深まりもしない",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "恋は安定するが、\"情熱や深い絆\"は育ちにくい状態になりがち。",
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
          "本音は自分の中で完結させる",
          "嫌われない範囲でやさしく振る舞う",
          "感情が動いた時ほど黙る",
          "深く入られると困るので、距離を調整する",
          "頼るのが極端に苦手",
          "相手に合わせるが、自分の領域を守る",
          "→ 全体的に\"近いようで遠い\"のが特徴",
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
        heading: "防衛型バランサーの核心には",
        items: [
          "「近づきすぎると傷つく／負担になる」という恐れ",
          "過去の裏切り・失望 → 心を開く＝危険という学習",
          "感情を共有する文化で育っていない → 感情を見せるのが苦手",
          "「弱み＝迷惑」という信念 → 頼るくらいなら黙って抱える方がマシ",
        ],
        summary: "心は優しいが\"開け方が分からない\"状態になりやすい。",
      },
      {
        type: "insight",
        label: "",
        text: "\"敏感さ\"と\"防衛\"が同時に動くので、恋愛では常に距離調整が行われている。",
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
        heading: "恋愛で抱える二極",
        items: [
          "「安心したい」気持ち",
          "「近づかれすぎたくない」気持ち",
          "近づくと緊張する",
          "離れすぎると孤独がつらい",
        ],
        summary: "\"冷たい\"わけではなく、ただ「安心して開ける相手」を探しているだけ。",
        variant: "neutral",
      },
      {
        type: "insight",
        label: "",
        text: "自分でも「どう距離を取れば楽か」が分からない時がある。",
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
          "優しくて誠実な人",
          "あまり干渉しないタイプ",
          "安心して距離を置ける人",
        ],
        variant: "positive",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "ただし、",
        items: [
          "感情表現が少ない相手を選びがちで、関係が「静かすぎる」構造になりやすい",
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
          "あなたが心を開かないため、相手が不安になる",
          "相手が近づいてくると、あなたは静かに距離を取る",
          "何も起きていないのに\"愛情の温度差\"が広がる",
          "相手が疲れて諦めてしまう",
          "最後は「性格の不一致」で終わりやすい",
        ],
      },
      {
        type: "insight",
        label: "最大の問題は、",
        text: "「相手があなたの\"本当の内側\"に触れられないこと」。",
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
              "表向きは冷静だが、内側では傷つくことを怖れて一歩踏み出せなくなる。",
              "男性の言動を\"最悪パターン\"で予測し、慎重すぎる行動が増える。",
              "好きでも「嫌われたらどうしよう」で距離が詰まらない。",
            ],
          },
          {
            emoji: "🔹",
            label: "長期（6ヶ月〜1年以降）",
            items: [
              "いつも\"安全な距離の恋愛\"しかできず、関係が深まらないまま終わりやすい。",
              "本音を隠す癖が固定化し、相手から「壁がある」印象を持たれ続ける。",
              "最終的に\"孤立的な恋愛OS\"になり、感情共有が難しい恋のパターンを繰り返す。",
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
            reactions: ["不安より\"距離の調整\"が先に働く", "「自分の時間を使おう」と切り替えが早い"],
          },
          {
            trigger: "返信が遅い",
            reactions: ["寂しさより\"理解\"を優先", "しかし奥底では小さな孤独が積もる"],
          },
          {
            trigger: "デート後に素っ気ない",
            reactions: ["「そういう日もある」と受け入れる", "ただし深く本音は聞かない（聞けない）"],
          },
          {
            trigger: "意見が違う",
            reactions: ["対立を避けるために静かに飲み込む", "しかし心の中では温度が下がる"],
          },
          {
            trigger: "相手が急に距離を縮めてくる",
            reactions: ["一瞬嬉しいが、急に防衛感が出る", "\"深く入りすぎないように\"自然と距離を戻そうとする"],
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
              { speaker: "彼", text: "「もっと気持ちとか教えてよ」", isUser: false },
              { speaker: "あなた", text: "「うん…そうだね（言えることはあるけど怖い…）」", isUser: true },
            ],
            summary: "彼は\"拒絶された\"と誤解。あなたは\"どう距離を取ればいいか\"悩む。すれ違いが静かに進行。",
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
            trigger: "感情的な話し合い",
            reactions: ["即・防衛モード", "静かに距離を取る"],
          },
          {
            trigger: "距離が縮まる",
            reactions: ["同時に\"不安\"も上がる", "深く入るのが怖い"],
          },
          {
            trigger: "相手のネガティブ感情",
            reactions: ["負担に感じてしまう", "優しく聞くが、心は閉じる"],
          },
          {
            trigger: "相手が依存的",
            reactions: ["一気に温度が下がる", "\"逃げたい\"感覚が出る"],
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
        text: "ある日、相手が「最近、気持ちが見えない」と言う。あなたは\"どう伝えればいいか分からない\"と混乱し、静かに距離を置いてしまう。",
      },
      {
        type: "list",
        items: [
          "相手は「もう興味がないのかな？」と誤解する。",
          "あなたの\"静かな壁\"に疲れて離れていく。",
          "あなたは「またうまくいかなかった…」と自分を責める。",
          "本当はただ\"傷つきたくなかった\"だけだった。",
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
          "優しいがあまり踏み込まない",
          "相手の世界を尊重しすぎる",
          "会話は穏やか",
          "深い感情の話が苦手",
          "自分の話は最低限",
          "心地よい距離を守りたい",
          "盛り上がりすぎると疲れる",
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
          "淡白",
          "必要なことだけ",
          "可愛さより誠実さ重視",
          "文章が短くなりがち",
          "スタンプは控えめ",
          "テンションは一定",
          "感情表現が少ない",
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
          items: ["癒される", "落ち着いている", "優しい", "一緒にいて心地よい", "大人の女性"],
        },
        bad: {
          heading: "誤解される点",
          items: [
            "\"好き\"が伝わらない",
            "心の距離が読めない",
            "本音が見えない",
            "冷たいと誤解されることも",
            "大事に思われてない？と不安にされやすい",
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
            action: "\"防衛の発動\"に気づく",
            detail: "自分が距離を取ろうとする瞬間に気づき、そのパターンを認識する力を育てます。",
          },
          {
            num: "②",
            category: "感情マネジメント",
            action: "弱さを扱う力",
            detail: "弱さや不安を見せることを少しずつ練習し、感情を適切に扱えるようになります。",
          },
          {
            num: "③",
            category: "コミュニケーション",
            action: "小さな自己開示",
            detail: "一気に心を開くのではなく、小さな自己開示から始める技術を身につけます。",
          },
          {
            num: "④",
            category: "愛着",
            action: "近づく＝危険の思い込み修正",
            detail: "親密さへの恐れを和らげ、安全に近づける関係のモデルを育てます。",
          },
        ],
        summary: "このステップを順番に進めることで、心が触れ合う恋愛が実現します。",
      },
    ],
  },
  {
    name: "改善後の未来ストーリー",
    nameEn: "Future Story After Improvement",
    blocks: [
      {
        type: "highlight",
        text: "あなたが\"安全な環境で少しずつ自己開示する力\"を身につけると…",
      },
      {
        type: "list",
        items: [
          "相手があなたに安心して近づいてくれる",
          "恋愛が一方通行ではなく\"相互作用\"へ",
          "静かな関係に温度が生まれる",
          "心の距離が自然に縮まる",
          "「分かり合える恋愛」が手に入る",
        ],
      },
      {
        type: "insight",
        label: "あなたの穏やかさは、",
        text: "心を開いた時、最も深く・最も静かに愛が育つ力に変わる。",
      },
    ],
  },
  {
    name: "総評",
    nameEn: "Overall Assessment",
    blocks: [
      {
        type: "text",
        text: "ディフェンシブバランサーは、穏やかで優しいのに、心の奥では「踏み込まれすぎたくない」と感じる繊細さを持つタイプです。安心と距離感を同時に保とうとするため、親密さの手前で立ち止まりやすい特徴があります。弱さや寂しさを少しだけ開示できるようになると、相手との信頼が一気に深まり、\"安心できる距離の恋愛\"から\"心が触れ合う恋愛\"へと進化します。",
      },
    ],
  },
];
