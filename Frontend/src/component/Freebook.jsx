import React, { useEffect, useState } from "react";
import axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Cards from "./Cards";
import { useSearch } from "../context/searchprovider";

function Freebook() {
  const { searchTerm } = useSearch()
  const [book, setBook] = useState([]);

  const filteredBooks = book.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:5001/book");
        const data = res.data.filter(
          (item) => item.category === "Free"
        );
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-0">
      <h1 className="font-semibold text-3xl pb-2 py-0">
        Free Offered Courses
      </h1>
      <p className="mb-8 text-gray-600">
        This book is provided free of cost to support learners enrolled
        in our offered courses and to encourage continuous learning
        through the library.
      </p>

      <Slider {...settings}>
        {filteredBooks.length > 0 ? (
            filteredBooks.map((item) => (
              <Cards key={item._id} item={item} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No courses found
            </p>
          )}
      </Slider>
       {/* COURSE LIST */}
        
          
        
    </div>
  );
}

export default Freebook;
