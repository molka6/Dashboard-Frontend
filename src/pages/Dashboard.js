import React  from 'react';
import DashboardNavbar from '../component/DashboardNavbar' ;
import DashboardSidebar from '../component/DashboardSidebar';
import DashboardFooter from '../component/DashboardFooter' ; 



export default function Dashboard() {      
    return (

        <div id="wrapper">
    
           <DashboardSidebar />
     

            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
    
                <DashboardNavbar />
    
              

                <DashboardFooter />
              
                </div>
            </div>
           
    
        </div>
       
    )
    }
