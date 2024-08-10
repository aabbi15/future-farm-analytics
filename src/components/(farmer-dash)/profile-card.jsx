"use client";

import { useState, useEffect } from "react";
import { auth, db } from '@/firebase/firebase';
import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import Select from 'react-select';

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

export default function ProfileCard() {
    const [userName, setUserName] = useState('');
    const [userCity, setUserCity] = useState('');
    const [userPic, setUserPic] = useState('');
    const [email, setEmail] = useState('');
    const [showCropForm, setShowCropForm] = useState(false);
    const [selectedCrops, setSelectedCrops] = useState([]);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                try {
                    const userDocRef = doc(db, "users", user.uid);
                    const userDoc = await getDoc(userDocRef);

                    if (userDoc.exists()) {
                        const userName = user.displayName || 'Kristin';
                        const userCity = userDoc.data().city || 'Gandhinagar';
                        const userPic = user.photoURL;
                        const email = user.email || '';
                        setUserName(userName);
                        setUserCity(userCity);
                        setUserPic(userPic);
                        setEmail(email);
                        setUserId(user.uid);
                    }
                } catch (error) {
                    console.error("Error fetching user data: ", error);
                }
            }
        });

        return () => unsubscribe();
    }, []);

    const handleAddCrops = async () => {
        if (selectedCrops.length === 0) return;

        try {
            const userDocRef = doc(db, "users", userId);
            const cropValues = selectedCrops.map(crop => crop.value);

            await updateDoc(userDocRef, { crops: arrayUnion(...cropValues) });

            setShowCropForm(false);
            setSelectedCrops([]);
            alert("Crops added successfully!");
        } catch (error) {
            console.error("Error updating crops: ", error);
            alert("Error updating crops. Please try again.");
        }
    };

    return (
        <div className="container mx-auto my-20">
            <div>
                <div className="bg-slate-50 relative shadow-lg rounded-lg w-5/6 md:w-5/6 lg:w-4/6 xl:w-5/6 mx-auto">
                    <div className="flex justify-center">
                        <img src={userPic} alt="" className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" />
                    </div>
                    <div className="mt-16">
                        <h1 className="font-bold text-center text-3xl text-gray-900">{userName}</h1>
                        <div className="w-full">
                            <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-md font-semibold p-2">
                                <div className="border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                    <img src="email.png" alt="" className="rounded-full h-6 shadow-md inline-block mr-2" />{email}
                                </div>
                                <div className="border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                    <img src="/location-sign.png" alt="" className="rounded-full h-6 shadow-md inline-block mr-2" />{userCity}
                                </div>
                                <button onClick={() => setShowCropForm(!showCropForm)} className="rounded-md bg-[#124b3d] px-4 py-2 text-sm font-semibold text-white shadow-sm">
                                    Add Crop
                                </button>
                                {showCropForm && (
                                    <div className="mt-5 w-full p-2">
                                        <Select isMulti options={cropsOptions} value={selectedCrops} onChange={setSelectedCrops} className="mb-2" />
                                        <button onClick={handleAddCrops} className="rounded-md bg-[#124b3d] px-4 py-2 text-sm font-semibold text-white shadow-sm">Save Crops</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}