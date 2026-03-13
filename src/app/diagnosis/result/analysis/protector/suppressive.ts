import type { AnalysisItem } from "../types";

export const PROTECTOR_SUPPRESSIVE: AnalysisItem[] = [
  {
    name: "コア特徴",
    nameEn: "Core Characteristics",
    blocks: [
      {
        type: "highlight",
        text: "プロテクター型はもともと「関係の安定」＋「思いやり」＋「献身」を重視。抑制型になると\"感情を抑えるクセ\"が加わる。",
      },
      {
        type: "section",
        emoji: "🛡️",
        heading: "特徴",
        items: [
          "優しい・誠実・面倒を起こしたくない・支える側に回りがち・我慢してしまう・不満は飲み込む・衝突を避ける",
        ],
        variant: "neutral",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "注意",
        items: [
          "表面的には\"落ち着いていて順調な関係\"を築くが、内側では静かに感情が蓄積していくタイプ",
        ],
      },
      {
        type: "insight",
        label: "結果",
        text: "穏やさの裏で静かな蓄積が進みやすい。",
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
          "相手を優先しすぎる",
          "言いたいことを抑え込みがち",
          "我慢が続くと感情が鈍る",
          "相手に「気づいてほしい」と思うが言えない",
          "衝突を避けすぎて関係の温度が下がる",
          "「嫌われたくない」より「平和でいたい」が強い",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "最初は安定しているが\"静かな不満\"が積もりやすい点が特徴。",
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
          "相手が求めれば自然に応じてしまう",
          "不満を言う前に自分を納得させてしまう",
          "相手の欠点に目をつむる",
          "感情より理性で判断する",
          "自分の弱さは見せない（恥ずかしさがある）",
          "距離を取られると追わず静かに様子を見る",
          "関係を壊さないために\"いい人\"でい続ける",
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
        heading: "抑制型プロテクターの信念",
        highlightText: "「本音を言うと面倒になる」「衝突するくらいなら自分が引いた方がいい」",
        items: [
          "厳しい環境で育った・親が感情的だった・過去の恋愛で衝突がトラウマ・\"我慢すれば平和になる\"を学習した背景",
        ],
      },
      {
        type: "insight",
        label: "結果",
        text: "我慢を選ぶことで平和を維持するが、自分自身の感情は蓄積していく。",
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
        heading: "本当は「平和でいたい」「安心したい」という強い願望。しかし",
        items: [
          "平和のために本音を封じる",
          "安心のために自分を抑える",
          "相手のために譲り続ける",
        ],
        summary: "気づくと\"自分が何を感じているか分からない\"状態に。",
        variant: "neutral",
      },
      {
        type: "insight",
        label: "抑制型のままだと",
        text: "\"穏やかな犠牲\"が続く。",
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
          "誠実で真面目",
          "穏やかで落ち着いた人",
          "責任感の強い男性",
          "優しいタイプ",
          "強い主張をしない男性",
        ],
        variant: "positive",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "注意",
        items: [
          "「どちらも本音が出にくい」という欠点が出ると\"感情の交流がゼロになる危険性\"がある",
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
          "自分が我慢→相手は気づかない→不満が静かに溜まる",
          "突然心が冷める（理由は言わない）",
          "相手は「急に冷たくなった」と感じる",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "衝突しないタイプほど終わりは静かで深い。",
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
              "自分の感情をコントロールしすぎて相手に「何を考えてるか分からない」と思われる",
              "気持ちを伝えないまま\"正しく振る舞うこと\"に意識が向く",
              "デート中も穏やかだがどこか壁を感じさせてしまう",
            ],
          },
          {
            emoji: "🔹",
            label: "長期",
            items: [
              "我慢が蓄積し突然関係を手放したくなる\"逃走反応\"が出る",
              "彼が安心しきって努力をしなくなり温度差が広がる",
              "本当はもっと愛されたいのに感情を抑えすぎて距離が縮まらないまま終わる",
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
              "不安を抑えて「忙しいのかな」と自分を説得",
              "連絡は待つ追わない",
              "内側には小さな寂しさが残る",
            ],
          },
          {
            trigger: "LINEが素っ気ない",
            reactions: [
              "「気を悪くしたかな？」と観察",
              "でも聞けない",
              "気遣いメッセージでフォロー",
            ],
          },
          {
            trigger: "デートが曖昧",
            reactions: [
              "断られても「仕方ないか」と納得",
              "自分の希望は言わない",
            ],
          },
          {
            trigger: "衝突時",
            reactions: [
              "その場を荒立てたくない",
              "自分の気持ちは飲み込む",
              "\"静かな我慢\"が増える",
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
              { speaker: "彼", text: "「何か言いたいことある？」", isUser: false },
              { speaker: "あなた", text: "「ううん、大丈夫だよ」（本当は色々ある）", isUser: true },
              { speaker: "彼", text: "「最近ちょっと距離ある？」", isUser: false },
              { speaker: "あなた", text: "「そんなことないよ」（本当は寂しい）", isUser: true },
              { speaker: "彼", text: "「意見ある？」", isUser: false },
              { speaker: "あなた", text: "「任せるね」（本当は意見がある）", isUser: true },
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
            trigger: "優先されない",
            reactions: [
              "寂しいが言えない",
              "陰で気持ちが冷えていく",
            ],
          },
          {
            trigger: "無関心",
            reactions: [
              "「仕方ない」と我慢",
              "我慢→麻痺のループ",
            ],
          },
          {
            trigger: "相手の感情が荒れる",
            reactions: [
              "自分が下がる",
              "感情を抑え込みすぎて疲弊",
            ],
          },
          {
            trigger: "期待が裏切られる",
            reactions: [
              "表では平気",
              "内側は大ダメージ",
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
        text: "あなたはいつものように彼に合わせていた。「会いたいけど…言ったら負担かも」と思い、黙っていた。",
      },
      {
        type: "list",
        items: [
          "しかしある日彼が言う「最近、気持ちが分からないんだよね。」",
          "あなたは驚く。\"伝えてないことを分かってほしい\"と密かに願っていたから。",
          "本当は気持ちがあったのに伝えなかったことで関係が静かにすれ違っていく。",
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
          "相手を尊重",
          "気を使いすぎる",
          "会話は丁寧",
          "本音は少なめ",
          "優先順位が相手＞自分",
          "自分は我慢してもOKと考える",
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
          "短文で丁寧",
          "相手の負担にならない文",
          "自分の気持ちは書かない",
          "素っ気なく見えることも",
          "返信速度にムラは少ない",
          "\"察してほしい\"が隠れている",
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
            "優しい",
            "穏やか",
            "気を使ってくれる",
            "包容力がある",
          ],
        },
        bad: {
          heading: "誤解されやすい点",
          items: [
            "本音が見えない",
            "何を考えているか分からない",
            "温度が低い？と誤解される",
            "愛情が薄いと思われる",
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
            action: "感情の把握",
            detail: "自分が何を感じているか認識する練習",
          },
          {
            num: "②",
            category: "感情マネジメント",
            action: "表現する許可",
            detail: "感情を出すことを自分に許可する",
          },
          {
            num: "③",
            category: "コミュニケーション",
            action: "小さな本音",
            detail: "小さな本音を伝える練習",
          },
          {
            num: "④",
            category: "愛着",
            action: "安定型の育成",
            detail: "安定した愛着パターンを育てる",
          },
        ],
        summary: "このステップで\"穏やかな犠牲\"から\"支え合う恋愛\"へ進化します。",
      },
    ],
  },
  {
    name: "改善後の未来ストーリー",
    nameEn: "Future Story After Improvement",
    blocks: [
      {
        type: "highlight",
        text: "あなたが少しずつ感情を言葉にできるようになると、関係は一気に深まる。",
      },
      {
        type: "list",
        items: [
          "相手はあなたの本音を知れて安心する",
          "あなたは相手に甘えられるようになる",
          "\"守るだけの恋\"から\"支え合う恋\"へ変化する",
        ],
      },
      {
        type: "insight",
        label: "この変化は",
        text: "プロテクター型の恋愛を劇的に豊かにする。",
      },
    ],
  },
  {
    name: "総評",
    nameEn: "Overall Assessment",
    blocks: [
      {
        type: "text",
        text: "リストレインドプロテクターは、誠実さ・優しさ・責任感にあふれたタイプですが、心配性ゆえに\"自分を抑えて相手を優先する\"癖が強く出やすい傾向があります。その優しさが我慢や自己犠牲に変わると、静かな疲労とすれ違いを生みやすい点が特徴。自分の気持ちや限界を小さく共有できるようになるほど、相手との関係は健全に整い、安心と尊重が循環する温かい恋愛へと育ちます。",
      },
    ],
  },
];
