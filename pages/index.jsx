import Main from "./category/Main";
import Feed from "./components/Feed";
import PlainContent from "./components/PlainContent";
import Link from "next/Link";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
export default function Home() {
  // 주제별 상태
  const state = useSelector((state) => state);
  // 주제별 상태를 담는 배열
  const [categories, setCategories] = useState([]);
  useEffect(async () => {
    setCategories(await state.data);
  });

  return (
    <div>
      {categories.map((e) => {
        return <Feed key={e.name} {...e}></Feed>;
      })}
    </div>
  );
}
