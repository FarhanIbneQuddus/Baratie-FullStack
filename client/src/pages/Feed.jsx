import React, { useEffect, useState } from 'react'
import { assets, dummyPostsData } from '../assets/assets'
import Loading from '../components/Loading'
import StoriesBar from '../components/StoriesBar'
import PostCard from '../components/PostCard'
import RecentMessages from '../components/RecentMessages'
import bgall from '../assets/bgall.jpg';
import { useAuth } from '@clerk/clerk-react'
import api from '../api/axios'
import toast from 'react-hot-toast'

const Feed = () => {
  
  const [feeds, setFeeds] = useState([])
  const [loading, setLoading] = useState(true)
  const {getToken} = useAuth()


  const fetchFeeds = async () => {
    try {
      setLoading(true)
      const {data}= await api.get('/api/post/feed', {headers: {Authorization: `Bearer ${await getToken()}`}})

      if(data.success){
        setFeeds(data.posts)
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
    setLoading(false)
  }

  useEffect(()=>{
    fetchFeeds()
  },[])

  return !loading ? (
    <div style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bgall})`, backgroundPosition: '55% 0%'}} className='h-full bg-gradient-to-r from-yellow-100 to-blue-500 overflow-y-scroll no-scrollbar py-10 xl:pr-5 flex items-start justify-center xl:gap-8'>
      {/*  Stories and post lists */}
        <div>
          <StoriesBar />
          <div className='p-4 space-y-6'>
            {feeds.map((post)=>(
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        </div>

      {/* Right sidebar */}
        <div className='max-xl:hidden sticky top-0'>
          <div className='bg-gradient-to-r from-indigo-200 to-blue-100 max-w-xs text-xs p-4 rounded-md inline-flex flex-col gap-2 shadow'>
            <h3 className='text-slate-800 font-semibold'>Sponsored</h3>
            <img src={assets.sponsored_img} className='w-75 h-50 rounded-md' alt="" />
            <p className='text-slate-600'>News Media marketing</p>
            <p className='text-slate-400'>Latest news reporting straight from the Grandline, how the New World is in Uproar</p>
          </div>
            <RecentMessages/>
        </div>    
    </div>
  ) : <Loading />
}

export default Feed
