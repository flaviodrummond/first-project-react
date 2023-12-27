import React,  { useState } from "react";
import { Container, H1, Image, ContainerContent, InputLabel, Input, Button, User } from "./styles";
import People from './assets/people.svg';
import Arrow from './assets/arrow.svg'
import Trash from './assets/trash.svg'

const App = () => {
  const [ users, setusers] = useState([]);
  const [ name, setName] = useState();
  const [ age, setAge] = useState(); 

  function addNewUser (){
    setusers([ ...users, { id: Math.random(), name, age }])
  }

  function changeName (event){
    setName(event.target.value)

  }

  function changeAge (event) {
    setAge(event.target.value)

  }

  return (<Container>

    <Image alt="logo" src={People}></Image>

    <ContainerContent>

      <H1> Olá !</H1>

      <InputLabel >Nome</InputLabel>
      <Input onChange={changeName} placeholder="Nome"></Input>

      <InputLabel >Idade</InputLabel>
      <Input type="number" onChange={changeAge} placeholder="Idade"></Input>

      <Button onClick={addNewUser} >Cadastrar <img alt="seta" src={Arrow}></img>
      </Button>

      <ul>
        {users.map((user) => (
          <User key={user.id}>
            <p>{user.name}</p> <p>{user.age}</p>
            <button><img alt="lixeira" src={Trash}></img></button> 
          </User>))
        }
      </ul>

    </ContainerContent>

  </Container>)
}

export default App