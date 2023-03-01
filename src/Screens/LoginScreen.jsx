import React, {useState} from 'react'
import '../App.css'
import SignUpScreen from './SignUpScreen'

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false)
  return (
    <div className='relative loginScreen h-full '>
        <div className="loginScreen__background">
        <h3 className="text-2xl text-[#cd1d24] font-semibold uppercase tracking-wider cursor-pointer fixed top-5 left-0 pl-5">SleFlix</h3>
          <button className="fixed right-5 top-5 px-3 py-2 text-1xl	text-white bg-[#e50914] rounded-lg cursor-pointer bold font-semibold border-transparent" onClick={() => setSignIn(true)}>Sign In</button>
          <div className="w-full z-1 h-screen bg-[#00000066] loginScreen__gradient" />
        </div>
          {
            signIn ? (
              <div className="absolute top-1/4 mx-auto md:left-[40%] sm:left-1/4 init-x-0 z-1 text-white p-5 text-center">
                <SignUpScreen />
              </div>
            ) : (
              <div className="absolute top-20 mx-auto md:left-[5%] lg:left-[15%] init-x-0 z-1 text-white p-5 text-center">
              <>
            <h1 className='text-5xl xs:text-4xl mb-6'>Unlimted films, TV programmes and more.</h1>
            <h2 className='text-3xl font-medium mb-5'>Watch anywhere. Cancel at any time</h2>
            <h3 className='text-2xl font-medium'>Ready to watch? Enter your email to create or restart your memebership</h3>
            <div className="m-5 px-2 py-5">
              <form>
                <input className='p-5 outline-0 h-[30px] w-[40%] border-none max-w-[600px]' type="email" placeholder='EmailAddress' />
                <button className='px-5 py-2 text-1xl text-white bg-[#e50914] border-0 font-semibold cursor-pointer' onClick={() => setSignIn(true)}>Get Started</button>
              </form>
            </div>
          </>
        </div>
            )
          }
          </div>
          
  )
}

export default LoginScreen