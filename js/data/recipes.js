// レシピ集。各レシピは材料(価格・カテゴリ)と栄養(1人前)を持つ。
// price = pricePerUnit * qty（円）。栄養は nutritionPerServing（baseServings 人前あたり）。
// genre: 和食/洋食/中華  mealSlots: breakfast/lunch/dinner  tags: meat/fish/veggie/egg

export const RECIPES = [
  // ---------------- 朝食（軽め） ----------------
  {
    id: "gohan_miso_tamago", name: "ごはん・味噌汁・卵焼き", genre: "和食",
    mealSlots: ["breakfast"], tags: ["egg", "veggie"], baseServings: 2,
    ingredients: [
      { name: "米", qty: 1, unit: "合", pricePerUnit: 60, category: "米・パン" },
      { name: "卵", qty: 3, unit: "個", pricePerUnit: 25, category: "肉魚" },
      { name: "豆腐", qty: 0.5, unit: "丁", pricePerUnit: 60, category: "野菜" },
      { name: "わかめ", qty: 5, unit: "g", pricePerUnit: 2, category: "調味料" },
      { name: "味噌", qty: 30, unit: "g", pricePerUnit: 1, category: "調味料" },
    ],
    steps: [
      "米を研いで炊く。",
      "わかめと豆腐を鍋に入れ、だし汁で温めて味噌を溶かし味噌汁を作る。",
      "卵を溶いて砂糖・醤油少々を加え、卵焼き器で巻きながら焼く。",
    ],
    tips: [
      "卵焼きは弱めの中火でゆっくり巻くと黄色くふんわり仕上がる。",
      "味噌汁は沸騰させると香りが飛ぶので、直前で火を止めて。",
    ],
    nutritionPerServing: { kcal: 380, protein: 14, fat: 10, carb: 55 },
  },
  {
    id: "toast_egg", name: "トースト・目玉焼き・サラダ", genre: "洋食",
    mealSlots: ["breakfast"], tags: ["egg", "veggie"], baseServings: 2,
    ingredients: [
      { name: "食パン", qty: 4, unit: "枚", pricePerUnit: 20, category: "米・パン" },
      { name: "卵", qty: 2, unit: "個", pricePerUnit: 25, category: "肉魚" },
      { name: "レタス", qty: 0.3, unit: "玉", pricePerUnit: 150, category: "野菜" },
      { name: "トマト", qty: 1, unit: "個", pricePerUnit: 80, category: "野菜" },
      { name: "バター", qty: 20, unit: "g", pricePerUnit: 2, category: "調味料" },
    ],
    steps: [
      "食パンをトースターでこんがり焼き、バターを塗る。",
      "フライパンにバターを溶かし、卵を割り入れて目玉焼きにする。",
      "レタスをちぎり、トマトを切ってサラダに盛り付ける。",
    ],
    tips: [
      "目玉焼きは蓋をして蒸らすと白身がしっかり火が通る。半熟好みなら蒸らし時間を短くして。",
    ],
    nutritionPerServing: { kcal: 350, protein: 12, fat: 16, carb: 40 },
  },
  {
    id: "natto_gohan", name: "納豆ごはん・味噌汁", genre: "和食",
    mealSlots: ["breakfast"], tags: ["veggie"], baseServings: 2,
    ingredients: [
      { name: "米", qty: 1, unit: "合", pricePerUnit: 60, category: "米・パン" },
      { name: "納豆", qty: 2, unit: "パック", pricePerUnit: 35, category: "野菜" },
      { name: "豆腐", qty: 0.5, unit: "丁", pricePerUnit: 60, category: "野菜" },
      { name: "味噌", qty: 30, unit: "g", pricePerUnit: 1, category: "調味料" },
    ],
    steps: [
      "米を研いで炊く。",
      "納豆を付属のたれ・からしでよく混ぜる。",
      "豆腐を切り、だし汁で温めて味噌を溶かして味噌汁を作る。ご飯に納豆をかける。",
    ],
    tips: [
      "納豆は100回以上よく混ぜると粘りが増して風味がアップする。",
    ],
    nutritionPerServing: { kcal: 360, protein: 16, fat: 8, carb: 56 },
  },
  {
    id: "onigiri", name: "おにぎり・味噌汁", genre: "和食",
    mealSlots: ["breakfast", "lunch"], tags: ["veggie"], baseServings: 2,
    ingredients: [
      { name: "米", qty: 1.2, unit: "合", pricePerUnit: 60, category: "米・パン" },
      { name: "鮭フレーク", qty: 40, unit: "g", pricePerUnit: 3, category: "肉魚" },
      { name: "のり", qty: 2, unit: "枚", pricePerUnit: 15, category: "調味料" },
      { name: "味噌", qty: 30, unit: "g", pricePerUnit: 1, category: "調味料" },
    ],
    steps: [
      "米を炊き、塩を少量混ぜる。",
      "鮭フレークを中に入れ、三角形に握ってのりを巻く。",
      "だし汁を温めて味噌を溶かし、味噌汁を作る。",
    ],
    tips: [
      "手に塩水をつけて握ると程よく塩味がつく。温かいうちに握るとまとまりやすい。",
    ],
    nutritionPerServing: { kcal: 340, protein: 10, fat: 5, carb: 62 },
  },
  {
    id: "pancake", name: "パンケーキ・フルーツ", genre: "洋食",
    mealSlots: ["breakfast"], tags: ["egg"], baseServings: 2,
    ingredients: [
      { name: "ホットケーキミックス", qty: 150, unit: "g", pricePerUnit: 0.6, category: "米・パン" },
      { name: "卵", qty: 1, unit: "個", pricePerUnit: 25, category: "肉魚" },
      { name: "牛乳", qty: 100, unit: "ml", pricePerUnit: 0.2, category: "調味料" },
      { name: "バナナ", qty: 1, unit: "本", pricePerUnit: 30, category: "野菜" },
    ],
    steps: [
      "ホットケーキミックスに卵と牛乳を加えてよく混ぜる。",
      "フライパンに生地を流し入れ、表面に気泡が出たら裏返して両面焼く。",
      "バナナを切って添える。",
    ],
    tips: [
      "生地を混ぜすぎると膨らまないので、粉が見えなくなる程度に留めるのがコツ。",
      "弱火でじっくり焼くとふんわり厚く仕上がる。",
    ],
    nutritionPerServing: { kcal: 400, protein: 9, fat: 10, carb: 68 },
  },
  {
    id: "french_toast", name: "フレンチトースト", genre: "洋食",
    mealSlots: ["breakfast"], tags: ["egg"], baseServings: 2,
    ingredients: [
      { name: "食パン", qty: 4, unit: "枚", pricePerUnit: 20, category: "米・パン" },
      { name: "卵", qty: 2, unit: "個", pricePerUnit: 25, category: "肉魚" },
      { name: "牛乳", qty: 150, unit: "ml", pricePerUnit: 0.2, category: "調味料" },
      { name: "砂糖", qty: 20, unit: "g", pricePerUnit: 0.3, category: "調味料" },
    ],
    steps: [
      "卵・牛乳・砂糖を混ぜて卵液を作り、食パンを浸して10分ほど置く。",
      "フライパンにバターを熱し、食パンを両面きつね色になるまで焼く。",
    ],
    tips: [
      "前夜から卵液に浸しておくと、中までしっかり染みてよりふわふわに仕上がる。",
    ],
    nutritionPerServing: { kcal: 380, protein: 13, fat: 12, carb: 52 },
  },
  {
    id: "cereal", name: "シリアル・ヨーグルト", genre: "洋食",
    mealSlots: ["breakfast"], tags: ["veggie"], baseServings: 2,
    ingredients: [
      { name: "シリアル", qty: 120, unit: "g", pricePerUnit: 1.2, category: "米・パン" },
      { name: "牛乳", qty: 300, unit: "ml", pricePerUnit: 0.2, category: "調味料" },
      { name: "ヨーグルト", qty: 200, unit: "g", pricePerUnit: 0.8, category: "調味料" },
    ],
    steps: [
      "シリアルをボウルに入れ、牛乳をかける。",
      "ヨーグルトを添えてできあがり。",
    ],
    tips: [
      "冷たい牛乳をかけるとシリアルのサクサク感が長持ちする。食べる直前にかけて。",
    ],
    nutritionPerServing: { kcal: 320, protein: 11, fat: 7, carb: 54 },
  },
  {
    id: "wafu_teishoku", name: "焼き鮭朝定食", genre: "和食",
    mealSlots: ["breakfast"], tags: ["fish"], baseServings: 2,
    ingredients: [
      { name: "米", qty: 1, unit: "合", pricePerUnit: 60, category: "米・パン" },
      { name: "鮭切り身", qty: 2, unit: "切れ", pricePerUnit: 120, category: "肉魚" },
      { name: "豆腐", qty: 0.5, unit: "丁", pricePerUnit: 60, category: "野菜" },
      { name: "味噌", qty: 30, unit: "g", pricePerUnit: 1, category: "調味料" },
    ],
    steps: [
      "米を炊く。",
      "鮭切り身に塩をふり、グリルまたはフライパンで両面焼く。",
      "豆腐を切り、だし汁で温めて味噌を溶かして味噌汁を作る。",
    ],
    tips: [
      "塩を振って10分ほど置くと余分な水分と臭みが抜ける。グリルは予熱しておくと皮がパリッと仕上がる。",
    ],
    nutritionPerServing: { kcal: 420, protein: 24, fat: 12, carb: 50 },
  },

  // ---------------- 昼食 ----------------
  {
    id: "chahan", name: "チャーハン", genre: "中華",
    mealSlots: ["lunch"], tags: ["egg", "meat"], baseServings: 2,
    ingredients: [
      { name: "米", qty: 1.2, unit: "合", pricePerUnit: 60, category: "米・パン" },
      { name: "卵", qty: 2, unit: "個", pricePerUnit: 25, category: "肉魚" },
      { name: "焼豚", qty: 80, unit: "g", pricePerUnit: 1.5, category: "肉魚" },
      { name: "長ねぎ", qty: 0.5, unit: "本", pricePerUnit: 60, category: "野菜" },
    ],
    steps: [
      "フライパンに油を熱し、焼豚と長ねぎを炒める。",
      "ご飯を加えてほぐしながら炒め、塩・こしょうで味をつける。",
      "端に寄せた場所に溶き卵を流し入れ、半熟のうちにご飯と混ぜ合わせる。",
    ],
    tips: [
      "冷やご飯を使うとパラパラに仕上がる。強火で手早く炒めるのが最大のコツ。",
      "卵は最後に加えて半熟のうちに混ぜるとふんわりした食感になる。",
    ],
    nutritionPerServing: { kcal: 480, protein: 16, fat: 14, carb: 68 },
  },
  {
    id: "yakisoba", name: "焼きそば", genre: "中華",
    mealSlots: ["lunch"], tags: ["meat", "veggie"], baseServings: 2,
    ingredients: [
      { name: "焼きそば麺", qty: 2, unit: "玉", pricePerUnit: 40, category: "米・パン" },
      { name: "豚こま肉", qty: 120, unit: "g", pricePerUnit: 1.2, category: "肉魚" },
      { name: "キャベツ", qty: 0.25, unit: "玉", pricePerUnit: 150, category: "野菜" },
      { name: "にんじん", qty: 0.5, unit: "本", pricePerUnit: 30, category: "野菜" },
    ],
    steps: [
      "豚こま肉・キャベツ・にんじんを食べやすい大きさに切る。",
      "フライパンで豚肉を炒め、野菜を加えてさらに炒める。",
      "麺を加えて水少量を加えながらほぐし、ソースで味付けして仕上げる。",
    ],
    tips: [
      "麺をほぐすとき水は少量ずつ加えると焦げつかない。ソースは仕上げに加えると香りが立つ。",
    ],
    nutritionPerServing: { kcal: 450, protein: 15, fat: 16, carb: 60 },
  },
  {
    id: "udon", name: "肉うどん", genre: "和食",
    mealSlots: ["lunch"], tags: ["meat"], baseServings: 2,
    ingredients: [
      { name: "うどん", qty: 2, unit: "玉", pricePerUnit: 45, category: "米・パン" },
      { name: "牛こま肉", qty: 100, unit: "g", pricePerUnit: 1.8, category: "肉魚" },
      { name: "長ねぎ", qty: 0.5, unit: "本", pricePerUnit: 60, category: "野菜" },
      { name: "めんつゆ", qty: 60, unit: "ml", pricePerUnit: 0.5, category: "調味料" },
    ],
    steps: [
      "鍋にめんつゆと水を合わせて温める。",
      "牛こま肉を加えて火が通るまで煮る。",
      "うどんをゆでて器に盛り、つゆと肉・長ねぎを乗せる。",
    ],
    tips: [
      "牛肉はさっと火を通す程度にすると柔らかく仕上がる。煮すぎると硬くなるので注意。",
    ],
    nutritionPerServing: { kcal: 420, protein: 16, fat: 10, carb: 64 },
  },
  {
    id: "pasta_tomato", name: "トマトパスタ", genre: "洋食",
    mealSlots: ["lunch", "dinner"], tags: ["veggie"], baseServings: 2,
    ingredients: [
      { name: "パスタ", qty: 200, unit: "g", pricePerUnit: 0.5, category: "米・パン" },
      { name: "トマト缶", qty: 1, unit: "缶", pricePerUnit: 100, category: "調味料" },
      { name: "玉ねぎ", qty: 1, unit: "個", pricePerUnit: 40, category: "野菜" },
      { name: "にんにく", qty: 1, unit: "片", pricePerUnit: 20, category: "野菜" },
    ],
    steps: [
      "玉ねぎ・にんにくをみじん切りにし、オリーブ油で炒める。",
      "トマト缶を加えて10〜15分煮詰め、塩・こしょうで味を調える。",
      "パスタをゆでてソースと和える。",
    ],
    tips: [
      "トマト缶はじっくり煮詰めるほど甘みが増す。パスタのゆで汁を大さじ1〜2加えるとソースがよく絡む。",
    ],
    nutritionPerServing: { kcal: 430, protein: 13, fat: 8, carb: 78 },
  },
  {
    id: "pasta_meat", name: "ミートソースパスタ", genre: "洋食",
    mealSlots: ["lunch", "dinner"], tags: ["meat"], baseServings: 2,
    ingredients: [
      { name: "パスタ", qty: 200, unit: "g", pricePerUnit: 0.5, category: "米・パン" },
      { name: "合いびき肉", qty: 150, unit: "g", pricePerUnit: 1.4, category: "肉魚" },
      { name: "トマト缶", qty: 1, unit: "缶", pricePerUnit: 100, category: "調味料" },
      { name: "玉ねぎ", qty: 1, unit: "個", pricePerUnit: 40, category: "野菜" },
    ],
    steps: [
      "玉ねぎをみじん切りにしてオリーブ油で炒め、合いびき肉を加えて色が変わるまで炒める。",
      "トマト缶・塩・こしょうを加え、弱火で20分煮込む。",
      "パスタをゆでてソースをかける。",
    ],
    tips: [
      "玉ねぎをあめ色になるまでしっかり炒めると甘みと深みが格段にアップする。",
    ],
    nutritionPerServing: { kcal: 540, protein: 22, fat: 18, carb: 72 },
  },
  {
    id: "oyakodon", name: "親子丼", genre: "和食",
    mealSlots: ["lunch", "dinner"], tags: ["meat", "egg"], baseServings: 2,
    ingredients: [
      { name: "米", qty: 1.2, unit: "合", pricePerUnit: 60, category: "米・パン" },
      { name: "鶏もも肉", qty: 200, unit: "g", pricePerUnit: 1.1, category: "肉魚" },
      { name: "卵", qty: 3, unit: "個", pricePerUnit: 25, category: "肉魚" },
      { name: "玉ねぎ", qty: 1, unit: "個", pricePerUnit: 40, category: "野菜" },
      { name: "めんつゆ", qty: 60, unit: "ml", pricePerUnit: 0.5, category: "調味料" },
    ],
    steps: [
      "鶏もも肉を一口大に切り、玉ねぎを薄切りにする。",
      "小鍋にめんつゆと水を合わせ、鶏肉と玉ねぎを入れて煮る。",
      "火が通ったら溶き卵を回しかけ、半熟で火を止めてご飯の上に乗せる。",
    ],
    tips: [
      "卵は2回に分けて加えると半熟のふわとろ食感になる。最初に少量入れ、少し固まってから残りを加えて。",
    ],
    nutritionPerServing: { kcal: 560, protein: 30, fat: 16, carb: 70 },
  },
  {
    id: "gyudon", name: "牛丼", genre: "和食",
    mealSlots: ["lunch", "dinner"], tags: ["meat"], baseServings: 2,
    ingredients: [
      { name: "米", qty: 1.2, unit: "合", pricePerUnit: 60, category: "米・パン" },
      { name: "牛こま肉", qty: 200, unit: "g", pricePerUnit: 1.8, category: "肉魚" },
      { name: "玉ねぎ", qty: 1, unit: "個", pricePerUnit: 40, category: "野菜" },
      { name: "しょうゆ", qty: 40, unit: "ml", pricePerUnit: 0.4, category: "調味料" },
    ],
    steps: [
      "玉ねぎを薄切りにし、だし・醤油・みりん・砂糖で煮る。",
      "牛こま肉を加えて火が通るまで煮る。",
      "ご飯を器に盛り、牛肉と玉ねぎを乗せる。",
    ],
    tips: [
      "玉ねぎは透き通るまでしっかり煮ると甘みが出てプロの味に近づく。",
    ],
    nutritionPerServing: { kcal: 590, protein: 24, fat: 18, carb: 74 },
  },
  {
    id: "curry_rice", name: "カレーライス", genre: "洋食",
    mealSlots: ["lunch", "dinner"], tags: ["meat", "veggie"], baseServings: 4,
    ingredients: [
      { name: "米", qty: 2.5, unit: "合", pricePerUnit: 60, category: "米・パン" },
      { name: "豚こま肉", qty: 250, unit: "g", pricePerUnit: 1.2, category: "肉魚" },
      { name: "じゃがいも", qty: 3, unit: "個", pricePerUnit: 30, category: "野菜" },
      { name: "にんじん", qty: 1, unit: "本", pricePerUnit: 30, category: "野菜" },
      { name: "玉ねぎ", qty: 2, unit: "個", pricePerUnit: 40, category: "野菜" },
      { name: "カレールー", qty: 0.5, unit: "箱", pricePerUnit: 200, category: "調味料" },
    ],
    steps: [
      "玉ねぎ・にんじん・じゃがいもを切り、豚こま肉と一緒に鍋で炒める。",
      "水を加えて野菜が柔らかくなるまで15分煮る。",
      "火を止めてカレールーを溶かし、再び弱火で10分煮る。ご飯にかける。",
    ],
    tips: [
      "玉ねぎをあめ色になるまで炒めると深みのある味わいになる。ルーは必ず火を止めてから溶かしてダマ防止。",
    ],
    nutritionPerServing: { kcal: 620, protein: 18, fat: 18, carb: 92 },
  },
  {
    id: "sandwich", name: "サンドイッチ", genre: "洋食",
    mealSlots: ["lunch"], tags: ["egg", "veggie"], baseServings: 2,
    ingredients: [
      { name: "食パン", qty: 6, unit: "枚", pricePerUnit: 20, category: "米・パン" },
      { name: "卵", qty: 3, unit: "個", pricePerUnit: 25, category: "肉魚" },
      { name: "ハム", qty: 4, unit: "枚", pricePerUnit: 30, category: "肉魚" },
      { name: "レタス", qty: 0.3, unit: "玉", pricePerUnit: 150, category: "野菜" },
    ],
    steps: [
      "卵をゆでてつぶし、マヨネーズで和えてエッグサラダを作る。",
      "食パンにエッグサラダ・ハム・レタスを挟む。",
      "斜めに切って盛り付ける。",
    ],
    tips: [
      "食パンにバターやマヨネーズを塗ると、具の水分がパンに染みにくくなる。",
    ],
    nutritionPerServing: { kcal: 420, protein: 18, fat: 16, carb: 50 },
  },
  {
    id: "ramen", name: "野菜ラーメン", genre: "中華",
    mealSlots: ["lunch"], tags: ["meat", "veggie"], baseServings: 2,
    ingredients: [
      { name: "中華麺", qty: 2, unit: "玉", pricePerUnit: 50, category: "米・パン" },
      { name: "豚こま肉", qty: 80, unit: "g", pricePerUnit: 1.2, category: "肉魚" },
      { name: "もやし", qty: 1, unit: "袋", pricePerUnit: 30, category: "野菜" },
      { name: "長ねぎ", qty: 0.5, unit: "本", pricePerUnit: 60, category: "野菜" },
    ],
    steps: [
      "鍋にスープ（鶏がらスープの素・醤油・塩・水）を合わせて温める。",
      "豚こま肉・もやし・長ねぎを炒めてスープに加える。",
      "中華麺をゆでて器に盛り、スープと具を乗せる。",
    ],
    tips: [
      "スープは沸騰直前で火を弱めると澄んだ仕上がりになる。仕上げにごま油を数滴たらすと風味アップ。",
    ],
    nutritionPerServing: { kcal: 470, protein: 18, fat: 14, carb: 66 },
  },

  // ---------------- 夕食（主菜） ----------------
  {
    id: "nikujaga", name: "肉じゃが", genre: "和食",
    mealSlots: ["dinner"], tags: ["meat"], baseServings: 2,
    ingredients: [
      { name: "じゃがいも", qty: 3, unit: "個", pricePerUnit: 30, category: "野菜" },
      { name: "牛こま肉", qty: 150, unit: "g", pricePerUnit: 1.8, category: "肉魚" },
      { name: "玉ねぎ", qty: 1, unit: "個", pricePerUnit: 40, category: "野菜" },
      { name: "にんじん", qty: 1, unit: "本", pricePerUnit: 30, category: "野菜" },
      { name: "しょうゆ", qty: 40, unit: "ml", pricePerUnit: 0.4, category: "調味料" },
    ],
    steps: [
      "じゃがいも・にんじん・玉ねぎを食べやすい大きさに切る。",
      "鍋に油を熱して牛こま肉を炒め、野菜を加えて炒め合わせる。",
      "醤油・砂糖・みりん・だし汁を加え、落とし蓋をして中火で15〜20分煮る。",
    ],
    tips: [
      "じゃがいもの角を切り落とす（面取り）と煮崩れしにくくなる。",
      "砂糖を先に入れ、醤油を後から加えると味がよく染みる。",
    ],
    nutritionPerServing: { kcal: 380, protein: 18, fat: 12, carb: 42 },
  },
  {
    id: "shogayaki", name: "豚の生姜焼き", genre: "和食",
    mealSlots: ["dinner"], tags: ["meat"], baseServings: 2,
    ingredients: [
      { name: "豚ロース肉", qty: 250, unit: "g", pricePerUnit: 1.6, category: "肉魚" },
      { name: "玉ねぎ", qty: 1, unit: "個", pricePerUnit: 40, category: "野菜" },
      { name: "しょうが", qty: 1, unit: "片", pricePerUnit: 30, category: "野菜" },
      { name: "しょうゆ", qty: 40, unit: "ml", pricePerUnit: 0.4, category: "調味料" },
    ],
    steps: [
      "しょうがをすりおろし、醤油・みりん・酒と合わせてたれを作る。",
      "豚ロース肉をたれに10分漬ける。",
      "フライパンで玉ねぎを炒め、豚肉を加えて焼き、たれを絡めて仕上げる。",
    ],
    tips: [
      "豚肉は漬けすぎると硬くなるので10〜15分が目安。強火で手早く焼くと肉汁が閉じ込められる。",
    ],
    nutritionPerServing: { kcal: 450, protein: 26, fat: 24, carb: 18 },
  },
  {
    id: "hamburg", name: "ハンバーグ", genre: "洋食",
    mealSlots: ["dinner"], tags: ["meat", "egg"], baseServings: 2,
    ingredients: [
      { name: "合いびき肉", qty: 250, unit: "g", pricePerUnit: 1.4, category: "肉魚" },
      { name: "玉ねぎ", qty: 1, unit: "個", pricePerUnit: 40, category: "野菜" },
      { name: "卵", qty: 1, unit: "個", pricePerUnit: 25, category: "肉魚" },
      { name: "パン粉", qty: 30, unit: "g", pricePerUnit: 0.5, category: "調味料" },
    ],
    steps: [
      "玉ねぎをみじん切りにして炒め、冷ます。合いびき肉・卵・パン粉・玉ねぎを混ぜてよくこねる。",
      "小判形に成形し、中央をくぼませる。",
      "フライパンで両面焼き色をつけ、蓋をして蒸し焼きにして中まで火を通す。",
    ],
    tips: [
      "タネをよくこねて粘りを出し、手に打ちつけて空気を抜くと焼いたときに割れにくくなる。",
      "中央をくぼませると焼くときに膨らんで均一に火が通る。",
    ],
    nutritionPerServing: { kcal: 480, protein: 25, fat: 30, carb: 20 },
  },
  {
    id: "karaage", name: "鶏の唐揚げ", genre: "和食",
    mealSlots: ["dinner"], tags: ["meat"], baseServings: 2,
    ingredients: [
      { name: "鶏もも肉", qty: 300, unit: "g", pricePerUnit: 1.1, category: "肉魚" },
      { name: "片栗粉", qty: 40, unit: "g", pricePerUnit: 0.4, category: "調味料" },
      { name: "しょうゆ", qty: 30, unit: "ml", pricePerUnit: 0.4, category: "調味料" },
      { name: "揚げ油", qty: 100, unit: "ml", pricePerUnit: 0.3, category: "調味料" },
    ],
    steps: [
      "鶏もも肉を一口大に切り、醤油・生姜・にんにくで10〜15分漬ける。",
      "片栗粉をまぶして170℃の揚げ油でじっくり揚げる。",
      "一度取り出して休ませ、180℃で二度揚げしてカラッと仕上げる。",
    ],
    tips: [
      "二度揚げが外カリ中ジューシーに仕上げる最大のコツ。一度目で中まで火を通し、二度目で衣をカリッとさせる。",
    ],
    nutritionPerServing: { kcal: 520, protein: 28, fat: 34, carb: 16 },
  },
  {
    id: "saba_shioyaki", name: "さばの塩焼き", genre: "和食",
    mealSlots: ["dinner"], tags: ["fish"], baseServings: 2,
    ingredients: [
      { name: "さば", qty: 2, unit: "切れ", pricePerUnit: 110, category: "肉魚" },
      { name: "大根", qty: 0.3, unit: "本", pricePerUnit: 120, category: "野菜" },
      { name: "塩", qty: 5, unit: "g", pricePerUnit: 0.1, category: "調味料" },
    ],
    steps: [
      "さばに塩をまんべんなく振り、10分おいて出てきた水気を拭き取る。",
      "グリルまたはフライパンで皮目から焼き、両面こんがり焼く。",
      "大根をすりおろして添える。",
    ],
    tips: [
      "塩を振って置く時間が長いほど身が締まり臭みも抜ける。グリルを予熱しておくと皮がパリッと仕上がる。",
    ],
    nutritionPerServing: { kcal: 360, protein: 24, fat: 24, carb: 6 },
  },
  {
    id: "teriyaki_chicken", name: "鶏の照り焼き", genre: "和食",
    mealSlots: ["dinner"], tags: ["meat"], baseServings: 2,
    ingredients: [
      { name: "鶏もも肉", qty: 300, unit: "g", pricePerUnit: 1.1, category: "肉魚" },
      { name: "しょうゆ", qty: 40, unit: "ml", pricePerUnit: 0.4, category: "調味料" },
      { name: "みりん", qty: 40, unit: "ml", pricePerUnit: 0.5, category: "調味料" },
      { name: "ピーマン", qty: 3, unit: "個", pricePerUnit: 25, category: "野菜" },
    ],
    steps: [
      "鶏もも肉に塩・こしょうをふる。",
      "フライパンで皮目から焼き、火が通ったら醤油・みりんを合わせたたれを加える。",
      "たれを絡めながら照りよく焼き、ピーマンも一緒に炒め合わせる。",
    ],
    tips: [
      "皮目からしっかり焼いて脂を出すと皮がパリッとなる。たれは焦げやすいので加えたら弱火で絡める。",
    ],
    nutritionPerServing: { kcal: 470, protein: 27, fat: 26, carb: 22 },
  },
  {
    id: "mabo_tofu", name: "麻婆豆腐", genre: "中華",
    mealSlots: ["dinner"], tags: ["meat"], baseServings: 2,
    ingredients: [
      { name: "豆腐", qty: 1, unit: "丁", pricePerUnit: 80, category: "野菜" },
      { name: "豚ひき肉", qty: 120, unit: "g", pricePerUnit: 1.3, category: "肉魚" },
      { name: "長ねぎ", qty: 0.5, unit: "本", pricePerUnit: 60, category: "野菜" },
      { name: "豆板醤", qty: 15, unit: "g", pricePerUnit: 1, category: "調味料" },
    ],
    steps: [
      "豆腐を角切りにする。長ねぎをみじん切りにする。",
      "フライパンに油を熱し、豚ひき肉と豆板醤を炒める。",
      "水・醤油・鶏がらスープを加えて豆腐を入れて煮て、水溶き片栗粉でとろみをつける。",
    ],
    tips: [
      "豆腐は下ゆでしておくと崩れにくくなる。仕上げにごま油を少量たらすと香りが豊かになる。",
    ],
    nutritionPerServing: { kcal: 380, protein: 22, fat: 24, carb: 14 },
  },
  {
    id: "gyoza", name: "餃子", genre: "中華",
    mealSlots: ["dinner"], tags: ["meat", "veggie"], baseServings: 2,
    ingredients: [
      { name: "餃子の皮", qty: 24, unit: "枚", pricePerUnit: 4, category: "米・パン" },
      { name: "豚ひき肉", qty: 150, unit: "g", pricePerUnit: 1.3, category: "肉魚" },
      { name: "キャベツ", qty: 0.25, unit: "玉", pricePerUnit: 150, category: "野菜" },
      { name: "にら", qty: 0.5, unit: "束", pricePerUnit: 80, category: "野菜" },
    ],
    steps: [
      "キャベツを塩もみして水気を絞りみじん切りにする。豚ひき肉・にら・にんにく・生姜と混ぜてタネを作る。",
      "餃子の皮にタネを乗せ、縁に水をつけてひだを折りながら包む。",
      "フライパンに油を熱して餃子を並べて焼き色をつけ、水を加えて蓋をし蒸し焼きにする。",
    ],
    tips: [
      "タネは粘りが出るまでよくこねると皮から外れにくくなる。焼くときは熱湯を使うと蒸し時間が短くなる。",
    ],
    nutritionPerServing: { kcal: 440, protein: 19, fat: 22, carb: 42 },
  },
  {
    id: "cream_stew", name: "クリームシチュー", genre: "洋食",
    mealSlots: ["dinner"], tags: ["meat", "veggie"], baseServings: 4,
    ingredients: [
      { name: "鶏もも肉", qty: 250, unit: "g", pricePerUnit: 1.1, category: "肉魚" },
      { name: "じゃがいも", qty: 3, unit: "個", pricePerUnit: 30, category: "野菜" },
      { name: "にんじん", qty: 1, unit: "本", pricePerUnit: 30, category: "野菜" },
      { name: "玉ねぎ", qty: 2, unit: "個", pricePerUnit: 40, category: "野菜" },
      { name: "シチュールー", qty: 0.5, unit: "箱", pricePerUnit: 200, category: "調味料" },
      { name: "牛乳", qty: 200, unit: "ml", pricePerUnit: 0.2, category: "調味料" },
    ],
    steps: [
      "鶏もも肉・じゃがいも・にんじん・玉ねぎを食べやすい大きさに切って鍋で炒める。",
      "水を加えて野菜が柔らかくなるまで15分煮る。",
      "火を止めてシチュールーを溶かし、牛乳を加えて弱火で10分煮る。",
    ],
    tips: [
      "ルーは必ず火を止めてから溶かすとダマができない。牛乳は最後に加えて沸騰させないのがクリーミーに仕上げるコツ。",
    ],
    nutritionPerServing: { kcal: 420, protein: 18, fat: 18, carb: 44 },
  },
  {
    id: "salmon_meuniere", name: "鮭のムニエル", genre: "洋食",
    mealSlots: ["dinner"], tags: ["fish"], baseServings: 2,
    ingredients: [
      { name: "鮭切り身", qty: 2, unit: "切れ", pricePerUnit: 120, category: "肉魚" },
      { name: "小麦粉", qty: 30, unit: "g", pricePerUnit: 0.3, category: "調味料" },
      { name: "バター", qty: 20, unit: "g", pricePerUnit: 2, category: "調味料" },
      { name: "ブロッコリー", qty: 0.5, unit: "株", pricePerUnit: 160, category: "野菜" },
    ],
    steps: [
      "鮭切り身に塩・こしょうをふり、小麦粉を薄くまぶす。",
      "フライパンにバターを熱し、鮭を両面きつね色になるまで焼く。",
      "ブロッコリーを小房に分けてゆで、添える。",
    ],
    tips: [
      "小麦粉は余分をはたき落としてから焼くと焦げにくい。バターを少し焦がしてから焼くと香ばしさが増す。",
    ],
    nutritionPerServing: { kcal: 400, protein: 26, fat: 22, carb: 14 },
  },
  {
    id: "chinjao", name: "青椒肉絲", genre: "中華",
    mealSlots: ["dinner"], tags: ["meat", "veggie"], baseServings: 2,
    ingredients: [
      { name: "牛こま肉", qty: 200, unit: "g", pricePerUnit: 1.8, category: "肉魚" },
      { name: "ピーマン", qty: 4, unit: "個", pricePerUnit: 25, category: "野菜" },
      { name: "たけのこ水煮", qty: 100, unit: "g", pricePerUnit: 1, category: "野菜" },
      { name: "オイスターソース", qty: 30, unit: "ml", pricePerUnit: 0.8, category: "調味料" },
    ],
    steps: [
      "牛こま肉・ピーマン・たけのこを細切りにする。",
      "フライパンに油を熱して牛肉を炒め、野菜を加えてさらに炒める。",
      "オイスターソース・醤油・みりんで味付けし、強火で手早く仕上げる。",
    ],
    tips: [
      "強火で手早く炒めることでピーマンのシャキシャキ感が残る。牛肉に片栗粉をまぶしておくと柔らかく仕上がる。",
    ],
    nutritionPerServing: { kcal: 430, protein: 24, fat: 26, carb: 16 },
  },
  {
    id: "hoikoro", name: "回鍋肉", genre: "中華",
    mealSlots: ["dinner"], tags: ["meat", "veggie"], baseServings: 2,
    ingredients: [
      { name: "豚バラ肉", qty: 200, unit: "g", pricePerUnit: 1.5, category: "肉魚" },
      { name: "キャベツ", qty: 0.3, unit: "玉", pricePerUnit: 150, category: "野菜" },
      { name: "ピーマン", qty: 2, unit: "個", pricePerUnit: 25, category: "野菜" },
      { name: "甜麺醤", qty: 30, unit: "g", pricePerUnit: 1, category: "調味料" },
    ],
    steps: [
      "豚バラ肉を一口大に切る。キャベツをざく切り、ピーマンを乱切りにする。",
      "フライパンで豚バラ肉を炒め、キャベツ・ピーマンを加えてさらに炒める。",
      "甜麺醤・醤油・みりんで味付けし、強火で手早く仕上げる。",
    ],
    tips: [
      "キャベツはやや大きめに切ると食感が残っておいしい。甜麺醤は焦げやすいので加えたら素早く混ぜる。",
    ],
    nutritionPerServing: { kcal: 460, protein: 20, fat: 32, carb: 18 },
  },
  {
    id: "buri_daikon", name: "ぶり大根", genre: "和食",
    mealSlots: ["dinner"], tags: ["fish"], baseServings: 2,
    ingredients: [
      { name: "ぶり", qty: 2, unit: "切れ", pricePerUnit: 130, category: "肉魚" },
      { name: "大根", qty: 0.5, unit: "本", pricePerUnit: 120, category: "野菜" },
      { name: "しょうゆ", qty: 40, unit: "ml", pricePerUnit: 0.4, category: "調味料" },
      { name: "みりん", qty: 40, unit: "ml", pricePerUnit: 0.5, category: "調味料" },
    ],
    steps: [
      "大根を2cm厚に切り、米のとぎ汁で下ゆでする。",
      "鍋にだし・醤油・みりん・砂糖・酒を合わせてぶりと大根を入れる。",
      "落とし蓋をして弱火で20〜30分煮る。",
    ],
    tips: [
      "大根を米のとぎ汁で下ゆでするとえぐみが取れて味が染みやすくなる。ぶりに熱湯をかけると臭みが抜ける。",
    ],
    nutritionPerServing: { kcal: 410, protein: 25, fat: 22, carb: 20 },
  },
  {
    id: "tonkatsu", name: "とんかつ", genre: "洋食",
    mealSlots: ["dinner"], tags: ["meat", "egg"], baseServings: 2,
    ingredients: [
      { name: "豚ロース肉", qty: 250, unit: "g", pricePerUnit: 1.6, category: "肉魚" },
      { name: "卵", qty: 1, unit: "個", pricePerUnit: 25, category: "肉魚" },
      { name: "パン粉", qty: 50, unit: "g", pricePerUnit: 0.5, category: "調味料" },
      { name: "キャベツ", qty: 0.25, unit: "玉", pricePerUnit: 150, category: "野菜" },
    ],
    steps: [
      "豚ロース肉に塩・こしょうをふり、小麦粉→溶き卵→パン粉の順に衣をつける。",
      "170℃の油でじっくり揚げ、最後に180℃で色よく二度揚げする。",
      "キャベツを千切りにして添え、ソースをかける。",
    ],
    tips: [
      "肉は常温に戻してから揚げると中まで均一に火が通る。二度揚げで外サクサク・中ジューシーに仕上げる。",
    ],
    nutritionPerServing: { kcal: 560, protein: 28, fat: 36, carb: 28 },
  },
  {
    id: "yasai_itame", name: "野菜炒め", genre: "中華",
    mealSlots: ["dinner"], tags: ["meat", "veggie"], baseServings: 2,
    ingredients: [
      { name: "豚こま肉", qty: 150, unit: "g", pricePerUnit: 1.2, category: "肉魚" },
      { name: "キャベツ", qty: 0.25, unit: "玉", pricePerUnit: 150, category: "野菜" },
      { name: "にんじん", qty: 0.5, unit: "本", pricePerUnit: 30, category: "野菜" },
      { name: "もやし", qty: 1, unit: "袋", pricePerUnit: 30, category: "野菜" },
    ],
    steps: [
      "豚こま肉・キャベツ・にんじん・もやしを食べやすい大きさに切る。",
      "フライパンに油を熱し、豚肉から炒め始め、野菜を加えて強火で炒める。",
      "塩・こしょう・醤油・鶏がらスープの素で味付けする。",
    ],
    tips: [
      "強火で手早く炒めるのがシャキシャキ食感のコツ。野菜から水分が出るので調味料は最後に加える。",
    ],
    nutritionPerServing: { kcal: 320, protein: 16, fat: 18, carb: 22 },
  },
  {
    id: "tonjiru_teishoku", name: "豚汁・焼き魚定食", genre: "和食",
    mealSlots: ["dinner"], tags: ["meat", "fish"], baseServings: 2,
    ingredients: [
      { name: "豚こま肉", qty: 100, unit: "g", pricePerUnit: 1.2, category: "肉魚" },
      { name: "あじ開き", qty: 2, unit: "枚", pricePerUnit: 100, category: "肉魚" },
      { name: "大根", qty: 0.3, unit: "本", pricePerUnit: 120, category: "野菜" },
      { name: "ごぼう", qty: 0.5, unit: "本", pricePerUnit: 80, category: "野菜" },
      { name: "味噌", qty: 40, unit: "g", pricePerUnit: 1, category: "調味料" },
    ],
    steps: [
      "大根・ごぼうを切り、豚こま肉と一緒に鍋で炒める。",
      "水を加えて野菜が柔らかくなるまで煮て、味噌を溶かして豚汁を作る。",
      "あじ開きをグリルで両面焼く。",
    ],
    tips: [
      "具材を炒めてから水を加えると旨みが増す。味噌は火を止めてから溶かすと香りが保たれる。",
    ],
    nutritionPerServing: { kcal: 420, protein: 26, fat: 20, carb: 24 },
  },
  {
    id: "omurice", name: "オムライス", genre: "洋食",
    mealSlots: ["dinner", "lunch"], tags: ["egg", "meat"], baseServings: 2,
    ingredients: [
      { name: "米", qty: 1.2, unit: "合", pricePerUnit: 60, category: "米・パン" },
      { name: "卵", qty: 4, unit: "個", pricePerUnit: 25, category: "肉魚" },
      { name: "鶏もも肉", qty: 100, unit: "g", pricePerUnit: 1.1, category: "肉魚" },
      { name: "玉ねぎ", qty: 1, unit: "個", pricePerUnit: 40, category: "野菜" },
      { name: "ケチャップ", qty: 50, unit: "g", pricePerUnit: 0.5, category: "調味料" },
    ],
    steps: [
      "鶏もも肉・玉ねぎを小さく切り、バターで炒める。ご飯を加えてケチャップで炒め合わせる。",
      "卵を溶いて薄焼き卵を作り、チキンライスを包む。",
      "皿に盛り、ケチャップを上からかける。",
    ],
    tips: [
      "薄焼き卵はフライパンをよく熱してから流すとムラなく焼ける。ケチャップライスは濃い目に味付けすると卵と合う。",
    ],
    nutritionPerServing: { kcal: 560, protein: 24, fat: 22, carb: 66 },
  },
  {
    id: "mapo_nasu", name: "麻婆なす", genre: "中華",
    mealSlots: ["dinner"], tags: ["meat", "veggie"], baseServings: 2,
    ingredients: [
      { name: "なす", qty: 3, unit: "本", pricePerUnit: 50, category: "野菜" },
      { name: "豚ひき肉", qty: 120, unit: "g", pricePerUnit: 1.3, category: "肉魚" },
      { name: "長ねぎ", qty: 0.5, unit: "本", pricePerUnit: 60, category: "野菜" },
      { name: "豆板醤", qty: 15, unit: "g", pricePerUnit: 1, category: "調味料" },
    ],
    steps: [
      "なすを一口大に切り、多めの油で素揚げする。",
      "フライパンで豚ひき肉・豆板醤を炒め、水・醤油・鶏がらスープを加える。",
      "なすと長ねぎを加えて煮て、水溶き片栗粉でとろみをつける。",
    ],
    tips: [
      "なすを素揚げしてから使うと味がよく染みてとろっとした食感になる。辛さは豆板醤の量で調整して。",
    ],
    nutritionPerServing: { kcal: 360, protein: 16, fat: 24, carb: 18 },
  },
  {
    id: "chicken_nanban", name: "チキン南蛮", genre: "和食",
    mealSlots: ["dinner"], tags: ["meat", "egg"], baseServings: 2,
    ingredients: [
      { name: "鶏むね肉", qty: 300, unit: "g", pricePerUnit: 0.8, category: "肉魚" },
      { name: "卵", qty: 2, unit: "個", pricePerUnit: 25, category: "肉魚" },
      { name: "酢", qty: 40, unit: "ml", pricePerUnit: 0.3, category: "調味料" },
      { name: "マヨネーズ", qty: 50, unit: "g", pricePerUnit: 0.6, category: "調味料" },
    ],
    steps: [
      "鶏むね肉を一口大に切り、塩・こしょうをふって小麦粉→溶き卵の衣をつけて揚げる。",
      "酢・醤油・砂糖を合わせた南蛮酢に揚げたてを漬ける。",
      "ゆで卵とマヨネーズでタルタルソースを作り、かけて完成。",
    ],
    tips: [
      "南蛮酢は揚げたてのうちに漬けると味がよく染みる。タルタルソースにピクルスを加えると本格的な味になる。",
    ],
    nutritionPerServing: { kcal: 540, protein: 32, fat: 32, carb: 24 },
  },
  {
    id: "sukiyaki", name: "すき焼き", genre: "和食",
    mealSlots: ["dinner"], tags: ["meat", "egg"], baseServings: 4,
    ingredients: [
      { name: "牛肉(すき焼き用)", qty: 400, unit: "g", pricePerUnit: 2.5, category: "肉魚" },
      { name: "白菜", qty: 0.25, unit: "玉", pricePerUnit: 200, category: "野菜" },
      { name: "焼き豆腐", qty: 1, unit: "丁", pricePerUnit: 90, category: "野菜" },
      { name: "長ねぎ", qty: 2, unit: "本", pricePerUnit: 60, category: "野菜" },
      { name: "卵", qty: 4, unit: "個", pricePerUnit: 25, category: "肉魚" },
      { name: "割り下", qty: 200, unit: "ml", pricePerUnit: 0.6, category: "調味料" },
    ],
    steps: [
      "鍋を熱して牛脂を溶かし、牛肉を並べて焼き色をつける。",
      "割り下を加え、白菜・長ねぎ・焼き豆腐などを加えて煮る。",
      "溶き卵につけながら食べる。",
    ],
    tips: [
      "牛肉は先に焼いて旨みを閉じ込めてから野菜を加えるのがコツ。卵はしっかり溶いて使うと肉の旨みをまろやかに包んでくれる。",
    ],
    nutritionPerServing: { kcal: 580, protein: 32, fat: 38, carb: 22 },
  },
  {
    id: "oden", name: "おでん", genre: "和食",
    mealSlots: ["dinner"], tags: ["fish", "egg"], baseServings: 4,
    ingredients: [
      { name: "おでん種セット", qty: 1, unit: "袋", pricePerUnit: 400, category: "肉魚" },
      { name: "大根", qty: 0.5, unit: "本", pricePerUnit: 120, category: "野菜" },
      { name: "卵", qty: 4, unit: "個", pricePerUnit: 25, category: "肉魚" },
      { name: "こんにゃく", qty: 1, unit: "枚", pricePerUnit: 80, category: "野菜" },
      { name: "だしの素", qty: 20, unit: "g", pricePerUnit: 1, category: "調味料" },
    ],
    steps: [
      "大根は下ゆでし、こんにゃくは下ゆでして切り込みを入れる。卵はゆでて殻をむく。",
      "鍋にだし汁・醤油・みりんを合わせて温め、全ての具を入れる。",
      "弱火で1時間以上煮込んで味をしみこませる。",
    ],
    tips: [
      "翌日の方が味がしっかり染みておいしい。具材の下処理（下ゆで）を丁寧に行うことで臭みがなくなる。",
    ],
    nutritionPerServing: { kcal: 320, protein: 20, fat: 14, carb: 24 },
  },
];
