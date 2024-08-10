import Image from "next/image";
import { useRouter } from "next/navigation";
import { auth } from "@/firebase/firebase";
import { usePathname } from 'next/navigation'


export default function Sidefarm() {
    const router = useRouter(); // Access router object

    const pathname = usePathname(); // Access pathname

    const handleSignOut = async () => {
        try {
            await auth.signOut();
        } catch (error) {
            console.error(error.message);
        }
    };

    // Helper function to determine if the link is active
    const isActive = (path) => {

        console.log(pathname, path);
        return pathname === path;
    };

    return (
        <aside className="fixed inset-y-0 left-0 bg-white shadow-md max-h-screen w-72">
            <div className="flex flex-col justify-between h-full">
                <div className="flex-grow">
                    <div className="px-4 py-6 text-center border-b">
                        <a href="/" className="text-xl font-bold leading-none text-[#124b3d]">Farm Future Analytics</a>
                    </div>
                    <div className="p-4">
                        <ul className="space-y-1">
                            {/* Dynamically set the active class based on current route */}
                            <li>
                                <a href="/farmer-dashboard" className={`flex bg-white rounded-xl font-bold text-sm text-gray-900 py-3 px-4 ${isActive('/farmer-dashboard') ? 'bg-yellow-200' : '  hover:bg-yellow-50 '}`}>
                                    <Image src="/home.png" alt="" width={20} height={20} className="mr-4" />Home
                                </a>
                            </li>
                            <li>
                                <a href="/crop-analysis" className={`flex bg-white    rounded-xl font-bold text-sm text-gray-900 py-3 px-4 ${isActive('/crop-analysis') ? 'bg-yellow-200' : 'hover:bg-yellow-50'}`}>
                                    <Image src="/magnify.png" alt="" width={20} height={20} className="mr-4" />My Price Analysis
                                </a>
                            </li>

                            <li>
                                <a href="/soil-analysis" className={`flex items-center bg-white rounded-xl font-bold text-sm text-gray-900 py-3 px-4 ${isActive('/soil-analysis') ? 'bg-yellow-200' : 'hover:bg-yellow-50'}`}>
                                    <Image src="/npk.png" alt="" width={20} height={20} className="mr-4" />N-P-K Soil Analysis
                                </a>
                            </li>

                            <li>
                                <a href="/alerts" className={`flex bg-white    rounded-xl font-bold text-sm text-gray-900 py-3 px-4 ${isActive('/alerts') ? 'bg-yellow-200' : 'hover:bg-yellow-50'}`}>
                                    <Image src="/notify.png" alt="" width={20} height={20} className="mr-4" />All Alerts
                                </a>
                            </li>
                            <li>
                                <a href="/farmer-news" className={`flex bg-white    rounded-xl font-bold text-sm text-gray-900 py-3 px-4 ${isActive('/farmer-news') ? 'bg-yellow-200' : 'hover:bg-yellow-50'}`}>
                                    <Image src="/news.png" alt="" width={20} height={20} className="mr-4" />Farm Future News
                                </a>
                            </li>
                            <li>
                                <a href="/farmer-profile" className={`flex items-center bg-white rounded-xl font-bold text-sm text-gray-900 py-3 px-4 ${isActive('/farmer-profile') ? 'bg-yellow-200' : 'hover:bg-yellow-50'}`}>
                                    <Image src="/farmer.png" alt="" width={20} height={20} className="mr-4" />My Profile
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="p-4">
                    <button onClick={handleSignOut} type="button" className="flex gap-2 rounded-md bg-[#124b3d] px-4 py-2 text-sm font-semibold text-white shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-sm" viewBox="0 0 16 16">
                            <path d="M12 1a1 1 0 0 1 1 1v13h1.5a .5 .5 0 0 1 0 1h-13a .5 .5 0 0 1 0-1H3V2a1 1 0 0 1 1-1h8zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        </svg>Logout
                    </button>
                </div>
            </div>
        </aside>
    );
}
