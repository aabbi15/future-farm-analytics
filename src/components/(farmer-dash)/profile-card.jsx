"use client"

import { useState } from "react";

export default function ProfileCard() {
    const [email, Setemail] = useState("abhinav123@gmail.com");
    const [name, Setname] = useState("Abhinav Singh");
    const [phone, Setphone] = useState("+91 8686709797");
    const [location, Setlocation] = useState("Gandhinagar, GJ");

    return (
        // {/* <body className="bg-gray-300 antialiased"> */}

        <div className="container mx-auto my-20">
            <div>
                <div className="bg-slate-50  relative shadow-lg rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-5/6 mx-auto">
                    <div className="flex justify-center">
                        <img src="/farmer.png" alt="" className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" />
                    </div>

                    <div className="mt-16">
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
                                    <img src="email.png" alt="" className="rounded-full h-6 shadow-md inline-block mr-2" />
                                    {email}
                                    {/* <span className="text-gray-500 text-xs">24 min ago</span> */}
                                </a>

                                <a href="#" className=" border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                    <img src="/location-sign.png" alt="" className="rounded-full h-6 shadow-md inline-block mr-2" />
                                    {location}
                                    {/* <span className="text-gray-500 text-xs">42 min ago</span> */}
                                </a>

                                <a href="#" className=" border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                    <img src="/phone.png" alt="" className="rounded-full h-6 shadow-md inline-block mr-2" />
                                    <span className="font-bold">{phone}</span>
                                    {/* <span className="text-gray-500 text-xs">49 min ago</span> */}
                                </a>
                            </div>

                            <div className="my- px-6 py-5 flex items-center justify-center">
                                <a href="#" className="text-gray-200  rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white">Edit Profile</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // </body>
    )

}