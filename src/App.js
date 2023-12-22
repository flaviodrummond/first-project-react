import React from "react";
import {Container, H1, Image, ContainerContent, InputLabel, Input, Button} from "./styles";
import People from './assets/people.svg';
import Arrow from './assets/arrow.svg'

const App = () => {
  const user = [{ id: Math.random(), name:"Flávio", age: 39 },
  { id: Math.random(), name:"Rosiane", age: 38 }
];
  
  return (<Container>

    <Image alt="logo" src = {People}></Image>

    <ContainerContent>

    <H1> Olá !</H1>

    <InputLabel>Nome</InputLabel>
    <Input placeholder="Nome"></Input>

    <InputLabel>Idade</InputLabel>
    <Input placeholder="Idade"></Input>

    <Button>Cadastrar <img alt="seta" src={Arrow}></img>
    </Button>

    <ul> 
      { user.map( (user) => (
        <li key={user.id}>
          {user.name} - {user.age}
        </li>))
        
      }
    </ul>

    </ContainerContent>
    
    </Container>)
}

export default App