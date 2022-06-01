import { Popover } from '@headlessui/react'
import { X as Close } from 'phosphor-react'

const WidgetClose = () => {
  return (
    <Popover.Button className="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100" title="Fechar formulário de feedback">
      <Close weight="bold" className="w-4 h-4" />
    </Popover.Button>
  )
}

export default WidgetClose