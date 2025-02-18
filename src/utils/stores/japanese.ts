import { create } from 'zustand'
import { sentence, word } from '../types/words'

export interface japaneseStore {
  words: word[]
  sentences: sentence[]
}

export const useJapaneseStore = create<japaneseStore>((set, get) => ({
  words: [
    { hiragana: 'あの', romaji: 'ano', definition: 'um...', kanji: '', keywords: ['nothing'] },
    {
      hiragana: 'いま', romaji: 'ima', definition: 'now', keywords: ['nothing'],
      kanji: ''
    },
    { hiragana: 'えいご', romaji: 'eego', kanji: '英語', definition: 'English (language)', keywords: ['langauge'] },
    { hiragana: 'がくせい', romaji: 'gakusee', definition: 'student', kanji: '学生', keywords: ['nothing'] },
    {
      hiragana: '〜ご', romaji: '..go', definition: 'language', keywords: ['nothing'],
      kanji: ''
    },
    {
      hiragana: 'こうこう', romaji: 'kookoo', definition: 'high school', keywords: ['nothing'],
      kanji: ''
    },
    {
      hiragana: 'ごご', romaji: 'gogo', definition: 'P.M', keywords: ['nothing'],
      kanji: ''
    },
    {
      hiragana: 'ごぜん', romaji: 'gozen', definition: 'A.M', keywords: ['nothing'],
      kanji: ''
    },
    {
      hiragana: '〜さい', romaji: '...sai', definition: '...years old', keywords: ['nothing'],
      kanji: ''
    },
    {
      hiragana: '〜さん', romaji: '...san', definition: 'Mr./Ms....', keywords: ['nothing'],
      kanji: ''
    },
    {
      hiragana: '〜じ', romaji: '...ji', definition: 'o clock', keywords: ['nothing'],
      kanji: ''
    },
    {
      hiragana: '〜じん', romaji: '...jin', definition: 'people', keywords: ['nothing'],
      kanji: ''
    },
    {
      hiragana: 'せんせい', romaji: 'sensei', definition: 'teacher; Professor', keywords: ['job'],
      kanji: ''
    },
    {
      hiragana: 'せんもん', romaji: 'senmon', definition: 'major', keywords: ['nothing'],
      kanji: ''
    },
    {
      hiragana: 'そうです', romaji: 'soo desu', definition: 'Thats right.', keywords: ['nothing'],
      kanji: ''
    },
    {
      hiragana: 'だいがく', romaji: 'daigaku', definition: 'college; university', keywords: ['nothing'],
      kanji: ''
    },
    {
      hiragana: 'でんわ', romaji: 'denwa', definition: 'telephone', keywords: ['nothing'],
      kanji: ''
    },
    {
      hiragana: 'ともだち', romaji: 'tomodachi', definition: 'friend', keywords: ['nothing'],
      kanji: ''
    },
    {
      hiragana: 'なまえ', romaji: 'namae', definition: 'name', keywords: ['nothing'],
      kanji: ''
    },
    {
      hiragana: 'なん／なに', romaji: 'nan/nani', definition: 'what', keywords: ['nothing'],
      kanji: ''
    },
    {
      hiragana: 'にほん', romaji: 'nihon', definition: 'Japan', keywords: ['country'],
      kanji: ''
    },
    {
      hiragana: '〜ねんせい', romaji: '...nensee', definition: '...year student', keywords: ['nothing'],
      kanji: ''
    },
    {
      hiragana: 'はい', romaji: 'hai', definition: 'yes', keywords: ['nothing'],
      kanji: ''
    },
    {
      hiragana: 'はん', romaji: 'han', definition: 'half', keywords: ['nothing'],
      kanji: ''
    },
    {
      hiragana: 'ばんごう', romaji: 'bangoo', definition: 'number', keywords: ['nothing'],
      kanji: ''
    },
    {
      hiragana: 'りゅうがくせい', romaji: 'ryuugakusee', definition: 'international student', keywords: ['nothing'],
      kanji: ''
    },
    {
      hiragana: 'わたし', romaji: 'watashi', definition: 'I', keywords: ['nothing'],
      kanji: ''
    },
    {
      hiragana: 'アメリカ', romaji: 'amerika', definition: 'U.S.A.', keywords: ['country'],
      kanji: ''
    },
    {
      hiragana: 'イギリス', romaji: 'igirisu', definition: 'Britain', keywords: ['country'],
      kanji: ''
    },
    {
      hiragana: 'オーストラリア', romaji: 'Oosutoraria', definition: 'Australia', keywords: ['country'],
      kanji: ''
    },
    {
      hiragana: 'かんこく', romaji: 'kankoku', definition: 'Korea', keywords: ['country'],
      kanji: ''
    },
    {
      hiragana: 'スウェーデン', romaji: 'Sueeden', definition: 'Sweden', keywords: ['country'],
      kanji: ''
    },
    {
      hiragana: 'ちゅうごく', romaji: 'Chuugoku', definition: 'China', keywords: ['country'],
      kanji: ''
    },
    {
      hiragana: 'かがく', romaji: 'kagaku', definition: 'science', keywords: ['nothing'],
      kanji: ''
    },
    {
      hiragana: 'アジアけんきゅう', romaji: 'ajiakenkyuu', definition: 'Asian studies', keywords: ['nothing'],
      kanji: ''
    },
    {
      hiragana: 'こくさいかんけい', romaji: 'kokusaikankei', definition: 'international relations', keywords: ['nothing'],
      kanji: ''
    },
    {
      hiragana: 'コンピューター', romaji: 'konpyuutaa', definition: 'computer', keywords: ['nothing'],
      kanji: ''
    },
    {
      hiragana: 'じんるいがく', romaji: 'jinruigaku', definition: 'anthropology', keywords: ['nothing'],
      kanji: ''
    },
    {
      hiragana: 'せいじ', romaji: 'seeji', definition: 'politics', keywords: ['nothing'],
      kanji: ''
    },
    {
      hiragana: 'ビジネス', romaji: 'bijinesu', definition: 'business', keywords: ['major'],
      kanji: ''
    },
    {
      hiragana: 'ぶんがく', romaji: 'bungaku', definition: 'literature', keywords: ['major'],
      kanji: ''
    },
    {
      hiragana: 'れきし', romaji: 'rekishi', definition: 'history', keywords: ['major'],
      kanji: ''
    },
    {
      hiragana: 'しごと', romaji: 'shigoto', definition: 'job; work; occupation', keywords: ['nothing'],
      kanji: ''
    },
    {
      hiragana: 'いしゃ', romaji: 'isha', definition: 'doctor', keywords: ['job'],
      kanji: ''
    },
    {
      hiragana: 'かいしゃいん', romaji: 'kaishain', definition: 'office worker', keywords: ['nothing'],
      kanji: ''
    },
    {
      hiragana: 'こうこうせい', romaji: 'kookoosei', definition: 'high school student', keywords: ['nothing'],
      kanji: ''
    },
    {
      hiragana: 'しゅふ', romaji: 'shufu', definition: 'housewife', keywords: ['nothing'],
      kanji: ''
    },
    {
      hiragana: 'だいがくいんせい', romaji: 'daigakuinsee', definition: 'graduate student', keywords: ['nothing'],
      kanji: ''
    },
    {
      hiragana: 'だいがくせい', romaji: 'daigakusee', definition: 'college student', keywords: ['nothing'],
      kanji: ''
    },
    {
      hiragana: 'べんごし', romaji: 'bengoshi', definition: 'lawyer', keywords: ['job'],
      kanji: ''
    },
    {
      hiragana: 'おかあさん', romaji: 'okaasan', definition: 'mother', keywords: ['nothing'],
      kanji: ''
    },
    {
      hiragana: 'おとうさん', romaji: 'otoosan', definition: 'father', keywords: ['nothing'],
      kanji: ''
    },
    {
      hiragana: 'おねえさん', romaji: 'oneesan', definition: 'older sister', keywords: ['nothing'],
      kanji: ''
    },
    {
      hiragana: 'おにいさん', romaji: 'oniisan', definition: 'older brother', keywords: ['nothing'],
      kanji: ''
    },
    {
      hiragana: 'いもうと', romaji: 'imooto', definition: 'younger sister', keywords: ['nothing'],
      kanji: ''
    },
    {
      hiragana: 'おとうと', romaji: 'otooto', definition: 'younger brother', keywords: ['nothing'],
      kanji: ''
    },
    {
      hiragana: 'これ', romaji: 'kore', definition: 'this one', keywords: ['demonstrative pronoun'],
      kanji: ''
    },
    {
      hiragana: 'それ', romaji: 'sore', definition: 'that one', keywords: ['demonstrative pronoun'],
      kanji: ''
    },
    {
      hiragana: 'あれ', romaji: 'are', definition: 'that one (over there)', keywords: ['demonstrative pronoun'],
      kanji: ''
    },
    {
      hiragana: 'どれ', romaji: 'dore', definition: 'which one', keywords: ['interrogative pronoun'],
      kanji: ''
    },
    {
      hiragana: 'この', romaji: 'kono', definition: 'this ...', keywords: ['demonstrative adjective'],
      kanji: ''
    },
    {
      hiragana: 'その', romaji: 'sono', definition: 'that ...', keywords: ['demonstrative adjective'],
      kanji: ''
    },
    {
      hiragana: 'あの', romaji: 'ano', definition: 'that ... (over there)', keywords: ['demonstrative adjective'],
      kanji: ''
    },
    {
      hiragana: 'どの', romaji: 'dono', definition: 'which ...', keywords: ['interrogative adjective'],
      kanji: ''
    },
    {
      hiragana: 'あそこ', romaji: 'asoko', definition: 'over there', keywords: ['adverb of place'],
      kanji: ''
    },
    {
      hiragana: 'どこ', romaji: 'doko', definition: 'where', keywords: ['interrogative adverb'],
      kanji: ''
    },
    {
      hiragana: 'だれ', romaji: 'dare', definition: 'who', keywords: ['interrogative pronoun'],
      kanji: ''
    },
    {
      hiragana: 'おいしい', romaji: 'oishii', definition: 'delicious', keywords: ['adjective'],
      kanji: ''
    },
    { hiragana: 'さかな', kanji: '魚', romaji: 'sakana', definition: 'fish', keywords: ['noun'] },
    {
      hiragana: 'とんかつ', romaji: 'tonkatsu', definition: 'pork cutlet', keywords: ['noun', 'food'],
      kanji: ''
    },
    { hiragana: 'にく', kanji: '肉', romaji: 'niku', definition: 'meat', keywords: ['noun'] },
    {
      hiragana: 'メニュー', romaji: 'menyuu', definition: 'menu', keywords: ['noun'],
      kanji: ''
    },
    { hiragana: 'やさい', kanji: '野菜', romaji: 'yasai', definition: 'vegetable', keywords: ['noun'] },
    { hiragana: 'えんぴつ', kanji: '鉛筆', romaji: 'enpitsu', definition: 'pencil', keywords: ['noun'] },
    { hiragana: 'かさ', kanji: '傘', romaji: 'kasa', definition: 'umbrella', keywords: ['noun'] },
    { hiragana: 'かばん', kanji: '鞄', romaji: 'kaban', definition: 'bag', keywords: ['noun'] },
    { hiragana: 'くつ', kanji: '靴', romaji: 'kutsu', definition: 'shoes', keywords: ['noun'] },
    { hiragana: 'さいふ', kanji: '財布', romaji: 'saifu', definition: 'wallet', keywords: ['noun'] },
    {
      hiragana: 'ジーンズ', romaji: 'jiinzu', definition: 'jeans', keywords: ['noun', 'clothing'],
      kanji: ''
    },
    { hiragana: 'じしょ', kanji: '辞書', romaji: 'jisho', definition: 'dictionary', keywords: ['noun'] },
    { hiragana: 'じてんしゃ', kanji: '自転車', romaji: 'jitensha', definition: 'bicycle', keywords: ['noun'] },
    { hiragana: 'しんぶん', kanji: '新聞', romaji: 'shinbun', definition: 'newspaper', keywords: ['noun'] },
    {
      hiragana: 'テープ', romaji: 'teepu', definition: 'tape', keywords: ['noun'],
      kanji: ''
    },
    { hiragana: 'とけい', kanji: '時計', romaji: 'tokee', definition: 'watch; clock', keywords: ['noun'] },
    {
      hiragana: 'トレーナー', romaji: 'toreenaa', definition: 'sweat shirt', keywords: ['noun', 'clothing'],
      kanji: ''
    },
    {
      hiragana: 'ノート', romaji: 'nooto', definition: 'notebook', keywords: ['noun'],
      kanji: ''
    },
    {
      hiragana: 'ペン', romaji: 'pen', definition: 'pen', keywords: ['noun'],
      kanji: ''
    },
    { hiragana: 'ぼうし', kanji: '帽子', romaji: 'booshi', definition: 'hat; cap', keywords: ['noun'] },
    { hiragana: 'ほん', kanji: '本', romaji: 'hon', definition: 'book', keywords: ['noun'] },
    { hiragana: 'おてあらい', kanji: 'お手洗い', romaji: 'otearai', definition: 'restroom', keywords: ['noun'] },
    { hiragana: 'きっさてん', kanji: '喫茶店', romaji: 'kissaten', definition: 'cafe', keywords: ['noun'] },
    { hiragana: 'ぎんこう', kanji: '銀行', romaji: 'ginkoo', definition: 'bank', keywords: ['noun'] },
    { hiragana: 'としょかん', kanji: '図書館', romaji: 'toshokan', definition: 'library', keywords: ['noun'] },
    { hiragana: 'ゆうびんきょく', kanji: '郵便局', romaji: 'yuubinkyoku', definition: 'post office', keywords: ['noun'] },
    { hiragana: 'けいざい', kanji: '経済', romaji: 'keezai', definition: 'economics', keywords: ['noun'] },
    {
      hiragana: 'いくら', romaji: 'ikura', definition: 'how much', keywords: ['interrogative'],
      kanji: ''
    },
    { hiragana: '〜えん', kanji: '〜円', romaji: '...en', definition: '...yen', keywords: ['currency'] },
    { hiragana: 'たかい', kanji: '高い', romaji: 'takai', definition: 'expensive', keywords: ['adjective'] },
    {
      hiragana: 'いらっしゃいませ', romaji: 'irasshaimase', definition: 'Welcome (to our store)', keywords: ['greeting'],
      kanji: ''
    },
    {
      hiragana: '（〜を）おねがいします', romaji: '(...o) onegaishimasu', definition: '..., please.', keywords: ['polite request'],
      kanji: ''
    },
    {
      hiragana: '（〜を）ください', romaji: '(...o) kudasai', definition: 'Please give me...', keywords: ['polite request'],
      kanji: ''
    },
    {
      hiragana: 'じゃあ', romaji: 'jaa', definition: 'then...; if that is the case,...', keywords: ['conjunction'],
      kanji: ''
    },
    {
      hiragana: '（〜を）どうぞ', romaji: '(...o) doozo', definition: 'Here it is.', keywords: ['offering'],
      kanji: ''
    },
    {
      hiragana: 'どうも', romaji: 'doomo', definition: 'Thank you.', keywords: ['expression of gratitude'],
      kanji: ''
    }
  ],
  sentences: [
    {
      hiragana: 'あの ひと は せんせい です。',
      romaji: 'Ano hito wa sensei desu.',
      translation: 'Diese Person ist eine Lehrerin / ein Lehrer.',
      keywords: ['sentence', 'chapter1']
    },
    {
      hiragana: 'やまだ さん は がくせい です。',
      romaji: 'Yamada-san wa gakusei desu.',
      translation: 'Herr/Frau Yamada ist ein/e Schüler/in.',
      keywords: ['sentence', 'chapter1']
    },
    {
      hiragana: 'たなか さん は にほんじん です。',
      romaji: 'Tanaka-san wa Nihonjin desu.',
      translation: 'Herr/Frau Tanaka ist Japaner/in.',
      keywords: ['sentence', 'chapter1']
    },
    {
      hiragana: 'わたし は アメリカじん です。',
      romaji: 'Watashi wa Amerika-jin desu.',
      translation: 'Ich bin Amerikaner/in.',
      keywords: ['sentence', 'chapter1']
    },
    {
      hiragana: 'みちこ さん は だいがくせい です。',
      romaji: 'Michiko-san wa daigakusei desu.',
      translation: 'Michiko ist eine Universitätsstudentin.',
      keywords: ['sentence', 'chapter1']
    },
    {
      hiragana: 'スミス さん は イギリスじん です。',
      romaji: 'Sumisu-san wa Igirisujin desu.',
      translation: 'Herr/Frau Smith ist Brite/Britin.',
      keywords: ['sentence', 'chapter1']
    },
    {
      hiragana: 'さとう さん は にほんご の せんせい です。',
      romaji: 'Satou-san wa Nihongo no sensei desu.',
      translation: 'Herr/Frau Satou ist Japanischlehrer/in.',
      keywords: ['sentence', 'chapter1']
    },
    {
      hiragana: 'メアリー さん は じゅうきゅうさい です。',
      romaji: 'Mearī-san wa jūkyūsai desu.',
      translation: 'Mary ist 19 Jahre alt.',
      keywords: ['sentence', 'chapter1']
    },
    {
      hiragana: 'やまだ せんせい は よんじゅっさい です。',
      romaji: 'Yamada-sensei wa yonjussai desu.',
      translation: 'Lehrer Yamada ist 40 Jahre alt.',
      keywords: ['sentence', 'chapter1']
    },
    {
      hiragana: 'たけし さん は とうきょう だいがく の がくせい です。',
      romaji: 'Takeshi-san wa Tōkyō Daigaku no gakusei desu.',
      translation: 'Takeshi ist Student an der Universität Tokio.',
      keywords: ['sentence', 'chapter1']
    },
    {
      hiragana: 'あの ひと は だれ です か。',
      romaji: 'Ano hito wa dare desu ka?',
      translation: 'Wer ist diese Person?',
      keywords: ['question', 'chapter1']
    },
    {
      hiragana: 'やまだ さん は せんせい です か。',
      romaji: 'Yamada-san wa sensei desu ka?',
      translation: 'Ist Herr/Frau Yamada Lehrer/in?',
      keywords: ['question', 'chapter1']
    },
    {
      hiragana: 'たなか さん は がくせい です か。',
      romaji: 'Tanaka-san wa gakusei desu ka?',
      translation: 'Ist Herr/Frau Tanaka ein/e Schüler/in?',
      keywords: ['question', 'chapter1']
    },
    {
      hiragana: 'あなた は にほんじん です か。',
      romaji: 'Anata wa Nihonjin desu ka?',
      translation: 'Bist du Japaner/in?',
      keywords: ['question', 'chapter1']
    },
    {
      hiragana: 'みちこ さん は なんさい です か。',
      romaji: 'Michiko-san wa nansai desu ka?',
      translation: 'Wie alt ist Michiko?',
      keywords: ['question', 'chapter1']
    },
    {
      hiragana: 'スミス さん は どこ の しゅっしん です か。',
      romaji: 'Sumisu-san wa doko no shusshin desu ka?',
      translation: 'Woher kommt Herr/Frau Smith?',
      keywords: ['question', 'chapter1']
    },
    {
      hiragana: 'さとう さん の しごと は なん です か。',
      romaji: 'Satou-san no shigoto wa nan desu ka?',
      translation: 'Was ist Herr/Frau Satous Beruf?',
      keywords: ['question', 'chapter1']
    },
    {
      hiragana: 'メアリー さん は だいがくせい です か。',
      romaji: 'Mearī-san wa daigakusei desu ka?',
      translation: 'Ist Mary Universitätsstudentin?',
      keywords: ['question', 'chapter1']
    },
    {
      hiragana: 'やまだ せんせい は なんさい です か。',
      romaji: 'Yamada-sensei wa nansai desu ka?',
      translation: 'Wie alt ist Lehrer Yamada?',
      keywords: ['question', 'chapter1']
    },
    {
      hiragana: 'たけし さん は どこ の だいがく の がくせい です か。',
      romaji: 'Takeshi-san wa doko no daigaku no gakusei desu ka?',
      translation: 'An welcher Universität studiert Takeshi?',
      keywords: ['question', 'chapter1']
    },
    {
      hiragana: 'これは にほんご の ほん です。',
      romaji: 'Kore wa Nihongo no hon desu.',
      translation: 'Das ist ein Japanischbuch.',
      keywords: ['sentence', 'chapter1']
    },
    {
      hiragana: 'たなか さん は とうきょう だいがく の がくせい です。',
      romaji: 'Tanaka-san wa Tōkyō Daigaku no gakusei desu.',
      translation: 'Herr/Frau Tanaka ist ein/e Student/in der Universität Tokio.',
      keywords: ['sentence', 'chapter1']
    },
    {
      hiragana: 'スミス さん は ABC がいしゃ の しゃいん です。',
      romaji: 'Sumisu-san wa ABC gaisha no shain desu.',
      translation: 'Herr/Frau Smith ist ein/e Angestellte/r der Firma ABC.',
      keywords: ['sentence', 'chapter1']
    },
    {
      hiragana: 'これは わたし の じしょ です。',
      romaji: 'Kore wa watashi no jisho desu.',
      translation: 'Das ist mein Wörterbuch.',
      keywords: ['sentence', 'chapter1']
    },
    {
      hiragana: 'やまだ せんせい は わたし の にほんご の せんせい です。',
      romaji: 'Yamada-sensei wa watashi no Nihongo no sensei desu.',
      translation: 'Lehrer Yamada ist mein Japanischlehrer.',
      keywords: ['sentence', 'chapter1']
    },
    {
      hiragana: 'これは たけし さん の かばん です か。',
      romaji: 'Kore wa Takeshi-san no kaban desu ka?',
      translation: 'Ist das die Tasche von Takeshi?',
      keywords: ['question', 'chapter1']
    },
    {
      hiragana: 'みちこ さん は にほん の だいがくせい です。',
      romaji: 'Michiko-san wa Nihon no daigakusei desu.',
      translation: 'Michiko ist eine Universitätsstudentin aus Japan.',
      keywords: ['sentence', 'chapter1']
    },
    {
      hiragana: 'これは たなか さん の でんわ ばんごう です か。',
      romaji: 'Kore wa Tanaka-san no denwa bangō desu ka?',
      translation: 'Ist das die Telefonnummer von Herr/Frau Tanaka?',
      keywords: ['question', 'chapter1']
    },
    {
      hiragana: 'やまだ さん は わたし の ともだち です。',
      romaji: 'Yamada-san wa watashi no tomodachi desu.',
      translation: 'Herr/Frau Yamada ist mein/e Freund/in.',
      keywords: ['sentence', 'chapter1']
    },
    {
      hiragana: 'これは たけし さん の いえ です か。',
      romaji: 'Kore wa Takeshi-san no ie desu ka?',
      translation: 'Ist das das Haus von Takeshi?',
      keywords: ['question', 'chapter1']
    },
    {
      hiragana: 'わたし は がくせい です。',
      romaji: 'Watashi wa gakusei desu.',
      translation: 'Ich bin ein/e Schüler/in.',
      keywords: ['sentence', 'chapter1']
    },
    {
      hiragana: 'やまだ さん は せんせい です か。',
      romaji: 'Yamada-san wa sensei desu ka?',
      translation: 'Ist Herr/Frau Yamada Lehrer/in?',
      keywords: ['question', 'chapter1']
    },
    {
      hiragana: 'これは なん です か。',
      romaji: 'Kore wa nan desu ka?',
      translation: 'Was ist das?',
      keywords: ['question', 'chapter1']
    },
    {
      hiragana: 'いま は ごぜん じゅうじ です。',
      romaji: 'Ima wa gozen jūji desu.',
      translation: 'Es ist jetzt 10 Uhr morgens.',
      keywords: ['sentence', 'chapter1']
    },
    {
      hiragana: 'いま なんじ です か。',
      romaji: 'Ima nanji desu ka?',
      translation: 'Wie spät ist es jetzt?',
      keywords: ['question', 'chapter1']
    },
    {
      hiragana: 'スミス さん の でんわ ばんごう は なん です か。',
      romaji: 'Sumisu-san no denwa bangō wa nan desu ka?',
      translation: 'Wie ist Herr/Frau Smiths Telefonnummer?',
      keywords: ['question', 'chapter1']
    },
    {
      hiragana: 'わたし の でんわ ばんごう は いち に さん の よん ご ろく なな です。',
      romaji: 'Watashi no denwa bangō wa ichi ni san no yon go roku nana desu.',
      translation: 'Meine Telefonnummer ist 123-4567.',
      keywords: ['sentence', 'chapter1']
    },
    {
      hiragana: 'メアリー さん は なんさい です か。',
      romaji: 'Mearī-san wa nansai desu ka?',
      translation: 'Wie alt ist Mary?',
      keywords: ['question', 'chapter1']
    },
    {
      hiragana: 'わたし は にじゅういっさい です。',
      romaji: 'Watashi wa nijūissai desu.',
      translation: 'Ich bin 21 Jahre alt.',
      keywords: ['sentence', 'chapter1']
    },
    {
      hiragana: 'これは だれ の ペン です か。',
      romaji: 'Kore wa dare no pen desu ka?',
      translation: 'Wessen Stift ist das?',
      keywords: ['question', 'chapter1']
    },
    {
      hiragana: 'それ は わたし の ペン です。',
      romaji: 'Sore wa watashi no pen desu.',
      translation: 'Das ist mein Stift.',
      keywords: ['sentence', 'chapter1']
    },
    {
      hiragana: 'たなか さん は どこ の だいがく の がくせい です か。',
      romaji: 'Tanaka-san wa doko no daigaku no gakusei desu ka?',
      translation: 'An welcher Universität studiert Herr/Frau Tanaka?',
      keywords: ['question', 'chapter1']
    },
    {
      hiragana: 'たけし さん は いちねんせい です。',
      romaji: 'Takeshi-san wa ichinensei desu.',
      translation: 'Takeshi ist ein Erstsemester.',
      keywords: ['sentence', 'chapter1']
    },
    {
      hiragana: 'にほんご の せんせい は だれ です か。',
      romaji: 'Nihongo no sensei wa dare desu ka?',
      translation: 'Wer ist der Japanischlehrer?',
      keywords: ['question', 'chapter1']
    },
    {
      hiragana: 'その くるま は いくら です か。',
      romaji: 'Sono kuruma wa ikura desu ka?',
      translation: 'Wie viel kostet dieses Auto?',
      keywords: ['question', 'chapter1']
    },
    {
      hiragana: 'この かばん は さんぜん ごひゃく えん です。',
      romaji: 'Kono kaban wa sanzen gohyaku en desu.',
      translation: 'Diese Tasche kostet 3500 Yen.',
      keywords: ['sentence', 'chapter1']
    },
    {
      hiragana: 'やまだ さん は にほんじん です か。',
      romaji: 'Yamada-san wa Nihonjin desu ka?',
      translation: 'Ist Herr/Frau Yamada Japaner/in?',
      keywords: ['question', 'chapter1']
    },
    {
      hiragana: 'はい、にほんじん です。',
      romaji: 'Hai, Nihonjin desu.',
      translation: 'Ja, ich bin Japaner/in.',
      keywords: ['sentence', 'chapter1']
    },
    {
      hiragana: 'いいえ、ちがいます。',
      romaji: 'Iie, chigaimasu.',
      translation: 'Nein, das ist nicht richtig.',
      keywords: ['sentence', 'chapter1']
    },
    {
      hiragana: 'おはようございます。',
      romaji: 'Ohayō gozaimasu.',
      translation: 'Guten Morgen (höflich).',
      keywords: ['greeting', 'chapter1']
    },
    {
      hiragana: 'こんにちは。',
      romaji: 'Konnichiwa.',
      translation: 'Guten Tag.',
      keywords: ['greeting', 'chapter1']
    },
    {
      hiragana: 'こんばんは。',
      romaji: 'Konbanwa.',
      translation: 'Guten Abend.',
      keywords: ['greeting', 'chapter1']
    },
    {
      hiragana: 'さようなら。',
      romaji: 'Sayōnara.',
      translation: 'Auf Wiedersehen.',
      keywords: ['greeting', 'chapter1']
    },
    {
      hiragana: 'すみません。',
      romaji: 'Sumimasen.',
      translation: 'Entschuldigung.',
      keywords: ['politeness', 'chapter1']
    },
    {
      hiragana: 'いくらですか？',
      romaji: 'Ikura desu ka?',
      translation: 'Wie viel kostet das?',
      keywords: ['question', 'chapter1']
    },
    {
      hiragana: 'これは いくらですか？',
      romaji: 'Kore wa ikura desu ka?',
      translation: 'Wie viel kostet das hier?',
      keywords: ['question', 'chapter1']
    },
    {
      hiragana: 'どれが あなたの ほん ですか？',
      romaji: 'Dore ga anata no hon desu ka?',
      translation: 'Welches ist dein Buch?',
      keywords: ['question', 'chapter1']
    },
    {
      hiragana: 'それは わたしの です。',
      romaji: 'Sore wa watashi no desu.',
      translation: 'Das gehört mir.',
      keywords: ['sentence', 'chapter1']
    },
    {
      hiragana: 'あれは たなかさんの さいふ ですか？',
      romaji: 'Are wa Tanaka-san no saifu desu ka?',
      translation: 'Ist das dort drüben Tanakas Portemonnaie?',
      keywords: ['question', 'chapter1']
    },
    {
      hiragana: 'はい、そうです。',
      romaji: 'Hai, sō desu.',
      translation: 'Ja, das ist richtig.',
      keywords: ['sentence', 'chapter1']
    },
    {
      hiragana: 'いいえ、ちがいます。',
      romaji: 'Iie, chigaimasu.',
      translation: 'Nein, das ist nicht richtig.',
      keywords: ['sentence', 'chapter1']
    },
    {
      hiragana: 'たなかさん も がくせい です。',
      romaji: 'Tanaka-san mo gakusei desu.',
      translation: 'Tanaka ist auch Schüler/in.',
      keywords: ['sentence', 'chapter1']
    },
    {
      hiragana: 'あなたの でんわばんごう は なんですか？',
      romaji: 'Anata no denwa bangō wa nan desu ka?',
      translation: 'Wie ist deine Telefonnummer?',
      keywords: ['question', 'chapter1']
    },
    {
      hiragana: 'わたしの でんわばんごう は 123-4567 です。',
      romaji: 'Watashi no denwa bangō wa ichi ni san no yon go roku nana desu.',
      translation: 'Meine Telefonnummer ist 123-4567.',
      keywords: ['sentence', 'chapter1']
    },
    {
      hiragana: 'あなたは がくせい ですか？ せんせい ですか？',
      romaji: 'Anata wa gakusei desu ka? Sensei desu ka?',
      translation: 'Bist du Schüler/in oder Lehrer/in?',
      keywords: ['question', 'chapter1']
    },
    {
      hiragana: 'これは おいしいですね。',
      romaji: 'Kore wa oishii desu ne.',
      translation: 'Das ist lecker, nicht wahr?',
      keywords: ['sentence', 'chapter1']
    },
    {
      hiragana: 'このえいがは たのしいですよ！',
      romaji: 'Kono eiga wa tanoshii desu yo!',
      translation: 'Dieser Film ist wirklich unterhaltsam!',
      keywords: ['sentence', 'chapter1']
    },
    {
      hiragana: 'これは なんですか？',
      romaji: 'Kore wa nan desu ka?',
      translation: 'Was ist das hier?',
      keywords: ['question', 'chapter2']
    },
    {
      hiragana: 'それは とけい です。',
      romaji: 'Sore wa tokei desu.',
      translation: 'Das ist eine Uhr.',
      keywords: ['sentence', 'chapter2']
    },
    {
      hiragana: 'あれは だれの かばん ですか？',
      romaji: 'Are wa dare no kaban desu ka?',
      translation: 'Wem gehört diese Tasche dort drüben?',
      keywords: ['question', 'chapter2']
    },
    {
      hiragana: 'これは わたしの さいふ です。',
      romaji: 'Kore wa watashi no saifu desu.',
      translation: 'Das ist mein Portemonnaie.',
      keywords: ['sentence', 'chapter2']
    },
    {
      hiragana: 'この ほん は いくら ですか？',
      romaji: 'Kono hon wa ikura desu ka?',
      translation: 'Wie viel kostet dieses Buch?',
      keywords: ['question', 'chapter2']
    },
    {
      hiragana: 'それは せんえん です。',
      romaji: 'Sore wa sen en desu.',
      translation: 'Das kostet 1000 Yen.',
      keywords: ['sentence', 'chapter2']
    },
    {
      hiragana: 'メニュー を ください。',
      romaji: 'Menyū o kudasai.',
      translation: 'Bitte geben Sie mir das Menü.',
      keywords: ['sentence', 'chapter2']
    },
    {
      hiragana: 'すみません、ハンバーガー は いくら ですか？',
      romaji: 'Sumimasen, hanbāgā wa ikura desu ka?',
      translation: 'Entschuldigung, wie viel kostet der Hamburger?',
      keywords: ['question', 'chapter2']
    },
    {
      hiragana: 'その コーヒー を おねがいします。',
      romaji: 'Sono kōhī o onegai shimasu.',
      translation: 'Diesen Kaffee bitte.',
      keywords: ['sentence', 'chapter2']
    },
    {
      hiragana: 'じゃあ、その ほん を ください。',
      romaji: 'Jā, sono hon o kudasai.',
      translation: 'Dann nehme ich dieses Buch.',
      keywords: ['sentence', 'chapter2']
    },
    {
      hiragana: 'どの くつ が あなたの ですか？',
      romaji: 'Dono kutsu ga anata no desu ka?',
      translation: 'Welche Schuhe gehören dir?',
      keywords: ['question', 'chapter2']
    },
    {
      hiragana: 'あの とけい は わたしの です。',
      romaji: 'Ano tokei wa watashi no desu.',
      translation: 'Diese Uhr dort drüben gehört mir.',
      keywords: ['sentence', 'chapter2']
    },
    {
      hiragana: 'たけしさん の さいふ は どれ ですか？',
      romaji: 'Takeshi-san no saifu wa dore desu ka?',
      translation: 'Welches ist Takeshis Portemonnaie?',
      keywords: ['question', 'chapter2']
    },
    {
      hiragana: 'これは にほんの くるま です。',
      romaji: 'Kore wa Nihon no kuruma desu.',
      translation: 'Das ist ein Auto aus Japan.',
      keywords: ['sentence', 'chapter2']
    },
    {
      hiragana: 'どこで ひるごはん を たべますか？',
      romaji: 'Doko de hirugohan o tabemasu ka?',
      translation: 'Wo isst du zu Mittag?',
      keywords: ['question', 'chapter2']
    },
    {
      hiragana: 'わたしは きっさてん で コーヒー を のみます。',
      romaji: 'Watashi wa kissaten de kōhī o nomimasu.',
      translation: 'Ich trinke Kaffee im Café.',
      keywords: ['sentence', 'chapter2']
    },
    {
      hiragana: 'すみません、トイレ は どこ ですか？',
      romaji: 'Sumimasen, toire wa doko desu ka?',
      translation: 'Entschuldigung, wo ist die Toilette?',
      keywords: ['question', 'chapter2']
    },
    {
      hiragana: 'デパート は あそこ です。',
      romaji: 'Depāto wa asoko desu.',
      translation: 'Das Kaufhaus ist dort drüben.',
      keywords: ['sentence', 'chapter2']
    },
    {
      hiragana: 'きょう は なんようび ですか？',
      romaji: 'Kyō wa nanyōbi desu ka?',
      translation: 'Welcher Wochentag ist heute?',
      keywords: ['question', 'chapter2']
    },
    {
      hiragana: 'きょう は げつようび です。',
      romaji: 'Kyō wa getsuyōbi desu.',
      translation: 'Heute ist Montag.',
      keywords: ['sentence', 'chapter2']
    },
    {
      hiragana: 'これは たなかさん の ほん ですか？',
      romaji: 'Kore wa Tanaka-san no hon desu ka?',
      translation: 'Gehört dieses Buch Tanaka?',
      keywords: ['question', 'chapter2']
    },
    {
      hiragana: 'いいえ、ちがいます。それは わたしの ほん です。',
      romaji: 'Iie, chigaimasu. Sore wa watashi no hon desu.',
      translation: 'Nein, das ist nicht richtig. Das ist mein Buch.',
      keywords: ['sentence', 'chapter2']
    },
    {
      hiragana: 'じゃあ、どの ほん が たなかさん の ですか？',
      romaji: 'Jā, dono hon ga Tanaka-san no desu ka?',
      translation: 'Dann, welches Buch gehört Tanaka?',
      keywords: ['question', 'chapter2']
    },
    {
      hiragana: 'たなかさん の ほん は あの ほん です。',
      romaji: 'Tanaka-san no hon wa ano hon desu.',
      translation: 'Tanakas Buch ist das Buch dort drüben.',
      keywords: ['sentence', 'chapter2']
    },
    {
      hiragana: 'これは にく じゃない です。',
      romaji: 'Kore wa niku janai desu.',
      translation: 'Das ist kein Fleisch.',
      keywords: ['sentence', 'chapter2']
    },
    {
      hiragana: 'すみません、それは さかな ですか？',
      romaji: 'Sumimasen, sore wa sakana desu ka?',
      translation: 'Entschuldigung, ist das Fisch?',
      keywords: ['question', 'chapter2']
    },
    {
      hiragana: 'いいえ、やさい です。',
      romaji: 'Iie, yasai desu.',
      translation: 'Nein, das ist Gemüse.',
      keywords: ['sentence', 'chapter2']
    },
    {
      hiragana: 'この ていしょく は なんですか？',
      romaji: 'Kono teishoku wa nan desu ka?',
      translation: 'Was ist dieses Menü?',
      keywords: ['question', 'chapter2']
    },
    {
      hiragana: 'これは さかな の ていしょく です。',
      romaji: 'Kore wa sakana no teishoku desu.',
      translation: 'Das ist das Fisch-Menü.',
      keywords: ['sentence', 'chapter2']
    },
    {
      hiragana: 'すみません、どの カレー が いちばん おいしい ですか？',
      romaji: 'Sumimasen, dono karē ga ichiban oishii desu ka?',
      translation: 'Entschuldigung, welches Curry ist am leckersten?',
      keywords: ['question', 'chapter2']
    },
    {
      hiragana: 'その カレー が いちばん おいしい です。',
      romaji: 'Sono karē ga ichiban oishii desu.',
      translation: 'Dieses Curry ist am leckersten.',
      keywords: ['sentence', 'chapter2']
    },
    {
      hiragana: 'この さかな は いくら ですか？',
      romaji: 'Kono sakana wa ikura desu ka?',
      translation: 'Wie viel kostet dieser Fisch?',
      keywords: ['question', 'chapter2']
    },
    {
      hiragana: 'あの コーヒー は いくら ですか？',
      romaji: 'Ano kōhī wa ikura desu ka?',
      translation: 'Wie viel kostet dieser Kaffee dort drüben?',
      keywords: ['question', 'chapter2']
    },
    {
      hiragana: 'わたし の いえ は どこ ですか？',
      romaji: 'Watashi no ie wa doko desu ka?',
      translation: 'Wo ist mein Haus?',
      keywords: ['question', 'chapter2']
    },
    {
      hiragana: 'その くつ は たかい です。',
      romaji: 'Sono kutsu wa takai desu.',
      translation: 'Diese Schuhe sind teuer.',
      keywords: ['sentence', 'chapter2']
    },
    {
      hiragana: 'あの パン は やすい です。',
      romaji: 'Ano pan wa yasui desu.',
      translation: 'Dieses Brot dort drüben ist billig.',
      keywords: ['sentence', 'chapter2']
    },
    {
      hiragana: 'この しゃしん は たかい ですか？',
      romaji: 'Kono shashin wa takai desu ka?',
      translation: 'Ist dieses Foto teuer?',
      keywords: ['question', 'chapter2']
    },
    {
      hiragana: 'すみません、これは なんの ざっし ですか？',
      romaji: 'Sumimasen, kore wa nan no zasshi desu ka?',
      translation: 'Entschuldigung, was für eine Zeitschrift ist das?',
      keywords: ['question', 'chapter2']
    },
    {
      hiragana: 'これは にほん の ザッシ です。',
      romaji: 'Kore wa Nihon no zasshi desu.',
      translation: 'Das ist eine japanische Zeitschrift.',
      keywords: ['sentence', 'chapter2']
    },
    {
      hiragana: 'すみません、いま なんじ ですか？',
      romaji: 'Sumimasen, ima nanji desu ka?',
      translation: 'Entschuldigung, wie spät ist es jetzt?',
      keywords: ['question', 'chapter2']
    },
    {
      hiragana: 'いま ごご さんじ です。',
      romaji: 'Ima gogo sanji desu.',
      translation: 'Es ist jetzt 15:00 Uhr (nachmittags).',
      keywords: ['sentence', 'chapter2']
    },
    {
      hiragana: 'レストラン は なんじ から なんじ まで ですか？',
      romaji: 'Resutoran wa nanji kara nanji made desu ka?',
      translation: 'Von wann bis wann ist das Restaurant geöffnet?',
      keywords: ['question', 'chapter2']
    },
    {
      hiragana: 'レストラン は ごぜん じゅうじ から ごご くじ まで です。',
      romaji: 'Resutoran wa gozen jūji kara gogo kuji made desu.',
      translation: 'Das Restaurant ist von 10 Uhr morgens bis 9 Uhr abends geöffnet.',
      keywords: ['sentence', 'chapter2']
    }
  ]
}))
