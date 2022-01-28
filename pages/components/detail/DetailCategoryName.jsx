import React from "react";
import styled from "@emotion/styled";

const Layout = styled.div`
  height: 100px;
  border-bottom: solid gray 1px;
`;
export default function DetailCategoryName({ name }) {
  return <Layout>{name}</Layout>;
}
