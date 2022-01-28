import React from "react";
import styled from "@emotion/styled";

const Layout = styled.div`
  padding: 10px;
  width: 335px;
  height: 120px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 5px 5px 5px 5px gray;
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
  & {
    margin-bottom: 15px;
  }
  .title {
    font-size: 18px;
    font-weight: 700;
  }

  span {
    margin-right: 10px;
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
      <p className="title">{props.content.title}</p>
      <span className="points">{props.content.points}</span>
      <span className="comments">{props.content.comments_count}</span>
      <span>{props.content.user}</span>
      <span>{props.content.time_ago}</span>
    </Layout>
  );
}
