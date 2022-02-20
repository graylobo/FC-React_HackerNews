import styled from "@emotion/styled";
import Link from "next/link";
import Router from "next/router";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAsync } from "react-async";
import { useSelector } from "react-redux";
const Layout = styled.div`
  border-bottom: solid #ff6600 1px;
  position: relative;
  height: 60px;

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
    visibility: hidden;
    width: 0px;
    transition: all 1s;
  }
  .active {
    width: 150px;
    visibility: visible;
  }
  .time {
    float: left;
    margin-left: 18px;
    clear: both;
    font-weight: bold;
    color: gray;
    font-size: 15px;
  }
  .logo {
    width: 20px;
    height: 20px;
    float: left;
    margin-top: 5px;
    margin-left: 15px;
    clear: both;
  }
  .theme-toggle {
    width: 20px;
    height: 20px;
    float: left;
    margin-top: 3px;
    margin-left: 10px;
    color: orange;
    cursor: pointer;
  }
  .material-icons {
    font-size: 23px;
  }
`;
async function searchByTitle(e, dispatch) {
  if (e.key === "Enter") {
    dispatch({ type: "loading" });
    const data = await fetch(
      `https://hn.algolia.com/api/v1/search?query=${e.target.value}`
    );
    const json = await data.json();
    dispatch({ type: "finish" });
    return json;
  }
}

export default function DetailSearch() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [onSearch, setOnSearch] = useState(false);
  const [searchData, setSearchData] = useState({
    result: true,
    response: null,
  });
  const reduxState = useSelector((state) => state);
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
    dispatch({ type: "search", payload: searchData?.response });
    if (
      searchData?.response &&
      Object.keys(searchData?.response).length !== 0
    ) {
      Router.push("/components/detail/DetailFeed/Search");
    }
  }, [searchData]);

  return (
    <Layout>
      <span className="time">
        {hour}:{minute}
      </span>
      <Link href={"/"}>
        <a href="">
          <img src="react_logo.png" alt="" className="logo" />
        </a>
      </Link>
      <div
        className="theme-toggle"
        onClick={(e) =>
          reduxState.themeReducer === "light"
            ? dispatch({ type: "dark" })
            : dispatch({ type: "light" })
        }
      >
        {reduxState.themeReducer === "light" ? (
          <span className="material-icons ">light_mode</span>
        ) : (
          <span className="material-icons">nightlight</span>
        )}
      </div>

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
        <span>
          <input
            type="text"
            className={`search-textbar ${onSearch && "active"}`}
            placeholder="search title.."
            onKeyPress={async (e) => {
              setSearchData({
                result: true,
                response: await searchByTitle(e, dispatch),
              });
            }}
          />
        </span>
      </div>
    </Layout>
  );
}
