import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Container, H1, Image, ContainerContent, InputLabel, Input, Button, User } from "./styles";
import People from './assets/people.svg';
import Arrow from './assets/arrow.svg'
import Trash from './assets/trash.svg'

const App = () => {
  const [users, setusers] = useState([]);
  // const [ name, setName] = useState();
  // const [ age, setAge] = useState(); 
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {

    const post = await axios.post("http://localhost:3001/users", { name: inputName.current.value, age: inputAge.current.value, });


    setusers([ ...users, post.data])

    // setusers([...users, {
    //   id: Math.random(),
    //   name: inputName.current.value,
    //   age: inputAge.current.value
    // }])

  }

  useEffect(() => {
    async function fetchUser() {
      const get = await axios.get("http://localhost:3001/users");


      setusers(get.data);
    }

    fetchUser()

  }, [])

  function deletUser(userId) {
    const newUser = (users.filter(user => user.id !== userId))
    setusers(newUser)

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

      <Button onClick={addNewUser} >Cadastrar <img alt="seta" src={Arrow}></img>
      </Button>

      <ul>
        {users.map((user) => (
          <User key={user.id}>
            <p>{user.name}</p> <p>{user.age}</p>
            <button onClick={() => deletUser(user.id)}><img alt="lixeira" src={Trash}></img></button>
          </User>))
        }
      </ul>

    </ContainerContent>

  </Container>)
}

export default App