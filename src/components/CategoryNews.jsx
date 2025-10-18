import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "./NewsCard";


const CategoryNews = () => {
    const allNews = useLoaderData();
    const {id} = useParams();
    // console.log({id, allNews})
    const [categoryNews, setCategoryNews] = useState([]);
    useEffect(()=>{
        if (id == "0") {
            setCategoryNews(allNews);
        } else if (id == "1") {
            const filteredNews = allNews.filter(news => news.others.is_today_pick === true);
            setCategoryNews(filteredNews);
        } else {
            const filteredNews = allNews.filter(news => news.category_id == id);
            setCategoryNews(filteredNews);
        }
    },[id, allNews])
  return (
    <div>
        <h1 className="text-xs text-accent font-medium"><span className="text-lg text-black">{categoryNews.length}</span> news found</h1>

        <div className="grid grid-cols-1 gap-4 mt-5">
            {
                categoryNews.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
            }
        </div>
    </div>
  );
};

export default CategoryNews;
