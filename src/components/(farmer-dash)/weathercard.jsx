import React, { useState, useEffect } from "react";
import Image from 'next/image';

function WeatherCard({ loc }) {
    const [data, setWeatherData] = useState({});

    const mydate = new Date().toLocaleDateString('en-GB')

    console.log(mydate);


    // loc = "delhi";
    useEffect(() => {
        const fetchData = async () => {
            const url = `https://api.weatherapi.com/v1/forecast.json?key=538023bd3c43455084733202231905&q=${loc}&days=1&aqi=yes&alerts=yes`; // Replace with your actual URL
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                // console.log(data.current);
                setWeatherData(data.current);
            } catch (error) {
                console.error("There was a problem fetching weather data:", error);
            }
        };

        fetchData();


    }, []);
    // 

    if (data.current)
        console.log(data.current.temp_c);

    return (
        <div className="flex justify-center">
            <div className="card min-w-sm max-w-sm border border-gray-100 transition-shadow shadow-lg hover:shadow-xl w-full bg-purple-100 text-gray-800 rounded-md">
                <h2 className="text-md mb-2 px-4 pt-4">
                    <div className="flex justify-between">
                        <div className="badge relative top-0">
                            <span className="mt-2 py- h-12px text-md font-bold w-12px rounded right-1 bottom-1 px-4">{loc.toUpperCase()|| 'Gujarat'}</span>
                        </div>
                        <span className="text-lg font-bold ">{mydate || '6:13'}</span>
                    </div>
                </h2>

                <div className="text-md pt-4 pb-4 px-4">
                    <div className="flex justify-between items-center">
                        <div className="space-y-2">
                            <span className="flex space-x-2 items-center">
                                {/* Wind icon and speed */}
                                <svg height="20" width="20" viewBox="0 0 32 32" className="fill-current">
                                    <path d="M13,30a5.0057,5.0057,0,0,1-5-5h2a3,3,0,1,0,3-3H4V20h9a5,5,0,0,1,0,10Z"></path>
                                    <path d="M25 25a5.0057 5.0057 0 01-5-5h2a3 3 0 103-3H2V15H25a5 5 0 010 10zM21 12H6V10H21a3 3 0 10-3-3H16a5 5 0 115 5z"></path>
                                </svg>
                                <span>{data.wind_kph || '27'} km/h</span>
                            </span>
                            <span className="flex space-x-2 items-center">
                                {/* Humidity icon and value */}
                                <svg height="20" width="20" viewBox="0 0 32 32" className="fill-current">
                                    <path d="M16,24V22a3.2965,3.2965,0,0,0,3-3h2A5.2668,5.2668,0,0,1,16,24Z"></path>
                                    <path d="M16,28a9.0114,9.0114,0,0,1-9-9,9.9843,9.9843,0,0,1,1.4941-4.9554L15.1528,3.4367a1.04,1.04,0,0,1,1.6944,0l6.6289,10.5564A10.0633,10.0633,0,0,1,25,19,9.0114,9.0114,0,0,1,16,28ZM16,5.8483l-5.7817,9.2079A7.9771,7.9771,0,0,0,9,19a7,7,0,0,0,14,0,8.0615,8.0615,0,0,0-1.248-3.9953Z"></path>
                                </svg>
                                <span>{data.humidity || '32'}%</span>
                            </span>
                        </div>
                        <div className="flex flex-col">
                            {/* Weather Icon */}
                            {/* <Image src="/sun.png" alt="" width={40} height={40} className="mr-4" /> */}

                            {data.condition && (<Image src={`https:${data.condition.icon}`} alt="" width={40} height={40} className="mr-4" />)}
                            <div className="text-3xl"> {data.temp_c || '12'}°C </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherCard;
