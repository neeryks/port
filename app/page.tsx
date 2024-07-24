import { Cormorant_Garamond } from "next/font/google";
import Header from "../components/header";

const MainFont = Cormorant_Garamond({ weight: ["600"],  subsets: ["latin"] });

function page(){
    return (
      <main className={MainFont.className}>
        <div className="flex justify-center items-center h-screen text-4xl">
          Hello World!
        </div>
      </main>
    )
}

export default page