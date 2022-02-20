import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import DetailPage from "../DetailPage";
import { useSelector, useDispatch } from "react-redux";
import Modal from "./Modal";
import { useTheme } from "next-themes";

export default function Category() {
  const [show, setShow] = useState({ user: "", show: false }); // 유저정보 팝업 노출여부
  const [userInfo, setUserInfo] = useState({});
  const [current, setCurrent] = useState([]);
  const router = useRouter();
  const dispatch = useDispatch();
  const reduxState = useSelector((s) => s);
  const { category } = router.query;
  const { theme, setTheme } = useTheme();
  try {
    setTheme(() => (reduxState.themeReducer === "light" ? "light" : "dark"));
  } catch (error) {
    console.log("error: " + error);
  }
  console.log(theme);
  useEffect(async () => {
    let data = await reduxState.dataReducer.data;
    if (category === "Search") {
      // route가 검색결과로 들어온 경우
      data = reduxState.searchDataReducer.hits;
      setCurrent(data);
    } else {
      setCurrent(data.find((e) => e.name === category).data.data);
    }
  });

  useEffect(async () => {
    if (show.user) {
      const res = await fetch(
        `https://hacker-news.firebaseio.com/v0/user/${show.user}.json?print=pretty`
      );
      const data = await res.json();
      setUserInfo(data);
      dispatch({ type: "user_data", payload: data });
    }
  }, [show]);
  return (
    <div className="container">
      <div className="category">{category}</div>
      <Modal {...userInfo} show={show} setShow={setShow}></Modal>
      {current?.map((e, i) => (
        <DetailPage key={i} {...e} setShow={setShow}></DetailPage>
      ))}

      <style jsx>{`
        .category {
          color: #ff6600;
          font-size: 36px;
          font-weight: bold;
          margin-bottom: 10px;
          border-bottom: solid #c8c8c8 1px;
        }
      `}</style>
    </div>
  );
}
