import React from 'react'
import Nav from '../Components/Nav'
import { signOut } from 'firebase/auth'
import { auth } from '../Utils/firebase'
import { selectUser } from '../features/counter/userSlice'
import { useSelector } from 'react-redux'

const ProfileScreen = () => {
    const user = useSelector(selectUser)
  return (
    <div className='h-screen text-white flex'>
        <Nav />
        <div className="flex flex-col mx-auto h-72 p-5 rounded-xl my-auto pt-10 profileSreen__body border-2 border-[#e50914]">
            <h1 className='text-3xl w-full font-medium mb-4'>Edit Profile</h1>
            <div className="flex mt-4">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwO8HngSWxJE9jUMNq18b6H-js4qJT64Sa_A&usqp=CAU" className='h-[100px]' alt="profile__pic" />
                <div className="text-black flex-1 ml-5  min-w-[200px]">
                    <h2 className='bg-gray-400 p-3 text-1xl rounded-lg text-center'>{user.email}</h2>
                    <div className="mt-4 w-40 mx-auto">
                        <button onClick={() => signOut(auth)}
                        className='py-2 px-4 bg-[#e50914] rounded-lg text-white font-bold mt-4 cursor-pointer border-0'>Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen