import React from "react"
import carrinho from "./assets/carrinho.png"
import * as S from "./HeaderStyle"

export default function Header(){
    return(
        <S.Header>
            <S.Section>
                <S.H1>Outubro Rosa</S.H1>
                <a href=""><S.IImg src={carrinho} alt="carrinhoDeCompra" /></a>
                <nav>
                    <S.Ul>
                        <li><S.A href="">ABOUT</S.A></li>
                        <li><S.A href="">PRODUCTS</S.A></li>
                        <li><S.A href="">STORES</S.A></li>
                        <li><S.A href="">CONTACT</S.A></li>
                        <li><S.A href=""><S.Img src={carrinho} alt="carrinhoDeCompra" /></S.A></li>
                    </S.Ul>
                </nav>
            </S.Section>
        </S.Header>
    )
}