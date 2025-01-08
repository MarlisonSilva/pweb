import Link from "next/link";
import { MariaPrea, JoaoPrea, Mensagem } from "./componentes";
import { HeaderComponent } from "./components/header";
import { FooterComponent } from "./components/footer";
import { ComponentA } from "../rota1/page";

export default function NovaRotaHome() {
    return (
        <div>
            <HeaderComponent/>
            <br />
            <h1>Nova Rota, Nova Página</h1>
            <Link href="/novarota/subrota">IR PARA SUB-ROTA</Link>
            <br />
            <br />
            <MariaPrea/>
            <JoaoPrea/>
            Componente da page rota1:
            <ComponentA/>
            <br />
            <Mensagem mensagem="Minha mensagem por parametro é: Morreu José Preá"/>
            <FooterComponent/>
        </div>
    )
}