import React from 'react';
import logo from './assets/logo.png';
import './App.css';
import {
    ArcElement,
    Chart as ChartJS,
    Filler,
    Legend,
    LineElement,
    PointElement,
    RadialLinearScale,
    Tooltip
} from "chart.js";
import {useDispatch, useSelector} from 'react-redux';
import {fetchTextData} from './features/prompt/promptSlice';


import MapContainer from './components/MapContainer';

import {Doughnut, Radar} from "react-chartjs-2";
import RiskInfoPanel from "./components/RiskInfoPanel";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const options = {
    elements: {
        line: {
            borderWidth: 3
        }
    }
};

const RadarChartComponent = ({context}: any) => {
    return <Radar data={context.radar} options={options}/>;
};

ChartJS.register(ArcElement, Tooltip, Legend);

const GoogleMapPlaceholder = () => (
    <div className="w-full bg-gray-300 flex items-center justify-center" style={{height: '75vh'}}>
        <span>Google Map Placeholder</span>
    </div>
);


function App() {
    const count = useSelector((state: any) => state.counter.value);
    const [prompt, setPrompt] = React.useState('');
    const dispatch = useDispatch();
    const context = useSelector((state: any) => state.counter.text);
    console.log(context);

    return (
        <div className="flex h-screen">
            {/* Static Side Panel */}
            <div className="w-1/5 bg-gray-800 text-white p-4">
                <h1 className="text-lg font-bold">Risk Info</h1>
                <RiskInfoPanel {...context.riskData} />

            </div>

            {/* Main Content */}
            <div className="w-4/5 overflow-auto">
                <nav className="bg-white p-4 flex justify-between items-center">
                    {/* Logo on the left */}
                    <div className="flex items-center">
                        <div className="h-8 w-8 mr-2"><img src={logo}/></div>
                        <span className="font-semibold text-xl">Hydra</span>
                    </div>

                    {/* Search bar in the center */}
                    <div className="flex-grow mx-4 flex items-center space-x-2">
                        <input
                            className="flex-grow p-2 rounded-md border border-gray-300"
                            type="text"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="Search..."
                        />
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            onClick={() => dispatch(fetchTextData(prompt) as any)}
                        >
                            Send
                        </button>
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

                        <MapContainer source={context.source} target={context.target}/>

                        {/* Content Sections */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                            {/* News Feed */}
                            <div className="bg-gray-100 p-4 rounded-md shadow-lg">
                                <h2 className="font-bold mb-2">News Feed</h2>
                                <ul className="list-disc pl-5">
                                    {(context.newsFeed || []).map((item: any, index: any) => (
                                        <li key={index} className="text-gray-700 text-base">{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Analysis */}
                            <div className="bg-gray-100 p-4 rounded-md shadow-lg">
                                <h2 className="font-bold mb-2">Analysis</h2>
                                <RadarChartComponent context={context}/>
                            </div>

                            {/* Report */}
                            <div className="bg-gray-100 p-4 rounded-md shadow-lg">
                                <h2 className="font-bold mb-2">Report</h2>
                                <Doughnut data={context.donut}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default App;
