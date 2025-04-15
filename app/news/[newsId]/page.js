import React from "react";

const DynamicNews = ({ params }) => {
  return (
    <div>
      <h1>Dynamic Route {params.newsId}</h1>
    </div>
  );
};

export default DynamicNews;
