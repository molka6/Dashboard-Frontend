import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import axiosInstance from '../axios';
import { useHistory } from 'react-router-dom';
export default function Login()  {
    const history = useHistory();
    const initialFormData = Object.freeze({
		email: '',
		password: '',
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
				localStorage.setItem('access_token', res.data.access);
				localStorage.setItem('refresh_token', res.data.refresh);
				axiosInstance.defaults.headers['Authorization'] =
					'JWT ' + localStorage.getItem('access_token');
				history.push('/dashboard');
				console.log(res);
				console.log(res.data);
			});
	};
        return (
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-10 col-lg-12 col-md-9">
                        <div class="card o-hidden border-0 shadow-lg my-5">
                            <div class="card-body p-0">
                                <div class="row">
                                <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                <div class="col-lg-6">
                                    <div class="p-5">
                                        {/* ****************** */}
                                        <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Login </h1>
                                        </div>
                                        {/* *********form************ */}
                                        <form class="user">
                                            <div class="form-group">
                                                        <input 
                                                        name="email"
                                                        type="email" class="form-control form-control-user"
                                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                                        placeholder="Enter Email Address..."
                                                        onChange={handleChange} />
                                            </div>
                                            <div class="form-group">
                                                <input 
                                                name="password"
                                                id="password"
                                                type="password" class="form-control form-control-user"
                                                    id="exampleInputPassword" placeholder="Password"
                                                    onChange={handleChange} />
                                            </div>
                                        <div class="form-group">
                                        </div>
                                                <a  class="btn btn-primary btn-user btn-block" onClick={handleSubmit}>
                                                    Login
                                                </a>

                                    </form>
 {/* *********endform************ */}
 <hr/>
                                    <div class="text-center">
                                         <Link to="/register">Create an Account!</Link> 
                                    </div>
{/* ******************************* */}
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
