import React, { useState,useEffect } from 'react'

const Home = () => {

  const [username, setusername] = useState('');
  const [show, setshow] = useState(false);

  
  const HomePage = async () => {
    try {
        const res = await fetch('/getdata', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });
      const data = await res.json();
      // console.log(data);

      // storing data in user to update dynamically
      setusername(data.name);
      setshow(true);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }

    } catch (err) {
      console.log(err);

    }
  }

  useEffect(() => {
    HomePage();
  }, []);

  return (
    <div className='home'>
        <div className="home-div">
            <div className="container w-50">
                <p className=" fst-italic d-flex justify-content-center">Welcome</p>
                <h1 className="fs-2 d-flex  justify-content-center">{username? username:" "}</h1>
                <h2>{show ? 'happy to see u back !!' :' We are the Mern Developers'}</h2>
            </div>
        </div>
    </div>

    
  )
}


export default Home