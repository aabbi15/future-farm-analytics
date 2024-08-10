"use client"

import { useRouter } from 'next/navigation';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import Sidefarm from "@/components/(farmer-dash)/sidebar";
import Mygraph from '@/components/(farmer-dash)/grapher';
import StatePrice from '@/components/(pyserver)/StatePrice';


function Dash() {
    const router = useRouter();
    onAuthStateChanged(getAuth(), (user) => !user && router.push("/"));

    return (
        <body className="relative bg-[#f0f4d4] overflow-hidden max-h-screen">
            <Sidefarm />
            <main className="ml-60 pt-10 max-h-screen overflow-auto">
                <div className="px-6 py-3">
                    <div className='flex justify-center items-center px-6 gap-10'>
                        <button className="w-[150px] bg-[#008B8B] h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#FF5800] before:to-[#ff9359] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">Wheat</button>
                        <button className="w-[150px] bg-[#008B8B] h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#FF5800] before:to-[#ff9359] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">Potato</button>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-3xl p-8 mb-5">
                            <StatePrice />
                        </div>
                    </div>
                </div>
            </main>
        </body>
    )
}

export default Dash;