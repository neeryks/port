import Image  from "next/image";

function Header() {
return (
    <header className="flex p-4 sticky top-0">
      <div className="flex justify-start items-center w-full">
        <Image src="/neerykslogo_blacknb.png" alt="Favicon" width={48} height={48}></Image>
        <div className="flex flex-col">
            <span className="font-bold text-xs ">neeryks/dev</span>
            <span className="font-thin text-xs ">Software Engineer</span>
        </div>
      </div>
      <div className="flex flex-row justify-end gap-8">
         <div className="flex  items-center w-full text-base md:text-2xl font-thin">WORKS</div>
         <div className="flex  items-center w-full text-base md:text-2xl font-thin">CONTACT</div>
      </div>
    </header>
  );
}

export default Header;