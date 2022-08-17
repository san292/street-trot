import React from 'react';
import articles from '../data/piecesDetachesData';
import Article from '../components/Article';

const Articles = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 justify-items-center">
      {/* <div className="flex-wrap  justify-items-center"> */}
      {articles.map((article) => (
        <Article key={article.id} {...article} />
      ))}
    </div>
  );
};

export default Articles;
