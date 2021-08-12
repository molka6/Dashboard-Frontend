import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import axiosInstance from '../axios';
import { useHistory } from 'react-router-dom';
export default function Register() { 
        const history = useHistory();
        const initialFormData = Object.freeze({
            email: '',
            first_name:'',
            last_name:'',
            password: '',
            password2:'',
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
                .post(`authentification/register`, {
                    email: formData.email,
                    first_name: formData.first_name,
                    last_name:formData.last_name,
                    password: formData.password,
                    password2: formData.password2
                })
                .then((res) => {
                    history.push('/');
                    console.log(res);
                    console.log(res.data);
                });
        };
        return (
<div class="container">
    <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
                     <div class="row">
                                <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
                                 <div class="col-lg-7">
                                        <div class="p-5">
                                                <div class="text-center">
                                                    <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                                                </div>
                    <form class="user">
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
                         <a type="submit" class="btn btn-primary btn-user btn-block" onClick={handleSubmit}>
                            Register Account
                        </a>    
                    </form>
                    <hr/>
                    <div class="text-center">
                    <Link to="/">Already have an account? Login!</Link> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</div>

           
         
        )
    }
