import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'next/link';
import { site } from '../../components/siteData';
import { useParams } from 'next/navigation';
import LanguageSelector from './LanguageSelector';
import NavLink from '../NavLink';


const Nav = styled.nav `
height: 10vh;
z-index:999;
display:flex;
justify-content:space-between;
align-items: center;
padding:1rem 2rem;
position: sticky;
top: 0;
width:100%;
overflow:hidden;
background-color:#fff;
.active {
  color:#2755A1;
}

.active .check-item {

background-color: #2755A1;
height: 2px;
transition: all .2s linear;

display: block;
position: absolute;
width: 100%;
/* right: -36px; */
bottom: 0;
}

/* .defaultnavcolor:hover > .check-item {

background-color: #2755A1;
height: 2px;
transition: all .2s linear;

display: block;
position: absolute;
width: 80px;
right: -36px;
bottom: 0;
} */
.contactcolor {
  color:#95B71D;
}
.contactcolor:hover{
  color:#95B71D;
}
`;
const NavWrapper = styled.div` 

`;

const NavLinkCss = css`
color:#C1BEBE;
cursor:pointer;
text-decoration:none;
font-weight: bold;
align-self: center;
margin: 0 14px;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
position:relative;
&:hover{
  color:#2755A1;
text-decoration:none;

}
@media  (max-width: 1200px) {
  p{
  
  font-size: 15px; 

}
}

p{
  font-family:"Cera Round Pro";
  flex: 0 0 100%;
  font-size: 15px;
  text-align: center;
  letter-spacing: .5px;
  margin: 0 0 11px;
  transition: all .2s linear;

}


`;
const Logo = styled(Link)` 
margin: 0 16px;
`;

/* const MenuBars = styled.i `
display:none;
@media screen and (max-width:925px){
  display:block;
  background-image:url(${Bar});
  background-size:contain;
  height:40px;
  width:40px;
  cursor:pointer;
  position:absolute;
  top:0;
  right:4px;
  transform:translate(-30%, 20%);
}

`; */

const MenuHamburger = styled.div `
display:none;

@media screen and (max-width:925px){
  display: block;
.line {
    display: block;
    width: 18px;
    height: 1px;
    background-color: #323232;
    margin: 5px 0;
}
}
`;
const NavMenu = styled.div `
display:flex;
align-items:center;
.selectorlanguage{
  margin: 0 16px;
  padding-bottom:.8rem;
  display:flex;
  align-items:center;
  img{
    width:18px;
  }
  button{
    border:none;
    //margin:.5rem;
    cursor:pointer;
    outline: none;
    background:none;
  }
}
@media screen and (max-width:925px){
  display:none;
}
`;
const NavMenuLinks = styled(NavLink) `
${NavLinkCss}
`;
const NavMenuLogo = styled.img `
width:150px;
`;
const NavBtn = styled(Link) `
display:flex;
align-items:center;
margin-right:30px;
@media screen and (max-width:768px){
  display:none
}
`;

const Activefunction =(stylecontact: string) =>{
  if (stylecontact === "/contact"){
    return " noactive"
  }
  else{
    return ""
  }
}
const Contactfunction =(stylecontact: string) =>{
  if (stylecontact === "/contact"){
    return "contactcolor";
  }
  else{
    return "defaultnavcolor";
  }
}


const Navbar = (props: { toggle: any; }) => {

  const {toggle,data} = props

  const params = useParams<{ locale: string; }>()
  const { locale} = params;

  return (
    <Nav>
      <Logo href="/"><NavMenuLogo src={"/assets/logodonilab.png"} alt="logo donilab"/></Logo>
        <MenuHamburger onClick={toggle} data-type="hamburger-button" className="hamburger-menu-button">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </MenuHamburger>
      <NavMenu>
           {
         data &&  data?.data?.header?.menu.map((item,index)=>(
        
        <NavMenuLinks className={Contactfunction(item.link) +  Activefunction(item.link)} exact={true} href={item.link} key={index}>
        <p>{item.title[locale]}</p>
        <div className="check-item"></div>
        </NavMenuLinks>
       ))}
           <LanguageSelector />
      </NavMenu>
      
    </Nav>
  )
}



export default Navbar