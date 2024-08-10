"use client"

import { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, } from 'recharts';
import { Poppins } from "next/font/google";

const font = Poppins({
    weight: '800',
    subsets: ['latin'],
})

const Mygraph = () => {
    const [state, setState] = useState('Delhi');
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [stateData, setStateData] = useState(null);

    const data1 = {
        crop: "Wheat",
        month: "April",
        price: "₹ 20.14/kg"
    }

    useEffect(() => {
        let data = fetch('/2014-2024.json')
            .then(res => res.json())
            .then(data => {
                if (state && data.Sheet1) {
                    if (state == "Other") {
                        const filteredData = data.Sheet1.map(entry => ({
                            date: entry.Date,
                            value: entry["All India Average"]
                        }));
                        setStateData(filteredData);
                    }
                    else {
                        const filteredData = data.Sheet1.map(entry => ({
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
            <section className='relative h-full w-full isolate px-6 pt-5 lg:px-8'>
                <div className="flex h-full w-full items-center justify-center">
                    <div className="grid h-full w-full gap-4 bg-transparent p-2 grid-cols-4 grid-rows-11 rounded-lg">
                        <div className="col-span-2 row-span-3 bg-[#b1d4c7] rounded-lg shadow-md flex justify-center items-center p-4">
                            <p className='text-black text-base text-center p-1'>
                                <b>1. Strategic Selling:</b><br />
                                Predictive models help farmers identify the best times to sell crops for maximum profit. By storing produce and selling when prices peak, farmers can increase revenue significantly.
                            </p>
                        </div>
                        <div className="col-span-2 row-span-3 bg-no-repeat bg-cover bg-yellow-200 rounded-lg shadow-md flex items-center justify-center">
                            <p className='text-black text-base text-center p-1'>
                                <b>2. Financial Planning and Investment:</b><br />
                                Accurate price forecasts enable better budgeting for seeds, fertilizers, and labor. This reduces cash flow risks and lowers overall costs.
                            </p>
                        </div>
                        <div id="bento-1" className="col-span-4 row-span-5 bg-lime-200 rounded-lg shadow-md flex items-center justify-center">
                            <div>
                                <div className={`flex pb-2 pr-2 pl-2 hover:border-[0px] focus:border-[0px] active:border-[0px] font justify-between items-center${font.className}`}>
                                    <h1 className={`text-2xl ${font.className}`}>Rice Price 2020-2024</h1>
                                </div>
                                <LineChart width={dimensions.width} height={dimensions.height} data={stateData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}> <CartesianGrid strokeDasharray="3 3" /> <XAxis dataKey="date" interval={11}></XAxis> <YAxis /> <Tooltip />
                                    <Line type="monotone" dataKey="value" stroke="#8884d8" dot={<></>} />
                                </LineChart>
                            </div>
                        </div>
                        <div className="col-span-2 row-span-3 bg-red-200 rounded-lg shadow-md flex items-center justify-center">
                            <p className='text-black text-base text-center p-1'>
                                <b>3. Negotiating Power and Entering Contracts:</b><br />
                                Farmers can use price forecasts to negotiate better deals and secure favorable contracts, reducing income volatility.
                            </p>
                        </div>
                        <div className="col-span-2 row-span-3 bg-gray-200 rounded-lg shadow-md flex items-center justify-center">
                            <p className='text-black text-base text-center p-1'>
                                <b>4. Risk Mitigation through Crop Diversification:</b><br />
                                Price predictions guide farmers in diversifying crops, reducing reliance on a single income source and decreasing income variability.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Mygraph;