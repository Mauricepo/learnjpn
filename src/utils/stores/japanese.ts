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
    { hiragana: 'おとうと', romaji: 'otooto', definition: 'younger brother', keywords: ['nothing'] }
  ],
  sentences: []
}))
