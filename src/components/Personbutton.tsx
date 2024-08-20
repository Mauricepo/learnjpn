import { Center, SegmentedControl } from '@mantine/core'
import { ReactElement } from 'react'

interface PersonbuttonProps {}

export const Personbutton: (props: PersonbuttonProps) => ReactElement = (props: PersonbuttonProps): ReactElement => {
  return (
    <Center h={100}>
      <SegmentedControl radius="xl" data={['Maurice', 'Sina']} />
    </Center>
  )
}
