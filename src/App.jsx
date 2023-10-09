import React from "react"
import Header from "./Header"
import Section from "./Body"
import { GlobalStyle } from "./global"


export default function App(){
  return(
    <>
      <GlobalStyle/>
      <Header/>
      <Section/>
    </>
  )
}