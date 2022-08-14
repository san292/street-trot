import React from 'react';
import articles from '../data/piecesDetachesData';
import Article from '../components/Article';

const Articles = () => {
  return (
    <div className="grid grid-rows-3 grid-flow-row gap-4 md:grid-flow-col lg:grid-flow-col justify-items-center">
      {articles.map((article) => (
        <Article key={article.id} {...article} />
      ))}
    </div>
  );
};

export default Articles;
