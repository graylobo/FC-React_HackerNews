import React from "react";
import styled from "@emotion/styled";

const Layout = styled.div`
  padding: 10px;
  width: 335px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  font-family: "Roboto";
  box-sizing: border-box;
  & {
    margin-bottom: 15px;
  }
  .container {
    margin-left: 9px;
  }
  .title {
    font-size: 18px;
    font-weight: 700;
  }

  span {
    margin-right: 10px;
    font-size: 13px;
  }

  .points {
    color: ${(props) => props.color};
  }
  .comments {
    color: ${(props) => props.color};
  }
`;

export default function PlainFeed(props) {
  return (
    <Layout color={props.color}>
      <div className="container">
        <p className="title">{props.content?.title}</p>

        <span className="points">
          <span className="material-icons">favorite</span>
          {props.content?.points}
        </span>

        <span className="comments">
          <span className="material-icons">comment</span>
          {props.content?.comments_count}
        </span>
      </div>
    </Layout>
  );
}
