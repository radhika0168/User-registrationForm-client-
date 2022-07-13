import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
// import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { UserContext } from '../App';

const Navbar = () => {
    const {state,dispatch} = useContext(UserContext);

    const RenderNavbar = ()=>{
        if(state){
            return(
                <>
                    <li className="nav-item active">
                        <NavLink className="nav-link fs-6" to='/'>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link fs-6" to="/about">About me</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link fs-6" to="/contact">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link fs-6" to="/logout">Logout</NavLink>
                    </li>
                </>
            )
        }
        else{
            return(
                <>
                    <li className="nav-item active">
                        <NavLink className="nav-link fs-6" to='/'>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link fs-6" to="/about">About me</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link fs-6" to="/contact">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link fs-6" to="/Login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link fs-6" to="/Signup">Register</NavLink>
                    </li>
                </>
            )
        }
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand fs-4" href="#">
                    {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCQ4LBe6mzBCZNBVUHVgrsG7upXMO8vy5Pr3DqPOSqW11pQ46NWNqAbeV3l36iykmqs6c&usqp=CAU"
                     className="rounded-circle max-width-100% height-auto"/> */}
                        Navbar
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <RenderNavbar/>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar