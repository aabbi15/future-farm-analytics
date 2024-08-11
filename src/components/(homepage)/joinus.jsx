export default function Joinus(){
    return(
        <section id="joinus" className="w-full pb-24 pt-24 bg-[#124b3d] text-[#f0f4d4] border-t">
                        <div className="flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6">
                            <div className="space-y-3">
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                                    Join the Future of Farming
                                </h2>
                                <p className="mx-auto max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Sign up for our platform and start making data-driven decisions to improve your yields and profitability.
                                </p>
                            </div>
                            <div className="mx-auto w-full max-w-sm space-y-2">
                                <a href="/signup" className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-[#124b3d] shadow-sm bg-[#f0f4d4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Join Us
                                </a>
                                <p className="text-xs pt-2">
                                    Sign up to get started with Farm Future Analytics.{" "}
                                    <a href="#" className="underline underline-offset-2">
                                        Terms &amp; Conditions
                                    </a>
                                </p>
                            </div>
                        </div>
                    </section>
    )

}