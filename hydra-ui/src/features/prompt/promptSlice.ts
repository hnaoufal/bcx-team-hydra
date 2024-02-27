// src/features/counter/promptSlice.js
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

function extractJSONObject(str: string) {
    const regex = /\{.*\}/s;

    const match = str.match(regex);
    return match ? match[0] : null;
}

export const fetchTextData = createAsyncThunk(
    'prompt',
    async (arg: string, {dispatch, getState}: any) => {
        const response = await fetch('/prompt', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Include other headers as needed
            },
            body: JSON.stringify({message: arg})
        });
        const data = await response.text();
        // You can dispatch other actions here if needed
        if (data.startsWith('```json') && data.endsWith('```')) {
            return JSON.parse(data.slice(7, -3));
        }
        return JSON.parse(data);
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
                const joinObj = action.payload.join('');
                let obj = extractJSONObject(joinObj) || '';

                console.log('success', obj);
                state.loading = false;
                state.text.source = JSON.parse(obj).source;
                state.text.target = JSON.parse(obj).target;
            })
            .addCase(fetchTextData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message as string;
            });
    },
});

export const {setText} = promptSlice.actions;

export default promptSlice.reducer;
