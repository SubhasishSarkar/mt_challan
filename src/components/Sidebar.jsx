// components/Sidebar.tsx
import React from "react";
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { CiViewList } from "react-icons/ci";
import { IoIosDocument } from "react-icons/io";
import useDeviceDetector, { isMobile } from "../hooks/DeviceDetector";
const links = [
    {
        link: "/",
        label: "Dashboard",
        icon: <MdDashboard />,
    },
    {
        link: "/challan/rungta",
        label: "Challan Rungta",
        icon: <IoIosDocument />,
    },
    {
        link: "/authorize",
        label: "Authorize",
        icon: <CiViewList />,
    },
];
const Sidebar = ({ collapsed, setCollapsed }) => {
    const Icon = collapsed ? ChevronDoubleRightIcon : ChevronDoubleLeftIcon;
    const isMobileDevice = isMobile(useDeviceDetector());
    return (
        <div className="bg-[#001932] text-zinc-50 z-20">
            {!isMobileDevice ? (
                <div className="flex flex-col justify-between">
                    <div className={`flex items-center border-b border-b-indigo-800 ${collapsed ? "py-4 justify-center" : "p-4 justify-between"}`}>
                        {!collapsed && <span className="whitespace-nowrap">MANJU TRANSPORT</span>}
                        <button
                            className="grid place-content-center hover:bg-indigo-800 w-10 h-10 rounded-full"
                            // 👇 set the collapsed state on click
                            onClick={() => setCollapsed(!collapsed)}
                        >
                            <Icon className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="py-3 px-5">
                        <ul className="list-unstyled components">
                            {links.map((item, index) => {
                                return (
                                    <li key={index} className="py-2">
                                        <NavLink to={item.link} className="flex">
                                            <span className="flex justify-center items-center pr-2">{item.icon}</span>
                                            {!collapsed && (
                                                <span>
                                                    {item.label} <span style={{ fontSize: "12px", color: "#afdb99" }}>{item.subLabel}</span>
                                                </span>
                                            )}
                                        </NavLink>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            ) : (
                <>
                    {!collapsed ? (
                        <div className="flex flex-col justify-between">
                            <div className={`flex items-center border-b border-b-indigo-800 ${collapsed ? "py-4 justify-center" : "p-4 justify-between"}`}>
                                {!collapsed && <span className="whitespace-nowrap">MANJU TRANSPORT</span>}
                                <button
                                    className="grid place-content-center hover:bg-indigo-800 w-10 h-10 rounded-full"
                                    // 👇 set the collapsed state on click
                                    onClick={() => setCollapsed(!collapsed)}
                                >
                                    <Icon className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="py-3 px-5">
                                <ul className="list-unstyled components">
                                    {links.map((item, index) => {
                                        return (
                                            <li key={index} className="py-2">
                                                <NavLink
                                                    to={item.link}
                                                    className="flex"
                                                    onClick={(e) => {
                                                        setCollapsed(true);
                                                    }}
                                                >
                                                    <span className="flex justify-center items-center pr-2">{item.icon}</span>

                                                    <span>
                                                        {item.label} <span style={{ fontSize: "12px", color: "#afdb99" }}>{item.subLabel}</span>
                                                    </span>
                                                </NavLink>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <button
                            style={{
                                position: "absolute",
                                bottom: "5px",
                                right: "15px",
                                background: "#011932",
                                padding: "10px",
                                borderRadius: "50%",
                            }}
                            onClick={(e) => {
                                setCollapsed(false);
                            }}
                        >
                            <Icon className="w-5 h-5" />
                        </button>
                    )}
                </>
            )}
        </div>
    );
};
export default Sidebar;
