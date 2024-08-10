export default function CropCard({ cropname }) {

    return (
        <div className="div h-[7em] w-[13em] bg-[#f0f4d4] m-auto rounded-[1em] overflow-hidden relative group p-2 z-0">
            <div className="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-[#FF5800] group-hover:scale-[800%] duration-500 z-[-1] op"></div>

            <button className="text-[0.75em] absolute bottom-[1em] left-[1em] rounded-lg p-1 bg-gray-800 text-[white] group-hover:text-[white] duration-500">
                <span className="relative before:h-[0.16em] before:absolute before:w-full before:content-['']  hover:text-[#6f6be6] duration-300 before:bottom-0 before:left-0">
                    View Analysis
                </span>
                <i className="fa-solid fa-arrow-right"></i>
            </button>

            <h1 className="z-20 font-bold font-Poppin group-hover:text-white duration-500 text-[1.4em]">
                {cropname}
            </h1>
        </div>
    )
}