'use client'

import { cn } from '@/lib/utils'
import { type LucideIcon } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

interface SidebarItemProps {
  icon: LucideIcon
  label: string
  href: string
}

export default function SidebarItem ({ icon: Icon, label, href }: SidebarItemProps) {
  const pathname = usePathname()
  const router = useRouter()
  const isActive = (pathname === '/' && href === '/') || (pathname === href) || (pathname.startsWith(href) && href !== '/')

  const handleClick = () => {
    router.push(href)
  }
  return (
    <button
      onClick={handleClick}
      type='button'
      className={cn(
        'flex items-center gap-x-2 text-slate-500 text-sm font-[500] transition-all pl-6 hover:text-slate-600 hover:bg-slate-300/20',
        isActive && 'text-sky-500 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-500'
      )}
    >
      <div className='flex items-center py-4 gap-x-2'>
        <Icon size={22} />
        {label}
      </div>
      <div
        className={cn(
          'ml-auto opacity-0 border-2 border-sky-500 h-full transition-all',
          isActive && 'opacity-100'
        )}
      />
    </button>
  )
}
