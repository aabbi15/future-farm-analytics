"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth, db } from '@/firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { Rammetto_One } from "next/font/google";

const font = Rammetto_One({
    weight: '400',
    subsets: ['latin'],
});

const states = ["Bihar", "Delhi", "Gujarat", "Haryana", "Himachal Pradesh", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Odisha", "Punjab", "Rajasthan", "Tamil Nadu", "Uttar Pradesh", "West Bengal", "Other"];

const SignupForm = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [farmArea, setFarmArea] = useState('');
    const [crops, setCrops] = useState('');
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setIsSignedIn(true);
                const userDocRef = doc(db, "users", user.uid);
                const userDoc = await getDoc(userDocRef);

                if (userDoc.exists() && userDoc.data().city) {
                    router.push('/');
                }
            } else {
                router.push('/');
            }
        });

        return () => unsubscribe();
    }, [router]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const user = auth.currentUser;
            if (user) {
                const userDocRef = doc(db, "users", user.uid);
                await setDoc(userDocRef, {
                    city, state, farmArea, crops: crops.split(',').map(crop => crop.trim())
                }, { merge: true });
                router.push('/');
            }
        } catch (error) {
            console.error("Error saving user data: ", error);
        }
    };

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
                <h1 className={`text-4xl ${font.className}`}>Signup Form</h1>
                <form className="flex flex-col gap-4 w-3/4" onSubmit={handleSubmit}>
                    <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} className="p-2 rounded-lg bg-transparent border border-[#124b3d]" required />
                    <select value={state} onChange={(e) => setState(e.target.value)} className="p-2 rounded-lg bg-transparent border border-[#124b3d]" required>
                        <option value="" disabled>Select State</option>
                        {states.map((stateName) => (
                            <option key={stateName} value={stateName}>{stateName}</option>
                        ))}
                    </select>
                    <input type="text" placeholder="Farm Area (e.g., 10 acres)" value={farmArea} onChange={(e) => setFarmArea(e.target.value)} className="p-2 rounded-lg bg-transparent border border-[#124b3d]" required />
                    <input type="text" placeholder="Crops (e.g., wheat, rice, corn)" value={crops} onChange={(e) => setCrops(e.target.value)} className="p-2 rounded-lg bg-transparent border border-[#124b3d]" required />
                    <button type="submit" className="w-fit mx-auto rounded-md bg-[#124b3d] px-4 py-2 text-sm font-semibold text-white shadow-sm">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default SignupForm;