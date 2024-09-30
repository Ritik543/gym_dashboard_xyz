import React from 'react';
import './Sidebar.css';
import { FaTachometerAlt, FaUser, FaUsers, FaFileAlt, FaClipboardList, FaPlus, FaComments } from 'react-icons/fa';
import { FaBowlFood, FaGear } from 'react-icons/fa6';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <button className="add-new-btn dashboard-btn"> Dashboard</button>
            <button className="add-new-btn"><FaPlus className="icon" /> Add new entry</button>
            <ul className="sidebar-menu">
                <li className="menu-item">
                    <FaTachometerAlt className="icon" /> Dashboard
                </li>
                <li className="menu-item">
                    <FaUser className="icon" /> My Profile
                </li>
                <li className="menu-item active">
                    <FaUsers className="icon" /> My Client
                </li>
                <li className="menu-item">
                    <FaFileAlt className="icon" /> Report
                </li>
                <li className="menu-item">
                    <FaClipboardList className="icon" /> My Diet Plans
                </li>
                <li className="menu-item">
                    <FaPlus className="icon" /> Create Diet Plan
                </li>
                <li className="menu-item">
                    <FaComments className="icon" /> Chat
                </li>
                <li className="menu-item">
                    <FaBowlFood className="icon" /> Search Food
                </li>
                <li className="menu-item">
                    <FaGear className="icon" /> Settings
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
