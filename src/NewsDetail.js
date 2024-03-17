import React from 'react';
import './NewsDetail.css';

const NewsDetail = ({ article }) => {
  return (
    <div className="news-detail-container">
      <h2>News Detail</h2>
      {article && (
        <div className="news-detail">
          <h3>{article.title}</h3>
          <img src={article.urlToImage} alt="News" />
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
      )}
    </div>
  );
};

export default NewsDetail;

