import React, { useEffect, useState } from "react";

interface NewsItem {
  title: string;
  link: string;
  mediaContentUrl: string;
  description: string;
  pubDate: string;
}

const NewsFeed: React.FC = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch(
        "https://api.rss2json.com/v1/api.json?rss_url=https://www.business-standard.com/rss/finance-103.rss&api_key=urdevkavbzb9bliwal7qfvbckbmurfethtlkvrm4"
      );
      const data = await response.json();
      console.log(data);
      setNews(data.items);
    };

    fetchNews();
  }, []);

  return (
    <div>
      <h2>Finance News</h2>
      <ul>
        {/* {news.map((item, index) => (
          <li key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <h3>{item.title}</h3>
            </a>
            <p>{item.description}</p>
            <p>{item.mediaContentUrl}</p>
            <p>{item.pubDate}</p>
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default NewsFeed;
