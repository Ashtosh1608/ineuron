import React, {useContext} from 'react'
import { UserContext } from '../../App';
import {
    
    NavLink
} from "react-router-dom";
import './Navbar.css'

// import 'bootstrap/dist/css/bootstrap.css'

const Navbar = () => {
    const { state, dispatch } = useContext(UserContext);
    const RenderMenu = () => {
        if (state) {
            return (
                <>
                

                    <li className="nav-item">
                        <NavLink to="/" className="nav-link active" aria-current="page">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/publicpage" className="nav-link" >Profile</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/message" className="nav-link" >Invite</NavLink>
                    </li>
                    {/* <li className="nav-item">
                        <NavLink to="/login" className="nav-link">login</NavLink>
                    </li> */}
                    {/* <li className="nav-item">
                        <NavLink to="/register" className="nav-link">registration</NavLink>
                    </li> */}
                    <li className="nav-item">
                        <NavLink to="/logout" className="nav-link">Logout</NavLink>
                    </li>
                

                </>
            )
        } else {
            return (
                <>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link active" aria-current="page">Home</NavLink>
                    </li>
                    {/* <li className="nav-item">
                        <NavLink to="/publicpage" className="nav-link" >Profile</NavLink>
                    </li> */}
                    <li className="nav-item">
                        <NavLink to="/message" className="nav-link" >Invite</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/login" className="nav-link">login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/register" className="nav-link">registration</NavLink>
                    </li>

                </>
            )
        }

    }

    return (
        <>


            <nav className="navbar navbar-expand-lg bg-light ">
                <div className="container-fluid boxx">
                    <p className="navbar-brand" >Navbar</p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <RenderMenu />

                        </ul>
                    </div>
                </div>
            </nav>






        </>
    )
}

export default Navbar



// import React from 'react'
// import { NavLink } from 'react-router-dom'

// export const Navbar = () => {
//   return (
//     <div>
//         <NavLink to="/">Home</NavLink>
//         <NavLink to="/contact">contact</NavLink>
//         <NavLink to="/login">Login</NavLink>
//         <NavLink to="/about">about</NavLink>
//         <NavLink to="/registration">signup</NavLink>

//     </div>
//   )
// }
