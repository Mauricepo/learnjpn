import { Blockquote, Button, Card, Center, Grid, Group, MantineProvider, SelectProps, Space, Text, Tooltip } from '@mantine/core'
import { ReactElement, useEffect, useState } from 'react'

import { japaneseStore, useJapaneseStore } from '@/utils/stores/japanese'
import { sentence } from '@/utils/types/words'
import { notifications, Notifications } from '@mantine/notifications'
interface SDragDropProps {}

export const SelectSentence: (props: SelectProps) => ReactElement = (props: SelectProps): ReactElement => {
  const { sentences }: japaneseStore = useJapaneseStore((state: japaneseStore) => state)
  const [randomSentece, setRandomSentece] = useState<sentence>()
  const [answer, setAnswer] = useState<string>('')
  const [start, setStart] = useState<boolean>(false)
  const [choosableWords, setChoosableWords] = useState<string[]>([])

  useEffect(() => {
    if (!start) {
      setRandomSentence()
    }
    setStart(true)
  }, [])

  const setRandomSentence = (): void => {
    const newRandomSentence = sentences[Math.floor(Math.random() * sentences.length)]
    setRandomSentece(newRandomSentence)

    const words = [...newRandomSentence.translation.split(' ')]
    const tempSentence = sentences[Math.floor(Math.random() * sentences.length)]
    words.push(...tempSentence.translation.split(' '))

    const shuffledWords = words.sort(() => Math.random() - 0.5)
    setChoosableWords(shuffledWords)
    console.log(shuffledWords)
  }

  const addWord = (word: string): void => {
    setAnswer(answer + ' ' + word)
  }

  const resetWord = (): void => {
    setAnswer('')
  }

  const checkWord = (): void => {
    const test1 = randomSentece?.translation.replace(/\s/g, '')
    const test2 = answer.replace(/\s/g, '')

    if (test1 == test2) {
      notifications.show({
        position: 'bottom-right',
        color: 'green',
        title: 'Richtig',
        message: 'Korrekt, gut gemacht 🌟'
      })
      setAnswer('')
      setRandomSentence()
    } else {
      notifications.show({
        position: 'bottom-right',
        color: 'red',
        title: 'Falsch',
        message: 'Leider falsch, versuche es erneut 🛑'
      })
    }
  }

  return (
    <MantineProvider>
      <Card style={{ paddingTop: '700px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Card.Section component={Grid} inheritPadding>
          <Grid.Col span={{ base: 12, md: 6 }} style={{ display: 'flex', justifyContent: 'center' }}>
            <Blockquote color="blue" mt="xl">
              <Text size="sm">{randomSentece?.translation}</Text>
            </Blockquote>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }} style={{ display: 'flex', justifyContent: 'center' }}>
            <Blockquote color="blue" mt="xl">
              <Text size="sm">{randomSentece?.romaji}</Text>
              <Text size="sm">{randomSentece?.hiragana}</Text>
            </Blockquote>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }} style={{ display: 'flex', justifyContent: 'center' }}>
            <Blockquote color="blue" mt="xl">
              <Group>
                {answer.split(' ').map((word: string, index: number) => (
                  <Text key={index} size="sm">
                    {word}
                  </Text>
                ))}
              </Group>
            </Blockquote>
          </Grid.Col>
        </Card.Section>
        <Space></Space>
        <Space h="xl" />
        <Card.Section component={Grid} inheritPadding>
          <Center>
            <Grid.Col span={{ base: 10, md: 12 }} style={{ display: 'flex', justifyContent: 'center' }}>
              <Group>
                {choosableWords.map((word, index) => (
                  <Tooltip label={word} key={index}>
                    <Button onClick={() => addWord(word)}>{word}</Button>
                  </Tooltip>
                ))}
              </Group>
            </Grid.Col>
          </Center>
          <Group>
            <button onClick={() => resetWord()}>Reset</button>
            <button onClick={() => checkWord()}>Prüfen</button>
          </Group>
        </Card.Section>
      </Card>
      <Notifications />
    </MantineProvider>
  )
}
