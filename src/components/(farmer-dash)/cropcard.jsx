export default function CropCard({ cropname }) {
    return (
        <div className="div h-[7em] w-[13em] bg-[#f0f4d4] m-auto rounded-[1em] overflow-hidden relative group p-2 z-0">
            <div className="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-[#FF5800] group-hover:scale-[800%] duration-500 z-[-1] op"></div>
            <h1 className="z-20 font-bold font-Poppin group-hover:text-white duration-500 text-[1.4em] uppercase">
                {cropname}
            </h1>
                <button className="absolute bottom-2 rounded-md bg-[#124b3d] p-1 text-sm text-white shadow-sm">
                    View Analysis
                </button>
        </div>
    )
}