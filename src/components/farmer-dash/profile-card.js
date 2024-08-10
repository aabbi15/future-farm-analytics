"use client"

import { useState } from "react";



export default function ProfileCard() {

    const [email , Setemail] = useState("example@mail.com");

    const [name , Setname] = useState("Kristin");

    const [phone , Setphone] = useState("+91 8686709797");

    const [location , Setlocation] = useState("Gandhinagar, GJ");

    return(

       

        
// {/* <body class="bg-gray-300 antialiased"> */}

    <div class="container mx-auto my-20">
        <div>

            <div class="bg-slate-50  relative shadow-lg rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-5/6 mx-auto">
                <div class="flex justify-center">
                        <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" class="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"/>
                </div>
                
                <div class="mt-16">
                    <h1 class="font-bold text-center text-3xl text-gray-900">{name}e</h1>
                    {/* <p class="text-center text-sm text-gray-400 font-medium">UI Components Factory</p> */}
                    <p>
                        <span>
                            
                        </span>
                    </p>
                   
                   
                    {/* <div class="flex justify-between items-center my-5 px-6">
                        <a href="" class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Facebook</a>
                        <a href="" class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Twitter</a>
                        <a href="" class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Instagram</a>
                        <a href="" class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Email</a>
                    </div> */}

                    <div class="w-full">
                        <h3 class="font-medium text-gray-900 text-left px-6">Recent activites</h3>
                        <div class="mt-5 w-full flex flex-col items-center overflow-hidden text-md font-semibold">
                            <a href="#" class=" border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                <img src="email.png" alt="" class="rounded-full h-6 shadow-md inline-block mr-2"/>
                                    {email}
                                    {/* <span class="text-gray-500 text-xs">24 min ago</span> */}
                            </a>

                            <a href="#" class=" border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                <img src="/location-sign.png" alt="" class="rounded-full h-6 shadow-md inline-block mr-2"/>
                                    {location}
                                    {/* <span class="text-gray-500 text-xs">42 min ago</span> */}
                            </a>

                            <a href="#" class=" border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                <img src="/phone.png" alt="" class="rounded-full h-6 shadow-md inline-block mr-2"/>
                                <span class="font-bold">{phone}</span>
                                {/* <span class="text-gray-500 text-xs">49 min ago</span> */}
                            </a>

                          
                            
                        </div>

                        <div class="my- px-6 py-5 flex items-center justify-center">
                        <a href="#" class="text-gray-200  rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white">Edit Profile</a>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
// </body>

    )

    }