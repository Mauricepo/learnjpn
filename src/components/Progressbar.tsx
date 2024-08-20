import { Progress } from '@mantine/core'
import { ReactElement } from 'react'

interface ProgressbarProps {}

export const Progressbar: (props: ProgressbarProps) => ReactElement = (props: ProgressbarProps): ReactElement => {
  return (
    <Progress.Root style={{ marginTop: '250px', transform: 'rotate(90deg)' }} size="xl">
      <Progress.Section animated value={35} color="cyan">
        <Progress.Label>Sina</Progress.Label>
      </Progress.Section>
      <Progress.Section animated value={28} color="pink">
        <Progress.Label>Maurice</Progress.Label>
      </Progress.Section>
    </Progress.Root>
  )
}
