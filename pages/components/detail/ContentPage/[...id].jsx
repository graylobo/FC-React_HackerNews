import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Modal from "../DetailFeed/Modal";
import Loading from "../../Loading";

function makeComments(comments, count = 0) {
  const commentString = [];
  if (!!comments) {
    for (let i = 0; i < comments.length; i++) {
      commentString.push(
        `
        <div class="container-comment" style="padding-left:${count * 20}px;">
        ${
          count === 0
            ? `<span class="material-icons comment-person">person</span>`
            : `<span class="material-icons comment-child">
        subdirectory_arrow_right
        </span>`
        }
          <span class="comment-user">${comments[i].user}</span>
          <div>${comments[i].content}</div>
        </div>
          
        `
      );
      if (comments[i].comments.length > 0) {
        commentString.push(makeComments(comments[i].comments, count + 1));
      }
    }
  }
  return commentString.join("");
}

export default function ContentPage() {
  const router = useRouter();
  const [show, setShow] = useState({ user: "", show: false }); // 유저정보 팝업 노출여부
  const [userInfo, setUserInfo] = useState({});
  const [commentShow, setCommentShow] = useState(false);
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(true);
  const id = router.query.id && router.query.id[1];
  useEffect(async () => {
    if (!!!router.query.id) return;
    const res = await fetch(`https://api.hnpwa.com/v0/item/${id}.json`);
    const json = await res.json();
    setContent(json);
    setLoading(false);
  }, [router]);
  useEffect(async () => {
    if (show.user) {
      const res = await fetch(
        `https://hacker-news.firebaseio.com/v0/user/${show.user}.json?print=pretty`
      );
      const data = await res.json();
      setUserInfo(data);
    }
  }, [show]);
  try {
    const comments = makeComments(content.comments);
    if (!!!router.query.id) return <div></div>;
    if (loading) {
      return <Loading></Loading>;
    }
    return (
      <div className="container">
        <div className="title">{content.title}</div>
        <Modal {...userInfo} show={show} setShow={setShow}></Modal>
        <div>
          <span className="time_ago">{content.time_ago}</span>
          <span
            className="user"
            onClick={() => {
              setShow(() => {
                return { user: content.user, show: true };
              });
            }}
          >
            by {content.user}
          </span>
        </div>
        <div className="content">
          {!!content.content ? (
            new DOMParser().parseFromString(content.content, "text/html").body
              .textContent
          ) : (
            <a href={content.url} target="_blank">
              {content.url}
            </a>
          )}
        </div>
        <div
          className="comments_count"
          onClick={() => {
            setCommentShow((e) => !e);
          }}
        >
          {content.comments_count} commments
        </div>
        {commentShow && (
          <div
            className="comments"
            dangerouslySetInnerHTML={{ __html: comments }}
          >
            {/* {content.comments ?? content.comments.map((e) => <div>{e}</div>)} */}
          </div>
        )}

        <style jsx>{`
          .title {
            font-weight: 800;
            font-size: 24px;
          }
          .user {
            font-weight: 700;
            color: gray;
            margin-left: 10px;
            cursor: pointer;
          }
          .time_ago {
            color: gray;
          }
          .content {
            margin-top: 20px;
          }
          .comments_count {
            margin-top: 30px;
            margin-bottom: 20px;
            color: gray;
            cursor: pointer;
          }
          .container {
          }
          a {
            text-decoration: none;
            color: black;
          }
        `}</style>
      </div>
    );
  } catch (e) {
    return <div>Error: </div>;
  }
}
