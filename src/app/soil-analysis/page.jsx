"use client"

import Image from 'next/image';
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { auth, db } from '@/firebase/firebase';
import { doc, getDoc } from "firebase/firestore";
import Sidefarm from "@/components/(farmer-dash)/sidebar";
import DateDisplay from "@/components/(farmer-dash)/currdate";
import WeatherCard from '@/components/(farmer-dash)/weathercard';

function Page() {
    const [userName, setUserName] = useState('');
    const [suggestcrop, setSuggestcrop] = useState('Wheat');
    const [nitrogen, setNitrogen] = useState(78);
    const [phosphorus, setPhosphorus] = useState(22); // New state for phosphorus
    const [potassium, setPotassium] = useState(15); // New state for potassium
    const [pH, setPH] = useState(6.5); // New state for pH

    const [userCity, setUserCity] = useState('');
    const [loading, setLoading] = useState(true);

    const router = useRouter();
    onAuthStateChanged(getAuth(), (user) => !user && router.push("/"));

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                try {
                    const userDocRef = doc(db, "users", user.uid);
                    const userDoc = await getDoc(userDocRef);

                    if (userDoc.exists()) {
                        const userName = user.displayName || 'Kristin';
                        const userCity = userDoc.data().city || 'Gandhinagar';
                        setUserName(userName);
                        setUserCity(userCity);
                    }
                } catch (error) {
                    console.error("Error fetching user data: ", error);
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        });
        return () => unsubscribe();
    }, []);

    return (
        <div className="relative bg-[#f0f4d4] overflow-hidden max-h-screen">
            <Sidefarm />
            <div className="ml-60 pt-10 max-h-screen overflow-auto">
                <div className="px-6 py-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-3xl p-8 mb-5">
                            <h1 className="text-3xl font-bold mb-10">Personalized Soil Analysis Model</h1>

                            <hr className="my-10" />

                            <div className="grid grid-cols-6 gap-4">

                                <div className="col-span-2 p-4  rounded-lg border bg-slate-100 border-gray-800">
                                    <h1 className="text-2xl font-bold">My Soil Data</h1>
                                    <div className="grid gap-4 mt-2">

                                        {/* Nitrogen Level */}
                                        <div className="flex gap-2 items-center">
                                            <div className="bg-red-500 w-9 h-9 ring-2 ring-red-200 text-lg rounded-full text-center flex justify-center items-center font-extrabold">N</div>
                                            <div className="grid gap-1 text-sm flex-1">
                                                <h2 className="font-semibold leading-none line-clamp-2">
                                                    {nitrogen}%
                                                </h2>
                                                <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">
                                                    Nitrogen Level
                                                </div>
                                            </div>
                                        </div>

                                        {/* Phosphorus Level */}
                                        <div className="flex gap-2 items-center">
                                            <div className="bg-blue-500 w-9 h-9 ring-2 ring-blue-200 text-lg rounded-full text-center flex justify-center items-center font-extrabold">P</div>
                                            <div className="grid gap-1 text-sm flex-1">
                                                <h2 className="font-semibold leading-none line-clamp-2">
                                                    {phosphorus}%
                                                </h2>
                                                <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">
                                                    Phosphorus Level
                                                </div>
                                            </div>
                                        </div>

                                        {/* Potassium Level */}
                                        <div className="flex gap-2 items-center">
                                            <div className="bg-yellow-500 w-9 h-9 ring-2 ring-yellow-200 text-lg rounded-full text-center flex justify-center items-center font-extrabold">K</div>
                                            <div className="grid gap-1 text-sm flex-1">
                                                <h2 className="font-semibold leading-none line-clamp-2">
                                                    {potassium}%
                                                </h2>
                                                <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">
                                                    Potassium Level
                                                </div>
                                            </div>
                                        </div>

                                        {/* pH Level */}
                                        <div className="flex gap-2 items-center">
                                            <div className="bg-green-500 w-9 h-9 ring-2 ring-green-200 text-lg rounded-full text-center flex justify-center items-center font-extrabold">pH</div>
                                            <div className="grid gap-1 text-sm flex-1">
                                                <h2 className="font-semibold leading-none line-clamp-2">
                                                    {pH}
                                                </h2>
                                                <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">
                                                    Soil pH Level
                                                </div>
                                            </div>
                                        </div>



                                    </div>

                                    <div className='flex justify-end mt-5'>
                                        <button class="cursor-pointer text-xs transition-all bg-blue-500 text-white px-4 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                                            Edit Data
                                        </button></div>
                                </div>

                                <div className="col-span-4 p-4  rounded-lg border bg-slate-100 border-gray-800">
                                    <h1 className="text-2xl font-bold">According to our Model the most suitable crop for you soil and weather is: </h1>
                                    <div className="grid gap-4 mt-2">


                                        <div className="flex gap-5 justify-center pt-5 items-center">

                                        <div className="w-24 h-24 rounded-full border-4 border-gray-700 overflow-hidden">
                                            <img src="farmland.png" alt="ok" className="object-cover w-full h-full" />
                                        </div>

                                        <div className='font-bold text-4xl text-[#124b3d]  '>
                                            {suggestcrop}
                                        </div>

                                        </div>



                                    </div>

                                    <div className='flex justify-center mt-10 -mb-10'>
                                        <button class="cursor-pointer text-xs transition-all bg-green-500 text-black px-4 py-2 rounded-lg border-green-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                                            Learn how to grow {suggestcrop}
                                        </button></div>
                                </div>

                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page;
