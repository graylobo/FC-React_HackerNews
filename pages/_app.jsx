import DetailSearch from "./components/detail/DetailSearch";
import Footer from "./components/Footer";
import { wrapper } from "../redux/store";
import Head from "next/head";
import "../styles/globals.css";
function _app({ Component, pageProps }) {
  return (
    <div className="container">
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
      {/* <DetailSearch></DetailSearch> */}
      <Footer></Footer>
      <div className="main-content">
        <div className="content-box">
          <Component {...pageProps}></Component>
        </div>
      </div>

      <style jsx>{`
        .container {
          width: 375px;
          margin-left: 500px;
        }
        .main-content {
          height: 600px;
          overflow-x: hidden;
        }
        ::-webkit-scrollbar {
          width: 0; /* Remove scrollbar space */
          background: transparent; /* Optional: just make scrollbar invisible */
        }
      `}</style>
    </div>
  );
}

export default wrapper.withRedux(_app);
