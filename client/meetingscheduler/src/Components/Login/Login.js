import React, { useContext, useState } from 'react'
import './Login.css'
import {
    NavLink, useHistory
  } from "react-router-dom";

import { UserContext } from '../../App';

 
export const Login = () => {

    const {state, dispatch} = useContext(UserContext);

    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch('/signin', {
            method : "POST",
            headers : {
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,
                password
            })
        });
        const data = res.json();
        if (res.status === 400 || !data){
            window.alert("Inavlid Credentials");
        } else {
            dispatch({type:'USER' , payload:true})
            window.alert("Login Successfull");
            history.push("/welcome");
        }
    }
    return (
        <div >
            <form className='box' action="POST">


                <input className='eml' type="email" name='email' value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Your Email' />

                <input className='psw' type="password" name='password' value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Password' />

                <input className='sbm' type="submit" name='signin' id='signin' value="Log in" onClick={loginUser} placeholder='Submit' />

            </form>
            {/* <div>
                <p>Not have an Account ?</p>
                <NavLink to="/register" className='lgn'>Register</NavLink>
                <NavLink to="/" className='lgn'>Home</NavLink>
            </div> */}
        </div>
    )
}
