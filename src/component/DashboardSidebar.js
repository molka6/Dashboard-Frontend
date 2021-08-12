
import React, {Component} from 'react';
export default class DashboardSidebar extends Component {
    render(){
        return (
            <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <div style={{ backgroundColor:"007bff"}}>
                        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                               <img class="sidebar-card-illustration mb-2 logo_primatec" src="style/img/logo.jpg" alt="..." />
                
                        </a>
               </div>
                <hr class="sidebar-divider my-0"/>
                <li class="nav-item active">
                    <a class="nav-link" href="index.html">
                        <i class="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></a>
                </li>
                <hr class="sidebar-divider"/>
                <div class="sidebar-heading">
                    Interface
                </div>
                <li class="nav-item">
                    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo">
                        <i class="fas fa-fw fa-cog"></i>
                        <span>Components</span>
                    </a>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <h6 class="collapse-header">Custom Components:</h6>
                            <a class="collapse-item" href="buttons.html">Buttons</a>
                            <a class="collapse-item" href="cards.html">Cards</a>
                        </div>
                    </div>
                </li>

                <hr class="sidebar-divider"/>
    
    
    
                <div class="sidebar-heading">
                    Addons
                </div>
    
    
    
              
    
    
    
    
                <li class="nav-item">
                    <a class="nav-link" href="charts.html">
                        <i class="fas fa-fw fa-chart-area"></i>
                        <span>Charts</span></a>
                </li>
    
    
    
                <li class="nav-item">
                    <a class="nav-link" href="tables.html">
                        <i class="fas fa-fw fa-table"></i>
                        <span>Tables</span></a>
                </li>
    
    
    
    
                
    
    
    
            </ul>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    



        )
    }
}