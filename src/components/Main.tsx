import styled from "styled-components";
import { Input } from "./input";

export const Main = () => {
  return (
    <Body>
      <Input />
    </Body>
  );
};

const Body = styled.div`
  width: 100vw;
  height: 600px;
  background-color: blue;
`;
