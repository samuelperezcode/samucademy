export default function AuthLayout ({ children }: { children: React.ReactNode }) {
  return (
    <main className="grid place-content-center h-full">
      {children}
    </main>
  )
}
