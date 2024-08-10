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
                    <div className="grid h-full w-full gap-4 bg-transparent p-2 grid-cols-4 grid-rows-9 rounded-lg">
                        <div className="col-span-2 row-span-2 bg-[#b1d4c7] rounded-lg shadow-md flex justify-center items-center p-4">
                            <div>
                                <p className='text-black text-lg text-center'>
                                    The Market Price for <span className='font-bold'>{data1.crop}</span> will be highest in
                                    <span className='font-bold bg-[#FFCDD2]'>{data1.month}</span> and will be valued approximately at
                                    <span className='font-bold bg-[#FFEB3B]'> {data1.price}</span>
                                </p>
                            </div>
                        </div>
                        <div className="col-span-2 row-span-2 bentoimg2 bg-no-repeat bg-cover bg-yellow-200 rounded-lg shadow-md"></div>
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
                        <div className="col-span-2 row-span-2 bg-red-200 rounded-lg shadow-md flex items-center justify-center">
                            <p className={`text-md font-bold tracking-tight text-[#124b3d] ${font.className}`}>Growing Tomorrow&apos;s Harvest Today !</p>
                        </div>
                        <div className="col-span-2 row-span-2 bg-gray-200 rounded-lg shadow-md flex items-center justify-center">
                            <p className={`text-xl font-bold tracking-tight text-[#124b3d] ${font.className}`}>Dataset :</p> <a className='text-xl hover:underline underline-offset-4' href='https://consumeraffairs.nic.in/'>https://consumeraffairs.nic.in/</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Mygraph;