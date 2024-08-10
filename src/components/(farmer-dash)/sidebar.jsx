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
                        <a href="/" className="text-xl font-bold leading-none text-[#124b3d]">Farm Future Analytics</a>
                    </div>
                    <div className="p-4">
                        <ul className="space-y-1">
                            <li>
                                <a href="/farmer-dashboard" className="flex bg-white rounded-xl font-bold text-sm text-[#124b3d] py-3 px-4">
                                    <Image src="/magnify.png" alt="" width={20} height={20} className="mr-4" />Personalized Analysis
                                </a>
                            </li>
                            <li>
                                <a href="/farmer-news" className="flex bg-white rounded-xl font-bold text-sm text-[#124b3d] py-3 px-4">
                                    <Image src="/news.png" alt="" width={20} height={20} className="mr-4" />Farm Future News
                                </a>
                            </li>
                            <li>
                                <a href="/farmer-profile" className="flex items-center bg-white rounded-xl font-bold text-sm text-[#124b3d] py-3 px-4">
                                    <Image src="/farmer.png" alt="" width={20} height={20} className="mr-4" />My Profile
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="p-4 flex gap-2">
                    <button onClick={handleSignOut} className="rounded-md bg-[#124b3d] px-4 py-2 text-sm font-semibold text-white shadow-sm">Logout</button>
                </div>
            </div>
        </aside>
    )
}