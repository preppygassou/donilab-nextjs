import styled from 'styled-components/macro'

const SectionTitle = styled.div`
color:${({white})=>(white ? '#fff':'#2755A1')};
  display: flex;
  justify-content: center;
  position: relative;
  margin: 0 0 9vh 0;
  padding-top:3vh;

h1{
  font-size: 4rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family:"CeraRoundPro-Bold";
  display:flex;
  justify-content:center;
  align-items:center;
}
span  {
  position:relative;
  font-size: 4rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family:"CeraRoundPro-Bold";
}
span svg {
  position: absolute;
    /* top: 0; */
    left: -23px;
    bottom: -39px;
    /* margin: 0 auto; */
    width: 87px;
}
@media (max-width: 768px) {
  h1,span{
   
    font-size: 2rem;
  }
  span svg {
    width: 43px;
    left: -10px;
    bottom: -56px;
}
}
 
@media (min-width: 769px) and (max-width: 1024px) {
  h1,span{
   
   font-size: 2.5rem;
 }
 span svg {
    width: 54px;
    left: -14px;
    bottom: -51px;
}

}

.sectiontitle{
  color:#fff;
}
object svg {
  width: 1.6em;
height: 1.61em;
vertical-align: middle;
display: inline-block;
}
.conectimg{
/*  position: absolute;
 width: 95px;
left: 44vh;
bottom: -1vh; */
}
span img{

 width: 95px;

}
span{
 color: #95B71D;
}

`;

export default SectionTitle;