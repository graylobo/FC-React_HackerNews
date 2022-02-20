import React, { useEffect, useState } from "react";

function htmlDecode(input) {
  let doc = null;
  try {
    doc = new DOMParser().parseFromString(input, "text/html");
  } catch {}
  return doc?.documentElement.textContent;
}
export default function Modal(info) {
  const date = new Date(info.created * 1000);
  return (
    <div className={`modal-container ${info.show?.show ? "active" : ""}`}>
      <button
        className="close"
        onClick={() => {
          info.setShow(false);
        }}
      >
        x
      </button>
      <div>
        <span className="items">id:</span> {info.id}
      </div>
      <div>
        <span className="items">about: </span> 
        {htmlDecode(info.about)}
      </div>
      <div>
        <span className="items">created: </span>
        {date.getFullYear()}.{date.getMonth() + 1}.{date.getDate()}
      </div>
      <div>
        <span className="items">karma: </span>
        {info.karma}
      </div>
      <div>
        <span className="items">submitted: </span>
        {info.submitted?.length}
      </div>
      <style jsx>{`
        .modal-container {
          width: 300px;
          height: 300px;
          overflow-y: auto;
          padding: 10px;
          border-radius: 10px;
          position: fixed;
          margin-left: 400px;
          border: 1px solid black;
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
        .items {
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
