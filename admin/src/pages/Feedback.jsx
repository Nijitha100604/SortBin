import React from 'react'
import { assets } from './../assets/assets';

const Feedback = () => {
  return (
    <div className="mt-4 mx-10">
      <div className="flex items-center gap-2">
        <img className="w-11" src={assets.feedback_icon} alt="feedback-icon"/>
        <p className="font-semibold text-medium">Feedbacks</p>
      </div>

      <div className="mt-5 bg-gray-200 p-4 rounded-xl w-170">
        <div className="flex items-center gap-3">
          <img className="w-12 rounded-full border border-sky-800" src={assets.feedback_logo}/>
          <p className="font-medium text-lg">User Feedbacks</p>
        </div>

        <div className="mt-5">
          <div className="grid grid-cols-[2fr_2fr_2fr] items-center gap-x-4 border-b-1 py-1 mb-4 text-gray-900">
            <p>Name</p>
            <p>Email</p>
            <p>Feedback</p>
          </div>

          <div className="grid grid-cols-[2fr_2fr_2fr] items-center gap-x-4 bg-white rounded-xl border p-2">
            <p>Test</p>
            <p>Test@gmail.com</p>
            <p>Good System</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback