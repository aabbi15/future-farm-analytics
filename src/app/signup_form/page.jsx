"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth, db } from '@/firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import Select from 'react-select';
import { Rammetto_One } from "next/font/google";

const font = Rammetto_One({
    weight: '400',
    subsets: ['latin'],
});

const states = ["Bihar", "Delhi", "Gujarat", "Haryana", "Himachal Pradesh", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Odisha", "Punjab", "Rajasthan", "Tamil Nadu", "Uttar Pradesh", "West Bengal", "Other"];

const cropsOptions = [
    { value: 'rice', label: 'Rice' },
    { value: 'maize', label: 'Maize' },
    { value: 'chickpea', label: 'Chickpea' },
    { value: 'kidneybeans', label: 'Kidney Beans' },
    { value: 'pigeonpeas', label: 'Pigeon Peas' },
    { value: 'mothbeans', label: 'Moth Beans' },
    { value: 'mungbean', label: 'Mung Bean' },
    { value: 'blackgram', label: 'Black Gram' },
    { value: 'lentil', label: 'Lentil' },
    { value: 'pomegranate', label: 'Pomegranate' },
    { value: 'banana', label: 'Banana' },
    { value: 'mango', label: 'Mango' },
    { value: 'grapes', label: 'Grapes' },
    { value: 'watermelon', label: 'Watermelon' },
    { value: 'muskmelon', label: 'Muskmelon' },
    { value: 'apple', label: 'Apple' },
    { value: 'orange', label: 'Orange' },
    { value: 'papaya', label: 'Papaya' },
    { value: 'coconut', label: 'Coconut' },
    { value: 'cotton', label: 'Cotton' },
    { value: 'jute', label: 'Jute' },
    { value: 'coffee', label: 'Coffee' },
];

const SignupForm = () => {
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [farmArea, setFarmArea] = useState('');
    const [selectedCrops, setSelectedCrops] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
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
                const cropValues = selectedCrops.map(crop => crop.value);

                await setDoc(userDocRef, {
                    city, state, farmArea, crops: cropValues
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
                    <Select isMulti options={cropsOptions} value={selectedCrops} onChange={setSelectedCrops} className="mb-2" placeholder="Select Crops" required />
                    <button type="submit" className="w-fit mx-auto rounded-md bg-[#124b3d] px-4 py-2 text-sm font-semibold text-white shadow-sm">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default SignupForm;