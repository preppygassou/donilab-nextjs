import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components/';

const orderHubsWrapper = styled.div `
display:flex;
justify-content:center;
flex-direction:column;
`;
const LinksOrders = styled.div `
display:flex;
justify-content:space-between;
`;
const orderLink = styled(Link) `
background-color:#95B71D;
padding:0.4rem;
border-radius:15px;
`;
const orderLinkCss = styled(Link) `
background-color:#95B71D;
padding:0.4rem;
border-radius:15px;
`;
const OrderparalaxImgbottom = styled.img `
position:absolute;
top: -8rem;
right:0;
width: 125px;
`;
function odersHub() {
  return (
    <div>
    <OrderparalaxImgbottom/>
      <h1>Découvrez 
    nos autres hub !</h1>

    <LinksOrders>
    <Link>
     Agrihub de sikasso
     </Link>
     <Link>
     Hub de Ségou
     </Link>
    </LinksOrders>
    </div>
  )
}

export default odersHub
