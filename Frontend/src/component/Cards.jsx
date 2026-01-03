import React from "react";

function Cards({ item }) {
  return (
    <div className="px-4 mb-10">
      <div className="card bg-base-100 w-full shadow-lg h-full hover:scale-105 duration-300">

        {/* Book Image */}
        <figure className="bg-base-200">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-60 object-contain mx-auto"
          />
        </figure>

        <div className="card-body">

          {/* Book Name + Category */}
          <div className="flex items-start gap-2">
            <h2 className="text-lg sm:text-xl font-bold leading-snug break-word">
              {item.name}
            </h2>

            <span className="shrink-0 bg-pink-100 text-pink-600 text-xs font-semibold px-3 py-1 rounded-full mt-1">
              {item.category}
            </span>
          </div>

          {/* Author */}
          <p className="text-gray-600 text-sm sm:text-base mt-1">
            {item.title}
          </p>

          {/* Price + Button */}
          <div className="card-actions justify-between items-center mt-4">
            <div className="badge badge-outline text-base font-semibold">
              ₹{item.price}
            </div>

            <button className="px-4 py-2 rounded-full border-2 border-pink-400 text-pink-500 hover:bg-pink-400 hover:text-white transition font-semibold">
              Buy Now
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Cards;
