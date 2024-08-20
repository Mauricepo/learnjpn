import { Button, Center, Modal, NumberInput, Select, Space } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { ReactElement } from 'react'

interface InputsProps {}

export const Inputs: (props: InputsProps) => ReactElement = (props: InputsProps): ReactElement => {
  const [wopened, { open, close }] = useDisclosure(false)
  const [aopened, { open: openA, close: closeA }] = useDisclosure(false)

  return (
    <>
      <Modal size="s" opened={wopened} onClose={close} title="Gewicht aktualisieren" centered>
        <NumberInput decimalScale={2} fixedDecimalScale defaultValue={2.2} />
        <Space h="md" />
        <Center>
          <Button radius="xl" onClick={open}>
            Bestätigen
          </Button>
        </Center>
      </Modal>

      <Modal size="s" opened={aopened} onClose={closeA} title="Aktivität hinzufügen" centered>
        <NumberInput label="Minuten" decimalScale={2} fixedDecimalScale defaultValue={2.2} />
        <Select label="Aktivität" placeholder="Pick value" data={['Joggen', 'Crosstrainer']} />
        <Space h="md" />
        <Center>
          <Button radius="xl" onClick={open}>
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
