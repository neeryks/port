
function Hero() {
  return (
    <main className="">
    <div className="flex justify-center items-start md:items-center p-0 " style={{ height: "calc(100vh - 80px)" }}>
  
      <div className="absolute top-0 left-0 w-full md:mt-0" style={{
        height: "calc(100vh)",
        backgroundImage: "url('/akashpng.webp')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        filter: "brightness(40%)",
        zIndex: -1
      }}>

      </div> 
      <div className="flex justify-center items-center mt-20 md:mb-0">
      <div className="z-1 text-3xl md:text-7xl font-light text-center hidden md:block">
        <span className="hover:text-blue-500 hover:font-bold transition-all duration-300">Crafting</span> <span className="font-bold text-blue-500">Masterpeices</span><br></br><span className="hover:text-blue-500 hover:font-bold transition-all duration-300">With</span> <span className="font-bold blinking-text underline underline-offset-8">Code.</span>
      </div>
      <div className="z-1 text-5xl md:text-7xl font-light text-center md:hidden">
        Crafting <span className="font-bold text-blue-500"><br></br>Masterpeices</span><br></br>With <span className="font-bold blinking-text underline underline-offset-8">Code.</span>
      </div>
      </div>
    </div>
    </main>
  );
}

export default Hero;