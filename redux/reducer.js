import axios from "axios";

async function getData() {
  const news = await axios.get("https://api.hnpwa.com/v0/news/1.json");
  const newest = await axios.get("https://api.hnpwa.com/v0/newest/1.json");
  const ask = await axios.get("https://api.hnpwa.com/v0/ask/1.json");
  const show = await axios.get("https://api.hnpwa.com/v0/show/1.json");
  const jobs = await axios.get("https://api.hnpwa.com/v0/jobs/1.json");
  const categories = [
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
  ];
  return categories;
}

const dataState = {
  data: getData(),
};
const dataReducer = (state = dataState, action) => {
  switch (action.type) {
    case "some":
      console.log(action.payload);
      return state;

    default:
      return state;
  }
};

export default dataReducer;
