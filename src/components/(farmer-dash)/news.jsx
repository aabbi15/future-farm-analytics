"use client";

import { useState, useEffect } from "react";
import axios from "axios";

export default function News() {
    const [news, setNews] = useState([]);

    const fetchNews = async () => {
        try {
            const response = await axios.get('https://newsapi.org/v2/everything?q=indian%20agriculture&from=2024-07-10&sortBy=publishedAt&apiKey=55c9963358e843eca42002bd690bf927');
            setNews(response.data.articles.slice(0, 20));
        } catch (error) {
            console.error("Error fetching news: ", error)
        }
    }

    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <div className="container mx-auto my-20">
            <div className="bg-slate-50 p-4 relative shadow-lg rounded-lg w-5/6 md:w-5/6 lg:w-4/6 xl:w-5/6 mx-auto">
                <h1 className="font-bold text-center text-3xl text-gray-900">Latest Agriculture News</h1>
                <div className="w-full">
                    <div className="grid grid-cols-2 mt-5 w-full overflow-hidden text-md font-semibold">
                        {news.map((article, index) => (
                            <div key={index} className="border border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                <img src={article.urlToImage} alt="" className="rounded-lg w-full shadow-md object-cover h-48" />
                                <a href={article.url} target="_blank" rel="noreferrer">{article.title}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}