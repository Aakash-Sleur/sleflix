import React from 'react'
import { useState, useEffect } from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom';


const Nav = () => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const transitionNavBar =() => {
        (window.scrollY > 100)? setShow(true): setShow(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar)
        return () => window.removeEventListener("scroll",transitionNavBar)
    }, [])

  return (
    <div className={`nav ${show && 'nav__black'}`}>
        <div className="flex justify-between">
            <span className="text-2xl text-[#cd1d24] font-semibold uppercase tracking-wider cursor-pointer fixed top-5 left-0 pl-5"
            onClick={() => navigate("/")}>SleFlix</span>
            <img 
            onClick={() => navigate("/profile")}
            src="https://cdn3.iconfinder.com/data/icons/essential-rounded/64/Rounded-31-512.png" className='fixed right-5 w-10 rounded-full border border-gray cursor-pointer' alt="avatar" />
        </div>
    </div>
  )
}

export default Nav