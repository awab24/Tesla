import React from 'react'
import styled from "styled-components"
import Section from "./Section.js"
import Section2 from "./Section2.js"
import Section3 from "./Section3.js"
import Section4 from './Section4.js'
import Section5 from './Section5.js'
import Section6 from './Section6.js'

function Home() {
  return (
    <Container>
     <Section
     title = "Model S"
     description = "Order Online for touchless delivery"

     leftBtnText ="Custom order"
     rightBtnText="Existing inventory"
     />
          <Section2
     title = "Model y"
     description = "Order Online for touchless delivery"

     leftBtnText ="Custom order"
     rightBtnText="Existing inventory"
     />
          <Section3
     title = "Model x"
     description = "Order Online for touchless delivery"

     leftBtnText ="Custom order"
     rightBtnText="Existing inventory"
     />
               <Section4
     title = "Easier life"
     description = "Order Online for touchless delivery"

     leftBtnText ="Order now"
     rightBtnText="learn more"
     />
                    <Section5
     title = "Return policy"
     description = "money back guarantee"

     leftBtnText ="order now"
     rightBtnText="learn more"
     />
     
     
<Section6 
     title = "Accessories"
     description = ""
rightBtnText=''
     leftBtnText ="shop now"
     
/>

    </Container>
  )
}

export default Home
const Container = styled.div`
height: 100vh; 
`