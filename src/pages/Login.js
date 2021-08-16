import React, { useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../axios";
import { useHistory } from "react-router-dom";
import "./login.css";
export default function Login() {
    const history = useHistory();
    const initialFormData = Object.freeze({
        email: "",
        password: "",
    });
    const [formData, updateFormData] = useState(initialFormData);
    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        axiosInstance
            .post(`api/token/`, {
                email: formData.email,
                password: formData.password,
            })
            .then((res) => {
                localStorage.setItem("access_token", res.data.access);
                localStorage.setItem("refresh_token", res.data.refresh);
                axiosInstance.defaults.headers["Authorization"] =
                    "JWT " + localStorage.getItem("access_token");
                history.push("/dashboard");
                console.log(res);
                console.log(res.data);
            });
    };
    // ******************** Register ********************
    const initialFormDataRegister = Object.freeze({
        email: "",
        first_name: "",
        last_name: "",
        password: "",
        password2: "",
    });
    const [formDataRegister, updateFormDataRegister] = useState(
        initialFormDataRegister
    );
    const handleChangeRegister = (e) => {
        updateFormDataRegister({
            ...formDataRegister,
            [e.target.name]: e.target.value.trim(),
        });
    };
    const handleSubmitRegister = (e) => {
        e.preventDefault();
        console.log(formDataRegister);
        axiosInstance
            .post(`authentification/register`, {
                email: formDataRegister.email,
                first_name: formDataRegister.first_name,
                last_name: formDataRegister.last_name,
                password: formDataRegister.password,
                password2: formDataRegister.password2,
            })
            .then((res) => {
                history.push("/");
                console.log(res);
                console.log(res.data);
            });
    };

    //******************* */
    const signinButton = () => {
        const contaiiner = document.getElementById("contaiiner");
        contaiiner.classList.remove("right-panel-active");
    };
    const signupButton = () => {
        const contaiiner = document.getElementById("contaiiner");
        contaiiner.classList.add("right-panel-active");
    };
    return (
        <div className="lg">
            <div class="contaiiner" id="contaiiner">
                <div class="form-contaiiner sign-up-contaiiner">
                    <form action="#">
                        <h1 className="title">Create Account</h1>

                        <input
                            className="input"
                            type="text"
                            name="first_name"
                            id="exampleFirstName"
                            placeholder="First Name"
                            onChange={handleChangeRegister}
                        />
                        <input
                            className="input"
                            type="text"
                            name="last_name"
                            id="exampleLastName"
                            placeholder="Last Name"
                            onChange={handleChangeRegister}
                        />
                        <input
                            className="input"
                            type="email"
                            name="email"
                            id="exampleInputEmail"
                            placeholder="Email Address"
                            onChange={handleChangeRegister}
                        />
                        <input
                            className="input"
                            type="password"
                            name="password"
                            id="exampleInputPassword"
                            placeholder="Password"
                            onChange={handleChangeRegister}
                        />
                        <input
                            className="input"
                            type="password"
                            name="password2"
                            id="exampleRepeatPassword"
                            placeholder="Repeat Password"
                            onChange={handleChangeRegister}
                        />

                        <button onClick={handleSubmitRegister}>Sign Up</button>
                    </form>
                </div>
                <div class="form-contaiiner sign-in-contaiiner">
                    <form action="#">
                        <h1 className="title">Sign in</h1>

                        <input
                            className="input"
                            name="email"
                            type="email"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                            onChange={handleChange}
                        />
                        <input
                            className="input"
                            name="password"
                            id="password"
                            type="password"
                            id="exampleInputPassword"
                            placeholder="Password"
                            onChange={handleChange}
                        />
                        <a href="#">Forgot your password?</a>
                        <button onClick={handleSubmit}>Sign In</button>
                    </form>
                </div>
                <div class="overlay-contaiiner">
                    <div class="overlay">
                        <div class="overlay-panel overlay-left">
                            <h1 style={{ fontWeight: "bold" }}>
                                Welcome Back!
                            </h1>
                            <p>
                                To keep connected with us please login with your
                                personal info
                            </p>
                            <button
                                class="ghost"
                                id="signIn"
                                onClick={signinButton}
                            >
                                Sign In
                            </button>
                        </div>
                        <div class="overlay-panel overlay-right">
                            <h1 style={{ fontWeight: "bold" }}>
                                Hello, Friend!
                            </h1>
                            <p>
                                Enter your personal details and start journey
                                with us
                            </p>
                            <button
                                class="ghost"
                                id="signUp"
                                onClick={signupButton}
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
