import Image  from "next/image";
import Link from "next/link";

function Header() {
return (
    <header className="flex p-4 sticky top-0 bg-black">
      <div className="flex justify-start items-center w-full">
        <Link href={"/"}><Image src="/neerykslogo_blacknb.png" alt="Favicon" width={48} height={48}></Image></Link>
        <div className="flex-col hidden md:block">
          <div className="flex flex-col">
            <span className="font-bold text-xs ">neeryks/dev</span>
            <span className="font-thin text-xs ">Software Engineer</span>
          </div>
            
        </div>
      </div>
      <div className="flex flex-row justify-end md:gap-8 gap-4">
        <Link href={"#Works"} className="flex items-center w-full text-base md:text-2xl font-thin hover:font-bold transition-all duration-300 hover:text-blue-500" ><div>WORKS</div></Link>
        <Link href={"#"} className="flex items-center w-full text-base md:text-2xl font-thin hover:font-bold transition-all duration-300 hover:text-blue-500" ><div>BLOG</div></Link>
        <a href={"mailto:contact@neeryks.dev"} className="flex items-center w-full text-base md:text-2xl font-thin hover:font-bold transition-all duration-300 hover:text-blue-500" ><div>CONTACT</div></a>
         
      </div>
    </header>
  );
}

export default Header;