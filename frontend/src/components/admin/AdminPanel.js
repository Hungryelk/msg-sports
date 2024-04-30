import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Profile from "./Profile";
import ManagePassword from "./ManagePassword";
import Captains from "./Captains";
import Players from "./Players";
import Events from "./Events";
import Games from "./Games";
import SiteSettings from "./SiteSettings";


const AdminPanel = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!sessionStorage.getItem("auth")) {
            navigate("/admin");
        }
    })

    return (
        <div className="relative bg-gray-200 min-h-screen">
            <Sidebar />
            <div className="ms-[16rem] relative">
                <Header />
                <div className="p-6">
                    <div></div>
                    <div className="bg-white p-4 rounded-md min-h-screen">
                        <Routes>
                            <Route path="dashboard" element={<Dashboard />}></Route>
                            <Route path="captains" element={<Captains />}></Route>
                            <Route path='players' element={<Players />}></Route>
                            <Route path="profile" element={<Profile />}></Route>
                            <Route path='manage-password' element={<ManagePassword />}></Route>
                            <Route path='events' element={<Events />}></Route>
                            <Route path='games' element={<Games />}></Route>
                            <Route path="site-settings" element={<SiteSettings />}></Route>
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
