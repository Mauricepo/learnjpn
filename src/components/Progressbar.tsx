import { PointsStore, usePointsStore } from '@/utils/stores/points'
import { Progress } from '@mantine/core'
import { ReactElement } from 'react'

interface ProgressbarProps {}

export const Progressbar: (props: ProgressbarProps) => ReactElement = (props: ProgressbarProps): ReactElement => {
  const { getData, MauricePkt, SinaPkt, MauriceWght, SinaWght, WhoImA }: PointsStore = usePointsStore((state: PointsStore) => state)

  let mauriceProgress = (MauricePkt / 20000) * 100
  let sinaProgress = (SinaPkt / 20000) * 100

  const achievements = {
    Wellnest: 5000
  }

  return (
    <Progress.Root style={{ marginTop: '200px', transform: 'rotate(90deg)' }} size="xl">
      <Progress.Section animated value={sinaProgress} color="cyan">
        <Progress.Label>Sina</Progress.Label>
      </Progress.Section>
      <Progress.Section animated value={mauriceProgress} color="pink">
        <Progress.Label>Maurice</Progress.Label>
      </Progress.Section>
    </Progress.Root>
  )
}
