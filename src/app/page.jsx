import { Rammetto_One } from "next/font/google";

const font = Rammetto_One({
  weight: '400',
  subsets: ['latin'],
})

function LeafIcon(props) {

 

  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}

export default function Home() {
  return (
    <div className="w-full mx-auto">
      <div className="bg-[#f0f4d4]">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Farm Future Analytics</span>
                <LeafIcon className="h-8 w-auto text-[#124b3d]" />
              </a>
            </div>

            {/* <div className="flex lg:hidden">
              <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>  */}
<<<<<<< HEAD
            <div className="lg:flex lg:gap-x-12">
              <a href="#keyfeatures" className="text-sm hover:underline underline-offset-4 font-semibold leading-6 text-gray-900">Features</a>
              <a href="#" className="text-sm hover:underline underline-offset-4 font-semibold leading-6 text-gray-900">Analysis</a>
              <a href="#joinus" className="text-sm hover:underline underline-offset-4 font-semibold leading-6 text-gray-900">Join</a>
              <a href="#contactus" className="text-sm hover:underline underline-offset-4 font-semibold leading-6 text-gray-900">Contact</a>
=======
            <div class="lg:flex lg:gap-x-12">
              <a href="#keyfeatures" class="text-sm hover:underline underline-offset-4 font-semibold leading-6 text-gray-900">Features</a>
              <a href="/analysis" class="text-sm hover:underline underline-offset-4 font-semibold leading-6 text-gray-900">Analysis</a>
              <a href="#joinus" class="text-sm hover:underline underline-offset-4 font-semibold leading-6 text-gray-900">Join</a>
              <a href="#contactus" class="text-sm hover:underline underline-offset-4 font-semibold leading-6 text-gray-900">Contact</a>
>>>>>>> 99e5e769881324da5ee53a9cf9f0f7d8c47d3336
            </div>
            <div className="lg:flex lg:flex-1 lg:justify-end">
              <a href="/farmer-profile" className="text-sm hover:underline underline-offset-4 font-semibold leading-6 text-gray-900">Already have an account ?</a>
            </div>
          </nav>
          {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
          {/* <div className="lg:hidden" role="dialog" aria-modal="true">
            <!-- Background backdrop, show/hide based on slide-over state. -->
            <div className="fixed inset-0 z-50"></div>
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""></img>
                </a>
                <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
                  <span className="sr-only">Close menu</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Product</a>
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Features</a>
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Marketplace</a>
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Company</a>
                  </div>
                  <div className="py-6">
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </header>

        <section className="relative isolate px-6 lg:px-8">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
          </div>
          <div className="mx-auto max-w-5xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <div className="font-semibold">
                  <div className="flex grid-cols-3">
<<<<<<< HEAD
                    Checkout our GitHub Repo. <span className="pl-2 pr-2 flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></g></svg></span> <span className="text-[#124b3d]" aria-hidden="true">&rarr;</span>
=======
                    Growing Tomorrow&apos;s Harvest Today !
>>>>>>> 99e5e769881324da5ee53a9cf9f0f7d8c47d3336
                  </div>
                </div>
              </div>
            </div>
<<<<<<< HEAD
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-[#124b3d] sm:text-6xl">Unlock the Future of Farming with Farm Future Analytics</h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">Our cutting-edge analytics platform helps farmers and agribusinesses make informed decisions and maximize their yields.</p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a href="#joinus" className="rounded-md bg-[#124b3d] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#12493ccd] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
                <a href="#keyfeatures" className="text-sm font-semibold leading-6 text-[#124b3d]">Learn more <span aria-hidden="true">→</span></a>
=======
            <div class="text-center">
              <h1 class="text-4xl font-bold tracking-tight text-[#124b3d] sm:text-7xl">Unlock the Future of Farming with Farm Future Analytics</h1>
              <p class="mt-6 text-lg leading-8 text-gray-600">Our cutting-edge analytics platform helps farmers and agribusinesses make informed decisions and maximize their yields.</p>
              <div class="mt-8 flex items-center justify-center gap-x-6">
                <a href="#joinus" class="rounded-md bg-[#124b3d] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#12493ccd] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
                <a href="#keyfeatures" class="text-sm font-semibold leading-6 text-[#124b3d]">Learn more <span aria-hidden="true">→</span></a>
>>>>>>> 99e5e769881324da5ee53a9cf9f0f7d8c47d3336
              </div>
              <div className="hidden sm:mt-4 sm:flex sm:justify-center">
                  <a href="https://github.com/pranshu05/hackout" className="text-sm hover:underline underline-offset-4 font-semibold leading-6 text-gray-900">
                    <div className="flex grid-cols-3">
                      Checkout our GitHub Repo ! <span className="pl-2 pr-2 flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="#888888" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></g></svg></span> <span className="text-[#124b3d]" aria-hidden="true">&rarr;</span>
                    </div>
                  </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
            <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
          </div>
        </section>

        <section id="keyfeatures" className="w-full flex justify-center items-center py-12 md:py-24 lg:py-32 bg-[#f0f4d4]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#124b3d] px-3 py-1 text-sm text-white">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#124b3d]">
                  Unlock the Power of Data-Driven Farming
                </h2>
                <p className="max-w-[900px] text-[#124b3d] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform provides real-time insights and predictive analytics to help you make informed decisions
                  and maximize your yields.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="https://wallpapers.com/images/hd/agriculture-farming-field-djd3ffforta0zitn.jpg"
                width="550"
                height="310"
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="bg-[#b1d4c7] rounded-xl pt-4 pb-4 pl-4 grid gap-1">
                      <h3 className="text-xl font-bold text-[#124b3d]">Predictive Analytics</h3>
                      <p className="text-black">
                        Our advanced algorithms analyze market trends and environmental data to predict future prices
                        and yields.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="bg-[#b1d4c7] rounded-xl pt-4 pb-4 pl-4 grid gap-1">
                      <h3 className="text-xl font-bold text-[#124b3d]">Real-time Insights</h3>
                      <p className="text-black">
                        Get instant access to up-to-date information on commodity prices, weather patterns, and market
                        conditions.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="bg-[#b1d4c7] rounded-xl pt-4 pb-4 pl-4 grid gap-1">
                      <h3 className="text-xl font-bold text-[#124b3d]">Customizable Alerts</h3>
                      <p className="text-black">
                        Set custom alerts to stay informed about changes in market and optimize your
                        planting and harvesting schedules.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="joinus" className="w-full pb-24 pt-24 bg-[#f0f4d4] border-t">
          <div className="flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#124b3d]">
                Join the Future of Farming
              </h2>
              <p className="mx-auto max-w-[600px] text-[#124b3d] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Sign up for our platform and start making data-driven decisions to improve your yields and
                profitability.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
<<<<<<< HEAD
              <a href="#" className="rounded-md bg-[#124b3d] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#12493ccd] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
=======
              <a href="/signup" class="rounded-md bg-[#124b3d] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#12493ccd] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
>>>>>>> 99e5e769881324da5ee53a9cf9f0f7d8c47d3336
                Join Us
              </a>
              <p className="pt-2">
                <a href="/farmer-profile" className="text-sm hover:underline underline-offset-4 font-semibold leading-6 text-gray-900">
                  Already have an account ?
                </a>
              </p>
              <p className="text-xs pt-2 text-[#124b3d]">
                Sign up to get started with Farm Future Analytics.{" "}
                <a href="#" className="underline underline-offset-2">
                  Terms &amp; Conditions
                </a>
              </p>
            </div>
          </div>
        </section>

        <section id="contactus" className="w-full pt-[120px] pb-24 bg-[#f0f4d4] border-t">
          <div className="flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#124b3d]">
                Contact Us
              </h2>
              <p className="mx-auto max-w-[600px] text-[#124b3d] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
              </p>
            </div>
            <div className="mx-auto w-fit max-w-sm space-y-2">
              <div className="pt-2 text-left text-[#124b3d]">
                <p>Address       : F114, HoR MEN, DA-IICT</p>
                <p>Phone Number  : +91 6354152418</p>
                <p>Email Address : 202301143@daiict.ac.in</p>
                <p>Website       : localhost:3000</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-[#f0f4d4]">
          <p className="text-xs text-[#124b3d]">&copy; 2024 Farm Future Analytics. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <a href="#" className="text-xs hover:underline underline-offset-4 text-[#124b3d]">
              Terms of Service
            </a>
            <a href="#" className="text-xs hover:underline underline-offset-4 text-[#124b3d]">
              Privacy
            </a>
            <a href="#contactus" className="text-xs hover:underline underline-offset-4 text-[#124b3d]">
              Contact
            </a>
          </nav>
        </footer>
      </div>
    </div>
  );
}
