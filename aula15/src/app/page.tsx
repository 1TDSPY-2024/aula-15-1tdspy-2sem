import Image from "next/image"
import imgCapa from "@/img/image.png"

export default function Home() {
  return (
    <main className="main">
      <Image src={imgCapa} alt="Fones de ouvido"/>
    </main>
  )
}
