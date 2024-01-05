import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, H1, Image, ContainerContent, Button, User } from "./styles";
import Avatar from '../../assets/avatar.svg';
import Arrow from '../../assets/arrow.svg'
import Trash from '../../assets/trash.svg'

const Users = () => {
  const [users, setusers] = useState([]);
  // const [ name, setName] = useState();
  // const [ age, setAge] = useState(); 

  useEffect(() => {
    async function fetchUser() {
      const get = await axios.get("http://localhost:3001/users");


      setusers(get.data);
    }

    fetchUser()

  }, [])

  async function deletUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)
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

    <Image alt="logo" src={Avatar}></Image>

    <ContainerContent>

      <H1> Usuários </H1>

      

      <ul>
        {users.map((user) => (
          <User key={user.id}>
            <p>{user.name}</p> <p>{user.age}</p>
            <button onClick={() => deletUser(user.id)}><img alt="lixeira" src={Trash}></img></button>
          </User>))
        }
      </ul>

      <Button><img alt="seta" src={Arrow}></img>Voltar 
      </Button>

    </ContainerContent>

  </Container>)
}

export default Users