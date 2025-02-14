import { Center, Space, Text } from '@mantine/core'
import { ReactElement, useEffect } from 'react'

import { PointsStore, usePointsStore } from '@/utils/stores/points'

interface StatisticsProps {}

export const Statistics: (props: StatisticsProps) => ReactElement = (props: StatisticsProps): ReactElement => {
  // const { getData, MauricePkt, SinaPkt, MauriceWght, SinaWght, WhoImA }: PointsStore = usePointsStore((state: PointsStore) => state)

  // useEffect(() => {
  //   getData()
  // }, [])

  return (
    <Center h={100}>
      <Text fw={500} size="xl">
        {WhoImA ? MauriceWght + 'kg' : SinaWght + 'kg'}
      </Text>
      <Space w="sm" />
      <Text fw={500} size="xl">
        {WhoImA ? MauricePkt + 'pkt' : SinaPkt + 'pkt'}
      </Text>
    </Center>
  )
}
