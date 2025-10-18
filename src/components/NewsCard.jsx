import React from "react";
import { FaEye, FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { format } from "date-fns";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    details,
    rating,
    total_view,
    thumbnail_url,
    tags,
  } = news;

  return (
    <div className="card bg-base-100 shadow-md border border-gray-400 rounded-2xl overflow-hidden">
      {/* Author & Actions */}
      <div className="flex items-center justify-between px-4 py-3 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-sm text-gray-700">
              {author.name}
            </h3>
            <p className="text-xs text-gray-500">
              {format(new Date(author.published_date), "yyyy-MM-dd")}
            </p>
          </div>
        </div>
        <button className="text-gray-500 hover:text-primary flex gap-3">
            <FaRegBookmark />
          <FaShareAlt className="text-lg" />
        </button>
      </div>

      {/* Title */}
      <div className="px-4 mt-3">
        <h2 className="font-bold text-lg text-gray-800 leading-snug">
          {title}
        </h2>
      </div>

      {/* Image */}
      <figure className="px-4 py-3">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full rounded-lg object-cover"
        />
      </figure>

      {/* Details */}
      <div className="px-4 pb-4">
        <p className="text-sm text-gray-600 mb-2">
          {details.slice(0, 250)}...
          <span className="text-primary font-medium cursor-pointer">
            {" "}
            Read More
          </span>
        </p>

        {/* Tags */}
        <div className="text-xs text-gray-400 mb-2">
          Tags: {tags.join(", ")}
        </div>

        {/* Footer: Rating + Views */}
        <div className="flex items-center justify-between border-t border-gray-400 pt-3 mt-2">
          <div className="flex items-center gap-2 text-orange-500">
            {"★".repeat(rating.number)}
            <span className="text-gray-700 font-medium ml-1">
              {rating.number.toFixed(1)}
            </span>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
