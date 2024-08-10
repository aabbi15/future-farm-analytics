"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import Sidefarm from "@/components/(farmer-dash)/sidebar";

function Alerts() {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1);
    const alertsPerPage = 5;

    const alerts = [
        {
            author: 'Number 10',
            title: 'Prices of wheat are subject to increase 20% in the next quarter',
            timeAgo: '4h',
            alertMsg: 'This affects your crop'
        },
        {
            author: 'Number 10',
            title: 'Prices of wheat are subject to increase 20% in the next quarter',
            timeAgo: '4h',
            alertMsg: 'This affects your crop'
        },
        {
            author: 'Number 10',
            title: 'Prices of wheat are subject to increase 20% in the next quarter',
            timeAgo: '4h',
            alertMsg: 'This affects your crop'
        },
        {
            author: 'Number 10',
            title: 'Prices of wheat are subject to increase 20% in the next quarter',
            timeAgo: '4h',
            alertMsg: 'This affects your crop'
        },
        {
            author: 'Number 10',
            title: 'Prices of wheat are subject to increase 20% in the next quarter',
            timeAgo: '4h',
            alertMsg: 'This affects your crop'
        },
        {
            author: 'Grace Aroma',
            title: 'Prices of grains are Potatoes to be falling by 5% in Gujarat',
            timeAgo: '7d',
        },
        {
            author: 'Grace Aroma',
            title: 'Prices of grains are Potatoes to be falling by 5% in Gujarat',
            timeAgo: '7d',
        },
        {
            author: 'Grace Aroma',
            title: 'Prices of grains are Potatoes to be falling by 5% in Gujarat',
            timeAgo: '7d',
        },
        {
            author: 'Grace Aroma',
            title: 'Prices of grains are Potatoes to be falling by 5% in Gujarat',
            timeAgo: '7d',
        },
        {
            author: 'Grace Aroma',
            title: 'Prices of grains are Potatoes to be falling by 5% in Gujarat',
            timeAgo: '7d',
        },
    ]

    const totalPages = Math.ceil(alerts.length / alertsPerPage);

    const currentAlerts = alerts.slice(
        (currentPage - 1) * alertsPerPage,
        currentPage * alertsPerPage
    );

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
            if (!user) {
                router.push("/");
            }
        });

        return () => unsubscribe();
    }, [router]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="relative bg-[#f0f4d4] overflow-hidden max-h-screen">
            <Sidefarm />
            <div className="ml-60 pt-10 max-h-screen overflow-auto">
                <div className="px-6 py-3">
                    <div className="max-w-4xl mx-auto">
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-center">Latest Notifications for you</h2>
                            <div className="space-y-4">
                                {currentAlerts.map((alert, index) => (
                                    <div key={index} className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                                        <div className="flex justify-between">
                                            <div className="text-gray-400 text-xs">{alert.author}</div>
                                            <div className="text-gray-400 text-xs">{alert.timeAgo}</div>
                                        </div>
                                        <div className="font-bold">{alert.title}</div>
                                        {alert.alertMsg && (
                                            <div className="text-sm text-gray-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-gray-800 inline align-middle mr-1" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                </svg>{alert.alertMsg}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-between mt-4">
                                <button onClick={handlePrevPage} disabled={currentPage === 1} className={`rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm ${currentPage === 1 ? 'hidden' : 'bg-[#124b3d]'}`}>&#60;</button>
                                <button onClick={handleNextPage} disabled={currentPage === totalPages} className={`rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm ${currentPage === totalPages ? 'hidden' : 'bg-[#124b3d]'}`}>&gt;</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Alerts;