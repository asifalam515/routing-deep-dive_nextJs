import React from "react";
import { DUMMY_NEWS } from "/dummy-news";
import Link from "next/link";
import NewsList from "@/components/NewsList";

const NewsPage = () => {
  return (
    <div>
      <h1 class="text-5xl">News Page</h1>
      <NewsList news={DUMMY_NEWS}></NewsList>
    </div>
  );
};

export default NewsPage;
