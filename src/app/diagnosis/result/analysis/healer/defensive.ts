import type { AnalysisItem } from "../types";

export const HEALER_DEFENSIVE: AnalysisItem[] = [
  {
    name: "コア特徴",
    nameEn: "Core Characteristics",
    blocks: [
      {
        type: "highlight",
        text: "「深い優しさ」×「静かな壁」という矛盾した二面性。ヒーラーは寄り添う力が高い・相手の弱さに敏感・支えたい・癒したい・穏やかで優しい。しかし防衛型のOSが強いと心を開かない・弱さを見せない・本音を隠す・距離を置く・一人で処理しようとする。",
      },
      {
        type: "section",
        emoji: "💚",
        heading: "外側から見ると",
        items: [
          "優しいのに入れない恋愛",
          "人を癒したいのに、自分を癒させない",
        ],
        summary: "本質は\"優しさの孤独\"。",
        variant: "neutral",
      },
      {
        type: "warning",
        emoji: "🛡️",
        heading: "防衛型になると",
        items: [
          "心を開かない",
          "弱さを見せない",
          "本音を隠す",
          "距離を置く",
          "一人で処理しようとする",
        ],
        summary: "\"優しい壁\"として振る舞ってしまう。",
      },
      {
        type: "insight",
        label: "特徴",
        text: "ヒーラー×防衛型は「人を癒したいのに、自分を癒させない」という優しさの孤独を抱えやすい。",
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
          "相手には寄り添えるが自分の気持ちは言わない",
          "相手に頼られることは平気だが自分は頼れない",
          "相手を癒すのに自分は誰にも癒されない",
          "関係が深まるほど「怖さ」が出て距離を置く",
          "\"優しさの仮面\"が心の壁として機能する",
          "恋愛が静かにフェードアウトしやすい",
        ],
      },
      {
        type: "insight",
        label: "",
        text: "優しさで相手を支えながら、自分は心を開かず距離を保つパターン。",
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
          "気遣いはするが本音は言わない",
          "感情を抑えて笑顔をつくる",
          "相手に心配をかけまいと距離を置く",
          "疲れても「大丈夫」と言う",
          "自分を後回しにしすぎて限界がわからなくなる",
          "相手からの愛情を受け取れない",
          "感情が溜まると突然シャットダウン",
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
        heading: "価値観",
        items: [
          "「弱さを見せたら離れられる」",
          "「心を開いたら傷つく」",
          "「迷惑をかけたくない」",
          "優しくして相手を支える・本音は隠して距離を置く・自分の問題は一人で抱える・恋愛は\"外側だけ穏やか\"になる",
        ],
        summary: "優しく静かな自己犠牲が起きる。",
      },
      {
        type: "insight",
        label: "",
        text: "心を開くことへの恐れが、恋愛における\"静かな壁\"を生んでいる。",
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
          "本当は甘えたい・寄りかかりたい・大丈夫って抱きしめてほしい・安心したい",
          "でも弱さを見せたら嫌われる・相手の負担になる・迷惑をかけるくらいなら自分が耐えるほうがマシ・頼るのは怖い・感情を見せるのは危険",
        ],
        summary: "あえて\"優しい壁\"として振る舞ってしまう。",
        variant: "neutral",
      },
      {
        type: "insight",
        label: "",
        text: "欲求と恐れが同時に働き、心を開く一歩を踏み出せない状態になりやすい。",
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
          "穏やかで優しい男性",
          "落ち着いた大人タイプ",
          "依存しない相手",
          "距離感を尊重してくれる人",
        ],
        variant: "positive",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "注意",
        items: [
          "自分の弱さを見せられない相手→さらに閉じる",
          "感情表現が少ない男性→互いに\"壁×壁\"の関係に",
          "自由奔放な男性→不安を感じても言えない",
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
          "優しさでつなぐ→本音を言わない→心の距離は縮まらないまま",
          "相手は「大丈夫だと思っていた」→あなたは「全然大丈夫じゃない」と一人で苦しむ",
          "静かに距離が開いていく→フェードアウト",
        ],
      },
      {
        type: "insight",
        label: "結果",
        text: "典型的な「静かな恋愛崩壊」。",
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
              "表では優しいが本音の部分には踏み込ませない\"癒しの仮面\"が強くなる。",
              "彼が心を開こうとしても自分は距離を保とうとする。",
              "「嫌われたくないから言えない」が増え親密さが進まない。",
            ],
          },
          {
            emoji: "🔹",
            label: "長期（6ヶ月〜1年以降）",
            items: [
              "深い関係を避ける癖が固定化し恋愛が進展しにくくなる。",
              "優しさはあるのに\"心が掴めない人\"と見られ関係がフェードアウトしやすい。",
              "弱さを見せられない→近づけない→愛され実感が持てないが続く。",
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
              "心はざわつく",
              "でも\"気にしないふり\"",
              "優しい返信でごまかす",
              "内側でモヤモヤが蓄積",
            ],
          },
          {
            trigger: "会えない日が続く",
            reactions: [
              "本当は寂しい",
              "でも言えない",
              "心のシャッターがゆっくり閉まる",
            ],
          },
          {
            trigger: "返信がそっけない",
            reactions: [
              "傷つく",
              "でも「大丈夫」と返す",
              "内側の孤独感が増す",
            ],
          },
          {
            trigger: "彼が弱った時",
            reactions: [
              "全力で支える",
              "自分の弱さは隠す",
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
              { speaker: "彼", text: "「最近疲れてて会えないんだ」", isUser: false },
              { speaker: "あなた", text: "「うん、無理しないで」（本当は寂しい）", isUser: true },
              { speaker: "彼", text: "「なんか悩みある？」", isUser: false },
              { speaker: "あなた", text: "「ないよ、大丈夫」（本当は泣きたい）", isUser: true },
              { speaker: "彼", text: "「もっと頼ってよ」", isUser: false },
              { speaker: "あなた", text: "「頼ってるよ」（頼れていない）", isUser: true },
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
            trigger: "彼の温度差",
            reactions: [
              "寂しい",
              "でも言わない",
              "シャットダウン",
            ],
          },
          {
            trigger: "感情的な場面",
            reactions: ["向き合わず距離を置く"],
          },
          {
            trigger: "相手の悩み",
            reactions: ["自分の限界より相手を優先"],
          },
          {
            trigger: "曖昧な関係",
            reactions: [
              "本音を言わず\"流される恋愛\"になる",
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
        text: "あなたはいつも優しく寄り添い、彼を支える存在だった。でも本当はあなた自身が支えてほしかった。",
      },
      {
        type: "list",
        items: [
          "その気持ちを隠し続けたせいであなたの心は静かに閉じていく。",
          "彼はそれに気づかず優しさだけが残り距離だけが広がった。",
          "ヒーラー×防衛型は\"優しさの奥の孤独\"が恋を止めるタイプ。",
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
          "穏やか",
          "笑顔が多い",
          "相手に寄り添う",
          "弱さは見せない",
          "自分の希望を言わない",
          "感情を抑えて平和を保つ",
          "帰宅後に急に疲れが出る",
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
          "丁寧",
          "柔らかい",
          "優しい",
          "絵文字控えめ",
          "本音は書かない",
          "深い話は避ける",
          "相談より励ましが多い",
          "\"頼るLINE\"ができない",
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
            "癒される",
            "落ち着く",
            "争わない",
            "寄り添い力が高い",
          ],
        },
        bad: {
          heading: "誤解される点",
          items: [
            "本音がわからない",
            "距離が縮まらない",
            "頼ってくれない",
            "\"優しさの壁\"を感じる",
            "気持ちが読めず不安になる",
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
            action: "本音の気づき",
            detail: "自分の本音に気づく力を育てる",
          },
          {
            num: "②",
            category: "愛着スタイル安定化",
            action: "信頼の土台",
            detail: "相手を信頼して心を開く練習",
          },
          {
            num: "③",
            category: "コミュニケーション",
            action: "小さな開示の練習",
            detail: "極小さな本音から伝える練習",
          },
          {
            num: "④",
            category: "感情マネジメント",
            action: "弱さの扱い",
            detail: "弱さを出すことを自分に許可する",
          },
        ],
        summary:
          "このステップで\"優しさだけの関係\"から\"心が繋がる関係\"へ進化します。",
      },
    ],
  },
  {
    name: "改善後の未来ストーリー",
    nameEn: "Future Story After Improvement",
    blocks: [
      {
        type: "highlight",
        text: "あなたが少しだけ心を開いた瞬間、恋愛は\"優しさだけの関係\"から\"心が繋がる関係\"へと進化する。",
      },
      {
        type: "list",
        items: [
          "頼れる",
          "甘えられる",
          "弱さを見せても嫌われない",
          "安心して支え合える",
          "「二人で幸せになる恋愛」が始まる",
        ],
      },
      {
        type: "insight",
        label: "",
        text: "ヒーラー×防衛型は成長すると\"最も深い癒しを与えられるパートナー\"になる。",
      },
    ],
  },
  {
    name: "総評",
    nameEn: "Overall Assessment",
    blocks: [
      {
        type: "text",
        text: "ディフェンシブヒーラーは、深い優しさと癒しの力を持ちながら、\"傷つきたくない気持ち\"が強く、本音を閉じ込めやすいタイプです。相手には寄り添えるのに、自分が踏み込まれることには慎重で、親密さの手前で立ち止まりやすい繊細なバランスがあります。小さな弱さを安心して共有できるようになるほど、心の壁がゆっくり溶け、あなた本来の温かさがまっすぐ伝わる深い関係へと育ちます。",
      },
    ],
  },
];
