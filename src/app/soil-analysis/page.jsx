"use client";

import { useState } from "react";
import axios from "axios";
import Sidefarm from "@/components/(farmer-dash)/sidebar";

function Page() {
    const [nitrogen, setNitrogen] = useState('');
    const [phosphorous, setPhosphorous] = useState('');
    const [potassium, setPotassium] = useState('');
    const [ph, setPh] = useState('');
    const [temperature, setTemperature] = useState('')
    const [humidity, setHumidity] = useState('')
    const [rainfall, setRainfall] = useState('')
    const [suggestedCrop, setSuggestedCrop] = useState(null);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://127.0.0.1:5000/crop-predict", { nitrogen, phosphorous, potassium, temperature, humidity, ph, rainfall });
            setSuggestedCrop(response.data.crop);
        } catch (error) {
            console.error("Error fetching crop prediction:", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'nitrogen':
                setNitrogen(value);
                break;
            case 'phosphorous':
                setPhosphorous(value);
                break;
            case 'potassium':
                setPotassium(value);
                break;
            case 'ph':
                setPh(value);
                break;
            case 'temperature':
                setTemperature(value)
                break;
            case 'humidity':
                setHumidity(value)
                break;
            case 'rainfall':
                setRainfall(value)
                break;
            default:
                break;
        }
    };

    return (
        <div className="relative bg-[#f0f4d4] overflow-hidden max-h-screen">
            <Sidefarm />
            <div className="ml-60 pt-10 max-h-screen overflow-auto">
                <div className="px-6 py-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-3xl p-8 mb-5">
                            <h1 className="text-3xl font-bold mb-10">Personalized Soil Analysis Model</h1>
                            <hr className="my-10" />
                            <div className="grid grid-cols-6 gap-4">
                                <div className="col-span-2 p-4 rounded-lg border bg-slate-100 border-gray-800">
                                    <h1 className="text-2xl font-bold">Enter Soil Data</h1>
                                    <form onSubmit={handleFormSubmit} className="grid gap-4 mt-2">
                                        {["Nitrogen", "Phosphorous", "Potassium", "Temperature", "Humidity", "pH", "Rainfall"].map((label) => (
                                            <div key={label} className="flex flex-col gap-2">
                                                <label className="text-sm font-semibold">{label} (%)</label>
                                                <input type="number" name={label.toLowerCase()} value={label === "Nitrogen" ? nitrogen : label === "Phosphorous" ? phosphorous : label === "Potassium" ? potassium : label === "pH" ? ph : label === "Temperature" ? temperature : label === "Humidity" ? humidity : rainfall} onChange={handleChange} className="p-2 border rounded" min="0" />
                                            </div>
                                        ))}
                                        <button type="submit" className="cursor-pointer text-xs transition-all bg-blue-500 text-white px-4 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]" >Predict Crop</button>
                                    </form>
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
                                                <div className="font-bold text-4xl text-[#124b3d]">{suggestedCrop}</div>
                                            </div>
                                            <div className="flex justify-center mt-10 -mb-10">
                                                <button className="cursor-pointer text-xs transition-all bg-green-500 text-black px-4 py-2 rounded-lg border-green-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                                                    Learn how to grow {suggestedCrop}
                                                </button>
                                            </div>
                                        </div>
                                    )}
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