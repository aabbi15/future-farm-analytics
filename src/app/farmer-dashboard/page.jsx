"use client"

import Farmerhead from "@/components/farmer-dash/header";
import Sidefarm from "@/components/farmer-dash/sidebar";
import { useState } from "react";

import Image from 'next/image';
import DateDisplay from "@/components/farmer-dash/currdate";


function Dash(){

    const [welcome , Setwelcome] = useState("Good day, Kristin");

    const [name , Setname] = useState("Kristin");

    const [location , Setlocation] = useState("Gandhinagar, GJ");

    return(

        <body class="relative bg-[#f0f4d4] overflow-hidden max-h-screen">

            {/* <Farmerhead section = "Home"/>S */}

            <Sidefarm/>

  <main class="ml-60 pt-10 max-h-screen overflow-auto">
    <div class="px-6 py-8">
      <div class="max-w-4xl mx-auto">
        <div class="bg-white rounded-3xl p-8 mb-5">
          <h1 class="text-3xl font-bold mb-10">{welcome}</h1>
          <div class="flex items-center justify-between">
            

                <div className="">

                <div class="flex items-stretch pt-4">
              <div class="text-gray-400 text-xs">
                <Image src="/location-sign.png" alt="avatar" width="21" height="21" />
                </div>
             
              <div className="pl-2"> {location} </div>

              <div class="h-[20px] border-l mx-4"></div>
                <div className="-mt-2 -ml-1">

                <DateDisplay/>
                </div>

                </div>
             
              
            </div>
            <div class="flex items-center gap-x-2">
              
              <button type="button" class="inline-flex items-center justify-center h-9 px-5 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition">
                Go to Profile
              </button>
            </div>
          </div>

          <hr class="my-10"/>

          <div class="grid grid-cols-2 gap-x-20">
            <div>
              <h2 class="text-2xl font-bold mb-4">Stats</h2>

              <div class="grid grid-cols-2 gap-4">
                <div class="col-span-2">
                  <div class="p-4 bg-green-100 rounded-xl">
                    <div class="font-bold text-xl text-gray-800 leading-none">See the latest news from <br/> <div className="pt-1.5"> Future Farm! </div></div>
                    <div class="mt-5">
                      <button type="button" class="inline-flex items-center justify-center py-2 px-3 rounded-xl bg-white text-gray-800 hover:text-green-500 text-sm font-semibold transition">
                        Read more
                      </button>
                    </div>
                  </div>
                </div>
                <div class="p-4 bg-yellow-100 rounded-xl text-gray-800">
                  <div class="font-bold text-2xl leading-none">20</div>
                  <div class="mt-2">Tasks finished</div>
                </div>
                <div class="p-4 bg-yellow-100 rounded-xl text-gray-800">
                  <div class="font-bold text-2xl leading-none">5,5</div>
                  <div class="mt-2">Tracked hours</div>
                </div>
                <div class="col-span-2">
                  <div class="p-4 bg-purple-100 rounded-xl text-gray-800">
                    <div class="font-bold text-xl leading-none">Your daily plan</div>
                    <div class="mt-2">5 of 8 completed</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 class="text-2xl font-bold mb-4">Latest Notifications for you</h2>

              <div class="space-y-4">
                <div class="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                  <div class="flex justify-between">
                    <div class="text-gray-400 text-xs">Number 10</div>
                    <div class="text-gray-400 text-xs">4h</div>
                  </div>
                  <a href="javascript:void(0)" class="font-bold hover:text-yellow-800 hover:underline">Blog and social posts</a>
                  <div class="text-sm text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="text-gray-800 inline align-middle mr-1" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                    </svg>Deadline is today
                  </div>
                </div>
                <div class="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                  <div class="flex justify-between">
                    <div class="text-gray-400 text-xs">Grace Aroma</div>
                    <div class="text-gray-400 text-xs">7d</div>
                  </div>
                  <a href="javascript:void(0)" class="font-bold hover:text-yellow-800 hover:underline">New campaign review</a>
                  <div class="text-sm text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="text-gray-800 inline align-middle mr-1" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                    </svg>New feedback
                  </div>
                </div>
                <div class="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                  <div class="flex justify-between">
                    <div class="text-gray-400 text-xs">Petz App</div>
                    <div class="text-gray-400 text-xs">2h</div>
                  </div>
                  <a href="javascript:void(0)" class="font-bold hover:text-yellow-800 hover:underline">Cross-platform and browser QA</a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</body>
    )
}

export default Dash;