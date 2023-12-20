import React from "react";
import {Container, H1, Image, ContainerContent, InputLabel, Input, Button} from "./styles";

const App = () => {
  
  return (<Container>

    <Image></Image>

    <ContainerContent>

    <H1> Ola !</H1>

    <InputLabel>Nome</InputLabel>
    <Input placeholder="Nome"></Input>

    <InputLabel>Idade</InputLabel>
    <Input placeholder="Idade"></Input>

    <Button>Cadastrar</Button>

    </ContainerContent>

    </Container>)
}

export default App