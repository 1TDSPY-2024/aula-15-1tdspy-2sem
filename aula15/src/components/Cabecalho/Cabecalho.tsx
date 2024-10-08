import Image from "next/image";
import Menu from "../Menu/Menu";
import imgLogo from "@/img/logo.jpg";

export default function Cabecalho() {
    return (
        <header className="cabecalho">
            <Image src={imgLogo} alt='imagem do logo' height={100} width={100}/>
            <Menu />
        </header>
    )
}
