import { Sidebar } from './_components/sidebar'

export default function DashboardLayout ({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-full">
      <aside className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50 ">
        <Sidebar />
      </aside>
      {children}
    </main>
  )
}
