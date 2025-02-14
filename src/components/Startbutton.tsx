import { Center } from '@mantine/core'
import { ReactElement, useState } from 'react'
import { SelectWord } from './select'

interface PersonbuttonProps {}

export const Startbutton: (props: PersonbuttonProps) => ReactElement = (props: PersonbuttonProps): ReactElement => {
  const [pieces, setPieces] = useState<boolean>(false)
  const [select, setSelect] = useState<boolean>(false)

  return (
    <Center h={100}>
      <SelectWord></SelectWord>
    </Center>
  )
}
