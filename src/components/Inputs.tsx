import { PointsStore, usePointsStore } from '@/utils/stores/points'
import { Button, Center, Modal, NumberInput, Select, Space } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { ReactElement, useState } from 'react'

interface InputsProps {}

export const Inputs: (props: InputsProps) => ReactElement = (props: InputsProps): ReactElement => {
  const [wopened, { open, close }] = useDisclosure(false)
  const [aopened, { open: openA, close: closeA }] = useDisclosure(false)
  let { updateData, MauricePkt, SinaPkt, MauriceWght, SinaWght, WhoImA }: PointsStore = usePointsStore((state: PointsStore) => state)
  const [Minutes, setMinutes] = useState<string | number>('')
  const [Weight, setWeight] = useState<string | number>('')
  const [Activity, setActivity] = useState<string | null>('')

  const addActivity = (): void => {
    switch (Activity) {
      case 'Joggen':
        if (WhoImA) {
          usePointsStore.setState({ MauricePkt: MauricePkt + Number(Minutes) * 10 })
        } else {
          usePointsStore.setState({ SinaPkt: SinaPkt + Number(Minutes) * 10 })
        }
        break

      case 'Crosstrainer':
        if (WhoImA) {
          usePointsStore.setState({ MauricePkt: MauricePkt + Number(Minutes) * 9 })
        } else {
          usePointsStore.setState({ SinaPkt: SinaPkt + Number(Minutes) * 9 })
        }
        break

      case 'Fahrad fahren':
        if (WhoImA) {
          usePointsStore.setState({ MauricePkt: MauricePkt + Number(Minutes) * 9 })
        } else {
          usePointsStore.setState({ SinaPkt: SinaPkt + Number(Minutes) * 9 })
        }
        break
    }
    updateData(MauricePkt, MauriceWght, SinaPkt, SinaWght)
    closeA()
  }

  return (
    <>
      <Modal size="s" opened={wopened} onClose={close} title="Gewicht aktualisieren" centered>
        <NumberInput value={Weight} onChange={setWeight} decimalScale={2} fixedDecimalScale defaultValue={2.2} />
        <Space h="md" />
        <Center>
          <Button radius="xl" onClick={close}>
            Bestätigen
          </Button>
        </Center>
      </Modal>

      <Modal size="s" opened={aopened} onClose={closeA} title="Aktivität hinzufügen" centered>
        <NumberInput value={Minutes} onChange={setMinutes} label="Minuten" fixedDecimalScale defaultValue={2.2} />
        <Select
          value={Activity}
          onChange={setActivity}
          label="Aktivität"
          placeholder="Pick value"
          data={['Joggen', 'Crosstrainer', 'Fahrad fahren']}
        />
        <Space h="md" />
        <Center>
          <Button radius="xl" onClick={addActivity}>
            Bestätigen
          </Button>
        </Center>
      </Modal>
      <Center h={100}>
        <Button radius="xl" onClick={open}>
          Gewicht
        </Button>
        <Space w="sm" />
        <Button onClick={openA} radius="xl">
          Aktivität
        </Button>
      </Center>
    </>
  )
}
