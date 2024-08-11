export default function Myfooter() {
    return (
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
    )
}