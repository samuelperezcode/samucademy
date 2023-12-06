import Image from 'next/image'

export function Logo () {
  return (
    <Image
      src="/images/logo.svg"
      alt="Samucademy Logo"
      width={130}
      height={130}
    />

  )
}
