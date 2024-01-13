import React, { useState } from "react";
import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import useDeviceDetector, { isMobile } from "../hooks/DeviceDetector";

function Layout() {
    const [collapsed, setCollapsed] = useState(false);
    const isMobileDevice = isMobile(useDeviceDetector());
    return (
        <div
            className={`grid min-h-screen transition-[grid-template-columns] duration-300 ease-in-out ${
                collapsed ? (isMobileDevice ? "grid-cols-sidebar-collapsed-mobile" : "grid-cols-sidebar-collapsed-desktop") : isMobileDevice ? "grid-cols-sidebar-mobile" : "grid-cols-sidebar-desktop"
            }`}
        >
            <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

            {/* <Header /> */}
            <div className="m-2 rounded-md bg-white overflow-auto h-[100vh] p-4">
                <Outlet />
            </div>

            {/* <Footer /> */}
        </div>
    );
}

export default Layout;
