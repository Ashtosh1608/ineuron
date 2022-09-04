import React from 'react'
import './Home.css'
import {
    NavLink
  } from "react-router-dom";

export const Home = () => {
  return (
    <div className='full'>
        <h1 className='mts'>Meeting Scheduler</h1>
        <p className='wlc'>Welcome To Meeting Schedular</p>
        {/* <div className='hboxx'>
        <NavLink to="/login" className='lgn'>Login</NavLink>
        <NavLink to="/register" className='lgn'>Register</NavLink>

        </div> */}

    </div>
  )
}
