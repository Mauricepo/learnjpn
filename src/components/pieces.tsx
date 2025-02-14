import { Blockquote, Center, Space, Text } from '@mantine/core'
import { ReactElement } from 'react'

import { japaneseStore, useJapaneseStore } from '@/utils/stores/japanese'

interface SDragDropProps {}

export const DragDrop: (props: DragDropProps) => ReactElement = (props: DragDropProps): ReactElement => {
  const { words }: japaneseStore = useJapaneseStore((state: japaneseStore) => state)

  const addActivity = (): void => {}

  return (
    <Center h={100}>
      <Blockquote color="blue" cite="– Forrest Gump" mt="xl">
        <Text fw={500} size="xl">
          Test
        </Text>
      </Blockquote>

      <Space w="sm" />
      <Text fw={500} size="xl">
        Test
      </Text>
    </Center>
  )
}
