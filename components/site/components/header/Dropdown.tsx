import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { menuData } from '../../../../services/data/MenuData';
import { menuDataEn } from '../../../../services/data/MenuDataEn';
import Link from 'next/link';
import {FaTimes} from 'react-icons/fa'
import LanguageSelector from './LanguageSelector';
import { CurrentLangContext } from '../../../../Context/CurrentLangContext';
import { useSelector } from 'react-redux';
import { useParams, useRouter } from 'next/navigation';
import { GeneralContext } from '../../../../services/general/general.context';


const DropdownContainer = styled.div `
position:fixed;
z-index:999;
width:100%;
height:100%;
background:#fff;
/* display:grid;
align-items :center; */
overflow:hidden;
left:0;
right:0;
bottom:0;
transition:0.3s ease-in-out;
opacity:${({isOpen}) =>(isOpen ? '1':'0')};
top:${({isOpen}) =>(isOpen ? '0':'-100%')};
`;

const Icon = styled.div `
/* position:absolute;
top:1.2rem;
right: 1.5rem; */
background:transparent;
font-size: 2rem;
cursor:pointer;
outline:none;
`;
const CloseIcon = styled(FaTimes) `
color:#2755A1;
`;
const DropdownWrapper = styled.div `
margin-top:2rem;
padding:1rem 2rem;
width:100%;
height:100%;
`;
const DropdownMenu = styled.div `
display:grid;
grid-template-columns:1fr;
grid-template-rows: repeat(7, 80px);
margin-bottom: 4rem;
.selectorlanguage{
  margin: 0 16px;
  padding-bottom:.5rem;
  display:flex;
  align-items:center;
  img{
    width:18px;
  }
  button{
    border:none;
    margin:.5rem;
    cursor:pointer;
    outline: none;
    background:none ;
  }
}
@media screen and (max-width: 480px){
grid-template-rows: repeat(7, 60px);

}
a{
  display:flex;
 width:100%;
 height:100%;
 flex-direction: column;
 color:#C1BEBE;
 font-size:1.5rem;
 text-decoration:none;
 list-style:none;
 cursor:pointer;
 transition:0.2s ease-in-out;
 &:hover {
   color:#2755A1;
 }
}
`;
const DropdownLink = styled(Link)`
 display:flex;
 width:100%;
 height:100%;
 flex-direction: column;
 color:#C1BEBE;
 font-size:1.5rem;
 text-decoration:none;
 list-style:none;
 cursor:pointer;
 transition:0.2s ease-in-out;
 &:hover {
   color:#2755A1;
 }
`;
const BtnWrap = styled.div `
 display:flex;
 justify-content: center;
`;

const Logo = styled(Link)` 
margin: 0 16px;
`;
const NavMenuLogo = styled.img `
width:150px;
`;
const DropdownLogo= styled.div `
display:flex;
justify-content:space-between;
align-items:center;
padding:1rem;
width:100%;

`;

function Dropdown({isOpen,toggle}) {

  const params = useParams<{ locale: string; }>()
  const { locale} = params;
  

  return (
      <DropdownContainer isOpen={isOpen} onClick={toggle}>
      <DropdownLogo>
      <Logo href="/"><NavMenuLogo src={"/assets/logodonilab.png"} alt="logo donilab"/></Logo>
      <Icon onClick={toggle}>
        <CloseIcon/>
      </Icon>
      </DropdownLogo>
      <DropdownWrapper>
        <DropdownMenu>
        {locale === "en" ? menuDataEn.map((item,index)=>(
            <DropdownLink href={item.link} key={index}>
            {item.title}
            </DropdownLink>
           )): menuData.map((item,index)=>(
            <DropdownLink href={item.link} key={index}>
            {item.title}
            </DropdownLink>
           ))}
           <LanguageSelector/>
        </DropdownMenu>
        <DropdownMenu>
        {/* {loading? "" :
             generals[0].acf.menu.map((item,index)=>(
            <DropdownLink href={item.link} key={index}>
            {item.title}
            </DropdownLink>
           ))} */}
     
        </DropdownMenu>
      </DropdownWrapper>
      </DropdownContainer>
  )
}

export default Dropdown