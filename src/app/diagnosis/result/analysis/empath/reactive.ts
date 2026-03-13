import type { AnalysisItem } from "../types";

export const EMPATH_REACTIVE: AnalysisItem[] = [
  {
    name: "コア特徴",
    nameEn: "Core Characteristics",
    blocks: [
      { type: "highlight", text: "恋愛OSの中でも 最も感情の振れ幅が大きいタイプ。" },
      { type: "section", emoji: "✨", heading: "もともとエンパスは", items: ["人の気持ちを察する", "繊細で優しい", "相手の微細な変化に敏感", "愛情深い"], summary: "という強い感受性を持つ。", variant: "positive" },
      { type: "warning", emoji: "⚡", heading: "反応型になると、この繊細さが", highlightText: "\"勢い・不安・衝動\" と結びつき、", items: ["LINEの返事で気持ちが乱れる", "相手の言動に過剰に反応する", "感情をすぐ表に出しやすい", "伝えすぎる／言いすぎる", "自分の感情に振り回される"], summary: "という状態になりがち。" },
      { type: "insight", label: "言い換えると、", text: "\"優しさ × 過敏反応 × 衝動性\" の複合OS。" },
    ],
  },
  {
    name: "恋愛パターン",
    nameEn: "Love Patterns",
    blocks: [
      { type: "list", items: ["相手の態度にすぐ影響される", "感情が盛り上がると一気に距離が縮まる", "不安が強くなると長文で気持ちを送る", "よく考える前に言葉や行動が出てしまう", "後から後悔することが多い", "相手の機嫌が自分のメンタルを左右する", "安心と不安が短周期で入れ替わる"] },
      { type: "insight", label: "特徴", text: "恋愛初期のテンションが高く、関係の\"温度差\"が出やすいタイプ。" },
    ],
  },
  {
    name: "やりがちな行動",
    nameEn: "Your Love Behavior Patterns",
    blocks: [
      { type: "list", items: ["返信の速さで愛情を判断する", "不安になると\"説明を求める\"", "相手の気持ちを確かめたくなる", "嫌われたかも…が口癖", "気持ちが溢れてしまった時に長文を送る", "後から「やりすぎた…」と自己嫌悪", "相手の温度に合わせて自分の温度が変動"] },
    ],
  },
  {
    name: "根本にある心理構造",
    nameEn: "Core Psychological Structure",
    blocks: [
      { type: "warning", emoji: "🧠", heading: "反応型エンパスの内側には", items: ["「愛情は不安定なもの」", "「不安を感じたらすぐ対処しないと危険」", "「確証が欲しい」", "「嫌われる前に気持ちを伝えたい」"], summary: "という心理パターンがある。" },
      { type: "insight", label: "幼少期の経験や過去の恋愛で", text: "\"放置された感覚\"があるほどこの反応は強くなる。" },
    ],
  },
  {
    name: "恋愛における深層心理",
    nameEn: "Your Love Psychology",
    blocks: [
      { type: "section", emoji: "💎", heading: "本音はこう", items: ["大切にされたい", "愛されている安心が欲しい", "不安な時は寄り添ってほしい", "気持ちを受け止めてほしい", "安心を感じた瞬間、深く愛せる"], variant: "positive" },
      { type: "insight", label: "しかし、", text: "不安が出ると\"伝えすぎ\"てしまい、相手が圧を感じることも多い。" },
    ],
  },
  {
    name: "惹かれやすい男性タイプ",
    nameEn: "Your Attraction Type (Men)",
    blocks: [
      { type: "section", emoji: "❤️", heading: "惹かれやすいタイプ", items: ["優しい男性", "気持ちに共感してくれる人", "言葉で愛情を伝えてくれる人", "連絡頻度が安定している人"], variant: "positive" },
      { type: "warning", emoji: "⚠️", heading: "ただし、以下のタイプに惹かれると", items: ["気まぐれ", "放置癖", "自由奔放", "レスポンスが遅い"], summary: "\"反応型エンパスの不安\"が一気に爆発しやすい。" },
    ],
  },
  {
    name: "相手との関係性の特徴",
    nameEn: "Relationship Characteristics",
    blocks: [
      { type: "list", items: ["相手の態度に反応 → 伝える → 重くなる", "後悔して謝る → より不安定に", "自分でも何が正解か分からなくなる", "安心したくて再度メッセージ", "相手は混乱 → 距離を置く", "全て自分のせいだと思う"] },
      { type: "insight", label: "これは", text: "\"感情と不安のスパイラル\"。" },
    ],
  },
  {
    name: "今のまま進んだ場合の未来像",
    nameEn: "If This Pattern Continues…",
    blocks: [
      {
        type: "timeline",
        periods: [
          { emoji: "🔹", label: "短期（1〜3ヶ月）", items: ["相手の些細な言動に敏感になり、必要以上に反応してしまう。", "自分の気持ちより相手の気持ちを優先し、不安が増大。", "「嫌われた？」の思考が増え、夜だけ不安定になりやすい。"] },
          { emoji: "🔹", label: "長期（6ヶ月〜1年以降）", items: ["反応疲れが続いて、恋愛そのものが\"精神的負荷\"になる。", "不安と尽くしが表裏一体になり、相手に依存しやすい。", "深まりたいほど不安が増える\"逆転恋愛OS\"が固定化する。"] },
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
          { trigger: "既読スルー", reactions: ["一瞬で不安MAX", "「嫌われた？」と思う", "気持ちを伝えたくなりがち"] },
          { trigger: "温度差LINE", reactions: ["温度差を敏感に察知", "心の乱れがすぐ出る"] },
          { trigger: "会えない日が続く", reactions: ["価値を見失う", "「私の優先度低い？」と思う"] },
          { trigger: "冷たく感じる返事", reactions: ["過去の不安が一気に蘇る", "追いLINEの衝動が強い"] },
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
              { speaker: "彼", text: "「仕事忙しくて返信遅れた」", isUser: false },
              { speaker: "あなた", text: "「…忙しい＝私に興味ないってこと？」", isUser: true },
            ],
          },
          {
            exchanges: [
              { speaker: "彼", text: "「そんなつもりじゃないよ」", isUser: false },
              { speaker: "あなた", text: "「でも全然違って見えたの…」", isUser: true },
            ],
          },
          {
            exchanges: [
              { speaker: "彼", text: "「ちょっと落ち着こう」", isUser: false },
              { speaker: "あなた", text: "「落ち着けないから言ってるの！」", isUser: true },
            ],
            summary: "（後で後悔する）典型的な\"情動→言語化不全→衝突\"パターン。",
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
          { trigger: "返信の温度差", reactions: ["不安急上昇", "確認行動"] },
          { trigger: "相手の忙しさ", reactions: ["見捨てられ恐怖発動", "感情的なメッセージ"] },
          { trigger: "曖昧な態度", reactions: ["未来予測が不安方向に暴走"] },
          { trigger: "自己嫌悪", reactions: ["過去の失敗が蘇る", "感情のループ"] },
        ],
      },
    ],
  },
  {
    name: "こじれストーリー",
    nameEn: "Conflict Story",
    blocks: [
      { type: "highlight", text: "\"安心したくて伝える → 重くなる → 不安が増す\" という無限ループ" },
      { type: "list", items: ["あなたは彼の言葉や態度に敏感に反応し、不安が高まるほどメッセージが増えた。", "彼は最初「かわいい」と思っていたが、だんだん「重さ」と感じ始めた。", "あなたはその空気を察し、余計に不安になる。"] },
    ],
  },
  {
    name: "デート中の行動パターン",
    nameEn: "Dating Behavior Patterns",
    blocks: [
      { type: "list", items: ["相手の反応を常に観察", "気持ちを察して動く", "言葉での愛情が欲しい", "温度差に敏感", "ちょっとした間が気になる", "盛り上がるとテンションが高い", "不安になると甘えが強くなる"] },
    ],
  },
  {
    name: "LINEの癖",
    nameEn: "LINE Communication Habits",
    blocks: [
      { type: "list", items: ["丁寧で長め", "気持ちが溢れると長文", "温度差が出やすい", "不安だと連投になりがち", "\"好き\"を伝えたがる", "返信が遅いと追いLINEの衝動", "既読スルーは耐えられない"] },
    ],
  },
  {
    name: "男性から見たあなた",
    nameEn: "How Men See You",
    blocks: [
      {
        type: "evaluation",
        good: { heading: "✓ 良い印象", items: ["素直で可愛い", "愛情深い", "気持ちを感じられる", "尽くしてくれる"] },
        bad: { heading: "⚠ 難しいところ", items: ["感情の波が読めない", "温度差がしんどい時がある", "言葉の重さを感じる", "落ち着いて話すのが難しいときあり"] },
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
          { num: "①", category: "感情マネジメント", action: "情動の過剰反応を緩和", detail: "感情が高まった時に一呼吸おく習慣をつけ、衝動的な反応を和らげます。自分の感情の波に気づく力を育てることが第一歩です。" },
          { num: "②", category: "自己認識", action: "不安の源を言語化", detail: "「なぜ今不安なのか？」を自分に問いかけ、漠然とした感情を具体的な言葉にする練習をします。不安の正体が見えると、過剰反応が減ります。" },
          { num: "③", category: "愛着", action: "安定型の育成", detail: "「愛情は不安定なもの」という無意識の思い込みを修正します。安心できる関係性の中で、安定した愛着パターンを新しく育てていきます。" },
          { num: "④", category: "コミュニケーション", action: "小さな自己開示に変換", detail: "感情を一気に吐き出すのではなく、「今ちょっと不安に感じてる」のような小さな自己開示に変換する技術を身につけます。" },
        ],
        summary: "このステップを順番に進めることで、感情に振り回されない恋愛が実現します",
      },
    ],
  },
  {
    name: "改善後の未来ストーリー",
    nameEn: "Future Story After Improvement",
    blocks: [
      { type: "highlight", text: "\"反応\"ではなく\"選択\"でコミュニケーションできるようになったとき、恋愛は驚くほど安定する。" },
      { type: "list", items: ["不安に振り回されず", "愛情を素直に出せて", "相手のペースも尊重できて", "深い結びつきが生まれる"] },
      { type: "insight", label: "エンパス型 × 反応型は、", text: "成長すると 最も\"愛情深く安心な恋人\"に変わるタイプ。" },
    ],
  },
  {
    name: "総評",
    nameEn: "Overall Assessment",
    blocks: [
      { type: "text", text: "インパルスエンパスは、普段は優しく穏やかでも、\"相手の気持ちの揺れ\"を自分のことのように受け取り、情緒が乱れやすいタイプです。その繊細さゆえに、寄り添いすぎて自分の限界を超えてしまい、疲れやすい傾向があります。自分の不安や疲れをそのまま言葉にして共有できるようになると、感情の安定が増し、\"優しさが無理なく続く関係\"へとシフトしていきます。" },
    ],
  },
];
