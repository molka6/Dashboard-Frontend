
import React, { useState, useEffect } from 'react';
import DashboardNavbar from '../component/DashboardNavbar' ;
import DashboardSidebar from '../component/DashboardSidebar';
import DashboardFooter from '../component/DashboardFooter' ; 
import Updatepassword from '../component/Updatepassword' ;
import axiosInstance from '../axios';
import { Link } from 'react-router-dom'


export default function Profile() {    
	const [appState, setAppState] = useState({
		loading: true,
		posts: '',
	});

    useEffect(() => {
      axiosInstance.get('authentification/properties/').then((res) => {
        const allPosts = res.data;
        setAppState({ loading: false, posts: allPosts });
        console.log(res.data);
        console.log(allPosts)
        console.log(allPosts.pk)
      });
    }, [setAppState]);

    return (
        <div id="wrapper">
           <DashboardSidebar />
            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                <DashboardNavbar />
    {/* ******************************************* */}

    <div class="row">
<div class="col-xl-8 col-lg-7">
    <div class="card shadow mb-4">
        <div
            class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 class="m-0 font-weight-bold text-primary">Profile</h6>



            <div class="dropdown no-arrow">
                <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                    aria-labelledby="dropdownMenuLink">
                    <div class="dropdown-header"></div>
                    <Link  class="dropdown-item" to="/updateProfile">Update Profile</Link> 
                  
                   
                </div>
            </div>






        </div>
        <div class="card-body">
            <div class="chart-area">
               {/* ******************************* */}
             
                   
                       
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <tbody>
                                       
                                        
                                        <tr>
                                            <td>First Name</td>
                                            <td> {appState.posts.first_name }</td>
                                            
                                        </tr>
                                        <tr>
                                            <td>Last Name </td>
                                            <td> {appState.posts.last_name } </td>
                                           
                                        </tr>

                                        <tr>
                                            <td>Email</td>
                                            <td> {appState.posts.email } </td>
                                           
                                        </tr>


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    

{/* **************************************** */}
               
            </div>
        </div>
    </div>
</div>

<Updatepassword />


</div>
















    {/* ******************************************* */}





















              

                <DashboardFooter />
    
                </div>
            </div>
           
    
        </div>
       
    )
    }