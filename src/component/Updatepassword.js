
import axiosInstance from '../axios';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function Updatepassword() {
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
    
        <div class="col-xl-4 col-lg-5">
        <div class="card shadow mb-4">
        <div
            class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 class="m-0 font-weight-bold text-primary">Update Password</h6>
        </div>
        <div class="card-body">
            
        <form class="user">
                                        <div class="form-group">
                                            <input type="password" class="form-control form-control-user"
                                                aria-describedby="emailHelp"
                                                placeholder="Old password" name="old_password" onChange={handleChange} />
                                                <br/>


                                                 <input type="password" class="form-control form-control-user"
                                                aria-describedby="emailHelp"
                                                placeholder="New password " name="new_password" onChange={handleChange} />


                                                
                                                  <br/>
                                                 <input type="password" class="form-control form-control-user"
                                                aria-describedby="emailHelp"
                                                placeholder="New password again" name="confirm_new_password" onChange={handleChange} />


                                        </div>


                                        <a onClick={handleSubmit} class="btn btn-primary btn-user btn-block">
                                            Update Password
                                        </a>



                                    </form>

        </div>
    </div>
</div>

    )
    }