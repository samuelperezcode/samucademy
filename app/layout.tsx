import type { Metadata } from 'next'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

export const metadata: Metadata = {
  title: 'Samucademy',
  description: 'Samucademy is a platform for learning and teaching online courses',
  icons: '/images/logo.svg'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body >{children}</body>
      </html>
    </ClerkProvider>
  )
}
