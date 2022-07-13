import React, { useState } from 'react'
import { useContext } from 'react';
import { NavLink,useNavigate } from 'react-router-dom'

import { UserContext } from '../App';

const Login = () => {

  const {state,dispatch} = useContext(UserContext);

  const navigate = useNavigate();

  const [email,setemail] = useState('');
  const [password,setpassword] = useState('');
  
  const loginUser =async (e)=>{
      e.preventDefault();

    const res = await fetch('/signin',{
          method : "POST",
          headers : {
            "Content-Type" : "application/json"
          },
          body: JSON.stringify({
              email, password
          })
      });

      const data = res.json();

      if(res.status===400 || !data){
          window.alert("Invalid credentials");
      }
      else{ 
          dispatch({type:"USER", payload : true});
          window.alert("login Successfully");
          navigate("/");
      }

  }

  return (
    <section className="signin ">
          <div className="container p-6 w-50 ">
              <div className="signin-content d-flex flex-row g-0 justify-content-center ">
                
              <div className="signin-image">
                    <figure>
                      <img src="https://iimtstudies.edu.in/assets/images/1-online-registration.png" 
                        alt="registerpic"
                        class="w-100"
                        />
                    </figure>
                    <NavLink to="/Signup" className="signin-image-link">
                        Create New Account
                    </NavLink>
                </div>


                <div className="signin-form">
                  <h2 className='form-title fs-8 fw-normal '> Sign In</h2>
                  <form className='register-form border-2' method="POST" id='register-form'  >
                    
                    <div className="form-group mt-lg-5  ">
                      <label htmlFor="email">
                        <i class="zmdi zmdi-email material-icons-name"></i>
                      </label>
                      <input type='email' name="email" id='email' 
                        autoComplete='off' value={email} onChange={(e)=>setemail(e.target.value)} placeholder='xyz@gmail.com'/>
                    </div>

                    <div className="form-group mt-lg-5  ">
                      <label htmlFor="password">
                        <i class="zmdi zmdi-lock material-icons-name"></i>
                      </label>
                      <input type='password' name="password" id='password'
                       autoComplete='off' value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='Yours Password'/>
                    </div>

                    <div className="form-group border-0 mt-5">
                      <input class="btn btn-primary" type="submit"
                              name="signin" 
                              id="signin" 
                              onClick={loginUser}
                              value="Login In"
                      />
                        
                    </div>
                  </form>
                </div>
              </div>
          </div>
        </section>
  )
}

export default Login