import styled from "styled-components";

export const Button = styled.button /* (Link) */`

width: 342px;
height: 74px;
border-radius: 14px;
background: ${props => props.isBack ? 'rgba(0, 0, 0, 0.80)' : 'transparent'};
border: ${props => props.isBack ? 'none' : '1px solid white'};

color: #FFF;
font-size: 17px;
font-style: normal;
font-weight: 700;
line-height: 28px;

display: flex;
justify-content: center;
align-items: center;
gap: 20px;
margin-top: 130px;
cursor: pointer;
&:hover {opacity: 0.8;}

&:active {
    opacity: 0.6;
}

img {
    transform: ${props => props.isBack ? '' : 'rotateY(180deg)'}
}
`;