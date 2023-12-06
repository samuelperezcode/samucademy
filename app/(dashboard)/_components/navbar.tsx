import { MobileSidebar } from './mobile-sidebar'

export function Navbar () {
  return (
    <nav className="p-4 border-b h-full flex items-center shadow-sm bg-white">
      <MobileSidebar />
    </nav>
  )
}
