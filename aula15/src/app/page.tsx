import imgCapa from "@/img/cover.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Image src={imgCapa} alt="Imagem de capa"/>
    </div>
  )
}
