// src/features/counter/promptSlice.js
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const delay = (ms: any) => new Promise(resolve => setTimeout(resolve, ms));


const mock = {
    "source": {
        "lat": 52.5200,
        "lng": 13.4050
    },
    "target": {
        "lat": 51.5074,
        "lng": -0.1278
    },
    "radar": {
        "labels": ["Energy", "Risk", "Economic Stability", "Social Responsibility", "Regulatory & Comp.", "Distance", "Success"],
        "datasets": [
            {
                "label": "Risk",
                "data": [70, 50, 88, 80, 65, 930, 75],
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
            }
        ]
    },
    "donut": {
        "labels": ["Risk", "Success"],
        "datasets": [
            {
                "label": "Risk vs. Success",
                "data": [25, 75],
                "borderWidth": 1,
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
            }
        ]
    },
    "newsFeed": ["Brexit implications on travel and trade may affect the journey. Stay updated with the latest regulations."],
    "riskData": {
        "riskName": "Geopolitical Changes",
        "riskCategory": "Political",
        "description": "Brexit may cause delays due to new border controls and regulations.",
        "risks": ["Customs delays", "Increased travel time", "Regulatory changes"],
        "recommendations": "Check for travel advisories related to Brexit before planning your trip.",
        "actions": [
            "Obtain necessary travel documents well in advance.",
            "Stay informed on the latest travel regulations between the EU and UK.",
            "Plan for extra travel time in case of delays."
        ]
    }
}


export const fetchTextData = createAsyncThunk(
    'prompt',
    async (arg: string, {dispatch, getState}: any) => {
        await delay(3000); // Delay for 1 second

        const response = await fetch('/prompt', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Include other headers as needed
            },
            body: JSON.stringify({message: arg})
        });
        return response.json();
    }
);

export const promptSlice = createSlice({
    name: 'prompt',
    initialState: {
        text: {
            source: {
                lat: 34.0522,
                lng: -118.2437,
            },
            target: {
                lat: 37.7749,
                lng: -122.4194,
            },
            radar: {
                labels: ['Energy', 'Risk', 'Economic Stability', 'Social Responsibility', 'Regulatory & Comp.', 'Distance', 'Success'],
                datasets: [
                    {
                        label: 'Risk',
                        data: [65, 59, 90, 81, 56, 55, 40],
                        fill: true,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
                    },
                ],
            },
            donut: {
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
            },
            newsFeed: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
                "Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.",
            ],
            riskData: {
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
            }
        },
        loading: false,
        error: '',
    },
    reducers: {
        setText: (state, action) => {
            state.text = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTextData.pending, (state) => {
                console.log('fetchTextData.pending')
                state.loading = true;
            })
            .addCase(fetchTextData.fulfilled, (state, action) => {

                // const joinObj = action.payload.join('');
                // let obj = extractJSONObject(joinObj) || '';
                // state.text = {
                //     source: {
                //         lat: 52.5200, // lat of Berlin
                //         lng: 13.4050, // lng of Berlin
                //     },
                //     target: {
                //         lat: 51.5074, // lat of London
                //         lng: -0.1278, // lng of London
                //     },
                //     radar: {
                //         labels: ['Energy', 'Risk', 'Economic Stability', 'Social Responsibility', 'Regulatory & Comp.', 'Distance', 'Success'],
                //         datasets: [
                //             {
                //                 label: 'Risk',
                //                 data: [60, 45, 85, 75, 65, 50, 80], // Hypothetical data for the Berlin to London route
                //                 fill: true,
                //                 backgroundColor: 'rgba(255, 99, 132, 0.2)',
                //                 borderColor: 'rgba(255, 99, 132, 1)',
                //                 pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                //                 pointBorderColor: '#fff',
                //                 pointHoverBackgroundColor: '#fff',
                //                 pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
                //             },
                //         ],
                //     },
                //     donut: {
                //         labels: ['Risk', 'Success'],
                //         datasets: [
                //             {
                //                 label: 'Risk vs. Success',
                //                 data: [30, 70], // Hypothetical success rate based on risk assessment
                //                 borderWidth: 1,
                //                 backgroundColor: [
                //                     'rgba(255, 99, 132, 0.2)',
                //                     'rgba(54, 162, 235, 0.2)',
                //                     'rgba(255, 206, 86, 0.2)',
                //                     'rgba(75, 192, 192, 0.2)',
                //                     'rgba(153, 102, 255, 0.2)',
                //                     'rgba(255, 159, 64, 0.2)',
                //                 ],
                //                 borderColor: [
                //                     'rgba(255, 99, 132, 1)',
                //                     'rgba(54, 162, 235, 1)',
                //                     'rgba(255, 206, 86, 1)',
                //                     'rgba(75, 192, 192, 1)',
                //                     'rgba(153, 102, 255, 1)',
                //                     'rgba(255, 159, 64, 1)',
                //                 ],
                //             },
                //         ],
                //     },
                //     newsFeed: ["Current travel advisories recommend checking COVID-19 regulations and Brexit impacts on travel between EU countries and the UK."],
                //     riskData: {
                //         riskName: "Travel Disruptions",
                //         riskCategory: "Operational",
                //         description: "Potential delays due to Brexit, COVID-19 restrictions, and unpredictable weather conditions.",
                //         risks: ["Brexit-related customs delays", "COVID-19 travel restrictions and requirements", "Unpredictable weather leading to travel disruptions"],
                //         recommendations: "Check the latest travel advisories, ensure travel documents are up to date, and consider travel insurance.",
                //         actions: [
                //             "Monitor government and travel websites for updates",
                //             "Ensure passports and visas (if required) are valid",
                //             "Stay informed about weather conditions",
                //             "Plan for additional travel time"
                //         ]
                //     }
                // }
                if (action.payload?.radar?.datasets?.length > 0) {
                    action.payload.radar.datasets[0] = {
                        fill: true,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
                        ...action.payload.radar.datasets[0]
                    };

                    action.payload.donut.datasets[0] = {
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
                        ...action.payload.donut.datasets[0]
                    };

                    state.loading = false;
                    state.text = action.payload;
                } else {
                    state.loading = false;
                    state.text = mock as any;
                }
            })
            .addCase(fetchTextData.rejected, (state, action) => {
                console.log(state);
                state.loading = false;
                state.text = mock as any;
            });
    },
});

export const {setText} = promptSlice.actions;

export default promptSlice.reducer;
