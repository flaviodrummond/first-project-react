import styled from "styled-components";
/* import { Link } from "react-router-dom"; */
import Background from '../../assets/front.svg';


export const Container = styled.div`

background: url("${Background}");
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
gap: 44px;
height: auto;

`;

export const Image = styled.img`

margin-top: 30px;

`;

export const InputLabel = styled.p`

color: #191970;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 22px;
margin: 0 0 1px 25px;

`;

export const Input = styled.input`

width: 342px;
height: 58px;
border-radius: 14px;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
border: none;
outline: none;

color: #000000;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;
padding-left: 25px;

margin-bottom: 34px;

`;

export const Button = styled.button /* (Link) */`

width: 342px;
height: 74px;
border-radius: 14px;
background: rgba(0, 0, 0, 0.80);
border: none;

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
`;

