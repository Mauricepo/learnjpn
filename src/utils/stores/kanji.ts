import { create } from 'zustand'
import { kanji } from '../types/words'

export interface kanjiStore {
  kanji: kanji[]
}

export const useKanjiStore = create<kanjiStore>((set, get) => ({
  kanji: [
    { kanji: 'あなた', hiragana: 'あなた', meaning: "you (usually when one doesn't know the person)" },
    { kanji: '彼', hiragana: 'かれ', meaning: 'he, him' },
    { kanji: '好き', hiragana: 'すき', meaning: 'like, fond of' },
    { kanji: 'いい', hiragana: 'いい', meaning: 'good' },
    { kanji: '勉強', hiragana: 'べんきょう', meaning: 'study' },
    { kanji: '何', hiragana: 'なに', meaning: 'what' },
    { kanji: 'どれ', hiragana: 'どれ', meaning: 'which, what' },
    { kanji: '毎日', hiragana: 'まいにち', meaning: 'every day' },
    { kanji: '兄', hiragana: 'あに', meaning: 'older brother' },
    { kanji: 'いる', hiragana: 'いる', meaning: 'have, exist (animate)' },
    { kanji: 'ある', hiragana: 'ある', meaning: 'have, exist (inanimate)' },
    { kanji: 'あまり', hiragana: 'あまり', meaning: '(not) very, (not) much' },
    { kanji: '今', hiragana: 'いま', meaning: 'now' },
    { kanji: '時間', hiragana: 'じかん', meaning: 'time, hour' },
    { kanji: '無い', hiragana: 'ない', meaning: 'to not be' },
    { kanji: 'あの', hiragana: 'あの', meaning: 'that one there' },
    { kanji: 'どの', hiragana: 'どの', meaning: 'which one' },
    { kanji: '見る', hiragana: 'みる', meaning: 'see, look at' },
    { kanji: '全然', hiragana: 'ぜんぜん', meaning: '(not) at all' },
    { kanji: '面白い', hiragana: 'おもしろい', meaning: 'interesting, amusing' },
    { kanji: 'する', hiragana: 'する', meaning: 'do, make' },
    { kanji: 'なる', hiragana: 'なる', meaning: 'become, result in' },
    { kanji: '先生', hiragana: 'せんせい', meaning: 'teacher' },
    { kanji: 'ください', hiragana: 'ください', meaning: 'please give..., please do...' },
    { kanji: '名前', hiragana: 'なまえ', meaning: 'name' },
    { kanji: '教える', hiragana: 'おしえる', meaning: 'teach, tell' },
    { kanji: 'あそこ', hiragana: 'あそこ', meaning: 'over there' },
    { kanji: '置く', hiragana: 'おく', meaning: 'put, place' },
    { kanji: '家', hiragana: 'いえ', meaning: 'house, home' },
    { kanji: '帰る', hiragana: 'かえる', meaning: 'return, go back' },
    { kanji: '話', hiragana: 'はなし', meaning: 'talk, story' },
    { kanji: '知る', hiragana: 'しる', meaning: 'know' },
    { kanji: '彼女', hiragana: 'かのじょ', meaning: 'she, her, girlfriend' },
    { kanji: 'ちゃん', hiragana: 'ちゃん', meaning: 'chan (diminutive honorific)' },
    { kanji: '日本', hiragana: 'にほん', meaning: 'Japan' },
    { kanji: '学校', hiragana: 'がっこう', meaning: 'school' },
    { kanji: '行く', hiragana: 'いく', meaning: 'go' },
    { kanji: '明日', hiragana: 'あした', meaning: 'tomorrow' },
    { kanji: '来る', hiragana: 'くる', meaning: 'come' },
    { kanji: 'また', hiragana: 'また', meaning: 'again, also' },
    { kanji: 'いつ', hiragana: 'いつ', meaning: 'when' },
    { kanji: '思う', hiragana: 'おもう', meaning: 'think' },
    { kanji: 'こう', hiragana: 'こう', meaning: 'like this' },
    { kanji: 'そう', hiragana: 'そう', meaning: 'in such manner' },
    { kanji: 'どう', hiragana: 'どう', meaning: 'how, what' },
    { kanji: '食べる', hiragana: 'たべる', meaning: 'eat' },
    { kanji: '飲む', hiragana: 'のむ', meaning: 'drink' },
    { kanji: '買う', hiragana: 'かう', meaning: 'buy' },
    { kanji: '書く', hiragana: 'かく', meaning: 'write' },
    { kanji: '読む', hiragana: 'よむ', meaning: 'read' },
    { kanji: '聞く', hiragana: 'きく', meaning: 'listen, hear' }
  ]
}))
