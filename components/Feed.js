import React from 'react';
import Stories from './Stories'
import Posts from './Posts';
import MiniProfile from './MiniProfile';
import Suggestions from './Suggestions';
import { useSession } from 'next-auth/react';

function Feed() {
  const { data: session } = useSession()

  return (
    <div>
      {session ? (
        <main className='grid grid-cols-1 md:grid-cols-2 md:max-w-3xl 
        xl:grid-cols-3 xl:max-w-6xl mx-auto'>
            <section className='col-span-2'>
              <Stories />
              <Posts />
            </section>

            <section className='hidden xl:inline-grid md:col-span-1 col-span-1'>
              <div className='fixed'>
                <MiniProfile />
                <Suggestions />
              </div>
            </section>

        </main>
        ) : (
          <div className="h-[calc(100vh-205px)] flex flex-col items-center justify-center text-center">
            <h1 className='text-[35px]'>You are not logged in</h1>
            <a 
              href="/auth/signin"
              className=" mt-5 p-3 bg-blue-500 rounded-lg text-white"
            >
              Take me to the sign In page
            </a>
          </div>
        )}
    </div>
  )
}

export default Feed;