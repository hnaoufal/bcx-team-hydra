import React from 'react';
import logo from './assets/logo.png';
import './App.css';

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
                <h1 className="text-xl font-semibold mb-4">Main Content</h1>
                {/* Add your main content here. This part is scrollable if the content overflows. */}
                <div className="space-y-4">
                    {/* Dummy content to demonstrate scrollability */}
                    {Array.from({length: 50}, (_, index) => (
                        <p key={index}>This is item {index + 1} in the main content area.</p>
                    ))}
                </div>
            </div>
        </div>);
}

export default App;
