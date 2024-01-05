import styled from "styled-components";
import { Link } from "react-router-dom";
import Background from '../../assets/background.svg';


export const Container = styled.div`

background: url("${Background}");
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
gap: 44px;
height: 100vh;

`;

export const Image = styled.img`

margin-top: 30px;

`;

export const ContainerContent = styled.div`

display: flex;
flex-direction: column;
border-radius: 61px 61px 0px 0px;
background: linear-gradient(157deg, rgba(255, 255, 255, 0.60) 0.84%, rgba(255, 255, 255, 0.60) 0.85%, rgba(255, 255, 255, 0.15) 100%);
backdrop-filter: blur(45px);
padding: 50px 36px;
height: 100vh;

`;

export const H1 = styled.h1`

color: white;
font-size: 34px;
text-align: center;
margin-bottom: 60px;

`;

export const Button = styled(Link)`

width: 342px;
height: 74px;
border-radius: 14px;
background: transparent;
border: 1px solid white;

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
    transform: rotateY(180deg);
}
`;

export const User = styled.li`

display: flex;
justify-content: space-around;
align-items: center;
width: 342px;
height: 58px;
border-radius: 14px;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
border: none;
outline: none;
margin-top: 20px;

p {
    color: #000000;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-left: 25px;
}

button {
    background: none;
    border: none;
    cursor: pointer;
}
`