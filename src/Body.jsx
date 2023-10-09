import React from "react"
import mulher from "./assets/mulher.png"
import * as S from "./BodyStyle"
import whatss from "./assets/whatss.png"
import instagram from "./assets/instagram.png"
import facebook from "./assets/facebook.png"

export default function Section(){
    return(
        <S.Section>
            <div>
                <S.H1>Conscientização e Esperança</S.H1>
                <S.IIImg src={mulher} alt="MulherLogo" />
                <S.P>O Outubro Rosa é um movimento global que acontece em outubro para aumentar a conscientização sobre o câncer de mama. A cor rosa é o símbolo dessa causa, representando esperança. Durante este mês, lembramos a importância da detecção precoce, apoio às pessoas afetadas e doações para a pesquisa. Vamos juntos lutar contra o câncer de mama.</S.P>
                <S.Button>Saiba Mais</S.Button>
                <nav>
                    <S.Ul>
                        <li><a href=""><S.IImg src={whatss} alt="whatsapp" /></a></li>
                        <li><a href=""><S.IImg src={instagram} alt="instagram" /></a></li>
                        <li><a href=""><S.IImg src={facebook} alt="facebook" /></a></li>
                    </S.Ul>
                </nav>
            </div>
            <S.Img src={mulher} alt="figuraMulher" />
        </S.Section>
    )
}