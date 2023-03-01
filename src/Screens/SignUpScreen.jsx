import React, {useRef} from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Utils/firebase'

const SignUpScreen = () => {

  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
    .then((authUser) => {
      console.log(authUser);
    })
    .catch((error) => {
      alert(error.message);
    })
  }

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
    .then((authUser) => {
      console.log(authUser)
    })
    .catch((error) => alert(error.message))
  }

  return (
    <div className='p-5 signUpScreen max-w-[290px] bg-[#000000bf] rounded-md'>
        <form className='grid-cols-1'>
          <h1 className='text-left mb-5'>Sign In</h1>
          <input className='outline-0 h-10 mb-10 bg-[#333] text-[#8b8986] border-none rounded-md py-2 px-4' ref={emailRef} type="email" placeholder='Email' />
          <input className='outline-0 h-10 mb-10 bg-[#333] text-[#8b8986] border-none rounded-md py-2 px-4' ref={passwordRef} type="password" placeholder='password' />
          <button className='px-3 py-2 bg-[#e50914] rounded-md my-5 cursor-pointer text-white' type="submit" onClick={(e) => signIn(e)}>Sign In</button>
          <h4 className='text-left mb-5'><span className='text-gray-300'>New to Netflix? </span>
          <span className='cursor-pointer hover:underline' onClick={(e) => register(e)}>Sign up now</span>
          </h4>
        </form>
    </div>
  )
}

export default SignUpScreen