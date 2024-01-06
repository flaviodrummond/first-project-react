import React, { useState, useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Container, H1, Image, ContainerContent, InputLabel, Input, Button } from "./styles";
import People from '../../assets/people.svg';
import Arrow from '../../assets/arrow.svg'


const App = () => {
  const [users, setusers] = useState([]);
  const history = useHistory();
  // const [ name, setName] = useState();
  // const [ age, setAge] = useState(); 
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {

    const post = await axios.post("http://localhost:3001/users", { name: inputName.current.value, age: inputAge.current.value, });


    setusers([ ...users, post.data]);

    history.push('/usuarios');

    // setusers([...users, {
    //   id: Math.random(),
    //   name: inputName.current.value,
    //   age: inputAge.current.value
    // }])

  }

  // function changeName (event){
  //   setName(event.target.value)

  // }

  // function changeAge (event) {
  //   setAge(event.target.value)

  // }

  return (<Container>

    <Image alt="logo" src={People}></Image>

    <ContainerContent>

      <H1> Olá !</H1>

      <InputLabel >Nome</InputLabel>
      <Input /*onChange={changeName} */
        ref={inputName} placeholder="Nome"></Input>

      <InputLabel >Idade</InputLabel>
      <Input type="number" /* onChange={changeAge} */ ref={inputAge} placeholder="Idade"></Input>

      <Button /* to= "/usuarios" Utilizado pelo React-router-dom {Link} */ onClick={addNewUser} >Cadastrar <img alt="seta" src={Arrow}></img>
      </Button>

    </ContainerContent>

  </Container>)
}

export default App