"use client";

import { useState, useEffect } from "react";
import { auth, db } from '@/firebase/firebase';
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export default function ProfileCard() {
    const [userName, setUserName] = useState('');
    const [userCity, setUserCity] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                try {
                    const userDocRef = doc(db, "users", user.uid);
                    const userDoc = await getDoc(userDocRef);

                    if (userDoc.exists()) {
                        const userName = user.displayName || 'Kristin';
                        const userCity = userDoc.data().city || 'Gandhinagar';
                        const email = user.email || '';
                        setUserName(userName);
                        setUserCity(userCity);
                        setEmail(email);
                    }
                } catch (error) {
                    console.error("Error fetching user data: ", error);
                }
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="container mx-auto my-20">
            <div>
                <div className="bg-slate-50 relative shadow-lg rounded-lg w-5/6 md:w-5/6 lg:w-4/6 xl:w-5/6 mx-auto">
                    <div className="flex justify-center">
                        <img src="/farmer.png" alt="" className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" />
                    </div>
                    <div className="mt-16">
                        <h1 className="font-bold text-center text-3xl text-gray-900">{userName}</h1>
                        <div className="w-full">
                            <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-md font-semibold">
                                <div className="border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                    <img src="email.png" alt="" className="rounded-full h-6 shadow-md inline-block mr-2" />
                                    {email}
                                </div>
                                <div className="border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                    <img src="/location-sign.png" alt="" className="rounded-full h-6 shadow-md inline-block mr-2" />
                                    {userCity}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}