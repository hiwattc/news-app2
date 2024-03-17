import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NewsList.css';

const NewsList = ({ onItemClick }) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr&page=${page}&apiKey=d1bdf41741da4f9b92fc2316cbb90bd3`);
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };
    fetchNews();
  }, [page]);

  const handleClick = (article) => {
    setSelectedArticle(article);
  };

  return (
    <div className="news-container">
      <div className="news-list">
        <h2>News List</h2>
        {articles.map((article, index) => (
          <div key={index} className="news-item" onClick={() => handleClick(article)}>
            <img src={article.urlToImage} alt="News" />
            <div className="news-info">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </div>
          </div>
        ))}
        <div className="pagination">
          <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous Page</button>
          <button onClick={() => setPage(page + 1)}>Next Page</button>
        </div>
      </div>

      <div className="news-detail">
        {selectedArticle && (
          <div>
            <h2>News Detail</h2>
            <h3>{selectedArticle.title}</h3>
            <img src={selectedArticle.urlToImage} alt="News" />
            <p>{selectedArticle.description}</p>
            <a href={selectedArticle.url} target="_blank" rel="noopener noreferrer">Read more</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsList;

