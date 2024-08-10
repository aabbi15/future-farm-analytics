"use client";

import { useState, useEffect } from "react";
import { auth, db } from '@/firebase/firebase';
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export default function ProfileCard() {
<<<<<<< HEAD
    const [userName, setUserName] = useState('');
    const [userCity, setUserCity] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(true);

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
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        });

        return () => unsubscribe();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
=======
    const [email, Setemail] = useState("abhinav123@gmail.com");
    const [name, Setname] = useState("Abhinav Singh");
    const [phone, Setphone] = useState("+91 8686709797");
    const [location, Setlocation] = useState("Gandhinagar, GJ");
>>>>>>> 658bf6120b3a01b82b6b8eb5c5924024356423ef

    return (
        <div className="container mx-auto my-20">
            <div>
                <div className="bg-slate-50 relative shadow-lg rounded-lg w-5/6 md:w-5/6 lg:w-4/6 xl:w-5/6 mx-auto">
                    <div className="flex justify-center">
                        <img src="/farmer.png" alt="" className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" />
                    </div>
                    <div className="mt-16">
<<<<<<< HEAD
                        <h1 className="font-bold text-center text-3xl text-gray-900">{userName}</h1>
                        <div className="w-full">
                            <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-md font-semibold">
                                <div className="border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
=======
                        <h1 className="font-bold text-center text-3xl text-gray-900">{name}</h1>
                        {/* <p className="text-center text-sm text-gray-400 font-medium">UI Components Factory</p> */}
                        <p>
                            <span>

                            </span>
                        </p>


                        {/* <div className="flex justify-between items-center my-5 px-6">
                        <a href="" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Facebook</a>
                        <a href="" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Twitter</a>
                        <a href="" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Instagram</a>
                        <a href="" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Email</a>
                    </div> */}

                        <div className="w-full">
                            <h3 className="font-medium text-gray-500 text-left px-6">My Details</h3>
                            <div className="mt-3 w-full flex flex-col items-center overflow-hidden text-md font-semibold">
                                <a href="#" className=" border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
>>>>>>> 658bf6120b3a01b82b6b8eb5c5924024356423ef
                                    <img src="email.png" alt="" className="rounded-full h-6 shadow-md inline-block mr-2" />
                                    {email}
                                </div>
                                <div className="border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                    <img src="/location-sign.png" alt="" className="rounded-full h-6 shadow-md inline-block mr-2" />
                                    {userCity}
                                </div>
                            </div>
                            <div className="my-5 px-6 py-5 flex items-center justify-center">
                                <a href="#" className="text-gray-200 rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white">Edit Profile</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}