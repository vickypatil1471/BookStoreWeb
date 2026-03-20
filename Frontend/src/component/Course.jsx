import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import axios from 'axios'
import { Link } from "react-router-dom"
import { useSearch } from '../context/searchprovider'

function Course() {

  const { searchTerm } = useSearch()
  const [book, setBook] = useState([])

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:5001/book")
        setBook(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getBook()
  }, [])

  // 🔍 SEARCH FILTER (BY NAME)
  const filteredBooks = book.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        
        {/* HEADER */}
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className="text-2xl md:text-4xl">
            We're Delighted to have you <span className="text-pink-500">Here!</span> 😊
          </h1>

          <p className='mt-12'>
          Welcome to Finolex Knowledge Hub, your gateway to learning and growth. Explore our wide range of courses, discover new skills, and take the next step toward your academic and professional goals. We're excited to be part of your journey—let’s learn something new every day!
        </p>

          <Link to="/">
            <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-200'>
              Back
            </button>
          </Link>
        </div>

        {/* COURSE LIST */}
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4 gap-4 px-2'>
          {filteredBooks.length > 0 ? (
            filteredBooks.map((item) => (
              <Cards key={item._id} item={item} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No courses found
            </p>
          )}
        </div>

      </div>
    </>
  )
}

export default Course
