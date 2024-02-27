import React from 'react';
import logo from './assets/logo.png';
import './App.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, RadialLinearScale, PointElement, LineElement, Filler } from "chart.js";
import MapContainer from './components/MapContainer';

import { Doughnut } from "react-chartjs-2";
import { Radar } from 'react-chartjs-2';
import RiskInfoPanel from "./components/RiskInfoPanel";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const radarData = {
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [
        {
            label: 'Person A',
            data: [65, 59, 90, 81, 56, 55, 40],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            pointBackgroundColor: 'rgba(255, 99, 132, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
        },
        {
            label: 'Person B',
            data: [28, 48, 40, 19, 96, 27, 100],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            pointBackgroundColor: 'rgba(54, 162, 235, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(54, 162, 235, 1)',
        }
    ],
};

const options = {
    elements: {
        line: {
            borderWidth: 3
        }
    }
};

const RadarChartComponent = () => {
    return <Radar data={data} options={options} />;
};

ChartJS.register(ArcElement, Tooltip, Legend);
const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

const GoogleMapPlaceholder = () => (
    <div className="w-full bg-gray-300 flex items-center justify-center" style={{height: '75vh'}}>
        <span>Google Map Placeholder</span>
    </div>
);

const riskData = {
    riskName: "Flood Risk",
    riskCategory: "Environment",
    description: "Potential flooding due to heavy rainfall.",
    risks: [
        "Water damage to property",
        "Disruption of transport routes",
        "Increased risk of landslides"
    ],
    recommendations: "Evacuate flood-prone areas, secure belongings, and stay informed through local news.",
    actions: [
        "Check emergency kits",
        "Review evacuation routes",
        "Subscribe to weather alerts",
        "Secure outdoor objects"
    ]
};

function App() {
    return (
        <div className="flex h-screen">
            {/* Static Side Panel */}
            <div className="w-1/5 bg-gray-800 text-white p-4">
                <h1 className="text-lg font-bold">Risk Info</h1>
                <RiskInfoPanel {...riskData} />

            </div>

            {/* Main Content */}
            <div className="w-4/5 overflow-auto">
                <nav className="bg-white p-4 flex justify-between items-center">
                    {/* Logo on the left */}
                    <div className="flex items-center">
                        <div className="h-8 w-8 mr-2"><img src={logo} /></div>
                        <span className="font-semibold text-xl">Hydra</span>
                    </div>

                    {/* Search bar in the center */}
                    <div className="flex-grow mx-4">
                        <input
                            className="w-full p-2 rounded-md"
                            type="text"
                            placeholder="Search..."
                        />
                    </div>

                    {/* Account icon on the right */}
                    <div>
                        <button className="flex items-center">
                            <div className="h-6 w-6">👤</div>
                        </button>
                    </div>
                </nav>
                {/* Add your main content here. This part is scrollable if the content overflows. */}
                <div className="space-y-4">
                    <div className="flex flex-col">
                        {/* Action Bar */}
                        <div className="p-4 bg-gray-800 text-white">
                            <h1 className="text-lg">Action Bar</h1>
                            {/* Action items here */}
                        </div>

                    <MapContainer/>

                        {/* Content Sections */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                            {/* News Feed */}
                            <div className="bg-gray-100 p-4 rounded-md shadow-lg">
                                <h2 className="font-bold mb-2">News Feed</h2>
                                <ul className="list-disc pl-5">
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</li>
                                    <li>Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.</li>
                                </ul>                            </div>

                            {/* Analysis */}
                            <div className="bg-gray-100 p-4 rounded-md shadow-lg">
                                <h2 className="font-bold mb-2">Analysis</h2>
                                <RadarChartComponent />
                            </div>

                            {/* Report */}
                            <div className="bg-gray-100 p-4 rounded-md shadow-lg">
                                <h2 className="font-bold mb-2">Report</h2>
                                <Doughnut data={data} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default App;
