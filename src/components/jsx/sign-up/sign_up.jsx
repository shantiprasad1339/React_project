import React from 'react'
import { Link } from 'react-router-dom'

function Sign_up() {
  return (
    <section className="login_area">
      <div className="container h-100">
         <div className="row h-100 align-items-center justify-content-center">
            <div className="col-xl-6">
                <div className="login_inner">
                   <h3>Sign Up</h3>
                    <div className="form_box mt-4">
                        <label for="">Email Id</label>
                          <input type="text" placeholder="Enter Email Id" />
                    </div>
                    <div className="form_box mt-4">
                        <label for="">Password</label>
                          <input type="password" placeholder="Enter Password" />
                    </div>
                    <div className="form_box mt-4">
                        <label for="">Mobile Number</label>
                          <input type="number" placeholder="Enter Number" />
                    </div>
                    <div className="form_box_n pt-4 d-flex align-content-center gap-2">
                        <input type="checkbox" />
                        <label for="">Remamber me</label>
                    </div>
                    <div className="form_box form_box_n mt-4">
                        <button type="submit">Register Now</button>
                    </div>
                    <div className="form_box_n pt-4 d-flex align-content-center gap-2">
                    <p class=" ">You Have an Account <Link to="/"> Sign in</Link> </p>
                    </div>
                </div>
            </div>
         </div>
      </div>
    </section>
  )
}

export default Sign_up
