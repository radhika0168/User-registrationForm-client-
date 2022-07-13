import React from 'react'

const ContactHeader = () => {
  return (
    <>
        <div className="contact_info">
            <div className="container-1 mt-2">
                <div className="row">
                      <div className="col-lg-10 offset-1 d-flex flex-row justify-content-between">

                          {/* phone number */}
                          <div className="contact_info_item d-flex flex-row justify-content-start align-items-center p-3 border bg-light">
                              <i className="zmdi zmdi-phone-in-talk"></i>
                              <div className="d-flex flex-column justify-content-start align-items-center mx-4  ">
                                  <div className="contact_info_title fs-6">
                                      Phone
                                  </div>
                                  <div className="contact_info_text">
                                      +91 87869865423
                                  </div>
                              </div>
                          </div>

                          {/* email */}
                          <div className="contact_info_item d-flex flex-row justify-content-start align-items-center p-3 border bg-light">
                              <i className="zmdi zmdi-email"></i>
                              <div className="d-flex flex-column justify-content-start align-items-center mx-4 ">
                                  <div className="contact_info_title fs-6">
                                      Email
                                  </div>
                                  <div className="contact_info_text fs-6">
                                      radhikagarg@gmail.com
                                  </div>
                              </div>
                          </div>

                          {/* adress */}
                          <div className="contact_info_item d-flex flex-row justify-content-start align-items-center p-3 border bg-light">
                              <i className="zmdi zmdi-city-alt"></i>
                              <div className="d-flex flex-column justify-content-start align-items-center mx-4">
                                  <div className="contact_info_title fs-6">
                                      Adress
                                  </div>
                                  <div className="contact_info_text fs-6">
                                      HSBC-45 Banglore
                                  </div>
                              </div>
                          </div>

                      </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ContactHeader