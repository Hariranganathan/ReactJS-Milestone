import React from "react";
import './login.css'
export function Login() {


  return (
    <>
      <div class="container">
        <div class="title">Registration</div>
        <div class="content">
          <form action="#">
            <div class="user-details">
              <div class="input-box">
                <span class="details">First Name</span>
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div class="input-box">
                <span class="details">Last Name</span>
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div class="input-box">
                <span class="details">Email</span>
                <input type="text" placeholder="Enter your email" required />
              </div>
              <div class="input-box">
                <span class="details">Phone Number</span>
                <input type="text" placeholder="Enter your number" required />
              </div>
              <div class="input-box">
                <span class="details">Password</span>
                <input type="text" placeholder="Enter your password" required />
              </div>
              <div class="input-box">
                <span class="details">Confirm Password</span>
                <input type="text" placeholder="Confirm your password" required />
              </div>
            </div>
            <button class="registerBtn badge  ">
              <input type="submit" value="Register" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}