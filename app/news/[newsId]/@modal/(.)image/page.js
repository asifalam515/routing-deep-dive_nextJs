import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";
import React from "react";

const InterceptedImagePage = ({ params }) => {
  const newItemSlug = params.newsId;
  const singleNews = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);
  if (!singleNews) {
    notFound();
  }
  return (
    <>
      <div className="modal-backdrop"></div>
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img
            src={`/images/news/${singleNews.image}`}
            alt={singleNews.title}
          />
        </div>
      </dialog>
    </>
  );
};

export default InterceptedImagePage;
