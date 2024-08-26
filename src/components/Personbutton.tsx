import { PointsStore, usePointsStore } from '@/utils/stores/points'
import { Center, SegmentedControl } from '@mantine/core'
import { ReactElement, useEffect, useState } from 'react'

interface PersonbuttonProps {}

export const Personbutton: (props: PersonbuttonProps) => ReactElement = (props: PersonbuttonProps): ReactElement => {
  const { WhoImA, setPerson }: PointsStore = usePointsStore((state: PointsStore) => state)
  const [value, setValue] = useState('react')

  useEffect(() => {
    setValue('Maurice')
  }, [])

  useEffect(() => {
    setPerson(value == 'Maurice' ? true : false)
  }, [value])

  return (
    <Center h={100}>
      <SegmentedControl value={value} onChange={setValue} radius="xl" data={['Maurice', 'Sina']} />
    </Center>
  )
}
