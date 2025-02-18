export interface word {
  hiragana: string
  romaji: string
  kanji: string
  definition: string
  keywords: string[]
}

export interface sentence {
  hiragana: string
  romaji: string
  translation: string
  keywords: string[]
}
export interface kanji {
  kanji: string
  hiragana: string
  meaning: string
  romaji: string
}
