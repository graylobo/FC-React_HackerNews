import React from "react";

export default function Footer() {
  return (
    <div className="container">
      <div>
        <span className="material-icons">thumb_up</span>
        <div>top</div>
      </div>
      <div>
        <span className="material-icons">lightbulb</span>
        <div>top</div>
      </div>
      <div>
        <span className="material-icons">question_mark</span>
        <div>top</div>
      </div>
      <div>
        <span className="material-icons">edit</span>
        <div>top</div>
      </div>
      <div>
        <span className="material-icons">people</span>
        <div>top</div>
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
