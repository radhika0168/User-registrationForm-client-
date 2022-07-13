import React from 'react'
import { NavLink } from 'react-router-dom'
// import '../../src/App.css'
const ErrorPage = () => {
  return (
    <>
        <div id="notfound">
        <div className="notfound">
                <div className='notfound-404'>
                    <h1>404</h1>
                </div>
                <h2>we are sorry, page not found</h2>
                <NavLink to="/"> Back to homepage</NavLink>
            </div>
        </div>
        {/* <p>hiii error page</p> */}
    </>
  )
}

export default ErrorPage