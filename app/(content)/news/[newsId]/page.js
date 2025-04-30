import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

const DynamicNews = ({ params }) => {
  const newsSlug = params.newsId;
  const singleNews = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);
  if (!singleNews) {
    notFound();
  }
  return (
    <article>
      <header>
        <Link href={`/news/${singleNews.slug}/image`}>
          {" "}
          <img
            src={`/images/news/${singleNews.image}`}
            alt={singleNews.title}
          />
        </Link>
        <h1> {singleNews.title}</h1>
        <time datetime={singleNews.date}>{singleNews.date} </time>

        <p>News Id: {singleNews.id} </p>
      </header>
      <p> {singleNews.content} </p>
    </article>
  );
};

export default DynamicNews;
