import React from "react";
import {Container, H1, Span} from "./styles";

const App = () => {
  const hello = "React"
  return (<Container>
    <H1>Bem vindo ao <Span>{hello}</Span></H1>
    </Container>)
}

export default App