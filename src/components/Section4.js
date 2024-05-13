import React from 'react'
import styled from "styled-components"


function Section(props ) {

return(
  
    <Wrap  >
      <ItemText>
        <h1>{props.title}</h1>
        <p>{props.description}
       </p>
      </ItemText>
      <Buttons >
      <ButtonGroup>
        <LeftButton>
        {props.leftBtnText}
        </LeftButton>
        <RightButton>
        {props.rightBtnText}
        </RightButton>
      </ButtonGroup>
    </Buttons >
    </Wrap>
)
  
}
export default Section



const Wrap = styled.div`
width: 100vw;
height: 100vh;
background-image : url(/solar-panel.jpg);
justify-content: space-between;
background-size: cover;
background-position: center;

`



const ItemText = styled.div`
padding-top: 8vh;
text-align: center;
`
const ButtonGroup = styled.div`
display: flex;
margin-bottom: 1px;
padding-left: 400px;
padding-bottom: 1px;
@media (max-width: 768){
  flex-direction : column;
}
`
const LeftButton = styled.div`
background-color: rgba(23, 26, 32, 0.8);
height: 50px;
width: 240px;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
opacity: 0.85;
text-transform : uppercase;
font-size: 12px;
cursor: pointer;
margin: 8px;
padding-left: 10px;
padding-right: 10px;




`
const RightButton = styled(LeftButton)`
background: white;
opacity: 0.5;
color: black;
`

const Buttons = styled.div`
padding-top: 55vh;
`