import { UserButton } from '@clerk/nextjs'

export default function Home () {
  return (
   <section className='p-4'>
    <UserButton
     afterSignOutUrl="/"
    />
   </section>
  )
}
