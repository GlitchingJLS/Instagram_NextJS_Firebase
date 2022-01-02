import React from 'react';
import Stories from './Stories'
import Posts from './Posts';

function Suggestions() {
  const data = [
    {
      id: '123',
      username: "espn",
      img: "https://bit.ly/31eG3iI"
    },
    {
      id: '123',
      username: "bleacherreport",
      img: "https://bit.ly/32DeTCP"
    },
    {
      id: '123',
      username: "spotify",
      img: "https://bit.ly/3mJjlqC"
    },

  ]

  return (
      <div className='mt-4 ml-10'>
        <div className="flex justify-between text-sm mb-5">
          <h3 className="text-sm font-bold text-gray-500">
            Suggestions for you
          </h3>
          <button className='text-gray-600'>See All</button>
        </div>

        {
          data.map(profile => (
            <div
              className='flex items-center justify-between mt-3'
            >
              <img 
                className='w-10 h-10 rounded-full p-[2px]'
                src={profile.img} 
                alt="" 
              />

              <div className='flex-1 ml-4'>
                <h2 className='font-semibold text-sm'>{profile.username}</h2>
                <h3 className='text-xs text-gray-400'>Recommended</h3>
              </div>

              <button className='text-xs text-blue-400 font-bold'>Follow</button>
            </div>
          ))
        }
      </div>
  );
}

export default Suggestions;