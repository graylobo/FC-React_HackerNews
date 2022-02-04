import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

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
  try {
    const id = router.query.id[1];
    const [content, setContent] = useState({});
    useEffect(async () => {
      const res = await fetch(`https://api.hnpwa.com/v0/item/${id}.json`);
      const json = await res.json();
      setContent(json);
    }, []);
    const comments = makeComments(content.comments);
    return (
      <div className="container">
        <div className="title">{content.title}</div>
        <div>
          <span className="time_ago">{content.time_ago}</span>
          <span className="user">by {content.user}</span>
        </div>
        <div className="content">
          {
            new DOMParser().parseFromString(content.content, "text/html").body
              .textContent
          }
        </div>
        <div className="comments_count">{content.comments_count} commments</div>
        <div
          className="comments"
          dangerouslySetInnerHTML={{ __html: comments }}
        >
          {/* {content.comments ?? content.comments.map((e) => <div>{e}</div>)} */}
        </div>
        <style jsx>{`
          .title {
            font-weight: 800;
            font-size: 24px;
          }
          .user {
            font-weight: 700;
            color: gray;
            margin-left: 10px;
          }
          .time_ago {
            color: gray;
          }
          .content {
            margin-top: 20px;
          }
          .comments_count {
            margin-top: 30px;
            color: gray;
          }
          .container {
          }
        `}</style>
      </div>
    );
  } catch (e) {
    return <div>Error: </div>;
  }
}
