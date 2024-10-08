import Menu from "../Menu/Menu";
import Image from "next/image";
import imgLogo from "@/img/logo-produtos.jpg.jpg"
export default function Cabecalho() {
    return (
        <header className="prose lg:prose-xl">
           <Image src={imgLogo} alt="Sacola" width={100} height={100}/>
            <Menu />
        </header>
    )
}
