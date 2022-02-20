import React, { useState } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";

const Layout = styled.div`
  height: 124px;
  border-bottom: solid #c8c8c8 1px;
  padding: 10px;
  .title {
    font-weight: 700;
    margin-bottom: 5px;
  }
  .user-timeago {
    margin-bottom: 5px;
  }
  .earth {
    font-size: 12px;
    color: gray;
  }
  .domain {
    box-sizing: border-box;
    font-size: 13px;
    font-weight: 700;
    padding: 3px 5px;
    color: gray;
  }
  .user {
    font-weight: bold;
    cursor: pointer;
  }
  .comment-container {
    font-size: 13px;
    color: #555555;
    margin-bottom: 5px;
  }
  .point-comment-box {
    font-size: 14px;
    color: gray;
    font-weight: bold;
  }
  .timeago {
    font-weight: bold;
    color: #808080;
  }
  .bookmark-box {
    float: right;
    color: #7f7f7f;
  }
  .bookmark {
    margin-right: 10px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;
function getElapsedDate(unixTime) {
  let pastDate = new Date(unixTime * 1000);
  let nowDate = new Date();

  let elapsedTime = (nowDate - pastDate) / 1000;
  elapsedTime = Math.round(elapsedTime / 60 / 60 / 24);
  return elapsedTime;
}

export default function DetailPage({
  title,
  domain,
  points,
  user,
  author,
  time_ago,
  comments_count,
  id,
  setShow,
  num_comments,
  created_at_i,
  objectID,
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const { category } = router.query;

  return (
    <Layout>
      {domain && (
        <div>
          <span class="material-icons earth">public</span>
          <a href={`https://${domain}`} target="_blank" className="domain">
            {domain}
          </a>
        </div>
      )}

      <Link
        href={`/components/detail/ContentPage/${category}/${id || objectID}`}
        key={id}
      >
        <a>
          <div className="title">{title}</div>
        </a>
      </Link>
      <div className="comment-container">
        <div className="user-timeago">
          <span
            className="user"
            onClick={() => {
              setShow((e) => {
                return { user, show: true };
              });
            }}
          >
            {user ? <span>{user} ·</span> : <span>{author} ·</span>}
          </span>
          <span className="timeago">
            {time_ago || getElapsedDate(created_at_i) + "d ago"}
          </span>
        </div>
        <div className="point-comment-box">
          <span className="points">{points} points · </span>
          <span className="comments">
            {comments_count || num_comments} comments
          </span>
          
        </div>
      </div>
    </Layout>
  );
}
