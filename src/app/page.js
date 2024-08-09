import { Rammetto_One } from "next/font/google";

const font = Rammetto_One({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <div className="w-full mx-auto">
      <div className="h-dvh flex justify-center items-center mx-auto overflow-y-scroll bg-cover bg-fixed bg-center bg-no-repeat bgimg">
        <h1 className={`text-7xl ${font.className}`}>FARM FUTURE ANALYTICS</h1>
        
      </div>
      blah
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  );
}
