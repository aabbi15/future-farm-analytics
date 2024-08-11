"use client";

import { useState } from "react";
import axios from "axios";
import Sidefarm from "@/components/(farmer-dash)/sidebar";

const optimaldata = {
  "rice": {
    "N": 80,
    "P": 40,
    "K": 40
  },
  "maize": {
    "N": 80,
    "P": 40,
    "K": 20
  },
  "chickpea": {
    "N": 40,
    "P": 60,
    "K": 80
  },
  "kidneybeans": {
    "N": 20,
    "P": 60,
    "K": 20
  },
  "pigeonpeas": {
    "N": 20,
    "P": 60,
    "K": 20
  },
  "mothbeans": {
    "N": 20,
    "P": 40,
    "K": 20
  },
  "mungbean": {
    "N": 20,
    "P": 40,
    "K": 20
  },
  "blackgram": {
    "N": 40,
    "P": 60,
    "K": 20
  },
  "lentil": {
    "N": 20,
    "P": 60,
    "K": 20
  },
  "pomegranate": {
    "N": 20,
    "P": 10,
    "K": 40
  },
  "banana": {
    "N": 100,
    "P": 75,
    "K": 50
  },
  "mango": {
    "N": 20,
    "P": 20,
    "K": 30
  },
  "grapes": {
    "N": 20,
    "P": 125,
    "K": 200
  },
  "watermelon": {
    "N": 100,
    "P": 10,
    "K": 50
  },
  "muskmelon": {
    "N": 100,
    "P": 10,
    "K": 50
  },
  "apple": {
    "N": 20,
    "P": 125,
    "K": 200
  },
  "orange": {
    "N": 20,
    "P": 10,
    "K": 10
  },
  "papaya": {
    "N": 50,
    "P": 50,
    "K": 50
  },
  "coconut": {
    "N": 20,
    "P": 10,
    "K": 30
  },
  "cotton": {
    "N": 120,
    "P": 40,
    "K": 20
  },
  "jute": {
    "N": 80,
    "P": 40,
    "K": 40
  },
  "coffee": {
    "N": 100,
    "P": 20,
    "K": 30
  }
}


function Page() {
  const [nitrogen, setNitrogen] = useState('');
  const [phosphorous, setPhosphorous] = useState('');
  const [potassium, setPotassium] = useState('');
  const [ph, setPh] = useState('');
  const [temperature, setTemperature] = useState('')
  const [humidity, setHumidity] = useState('')
  const [rainfall, setRainfall] = useState('')
  const [suggestedCrop, setSuggestedCrop] = useState(null);

  const [latitude, setLatitude] = useState(null); // New state for latitude
  const [longitude, setLongitude] = useState(null); // New state for longitude
  const [locationFetched, setLocationFetched] = useState(false); // New state for location button

  const [data, setWeatherData] = useState({});



  const [onitrogen, osetNitrogen] = useState('');
  const [ophosphorous, osetPhosphorous] = useState('');
  const [opotassium, osetPotassium] = useState('');
  const [oph, osetPh] = useState('');

  const [currcrop, setCurrCrop] = useState('');

  const [text, setText] = useState('');

  const [showAdvice, setShowAdvice] = useState(false);



  const AdviceButtonSubmit = (e) => {
    e.preventDefault();
    const gettext = async () => {
      // e.preventDefault();
      try {
        const response = await axios.post("http://127.0.0.1:5000/fertilizer-predict", { cropname: suggestedCrop, nitrogen, phosphorous, potassium });
        setText(response.data.recommendation);

        console.log(response.data);
      } catch (error) {
        console.error("Error fetching crop prediction:", error);
      }
    };

    gettext();
    setShowAdvice(true);
  }
  const handleFormSubmit2 = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
    


    // console.log("Form submitted with data: ", { nitrogen, phosphorous, potassium, ph,temperature , humidity , rainfall });

    const handleFormSubmit = async () => {
      // e.preventDefault();
      try {
        const response = await axios.post("http://127.0.0.1:5000/crop-predict", { nitrogen, phosphorous, potassium, temperature, humidity, ph, rainfall });
        setSuggestedCrop(response.data.crop);
        setCurrCrop(optimaldata[response.data.crop]);

        osetNitrogen(optimaldata[response.data.crop].N);
        osetPhosphorous(optimaldata[response.data.crop].P);
        osetPotassium(optimaldata[response.data.crop].K);
        console.log(currcrop);
      } catch (error) {
        console.error("Error fetching crop prediction:", error);
      }
    };

    handleFormSubmit();



    setEditMode(false); // Close form after submission
  };

  const fetchData = async () => {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=538023bd3c43455084733202231905&q=${latitude},${longitude}&days=1&aqi=yes&alerts=yes`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      // setWeatherData(data.current);
      // console.log(data.current);
      setTemperature(data.current.temp_c);
      setRainfall(data.current.cloud + 100);
      setHumidity(data.current.humidity);
    } catch (error) {
      console.error("There was a problem fetching weather data:", error);
    }
  };
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          setLocationFetched(true);

          fetchData();

        },
        (error) => {
          console.error("Error fetching location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false); // State to toggle edit mode

  return (
    <div className="relative bg-[#f0f4d4] overflow-hidden max-h-screen">
      <Sidefarm />
      <div className="ml-60 pt-10 max-h-screen overflow-auto">
        <div className="px-6 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 mb-5">
              <h1 className="text-3xl font-bold mb-10">Personalized Soil Analysis Model</h1>
              <hr className="my-10" />
              <div className="flex flex-col gap-4">

                <div className="grid grid-cols-6 gap-4">

                  <div className="col-span-2 p-4 rounded-lg border bg-slate-100 border-gray-800">
                    <h1 className="text-2xl font-bold">{editMode ? "Edit Soil Data" : "My Soil Data"}</h1>
                    <div className="grid gap-4 mt-2">
                      {editMode ? (
                        <form onSubmit={handleFormSubmit2} className="grid gap-4">
                          {/* Form Inputs */}
                          <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold">Nitrogen Content</label>
                            <input
                              type="number"
                              value={nitrogen}
                              onChange={(e) => setNitrogen(e.target.value)}
                              className="p-2 border rounded"
                            />
                          </div>
                          <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold">Phosphorous Content</label>
                            <input
                              type="number"
                              value={phosphorous}
                              onChange={(e) => setPhosphorous(e.target.value)}
                              className="p-2 border rounded"
                            />
                          </div>
                          <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold">Potassium Content</label>
                            <input
                              type="number"
                              value={potassium}
                              onChange={(e) => setPotassium(e.target.value)}
                              className="p-2 border rounded"
                            />
                          </div>
                          <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold">pH</label>
                            <input
                              type="number"
                              step="0.1"
                              value={ph}
                              onChange={(e) => setPh(e.target.value)}
                              className="p-2 border rounded"
                            />
                          </div>

                          {/* Get Location Button */}
                          <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold">
                              Location
                            </label>
                            <button
                              type="button"
                              onClick={getLocation}
                              className={`p-2 border rounded ${locationFetched
                                  ? "bg-green-500 text-white cursor-not-allowed"
                                  : "bg-blue-500 text-white"
                                }`}
                              disabled={locationFetched}
                            >
                              {locationFetched ? "Location Fetched" : "Get Location"}
                            </button>
                            {latitude && longitude && (
                              <div className="text-xs text-gray-500 mt-1">
                                Latitude: {latitude.toFixed(2)}, Longitude:{" "}
                                {longitude.toFixed(2)}
                              </div>
                            )}
                          </div>
                          <button
                            type="submit"
                            className="cursor-pointer text-xs transition-all bg-blue-500 text-white px-4 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
                          >
                            Save Data
                          </button>
                        </form>
                      ) : (
                        // Soil Data Display
                        <>
                          {/* Nitrogen Level */}
                          <div className="flex gap-2 items-center">
                            <div className="bg-red-500 w-9 h-9 ring-2 ring-red-200 text-lg rounded-full text-center flex justify-center items-center font-extrabold">
                              N
                            </div>
                            <div className="grid gap-1 text-sm flex-1">
                              <h2 className="font-semibold leading-none line-clamp-2">{nitrogen} </h2>
                              <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">
                                Nitrogen Level
                              </div>
                            </div>
                          </div>

                          {/* phosphorous Level */}
                          <div className="flex gap-2 items-center">
                            <div className="bg-blue-500 w-9 h-9 ring-2 ring-blue-200 text-lg rounded-full text-center flex justify-center items-center font-extrabold">
                              P
                            </div>
                            <div className="grid gap-1 text-sm flex-1">
                              <h2 className="font-semibold leading-none line-clamp-2">{phosphorous} </h2>
                              <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">
                                Phosphorous Level
                              </div>
                            </div>
                          </div>

                          {/* Potassium Level */}
                          <div className="flex gap-2 items-center">
                            <div className="bg-yellow-500 w-9 h-9 ring-2 ring-yellow-200 text-lg rounded-full text-center flex justify-center items-center font-extrabold">
                              K
                            </div>
                            <div className="grid gap-1 text-sm flex-1">
                              <h2 className="font-semibold leading-none line-clamp-2">{potassium} </h2>
                              <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">
                                Potassium Level
                              </div>
                            </div>
                          </div>

                          {/* pH Level */}
                          <div className="flex gap-2 items-center">
                            <div className="bg-green-500 w-9 h-9 ring-2 ring-green-200 text-lg rounded-full text-center flex justify-center items-center font-extrabold">
                              pH
                            </div>
                            <div className="grid gap-1 text-sm flex-1">
                              <h2 className="font-semibold leading-none line-clamp-2">{ph}</h2>
                              <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">
                                Soil pH Level
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="flex justify-end mt-5">
                      <button
                        onClick={() => setEditMode(!editMode)}
                        className="cursor-pointer text-xs transition-all bg-blue-500 text-white px-4 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
                      >
                        {editMode ? "Cancel" : "Edit Data"}
                      </button>
                    </div>
                  </div>




                  <div className="col-span-4 p-4 rounded-lg border bg-slate-100 border-gray-800">
                    <h1 className="text-2xl font-bold">
                      {suggestedCrop ? `According to our Model, the most suitable crop for your soil and weather is:` : `Please enter the soil data to get a crop recommendation`}
                    </h1>
                    {suggestedCrop && (
                      <div className="grid gap-4 mt-2">
                        <div className="flex gap-5 justify-center pt-5 items-center">
                          <div className="w-24 h-24 rounded-full border-4 border-gray-700 overflow-hidden">
                            <img src="farmland.png" alt="crop" className="object-cover w-full h-full" />
                          </div>
                          <div className="font-bold text-3xl text-[#124b3d]">{suggestedCrop.toUpperCase()}</div>
                        </div>
                        <div className="flex justify-center mt-10 -mb-10">
                          <button onClick={(e) => AdviceButtonSubmit(e)} className="cursor-pointer text-xs transition-all bg-green-500 text-black px-4 py-2 rounded-lg border-green-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                            Learn the best way to grow {suggestedCrop.toUpperCase()}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>


                </div>
                  
                <div className="grid grid-cols-6 gap-4">
               
                  <>
                    <div className="col-span-4 p-4 rounded-lg border bg-slate-100 border-gray-800">
                      <h1 className="text-2xl font-bold">
                      {!showAdvice ? "Enter N-P-K data to see how to achieve the Optimal Soil" : "How to Achieve the Optimal Soil?"}</h1>
                      
                      {showAdvice ? (
                        <div
                        className="mt-2 p-2 bg-white rounded-lg shadow-md"
                        dangerouslySetInnerHTML={{ __html: text }}
                      />
                      ) : (

<div>
Step 1: Fill up your soil data.<br />
Step 2: Learn the best way to grow your crop.<br />
</div>
                      
                      )}
                    </div>
                      
                  </>
                


              
                <div className="justify-center col-span-2 max-h-72 p-4 rounded-lg border bg-green-100 border-gray-800">
                  <h1 className="text-2xl font-bold">{!showAdvice ? "Optimal Soil Data " : "Optimal Soil Nutrients"}</h1>



                  <div className="grid gap-4 mt-2">
                    {!showAdvice ? (<div>???</div>) : (
                      // Soil Data Display
                      <>
                        {/* Nitrogen Level */}
                        <div className="flex gap-2 items-center">
                          <div className="bg-red-500 w-9 h-9 ring-2 ring-red-200 text-lg rounded-full text-center flex justify-center items-center font-extrabold">
                            N
                          </div>
                          <div className="grid gap-1 text-sm flex-1">
                            <h2 className="font-semibold leading-none line-clamp-2">{onitrogen} </h2>
                            <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">
                              Nitrogen Level
                            </div>
                          </div>
                        </div>

                        {/* phosphorous Level */}
                        <div className="flex gap-2 items-center">
                          <div className="bg-blue-500 w-9 h-9 ring-2 ring-blue-200 text-lg rounded-full text-center flex justify-center items-center font-extrabold">
                            P
                          </div>
                          <div className="grid gap-1 text-sm flex-1">
                            <h2 className="font-semibold leading-none line-clamp-2">{ophosphorous} </h2>
                            <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">
                              Phosphorous Level
                            </div>
                          </div>
                        </div>

                        {/* Potassium Level */}
                        <div className="flex gap-2 items-center">
                          <div className="bg-yellow-500 w-9 h-9 ring-2 ring-yellow-200 text-lg rounded-full text-center flex justify-center items-center font-extrabold">
                            K
                          </div>
                          <div className="grid gap-1 text-sm flex-1">
                            <h2 className="font-semibold leading-none line-clamp-2">{opotassium} </h2>
                            <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">
                              Potassium Level
                            </div>
                          </div>
                        </div>

                        {/* pH Level */}

                      </>
                    )}
                  </div>


                </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;