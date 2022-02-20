import Feed from "./components/Feed";
import PlainContent from "./components/PlainContent";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useTheme } from 'next-themes'
export default function Home() {
  // 주제별 상태를 담는 배열
  const [categories, setCategories] = useState([]);
  const state = useSelector((state) => state);
  const { theme, setTheme } = useTheme()
  try {
  setTheme(()=>state.themeReducer==="light" ? "light":"dark")
    
  } catch (error) {
  }
  useEffect(async () => {
    setCategories(await state.dataReducer.data);
  });
  return (
    <div className="container">
      {categories.map((e) => {
        return <Feed key={e.name} {...e}></Feed>;
      })}
      
    </div>
  );
}
