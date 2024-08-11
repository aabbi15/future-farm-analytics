"use client"

import { useEffect, useState } from 'react';
import { auth } from '@/firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Contact from '@/components/(homepage)/contactus';
import Aboutus from '@/components/(homepage)/aboutus';
import Feauture from '@/components/(homepage)/features';
import Joinus from '@/components/(homepage)/joinus';
import Whyus from '@/components/(homepage)/whyus';
import Myfooter from '@/components/(homepage)/myfooter';

function LeafIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
    )
}

export default function Home() {
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

    return (
        <div className="w-full mx-auto">
            <div className="bg-[#f0f4d4]">
                <header className="absolute inset-x-0 top-0 z-50">
                    <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                        <div className="flex lg:flex-1">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Farm Future Analytics</span>
                                <LeafIcon className="h-8 w-auto text-[#124b3d]" />
                            </a>
                        </div>
                        <div className="lg:flex lg:gap-x-12">
                            <a href="#keyfeatures" className="text-sm hover:underline underline-offset-4 font-semibold leading-6 text-[#124b3d]">Features</a>
                            <a href="/analysis" className="text-sm hover:underline underline-offset-4 font-semibold leading-6 text-[#124b3d]">Analysis</a>
                            {!isSignedIn && <a href="#joinus" className="text-sm hover:underline underline-offset-4 font-semibold leading-6 text-[#124b3d]">Join</a>}
                            <a href="#getintouch" className="text-sm hover:underline underline-offset-4 font-semibold leading-6 text-[#124b3d]">Contact</a>
                        </div>
                        <div className="lg:flex lg:flex-1 lg:justify-end">
                            {!isSignedIn ? <a href="/signup" className="rounded-md bg-[#124b3d] px-4 py-2 text-sm font-semibold text-white shadow-sm">Sign Up</a> : <a href="/farmer-dashboard" className="rounded-md bg-[#124b3d] px-4 py-2 text-sm font-semibold text-white shadow-sm">Dashboard</a>}
                        </div>
                    </nav>
                </header>
                <section className="relative isolate px-6 lg:px-8">
                    <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
                    </div>
                    <div className="mx-auto max-w-5xl py-32 md:py-36 lg:py-44">
                        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                <div className="font-semibold">
                                    <div className="flex grid-cols-3">
                                        Growing Tomorrow&apos;s Harvest Today !
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-[#124b3d] sm:text-6xl">Unlock the Future of Farming with Farm Future Analytics</h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">Our cutting-edge analytics platform helps farmers and agribusinesses make informed decisions and maximize their yields.</p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                {isSignedIn ? <a href="/farmer-dashboard" className="rounded-md bg-[#124b3d] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#12493ccd] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Dashboard</a> : <a href="#joinus" className="rounded-md bg-[#124b3d] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#12493ccd] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>}
                            </div>
                            <div className="hidden sm:mt-4 sm:flex sm:justify-center">
                                <a href="https://github.com/pranshu05/hackout" className="text-sm hover:underline underline-offset-4 font-semibold leading-6 text-[#124b3d]">
                                    <div className="flex grid-cols-3">
                                        Checkout our GitHub Repo ! <span className="pl-2 pr-2 flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></g></svg></span> <span className="text-[#124b3d]" aria-hidden="true">&rarr;</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
                        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
                    </div>
                </section>
                <Aboutus />

                <div className='py-8'></div>

                <Feauture/>

                <Whyus/>

                {!isSignedIn && (
                    <Joinus/>
                )}
                

                <div className='py-24'></div>
                <Contact/>
                
                <Myfooter/>
            </div>
        </div>
    );
}