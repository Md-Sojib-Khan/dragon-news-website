import React from "react";
import { format } from "date-fns";
import { FaStar, FaRegEye, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view,
    tags,
  } = news;

  return (
    <div className="card bg-base-100 shadow-md rounded-xl overflow-hidden hover:shadow-2xl transition duration-300">
      {/* Top Section: Author & Share */}
      <div className="flex justify-between items-center px-4 pt-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-sm">{author.name}</h3>
            <p className="text-xs text-gray-500">
              {format(new Date(author.published_date), "yyyy-MM-dd")}
            </p>
          </div>
        </div>
        <FaShareAlt className="text-gray-600 cursor-pointer hover:text-primary" />
      </div>

      {/* Thumbnail */}
      <figure className="px-4 pt-3">
        <img
          src={thumbnail_url}
          alt="news thumbnail"
          className="rounded-lg w-full object-cover h-60"
        />
      </figure>

      {/* Title & Details */}
      <div className="card-body px-4 pb-3">
        <h2 className="card-title text-base font-semibold leading-tight hover:text-primary">
          {title}
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          {details.slice(0, 200)}...
        </p>

        {/* Tags */}
        <div className="mt-2">
          <p className="text-xs text-gray-500">
            Tags: {tags?.join(", ")}
          </p>
        </div>

        {/* Read More */}
        <Link
          to={`/news-details/${id}`}
          className="text-secondary font-medium mt-2 inline-block underline"
        >
          Read More
        </Link>

        {/* Footer (Rating & Views) */}
        <div className="flex justify-between items-center mt-3 border-t pt-2">
          {/* Rating */}
          <div className="flex items-center gap-1 text-orange-400">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`${
                  i < Math.round(rating?.number)
                    ? "text-orange-400"
                    : "text-gray-300"
                }`}
              />
            ))}
            <span className="ml-1 text-sm text-gray-700">
              {rating?.number?.toFixed(1)}
            </span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-1 text-gray-600">
            <FaRegEye />
            <span className="text-sm">{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
