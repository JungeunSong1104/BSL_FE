import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MainPage = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <CatalogBtn onClick={() => navigate("/compcat")}>
        컴포넌트
        <br />
        카탈로그
      </CatalogBtn>
    </div>
  );
};

export const CatalogBtn = styled.button`
  position: absolute;
  bottom: 50px;
  right: 50px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  background-color: #a1e092;
  box-shadow: 4px 4px 8px 0 #ddd;
`;

export default MainPage;
