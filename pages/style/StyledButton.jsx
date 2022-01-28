import styled from "@emotion/styled";

const StyledButton = styled.button`
  padding: 16px;
  background-color: ${(props) => (props.primary ? "blue" : "hotpink")};
  font-size: 24px;
  &:hover {
    color: blue;
  }
`;
export default StyledButton;