import Head from "next/head";
import Main from "./category/Main";
import Feed from "./components/Feed";
import PlainContent from "./components/PlainContent";
import Link from "next/Link";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Home() {
  const [news, setNews] = useState([]);
  const [newest, setNewest] = useState([]);
  const [ask, setAsk] = useState([]);
  const [show, setShow] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(async () => {
    const news = await axios.get("https://api.hnpwa.com/v0/news/1.json");
    const newest = await axios.get("https://api.hnpwa.com/v0/newest/1.json");
    const ask = await axios.get("https://api.hnpwa.com/v0/ask/1.json");
    const show = await axios.get("https://api.hnpwa.com/v0/show/1.json");
    const jobs = await axios.get("https://api.hnpwa.com/v0/jobs/1.json");
    setNews(news);
    setNewest(newest);
    setAsk(ask);
    setShow(show);
    setJobs(jobs);
    setCategories([
      {
        name: "news",
        info: "Find out most hot issues",
        data: news,
        color: "#FD6106",
      },
      {
        name: "newest",
        info: "Fast, Fresh, Fashionable",
        data: newest,
        color: "#7B61FF",
      },
      {
        name: "ask",
        info: "Ask and get fresh informations",
        data: ask,
        color: "#DB00FF",
      },
      {
        name: "show",
        info: "Share and grow together",
        data: show,
        color: "#69A075",
      },
      {
        name: "jobs",
        info: "Your new possibility",
        data: jobs,
        color: "#FEBB10",
      },
    ]);
  }, []);
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        ></link>
      </Head>
      {categories.map((e) => {
        return <Feed key={e.name} {...e}></Feed>;
      })}
    </div>
  );
}
