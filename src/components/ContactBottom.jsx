import React,{useEffect,useState} from 'react'

const ContactBottom = () => {

    const [user,setuser] = useState({
        name:"",
        email:"",
        phone:"",
        message:""
    });

    const contactPage = async () => {
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
            setuser({...user, name:data.name, email: data.email, phone:data.phone});

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (err) {
            console.log(err);
            
        }
    }

    useEffect(() => {
        contactPage();
    }, []);

// updating data dynamically ....(access data from user and update in the form dynamically)
    const HandleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setuser({...user, [name]:value});
    };

// sending data in the backend now ...

    const ContactForm = async (e) => {
        e.preventDefault();

        const {name,email,phone,message} = user;

        const res = await fetch('/contact',{
            method : 'POST',
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                name,email,phone,message
            })
        });

        const data = await res.json();

        if(!data){
            console.log("message not send");
        }else{
            window.alert("Message send");
            setuser({...user, message:""});
        }

    };

  return (
    <>
    {/* contact us form */}
    <div className="contact_us_form">
        <div className="container w-75 ">
            <div className="row">
                <div className="col-lg-10 offset-1">
                    <div className="contact_form_container py-3 d-flex flex-column justify-content-between">
                        <div className="form_title">
                            Get In Touch
                        </div>
                        <form method='POST' id="contact_form">
                            <div className="contact_form_info d-flex flex-row justify-content-between mt-4">
                                <input
                                    type="text"
                                    placeholder='Your Name'
                                    name='name'
                                    value={user.name}
                                    className="contact_form_name p-3 border bg-light"
                                    id="contact_form_name"
                                    required={true}
                                    onChange={HandleInput}
                                />
                                <input
                                    type="email"
                                    placeholder='abcd@outlook.com'
                                    name='email'
                                    value={user.email}
                                    className="contact_form_email p-3 border bg-light "
                                    id="contact_form_email"
                                    required={true}
                                    onChange={HandleInput}
                                />
                                <input
                                    type="number"
                                    placeholder='98xxxxxxxxx45'
                                    name='phone'
                                    value={user.phone}
                                    className="contact_form_number p-3 border bg-light"
                                    id="contact_form_number"
                                    required= {true}
                                    onChange={HandleInput}
                                />
                            </div>
                        </form>
                        <div className="contact_form_text">
                            <textarea
                                className="text-field contact_form_message w-100 mt-3"
                                cols="8" rows="3"
                                placeholder='Message'
                                name='message'
                                value={user.message}
                                onChange={HandleInput}
                            ></textarea>
                        </div>
                        <div className="contact_form_button">
                            <button type='submit' className="btn btn-primary"
                            onClick={ContactForm}>Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ContactBottom