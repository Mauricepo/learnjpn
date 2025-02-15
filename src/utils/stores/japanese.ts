import { create } from 'zustand'
import { sentence, word } from '../types/words'

export interface japaneseStore {
  words: word[]
  sentences: sentence[]
}

export const useJapaneseStore = create<japaneseStore>((set, get) => ({
  words: [
    { hiragana: 'あの', romaji: 'ano', definition: 'um...', keywords: ['nothing'] },
    { hiragana: 'いま', romaji: 'ima', definition: 'now', keywords: ['nothing'] },
    { hiragana: 'えいご', romaji: 'eego', definition: 'English (language)', keywords: ['langauge'] },
    { hiragana: 'がくせい', romaji: 'gakusee', definition: 'student', keywords: ['nothing'] },
    { hiragana: '〜ご', romaji: '..go', definition: 'language', keywords: ['nothing'] },
    { hiragana: 'こうこう', romaji: 'kookoo', definition: 'high school', keywords: ['nothing'] },
    { hiragana: 'ごご', romaji: 'gogo', definition: 'P.M', keywords: ['nothing'] },
    { hiragana: 'ごぜん', romaji: 'gozen', definition: 'A.M', keywords: ['nothing'] },
    { hiragana: '〜さい', romaji: '...sai', definition: '...years old', keywords: ['nothing'] },
    { hiragana: '〜さん', romaji: '...san', definition: 'Mr./Ms....', keywords: ['nothing'] },
    { hiragana: '〜じ', romaji: '...ji', definition: 'o clock', keywords: ['nothing'] },
    { hiragana: '〜じん', romaji: '...jin', definition: 'people', keywords: ['nothing'] },
    { hiragana: 'せんせい', romaji: 'sensei', definition: 'teacher; Professor', keywords: ['job'] },
    { hiragana: 'せんもん', romaji: 'senmon', definition: 'major', keywords: ['nothing'] },
    { hiragana: 'そうです', romaji: 'soo desu', definition: 'Thats right.', keywords: ['nothing'] },
    { hiragana: 'だいがく', romaji: 'daigaku', definition: 'college; university', keywords: ['nothing'] },
    { hiragana: 'でんわ', romaji: 'denwa', definition: 'telephone', keywords: ['nothing'] },
    { hiragana: 'ともだち', romaji: 'tomodachi', definition: 'friend', keywords: ['nothing'] },
    { hiragana: 'なまえ', romaji: 'namae', definition: 'name', keywords: ['nothing'] },
    { hiragana: 'なん／なに', romaji: 'nan/nani', definition: 'what', keywords: ['nothing'] },
    { hiragana: 'にほん', romaji: 'nihon', definition: 'Japan', keywords: ['country'] },
    { hiragana: '〜ねんせい', romaji: '...nensee', definition: '...year student', keywords: ['nothing'] },
    { hiragana: 'はい', romaji: 'hai', definition: 'yes', keywords: ['nothing'] },
    { hiragana: 'はん', romaji: 'han', definition: 'half', keywords: ['nothing'] },
    { hiragana: 'ばんごう', romaji: 'bangoo', definition: 'number', keywords: ['nothing'] },
    { hiragana: 'りゅうがくせい', romaji: 'ryuugakusee', definition: 'international student', keywords: ['nothing'] },
    { hiragana: 'わたし', romaji: 'watashi', definition: 'I', keywords: ['nothing'] },
    { hiragana: 'アメリカ', romaji: 'amerika', definition: 'U.S.A.', keywords: ['country'] },
    { hiragana: 'イギリス', romaji: 'igirisu', definition: 'Britain', keywords: ['country'] },
    { hiragana: 'オーストラリア', romaji: 'Oosutoraria', definition: 'Australia', keywords: ['country'] },
    { hiragana: 'かんこく', romaji: 'kankoku', definition: 'Korea', keywords: ['country'] },
    { hiragana: 'スウェーデン', romaji: 'Sueeden', definition: 'Sweden', keywords: ['country'] },
    { hiragana: 'ちゅうごく', romaji: 'Chuugoku', definition: 'China', keywords: ['country'] },
    { hiragana: 'かがく', romaji: 'kagaku', definition: 'science', keywords: ['nothing'] },
    { hiragana: 'アジアけんきゅう', romaji: 'ajiakenkyuu', definition: 'Asian studies', keywords: ['nothing'] },
    { hiragana: 'こくさいかんけい', romaji: 'kokusaikankei', definition: 'international relations', keywords: ['nothing'] },
    { hiragana: 'コンピューター', romaji: 'konpyuutaa', definition: 'computer', keywords: ['nothing'] },
    { hiragana: 'じんるいがく', romaji: 'jinruigaku', definition: 'anthropology', keywords: ['nothing'] },
    { hiragana: 'せいじ', romaji: 'seeji', definition: 'politics', keywords: ['nothing'] },
    { hiragana: 'ビジネス', romaji: 'bijinesu', definition: 'business', keywords: ['major'] },
    { hiragana: 'ぶんがく', romaji: 'bungaku', definition: 'literature', keywords: ['major'] },
    { hiragana: 'れきし', romaji: 'rekishi', definition: 'history', keywords: ['major'] },
    { hiragana: 'しごと', romaji: 'shigoto', definition: 'job; work; occupation', keywords: ['nothing'] },
    { hiragana: 'いしゃ', romaji: 'isha', definition: 'doctor', keywords: ['job'] },
    { hiragana: 'かいしゃいん', romaji: 'kaishain', definition: 'office worker', keywords: ['nothing'] },
    { hiragana: 'こうこうせい', romaji: 'kookoosei', definition: 'high school student', keywords: ['nothing'] },
    { hiragana: 'しゅふ', romaji: 'shufu', definition: 'housewife', keywords: ['nothing'] },
    { hiragana: 'だいがくいんせい', romaji: 'daigakuinsee', definition: 'graduate student', keywords: ['nothing'] },
    { hiragana: 'だいがくせい', romaji: 'daigakusee', definition: 'college student', keywords: ['nothing'] },
    { hiragana: 'べんごし', romaji: 'bengoshi', definition: 'lawyer', keywords: ['job'] },
    { hiragana: 'おかあさん', romaji: 'okaasan', definition: 'mother', keywords: ['nothing'] },
    { hiragana: 'おとうさん', romaji: 'otoosan', definition: 'father', keywords: ['nothing'] },
    { hiragana: 'おねえさん', romaji: 'oneesan', definition: 'older sister', keywords: ['nothing'] },
    { hiragana: 'おにいさん', romaji: 'oniisan', definition: 'older brother', keywords: ['nothing'] },
    { hiragana: 'いもうと', romaji: 'imooto', definition: 'younger sister', keywords: ['nothing'] },
    { hiragana: 'おとうと', romaji: 'otooto', definition: 'younger brother', keywords: ['nothing'] },
    { hiragana: 'これ', romaji: 'kore', definition: 'this one', keywords: ['demonstrative pronoun'] },
    { hiragana: 'それ', romaji: 'sore', definition: 'that one', keywords: ['demonstrative pronoun'] },
    { hiragana: 'あれ', romaji: 'are', definition: 'that one (over there)', keywords: ['demonstrative pronoun'] },
    { hiragana: 'どれ', romaji: 'dore', definition: 'which one', keywords: ['interrogative pronoun'] },
    { hiragana: 'この', romaji: 'kono', definition: 'this ...', keywords: ['demonstrative adjective'] },
    { hiragana: 'その', romaji: 'sono', definition: 'that ...', keywords: ['demonstrative adjective'] },
    { hiragana: 'あの', romaji: 'ano', definition: 'that ... (over there)', keywords: ['demonstrative adjective'] },
    { hiragana: 'どの', romaji: 'dono', definition: 'which ...', keywords: ['interrogative adjective'] },
    { hiragana: 'あそこ', romaji: 'asoko', definition: 'over there', keywords: ['adverb of place'] },
    { hiragana: 'どこ', romaji: 'doko', definition: 'where', keywords: ['interrogative adverb'] },
    { hiragana: 'だれ', romaji: 'dare', definition: 'who', keywords: ['interrogative pronoun'] },
    { hiragana: 'おいしい', romaji: 'oishii', definition: 'delicious', keywords: ['adjective'] },
    { hiragana: 'さかな', kanji: '魚', romaji: 'sakana', definition: 'fish', keywords: ['noun'] },
    { hiragana: 'とんかつ', romaji: 'tonkatsu', definition: 'pork cutlet', keywords: ['noun', 'food'] },
    { hiragana: 'にく', kanji: '肉', romaji: 'niku', definition: 'meat', keywords: ['noun'] },
    { hiragana: 'メニュー', romaji: 'menyuu', definition: 'menu', keywords: ['noun'] },
    { hiragana: 'やさい', kanji: '野菜', romaji: 'yasai', definition: 'vegetable', keywords: ['noun'] },
    { hiragana: 'えんぴつ', kanji: '鉛筆', romaji: 'enpitsu', definition: 'pencil', keywords: ['noun'] },
    { hiragana: 'かさ', kanji: '傘', romaji: 'kasa', definition: 'umbrella', keywords: ['noun'] },
    { hiragana: 'かばん', kanji: '鞄', romaji: 'kaban', definition: 'bag', keywords: ['noun'] },
    { hiragana: 'くつ', kanji: '靴', romaji: 'kutsu', definition: 'shoes', keywords: ['noun'] },
    { hiragana: 'さいふ', kanji: '財布', romaji: 'saifu', definition: 'wallet', keywords: ['noun'] },
    { hiragana: 'ジーンズ', romaji: 'jiinzu', definition: 'jeans', keywords: ['noun', 'clothing'] },
    { hiragana: 'じしょ', kanji: '辞書', romaji: 'jisho', definition: 'dictionary', keywords: ['noun'] },
    { hiragana: 'じてんしゃ', kanji: '自転車', romaji: 'jitensha', definition: 'bicycle', keywords: ['noun'] },
    { hiragana: 'しんぶん', kanji: '新聞', romaji: 'shinbun', definition: 'newspaper', keywords: ['noun'] },
    { hiragana: 'テープ', romaji: 'teepu', definition: 'tape', keywords: ['noun'] },
    { hiragana: 'とけい', kanji: '時計', romaji: 'tokee', definition: 'watch; clock', keywords: ['noun'] },
    { hiragana: 'トレーナー', romaji: 'toreenaa', definition: 'sweat shirt', keywords: ['noun', 'clothing'] },
    { hiragana: 'ノート', romaji: 'nooto', definition: 'notebook', keywords: ['noun'] },
    { hiragana: 'ペン', romaji: 'pen', definition: 'pen', keywords: ['noun'] },
    { hiragana: 'ぼうし', kanji: '帽子', romaji: 'booshi', definition: 'hat; cap', keywords: ['noun'] },
    { hiragana: 'ほん', kanji: '本', romaji: 'hon', definition: 'book', keywords: ['noun'] },
    { hiragana: 'おてあらい', kanji: 'お手洗い', romaji: 'otearai', definition: 'restroom', keywords: ['noun'] },
    { hiragana: 'きっさてん', kanji: '喫茶店', romaji: 'kissaten', definition: 'cafe', keywords: ['noun'] },
    { hiragana: 'ぎんこう', kanji: '銀行', romaji: 'ginkoo', definition: 'bank', keywords: ['noun'] },
    { hiragana: 'としょかん', kanji: '図書館', romaji: 'toshokan', definition: 'library', keywords: ['noun'] },
    { hiragana: 'ゆうびんきょく', kanji: '郵便局', romaji: 'yuubinkyoku', definition: 'post office', keywords: ['noun'] },
    { hiragana: 'けいざい', kanji: '経済', romaji: 'keezai', definition: 'economics', keywords: ['noun'] },
    { hiragana: 'いくら', romaji: 'ikura', definition: 'how much', keywords: ['interrogative'] },
    { hiragana: '〜えん', kanji: '〜円', romaji: '...en', definition: '...yen', keywords: ['currency'] },
    { hiragana: 'たかい', kanji: '高い', romaji: 'takai', definition: 'expensive', keywords: ['adjective'] },
    { hiragana: 'いらっしゃいませ', romaji: 'irasshaimase', definition: 'Welcome (to our store)', keywords: ['greeting'] },
    { hiragana: '（〜を）おねがいします', romaji: '(...o) onegaishimasu', definition: '..., please.', keywords: ['polite request'] },
    { hiragana: '（〜を）ください', romaji: '(...o) kudasai', definition: 'Please give me...', keywords: ['polite request'] },
    { hiragana: 'じゃあ', romaji: 'jaa', definition: 'then...; if that is the case,...', keywords: ['conjunction'] },
    { hiragana: '（〜を）どうぞ', romaji: '(...o) doozo', definition: 'Here it is.', keywords: ['offering'] },
    { hiragana: 'どうも', romaji: 'doomo', definition: 'Thank you.', keywords: ['expression of gratitude'] }
  ],
  sentences: []
}))
