import React from "react";
import DetailSearch from "./DetailSearch";
import DetailCategoryName from "./DetailCategoryName";
import DetailPage from "./DetailPage";
import DetailFooter from "./DetailFooter";
import Head from "next/head";

export default function DetailFeed() {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        ></link>
      </Head>
      <DetailSearch></DetailSearch>
      <DetailCategoryName></DetailCategoryName>
      <DetailPage></DetailPage>
      <DetailFooter></DetailFooter>
    </div>
  );
}
