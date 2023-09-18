import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { onClick, disabled, color, children, size } = props;

  const styles = {
    disabled,
    color,
    size,
  };

  return (
    <React.Fragment>
      <Btn onClick={onClick} disabled={disabled} {...styles}>
        {children}
      </Btn>
    </React.Fragment>
  );
};

export const Btn = styled.button`
  box-sizing: border-box;
  background: ${({ disabled, color }) =>
    color
      ? color == "red"
        ? "#FF9393"
        : "#a1e092"
      : disabled
      ? "#aaa"
      : "#a1e092"};
  border-radius: 4px;
  padding: 20px 40px;
  font-size: 20px;
  color: #fff;
  border: none;
`;

export default Button;
