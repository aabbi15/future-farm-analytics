export default function Aboutus(){

    return(

        <section class="">

<div className="flex justify-center items-center">
<div className=" rounded-lg bg-[#124b3d] px-3 py-1 text-md text-white">About Us</div>
</div>
    <div class="gap-16 items-center py-1 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-4 lg:px-6">
        <div class="font-light text-black sm:text-lg">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-[black]">We didn't reinvent the wheel</h2>
            <p class="mb-4">We refined it for agriculture. As strategists, designers, and developers, we bring innovation and problem-solving to the forefront. Our team is agile enough to adapt swiftly to your needs, yet substantial enough to handle the scale and complexity of your agricultural challenges. </p>
          <p>We combine deep agricultural expertise with cutting-edge technology to deliver solutions that are both effective and efficient, ensuring that you get the results you need, when you need them.</p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
            <img class="w-full rounded-lg" src="/home1.jpg" alt="office content 1"/>
            <img class="mt-4 w-full lg:mt-10 rounded-lg" src="/home2.jpg" alt="office content 2"/>
        </div>
    </div>
</section>
    )
}