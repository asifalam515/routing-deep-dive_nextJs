import { DUMMY_NEWS } from "@/dummy-news";
import React from "react";

const DynamicNews = ({ params }) => {
  const newsSlug = params.newsId;
  const singleNews = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);
  return (
    <article>
      <header>
        <img src={`/images/news/${singleNews.image}`} alt={singleNews.title} />
        <h1> {singleNews.title}</h1>
        <time datetime={singleNews.date}>{singleNews.date} </time>

        <p>News Id: {singleNews.id} </p>
      </header>
      <p> {singleNews.content} </p>
    </article>
  );
};

export default DynamicNews;
