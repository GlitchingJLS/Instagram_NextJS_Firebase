import React from 'react';
import { useSession } from 'next-auth/react';
import Story from './Story'

function Stories() {
  const data = [
    {
      username: "willsmith",
      img: "https://bit.ly/32Kp34c"
    },
    {
      username: "raptors",
      img: "https://bit.ly/3quoq6U"
    },
    {
      username: "overtime",
      img: "https://bit.ly/3FKr0MO"
    },
    {
      username: "cbf_futebol",
      img: "https://bit.ly/32zleyY"
    },
    {
      username: "kevinhart4real",
      img: "https://bit.ly/3eI83y5"
    },
    {
      username: "marvel",
      img: "https://bit.ly/3pFnaPb"
    },
    {
      username: "stephencurry30",
      img: "https://bit.ly/32C40Bc"
    },
    {
      username: "razer",
      img: "https://bit.ly/3z9A4YQ"
    },
    {
      username: "theweeknd",
      img: "https://bit.ly/3mFyxoj"
    },
    {
      username: "neymarjr",
      img: "https://bit.ly/3qFe1pn"
    },
    {
      username: "nba",
      img: "https://bit.ly/3qAuYkB"
    },
    {
      username: "wnba",
      img: "https://bit.ly/3pEBd7J"
    },
    {
      username: "therock",
      img: "https://bit.ly/32SzCT2"
    },
    {
      username: "eminem",
      img: "https://bit.ly/31cpLXF"
    },
    {
      username: "guaranaantarctica",
      img: "https://bit.ly/3qBCziT"
    },
    {
      username: "wizardingworld",
      img: "https://bit.ly/3ey6eE9"
    },
    {
      username: "zachlavine8",
      img: "https://bit.ly/3EJtyJw"
    },
  ]

  const { data: session } = useSession()
  return (
      <div className='flex space-x-3 p-6 mt-8 border-gray-200
       border rounded-sn overflow-x-scroll scrollbar-thin scrollbar-thumb-black'>
        <Story 
            key={session?.user.id}
            img={session?.user.image}
            username={session?.user.username}
        />
        {data.map((user, index) => (
          <Story 
            key={index}
            img={user.img}
            username={user.username}
          />
        ))}
      </div>
  );
}

export default Stories;