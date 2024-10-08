import imgCapa from "@/img/imagem.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image src={imgCapa} alt='hero-produtos'></Image>

    </div>
  )
}
