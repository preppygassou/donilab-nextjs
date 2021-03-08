import React from "react";
import styled from "styled-components/macro";
import ConectImgTitle from "./../assets/svg/conecttitle.svg";
import { ImpactData } from "../data/ImpactData";
import SectionTitle from "./SectionTitle";
import Oconnect from "./../assets/svg/oconnect.svg";

const ImpactSectionContainer = styled.section`
  background-color: #2755a1;
  height: 100%;
  padding:5vh 0 9vh 0;
`;
const ImpactWrapper = styled.div`
  margin-top: 7vh;
  display: flex;
  align-items: baseline;
  justify-content: center;
`;

const ImpactCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  width: 30vh;
  margin: 0 4vh;
  h1 {
    font-family: "CeraRoundPro-Bold";
    font-weight: bold;
    font-size: 6rem;
  }
  p {
    font-weight: bold;
    font-size: 1.5rem;
  }
  img {
    width: 120px;
  }
`;

/* const SectionTitle =styled.div`
color: #fff;
 text-align:center;
  position: relative;
  padding-top:6vh;

h1{
  font-family:"CeraRoundPro-Bold";
  font-size: 5rem;
  font-weight: bold;
  text-transform: uppercase;
}
 img{
 position: absolute;
 width: 95px;
 left: 66vh;
 bottom: 0vh;
}
span{
 color: #95B71D;
}

`; */
function ImpactSection() {
  return (
    <ImpactSectionContainer>
      <SectionTitle white="true">
        <h1>
          n
          <span className="conectimg">
            <object
              style={{ fill: " #fff " }}
              id={Oconnect}
              type="image/svg+xml"
              width="100"
              height="100"
              data={Oconnect}
              className="svg"
            ></object>
          </span>
          tre impact
        </h1>
      </SectionTitle>
      <ImpactWrapper>
        {ImpactData.map((impact, index) => (
          <ImpactCard key={index}>
            <img src={impact.icon} alt="" />
            <h1>{impact.total}</h1>
            <p>{impact.description}</p>
          </ImpactCard>
        ))}
      </ImpactWrapper>
    </ImpactSectionContainer>
  );
}

export default ImpactSection;
