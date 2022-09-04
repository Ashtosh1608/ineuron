import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import './Register.css'

export const Register = () => {
    const history = useHistory()
    const [user, setUser] = useState({
        name: "", email: "", phone: "", work: "", password: "", cpassword: ""
    });

    let name, value;
    const handleInputs = (e) => {
        // console.log(e)
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value })
        // console.log(user)
    }

    const PostData = async (e) => {
        e.preventDefault();
        const { name, email, phone, work, password, cpassword } = user;

        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({

                name, email, phone, work, password, cpassword
            })
        });
        const data = await res.json()

        if (data.status === 422 || !data){
            window.alert("INVALID Registration");
            console.log("INVALID Registration")
        } else {
            window.alert("Registration Successfull")
            console.log("Registration Successfull")

            history.push("/login")
        }
    }

    return (
        <div>
            <form className='rboxx' action="POST">

                <div>
                    <label htmlFor="name">
                        <i class="zmdi zmdi-account-o"></i>
                    </label>
                    <input className='nme' type="text" name='name' id='name' placeholder='Your Name' value={user.name} onChange={handleInputs} />
                </div>
                <div>
                    <label htmlFor="email">
                        <i class="zmdi zmdi-account-o"></i>
                    </label>
                    <input className='nme' type="email" name='email' id='email' placeholder='Your Email' value={user.email} onChange={handleInputs} />
                </div>
                <div>
                    <label htmlFor="phone">
                        <i class="zmdi zmdi-account-o"></i>
                    </label>
                    <input className='nme' type="number" name='phone' id='phone' placeholder='Your Phone' value={user.phone} onChange={handleInputs} />
                </div>
                <div>
                    <label htmlFor="work">
                        <i class="zmdi zmdi-account-o"></i>
                    </label>
                    <input  className='nme'type="text" name='work' id='work' placeholder='Your Profession' value={user.work} onChange={handleInputs} />
                </div>
                <div>
                    <label htmlFor="password">
                        <i class="zmdi zmdi-account-o"></i>
                    </label>
                    <input className='nme' type="password" name='password' id='password' placeholder='Your Password' value={user.password} onChange={handleInputs} />
                </div>
                <div className='form-group'>
                    <label htmlFor="cpassword">
                        <i class="zmdi zmdi-account-o"></i>
                    </label>
                    <input className='nme' type="password" name='cpassword' id='cpassword' placeholder='Confirm Your Password' value={user.cpassword} onChange={handleInputs} />
                </div>
                <div>
                    <input type="submit" name='signup' id='signup' className='btn btn-primary btn-lg rnme' value="register" onClick={PostData} />
                </div>
                <NavLink  to="/Login" className="nav-link ranme">Already Register ? <p> Login</p> </NavLink>

            </form>

        </div>
    )
}

