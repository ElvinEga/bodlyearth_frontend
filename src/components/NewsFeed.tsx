import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { NewsFeedData } from "../data/newsData";
// import { format, isToday, isYesterday } from "date-fns";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

// const API_KEY = "UTY461EDC532SO4B";
// function formatDate(inputDate: string) {
//   const parsedDate = new Date(inputDate);

//   if (isToday(parsedDate)) {
//     return "Today";
//   } else if (isYesterday(parsedDate)) {
//     return "Yesterday";
//   } else {
//     return format(parsedDate, "MMMM dd, yyyy");
//   }
// }

// const listStockPrices = async (stockSymbols: string[]) => {
//   const response = await axios.get(
//     `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbols.join(
//       ","
//     )}&apikey=${API_KEY}`
//   );

//   const stockPrices = response.data["Global Quote"];

//   return stockPrices;
// };

const NewsFeed: React.FC = () => {
  const [news, setNews] = useState<NewsFeedData>();
  // const [stockPrices, setStockPrices] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Frss.app%2Ffeeds%2F_Q8UuKarjC5hmwzTp.xml&api_key=urdevkavbzb9bliwal7qfvbckbmurfethtlkvrm4"
        );

        if (response.data) {
          setNews(response.data);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    // const listStockPricesAsync = async () => {
    //   const stockPrices = await listStockPrices(["AAPL", "GOOGL", "MSFT"]);

    //   setStockPrices(stockPrices);
    // };
    fetchNews();
    // listStockPricesAsync();
  }, []);

  return (
    <div>
      <>
        {/* Card Blog */}
        <div className=" px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Title */}
          <div className=" mb-10">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
              Agriculture & Climate News
            </h2>
            {/* <p className="mt-1 mb-3 text-gray-600 dark:text-gray-400">
              Navigate the financial landscape with insights, trends, and expert
              analyses tailored for both seasoned investors and financial
              novices alike
            </p> */}

            {/* <div className="flex gap-4 p-3 border-b border-t border-gray-200  dark:bg-gray-800 dark:border-gray-700">
              <div className="flex">
                <span className="text-base font-bold">Crude Oil</span>
                <span className="text-green-500 font-bold px-2">
                  <i className="bi bi-arrow-up-short"></i>+1.89%
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold">US 10 Yr</span>
                <span className="text-red-500 font-semibold px-2">
                  <i className="bi bi-arrow-down-short"></i>-0.22%
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-base font-bold">Euro</span>
                <span className="text-green-500 font-bold px-2">
                  <i className="bi bi-arrow-up-short"></i>+0.17%
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-base font-bold">Dow Jones</span>
                <span className="text-green-500 font-bold px-2">
                  <i className="bi bi-arrow-up-short"></i>+1.15%
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-base font-bold">Russell 2000</span>
                <span className="text-green-500 font-bold px-2">
                  <i className="bi bi-arrow-up-short"></i>+1.07%
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-base font-bold">Gold</span>
                <span className="text-gray-500 font-bold px-2">N/A</span>
              </div>
              {stockPrices?.map((stockPrice, index) => (
                <li key={stockPrice["Symbol"]}>
                  {stockPrice["Symbol"]} - {stockPrice["Price"]}
                </li>
              ))}
            </div> */}
          </div>
          {/* End Title */}

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-7 gap-2">
            {/* Card */}
            {news?.items?.slice(0, 7).map((item, index) => (
              <Link
                className="group block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                to={item.link}
                key={index}
                target="_blank"
              >
                <div className="w-full ">
                  <img
                    className="object-cover h-40 w-52 rounded-xl"
                    src={item?.enclosure?.link || "/img/news_placeholder.jpg"}
                    alt={item.title}
                  />
                </div>
                <h3 className="mt-2 text-sm font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.author}
                </p>
              </Link>
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
