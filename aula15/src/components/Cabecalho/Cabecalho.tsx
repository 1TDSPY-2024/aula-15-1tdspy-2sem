import Image from "next/image";
import Menu from "../Menu/Menu";
import imgLogo from "@/img/img-logo.jpg"

export default function Cabecalho() {
    return (
        <header className="header">
            <Image src={imgLogo} width={100} height={100} alt="Sacola"/>
            <Menu />
        </header>
    )
}
