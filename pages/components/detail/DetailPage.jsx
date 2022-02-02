import React from "react";
import styled from "@emotion/styled";

const Layout = styled.div`
  height: 124px;
  border-bottom: solid gray 1px;
  padding: 10px;
  .title {
    font-weight: 700;
  }
  .domain {
    border: solid gray 1px;
    border-radius: 10px;
    box-sizing: border-box;
    font-size: 13px;
    padding: 3px 5px;
  }
  .user {
    margin-left: 10px;
    font-weight: bold;
  }
  .comment-container {
    font-size: 13px;
    color: #6b6b6b;
  }
`;

export default function DetailPage({
  title,
  domain,
  points,
  user,
  time_ago,
  comments_count,
}) {
  return (
    <Layout>
      <div>
        <span className="domain">{domain}</span>
      </div>
      <div className="title">{title}</div>
      <div className="comment-container">
        <div>
          <span className="points">{points} points</span>
          <span className="user">by {user}</span>
        </div>
        <div>
          <span className="timeago">{time_ago} </span>
          <span className="comments">{comments_count} comments</span>
        </div>
      </div>
    </Layout>
  );
}
