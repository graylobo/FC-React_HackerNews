import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function toggleClass(e) {
  const elem = document.getElementsByClassName("category-item");
  for (let item of elem) {
    item.classList.remove("active");
  }
  e.target.classList.add("active");
}

export default function Footer() {
  return (
    <div className="container">
      <Link href={`/components/detail/DetailFeed/NEWS`}>
        <div
          className="category-item top"
          onClick={(e) => {
            toggleClass(e);
          }}
        >
          {/* <span className="material-icons">thumb_up</span> */}
          Top
        </div>
      </Link>
      <Link href={`/components/detail/DetailFeed/NEWEST`}>
        <div
          className="category-item new"
          onClick={(e) => {
            toggleClass(e);
          }}
        >
          {/* <span className="material-icons">lightbulb</span> */}
          New
        </div>
      </Link>
      <Link href={`/components/detail/DetailFeed/ASK`}>
        <div
          className="category-item"
          onClick={(e) => {
            toggleClass(e);
          }}
        >
          {/* <span className="material-icons">question_mark</span> */}
          Ask
        </div>
      </Link>
      <Link href={`/components/detail/DetailFeed/SHOW`}>
        <div
          className="category-item"
          onClick={(e) => {
            toggleClass(e);
          }}
        >
          {/* <span className="material-icons">edit</span> */}
          Show
        </div>
      </Link>
      <Link href={`/components/detail/DetailFeed/JOBS`}>
        <div
          className="category-item"
          onClick={(e) => {
            toggleClass(e);
          }}
        >
          {/* <span className="material-icons">people</span> */}
          Jobs
        </div>
      </Link>

      <style jsx>{`
        .container {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px #c8c8c8 solid;
          
        }
        .category-item {
          padding: 12px;
          cursor: pointer;
          font-weight: bold;
          color: #7e7e7e;
        }
        .active {
          color: #fd6600;
          border-bottom: 5px #fd6600 solid;
        }
      `}</style>
    </div>
  );
}
