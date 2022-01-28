import styled from "@emotion/styled";
import React from "react";

const Layout = styled.div`
  border-bottom: solid #ff6600 1px;
  position: relative;
  height: 50px;
  i {
    margin-top: 5px;
    color: orange;
    float: right;
    font-size: 30px;
  }
`;

export default function DetailSearch() {
  return (
    <Layout>
      <i className="material-icons">search</i>
    </Layout>
  );
}
