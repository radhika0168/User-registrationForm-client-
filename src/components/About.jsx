import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
const About = () => {
  
  const navigate = useNavigate();
  const [user,setuser] = useState({});

  const showAboutPage = async () => {
      try{
        
        const res = await fetch('/about',{
            method:"GET",
            headers:{
              Accept : "application/json",
              "Content-Type": "application/json"
            },
            credentials:"include"
        });
        // console.log(res);
        const data = await res.json();
        console.log(data);

        setuser(data);

        if(!data.status===200){
          const error = new Error(res.error);
          throw error;
        }

      } catch (err){
        console.log(err);
        navigate('/Login');
      }
  }

  useEffect(()=>{
    showAboutPage();
  },[]);

  return (
    <>
      <div className="container w-75 h-75">
        <form method="GET">

          {/* upper part */}
          <div className="row">
            <div className="col-md-4 emp-profile">
              <img src="https://cdn.99images.com/photos/wallpapers/hd-wallpapers/hd-wallpapers%20android-iphone-desktop-hd-backgrounds-wallpapers-1080p-4k-nufjk.jpg" 
                    alt="personimage"
                    width={"100%"}
                    height={"100%"} />
            </div>
            <div className="col-md-6">
                <div className="profile-head">
                  <h5>{user.name}</h5>
                  <h6>{user.work}</h6>
                  <p className="profile-rating mt-3 mb-5">Rankings <span className='text-warning'>1/10</span> </p>
                
                  <ul className="nav nav-tabs" role={"tablist"}>
                    <li className="nav-item">
                      <a className="nav-link active"
                        //  aria-current="page"
                         id="nav-home-tab"
                         data-bs- toggle="tab"
                         href="#home"
                         role="tab"
                         aria-selected="true"
                      >
                          About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link"
                        // aria-current="page"
                        id="nav-profile-tab"
                        data-bs-toggle="tab"
                        href="#profile"
                        role="tab"
                        aria-selected="false"
                      >
                        Timeline
                      </a>
                    </li>
                  </ul>
                  
                </div>
              </div>
              <div className="col-md-2 ">
                <input type="submit" 
                       className="btn btn-primary p-1 w-75" 
                       value="Edit Profile"
                       name="btnAddMore"
                 />
              </div>
          </div>
          {/* lower part */}
          <div className="row">
            {/* left side url */}
            <div className="col-md-4">
              <div className="profile-work d-flex flex-column mt-4 gap-3 justify-content-between">  
                  <a href="https://www.youtube.com/watch?v=DDi63skoymg&ab_channel=JaswantShorya"
                    className="text-decoration-none text-secondary"
                    target="_radha">Youtube</a>
                  <a href="https://www.linkedin.com/in/radhika-garg-841868190/"
                    target="_Radha"
                    className="text-decoration-none text-secondary">Linkedin</a>
                  <a href="https://www.codechef.com/users/radha77"
                    target="_radha"
                    className="text-decoration-none text-secondary">Codechef</a>
                  <a href="https://github.com/radhika0168"
                    target="_radha"
                    className="text-decoration-none text-secondary">Github</a>
              </div>
            </div>
            {/* right side data toogle */}
            <div className="col-md-8 ">
              <div className=" tab-content profile-tab" id="myTabContent">
                <div className="tab-pane fade show active d-flex flex-column mt-5" id="home" role="tabpanel" aria-labelledby='nav-home-tab'>
                  
                  <div className="row mt-5">
                    <div className="col-md-6">
                      <label>Email-ID</label>
                    </div>
                    <div className="col-md-6">
                        <p>{user.email}</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label>Contact number</label>
                    </div>
                    <div className="col-md-6">
                      <p>{user.phone}</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label>Profession</label>
                    </div>
                    <div className="col-md-6">
                      <p>{user.work}</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Radhika</p>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade d-flex flex-column mt-5 " id="profile" role="tabpanel" aria-labelledby='nav-profile-tab'>
                  <div className="row mt-5">
                    <div className="col-md-6">
                      <label>User ID</label>
                    </div>
                    <div className="col-md-6">
                      <p>234bb2873c</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>User ID</label>
                    </div>
                    <div className="col-md-6">
                      <p>234bb2873c</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default About