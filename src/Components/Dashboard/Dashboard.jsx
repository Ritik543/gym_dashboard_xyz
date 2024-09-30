import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import DashboardCards from './DashboardCard';
import BodyWeightChart from './Bodyweight.jsx';
import './Dashboard.css';
import BodyFatGauge from './BodyFatGauge.jsx';
import FoodEntriesTable from './FoodEntriesTable.jsx';
import MilesWalked from './MilesWalked.jsx';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Sidebar />
            <div className="main-content">
                <div className="statistics">
                    <Header />
                    <DashboardCards />
                </div>
                <h3>Body Weight</h3>
                <div className="body-weight-section">

                    <BodyWeightChart />
                    <BodyFatGauge />
                </div>
                <div className='food-entries'>
                    <div className='food-tables'>
                        <FoodEntriesTable />
                    </div>

                    <MilesWalked />
                </div>

            </div>
        </div>
    );
};

export default Dashboard;

//
// const Dashboard = () => {
//     return (
//         <div className="dashboard-container">
//             <Sidebar />
//             <div className="main-content">

//                 <BodyWeightChart />
//             </div>
//         </div>
//     );
// };

// export default Dashboard;
