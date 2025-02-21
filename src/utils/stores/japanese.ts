import { create } from 'zustand'
import { sentence, word } from '../types/words'

export interface japaneseStore {
  words: word[]
  sentences: sentence[]
}

export const useJapaneseStore = create<japaneseStore>((set, get) => ({
  words: [
    {
      hiragana: 'アメリカ',
      romaji: 'amerika',
      definition: 'U.S.A.',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: 'イギリス',
      romaji: 'igirisu',
      definition: 'Britain',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: 'オーストラリア',
      romaji: 'Oosutoraria',
      definition: 'Australia',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: 'かんこく',
      romaji: 'kankoku',
      definition: 'Korea',
      keywords: [''],
      kanji: '韓国'
    },
    {
      hiragana: 'スウェーデン',
      romaji: 'Sueeden',
      definition: 'Sweden',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: 'ちゅうごく',
      romaji: 'Chuugoku',
      definition: 'China',
      keywords: [''],
      kanji: '中国'
    },
    {
      hiragana: 'かがく',
      romaji: 'kagaku',
      definition: 'science',
      keywords: [''],
      kanji: '科学'
    },
    {
      hiragana: 'アジアけんきゅう',
      romaji: 'ajiakenkyuu',
      definition: 'Asian studies',
      keywords: [''],
      kanji: 'アジア研究'
    },
    {
      hiragana: 'こくさいかんけい',
      romaji: 'kokusaikankei',
      definition: 'international relations',
      keywords: [''],
      kanji: '国際関係'
    },
    {
      hiragana: 'コンピューター',
      romaji: 'konpyuutaa',
      definition: 'computer',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: 'じんるいがく',
      romaji: 'jinruigaku',
      definition: 'anthropology',
      keywords: [''],
      kanji: '人類学'
    },
    {
      hiragana: 'せいじ',
      romaji: 'seeji',
      definition: 'politics',
      keywords: [''],
      kanji: '政治'
    },
    {
      hiragana: 'ビジネス',
      romaji: 'bijinesu',
      definition: 'business',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: 'ぶんがく',
      romaji: 'bungaku',
      definition: 'literature',
      keywords: [''],
      kanji: '文学'
    },
    {
      hiragana: 'れきし',
      romaji: 'rekishi',
      definition: 'history',
      keywords: [''],
      kanji: '歴史'
    },
    {
      hiragana: 'しごと',
      romaji: 'shigoto',
      definition: 'job; work; occupation',
      keywords: [''],
      kanji: '仕事'
    },
    {
      hiragana: 'いしゃ',
      romaji: 'isha',
      definition: 'doctor',
      keywords: [''],
      kanji: '医者'
    },
    {
      hiragana: 'かいしゃいん',
      romaji: 'kaishain',
      definition: 'office worker',
      keywords: [''],
      kanji: '会社員'
    },
    {
      hiragana: 'こうこうせい',
      romaji: 'kookoosei',
      definition: 'high school student',
      keywords: [''],
      kanji: '高校生'
    },
    {
      hiragana: 'しゅふ',
      romaji: 'shufu',
      definition: 'housewife',
      keywords: [''],
      kanji: '主婦'
    },
    {
      hiragana: 'だいがくいんせい',
      romaji: 'daigakuinsee',
      definition: 'graduate student',
      keywords: [''],
      kanji: '大学院生'
    },
    {
      hiragana: 'だいがくせい',
      romaji: 'daigakusee',
      definition: 'college student',
      keywords: [''],
      kanji: '大学生'
    },
    {
      hiragana: 'べんごし',
      romaji: 'bengoshi',
      definition: 'lawyer',
      keywords: [''],
      kanji: '弁護士'
    },
    {
      hiragana: 'おかあさん',
      romaji: 'okaasan',
      definition: 'mother',
      keywords: [''],
      kanji: 'お母さん'
    },
    {
      hiragana: 'おとうさん',
      romaji: 'otoosan',
      definition: 'father',
      keywords: [''],
      kanji: 'お父さん'
    },
    {
      hiragana: 'おねえさん',
      romaji: 'oneesan',
      definition: 'older sister',
      keywords: [''],
      kanji: 'お姉さん'
    },
    {
      hiragana: 'おにいさん',
      romaji: 'oniisan',
      definition: 'older brother',
      keywords: [''],
      kanji: 'お兄さん'
    },
    {
      hiragana: 'いもうと',
      romaji: 'imooto',
      definition: 'younger sister',
      keywords: [''],
      kanji: '妹'
    },
    {
      hiragana: 'おとうと',
      romaji: 'otooto',
      definition: 'younger brother',
      keywords: [''],
      kanji: '弟'
    },
    {
      hiragana: 'あの',
      romaji: 'ano',
      definition: 'um...',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: 'いま',
      romaji: 'ima',
      definition: 'now',
      keywords: [''],
      kanji: '今'
    },
    {
      hiragana: 'えいご',
      romaji: 'eego',
      definition: 'English (language)',
      keywords: [''],
      kanji: '英語'
    },
    {
      hiragana: 'がくせい',
      romaji: 'gakusee',
      definition: 'student',
      keywords: [''],
      kanji: '学生'
    },
    {
      hiragana: '〜ご',
      romaji: '～go',
      definition: '...language',
      keywords: [''],
      kanji: '〜語'
    },
    {
      hiragana: 'こうこう',
      romaji: 'kookoo',
      definition: 'high school',
      keywords: [''],
      kanji: '高校'
    },
    {
      hiragana: 'ごご',
      romaji: 'gogo',
      definition: 'P.M.',
      keywords: [''],
      kanji: '午後'
    },
    {
      hiragana: 'ごぜん',
      romaji: 'gozen',
      definition: 'A.M.',
      keywords: [''],
      kanji: '午前'
    },
    {
      hiragana: '〜さい',
      romaji: '～sai',
      definition: '...years old',
      keywords: [''],
      kanji: '〜歳'
    },
    {
      hiragana: '〜さん',
      romaji: '～san',
      definition: 'Mr./Ms.',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: '〜じ',
      romaji: '～ji',
      definition: "o'clock",
      keywords: [''],
      kanji: '〜時'
    },
    {
      hiragana: '〜じん',
      romaji: '～jin',
      definition: '...people',
      keywords: [''],
      kanji: '〜人'
    },
    {
      hiragana: 'せんせい',
      romaji: 'sensei',
      definition: 'teacher; professor',
      keywords: [''],
      kanji: '先生'
    },
    {
      hiragana: 'せんもん',
      romaji: 'senmon',
      definition: 'major',
      keywords: [''],
      kanji: '専門'
    },
    {
      hiragana: 'そうです',
      romaji: 'soo desu',
      definition: "That's right.",
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: 'だいがく',
      romaji: 'daigaku',
      definition: 'college; university',
      keywords: [''],
      kanji: '大学'
    },
    {
      hiragana: 'でんわ',
      romaji: 'denwa',
      definition: 'telephone',
      keywords: [''],
      kanji: '電話'
    },
    {
      hiragana: 'ともだち',
      romaji: 'tomodachi',
      definition: 'friend',
      keywords: [''],
      kanji: '友達'
    },
    {
      hiragana: 'なまえ',
      romaji: 'namae',
      definition: 'name',
      keywords: [''],
      kanji: '名前'
    },
    {
      hiragana: 'なん／なに',
      romaji: 'nan/nani',
      definition: 'what',
      keywords: [''],
      kanji: '何'
    },
    {
      hiragana: 'にほん',
      romaji: 'nihon',
      definition: 'Japan',
      keywords: [''],
      kanji: '日本'
    },
    {
      hiragana: '〜ねんせい',
      romaji: '～nensee',
      definition: '...year student',
      keywords: [''],
      kanji: '〜年生'
    },
    {
      hiragana: 'はい',
      romaji: 'hai',
      definition: 'yes',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: 'はん',
      romaji: 'han',
      definition: 'half',
      keywords: [''],
      kanji: '半'
    },
    {
      hiragana: 'ばんごう',
      romaji: 'bangoo',
      definition: 'number',
      keywords: [''],
      kanji: '番号'
    },
    {
      hiragana: 'りゅうがくせい',
      romaji: 'ryuugakusee',
      definition: 'international student',
      keywords: [''],
      kanji: '留学生'
    },
    {
      hiragana: 'わたし',
      romaji: 'watashi',
      definition: 'I',
      keywords: [''],
      kanji: '私'
    },
    {
      hiragana: 'いくら',
      romaji: 'ikura',
      definition: 'how much',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: '〜えん',
      romaji: '～en',
      definition: '...yen',
      keywords: [''],
      kanji: '〜円'
    },
    {
      hiragana: 'たかい',
      romaji: 'takai',
      definition: 'expensive',
      keywords: [''],
      kanji: '高い'
    },
    {
      hiragana: 'いらっしゃいませ',
      romaji: 'irasshaimase',
      definition: 'Welcome (to our store)',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: '（〜を）おねがいします',
      romaji: '(...o) onegaishimasu',
      definition: '..., please.',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: '（〜を）ください',
      romaji: '(...o) kudasai',
      definition: 'Please give me...',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: 'じゃあ',
      romaji: 'jaa',
      definition: 'then...; if that is the case,...',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: '（〜を）どうぞ',
      romaji: '(...o) doozo',
      definition: 'Here it is.',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: 'どうも',
      romaji: 'doomo',
      definition: 'Thank you.',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: 'これ',
      romaji: 'kore',
      definition: 'this one',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: 'それ',
      romaji: 'sore',
      definition: 'that one',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: 'あれ',
      romaji: 'are',
      definition: 'that one (over there)',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: 'どれ',
      romaji: 'dore',
      definition: 'which one',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: 'この',
      romaji: 'kono',
      definition: 'this ...',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: 'その',
      romaji: 'sono',
      definition: 'that ...',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: 'あの',
      romaji: 'ano',
      definition: 'that ... (over there)',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: 'どの',
      romaji: 'dono',
      definition: 'which ...',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: 'あそこ',
      romaji: 'asoko',
      definition: 'over there',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: 'どこ',
      romaji: 'doko',
      definition: 'where',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: 'だれ',
      romaji: 'dare',
      definition: 'who',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: 'おいしい',
      romaji: 'oishii',
      definition: 'delicious',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: 'さかな',
      romaji: 'sakana',
      definition: 'fish',
      keywords: [''],
      kanji: '魚'
    },
    {
      hiragana: 'とんかつ',
      romaji: 'tonkatsu',
      definition: 'pork cutlet',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: 'にく',
      romaji: 'niku',
      definition: 'meat',
      keywords: [''],
      kanji: '肉'
    },
    {
      hiragana: 'メニュー',
      romaji: 'menyuu',
      definition: 'menu',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: 'やさい',
      romaji: 'yasai',
      definition: 'vegetable',
      keywords: [''],
      kanji: '野菜'
    },
    {
      hiragana: 'えんぴつ',
      romaji: 'enpitsu',
      definition: 'pencil',
      keywords: [''],
      kanji: '鉛筆'
    },
    {
      hiragana: 'かさ',
      romaji: 'kasa',
      definition: 'umbrella',
      keywords: [''],
      kanji: '傘'
    },
    {
      hiragana: 'かばん',
      romaji: 'kaban',
      definition: 'bag',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: 'くつ',
      romaji: 'kutsu',
      definition: 'shoes',
      keywords: [''],
      kanji: '靴'
    },
    {
      hiragana: 'さいふ',
      romaji: 'saifu',
      definition: 'wallet',
      keywords: [''],
      kanji: '財布'
    },
    {
      hiragana: 'ジーンズ',
      romaji: 'jiinzu',
      definition: 'jeans',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: 'じしょ',
      romaji: 'jisho',
      definition: 'dictionary',
      keywords: [''],
      kanji: '辞書'
    },
    {
      hiragana: 'じてんしゃ',
      romaji: 'jitensha',
      definition: 'bicycle',
      keywords: [''],
      kanji: '自転車'
    },
    {
      hiragana: 'しんぶん',
      romaji: 'shinbun',
      definition: 'newspaper',
      keywords: [''],
      kanji: '新聞'
    },
    {
      hiragana: 'テープ',
      romaji: 'teepu',
      definition: 'tape',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: 'とけい',
      romaji: 'tokee',
      definition: 'watch; clock',
      keywords: [''],
      kanji: '時計'
    },
    {
      hiragana: 'トレーナー',
      romaji: 'toreenaa',
      definition: 'sweatshirt',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: 'ノート',
      romaji: 'nooto',
      definition: 'notebook',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: 'ペン',
      romaji: 'pen',
      definition: 'pen',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: 'ぼうし',
      romaji: 'booshi',
      definition: 'hat; cap',
      keywords: [''],
      kanji: '帽子'
    },
    {
      hiragana: 'ほん',
      romaji: 'hon',
      definition: 'book',
      keywords: [''],
      kanji: '本'
    },
    {
      hiragana: 'おてあらい',
      romaji: 'otearai',
      definition: 'restroom',
      keywords: [''],
      kanji: 'お手洗い'
    },
    {
      hiragana: 'きっさてん',
      romaji: 'kissaten',
      definition: 'cafe',
      keywords: [''],
      kanji: '喫茶店'
    },
    {
      hiragana: 'ぎんこう',
      romaji: 'ginkoo',
      definition: 'bank',
      keywords: [''],
      kanji: '銀行'
    },
    {
      hiragana: 'としょかん',
      romaji: 'toshokan',
      definition: 'library',
      keywords: [''],
      kanji: '図書館'
    },
    {
      hiragana: 'ゆうびんきょく',
      romaji: 'yuubinkyoku',
      definition: 'post office',
      keywords: [''],
      kanji: '郵便局'
    },
    {
      hiragana: 'けいざい',
      romaji: 'keezai',
      definition: 'economics',
      keywords: [''],
      kanji: '経済'
    },
    {
      hiragana: 'わたし',
      romaji: 'watachi',
      definition: 'ich',
      keywords: [''],
      kanji: '私'
    },
    {
      hiragana: 'おんがく',
      romaji: 'ongaku',
      definition: 'music',
      keywords: ['sound', 'melody', 'Chapter3'],
      kanji: '音楽'
    },
    {
      hiragana: 'ざっし',
      romaji: 'zasshi',
      definition: 'magazine',
      keywords: ['publication', 'journal', 'Chapter3'],
      kanji: '雑誌'
    },
    {
      hiragana: 'スポーツ',
      romaji: 'supōtsu',
      definition: 'sports',
      keywords: ['athletics', 'exercise', 'Chapter3'],
      kanji: ''
    },
    {
      hiragana: 'デート',
      romaji: 'dēto',
      definition: 'date (romantic, not calendar)',
      keywords: ['romantic outing', 'dating', 'Chapter3'],
      kanji: ''
    },
    {
      hiragana: 'テニス',
      romaji: 'tenisu',
      definition: 'tennis',
      keywords: ['sport', 'game', 'Chapter3'],
      kanji: ''
    },
    {
      hiragana: 'テレビ',
      romaji: 'terebi',
      definition: 'TV',
      keywords: ['television', 'broadcast', 'Chapter3'],
      kanji: ''
    },
    {
      hiragana: 'ビデオ',
      romaji: 'bideo',
      definition: 'video tape; VCR',
      keywords: ['recording', 'media', 'Chapter3'],
      kanji: ''
    },
    {
      hiragana: 'あさごはん',
      romaji: 'asagohan',
      definition: 'breakfast',
      keywords: ['morning meal', 'food', 'Chapter3'],
      kanji: '朝御飯'
    },
    {
      hiragana: 'おさけ',
      romaji: 'osake',
      definition: 'sake; alcohol',
      keywords: ['beverage', 'Japanese rice wine', 'Chapter3'],
      kanji: 'お酒'
    },
    {
      hiragana: 'おちゃ',
      romaji: 'ocha',
      definition: 'green tea',
      keywords: ['Japanese tea', 'drink', 'Chapter3'],
      kanji: 'お茶'
    },
    {
      hiragana: 'コーヒー',
      romaji: 'kōhī',
      definition: 'coffee',
      keywords: ['beverage', 'caffeine', 'Chapter3'],
      kanji: ''
    },
    {
      hiragana: 'ばんごはん',
      romaji: 'bangohan',
      definition: 'dinner',
      keywords: ['evening meal', 'food', 'Chapter3'],
      kanji: '晩御飯'
    },
    {
      hiragana: 'ハンバーガー',
      romaji: 'hanbāgā',
      definition: 'hamburger',
      keywords: ['fast food', 'burger', 'Chapter3'],
      kanji: ''
    },
    {
      hiragana: 'ひるごはん',
      romaji: 'hirugohan',
      definition: 'lunch',
      keywords: ['midday meal', 'food', 'Chapter3'],
      kanji: '昼御飯'
    },
    {
      hiragana: 'みず',
      romaji: 'mizu',
      definition: 'water',
      keywords: ['drink', 'liquid', 'Chapter3'],
      kanji: '水'
    },
    {
      hiragana: 'いえ',
      romaji: 'ie',
      definition: 'home; house',
      keywords: ['building', 'residence', 'Chapter3'],
      kanji: '家'
    },
    {
      hiragana: 'うち',
      romaji: 'uchi',
      definition: 'home; house; my place',
      keywords: ['residence', 'inside', 'Chapter3'],
      kanji: '家'
    },
    {
      hiragana: 'LL（エルエル）',
      romaji: 'erueru',
      definition: 'language lab',
      keywords: ['study', 'school', 'Chapter3'],
      kanji: ''
    },
    {
      hiragana: 'がっこう',
      romaji: 'gakkō',
      definition: 'school',
      keywords: ['education', 'learning', 'Chapter3'],
      kanji: '学校'
    },
    {
      hiragana: 'あさ',
      romaji: 'asa',
      definition: 'morning',
      keywords: ['early day', 'time', 'Chapter3'],
      kanji: '朝'
    },
    {
      hiragana: 'あした',
      romaji: 'ashita',
      definition: 'tomorrow',
      keywords: ['future', 'next day', 'Chapter3'],
      kanji: ''
    },
    {
      hiragana: 'いつ',
      romaji: 'itsu',
      definition: 'when',
      keywords: ['question word', 'time', 'Chapter3'],
      kanji: ''
    },
    {
      hiragana: 'きょう',
      romaji: 'kyō',
      definition: 'today',
      keywords: ['present day', 'date', 'Chapter3'],
      kanji: '今日'
    },
    {
      hiragana: '〜ごろ',
      romaji: '~goro',
      definition: 'at about',
      keywords: ['approximate time', 'Chapter3'],
      kanji: ''
    },
    {
      hiragana: 'こんばん',
      romaji: 'konban',
      definition: 'tonight',
      keywords: ['evening', 'this night', 'Chapter3'],
      kanji: '今晩'
    },
    {
      hiragana: 'しゅうまつ',
      romaji: 'shūmatsu',
      definition: 'weekend',
      keywords: ['Saturday and Sunday', 'free time', 'Chapter3'],
      kanji: '週末'
    },
    {
      hiragana: 'どようび',
      romaji: 'doyōbi',
      definition: 'Saturday',
      keywords: ['weekend', 'day of the week', 'Chapter3'],
      kanji: '土曜日'
    },
    {
      hiragana: 'にちようび',
      romaji: 'nichiyōbi',
      definition: 'Sunday',
      keywords: ['weekend', 'holiday', 'Chapter3'],
      kanji: '日曜日'
    },
    {
      hiragana: 'まいにち',
      romaji: 'mainichi',
      definition: 'every day',
      keywords: ['daily', 'routine', 'Chapter3'],
      kanji: '毎日'
    },
    {
      hiragana: 'まいばん',
      romaji: 'maiban',
      definition: 'every night',
      keywords: ['nightly', 'routine', 'Chapter3'],
      kanji: '毎晩'
    },
    {
      hiragana: 'いく',
      romaji: 'iku',
      definition: 'to go',
      keywords: ['movement', 'travel', 'Chapter3'],
      kanji: '行く'
    },
    {
      hiragana: 'かえる',
      romaji: 'kaeru',
      definition: 'to go back; to return',
      keywords: ['homecoming', 'returning', 'Chapter3'],
      kanji: '帰る'
    },
    {
      hiragana: 'きく',
      romaji: 'kiku',
      definition: 'to listen; to hear',
      keywords: ['sound', 'music', 'Chapter3'],
      kanji: '聞く'
    },
    {
      hiragana: 'のむ',
      romaji: 'nomu',
      definition: 'to drink',
      keywords: ['beverage', 'consume', 'Chapter3'],
      kanji: '飲む'
    },
    {
      hiragana: 'は',
      romaji: 'ha',
      definition: '(Thema des Satzes)',
      keywords: [''],
      kanji: 'は'
    },
    {
      hiragana: 'を',
      romaji: 'wo',
      definition: '(Objekt eines Verbs)',
      keywords: [''],
      kanji: 'を'
    },
    {
      hiragana: 'へ',
      romaji: 'o',
      definition: '(Richtung/Ziel)',
      keywords: [''],
      kanji: 'へ'
    },
    {
      hiragana: 'に',
      romaji: 'ni',
      definition: '(Ziel, Zeit, Existenz)',
      keywords: [''],
      kanji: 'に'
    },
    {
      hiragana: 'で',
      romaji: 'de',
      definition: '(Ort/Mittel einer Handlung)',
      keywords: [''],
      kanji: 'で'
    },
    {
      hiragana: 'えいが',
      romaji: 'eiga',
      definition: 'movie',
      keywords: [''],
      kanji: '映画'
    },
    {
      hiragana: 'おんがく',
      romaji: 'ongaku',
      definition: 'music',
      keywords: [''],
      kanji: '音楽'
    },
    {
      hiragana: 'ざっし',
      romaji: 'zasshi',
      definition: 'magazine',
      keywords: [''],
      kanji: '雑誌'
    },
    {
      hiragana: 'スポーツ',
      romaji: 'supootsu',
      definition: 'sports',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: 'デート',
      romaji: 'deeto',
      definition: 'date (romantic, not calendar)',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: 'テニス',
      romaji: 'tenisu',
      definition: 'tennis',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: 'テレビ',
      romaji: 'terebi',
      definition: 'TV',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: 'ビデオ',
      romaji: 'bideo',
      definition: 'video tape; VCR',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: 'あさごはん',
      romaji: 'asagohan',
      definition: 'breakfast',
      keywords: [''],
      kanji: '朝御飯'
    },
    {
      hiragana: 'おさけ',
      romaji: 'osake',
      definition: 'sake; alcohol',
      keywords: [''],
      kanji: 'お酒'
    },
    {
      hiragana: 'おちゃ',
      romaji: 'ocha',
      definition: 'green tea',
      keywords: [''],
      kanji: 'お茶'
    },
    {
      hiragana: 'コーヒー',
      romaji: 'koohii',
      definition: 'coffee',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: 'ばんごはん',
      romaji: 'bangohan',
      definition: 'dinner',
      keywords: [''],
      kanji: '晩御飯'
    },
    {
      hiragana: 'ハンバーガー',
      romaji: 'hanbaagaa',
      definition: 'hamburger',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: 'ひるごはん',
      romaji: 'hirugohan',
      definition: 'lunch',
      keywords: [''],
      kanji: '昼御飯'
    },
    {
      hiragana: 'みず',
      romaji: 'mizu',
      definition: 'water',
      keywords: [''],
      kanji: '水'
    },
    {
      hiragana: 'いえ',
      romaji: 'ie',
      definition: 'home; house',
      keywords: [''],
      kanji: '家'
    },
    {
      hiragana: 'うち',
      romaji: 'uchi',
      definition: 'home; house; my place',
      keywords: [''],
      kanji: '家'
    },
    {
      hiragana: 'LL（エルエル）',
      romaji: 'eru eru',
      definition: 'language lab',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: 'がっこう',
      romaji: 'gakkou',
      definition: 'school',
      keywords: [''],
      kanji: '学校'
    },
    {
      hiragana: 'あさ',
      romaji: 'asa',
      definition: 'morning',
      keywords: [''],
      kanji: '朝'
    },
    {
      hiragana: 'あした',
      romaji: 'ashita',
      definition: 'tomorrow',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: 'いつ',
      romaji: 'itsu',
      definition: 'when',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: 'きょう',
      romaji: 'kyou',
      definition: 'today',
      keywords: [''],
      kanji: '今日'
    },
    {
      hiragana: '〜ごろ',
      romaji: 'goro',
      definition: 'at about',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: 'こんばん',
      romaji: 'konban',
      definition: 'tonight',
      keywords: [''],
      kanji: '今晩'
    },
    {
      hiragana: 'しゅうまつ',
      romaji: 'shuumatsu',
      definition: 'weekend',
      keywords: [''],
      kanji: '週末'
    },
    {
      hiragana: 'どようび',
      romaji: 'doyoubi',
      definition: 'Saturday',
      keywords: [''],
      kanji: '土曜日'
    },
    {
      hiragana: 'にちようび',
      romaji: 'nichiyoubi',
      definition: 'Sunday',
      keywords: [''],
      kanji: '日曜日'
    },
    {
      hiragana: 'まいにち',
      romaji: 'mainichi',
      definition: 'every day',
      keywords: [''],
      kanji: '毎日'
    },
    {
      hiragana: 'まいばん',
      romaji: 'maiban',
      definition: 'every night',
      keywords: [''],
      kanji: '毎晩'
    },
    {
      hiragana: 'いく',
      romaji: 'iku',
      definition: 'to go',
      keywords: [''],
      kanji: '行く'
    },
    {
      hiragana: 'かえる',
      romaji: 'kaeru',
      definition: 'to go back; to return',
      keywords: [''],
      kanji: '帰る'
    },
    {
      hiragana: 'きく',
      romaji: 'kiku',
      definition: 'to listen; to hear',
      keywords: [''],
      kanji: '聞く'
    },
    {
      hiragana: 'のむ',
      romaji: 'nomu',
      definition: 'to drink',
      keywords: [''],
      kanji: '飲む'
    },
    {
      hiragana: 'はなす',
      romaji: 'hanasu',
      definition: 'to speak; to talk',
      keywords: [''],
      kanji: '話す'
    },
    {
      hiragana: 'よむ',
      romaji: 'yomu',
      definition: 'to read',
      keywords: [''],
      kanji: '読む'
    },
    {
      hiragana: 'おきる',
      romaji: 'okiru',
      definition: 'to get up',
      keywords: [''],
      kanji: '起きる'
    },
    {
      hiragana: 'たべる',
      romaji: 'taberu',
      definition: 'to eat',
      keywords: [''],
      kanji: '食べる'
    },
    {
      hiragana: 'ねる',
      romaji: 'neru',
      definition: 'to sleep; to go to sleep',
      keywords: [''],
      kanji: '寝る'
    },
    {
      hiragana: 'みる',
      romaji: 'miru',
      definition: 'to see; to look at; to watch',
      keywords: [''],
      kanji: '見る'
    },
    {
      hiragana: 'くる',
      romaji: 'kuru',
      definition: 'to come',
      keywords: [''],
      kanji: '来る'
    },
    {
      hiragana: 'する',
      romaji: 'suru',
      definition: 'to do',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: 'べんきょうする',
      romaji: 'benkyou suru',
      definition: 'to study',
      keywords: [''],
      kanji: '勉強する'
    },
    {
      hiragana: 'いい',
      romaji: 'ii',
      definition: 'good',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: 'はやい',
      romaji: 'hayai',
      definition: 'early',
      keywords: [''],
      kanji: '早い'
    },
    {
      hiragana: 'あまり+ negative',
      romaji: 'amari',
      definition: 'not much',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: 'ぜんぜん + negative',
      romaji: 'zenzen',
      definition: 'not at all',
      keywords: [''],
      kanji: '全然'
    },
    {
      hiragana: 'たいてい',
      romaji: 'taiitei',
      definition: 'usually',
      keywords: [''],
      kanji: '大抵'
    },
    {
      hiragana: 'ちょっと',
      romaji: 'chotto',
      definition: 'a little',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: 'ときどき',
      romaji: 'tokidoki',
      definition: 'sometimes',
      keywords: [''],
      kanji: '時々'
    },
    {
      hiragana: 'よく',
      romaji: 'yoku',
      definition: 'often; much',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: 'そうですね',
      romaji: 'sou desu ne',
      definition: "That's right.; Let me see.",
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: 'でも',
      romaji: 'demo',
      definition: 'but',
      keywords: [''],
      kanji: ''
    },
    {
      hiragana: 'どうですか',
      romaji: 'dou desu ka',
      definition: 'How about...?; How is...?',
      keywords: [''],
      kanji: ''
    }
  ],
  sentences: [
    {
      japanese: '私 は よく テレビ を 見 ます 。',
      hiragana: 'わたし は よく テレビ を み ます 。',
      romaji: 'Watashi wa yoku terebi o mimasu.',
      translation: 'Ich schaue oft fern.',
      keywords: ['sentence', 'chapter3', 'habitual actions'],
      answer: null,
      context: null
    },
    {
      japanese: 'メアリー さん は 時々 朝ご飯 を 食べ ませ ん 。',
      hiragana: 'メアリー さん は ときどき あさごはん を たべ ませ ん 。',
      romaji: 'Mary-san wa tokidoki asagohan o tabemasen.',
      translation: 'Mary isst manchmal kein Frühstück.',
      keywords: ['sentence', 'chapter3', 'habitual actions'],
      answer: null,
      context: null
    },
    {
      japanese: '私 は 明日 京都 に 行き ます 。',
      hiragana: 'わたし は あした きょうと に いき ます 。',
      romaji: 'Watashi wa ashita Kyōto ni ikimasu.',
      translation: 'Ich werde morgen nach Kyoto gehen.',
      keywords: ['sentence', 'chapter3', 'future action'],
      answer: null,
      context: null
    },
    {
      japanese: 'そら さん は 今日 家 に 帰り ませ ん 。',
      hiragana: 'そら さん は きょう いえ に かえり ませ ん 。',
      romaji: 'Sora-san wa kyō ie ni kaerimasen.',
      translation: 'Sora wird heute nicht nach Hause zurückkehren.',
      keywords: ['sentence', 'chapter3', 'future action'],
      answer: null,
      context: null
    },
    {
      japanese: '私 は コーヒー を 飲み ます 。',
      hiragana: 'わたし は コーヒー を のみ ます 。',
      romaji: 'Watashi wa kōhī o nomimasu.',
      translation: 'Ich trinke Kaffee.',
      keywords: ['sentence', 'chapter3', 'habitual actions'],
      answer: null,
      context: null
    },
    {
      japanese: '私 は 音楽 を 聴き ます 。',
      hiragana: 'わたし は おんがく を きき ます 。',
      romaji: 'Watashi wa ongaku o kikimasu.',
      translation: 'Ich höre Musik.',
      keywords: ['sentence', 'chapter3', 'habitual actions'],
      answer: null,
      context: null
    },
    {
      japanese: '私 は テレビ を 見 ます 。',
      hiragana: 'わたし は テレビ を み ます 。',
      romaji: 'Watashi wa terebi o mimasu.',
      translation: 'Ich schaue fern.',
      keywords: ['sentence', 'chapter3', 'habitual actions'],
      answer: null,
      context: null
    },
    {
      japanese: '私 は 図書館 で 本 を 読み ます 。',
      hiragana: 'わたし は としょかん で ほん を よみ ます 。',
      romaji: 'Watashi wa toshokan de hon o yomimasu.',
      translation: 'Ich werde in der Bibliothek Bücher lesen.',
      keywords: ['sentence', 'chapter3', 'future action'],
      answer: null,
      context: null
    },
    {
      japanese: '私 は 家 で 昼ご飯 を 食べ ます 。',
      hiragana: 'わたし は いえ で ひるごはん を たべ ます 。',
      romaji: 'Watashi wa ie de hirugohan o tabemasu.',
      translation: 'Ich werde zu Hause zu Mittag essen.',
      keywords: ['sentence', 'chapter3', 'future action'],
      answer: null,
      context: null
    },
    {
      japanese: '私 は 今日 学校 に 行き ませ ん 。',
      hiragana: 'わたし は きょう がっこう に いき ませ ん 。',
      romaji: 'Watashi wa kyō gakkō ni ikimasen.',
      translation: 'Ich werde heute nicht zur Schule gehen.',
      keywords: ['sentence', 'chapter3', 'future action'],
      answer: null,
      context: null
    },
    {
      japanese: '私 は 家 に 帰り ます 。',
      hiragana: 'わたし は いえ に かえり ます 。',
      romaji: 'Watashi wa ie ni kaerimasu.',
      translation: 'Ich werde nach Hause zurückkehren.',
      keywords: ['sentence', 'chapter3', 'future action'],
      answer: null,
      context: null
    },
    {
      japanese: '私 は 日曜日 に 京都 に 行き ます 。',
      hiragana: 'わたし は にちようび に きょうと に いき ます 。',
      romaji: 'Watashi wa nichiyōbi ni Kyōto ni ikimasu.',
      translation: 'Ich werde am Sonntag nach Kyoto gehen.',
      keywords: ['sentence', 'chapter3', 'future action'],
      answer: null,
      context: null
    },
    {
      japanese: '私 は 11時 に 寝 ます 。',
      hiragana: 'わたし は じゅういちじ に ね ます 。',
      romaji: 'Watashi wa jūichiji ni nemasu.',
      translation: 'Ich werde um 11 Uhr ins Bett gehen.',
      keywords: ['sentence', 'chapter3', 'future action'],
      answer: null,
      context: null
    },
    {
      japanese: '私 は 11時 ごろ に 寝 ます 。',
      hiragana: 'わたし は じゅういちじ ごろ に ね ます 。',
      romaji: 'Watashi wa jūichiji goro ni nemasu.',
      translation: 'Ich werde gegen 11 Uhr ins Bett gehen.',
      keywords: ['sentence', 'chapter3', 'future action'],
      answer: null,
      context: null
    },
    {
      japanese: '私 は 日曜日 に 行き ます 。',
      hiragana: 'わたし は にちようび に いき ます 。',
      romaji: 'Watashi wa nichiyōbi ni ikimasu.',
      translation: 'Ich werde am Sonntag gehen.',
      keywords: ['sentence', 'chapter3', 'future action'],
      answer: null,
      context: null
    },
    {
      japanese: '私 は 10時45分 に 起き ます 。',
      hiragana: 'わたし は じゅうじよんじゅうごふん に おき ます 。',
      romaji: 'Watashi wa jūji yonjūgo fun ni okimasu.',
      translation: 'Ich stehe um 10:45 Uhr auf.',
      keywords: ['sentence', 'chapter3', 'habitual actions'],
      answer: null,
      context: null
    },
    {
      japanese: '私 は 9月 に 帰り ます 。',
      hiragana: 'わたし は くがつ に かえり ます 。',
      romaji: 'Watashi wa kugatsu ni kaerimasu.',
      translation: 'Ich werde im September zurückkehren.',
      keywords: ['sentence', 'chapter3', 'future action'],
      answer: null,
      context: null
    },
    {
      japanese: '私 は 明日 来 ます 。',
      hiragana: 'わたし は あした き ます 。',
      romaji: 'Watashi wa ashita kimasu.',
      translation: 'Ich werde morgen kommen.',
      keywords: ['sentence', 'chapter3', 'future action'],
      answer: null,
      context: null
    },
    {
      japanese: '私 は jeden Abend テレビ を 見 ます 。',
      hiragana: 'わたし は まいばん テレビ を み ます 。',
      romaji: 'Watashi wa maiban terebi o mimasu.',
      translation: 'Ich schaue jeden Abend fern.',
      keywords: ['sentence', 'chapter3', 'habitual actions'],
      answer: null,
      context: null
    },
    {
      japanese: '私 は いつ 行き ます か ？',
      hiragana: 'わたし は いつ いき ます か ？',
      romaji: 'Watashi wa itsu ikimasu ka?',
      translation: 'Wann werde ich gehen?',
      keywords: ['sentence', 'chapter3', 'question'],
      answer: null,
      context: null
    },
    {
      japanese: '私 は Morgen ein Buch lese 。',
      hiragana: 'わたし は あした ほん を よみ ます 。',
      romaji: 'Watashi wa ashita hon o yomimasu.',
      translation: 'Ich werde morgen ein Buch lesen.',
      keywords: ['sentence', 'chapter3', 'future action'],
      answer: null,
      context: null
    },
    {
      japanese: '私 は Wochenende Was werde ich machen ？',
      hiragana: 'わたし は しゅうまつ なに を し ます か ？',
      romaji: 'Watashi wa shūmatsu nani o shimasu ka?',
      translation: 'Was werde ich am Wochenende machen?',
      keywords: ['sentence', 'chapter3', 'question'],
      answer: null,
      context: null
    },
    {
      japanese: '私 は 時々 図書館 に 行き ます 。',
      hiragana: 'わたし は ときどき としょかん に いき ます 。',
      romaji: 'Watashi wa tokidoki toshokan ni ikimasu.',
      translation: 'Ich gehe manchmal in eine Bibliothek.',
      keywords: ['sentence', 'chapter3', 'habitual actions'],
      answer: null,
      context: null
    },
    {
      japanese: '私 は 全然 テレビ を 見 ませ ん 。',
      hiragana: 'わたし は ぜんぜん テレビ を み ませ ん 。',
      romaji: 'Watashi wa zenzen terebi o mimasen.',
      translation: 'Ich schaue überhaupt kein Fernsehen.',
      keywords: ['sentence', 'chapter3', 'habitual actions'],
      answer: null,
      context: null
    },
    {
      japanese: '私 は あまり テレビ を 見 ませ ん 。',
      hiragana: 'わたし は あまり テレビ を み ませ ん 。',
      romaji: 'Watashi wa amari terebi o mimasen.',
      translation: 'Ich schaue nicht viel Fernsehen.',
      keywords: ['sentence', 'chapter3', 'habitual actions'],
      answer: null,
      context: null
    },
    {
      japanese: '行きます',
      hiragana: ' いきます',
      romaji: 'iki masu',
      translation: 'Ich komme',
      keywords: ['chapter3'],
      answer: null,
      context: '(zu jemanden Hingehen der spriecht)'
    },
    {
      japanese: '行きます',
      hiragana: ' いきます',
      romaji: 'iki masu',
      translation: 'Ich gehe',
      keywords: ['chapter3'],
      answer: null,
      context: '(zu jemanden weggehen der spriecht)'
    },
    {
      japanese: '土曜日 に 映画 を 見 ませ ん か 。',
      hiragana: 'どようび に えいが を み ませ ん か 。',
      romaji: 'Doyōbi ni eiga o mimasen ka.',
      translation: 'Do you want to see a movie on Saturday?',
      keywords: ['sentence', 'invitation', 'chapter3'],
      answer: {
        japanese: '土曜日 は 、 ちょっと 。',
        hiragana: 'どようび は 、 ちょっと 。',
        romaji: 'Doyōbi wa, chotto.',
        translation: 'Saturday is a bit inconvenient.',
        keywords: ['sentence', 'decline', 'chapter3'],
        answer: null,
        context: null
      },
      context: null
    },
    {
      japanese: '5時 に マクドナルド で ハンバーガー を 食べます 。',
      hiragana: 'ごじ に マクドナルド で ハンバーガー を たべます 。',
      romaji: 'Go-ji ni Makudonarudo de hanbāgā o tabemasu.',
      translation: "Um 5 Uhr esse ich einen Hamburger bei McDonald's.",
      keywords: ['sentence', 'eating', "McDonald's", "5 o'clock", 'chapter3'],
      answer: null,
      context: null
    },
    {
      japanese: '4時30分 に 家 で 音楽 を 聴きます 。',
      hiragana: 'よじさんじゅっぷん に いえ で おんがく を ききます 。',
      romaji: 'Yoji sanjuppun ni ie de ongaku o kikimasu.',
      translation: 'Um 4:30 Uhr höre ich zu Hause Musik.',
      keywords: ['sentence', 'listening to music', 'home', '4:30', 'chapter3'],
      answer: null,
      context: null
    },
    {
      japanese: '3時 に カフェ で コーヒー を 飲みます 。',
      hiragana: 'さんじ に カフェ で コーヒー を のみます 。',
      romaji: 'San-ji ni kafe de kōhī o nomimasu.',
      translation: 'Um 3 Uhr trinke ich Kaffee im Café.',
      keywords: ['sentence', 'drinking coffee', 'cafe', "3 o'clock", 'chapter3'],
      answer: null,
      context: null
    },
    {
      japanese: '毎日 、大学 で 日本語 を 話します 。',
      hiragana: 'まいにち 、だいがく で にほんご を はなします 。',
      romaji: 'Mainichi, daigaku de Nihongo o hanashimasu.',
      translation: 'Jeden Tag spreche ich Japanisch am College.',
      keywords: ['sentence', 'speaking Japanese', 'college', 'every day', 'chapter3'],
      answer: null,
      context: null
    },
    {
      japanese: '2時 に 図書館 で 雑誌 を 読みます 。',
      hiragana: 'にじ に としょかん で ざっし を よみます 。',
      romaji: 'Ni-ji ni toshokan de zasshi o yomimasu.',
      translation: 'Um 2 Uhr lese ich eine Zeitschrift in der Bibliothek.',
      keywords: ['sentence', 'reading', 'library', "2 o'clock", 'chapter3'],
      answer: null,
      context: null
    },
    {
      japanese: '今夜 、家 で テレビ を 見ます 。',
      hiragana: 'こんや 、いえ で テレビ を みます 。',
      romaji: "Kon'ya, ie de terebi o mimasu.",
      translation: 'Heute Abend schaue ich zu Hause fern.',
      keywords: ['sentence', 'watching TV', 'home', 'tonight', 'chapter3'],
      answer: null,
      context: null
    },
    {
      japanese: '土曜日 に 学校 で テニス を します 。',
      hiragana: 'どようび に がっこう で テニス を します 。',
      romaji: 'Doyōbi ni gakkō de tenisu o shimasu.',
      translation: 'Am Samstag spiele ich Tennis in der Schule.',
      keywords: ['sentence', 'playing tennis', 'school', 'Saturday', 'chapter3'],
      answer: null,
      context: null
    },
    {
      japanese: '週末 、図書館 で 日本語 を 勉強します 。',
      hiragana: 'しゅうまつ 、としょかん で にほんご を べんきょうします 。',
      romaji: 'Shūmatsu, toshokan de Nihongo o benkyōshimasu.',
      translation: 'Am Wochenende lerne ich Japanisch in der Bibliothek.',
      keywords: ['sentence', 'studying Japanese', 'library', 'weekend', 'chapter3'],
      answer: null,
      context: null
    },
    {
      japanese: 'うち に 行きます 。',
      hiragana: 'うち に いきます 。',
      romaji: 'Uchi ni ikimasu.',
      translation: 'Ich gehe nach Hause.',
      keywords: ['sentence', 'going home', 'chapter3'],
      answer: null,
      context: null
    },
    {
      japanese: 'うち に 帰ります 。',
      hiragana: 'うち に かえります 。',
      romaji: 'Uchi ni kaerimasu.',
      translation: 'Ich kehre nach Hause zurück.',
      keywords: ['sentence', 'returning home', 'chapter3'],
      answer: null,
      context: null
    },
    {
      japanese: '学校 に 来ます 。',
      hiragana: 'がっこう に きます 。',
      romaji: 'Gakkō ni kimasu.',
      translation: 'Ich komme zur Schule.',
      keywords: ['sentence', 'coming to school', 'chapter3'],
      answer: null,
      context: null
    },
    {
      japanese: '5時 に 起きます 。',
      hiragana: 'ごじ に おきます 。',
      romaji: 'Go-ji ni okimasu.',
      translation: 'Ich wache um 5 Uhr auf.',
      keywords: ['sentence', 'waking up', "5 o'clock", 'chapter3'],
      answer: null,
      context: null
    },
    {
      japanese: '11時 に 寝ます 。',
      hiragana: 'じゅういちじ に ねます 。',
      romaji: 'Jūichiji ni nemasu.',
      translation: 'Ich schlafe um 11 Uhr ein.',
      keywords: ['sentence', 'sleeping', "11 o'clock", 'chapter3'],
      answer: null,
      context: null
    },
    {
      japanese: '山下 先生 は 八時 に 朝ご飯 を 食べます 。',
      hiragana: 'やました せんせいは はち じに あさごはんを たべます 。',
      romaji: 'Yamashita-sensei wa hachi-ji ni asagohan o tabemasu.',
      translation: "Professor Yamashita eats breakfast at 8 o'clock.",
      keywords: ['sentence', 'breakfast', "8 o'clock", 'chapter3'],
      answer: null,
      context: null
    },
    {
      japanese: '山下 先生 は 八時 三十分 に 大学 へ 行きます 。',
      hiragana: 'やました せんせいは はち じ さんじゅっ ぷんに だいがくへ いきます 。',
      romaji: 'Yamashita-sensei wa hachi-ji sanjū-pun ni daigaku e ikimasu.',
      translation: 'Professor Yamashita goes to university at 8:30.',
      keywords: ['sentence', 'university', '8:30', 'chapter3'],
      answer: null,
      context: null
    },
    {
      japanese: '山下 先生 は 十二時 に 昼ご飯 を 食べます 。',
      hiragana: 'やました せんせいは じゅうに じに ひるごはんを たべます 。',
      romaji: 'Yamashita-sensei wa jūni-ji ni hirugohan o tabemasu.',
      translation: "Professor Yamashita eats lunch at 12 o'clock.",
      keywords: ['sentence', 'lunch', "12 o'clock", 'chapter3'],
      answer: null,
      context: null
    },
    {
      japanese: '山下 先生 は 四時 に コーヒー を 飲みます 。',
      hiragana: 'やました せんせいは よん じに コーヒーを のみます 。',
      romaji: 'Yamashita-sensei wa yon-ji ni kōhī o nomimasu.',
      translation: "Professor Yamashita drinks coffee at 4 o'clock.",
      keywords: ['sentence', 'coffee', "4 o'clock", 'chapter3'],
      answer: null,
      context: null
    },
    {
      japanese: '山下 先生 は 六時 に 家 に 帰ります 。',
      hiragana: 'やました せんせいは ろく じに いえに かえります 。',
      romaji: 'Yamashita-sensei wa roku-ji ni ie ni kaerimasu.',
      translation: "Professor Yamashita goes home at 6 o'clock.",
      keywords: ['sentence', 'go home', "6 o'clock", 'chapter3'],
      answer: null,
      context: null
    },
    {
      japanese: '山下 先生 は 七時 三十分 に 夕ご飯 を 食べます 。',
      hiragana: 'やました せんせいは しち じ さんじゅっ ぷんに ゆうごはんを たべます 。',
      romaji: 'Yamashita-sensei wa shichi-ji sanjū-pun ni yūgohan o tabemasu.',
      translation: 'Professor Yamashita eats dinner at 7:30.',
      keywords: ['sentence', 'dinner', '7:30', 'chapter3'],
      answer: null,
      context: null
    },
    {
      japanese: '山下 先生 は 十一時 三十分 に 寝ます 。',
      hiragana: 'やました せんせいは じゅういち じ さんじゅっ ぷんに ねます 。',
      romaji: 'Yamashita-sensei wa jūichi-ji sanjū-pun ni nemasu.',
      translation: 'Professor Yamashita goes to bed at 11:30.',
      keywords: ['sentence', 'go to bed', '11:30', 'chapter3'],
      answer: null,
      context: null
    },
    {
      japanese: '図書館 で 一緒 に 勉強 し ます か ？',
      hiragana: 'としょかん で いっしょ に べんきょう し ます か ？',
      romaji: 'Toshokan de issho ni benkyō shimasu ka?',
      translation: 'Wollen wir zusammen in der Bibliothek lernen?',
      keywords: ['sentence', 'learning', 'library', 'together'],
      answer: null,
      context: null
    },
    {
      japanese: '一緒 に コーヒー を 飲み ます か ？',
      hiragana: 'いっしょ に コーヒー を のみ ます か ？',
      romaji: 'Issho ni kōhī o nomimasu ka?',
      translation: 'Wollen wir zusammen eine Tasse Kaffee trinken?',
      keywords: ['sentence', 'coffee', 'together'],
      answer: null,
      context: null
    },
    {
      japanese: '一緒 に テニス を し ます か ？',
      hiragana: 'いっしょ に テニス を し ます か ？',
      romaji: 'Issho ni tenisu o shimasu ka?',
      translation: 'Wollen wir zusammen Tennis spielen gehen?',
      keywords: ['sentence', 'tennis', 'together'],
      answer: null,
      context: null
    },
    {
      japanese: '一緒 に 映画 を 見 に 行き ます か ？',
      hiragana: 'いっしょ に えいが を み に いき ます か ？',
      romaji: 'Issho ni eiga o mi ni ikimasu ka?',
      translation: 'Wollen wir zusammen ins Kino gehen?',
      keywords: ['sentence', 'movie', 'cinema', 'together'],
      answer: null,
      context: null
    },
    {
      japanese: '一緒 に マクドナルド に 行き ます か ？',
      hiragana: 'いっしょ に マクドナルド に いき ます か ？',
      romaji: 'Issho ni Makudonarudo ni ikimasu ka?',
      translation: "Wollen wir zusammen zu McDonald's gehen?",
      keywords: ['sentence', "McDonald's", 'together'],
      answer: null,
      context: null
    },
    {
      japanese: '一緒 に アイスクリーム を 食べ に 行き ます か ？',
      hiragana: 'いっしょ に アイスクリーム を たべ に いき ます か ？',
      romaji: 'Issho ni aisukurīmu o tabe ni ikimasu ka?',
      translation: 'Wollen wir zusammen ein Eis essen gehen?',
      keywords: ['sentence', 'ice cream', 'together'],
      answer: null,
      context: null
    }
  ]
}))
