import React, {useState}from 'react'
import styled from "styled-components"
import ListIcon from '@mui/icons-material/List';
import CloseIcon from '@mui/icons-material/Close';
import {selectCars} from './Feature/Car/CarSlice'
// import  {useSelector} from 'react-redux';
function Header() {

const [burgerStatus, setBurgerStatus] = useState()

// const cars = useSelector(selectCars)
// console.log(cars);

  return (

<Container>
  <a>
    <img src="logo.svg" alt=""/>
  </a>
  <MenuWrapper>
  <Menu>
<p><a href='#' className='MenuList'>Model S</a></p>
<p><a href='#' className='MenuList'>Model 3</a></p>
<p><a href='#' className='MenuList'>Model X</a></p>
<p><a href='#' className='MenuList'>Model Y</a></p>
  </Menu>
  </MenuWrapper>
  <RightMenu>
    <a href='#'>shop</a>
    <a href='#'>Tesla Account</a>
<CustomMenu onClick={() => setBurgerStatus(true)}/>
  </RightMenu>
  <BurgerNav show={burgerStatus}>
    
  <CloseWrapper>
   <CustomClose onClick={() => setBurgerStatus(false)}/>
    </CloseWrapper>
    <li><a href="#">Existing Inventory</a></li>
    <li><a href="#">Used Inventory</a></li>
    <li><a href="#">Trade in</a></li>
    <li><a href="#">Cybertruck</a></li>
    <li><a href="#">Roadaster</a></li>
   
  
  </BurgerNav>
</Container>

  )
}

export default Header
const Container = styled.div`
min-height : 60px;
position : fixed;
display : flex;
align-items: center;
justify-content: space-between;
padding: 0 20px;
top: 0;
left: 0;
right: 0;
z-index: 1px

img{
  padding-right : 200px;
}

`
const Menu = styled.div`
display : flex;
align-items: center;
justify-content: center;
flex: 1;
padding-right: 30px
font-weight: 600;
a{
  font-weight: 600;
  text-transformation: uppercase;
  padding: 0 10px;
  flex-wrap: nowrap;
}
@media(max-width : 768px){
  display: none;

}
`
const RightMenu = styled.div`
display: flex;
align-items: center;
a{
font-weight : 600;
text-transform: uppercase;
margin-right: 10px;
flex-wrap: nowrap
}
`
const CustomMenu = styled(ListIcon)`
cursor : pointer;
`

const BurgerNav = styled.div`
position : fixed;
top:0;
botttom:0;
right:0;
background: white;
width: 300px;
z-index: 16;
padding-bottom: 600px;
list-style : none;
flex-direction : column;
text-align: start;
transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
transition: transform 0.2s ;
li {
  Padding: 15px 0;
  border-bottom : 1px solid rgba (0,0,0, .2);
  a{
    font-weight: 600;
  }

`
const CustomClose = styled(CloseIcon)`

`
const CloseWrapper = styled.div`
display: flex;
justify-content: flex-end;

`
const MenuWrapper = styled.div`
padding-left : 150px
`