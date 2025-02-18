import { create } from 'zustand'

export interface kanjiStore {
  kanji: kanji[]
}

export const useKanjiStore = create<kanjiStore>((set, get) => ({
  kanji: [
    { kanji: '一', hiragana: 'いち', meaning: 'one', romaji: 'ichi' },
    { kanji: '二', hiragana: 'に', meaning: 'two', romaji: 'ni' },
    { kanji: '三', hiragana: 'さん', meaning: 'three', romaji: 'san' },
    { kanji: '四', hiragana: 'し/よん', meaning: 'four', romaji: 'shi/yon' },
    { kanji: '五', hiragana: 'ご', meaning: 'five', romaji: 'go' },
    { kanji: '六', hiragana: 'ろく', meaning: 'six', romaji: 'roku' },
    { kanji: '七', hiragana: 'しち/なな', meaning: 'seven', romaji: 'shichi/nana' },
    { kanji: '八', hiragana: 'はち', meaning: 'eight', romaji: 'hachi' },
    { kanji: '九', hiragana: 'きゅう/く', meaning: 'nine', romaji: 'kyuu/ku' },
    { kanji: '十', hiragana: 'じゅう', meaning: 'ten', romaji: 'juu' },
    { kanji: '百', hiragana: 'ひゃく', meaning: 'hundred', romaji: 'hyaku' },
    { kanji: '千', hiragana: 'せん', meaning: 'thousand', romaji: 'sen' },
    { kanji: '万', hiragana: 'まん', meaning: 'ten thousand', romaji: 'man' },
    { kanji: '円', hiragana: 'えん', meaning: 'yen, circle', romaji: 'en' },
    { kanji: '時', hiragana: 'じ', meaning: 'time, hour', romaji: 'ji' },
    { kanji: '日', hiragana: 'にち/ひ', meaning: 'day, sun', romaji: 'nichi/hi' },
    { kanji: '月', hiragana: 'げつ/つき', meaning: 'month, moon', romaji: 'getsu/tsuki' },
    { kanji: '火', hiragana: 'か/ひ', meaning: 'fire', romaji: 'ka/hi' },
    { kanji: '水', hiragana: 'すい/みず', meaning: 'water', romaji: 'sui/mizu' },
    { kanji: '木', hiragana: 'もく/き', meaning: 'tree, wood', romaji: 'moku/ki' },
    { kanji: '金', hiragana: 'きん/かね', meaning: 'gold, money', romaji: 'kin/kane' },
    { kanji: '土', hiragana: 'ど/つち', meaning: 'earth, soil', romaji: 'do/tsuchi' },
    { kanji: '曜', hiragana: 'よう', meaning: 'weekday', romaji: 'you' },
    { kanji: '上', hiragana: 'じょう/うえ', meaning: 'up, above', romaji: 'jou/ue' },
    { kanji: '下', hiragana: 'か/した', meaning: 'down, below', romaji: 'ka/shita' },
    { kanji: '左', hiragana: 'さ/ひだり', meaning: 'left', romaji: 'sa/hidari' },
    { kanji: '右', hiragana: 'う/みぎ', meaning: 'right', romaji: 'u/migi' },
    { kanji: '中', hiragana: 'ちゅう/なか', meaning: 'middle, inside', romaji: 'chuu/naka' },
    { kanji: '大', hiragana: 'だい/おお', meaning: 'big, large', romaji: 'dai/oo' },
    { kanji: '小', hiragana: 'しょう/ちい', meaning: 'small', romaji: 'shou/chii' },
    { kanji: '本', hiragana: 'ほん', meaning: 'book, origin', romaji: 'hon' },
    { kanji: '先', hiragana: 'せん', meaning: 'before, ahead', romaji: 'sen' },
    { kanji: '生', hiragana: 'せい', meaning: 'life, birth', romaji: 'sei' },
    { kanji: '学', hiragana: 'がく', meaning: 'study, learning', romaji: 'gaku' },
    { kanji: '校', hiragana: 'こう', meaning: 'school', romaji: 'kou' },
    { kanji: '友', hiragana: 'とも', meaning: 'friend', romaji: 'tomo' },
    { kanji: '父', hiragana: 'ちち', meaning: 'father', romaji: 'chichi' },
    { kanji: '母', hiragana: 'はは', meaning: 'mother', romaji: 'haha' },
    { kanji: '年', hiragana: 'ねん', meaning: 'year', romaji: 'nen' },
    { kanji: '毎', hiragana: 'まい', meaning: 'every', romaji: 'mai' },
    { kanji: '何', hiragana: 'なに/なん', meaning: 'what', romaji: 'nani/nan' },
    { kanji: '人', hiragana: 'ひと', meaning: 'person', romaji: 'hito' },
    { kanji: '今', hiragana: 'いま', meaning: 'now', romaji: 'ima' },
    { kanji: '休', hiragana: 'やす', meaning: 'rest', romaji: 'yasu' },
    { kanji: '会', hiragana: 'かい', meaning: 'meet', romaji: 'kai' },
    { kanji: '会社', hiragana: 'かいしゃ', meaning: 'company', romaji: 'kaisha' },
    { kanji: '行', hiragana: 'い', meaning: 'go', romaji: 'i' },
    { kanji: '来', hiragana: 'く', meaning: 'come', romaji: 'ku' },
    { kanji: '見', hiragana: 'み', meaning: 'see', romaji: 'mi' },
    { kanji: '聞', hiragana: 'き', meaning: 'hear', romaji: 'ki' },
    { kanji: '話', hiragana: 'はな', meaning: 'speak', romaji: 'hana' },
    { kanji: '買', hiragana: 'か', meaning: 'buy', romaji: 'ka' },
    { kanji: '読', hiragana: 'よ', meaning: 'read', romaji: 'yo' },
    { kanji: '書', hiragana: 'か', meaning: 'write', romaji: 'ka' },
    { kanji: '出', hiragana: 'しゅつ/で', meaning: 'exit', romaji: 'shutsu/de' },
    { kanji: '入', hiragana: 'にゅう/い', meaning: 'enter', romaji: 'nyuu/i' },
    { kanji: '車', hiragana: 'しゃ/くるま', meaning: 'car', romaji: 'sha/kuruma' },
    { kanji: '電', hiragana: 'でん', meaning: 'electricity', romaji: 'den' },
    { kanji: '門', hiragana: 'もん', meaning: 'gate', romaji: 'mon' },
    { kanji: '駅', hiragana: 'えき', meaning: 'station', romaji: 'eki' },
    { kanji: '国', hiragana: 'こく', meaning: 'country', romaji: 'koku' },
    { kanji: '外', hiragana: 'がい/そと', meaning: 'outside', romaji: 'gai/soto' },
    { kanji: '前', hiragana: 'まえ', meaning: 'before, front', romaji: 'mae' },
    { kanji: '後', hiragana: 'ご/あと', meaning: 'after, behind', romaji: 'go/ato' },
    { kanji: '東', hiragana: 'とう', meaning: 'east', romaji: 'tou' },
    { kanji: '西', hiragana: 'せい', meaning: 'west', romaji: 'sei' },
    { kanji: '南', hiragana: 'なん', meaning: 'south', romaji: 'nan' },
    { kanji: '北', hiragana: 'ほく', meaning: 'north', romaji: 'hoku' },
    { kanji: '午', hiragana: 'ご', meaning: 'noon', romaji: 'go' },
    { kanji: '後', hiragana: 'あと', meaning: 'after', romaji: 'ato' },
    { kanji: '名', hiragana: 'な', meaning: 'name', romaji: 'na' },
    { kanji: '白', hiragana: 'しろ', meaning: 'white', romaji: 'shiro' },
    { kanji: '黒', hiragana: 'くろ', meaning: 'black', romaji: 'kuro' },
    { kanji: '赤', hiragana: 'あか', meaning: 'red', romaji: 'aka' },
    { kanji: '青', hiragana: 'あお', meaning: 'blue', romaji: 'ao' },
    { kanji: '新', hiragana: 'しん', meaning: 'new', romaji: 'shin' },
    { kanji: '古', hiragana: 'ふる', meaning: 'old', romaji: 'furu' },
    { kanji: '長', hiragana: 'なが', meaning: 'long', romaji: 'naga' },
    { kanji: '短', hiragana: 'みじか', meaning: 'short', romaji: 'mijika' },
    { kanji: '高', hiragana: 'たか', meaning: 'tall, expensive', romaji: 'taka' },
    { kanji: '低', hiragana: 'ひく', meaning: 'low', romaji: 'hiku' },
    { kanji: '多', hiragana: 'おお', meaning: 'many', romaji: 'oo' },
    { kanji: '少', hiragana: 'すく/すこ', meaning: 'few, little', romaji: 'suku/suko' },
    { kanji: '早', hiragana: 'はや', meaning: 'early', romaji: 'haya' },
    { kanji: '遅', hiragana: 'おそ', meaning: 'late', romaji: 'oso' },
    { kanji: '明', hiragana: 'あか', meaning: 'bright', romaji: 'aka' },
    { kanji: '暗', hiragana: 'くら', meaning: 'dark', romaji: 'kura' },
    { kanji: '遠', hiragana: 'とお', meaning: 'far', romaji: 'too' },
    { kanji: '近', hiragana: 'ちか', meaning: 'near', romaji: 'chika' },
    { kanji: '強', hiragana: 'つよ', meaning: 'strong', romaji: 'tsuyo' },
    { kanji: '弱', hiragana: 'よわ', meaning: 'weak', romaji: 'yowa' },
    { kanji: '広', hiragana: 'ひろ', meaning: 'wide', romaji: 'hiro' },
    { kanji: '狭', hiragana: 'せま', meaning: 'narrow', romaji: 'sema' },
    { kanji: '重', hiragana: 'おも', meaning: 'heavy', romaji: 'omo' },
    { kanji: '軽', hiragana: 'かる', meaning: 'light (weight)', romaji: 'karu' },
    { kanji: '暑', hiragana: 'あつ', meaning: 'hot (weather)', romaji: 'atsu' },
    { kanji: '寒', hiragana: 'さむ', meaning: 'cold (weather)', romaji: 'samu' },
    { kanji: '熱', hiragana: 'ねつ', meaning: 'heat', romaji: 'netsu' },
    { kanji: '冷', hiragana: 'つめ', meaning: 'cold (to the touch)', romaji: 'tsume' },
    { kanji: '天', hiragana: 'てん', meaning: 'heaven, sky', romaji: 'ten' },
    { kanji: '空', hiragana: 'そら', meaning: 'sky', romaji: 'sora' },
    { kanji: '海', hiragana: 'うみ', meaning: 'sea', romaji: 'umi' },
    { kanji: '山', hiragana: 'やま', meaning: 'mountain', romaji: 'yama' },
    { kanji: '川', hiragana: 'かわ', meaning: 'river', romaji: 'kawa' },
    { kanji: '森', hiragana: 'もり', meaning: 'forest', romaji: 'mori' },
    { kanji: '林', hiragana: 'はやし', meaning: 'woods', romaji: 'hayashi' },
    { kanji: '池', hiragana: 'いけ', meaning: 'pond', romaji: 'ike' },
    { kanji: '花', hiragana: 'はな', meaning: 'flower', romaji: 'hana' },
    { kanji: '草', hiragana: 'くさ', meaning: 'grass', romaji: 'kusa' },
    { kanji: '虫', hiragana: 'むし', meaning: 'insect', romaji: 'mushi' },
    { kanji: '犬', hiragana: 'いぬ', meaning: 'dog', romaji: 'inu' },
    { kanji: '猫', hiragana: 'ねこ', meaning: 'cat', romaji: 'neko' }
  ]
}))
