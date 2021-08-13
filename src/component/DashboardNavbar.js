
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axiosInstance from '../axios';
import Logout from './Logout' ;
export default function DashboardNavbar()  {



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

            <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">




                <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                    <i class="fa fa-bars"></i>
                </button>

                <ul class="navbar-nav ml-auto">
                    <div class="topbar-divider d-none d-sm-block"></div>
                    <li class="nav-item dropdown no-arrow">



                      
                        <a class="nav-link dropdown-toggle"  id="userDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                            <span class="mr-2 d-none d-lg-inline text-gray-600 small"> {appState.posts.first_name } {appState.posts.last_name } </span>
                            <img class="img-profile rounded-circle"
                                    src="public/style/img/logo.jpg" />
                        
                        </a>


                       


                        <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                            aria-labelledby="userDropdown">
                        
                            <Link class="dropdown-item" to="/profile"> <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                Profile</Link> 



                            <Link class="dropdown-item" to="/updateProfile">
                                <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                UpdateProfile
                                </Link> 


                         


                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item"  data-toggle="modal" data-target="#logoutModal">
                                <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                Logout
                            </a>
                        </div>
                    </li>

                </ul>

            </nav>
        )
    
  }
