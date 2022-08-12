import React from 'react';
import articles from '../data/piecesDetachesData';
import Article from '../components/Article';

const Articles = () => {
  return (
    <div className="flex-wrap justify-between items-center">
      {articles.map((article) => (
        <Article key={article.id} {...article} />
      ))}
    </div>
  );
};

export default Articles;
