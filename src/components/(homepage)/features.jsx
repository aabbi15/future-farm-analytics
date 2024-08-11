export default function Feauture() {
    return (
        <section id="keyfeatures" className="w-full flex justify-center items-center py-12 md:py-24 lg:py-28 bg-[#f0f4d4]">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center text-black">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-[#124b3d] px-3 py-1 text-sm text-white">Key Features</div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#124b3d]">
                            Unlock the Power of Data-Driven Farming
                        </h2>
                        <p className="max-w-[900px] text-[black] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Our platform provides real-time insights and predictive analytics to help you make informed decisions
                            and maximize your yields.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-stretch gap-6 py-12 lg:gap-12 lg:grid-cols-3">
                    <div className="bg-[#b1d4c7] rounded-xl p-4 flex flex-col gap-1 h-full">
                        <h3 className="text-xl font-bold text-[black] mx-auto mb-4">Crop Selection Advice</h3>
                        <p className="text-black flex-grow">Using a Random Forest Classifier we predicted which crop the farmer should grow based on various parameters like N, K & P content, pH, humidity, and rainfall.</p>
                    </div>
                    <div className="bg-[#b1d4c7] rounded-xl p-4 flex flex-col gap-1 h-full">
                        <h3 className="text-xl font-bold text-[black] mx-auto mb-4">Agricultural Price Prediction</h3>
                        <p className="text-black flex-grow">Using SARIMA - Seasonal Autoregressive Integrated Moving Average we predicted future prices which will help farmers make informed decisions about their finances.</p>
                    </div>
                    <div className="bg-[#b1d4c7] rounded-xl p-4 flex flex-col gap-1 h-full">
                        <h3 className="text-xl font-bold text-[black] mx-auto mb-4">Fertilizer Recommendations</h3>
                        <p className="text-black flex-grow text">The system monitors nutrient levels and alerts the farmer if any nutrients are deficient or excessive and then suggests best practices & fertilizers to grow the crop.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}