"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import Sidefarm from "@/components/(farmer-dash)/sidebar";
import News from '@/components/(farmer-dash)/news';

function FarmerNews() {
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
            if (!user) {
                router.push("/");
            }
        });

        return () => unsubscribe();
    }, [router]);

    return (
        <div className="relative bg-[#f0f4d4] overflow-hidden max-h-screen">
            <Sidefarm />
            <div className="ml-60 pt-10 max-h-screen overflow-auto">
                <div className="px-6 py-3">
                    <div className="max-w-4xl mx-auto">
                        <News />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FarmerNews;