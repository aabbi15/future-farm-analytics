"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import Sidefarm from "@/components/(farmer-dash)/sidebar";
import StatePrice from '@/components/(pyserver)/StatePrice';


function Dash() {
    const router = useRouter();
    onAuthStateChanged(getAuth(), (user) => !user && router.push("/"));

    return (
        <body className="relative bg-[#f0f4d4] overflow-hidden max-h-screen">
            <Sidefarm />
            <main className="ml-60 pt-10 max-h-screen overflow-auto">
                <div className="px-6 py-3">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-3xl p-8 mb-5">
                            <StatePrice/>
                        </div>
                    </div>
                </div>
            </main>
        </body>
    )
}

export default Dash;