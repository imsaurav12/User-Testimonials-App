import React from 'react'
import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa'

const Card = (props) => {
    let review = props.review; // single card me 1 review aayega
  return (
    <div className="max-w-md mx-auto bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl p-8 text-center space-y-6 transition-transform transform hover:scale-105 duration-300">
      
    {/* Profile Image */}
    <div>
      <img
        src={review.image}
        alt={review.name}
        className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-blue-500 shadow-lg"
      />
    </div>

    {/* Name & Job */}
    <div>
      <h2 className="text-2xl font-bold text-gray-800">{review.name}</h2>
      <p className="text-sm uppercase tracking-wider text-blue-600">{review.job}</p>
    </div>

    {/* Review Text with inline quotes */}
    <div className="text-gray-600 px-4 italic space-y-2">
      <div className="flex justify-center text-blue-400 text-xl">
        <FaQuoteLeft />
      </div>
      <p>"{review.text}"</p>
      <div className="flex justify-center text-blue-400 text-xl">
        <FaQuoteRight />
      </div>
    </div>
  </div>
  )
}

export default Card
