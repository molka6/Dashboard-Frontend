import React from "react";
import DashboardNavbar from "../component/DashboardNavbar";
import DashboardSidebar from "../component/DashboardSidebar";
import DashboardFooter from "../component/DashboardFooter";
import DashboardMain from "../component/DashboardMain";

export default function Dashboard() {
    return (
        <div id="wrapper">
            <DashboardSidebar />

            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                    <DashboardNavbar />

                    <DashboardMain />

                    <DashboardFooter />
                </div>
            </div>
        </div>
    );
}
