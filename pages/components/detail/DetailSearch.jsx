import styled from "@emotion/styled";
import Link from "next/link";
import Router from "next/router";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
const Layout = styled.div`
  border-bottom: solid #ff6600 1px;
  position: relative;
  height: 50px;

  i {
    color: orange;
    font-size: 30px;
    cursor: pointer;
  }
  input {
    border-radius: 5px;
    margin-right: 10px;
  }
  .search {
    position: relative;
  }
  .search-icon {
    font-size: 23px;
    float: right;
  }
  .search-textbar {
    float: right;
  }
  .time {
    float: left;
    margin-left: 10px;
    clear: both;
    font-weight: bold;
    color: gray;
  }
  .logo {
    width: 20px;
    height: 20px;
    float: left;
    margin-top: 5px;
    margin-left: 15px;
    clear: both;
  }
`;
async function searchByTitle(e) {
  if (e.key === "Enter") {
    const data = await fetch(
      `https://hn.algolia.com/api/v1/search?query=${e.target.value}`
    );
    const json = await data.json();

    return json;
  }
}
export default function DetailSearch() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [onSearch, setOnSearch] = useState(false);
  const [searchDate, setSearchData] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    setInterval(() => {
      let date = new Date();
      let minute = date.getMinutes();
      if (minute < 10) minute = "0" + minute;
      setHour(date.getHours());
      setMinute(minute);
    }, 1000);
  }, []);

  useEffect(() => {
    dispatch({ type: "search", payload: searchDate });
    if (searchDate && Object.keys(searchDate).length !== 0) {
      Router.push("/components/detail/DetailFeed/Search");
    }
  }, [searchDate]);

  return (
    <Layout>
      <span className="time">
        {hour}:{minute}
      </span>
      <Link href={"/"}>
        <a href="">
          <img
            src="https://jeondoh.github.io/haker-news/static/media/Logo.0f14769556901466dd1a.png"
            alt=""
            className="logo"
          />
        </a>
      </Link>

      <div className="search">
        <span>
          <i
            onClick={() => {
              // const elem = document.querySelector(".search");
              // elem.classList.add("active");
              setOnSearch((e) => !e);
            }}
            className="material-icons search-icon"
          >
            search
          </i>
        </span>
        {onSearch && (
          <span>
            <input
              type="text"
              className="search-textbar"
              placeholder="search title.."
              onKeyPress={async (e) => {
                setSearchData(await searchByTitle(e));
              }}
            />
          </span>
        )}
      </div>
    </Layout>
  );
}
