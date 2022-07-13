import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


const Signup = () => {

  const navigate = useNavigate();

  const [user,setuser] = useState({
      name:"",
      email:"",
      phone:"",
      work:"",
      password:"",
      cpassword:""
  });

  const InputEvent = (event)=>{
      const {name,value} = event.target;

      setuser((prevvalue)=>{
        // console.log(prevvalue);
        return{
          ...prevvalue,
          [name]:value,
        }
      })
    }

  const handleSubmit = async (e)=>{
      e.preventDefault();
      
      const res = await fetch("/register",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
      })

      const data = await res.json();
      if(data.status===422 || !data){
        window.alert("Invalid registration");
      }
      else{
        window.alert("Registration successfull");
        navigate("/Login");
        
      }

  }

  return (
    <>
      <section className="signup">
        <div className="container ">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className='form-title fs-8 fw-normal '> Sign Up</h2>
              <form className='register-form border-2' method="post"
                id='register-form' onSubmit={(e) => handleSubmit(e)} >

                <div className="form-group ">
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input type="text" name="name" id='name'
                    value={user.name}
                    onChange={InputEvent}
                    autoComplete='off'
                    placeholder='Username' />
                </div>

                <div className="form-group ">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input type='email' name="email" id='email'
                    value={user.email}
                    onChange={InputEvent}
                    autoComplete='off'
                    placeholder='xyz@gmail.com' />
                </div>

                <div className="form-group ">
                  <label htmlFor="phone">
                    <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                  </label>
                  <input type='number' name="phone" id='phone'
                    value={user.number}
                    onChange={InputEvent}
                    autoComplete='off'
                    placeholder='98xyzabcd90' />
                </div>

                <div className="form-group ">
                  <label htmlFor="work">
                    <i className="zmdi zmdi-slideshow material-icons-name"></i>
                  </label>
                  <input type='text' name="work" id='work'
                    value={user.work}
                    onChange={InputEvent}
                    autoComplete='off'
                    placeholder='Your profession' />
                </div>

                <div className="form-group ">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input type='password' name="password" id='password'
                    value={user.password}
                    onChange={InputEvent}
                    autoComplete='off'
                    placeholder='Yours Password' />
                </div>

                <div className="form-group ">
                  <label htmlFor="cpassword">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input type='password' name="cpassword" id='cpassword'
                    value={user.cpassword}
                    onChange={InputEvent}
                    autoComplete='off'
                    placeholder='Confirm Your Password' />
                </div>

                <div className="form-group form-button border-0 mt-2">
                  <input className="btn btn-primary" type="submit"
                    name="signup" id="signup"
                    value="register"
                  // onClick={PostData}
                  />
                </div>
              </form>
            </div>
            <div className="signup-image">
              <figure>
                <img src="https://iimtstudies.edu.in/assets/images/1-online-registration.png"
                  alt="registerpic"
                />
              </figure>
              <NavLink to="/login" className="signup-image-link">
                I am already registered
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Signup