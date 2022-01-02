import { BookmarkIcon, ChatIcon, DotsHorizontalIcon, EmojiHappyIcon, HeartIcon, PaperAirplaneIcon } from '@heroicons/react/outline';
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid';
import { doc, addDoc, collection, deleteDoc, onSnapshot, orderBy, query, serverTimestamp, setDoc } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';
import { db } from '../firebase';

function Post({ id, username, userImg, img, caption }) {
  const { data: session } = useSession()
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState([])
  const [likes, setLikes] = useState([])
  const [hasLiked, setHasLiked] = useState(false)

  useEffect(() => {
    onSnapshot(query(collection(db, 'posts', id, 'comments'), orderBy('timestamp', 'desc')), snapshot => {
      setComments(snapshot.docs)
    })
  }, [db, id])

  useEffect(
    () => 
    onSnapshot(collection(db, 'posts', id, 'likes'), snapshot =>
      setLikes(snapshot.docs)
    )
    [db, id]
  )

  useEffect(
    () => 
    setHasLiked(
      likes.findIndex((like) => like.id === session?.user?.uid) !== -1
    ),
    [likes]
  )

  const likePost = async () => {
    if(hasLiked) {
      await deleteDoc(doc(db, 'posts', id, 'likes', session.user.uid))
    } else {
      await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
        username: "arnaldo",
      })
    }
  }

  const sendComment = async(e) => {
    e.preventDefault()

    const commentToSend = comment
    setComment('')

    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: session.user.username,
      profileImg: session.user.image,
      timestamp: serverTimestamp()
    })
  }

  return (
      <div className='bg-white my-7 border rounded-sm'>
        
        <div className='flex items-center p-5'>
          <img className='rounded-full w-12 h-12 object-contain border p-1 mr-3' src={userImg} alt="" />
          <p className='flex-1 font-bold'>{username}</p>

          <DotsHorizontalIcon className='h-5'/>
        </div>

        <img className='object-cover w-full' src={img} alt="" />

        <div className='flex items-center justify-between px-4 pt-4'>
          <div className="flex space-x-4">
            {hasLiked ? 
              <HeartIconFilled onClick={likePost} className='postBtn text-red-500' />  
            : 
              <HeartIcon onClick={likePost} className='postBtn' />
            }
            <ChatIcon className='postBtn'/>
            <PaperAirplaneIcon className='postBtn'/>
          </div>
          <BookmarkIcon className='postBtn'/>
        </div>

        <p className='p-5 truncate'>
          {
            likes.length > 0 && (
              <p className='font-bold mb-2'>{likes.length} likes</p>
            )
          }
          <span className='font-bold mr-2'>{username} </span>
          {caption}
        </p>

        {comments.length > 0 && (
          <div className='ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin'>
            {comments.map(comment => (
              <div className='flex items-center space-x-2 mb-3'>
                <img className='h-7 rounded-full' src={comment.data().profileImg} alt="" />
                <p className='text-sm flex-1'>
                  <span className='font-bold'>{comment.data().username}</span>{" "}
                  {comment.data().comment}
                </p>

                <Moment fromNow className='pr-5 text-xs'>{comment.data().timestamp?.toDate()}</Moment>
              </div>
            ))}
          </div>
        )}

        <form className='flex items-center p-4'>
          <EmojiHappyIcon className='h-7'/>
          <input 
            className='border-none flex-1 focus:ring-0 outline-none' 
            type="text" 
            value={comment}
            placeholder='comment...'
            onChange={e => setComment(e.target.value)}
          />
          <button type='submit' onClick={sendComment} className='font-bold text-blue-400'>Post</button>
        </form>
      </div>
  );
}

export default Post;