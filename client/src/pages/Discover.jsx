import React, { useState } from 'react'
import { dummyConnectionsData } from '../assets/assets'
import { Search } from 'lucide-react'
import UserCard from '../components/UserCard'
import Loading from '../components/Loading'
import bgall from '../assets/bgall.jpg';

const Discover = () => {

  const [input, setInput] = useState('')
  const [users, setUsers] = useState(dummyConnectionsData)
  const [loading, setLoading] = useState(false)

  const handleSearch = async (e) => {
    if(e.key === 'Enter'){
      setUsers([])
      setLoading(true)
      setTimeout(()=>{
        setUsers(dummyConnectionsData)
        setLoading(false)
      }, 1000)
    }
  }

  return (
    <div className='min-h-screen bg-black/60' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bgall})`, backgroundPosition: '55% 0%'}}>
      <div className='max-w-6xl mx-auto p-6'>

        {/* Title */}
        

        {/* Search */}
        <div className='mb-8 shadow-md rounded-xl w-220 border border-slate-200/60 bg-black/40'>
          <div className='mb-8'>
          <h1 className='text-3xl font-bold text-white mb-2 pt-15 pl-14'>Discover People</h1>
          <p className='text-slate-400 pl-14'>Connect with amazing people and grow your network</p>
        </div>
          <div className='p-6'>
            <div className='relative'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5'/>
              <input type="text" placeholder='Search strawhats by their name, username, bio, or location...' className='bg-white pl-10 sm:pl-12 py-2 w-full border border-gray-300 rounded-md max-sm:text-sm' onChange={(e)=>setInput(e.target.value)} value={input} onKeyUp={handleSearch}/>
            </div>
          </div>
        </div>

        <div className='flex flex-wrap gap-6'>
          {users.map((user)=>(
            <UserCard user={user} key={user._id}/>
          ))}
        </div>

        {
          loading && (<Loading height='60vh'/>)
        }

      </div>
    </div>
  )
}

export default Discover
