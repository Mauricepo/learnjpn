// import { Blockquote, Button, Card, Center, Grid, Group, MantineProvider, SelectProps, Space, Text, Tooltip } from '@mantine/core'
// import { ReactElement, useEffect, useState } from 'react'

// import { kanjiStore, useKanjiStore } from '@/utils/stores/kanji'
// import { kanji } from '@/utils/types/words'
// import { notifications, Notifications } from '@mantine/notifications'
// interface SDragDropProps {}

// export const SelectKanji: (props: SelectProps) => ReactElement = (props: SelectProps): ReactElement => {
//   const { kanji }: kanjiStore = useKanjiStore((state: kanjiStore) => state)
//   const [randomkanji, setRandomkanji] = useState<kanji>()
//   const [answers, setAnswers] = useState<kanji[]>([])
//   const [start, setStart] = useState<boolean>(false)
//   const [correct, setCorrect] = useState<boolean>(false)

//   useEffect(() => {
//     if (!start) {
//       newkanji()
//     }
//     setStart(true)
//   }, [])

//   const newkanji = (): void => {
//     setCorrect(false)
//     const newRandomkanji = kanji[Math.floor(Math.random() * kanji.length)]
//     setRandomkanji(newRandomkanji)

//     const newAnswers = new Set<kanji>()
//     newAnswers.add(newRandomkanji)

//     while (newAnswers.size < 5) {
//       newAnswers.add(kanji[Math.floor(Math.random() * kanji.length)])
//     }

//     setAnswers(Array.from(newAnswers).sort(() => Math.random() - 0.5))
//   }

//   const checkAnwster = (kanji: kanji): void => {
//     if (kanji === randomkanji) {
//       setCorrect(true)
//     } else {
//       notifications.show({
//         position: 'bottom-center',
//         color: 'red',
//         title: 'Falsch',
//         message: 'Leider falsch, versuche es erneut 🛑'
//       })
//     }
//   }

// return (
// <MantineProvider>
//   <Card style={{ paddingTop: '500px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//     <Card.Section component={Grid} inheritPadding>
//       <Grid.Col span={{ base: 12, md: 12 }} style={{ display: 'flex', justifyContent: 'center' }}>
//         <Blockquote color="blue" mt="xl">
//           <Text size="xl">{randomkanji?.kanji}</Text>
//         </Blockquote>
//       </Grid.Col>
//     </Card.Section>
//     <Space></Space>
//     <Space h="xl" />
//     <Card.Section component={Grid} inheritPadding>
//       <Center>
//         <Grid.Col span={{ base: 12, md: 12 }} style={{ display: 'flex', justifyContent: 'center' }}>
//           <Group>
//             {answers.map((answer, index) => (
//               <Tooltip label={answer.romaji} key={index}>
//                 <Button color={answer === randomkanji && correct ? 'green' : 'blue'} onClick={() => checkAnwster(answer)}>
//                   {answer.meaning}
//                 </Button>
//               </Tooltip>
//             ))}
//           </Group>
//         </Grid.Col>
//       </Center>
//       <Grid.Col span={{ base: 12, md: 12 }} style={{ display: 'flex', justifyContent: 'center' }}>
//         <Center>{correct && <Button onClick={() => newkanji()}>Nächtes</Button>}</Center>
//       </Grid.Col>
//     </Card.Section>
//   </Card>
//   <Notifications />
// </MantineProvider>
//   )
// }
