export type ScoringDirection = "asc" | "desc";

export type SubCategory = {
  name: string;
  scoringDirection: ScoringDirection;
  questions: readonly string[];
};

export type MainCategory = {
  name: string;
  nameEn: string;
  subCategories: readonly SubCategory[];
};

/**
 * asc: 選択肢1→1点, 2→2点, 3→3点, 4→4点, 5→5点（肯定的な質問）
 * desc: 選択肢1→5点, 2→4点, 3→3点, 4→2点, 5→1点（否定的な質問）
 */
export const CATEGORIES: readonly MainCategory[] = [
  {
    name: "自己肯定感",
    nameEn: "Self-Affirmation",
    subCategories: [
      {
        name: "自己受容",
        scoringDirection: "desc",
        questions: [
          "褒められても「たまたま」と感じて素直に受け取れない",
          "失敗すると自分を強く責めてしまうことが多い",
          "自分の欠点ばかりに目がいってしまう",
          "過去の恋愛を思い出すと「もっとできたはず」と後悔が湧いてくる",
          "弱みや本音を人に見せることに抵抗を感じる",
        ],
      },
      {
        name: "自己効力感",
        scoringDirection: "desc",
        questions: [
          "自分の魅力を言葉で説明するのが苦手だと感じる",
          "恋愛で選ばれる自信があまりない",
          "どうせうまくいかないと思って行動を控えてしまうことがある",
          "行動したい気持ちはあっても、最初の一歩が踏み出せないことが多い",
          "自分の過去の恋愛を後悔することが多い",
        ],
      },
      {
        name: "自己信頼",
        scoringDirection: "desc",
        questions: [
          "周囲の意見に流されやすく、自分の判断に自信が持てない",
          "重要な場面で「自分の選択が正しいか」迷ってしまう",
          "完璧にしなければと思い、行動が止まってしまうことがある",
          "恋愛がうまくいかないと「やっぱり自分のせいだ」と思いやすい",
          "好きな人の反応に過敏になりすぎて、自分の感覚がわからなくなることがある",
        ],
      },
    ],
  },
  {
    name: "感情マネジメント",
    nameEn: "Emotional Management",
    subCategories: [
      {
        name: "感情制御力",
        scoringDirection: "asc",
        questions: [
          "相手の言動にイラッとしても、すぐ反応せず一度間を置ける",
          "不安や寂しさを感じても、衝動的にメッセージを送らずにいられる",
          "強い感情が湧いた直後でも、落ち着いて言葉を選べる",
          "感情が揺れたとき、相手を責めるより「自分を整える」方を優先できる",
          "嫉妬・怒り・不安などの瞬間的な感情に流されず、冷静さを保てる",
        ],
      },
      {
        name: "感情回復力",
        scoringDirection: "asc",
        questions: [
          "嫌なことがあっても、その日のうちに気持ちを切り替えられることが多い",
          "落ち込んだ時は、話す・動く・休むなど、自分を立て直す行動を取れる",
          "相手とのすれ違いがあっても「立て直せるはず」と考えられる",
          "感情的な出来事があっても、数時間〜1日で落ち着きを取り戻せる",
          "感情が重くなっても、自分のペースで回復する方法を知っている",
        ],
      },
      {
        name: "感情認知力",
        scoringDirection: "asc",
        questions: [
          "感情が揺れたとき「何が理由でそう感じたのか」を言葉にできる",
          "怒り・不安・寂しさなどに\"名前をつけて\"区別して把握している",
          "感情に飲み込まれそうになっても「本当はどうしたかったのか」を振り返れる",
          "相手の言葉と、自分の感情反応を分けて考えられる",
          "衝動の前に「今、私は何を感じている？」と自分に問いかけられる",
        ],
      },
    ],
  },
  {
    name: "コミュニケーション",
    nameEn: "Communication",
    subCategories: [
      {
        name: "自己表現力",
        scoringDirection: "desc",
        questions: [
          "自分の気持ちを相手に正直に伝えることが苦手だと感じる",
          "本音を言うと嫌われるのではと心配して、気持ちを抑えてしまう",
          "「察してほしい」と思うことがあり、言葉で伝えるのが後回しになる",
          "自分の意見を伝えるとき、言い方に自信が持てず迷ってしまう",
          "自分の気持ちをシンプルに言語化するのが難しいと感じることがある",
        ],
      },
      {
        name: "傾聴共感力",
        scoringDirection: "desc",
        questions: [
          "相手の話を聞くより、自分の話に流れがちだと感じることがある",
          "相手が話している途中で、つい意見を挟みたくなってしまう",
          "会話中、相手の表情や声のトーンなど\"感情のサイン\"に注意を向けている",
          "相手の話の裏にある「本当の気持ち」を汲み取るのが得意だと感じる",
          "会話中、相手の感情の変化に敏感に気づけるほうだ",
        ],
      },
      {
        name: "対話調整力",
        scoringDirection: "asc",
        questions: [
          "相手の反応に強く揺れず、落ち着いて対話を続けられるほうだ",
          "意見が合わなくても、感情的にならずに話し合える",
          "相手の言葉に反応する前に、一呼吸おいて自分の気持ちを整理できる",
          "誤解が生じた時、自分から修正する行動を取るほうだ",
          "感情的な出来事があっても、冷静さを取り戻して会話に戻れる",
        ],
      },
    ],
  },
  {
    name: "愛着スタイル",
    nameEn: "Attachment Style",
    subCategories: [
      {
        name: "安定型",
        scoringDirection: "asc",
        questions: [
          "恋人や好きな人には自然と信頼を置ける方だ",
          "相手の反応が冷たいと、すぐに不安になる",
          "深い関係になると距離を取りたくなる",
          "相手に気持ちを素直に伝えることができる",
          "連絡の頻度が減ると、関係が冷めたのではと感じる",
        ],
      },
      {
        name: "不安型",
        scoringDirection: "asc",
        questions: [
          "パートナーに頼るよりも、自分でなんとかしようとする",
          "ケンカをしても、関係が壊れるとは思わない",
          "相手に愛されているという確信がないと落ち着かない",
          "感情的な話し合いを避けたいと思う",
          "相手の弱さや欠点を受け入れられると思う",
        ],
      },
      {
        name: "回避型",
        scoringDirection: "asc",
        questions: [
          "好きな人の機嫌や反応を深読みしやすい",
          "弱みを見せるより、黙って処理したい",
          "恋愛中でも自分の時間を大切にできる",
          "関係が不安定だと、相手の気持ちを探り続けてしまう",
          "長く一緒にいると疲れたり、自由を失う気がする",
        ],
      },
    ],
  },
  {
    name: "自己認識力",
    nameEn: "Self-Awareness",
    subCategories: [
      {
        name: "思考把握力",
        scoringDirection: "desc",
        questions: [
          "物事がうまくいかないとき、「私のせいかもしれない」と考えやすい",
          "相手の言動を深読みしすぎて、不安になることがある",
          "「完璧にしないと嫌われる」と思い込んでしまうことがある",
          "初対面で相手を理想化したり、逆に警戒しすぎたりすることがある",
          "過去の経験をもとに、未来も同じようにうまくいかないと想像してしまうことがある",
        ],
      },
      {
        name: "感情察知力",
        scoringDirection: "asc",
        questions: [
          "相手の返信速度や態度の変化が、強い不安の引き金になることがある",
          "自分が傷つきやすい場面（嫉妬・無視・距離）を理解できている",
          "パートナーとの衝突で、どの瞬間に怒りが湧くか意識したことがある",
          "親密になってきたときに急に不安や警戒心が出てくることがある",
          "自分の感情が大きく揺れ動きやすいパターンを把握している",
        ],
      },
      {
        name: "行動自覚力",
        scoringDirection: "desc",
        questions: [
          "恋愛で、いつも似たような失敗やパターンを繰り返していると感じている",
          "好きになると相手を優先しすぎてしまう傾向がある",
          "不安になると、相手の気持ちを確かめる行動をとってしまいやすい",
          "距離が縮まると急に冷めたり、距離を置きたくなることがある",
          "気持ちが高まると、勢いで行動して後で後悔することがある",
        ],
      },
    ],
  },
  {
    name: "恋愛行動",
    nameEn: "Relationship Behavior",
    subCategories: [
      {
        name: "積極型",
        scoringDirection: "asc",
        questions: [
          "好きな人には、相手より先に自分から連絡する方だ",
          "不安になると、相手の反応を確認したくなる",
          "気になる人ができたら、距離を縮める行動を自然に取る",
          "関係の進展が遅いと、自分から話を動かしたくなる",
          "相手の気持ちがわからないと、質問して確かめたくなる",
        ],
      },
      {
        name: "慎重型",
        scoringDirection: "asc",
        questions: [
          "好きな人との距離が近づくと、少し引きたくなる",
          "感情的な話し合いを避けて、黙ってしまうことがある",
          "不安や違和感があっても、まずは様子を見ることが多い",
          "期待が外れると、自分から距離を置きやすい",
          "気持ちを言うより、距離を置く方が楽だと感じる",
        ],
      },
      {
        name: "調整型",
        scoringDirection: "asc",
        questions: [
          "自分の気持ちや境界線を、穏やかに伝えられる",
          "恋愛中も、自分の時間と相手との時間をうまく調整できる",
          "不安を感じても、すぐ行動せず一度気持ちを整理できる",
          "相手を尊重しながら、自分の意見も伝えられる",
          "距離が近づきすぎても、遠ざかりすぎても、バランスを戻せる",
        ],
      },
    ],
  },
] as const;

export const QUESTIONS = CATEGORIES.flatMap((c) =>
  c.subCategories.flatMap((s) => s.questions)
);

export const ANSWER_OPTIONS = [
  "まったく当てはまらない",
  "あまり当てはまらない",
  "どちらともいえない",
  "やや当てはまる",
  "とても当てはまる",
] as const;

export const STORAGE_KEY = "diagnosis-answers";

export type SubCategoryScore = {
  mainCategory: string;
  subCategory: string;
  score: number;
  maxScore: number;
};

export type PerformanceLevel = "Excellent" | "Good" | "Fair" | "Needs Work";

export type DiagnosticType = {
  id: number;
  name: string;
  nameEn: string;
  displayName: string;
  imageKey: string;
  pattern: readonly [boolean, boolean, boolean, boolean];
};

export type AttachmentSubType = {
  name: string;
  nameEn: string;
};

export type FullDiagnosisResult = {
  mainType: DiagnosticType;
  subType: AttachmentSubType;
  combinedName: string;
  combinedNameEn: string;
};
