import React from 'react'
import styled from 'styled-components'
import { menuData } from '../data/MenuData';
import {Link} from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'
import { ContactBtn } from './ContactBtn';

const DropdownContainer = styled.div `
position:fixed;
z-index:999;
width:100%;
height: 100%;
background:#fff;
display:grid;
align-items :center;
top:0;
left:0;
transition:0.3s ease-in-out;
opacity:${({isOpen}) =>(isOpen ? '1':'0')};
top:${({isOpen}) =>(isOpen ? '0':'-100%')};
`;

const Icon = styled.div `
position:absolute;
top:1.2rem;
right: 1.5rem;
background:transparent;
font-size: 2rem;
cursor:pointer;
outline:none;
`;
const CloseIcon = styled(FaTimes) `
color:#2755A1;
`;
const DropdownWrapper = styled.div ``;
const DropdownMenu = styled.div `
display:grid;
grid-template-columns:1fr;
grid-template-rows: repeat(4, 80px);

margin-bottom: 4rem;
@media screen and (max-width: 480px){
grid-template-rows: repeat(4, 60px);
}
`;
const DropdownLink = styled(Link)`
 display:flex;
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

function Dropdown({isOpen,toggle}) {
  return (
    <div>
      <DropdownContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon/>
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
        {menuData.map((item,index)=>(
            <DropdownLink to={item.link} key={index}>
            {item.title}
            </DropdownLink>
           ))}
        </DropdownMenu>
      </DropdownWrapper>
      </DropdownContainer>
    </div>
  )
}

export default Dropdown