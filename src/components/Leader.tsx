import { Center, Image, Space, Text } from '@mantine/core'
import { ReactElement, useEffect } from 'react'

import { PointsStore, usePointsStore } from '@/utils/stores/points'

interface LeaderProps {}

export const Leader: (props: LeaderProps) => ReactElement = (props: LeaderProps): ReactElement => {
  const { getData, MauricePkt, SinaPkt, MauriceWght, SinaWght, WhoImA }: PointsStore = usePointsStore((state: PointsStore) => state)

  useEffect(() => {
    getData()
  }, [])

  return (
    <Center h={100}>
      <Text fw={500} size="xl">
        {MauricePkt > SinaPkt ? 'Maurice führt!' : 'Sina führt!'}
      </Text>
      <Space w="sm" />
      <Image style={{ marginBottom: '10px' }} radius="md" h={30} w="auto" fit="contain" src="crown.png" alt="" />
      <Space w="sm" />
    </Center>
  )
}
