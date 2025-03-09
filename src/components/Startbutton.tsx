import { Center } from '@mantine/core'
import { ReactElement, useState } from 'react'
import { SelectKanji } from './kaishi'
import { SelectWord } from './select'
import { SelectSentence } from './sentences'

interface PersonbuttonProps {}

export const Startbutton: (props: PersonbuttonProps) => ReactElement = (props: PersonbuttonProps): ReactElement => {
  const [voc, setVoc] = useState<boolean>(false)
  const [sen, setSen] = useState<boolean>(false)
  const [kanji, setKanji] = useState<boolean>(false)
  const [chapter, setChapter] = useState<number>(0)
  const [chooseChapter, setChooseChapter] = useState<boolean>(false)
  const [correct, setCorrect] = useState<boolean>(false)
  return (
    <Center h={100}>
      {!voc && !sen && !kanji && (
        <>
          <h1>Wähle eine Übung</h1>
          <button onClick={() => setVoc(true)}>Vokabeln üben</button>
          <button onClick={() => setSen(true)}>Sätze üben</button>
          <button onClick={() => setKanji(true)}>Kanji üben</button>
        </>
      )}
      {(voc || sen || kanji) && chapter == 0 && (
        <>
          <h1>Wähle ein Kapitel</h1>
          <button onClick={() => setChapter(99)}>Alle</button>
          <button onClick={() => setChapter(1)}>Chapter 1</button>
          <button onClick={() => setChapter(2)}>Chapter 2</button>
          <button onClick={() => setChapter(3)}>Chapter 3</button>
        </>
      )}

      {voc && chapter > 0 && <SelectWord></SelectWord>}
      {sen && chapter > 0 && <SelectSentence></SelectSentence>}
      {kanji && chapter > 0 && <SelectKanji></SelectKanji>}
    </Center>
  )
}
