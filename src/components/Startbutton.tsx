import { Center } from '@mantine/core'
import { ReactElement, useState } from 'react'
import { SelectKanji } from './kanji'
import { SelectWord } from './select'
import { SelectSentence } from './sentences'

interface PersonbuttonProps {}

export const Startbutton: (props: PersonbuttonProps) => ReactElement = (props: PersonbuttonProps): ReactElement => {
  const [voc, setVoc] = useState<boolean>(false)
  const [sen, setSen] = useState<boolean>(false)
  const [kanji, setKanji] = useState<boolean>(false)

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
      {voc && <SelectWord></SelectWord>}
      {sen && <SelectSentence></SelectSentence>}
      {kanji && <SelectKanji></SelectKanji>}
    </Center>
  )
}
