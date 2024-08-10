"use client";

import { useRouter } from 'next/navigation';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import GoogleLogin from "@/components/(auth)/GoogleLogin";
import { Rammetto_One } from "next/font/google";

const font = Rammetto_One({
    weight: '400',
    subsets: ['latin'],
});

const FarmerLogin = () => {
    const router = useRouter();

    onAuthStateChanged(getAuth(), (user) => user && router.push('/signup_form'));

    return (
        <div className="h-dvh w-full flex">
            <div className="w-1/2 bg-cover bg-no-repeat sbgimg p-10">
                <div className="w-1/2">
                    <h2 className="text-3xl font-extrabold mb-4">Empowering Farmers!</h2>
                    <p className="text-lg font-semibold mt-2">
                        Using AI, we give simple advice to help farmers plan better, keep stocks, and avoid big price changes. Growing Tomorrow&apos;s Harvest Today.
                    </p>
                </div>
            </div>
            <div className="w-1/2 float-right flex flex-col gap-4 justify-center items-center">
                <h1 className={`text-4xl ${font.className}`}>JOIN US AS A FARMER</h1>
                <GoogleLogin role="farmer" />
            </div>
        </div>
    );
};

export default FarmerLogin;