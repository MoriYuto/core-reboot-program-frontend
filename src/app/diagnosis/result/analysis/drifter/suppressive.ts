import type { AnalysisItem } from "../types";

export const DRIFTER_SUPPRESSIVE: AnalysisItem[] = [
  {
    name: "コア特徴",
    nameEn: "Core Characteristics",
    blocks: [
      {
        type: "highlight",
        text: "ドリフター型の深く入り込みすぎない距離感・感情を表に出さない安定志向・空気を読みながら自然体で接する、に「抑制型」の慎重さと自制が加わる。",
      },
      {
        type: "section",
        emoji: "✨",
        heading: "特徴",
        items: [
          "落ち着いている",
          "安全第一",
          "無理して踏み込まない",
          "勢いより「様子を見る」",
          "感情より合理性",
        ],
        summary: "「静かな安定性」が強まる。",
        variant: "neutral",
      },
      {
        type: "list",
        items: [
          "穏やかだが恋愛温度がやや低めになりがち",
        ],
      },
      {
        type: "insight",
        label: "結果",
        text: "静かな安定性を持ちながら、恋愛では温度が伝わりにくい傾向がある。",
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
          "最初から飛ばさずに様子を見ながら進める",
          "相手のペースに過度に乗らない",
          "LINEや会話は淡々としている",
          "感情の強い相手に苦手意識",
          "「関係を安全に進める」ことを優先しがち",
          "惹かれるより「安心できる人」を好む",
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
          "相手の熱量が強いと引く",
          "深い話になると話題をそらす",
          "不安を感じても顔に出さない",
          "自分の意見を控える",
          "関係が進むほど慎重になる",
          "優しさより「安全」を優先する",
          "相手に合わせすぎずかと言って主張もしない「中庸の壁」",
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
        heading: "ドリフター型×抑制型の信念",
        highlightText: "「深く入るのも深く入られるのも苦手」「距離が曖昧な方が安心する」「感情は見せない方が安全」。",
        items: [
          "ドリフター型の軽さ×抑制型の理性的防御が組み合わさり",
          "感情を抑えながら関係を「静かに調整する」スタイル",
        ],
      },
      {
        type: "insight",
        label: "結果",
        text: "感情を抑えながら関係を静かに調整するスタイルが特徴。",
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
          "安心したいけど溺れたくはない",
          "ただ心地よく一緒にいたい",
          "期待しすぎると傷つくから控えめに",
          "深い話を求められるとプレッシャー",
        ],
        summary: "深さ＜安全というOSが働いている。",
        variant: "neutral",
      },
      {
        type: "insight",
        label: "特徴",
        text: "深さより安全を優先する心理が恋愛の軸になっている。",
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
          "距離を尊重してくれる人",
          "束縛しない押しすぎないタイプ",
          "話が穏やかで理性的な男性",
        ],
        variant: "positive",
      },
      {
        type: "warning",
        emoji: "⚠️",
        heading: "注意",
        items: [
          "「あなたより温度がさらに低い男性」を選ぶと「関係の希薄化」が起きる",
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
          "温度が上がらないままフェードアウト",
          "相手に「本音がわからない」と言われる",
          "深い関係に進まず自然消滅",
          "慎重になりすぎて「進展する前に終わる」",
          "不満を言わずに距離を置くことで誤解される",
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
              "感情の波を抑えようとしすぎて逆に不安が増える",
              "気まずい場面を避け曖昧な行動が増えやすい",
              "相手に合わせるために本音を隠しやすい",
            ],
          },
          {
            emoji: "🔹",
            label: "長期",
            items: [
              "「曖昧なまま続く関係」が習慣化し親密さが深まらない",
              "自分の本音が分からなくなり恋愛迷子状態に陥る",
              "フェードアウトや自然消滅が繰り返される",
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
              "「まあ忙しいんだろう」と流す",
              "心は揺れないが温度も上がらない",
            ],
          },
          {
            trigger: "返信の遅さ",
            reactions: [
              "「自分の時間に戻る」",
              "不安は少ないがむしろ距離が固定化されがち",
            ],
          },
          {
            trigger: "温度差",
            reactions: [
              "追わない",
              "相手からのアプローチも受け止めきれない",
            ],
          },
          {
            trigger: "意見の違い",
            reactions: [
              "感情を抑えて理性で処理",
              "話し合いは避ける傾向",
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
                text: "「最近、もっと話したいと思ってて…」",
                isUser: false,
              },
              {
                speaker: "あなた",
                text: "「うん、また時間あるときに」",
                isUser: true,
              },
            ],
            summary: "彼は「もっと距離を縮めたい」→あなたは「プレッシャーが嫌で距離を維持したい」。温度差のボタンがここでズレる。",
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
            trigger: "彼の強いアプローチ",
            reactions: ["プレッシャーで距離を取る"],
          },
          {
            trigger: "深い関係の要求",
            reactions: ["慎重さが強まり後退"],
          },
          {
            trigger: "疑問をぶつけられる",
            reactions: ["感情より理性でかわす"],
          },
          {
            trigger: "連絡頻度の要求",
            reactions: ["温度が下がる"],
          },
          {
            trigger: "「本音を言って？」",
            reactions: ["戸惑い話題転換"],
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
        text: "あなたの「静かで落ち着いた恋愛」→相手は安心する→しかし深い関係に入りたい時期に入る→あなたは慎重になり距離を一定にキープ。",
      },
      {
        type: "list",
        items: [
          "相手は「冷たい？」と誤解",
          "気持ちが伝わらず自然消滅に近い別れ方に",
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
          "無難な選択をしがち",
          "気持ちを表に出しすぎない",
          "場を乱さない",
          "話題は軽め",
          "安心はあるが温度が上がりにくい",
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
          "短文orシンプル",
          "感情表現が少ない",
          "返信は安定している",
          "既読スルーには無反応",
          "恋の温度がやや淡い",
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
            "空気が穏やか",
            "束縛しない",
            "理性的で話しやすい",
          ],
        },
        bad: {
          heading: "誤解されやすい点",
          items: [
            "温度が低く感じる",
            "踏み込みたいタイミングが分からない",
            "「大事にされてる感」が薄く誤解されやすい",
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
            action: "自分の距離調整の癖を理解",
            detail: "距離感の癖に気づく",
          },
          {
            num: "②",
            category: "感情マネジメント",
            action: "抑えすぎず表に出す練習",
            detail: "感情を表現する力を育てる",
          },
          {
            num: "③",
            category: "コミュニケーション",
            action: "本音・気持ちの表現",
            detail: "小さな本音を伝える力",
          },
          {
            num: "④",
            category: "愛着",
            action: "「近づいても大丈夫」という安心感",
            detail: "自己肯定感を高める",
          },
        ],
        summary: "このステップで「落ち着きと温度」のバランスが取れます。",
      },
    ],
  },
  {
    name: "改善後の未来ストーリー",
    nameEn: "Future Story After Improvement",
    blocks: [
      {
        type: "highlight",
        text: "ドリフター型×抑制型は「静かな安定性」を持つ穏やかなタイプ。",
      },
      {
        type: "list",
        items: [
          "「落ち着きと温度」のバランスが取れる",
          "深い話題でも逃げずに対話できる",
          "男性から「話しやすいし距離がちょうどいい」と言われる",
          "感情の表現が少し増え誤解が減る",
          "関係がゆっくり安定して成長していく",
        ],
      },
      {
        type: "insight",
        label: "特徴",
        text: "穏やかさの中に温かさが加わるほど最も心地よい恋愛が実現する。",
      },
    ],
  },
  {
    name: "総評",
    nameEn: "Overall Assessment",
    blocks: [
      {
        type: "text",
        text: "レギュレイトドリフターは、柔らかさや受容力を持ちながら、恋愛では「自分の温度を抑えすぎて流されやすい」傾向が強く出るタイプです。相手に合わせるほど自分の感情が曖昧になり、関係の主導権を失いやすい特徴があります。小さな気持ちや違和感をその場で丁寧に伝えられるようになると、関係が安定し、「軽やかさの中に自分の軸がある恋愛」へと自然に変化していきます。",
      },
    ],
  },
];
