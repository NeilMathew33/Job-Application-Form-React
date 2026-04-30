import React, { useState } from 'react'

const SignUp = () => {

const [input, setInput] = useState(
    {
      firstname: "",
      middlename: "",
      lastname: "",
      pastexperience: "",
      phonenumber: "",
      positionappliedfor: "",
      emailid: "",
      resumeupload: "",
      password: "",
      confirmpassword: "",
    }
  )
  
  const handleInput = (event) => {
    setInput(
      {... input,[event.target.name]:event.target.value}
    )
  }

  const readValues = () => {
    console.log(input)
  }

    return (
        <div>

            <div className="container">
                <div className="row justify-content-center vh-100 align-items-center">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">
                        <div class="card shadow">

                            <div class="card-body ">

                                <div className="row g-3">
                                    <h4 className='text-center'>User Sign Up</h4>


                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                        <label htmlFor="" className="form-label">First Name</label>
                                        <input type="text" className="form-control" name="firstname" value={input.firstname} onChange={handleInput} />
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                        <label htmlFor="" className="form-label">Middle Name</label>
                                        <input type="text" className="form-control" name="middlename" value={input.middlename} onChange={handleInput} />
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                        <label htmlFor="" className="form-label">Last Name</label>
                                        <input type="text" className="form-control" name="lastname" value={input.lastname} onChange={handleInput} />
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Past experience</label>
                                        <textarea name="pastexperience" id="" className="form-control" value={input.pastexperience} onChange={handleInput}  ></textarea>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Phone Number</label>
                                        <input type="text" className="form-control" name="phonenumber" value={input.phonenumber} onChange={handleInput} />
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Position applying for</label>
                                        <input type="text" className="form-control" name="position" value={input.position} onChange={handleInput} />
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Email ID</label>
                                        <input type="text" className="form-control" name="email" value={input.email} onChange={handleInput} />
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Resume upload</label>
                                        <input type="file" name="resume" id="" className="form-control" onChange={handleInput} />
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Password</label>
                                        <input type="password" name="password" id="" className="form-control" value={input.password} onChange={handleInput} />
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Confirm Password</label>
                                        <input type="password" name="confirmPassword" id="" className="form-control" value={input.confirmPassword} onChange={handleInput} />
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <button onClick={readValues} className="btn btn-success">Sign Up</button>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <a href="/"> I already have an account</a>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default SignUp