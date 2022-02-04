import React from "react";

export default function Footer() {
  return (
    <div className="container">
      <div>
        <span className="material-icons">thumb_up</span>
        <div>Top</div>
      </div>
      <div>
        <span className="material-icons">lightbulb</span>
        <div>New</div>
      </div>
      <div>
        <span className="material-icons">question_mark</span>
        <div>Ask</div>
      </div>
      <div>
        <span className="material-icons">edit</span>
        <div>Show</div>
      </div>
      <div>
        <span className="material-icons">people</span>
        <div>Jobs</div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </div>
  );
}
