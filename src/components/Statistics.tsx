import { Center, Space, Text } from '@mantine/core'
import { ReactElement } from 'react'

interface StatisticsProps {}

export const Statistics: (props: StatisticsProps) => ReactElement = (props: StatisticsProps): ReactElement => {
  return (
    <Center h={100}>
      <Text fw={500} size="xl">
        114Kg
      </Text>
      <Space w="sm" />
      <Text fw={500} size="xl">
        1200Pk
      </Text>
    </Center>
  )
}
