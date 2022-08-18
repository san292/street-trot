import React from 'react';
import articles from '../data/piecesDetachesData';
import Article from '../components/Article';

const Articles = () => {
  return (
    <div className="grid grid-cols-1 gap-y-6 md:grid-cols-4 sm:grid-cols-2 ">
      {/* <div className="flex-wrap  justify-items-center"> */}
      {articles.map((article) => (
        <Article key={article.id} {...article} />
      ))}
    </div>
  );
};

export default Articles;
