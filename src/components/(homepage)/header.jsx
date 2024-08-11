"use client"

import { useEffect, useState } from 'react';
import { auth } from '@/firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';


function LeafIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
    )
}


export default function Header() {

    const [isSignedIn, setIsSignedIn] = useState(false)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setIsSignedIn(true);
            } else {
                setIsSignedIn(false);
            }
        });
        return () => unsubscribe();
    });

    return(

        <header className="absolute inset-x-0 top-0 z-50">
                    <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                        <div className="flex lg:flex-1">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Farm Future Analytics</span>
                                <LeafIcon className="h-8 w-auto text-[#124b3d]" />
                            </a>
                        </div>
                        <div className="lg:flex lg:gap-x-12">

                            <a href="/#features" className="text-sm hover:underline underline-offset-4 font-semibold leading-6 text-[#124b3d]">Features</a>
                            <a href="/analysis" className="text-sm hover:underline underline-offset-4 font-semibold leading-6 text-[#124b3d]">Analysis</a>
                            <a href="/#aboutus" className="text-sm hover:underline underline-offset-4 font-semibold leading-6 text-[#124b3d]">About</a>
                            {!isSignedIn && <a href="/#joinus" className="text-sm hover:underline underline-offset-4 font-semibold leading-6 text-[#124b3d]">Join</a>}
                            <a href="/#contactus" className="text-sm hover:underline underline-offset-4 font-semibold leading-6 text-[#124b3d]">Contact</a>
                        </div>
                        <div className="lg:flex lg:flex-1 lg:justify-end">
                            {!isSignedIn ? <a href="/signup" className="rounded-md bg-[#124b3d] px-4 py-2 text-sm font-semibold text-white shadow-sm">Sign Up</a> : <a href="/farmer-dashboard" className="rounded-md bg-[#124b3d] px-4 py-2 text-sm font-semibold text-white shadow-sm">Dashboard</a>}
                        </div>
                    </nav>
                </header>
    )
}
