"use client"

import { useEffect, useState } from 'react';
import { auth } from '@/firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, } from 'recharts';
import { Poppins } from "next/font/google";

const font = Poppins({
    weight: '800',
    subsets: ['latin'],
})

function LeafIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
    )
}

const states = ["Bihar", "Delhi", "Gujarat", "Haryana", "Himachal Pradesh", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Odisha", "Punjab", "Rajasthan", "Tamil Nadu", "Uttar Pradesh", "West Bengal", "Other"];

const RenderLineChart = () => {
    const [state, setState] = useState('');
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [stateData, setStateData] = useState(null);
    const [isSignedIn, setIsSignedIn] = useState(false)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setIsSignedIn(true);
            } else {
                setIsSignedIn(false);
            }
        });
        return () => unsubscribe();
    });

    useEffect(() => {
        let data = fetch('/rice.json')
            .then(res => res.json())
            .then(data => {
                if (state && data) {
                    if (state == "Other") {
                        const filteredData = data.map(entry => ({
                            date: entry.Date,
                            value: entry["All India Average"]
                        }));
                        setStateData(filteredData);
                    }
                    else {
                        const filteredData = data.map(entry => ({
                            date: entry.Date,
                            value: entry[state]
                        }));
                        setStateData(filteredData);
                    }
                }
            })

        const updateDimensions = () => {
            const b1w = document.getElementById('bento-1').offsetWidth;
            const b1h = document.getElementById('bento-1').offsetHeight - 50;
            setDimensions({ width: b1w, height: b1h });
        };

        updateDimensions();

        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, [state]);

    return (
        <div className='flex h-[100dvh] justify-center items-center'>
            <header className="absolute inset-x-0 top-0 z-50">
                <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Farm Future Analytics</span>
                            <LeafIcon className="h-8 w-auto text-[#124b3d]" />
                        </a>
                    </div>
                    <div className="lg:flex lg:gap-x-12">
                        <a href="/#keyfeatures" className="text-sm hover:underline underline-offset-4 font-semibold leading-6 text-[#124b3d]">Features</a>
                        <a href="/analysis" className="text-sm hover:underline underline-offset-4 font-semibold leading-6 text-[#124b3d]">Analysis</a>
                        {!isSignedIn && <a href="#joinus" className="text-sm hover:underline underline-offset-4 font-semibold leading-6 text-[#124b3d]">Join</a>}
                        <a href="/#contactus" className="text-sm hover:underline underline-offset-4 font-semibold leading-6 text-[#124b3d]">Contact</a>
                    </div>
                    <div className="lg:flex lg:flex-1 lg:justify-end">
                        {!isSignedIn ? <a href="/signup" className="rounded-md bg-[#124b3d] px-4 py-2 text-sm font-semibold text-white shadow-sm">Sign Up</a> : <a href="/farmer-dashboard" className="rounded-md bg-[#124b3d] px-4 py-2 text-sm font-semibold text-white shadow-sm">Dashboard</a>}
                    </div>
                </nav>
            </header>
            <section className='relative h-full w-full isolate px-6 pt-20 lg:px-8'>
                <div className="flex h-full w-full items-center justify-center">
                    <div className="grid h-full w-full gap-4 bg-transparent p-2 grid-cols-4 grid-rows-7 rounded-lg">
                        <div className="col-span-2 row-span-2 bg-[#b1d4c7] rounded-lg shadow-md flex justify-center items-center p-4">
                            <div>
                                <p className={`text-4xl font-bold tracking-tight text-[#124b3d] ${font.className}`}>Tailored Agricultural Solutions</p>
                                <p>Enhance your crop management with our custom solutions like Crop Prediction and Price Monitoring. Make informed decisions for better yields.</p>
                            </div>
                        </div>
                        <div className="col-span-2 row-span-2 bentoimg2 bg-no-repeat bg-cover bg-yellow-200 rounded-lg shadow-md"></div>
                        <div className="col-span-1 row-span-5 bentoimg1 bg-no-repeat bg-cover rounded-lg shadow-md"></div>
                        <div id="bento-1" className="col-span-3 row-span-5 bg-lime-200 rounded-lg shadow-md flex items-center justify-center">
                            <div>
                                <div className={`flex pb-2 pr-2 pl-2 hover:border-[0px] focus:border-[0px] active:border-[0px] font justify-between items-center${font.className}`}>
                                    <h1 className={`text-2xl ${font.className}`}>Rice Price 2014-2024</h1>
                                    <select value={state} onChange={(e) => setState(e.target.value)} className="p-2 bg-transparent rounded-full" required>
                                        <option value="" disabled>Select State</option>
                                        {states.map((stateName) => (
                                            <option key={stateName} value={stateName}>{stateName}</option>
                                        ))}
                                    </select>
                                </div>
                                <LineChart width={dimensions.width} height={dimensions.height} data={stateData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="date" interval={11}></XAxis><YAxis /><Tooltip /><Line type="monotone" dataKey="value" stroke="#8884d8" dot={<></>} /></LineChart>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default RenderLineChart