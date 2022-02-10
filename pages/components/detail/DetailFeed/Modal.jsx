import React, { useEffect, useState } from "react";

function htmlDecode(input) {
  let doc = null;
  try {
    doc = new DOMParser().parseFromString(input, "text/html");
  } catch {}
  return doc?.documentElement.textContent;
}
export default function Modal(info) {
  const [modal, setModal] = useState(false);
  const date = new Date(info.created * 1000);
  return (
    <div className={`modal-container ${info.show.show ? "active" : ""}`}>
      <button
        className="close"
        onClick={() => {
          info.setShow(false);
        }}
      >
        x
      </button>
      <div>id: {info.id}</div>
      <div>about: {htmlDecode(info.about)}</div>
      <div>
        created: {date.getFullYear()}.{date.getMonth() + 1}.{date.getDate()}
      </div>
      <div>karma: {info.karma}</div>
      <div>submitted: {info.submitted?.length}</div>
      <style jsx>{`
        .modal-container {
          width: 200px;
          height: 200px;
          overflow-y: auto;
          padding: 10px;
          border-radius: 10px;
          position: fixed;
          margin-left: 400px;
          background-color: #d6aa52;
          opacity: 0;
          transition: opacity 0.2s;
        }
        .active {
          transition: opacity 1s;
          opacity: 1;
        }
        button {
          float: right;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
