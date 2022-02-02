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
      <DetailSearch></DetailSearch>
      <Component {...pageProps}></Component>
      <Footer></Footer>
      <style jsx>{`
        .container {
          width: 312px;
        }
      `}</style>
    </div>
  );
}

export default wrapper.withRedux(_app);
