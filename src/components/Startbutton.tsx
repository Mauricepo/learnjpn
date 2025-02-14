import { Center } from '@mantine/core'
import { ReactElement } from 'react'
import { SelectWord } from './select'

interface PersonbuttonProps {}

export const Startbutton: (props: PersonbuttonProps) => ReactElement = (props: PersonbuttonProps): ReactElement => {
  return (
    <Center h={100}>
      <SelectWord></SelectWord>
    </Center>
  )
}
