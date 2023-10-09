import styled from "styled-components"


export const Section = styled.section`
    display: flex;
    padding: 15vh;
    height: 105vh;
    @media (max-width: 500px) {
        padding: 0;
        display: flex;
        flex-direction: column; 
        align-items: center;
        height: 90vh;
}
`

export const H1 = styled.h1`
    font-family: 'Rammetto One', cursive;
    color: #EF81E2;
    font-size: 30px;
    @media (max-width: 500px) {
        text-align: center;
        font-size: 25px;
        margin-top: 10vh;
}
`

export const Img = styled.img`
    height: 90vh;
    @media (max-width: 500px) {
        display: none;
}
`

export const P = styled.p`
    color: #8B7373;
    font-size: 13px;
    width: 35vw;
    height: 25vh;
    text-align: justify;
    margin-top: 5vh;
    line-height: 4vh;
    font-family: 'Kadwa', serif;
    @media (max-width: 500px) {
        display: none;
}
;
`

export const Button = styled.button`
    background-color: #F1A9E9;
    color: #FFFFFF;
    width: 16vw;
    height: 5vh;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    @media (max-width: 500px) {
        width: 70vw;
        margin-top: 10vh;
        margin-left: 15%;
        font-size: 18;
}
`

export const Ul = styled.ul`
    display: flex;

    width: 12vw;
    justify-content: space-around;
    list-style: none;
    margin-top: 32vh;
    @media (max-width: 500px) {
        margin-top: 10vh;
        width: 100vw;
        border: solid;
}   
`

export const IImg = styled.img`
    height: 5vh;
    @media (max-width: 500px) {
        height: 6vh;
}
`

export const IIImg = styled.img`
    display: none;
    @media (max-width: 500px) {
        display: block;
        height: 40vh;
}
`