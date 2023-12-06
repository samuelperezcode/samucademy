import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from '@/components/ui/sheet'
import { Sidebar } from './sidebar'

export function MobileSidebar () {
  return (
    <Sheet>
      <SheetTrigger className='block md:hidden hover:opacity-75 transition'>
        <Menu />
      </SheetTrigger>
      <SheetContent side={'left'} className='p-0 bg-white'>
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}
