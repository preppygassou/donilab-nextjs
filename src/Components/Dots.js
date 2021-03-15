import React from 'react'
import styled, { css } from 'styled-components/macro';

const DotContainer = styled.span `
 `;
const Dot = ({ active }) => (
  <span
    css={css`
      padding: 7px;
      margin-right: 5px;
      cursor: pointer;
      border-radius: 50%;
      background: ${active ? '#2755A1' :  '#E3E3E3'};
    `}
  />
)

const DotsContainer = styled.div `
      
      display: flex;
      align-items: center;
      justify-content: center;
`;

function Dots({slides, activeIndex}) {
  return (
    <DotsContainer>
          {slides.map((slide, i) => (
      <Dot key={i} active={activeIndex === i} />
    ))}
    </DotsContainer>
  )
}

export default Dots
