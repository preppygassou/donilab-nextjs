import React, { useState } from 'react'
import styled, { css } from 'styled-components/macro';
import DomaineParalaxsvgtop from "./../../assets/svg/DomaineParalaxsvgtop.svg";
import DomaineParalaxsvgbottom from "./../../assets/svg/DomaineParalaxsvgbottom.svg";
import DomaineHubIcone from "./../../assets/svg/DomaineHubIcone.svg";
import line from "./../../assets/svg/line.svg";
import plus from "./../../assets/svg/plus.svg";

const DomaineOfHubSection = styled.section`
padding:4rem 8rem;
position:relative;
background-color:#94B61D;
color:#fff;

`;

const DomaineHeadContent = styled.div `
width:1000px;
margin:0 auto;
text-align:center;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:#2755A1;
text-align:center;
padding:4rem 8rem;

h1{
  font-family:"CeraRoundPro-Bold";
  font-size: 3rem;
    font-weight: bold;
    text-transform: uppercase;
    margin: 2.5vh 0 3vh 0;
    color:#fff;
}
p{
  color:#fff;
}
`;

const DomaineParalaxImgtop = styled.img `
position:absolute;
top: 0;
left:0;
width: 200px;
`;

const DomaineParalaxImgbottom = styled.img `
position:absolute;
bottom: 0;
right:0;
width: 200px;
`;

const DomainePisionMissionIcon = styled.img `
width:100px;
`;

const DomaineAcordeon = styled.div `
width:1000px;
margin:0 auto;
height: 100%;
.content {
  min-height: calc(100vh - 150px);
  max-width: 500px;
  margin: 2rem auto 0 auto;
  padding: 0 1rem;
}

.app-description {
  text-align: center;
}

h3 {
  font-size: 1.75rem;
  margin: 0;
}

p { 
  line-height: 1.75rem;
}

button {
  display: flex;
  align-items: center;
  background: #EFEFEF;
  border: none !important;
  font-size: 1.2rem;
  width: 100%;
  margin:0 auto;
  text-align: left;
  color: #2755A1;
  font-weight: bold;
  padding: 1rem;
}
button:focus { outline: none; }

button.active {
  color: #2755A1;
}

/* button:hover {
    background-color: #dfbd85;
} */

.title-wrapper {
  display: block;
  position: relative;
  width: 100%;
}

.minus {
  content: url(${line});
  width: 24px;
  height: 24px;
  position: absolute;
  right: 0;
}

.plus {
  content: url(${plus});
  width: 24px;
  height: 24px;
  /* transform: rotate(90deg); */
  transition-timing-function: ease-in;
  transition: all 1s;
  position: absolute;
  right: 0;
}

.panel-close { 
  background: #EFEFEF;
  box-sizing: border-box;
  padding: 0.5rem 1rem 0 1rem;
  opacity:0;
  width:100%;
  height:0;
  overflow: hidden;
  transition-timing-function: ease-out;
  transition: all .2s;
}

.panel-open {
  overflow: hidden;
  background: #EFEFEF;
  color:#2755A1;
  padding: 1rem;
  margin:0 auto 0.5rem auto;
  width: 100%;
  height: auto;
  transition-timing-function: ease-in;
  transition: all .2s;
}

.panel p {
  margin: 0;
}


`;

function DomaineOfIntervation({hub}) {
  let indexPlus;

    const [active, setActive] = useState(0);

    const eventHandler = (e, index) => {
        e.preventDefault();
        setActive(index);
    }

    const indexCount = (index) => {
        indexPlus = index + 1;
        return indexPlus;
    }


  return (
    <DomaineOfHubSection>
       <DomaineParalaxImgtop src={DomaineParalaxsvgtop} alt=""/>
       <DomaineParalaxImgbottom src={DomaineParalaxsvgbottom} alt=""/>
     <DomaineHeadContent>
        <DomainePisionMissionIcon className="" src={DomaineHubIcone} alt="Domaine icon" />
      <h1>domaine d’intervention</h1>
      <p>
        L’une des spécificités du Hub de Bamako réside dans son caractère transversal. 
        En effet, tout type de projet y est développé et accompagné 
      </p>
     </DomaineHeadContent>
     <DomaineAcordeon>
     <form>     
                { hub.acf.domaine_Intervention.map((tab, index) => (
                    <div key={index}>
                        <h3>
                            <button 
                                onClick={(e) => eventHandler(e, index)}
                                className={ active === index ? 'active' : 'inactive'}
                                aria-expanded={ active === index ? 'true' : 'false' }
                                aria-controls={ 'sect-' + indexCount(index) }
                                aria-disabled={ active === index ? 'true' : 'false' }
                                tabIndex={indexCount(index)}
                            >

                                <span className="title-wrapper">{tab.Title_domaine_Intervention}
                                    <span className={ active === index  ? 'plus' : 'minus'}></span>
                                </span>  
                            </button>
                        </h3>
                        <div id={ 'sect-' + indexCount(index) } className={ active === index  ? 'panel-open' : 'panel-close' }>
                                { tab.description_domaine_Intervention }
                        </div>
                    </div>
                    ))
                }
            </form>
     </DomaineAcordeon>
      
    </DomaineOfHubSection>
  )
}

export default DomaineOfIntervation
