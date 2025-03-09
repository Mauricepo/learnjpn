import { Blockquote, Button, Card, Center, Grid, Group, MantineProvider, SelectProps, Space, Text, TextInput } from '@mantine/core'
import { ReactElement, useEffect, useState } from 'react'

import { kanjiStore, useKanjiStore } from '@/utils/stores/kanji'
import { kanji } from '@/utils/types/words'
import { notifications, Notifications } from '@mantine/notifications'
import hepburn from 'hepburn'

interface SDragDropProps {}

export const SelectKanji: (props: SelectProps) => ReactElement = (props: SelectProps): ReactElement => {
  const { kanji }: kanjiStore = useKanjiStore((state: kanjiStore) => state)
  const [randomkanji, setRandomkanji] = useState<kanji>()
  const [start, setStart] = useState<boolean>(false)
  const [correct, setCorrect] = useState<boolean>(false)
  const [schreibweise, setSchreibweise] = useState<string>()
  const [meaning, setMeaning] = useState<string>()
  const [screibweiseWrong, setScreibweiseWrong] = useState<boolean>(false)
  const [meaningWrong, setMeaningWrong] = useState<boolean>(false)
  const [screibweiseRight, setScreibweiseRight] = useState<boolean>(false)
  const [meaningRight, setMeaningRight] = useState<boolean>(false)

  useEffect(() => {
    if (!start) {
      newkanji()
    }
    setStart(true)
  }, [])

  const newkanji = (): void => {
    setMeaningRight(false)
    setScreibweiseRight(false)
    setMeaningWrong(false)
    setScreibweiseWrong(false)
    setSchreibweise('')
    setMeaning('')
    const newRandomkanji = kanji[Math.floor(Math.random() * kanji.length)]
    setRandomkanji(newRandomkanji)
  }

  const checkSchreibweise = (): void => {
    if (schreibweise == randomkanji?.hiragana) {
      setScreibweiseRight(true)
    } else {
      notifications.show({
        position: 'bottom-center',
        color: 'red',
        title: 'Falsch',
        message: 'Leider falsch 🛑'
      })
      setScreibweiseWrong(true)
    }
  }

  const changeSchreibweise = (romaji: string): void => {
    if (!romaji.endsWith('m') && !romaji.endsWith('n')) {
      const convertedSchreibweise = hepburn.toHiragana(romaji)
      setSchreibweise(convertedSchreibweise)
    } else {
      if (romaji.endsWith('nn')) {
        const convertedSchreibweise = hepburn.toHiragana(romaji)
        setSchreibweise(convertedSchreibweise.slice(0, -1))
      } else {
        setSchreibweise(romaji)
      }
    }
  }

  const checkMeaning = (): void => {
    if (meaning?.toLowerCase().normalize() && randomkanji?.meaning.toLowerCase().normalize().includes(meaning)) {
      setMeaningRight(true)
    } else {
      notifications.show({
        position: 'bottom-center',
        color: 'red',
        title: 'Falsch',
        message: 'Leider falsch 🛑'
      })
      setMeaningWrong(true)
    }
  }

  return (
    <MantineProvider>
      <Card style={{ paddingTop: '500px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Card.Section component={Grid} inheritPadding>
          <Grid.Col span={{ base: 12, md: 12 }} style={{ display: 'flex', justifyContent: 'center' }}>
            <Blockquote color="blue" mt="xl">
              <Text size="xl">{randomkanji?.kanji}</Text>
              {screibweiseWrong && <Text size="xl">{randomkanji?.hiragana}</Text>}
              {meaningWrong && <Text size="xl">{randomkanji?.meaning}</Text>}
            </Blockquote>
          </Grid.Col>
        </Card.Section>
        <Space></Space>
        <Space h="xl" />
        <Card.Section component={Grid} inheritPadding>
          <Grid.Col span={{ base: 12, md: 12 }} style={{ display: 'flex', justifyContent: 'center' }}>
            <Group align="end">
              <TextInput value={schreibweise} onChange={(event) => changeSchreibweise(event.currentTarget.value)} label="Schreibweise" />
              <Button color={screibweiseRight ? 'green' : 'blue'} onClick={() => checkSchreibweise()}>
                +
              </Button>
            </Group>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 12 }} style={{ display: 'flex', justifyContent: 'center' }}>
            <Group align="end">
              <TextInput value={meaning} onChange={(event) => setMeaning(event.currentTarget.value)} label="Bedeutung" />
              <Button color={meaningRight ? 'green' : 'blue'} onClick={() => checkMeaning()}>
                +
              </Button>
            </Group>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 12 }} style={{ display: 'flex', justifyContent: 'center' }}>
            <Center>{screibweiseRight && meaningRight && <Button onClick={() => newkanji()}>Nächtes</Button>}</Center>
          </Grid.Col>
        </Card.Section>
      </Card>
      <Notifications />
    </MantineProvider>
  )
}
