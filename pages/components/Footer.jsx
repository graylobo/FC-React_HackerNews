import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function toggleClass(e) {
  const elem = document.getElementsByClassName("category-item");
  const elem2 = document.getElementsByClassName("category-text");
  for (let item of elem) {
    item.classList.remove("active");
  }
  for (let item of elem2) {
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
          <img src="top.png" alt="" />
          <span className="category-text">Top</span>
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
          <img src="new.png" alt="" />
          <span className="category-text">New</span>
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
          <img src="ask.png" alt="" />
          <span className="category-text">Ask</span>
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
          <img src="show.png" alt="" />
          <span className="category-text">Shows</span>
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
          <img src="jobs.png" alt="" />
          <span className="category-text">Jobs</span>
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
        }
        img {
          width: 35px;
        }
        .category-text {
          margin-left: 3px;
        }
      `}</style>
    </div>
  );
}
