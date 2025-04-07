import Link from "next/link"

export default function PageHeader({ title }: { title: string }) {
  return (
    <header className="border-b border-zinc-800 flex justify-center items-center  h-22">
      <img src="/logodesign.png" alt="Logo Design" className="h-42 w-42" />
    </header>
  )
}

