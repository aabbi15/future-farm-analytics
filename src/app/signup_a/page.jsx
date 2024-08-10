"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import GoogleLogin from '@/components/(auth)/GoogleLogin';
import { Rammetto_One } from 'next/font/google';

const font = Rammetto_One({
    weight: '400',
    subsets: ['latin'],
});

function LeafIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    )
  }

const AnalystLogin = () => {
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                router.push('/'); 
            }
        });

        return () => unsubscribe();
    }, [router]);

    return (
        <div className="h-dvh w-full flex">
            <div className="w-full grid grid-cols-2 bg-cover bg-no-repeat sbgimg">
                <div className="my-20 text-[black] w-4/5 p-10">
                    <h2 className="text-5xl font-extrabold mb-4">Empowering Farmers!</h2>
                    <p className=" text-2xl mt-2">
                        Using AI, we give simple advice to help farmers plan better, keep stocks, and avoid big price changes. Growing Tomorrow&apos;s Harvest Today
                    </p>
                </div>
                <div className="w-full bg-[#f0f4d4c2] backdrop-blur-[2px] float-right justify-center items-center">
                    <div className='h-1/2 flex items-center flex-col gap-4 p-10'>
                        <LeafIcon className="h-8 w-auto text-[#124b3d]" />
                        <h1 className={`text-4xl ${font.className}`}>Farm Future Analytics</h1>
                    </div>
                    <div className='h-1/2 flex items-center flex-col gap-4'>
                        <h1 className={`text-3xl ${font.className}`}>JOIN US AS AN ANALYST</h1>
                        <GoogleLogin role="analyst" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnalystLogin;