import Image from "next/image"

export default function PageHeader() {
  return (
    <header className="border-b border-zinc-800 flex justify-center items-center h-22">
      <Image
        src="/logodesign.png"
        alt="Logo Design"
        width={168}
        height={168}
        className="h-42 w-42"
      />
    </header>
  )
}
