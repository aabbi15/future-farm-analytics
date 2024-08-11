export default function Feauture(){

    
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
                            <div className="bg-[#b1d4c7] rounded-xl pt-4 pb-4 pl-4 flex flex-col gap-1 h-full">
                                <h3 className="text-xl font-bold text-[black] mx-auto mb-4">Predictive Analytics</h3>
                                <p className="text-black flex-grow">Our advanced algorithms analyze market trends and environmental data to predict future prices and yields.</p>
                            </div>
                            <div className="bg-[#b1d4c7] rounded-xl pt-4 pb-4 pl-4 flex flex-col gap-1 h-full">
                                <h3 className="text-xl font-bold text-[black] mx-auto mb-4">Real-time Insights</h3>
                                <p className="text-black flex-grow">Get instant access to up-to-date information on commodity prices, weather patterns, and market conditions.</p>
                            </div>
                            <div className="bg-[#b1d4c7] rounded-xl pt-4 pb-4 pl-4 flex flex-col gap-1 h-full">
                                <h3 className="text-xl font-bold text-[black] mx-auto mb-4">Customizable Alerts</h3>
                                <p className="text-black flex-grow text">Set custom alerts to stay informed about changes in market and optimize your planting and harvesting schedules.</p>
                            </div>
                        </div>
                    </div>
                </section>
    )
}