import { Navbar } from './_components/navbar'
import { Sidebar } from './_components/sidebar'

export default function DashboardLayout ({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-full">
      <header className='h-[80px] md:pl-56 fixed inset-y-0 w-full'>
        <Navbar />
      </header>
      <aside className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50 ">
        <Sidebar />
      </aside>
      <section className='md:pl-56 mt-[80px] h-full'>
        {children}
      </section>
    </main>
  )
}
