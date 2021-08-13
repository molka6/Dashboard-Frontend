
import axiosInstance from '../axios';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import DashboardNavbar from './DashboardNavbar' ;
import DashboardSidebar from './DashboardSidebar';
import DashboardFooter from './DashboardFooter' ; 
import { Link } from 'react-router-dom'

export default function UpdateProfile() {
    const history = useHistory();
    const initialFormData = Object.freeze({
            old_password: '',
            new_password:'',
            confirm_new_password:'',
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
                .put(`authentification/change_password`, {
                    old_password: formData.old_password,
                    new_password: formData.new_password,
                    confirm_new_password:formData.confirm_new_password,
                })
                .then((res) => {
                    history.push('/');
                    console.log(res);
                    console.log(res.data);
                });
        };




    return (
        <div id="wrapper">
           <DashboardSidebar />
            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                <DashboardNavbar />
    
                <div class="card shadow ">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Update Profile </h6>
                        </div>
                        {/* <div class="card-body">
                            <div class="table-responsive"> */}
{/* ****************************************************** */}

                                                <div class="text-center">
                                                    <h1 class="h4 text-gray-900 mb-4">Update Profile</h1>
                                                </div>


                    <form class="user updateBlock">
                        <div class="form-group row">
                            <div class="col-sm-6 mb-3 mb-sm-0">
                                <input type="text"  name="first_name" class="form-control form-control-user" id="exampleFirstName"
                                    placeholder="First Name" onChange={handleChange} />
                            </div>
                             <div class="col-sm-6">
                                <input type="text"   name="last_name" class="form-control form-control-user" id="exampleLastName"
                                    placeholder="Last Name" onChange={handleChange}/>
                            </div>
                        </div>
                        <div class="form-group">
                            <input type="email" name="email" class="form-control form-control-user" id="exampleInputEmail"
                                placeholder="Email Address" onChange={handleChange} />
                        </div>
                        <div class="form-group row">
                            <div class="col-sm-6 mb-3 mb-sm-0">
                                <input type="password" name="password" class="form-control form-control-user"
                                    id="exampleInputPassword" placeholder="Password" onChange={handleChange}/>
                            </div>
                            <div class="col-sm-6">
                                <input type="password"  name="password2" class="form-control form-control-user"
                                    id="exampleRepeatPassword" placeholder="Repeat Password" onChange={handleChange}/>
                            </div>
                        </div>
                         <a type="submit" class="btn btn-primary btn-user " onClick={handleSubmit}>
                            Register Account
                        </a>    
                    </form>


                  
                     <br>
                     </br>
                     <br>
                     </br>
                     <br>
                     </br>
                     <br>
                     </br>                <br>
                     </br>
{/* ///////////////////// */}
                            </div>
                        {/* </div>
                    </div> */}
                <DashboardFooter />
                </div>
            </div>
        </div>
    )
    }