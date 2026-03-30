import React, { useState } from 'react'
import JobApplicationNavBar from './JobApplicationNavBar'

const ViewAllApplications = () => {

const [jobData,setJobData]=new useState([
    {"name":"Neil","CourseCode":"C2323",Profilepic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSzUIEUTk77LbQFbdXNehUzunw_6UQ_XjJRg&s"},
    {"name":"Ava","CourseCode":"C2323",Profilepic:"https://images.squarespace-cdn.com/content/v1/672e336539ad5f7388a888c8/67bcc81e-babe-4d22-8c61-5ce8bdf28083/job-application-tips-for-redding-ca.jpg"},
    {"name":"Ivy","CourseCode":"C2323",Profilepic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv56PDEi-Ws-K0GHoHyU44N2M2WiApc_kstw&s"},
    {"name":"Lucas","CourseCode":"C2323",Profilepic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG7yGAl8htWUVy0xTJlV11hK0V-vreKqDhEw&s"},
    {"name":"Gino","CourseCode":"C2323",Profilepic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYI03Z_CxR_yhoRphcGhXsfFkHQ5r6iiJ-HQ&s"},
    {"name":"Nathan","CourseCode":"C2323",Profilepic:"data:image/jpeg;base64,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"},
    {"name":"Martin","CourseCode":"C2323",Profilepic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS65dhgiKttCKIGH10rzElugxfPzc_bpA9aWg&s"},
    {"name":"Ben","CourseCode":"C2323",Profilepic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrLmPX50uwYhsI4lAkv3E64wXWV4g4q6xGRQ&s"},
    {"name":"White","CourseCode":"C2323",Profilepic:"https://www.flexjobs.com/blog/wp-content/uploads/2022/01/18054705/Is-Your-Job-Application-Error-Free-Most-Likely-No-1024x512.jpg"},
    {"name":"Sofie","CourseCode":"C2323",Profilepic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBcBsMP_2MHq_RL-_MgS5vp08RGXNkYfmZ3Q&s"},
])

    return (
        <div>
            <JobApplicationNavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
   
                        {jobData.map(
                            (value,index) => {
                                return (
                                    <div className="row g-3 col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                            <div class="card">
                                <img height="200" src={value.Profilepic} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{value.name}</h5>
                                    <p class="card-text">{value.CourseCode}</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>

                        </div>
                                )
                            }
                        )}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAllApplications