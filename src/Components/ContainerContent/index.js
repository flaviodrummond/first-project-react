import React from "react";

import { ContainerContent as Container } from "./styles";

function ContainerContent({ children, isBlur }) {

    return <Container isBlur={isBlur}>{children}</Container>
}

export default ContainerContent;