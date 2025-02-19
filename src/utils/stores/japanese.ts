import { create } from 'zustand'
import { sentence, word } from '../types/words'

export interface japaneseStore {
  words: word[]
  sentences: sentence[]
}

export const useJapaneseStore = create<japaneseStore>((set, get) => ({
  words: [
    {
      hiragana: 'えいが',
      romaji: 'eiga',
      definition: 'movie',
      keywords: ['nomen', 'cinema', 'Chapter3'],
      kanji: '映画'
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
