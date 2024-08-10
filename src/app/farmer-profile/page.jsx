"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '@/firebase/firebase';
import Farmerhead from "@/components/(farmer-dash)/header";
import Sidefarm from "@/components/(farmer-dash)/sidebar";
import DateDisplay from "@/components/(farmer-dash)/currdate";
import ProfileCard from "@/components/(farmer-dash)/profile-card";
import CropCard from "@/components/(farmer-dash)/cropcard";

function FarmerProfile() {
    const [userCrops, setUserCrops] = useState([]);
    const router = useRouter();

    const fetchUserData = async () => {
        try {
            const user = auth.currentUser;
            if (user) {
                const userDocRef = doc(db, "users", user.uid);
                const userDoc = await getDoc(userDocRef);

                if (userDoc.exists()) {
                    const userCrops = userDoc.data().crops || [];
                    setUserCrops(userCrops);
                } else {
                    console.warn("User document does not exist.");
                }
            }
        } catch (error) {
            console.error("Error fetching user data: ", error);
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
            if (!user) {
                router.push("/");
            } else {
                fetchUserData();
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
                        <div className="bg-white rounded-3xl p-8 mb-5">
                            <ProfileCard />
                            <h1 className="text-4xl font-bold mb-10 text-center text-black">My Crops</h1>
                            <div className="flex flex-wrap gap-4 justify-center">
                                {userCrops.length > 0 ? (
                                    userCrops.map((crop, index) => (
                                        <CropCard key={index} cropname={crop} />
                                    ))
                                ) : (
                                    <p>No crops found.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FarmerProfile;