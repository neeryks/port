import { Cormorant_Garamond } from "next/font/google";

const MainFont = Cormorant_Garamond({ weight: ["600"], subsets: ["latin"] });

function page() {
  return (
    <main className="h-screen flex justify-center items-center">
  
      <div className="absolute top-0 left-0 w-full h-full" style={{
        backgroundImage: "url('/akashpng.webp')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        filter: "brightness(40%)",
        zIndex: -1
      }}>
      </div>

      <div className="z-10 text-7xl font-light text-center">
        Crafting <span className="font-bold text-blue-500">Masterpeices</span><br></br>With <span className="font-bold">Code.</span>
      </div>

    </main>
  )
}

export default page