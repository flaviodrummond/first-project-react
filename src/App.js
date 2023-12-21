import React from "react";
import {Container, H1, Image, ContainerContent, InputLabel, Input, Button} from "./styles";
import People from './assets/people.svg';
import Arrow from './assets/arrow.svg'

const App = () => {
  
  return (<Container>

    <Image alt="logo" src = {People}></Image>

    <ContainerContent>

    <H1> Ola !</H1>

    <InputLabel>Nome</InputLabel>
    <Input placeholder="Nome"></Input>

    <InputLabel>Idade</InputLabel>
    <Input placeholder="Idade"></Input>

    <Button>Cadastrar <img alt="seta" src={Arrow}></img>
    </Button>

    </ContainerContent>

    </Container>)
}

export default App