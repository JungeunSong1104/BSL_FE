import React from "react";
import Button from "../components/shared/elements/Button";
import styled from "styled-components";

const CompCatalog = (props) => {
  return (
    <Container>
      <h1 style={{padding: '20px 0'}}>Component Catalog</h1>
      <Button>button</Button>
      <p>{"<Button>value</Button>"}</p>
      <Button disabled>button</Button>
      <p>{"<Button disabled>value</Button>"}</p>
      <Button color="red">button</Button>
      <p>{"<Button color='red'>value</Button>"}</p>
    </Container>
  );
};

export const Container = styled.div`
  padding: 40px;
`;
export default CompCatalog;
