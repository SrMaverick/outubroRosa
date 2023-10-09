import styled from "styled-components"


export const Header = styled.header`
    background-color: #EF81E291;
    padding: 5vh;
`

export const Section = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
;
`
export const H1 = styled.h1`
    font-family: 'Rammetto One', cursive;
    color: #FFFFFF;
    font-size: 25px;
    @media (max-width: 500px) {
        font-size: 20px;
}
;
`

export const Ul = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    color: #523030;
    width: 30vw;
    font-family: 'Kadwa', serif;
    font-size: 15px;
@media (max-width: 500px) {
    display: none;
}
;
`

export const Img = styled.img`
    height: 5vh;
;
`

export const A = styled.a`
    text-decoration: none;
;
`

export const IImg = styled.img`
    display: none;
    @media (max-width: 500px) {
        display: block;
        height: 6vh;
        margin-left: 100%;
}
`
