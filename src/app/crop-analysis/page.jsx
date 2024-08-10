"use client"

import Image from 'next/image';
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import Farmerhead from "@/components/(farmer-dash)/header";
import Sidefarm from "@/components/(farmer-dash)/sidebar";
import DateDisplay from "@/components/(farmer-dash)/currdate";
import ProfileCard from "@/components/(farmer-dash)/profile-card";
import CropCard from "@/components/(farmer-dash)/cropcard";


function Dash() {
    const [welcome, Setwelcome] = useState("Good day, Kristin");
    const [name, Setname] = useState("Kristin");
    const [location, Setlocation] = useState("Gandhinagar, GJ");

    const router = useRouter();
    onAuthStateChanged(getAuth(), (user) => !user && router.push("/"));

    return (
        <body class="relative bg-[#f0f4d4] overflow-hidden max-h-screen">
            {/* <Farmerhead section = "My Profile"/> */}
            <Sidefarm />
            <main class="ml-60 pt-10 max-h-screen overflow-auto">
                
                
                <div class="px-6 py-3">
                <div className='flex justify-center items-center px-6 gap-10'>

             
<button class="w-[150px] bg-[#008B8B] h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#FF5800] before:to-[#ff9359] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
    Wheat
</button>

<button class="w-[150px] bg-[#008B8B] h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#FF5800] before:to-[#ff9359] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
    Potato
</button>


</div>
                    <div class="max-w-4xl mx-auto">
                        <div class="bg-white rounded-3xl p-8 mb-5">
                            <ProfileCard />
                            <h1 class="text-4xl font-bold mb-10 text-center text-black">My Crops</h1>
                            <div className="flex gap-2 items-start">
                                <CropCard cropname="Wheat" />
                                <CropCard cropname="Potato" />
                                <CropCard cropname="Rice" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </body>
    )
}

export default Dash;