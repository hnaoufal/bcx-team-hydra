import React from 'react';
import logo from './assets/logo.png';
import './App.css';

const GoogleMapPlaceholder = () => (
    <div className="w-full bg-gray-300 flex items-center justify-center" style={{height: '75vh'}}>
        <span>Google Map Placeholder</span>
    </div>
);

function App() {
    return (
        <div className="flex h-screen">
            {/* Static Side Panel */}
            <div className="w-1/5 bg-gray-800 text-white p-4">
                <h1 className="text-lg font-bold">Side Panel</h1>
                {/* Add your side panel content here */}
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

                        {/* Google Map */}
                        <GoogleMapPlaceholder/>

                        {/* Content Sections */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                            {/* News Feed */}
                            <div className="bg-gray-100 p-4 rounded-md shadow-lg">
                                <h2 className="font-bold mb-2">News Feed</h2>
                                {/* News feed content */}
                            </div>

                            {/* Analysis */}
                            <div className="bg-gray-100 p-4 rounded-md shadow-lg">
                                <h2 className="font-bold mb-2">Analysis</h2>
                                {/* Analysis content */}
                            </div>

                            {/* Report */}
                            <div className="bg-gray-100 p-4 rounded-md shadow-lg">
                                <h2 className="font-bold mb-2">Report</h2>
                                {/* Report content */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default App;
