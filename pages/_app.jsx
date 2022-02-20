import DetailSearch from "./components/detail/DetailSearch";
import Footer from "./components/Footer";
import { wrapper } from "../redux/store";
import Head from "next/head";
import "../styles/globals.css";
import { useSelector } from "react-redux";
import Loading from "./components/Loading";
import { ThemeProvider, useTheme } from "next-themes";

function _app({ Component, pageProps }) {
  const state = useSelector((state) => state);

  // setTheme((e)=>state.themeReducer==="light"?"light":"dark")
  return (
    <div className="container">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        ></link>
      </Head>
      <DetailSearch></DetailSearch>
      <ThemeProvider>
        {state.loadingReducer ? (
          <div className="main-content">
            <div className="content-box">
              <Component {...pageProps}></Component>
            </div>
          </div>
        ) : (
          <div className="loading-content">
            <Loading></Loading>
          </div>
        )}
      </ThemeProvider>

      <Footer></Footer>

      <style jsx>{`
        .container {
          width: 375px;
          border: 1px gray solid;
          border-radius: 20px;
          margin: auto;
          margin-top: 20px;
        }

        .main-content {
          height: 600px;
          overflow-x: hidden;
        }
        .loading-content {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 600px;
        }
        ::-webkit-scrollbar {
          // width: 0; /* Remove scrollbar space */
          // background: transparent; /* Optional: just make scrollbar invisible */
          width: 8px;
        }
        ::-webkit-scrollbar-thumb {
          background-color: orange;
          border-radius: 30px;
          background-clip: padding-box;
          border: 2px solid transparent;
        }
      `}</style>
    </div>
  );
}

export default wrapper.withRedux(_app);
