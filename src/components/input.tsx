import styled from "styled-components";

export const Input = () => {
  return (
    <InputField>
      <InputText placeholder="할 일을 입력하세요" />
      <AddButton>추가</AddButton>
    </InputField>
  );
};

const InputField = styled.div`
  width: 100vw;
  height: 100px;
  margin-top: 5%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const InputText = styled.input`
  width: 300px;
  height: 40px;
  padding-left: 10px;
  border-radius: 5px;
  border-style: none;
`;

const AddButton = styled.button`
  width: 60px;
  height: 40px;
  background-color: #848b84;
  border-radius: 5px;
  border-style: none;

  &:hover {
    background-color: black;
    color: white;
  }
`;
