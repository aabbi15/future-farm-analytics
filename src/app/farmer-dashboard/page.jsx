"use client"

import Image from 'next/image';
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import Farmerhead from "@/components/(farmer-dash)/header";
import Sidefarm from "@/components/(farmer-dash)/sidebar";
import DateDisplay from "@/components/(farmer-dash)/currdate";
import Current from '@/components/(farmer-dash)/weathercard';


function Dash() {
    const [welcome, Setwelcome] = useState("Good day, Kristin");
    const [name, Setname] = useState("Kristin");
    const [loc, Setloc] = useState("Gandhinagar");

    const [data, setdata] = useState({});
    const url = `https://api.weatherapi.com/v1/forecast.json?key=538023bd3c43455084733202231905&q=${loc}&days=7&aqi=yes&alerts=yes`;

    const router = useRouter();
    onAuthStateChanged(getAuth(), (user) => !user && router.push("/"));

    useEffect(() => {

        console.log("i am in useeffect");


        const fetchData = async () => {
          try {
            const response = await fetch(url);

            console.log(response);
            if (!response.ok) {
              throw new Error();
            }
            const data = await response.json();
            setdata(data);
            // setError("");
          } catch (error) {
            console.log("ERROR",error);
            // setError("City not found");
            setdata({});
          }
        };
    
        // Only trigger the fetch when a search operation is intended
        if(loc){
            fetchData();

            console.log(data);
        }
          
        
      }, []); 

    
    



    return (
        <body className="relative bg-[#f0f4d4] overflow-hidden max-h-screen">
            {/* <Farmerhead section = "Home"/>S */}
            <Sidefarm />
            <main className="ml-60 pt-10 max-h-screen overflow-auto">
                <div className="px-6 py-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-3xl p-8 mb-5">
                            <h1 className="text-3xl font-bold mb-10">{welcome}</h1>
                            <div className="flex items-center justify-between">
                                <div className="">
                                    <div className="flex items-stretch pt-4">
                                        <div className="text-gray-400 text-xs">
                                            <Image src="/location-sign.png" alt="avatar" width="21" height="21" />
                                        </div>
                                        <div className="pl-2"> {loc} </div>
                                        <div className="h-[20px] border-l mx-4"></div>
                                        <div className="-mt-2 -ml-1">
                                            <DateDisplay />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-x-2">
                                    <button type="button" className="inline-flex items-center justify-center h-9 px-5 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition">
                                        Go to Profile
                                    </button>
                                </div>
                            </div>
                            <hr className="my-10" />
                            <div className="grid grid-cols-2 gap-x-20">
                                <div>
                                    <h2 className="text-2xl font-bold mb-4">Stats</h2>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="col-span-2">
                                            <div className="p-4 bg-green-100 rounded-xl">
                                                <div className="font-bold text-xl text-gray-800 leading-none">See the latest news from <br /> <div className="pt-1.5"> Future Farm! </div></div>
                                                <div className="mt-5">
                                                    <button type="button" className="inline-flex items-center justify-center py-2 px-3 rounded-xl bg-white text-gray-800 hover:text-green-500 text-sm font-semibold transition">
                                                        Read more
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 bg-yellow-100 rounded-xl text-gray-800">
                                            <div className="font-bold text-2xl leading-none">20</div>
                                            <div className="mt-2">Tasks finished</div>
                                        </div>
                                        <div className="p-4 bg-yellow-100 rounded-xl text-gray-800">
                                            <div className="font-bold text-2xl leading-none">5,5</div>
                                            <div className="mt-2">Tracked hours</div>
                                        </div>
                                        <div className="col-span-2">
                                            <div className="p-4 bg-purple-100 rounded-xl text-gray-800">
                                                <div className="font-bold text-xl leading-none">Your daily plan</div>
                                                <div className="mt-2">5 of 8 completed</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold mb-4">Latest Notifications for you</h2>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                                            <div className="flex justify-between">
                                                <div className="text-gray-400 text-xs">Number 10</div>
                                                <div className="text-gray-400 text-xs">4h</div>
                                            </div>
                                            <a href="javascript:void(0)" className="font-bold hover:text-yellow-800 hover:underline">Blog and social posts</a>
                                            <div className="text-sm text-gray-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-gray-800 inline align-middle mr-1" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                </svg>Deadline is today
                                            </div>
                                        </div>
                                        <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                                            <div className="flex justify-between">
                                                <div className="text-gray-400 text-xs">Grace Aroma</div>
                                                <div className="text-gray-400 text-xs">7d</div>
                                            </div>
                                            <a href="javascript:void(0)" className="font-bold hover:text-yellow-800 hover:underline">New campaign review</a>
                                            <div className="text-sm text-gray-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-gray-800 inline align-middle mr-1" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                </svg>New feedback
                                            </div>
                                        </div>
                                        <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                                            <div className="flex justify-between">
                                                <div className="text-gray-400 text-xs">Petz App</div>
                                                <div className="text-gray-400 text-xs">2h</div>
                                            </div>
                                            <a href="javascript:void(0)" className="font-bold hover:text-yellow-800 hover:underline">Cross-platform and browser QA</a>
                                        </div>
                                    </div>
                                </div>

                                <Current data={data}/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </body>
    )
}

export default Dash;