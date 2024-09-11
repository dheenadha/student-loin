import React from 'react'
import { Link } from 'react-router-dom'
export default function StudentLogin() {
  return (
<>
  <div>   
    <div class="  d-flex justify-content-center align-items-center p-5 ">
    <h2> Quiz Fest</h2> </div>
     <div class="fs-1 d-flex justify-content-center align-items-center p-5"> 
        <h1 >Welcome to Maths Quiz</h1>
        </div>
        <div class="d-flex justify-content-center align-items-center p-5 ">
    <div class=" p-5">
    <input class="form-control form-control-lg fs-3" type="text" placeholder="Name"></input>
    </div>
</div >


<Link className="nav-link" to={"/studqus"}>
<div class="d-flex justify-content-center align-items-center p-5">
<div class="d-grid gap-2 col-3 mx-auto">
<button className="btn btn-primary fs-2" type="button">Start</button>
</div>
</div>
</Link>
  </div>
  </>
  )
}
