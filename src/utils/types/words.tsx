export interface word {
  hiragana: string
  romaji: string
  kanji: string
  definition: string
  keywords: string[]
}

export interface sentence {
  japanese: string
  hiragana: string
  romaji: string
  translation: string
  keywords: string[]
  answer: sentence | null
  context: string | null
}
export interface kanji {
  kanji: string
  hiragana: string
  meaning: string
}
