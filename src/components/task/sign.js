import React from "react";
import './sign.css'
import { Link } from "react-router-dom";
export function Signup(){
    return (
        <>
            <div id="loginbg" className="">
                <div id="inDiv" className="m-auto row container">
                    <div className="col-12 col-lg-5 d-flex">
                        <div id="loginImg" className="m-auto p-3">
                            
                        </div>
                    </div>
                    <div className=" m-auto text-center">
                        <div id="form" className="p-2 text-center">
                            <h3 className="p-3">Want to check out this file ? <br/> Sign up or Log in</h3><br/>
                            
                            <form className="container  ">
                            <div className="inputForm ">
                            <input type="google" className="eName p-2 col-6" placeholder="Contine with Google" />
                                </div> 
                                or
                                <div className="inputForm ">
                                    <input type="email" className="eName p-2 col-6" placeholder="Email" />
                                </div><br />
                                <div className="inputPassword">
                                    <input type="password" className="password p-2 col-6" placeholder="Password" />
                                </div><br />
                                <div className="inputForm">
                                 <button className="text-light bg-dark col-6">Create Log In</button>
                                </div><br />
                                
                                <div className="inputForm">
                                <Link to="./login"><button className="text-light bg-dark col-6">Create Account</button></Link>
                                </div><br />

                                
                                 
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}