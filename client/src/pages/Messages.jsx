import React from 'react'
import { dummyConnectionsData } from '../assets/assets'
import { Eye, MessageSquare } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import bgall from '../assets/bgall.jpg';
import { useSelector } from 'react-redux';


const Messages = () => {

  const {connections} = useSelector((state)=>state.connections)
  const navigate = useNavigate()


  return (
    <div style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bgall})`, backgroundPosition: '55% 0%'}} className='min-h-screen relative bg-gradient-to-r from-yellow-100 to-blue-500'>
      <div className='max-w-5xl mx-auto p-6 pt-20'>
        {/* Title*/}
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-white mb-2'>Messages</h1>
          <p className='text-slate-400'>Talk to your friends and family</p>
        </div>

        {/* Connected Users */}
        <div className='flex flex-col gap-3'>
          {connections.map((user)=>(
            <div key={user._id} className='max-w-xl flex flex-warp gap-5 p-6 bg-gradient-to-r from-indigo-200 to-blue-100 shadow rounded-md'>
              <img src={user.profile_picture} alt="" className='rounded-full size-12 mx-auto'/>
              <div className='flex-1'>
                <p className='font-medium text-slate-700'>{user.full_name}</p>
                <p className='text-slate-500'>@{user.username}</p>
                <p className='text-sm text-gray-600'>{user.bio}</p>
              </div>
              <div className='flex flex-col gap-2 mt-4'>
                <button onClick={()=> navigate(`/messages/${user._id}`)} className='bg-gradient-to-r from-indigo-200 to-blue-100 size-10 flex items-center justify-center text-sm rounded bg-slate-100 hover:bg-slate-200 text-slate-800 active:scale-95 transition cursor-pointer gap-1'>
                  <MessageSquare className="w-4 h-4" />
                </button>
                <button onClick={()=> navigate(`/profile/${user._id}`)} className='bg-gradient-to-r from-indigo-200 to-blue-100 size-10 flex items-center justify-center text-sm rounded bg-slate-100 hover:bg-slate-200 text-slate-800 active:scale-95 transition cursor-pointer'>
                  <Eye className="w-4 h-4"/>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
      
    </div>
  )
}

export default Messages
