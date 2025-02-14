import { Blockquote, Button, Card, Center, Grid, Group, MantineProvider, SelectProps, Space, Text, Tooltip } from '@mantine/core'
import { ReactElement, useEffect, useState } from 'react'

import { japaneseStore, useJapaneseStore } from '@/utils/stores/japanese'
import { word } from '@/utils/types/words'
import { notifications, Notifications } from '@mantine/notifications'
interface SDragDropProps {}

export const SelectWord: (props: SelectProps) => ReactElement = (props: SelectProps): ReactElement => {
  const { words }: japaneseStore = useJapaneseStore((state: japaneseStore) => state)
  const [randomWord, setRandomWord] = useState<word>()
  const [answers, setAnswers] = useState<word[]>([])
  const [start, setStart] = useState<boolean>(false)

  useEffect(() => {
    if (!start) {
      newWord()
    }
    console.log('useEffect')
    setStart(true)
  }, [])

  const newWord = (): void => {
    const newRandomWord = words[Math.floor(Math.random() * words.length)]
    setRandomWord(newRandomWord)

    const newAnswers = new Set<word>()
    newAnswers.add(newRandomWord)

    while (newAnswers.size < 5) {
      newAnswers.add(words[Math.floor(Math.random() * words.length)])
    }

    setAnswers(Array.from(newAnswers).sort(() => Math.random() - 0.5))
  }

  const checkAnwster = (word: word): void => {
    if (word === randomWord) {
      notifications.show({
        title: 'Richtig',
        message: 'Korrekt, gut gemacht 🌟'
      })
      newWord()
    } else {
      notifications.show({
        title: 'Falsch',
        message: 'Leider falsch, versuche es erneut 🛑'
      })
    }
  }

  return (
    <MantineProvider>
      <Notifications />
      <Card style={{ paddingTop: '500px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Card.Section component={Grid} inheritPadding>
          <Grid.Col span={{ base: 12, md: 6 }} style={{ display: 'flex', justifyContent: 'center' }}>
            <Blockquote color="blue" mt="xl">
              <Text size="xl">{randomWord?.definition}</Text>
            </Blockquote>
          </Grid.Col>
        </Card.Section>
        <Space></Space>
        <Space h="xl" />
        <Card.Section component={Grid} inheritPadding>
          <Center>
            <Grid.Col span={{ base: 10, md: 12 }} style={{ display: 'flex', justifyContent: 'center' }}>
              <Group>
                {answers.map((answer, index) => (
                  <Tooltip label={answer.romaji} key={index}>
                    <Button onClick={() => checkAnwster(answer)}>{answer.hiragana}</Button>
                  </Tooltip>
                ))}
              </Group>
            </Grid.Col>
          </Center>
        </Card.Section>
      </Card>
    </MantineProvider>
  )
}
