import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { NewsFeedData } from "../data/newsData";
import { format, isToday, isYesterday } from "date-fns";

function formatDate(inputDate: string) {
  const parsedDate = new Date(inputDate);

  if (isToday(parsedDate)) {
    return "today";
  } else if (isYesterday(parsedDate)) {
    return "yesterday";
  } else {
    return format(parsedDate, "MMMM dd, yyyy");
  }
}

const NewsFeed: React.FC = () => {
  const [news, setNews] = useState<NewsFeedData>();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.realwire.com%2Frss%2F%3Fid%3D337%26row%3D%26view%3DSynopsis"
        );

        if (response.data) {
          setNews(response.data);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchNews();
  }, []);

  return (
    <div>
      <>
        {/* Card Blog */}
        <div className=" px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Title */}
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
              Finacial News
            </h2>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              Navigate the financial landscape with insights, trends, and expert
              analyses tailored for both seasoned investors and financial
              novices alike
            </p>
          </div>
          {/* End Title */}
          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card */}
            {news?.items?.map((item, index) => (
              <a
                className="group block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href={item.link}
                key={index}
              >
                <div className="w-full ">
                  <img
                    className="object-cover h-60 w-96 rounded-xl"
                    src={item?.enclosure?.link || "/img/news_placeholder.jpg"}
                    alt={item.title}
                  />
                </div>
                <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {formatDate(item.pubDate)}
                </p>
              </a>
            ))}
          </div>
          {/* End Grid */}
        </div>
        {/* End Card Blog */}
      </>
    </div>
  );
};

export default NewsFeed;
