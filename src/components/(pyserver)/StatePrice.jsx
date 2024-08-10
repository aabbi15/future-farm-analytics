"use client";

import axios from 'axios';
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Label
} from 'recharts';
import { Poppins } from "next/font/google";
import { useEffect, useState } from 'react';
import { auth, db } from '@/firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

const font = Poppins({
    weight: '800',
    subsets: ['latin'],
})

const states = ["Bihar", "Delhi", "Gujarat", "Haryana", "Himachal Pradesh", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Odisha", "Punjab", "Rajasthan", "Tamil Nadu", "Uttar Pradesh", "West Bengal", "Other"];


export default function StatePrice() {
    const [predictions, setPredictions] = useState([]);
    const [state, setState] = useState('');
    const [loading, setLoading] = useState(true);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [stateData, setStateData] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                try {
                    const userDocRef = doc(db, "users", user.uid);
                    const userDoc = await getDoc(userDocRef);

                    if (userDoc.exists()) {
                        const userState = userDoc.data().state || 'Bihar';
                        setState(userState);

                        let data = fetch('/2014-2024.json')
                            .then(res => res.json())
                            .then(data => {
                                if (state && data.Sheet1) {
                                    if (state == "Other") {
                                        const filteredData = data.Sheet1.map(entry => ({
                                            date: entry.Date,
                                            value: entry["All India Average"]
                                        }));
                                        const last12Elements = filteredData.slice(-12);
                                        setStateData(last12Elements);
                                    }
                                    else {
                                        const filteredData = data.Sheet1.map(entry => ({
                                            date: entry.Date,
                                            value: entry[state]
                                        }));
                                        const last12Elements = filteredData.slice(-12);
                                        setStateData(last12Elements);
                                        (async () => {
                                            const response = await axios.post('http://127.0.0.1:5000/rice-price-predict', { state: userState });
                                            const arr = [];
                                            for (const key in response.data) {
                                                if (response.data.hasOwnProperty(key)) {
                                                    arr.push({ date: key, prediction: response.data[key] });
                                                }
                                            }
                                            const finalarr = last12Elements.concat(arr);
                                            setStateData(finalarr);
                                        })()
                                    }
                                }
                            })

                        const updateDimensions = () => {
                            const b1w = document.getElementById('predictgraph').offsetWidth;
                            const b1h = document.getElementById('predictgraph').offsetHeight - 50;
                            setDimensions({ width: b1w, height: b1h });
                        };

                        updateDimensions();
                        window.addEventListener('resize', updateDimensions);
                    } else {
                        console.error("User document does not exist.");
                    }
                } catch (error) {
                    console.error("Error fetching predictions: ", error);
                }
            } else {
                console.error("No authenticated user found.");
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, [state]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1 className={`text-2xl font-bold tracking-tight text-[#124b3d] ${font.className}`}>{state} Crop Price Forecast</h1>
            <div className='flex h-[100dvh] justify-center items-center'>

                <section className='relative h-full w-full isolate px-6 pt-5 lg:px-8'>
                    <div className="flex h-full w-full items-center justify-center">
                        <div className="grid h-full w-full gap-4 bg-transparent p-2 grid-cols-4 grid-rows-8 rounded-lg">
                            <div className="col-span-2 row-span-2 bg-[#b1d4c7] rounded-lg shadow-md flex justify-center items-center p-4">
                                <p className='text-black text-base text-center p-1'>
                                    <b>1. Strategic Selling:</b><br />
                                    Predictive models help farmers identify the best times to sell crops for maximum profit. By storing produce and selling when prices peak, farmers can increase revenue significantly.
                                </p>
                            </div>
                            <div className="col-span-2 row-span-2 bg-no-repeat bg-cover bg-yellow-200 rounded-lg shadow-md flex justify-center items-center p-4">
                                <p className='text-black text-base text-center p-1'>
                                    <b>2. Financial Planning and Investment:</b><br />
                                    Accurate price forecasts enable better budgeting for seeds, fertilizers, and labor. This reduces cash flow risks and lowers overall costs.
                                </p>
                            </div>
                            <div id="predictgraph" className="col-span-4 row-span-4 bg-lime-200 rounded-lg shadow-md">
                                <div className='w-full h-full'>
                                    <div className={`flex pb-2 pr-2 pl-2 hover:border-[0px] focus:border-[0px] active:border-[0px] font justify-between items-center${font.className}`}>
                                        <h1 className={`text-2xl ${font.className}`}>Rice Price 2020-2024</h1>
                                    </div>
                                    <LineChart width={dimensions.width} height={dimensions.height} data={stateData}
                                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="date" interval={11}></XAxis>
                                        <YAxis type="number" domain={['auto', 'auto']} />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={3} />
                                        <Line type="monotone" dataKey="prediction" stroke="#82ca9d" strokeWidth={3} />
                                    </LineChart>
                                </div>
                            </div>

                            <div className="col-span-2 row-span-2 bg-red-200 rounded-lg shadow-md flex items-center justify-center">
                                <p className='text-black text-base text-center p-1'>
                                    <b>3. Negotiating Power and Entering Contracts:</b><br />
                                    Farmers can use price forecasts to negotiate better deals and secure favorable contracts, reducing income volatility.
                                </p>
                            </div>
                            <div className="col-span-2 row-span-2 bg-gray-200 rounded-lg shadow-md flex items-center justify-center">
                                <p className='text-black text-base text-center p-1'>
                                    <b>4. Risk Mitigation through Crop Diversification:</b><br />
                                    Price predictions guide farmers in diversifying crops, reducing reliance on a single income source and decreasing income variability.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}