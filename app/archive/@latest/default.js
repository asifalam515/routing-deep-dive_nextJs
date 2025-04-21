import NewsList from "@/components/NewsList";
import { getLatestNews } from "@/lib/news";
import React from "react";

const Default = () => {
  const latestNews = getLatestNews();
  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews}></NewsList>
    </>
  );
};

export default Default;
