import Image from "next/image"
import { auth } from "@/firebase/firebase";

export default function Sidefarm() {
    const handleSignOut = async () => {
        try {
            await auth.signOut();
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <aside className="fixed inset-y-0 left-0 bg-white shadow-md max-h-screen w-72">
            <div className="flex flex-col justify-between h-full">
                <div className="flex-grow">
                    <div className="px-4 py-6 text-center border-b">
                        <h1 className="text-xl font-bold leading-none"><span className="text-yellow-700">Farm Future</span> Analytics</h1>
                    </div>
                    <div className="p-4">
                        <ul className="space-y-1">
                            <li>
                                <a href="javascript:void(0)" className="flex items-center bg-yellow-200 rounded-xl font-bold text-sm text-yellow-900 py-3 px-4">
                                    <Image src="/home.png" alt="" width={20} height={20} className="mr-4" />Home
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" className="flex bg-white hover:bg-yellow-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4">
                                    <Image src="/magnify.png" alt="" width={20} height={20} className="mr-4" />Detailed Analysis
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" className="flex bg-white hover:bg-yellow-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4">
                                    <Image src="/notify.png" alt="" width={20} height={20} className="mr-4" />All Alerts
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" className="flex bg-white hover:bg-yellow-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4">
                                    <Image src="/news.png" alt="" width={20} height={20} className="mr-4" />News
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="p-4 flex gap-2">
                    <button type="button" className="rounded-md bg-[#124b3d] px-4 py-2 text-sm font-semibold text-white shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-sm" viewBox="0 0 16 16">
                            <path d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1h8zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        </svg>
                    </button>
                    <button onClick={handleSignOut} className="rounded-md bg-[#124b3d] px-4 py-2 text-sm font-semibold text-white shadow-sm">Logout</button>
                </div>
            </div>
        </aside>
    )
}