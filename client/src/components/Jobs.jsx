import axios from 'axios'
import React from 'react'
import { useEffect,useState } from 'react'
import "./Job.css";


function Jobs() {

const[jobData,setJobData]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:5000/api/jobs/").then(res=>{
      setJobData(res.data)
    })
},[])

  return (
    <div className='Job'>
    <div className="Job-container">
        <div>
          <h1 className='home-h1'>
              Jobs
          </h1>

          <p className='Job-p'>
              Here You Find Resources of Jobs shared by Alumnis
          </p>
        </div>
    
    </div>
    <div className="job-list-container">
      <div className="job-list-header">
        <h1 className='home-h1'>
          Jobs List
        </h1>
      </div>
      <div className="alumni-list">
        {jobData.map(job=>(
          <div style={{"height":"240px"}} className="alumnicard">
              <h3>
                  Unique Id:{job.id}
                </h3>
                <h3>
                 Title: {job.job_title}
                </h3>
                <h3>
                  Company:{job.company}
                </h3>
                <h3>
                  Start Date:{job.start_date}
                </h3>
                <h3>
                  Education:{job.edu_req}
                </h3>
                <h3>
                  Salary:{job.salary_given}
                </h3>
                <h3>
                  Curr Status:{job.jobpost_status}
                </h3>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Jobs