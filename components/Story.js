import React from 'react';

function Story({key, img, username}) {
  return (
      <div key={key}>
          <img className="w-14 h-14 rounded-full p-[1.5px] 
          border-red-500 border-2 hover:scale-110 transition transform
          duration-200 ease-out cursor-pointer" 
          src={img} 
          alt={`${username}_avatar`}
          />
          <p className='text-xs w-14 truncate text-center'>{username}</p>
      </div>
  );
}

export default Story;