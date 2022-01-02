import React from 'react';
import Stories from './Stories'
import Posts from './Posts';
import { useSession, signOut } from 'next-auth/react';

function MiniProfile() {
  const { data: session } = useSession()

  return (
      <div>
        <div className='flex items-center justify-between mt-14 ml-10'>
          <img className="w-16 h-16 rounded-full border p-[2px]" src={session?.user.image} alt="" />
          <div className='flex-1 mx-5'>
            <h2 className='font-bold'>{session?.user.username}</h2>
            <h3 className='text-sm text-gray-400'>Welcome to Instagram</h3>
          </div>
        
          <button onClick={signOut} className='text-blue-400 text-sm font-bold'>Sign Out</button>
        </div>
      </div>
  );
}

export default MiniProfile;