import Image  from "next/image";

function Header() {
return (
    <header className="flex p-4 sticky top-0">
      <div className="flex justify-start items-center w-full">
        <Image src="/neerykslogo_blacknb.png" alt="Favicon" width={48} height={48}></Image>
      </div>
      <div className="flex justify-end items-center w-full text-2xl">WORKS</div>
    </header>
  );
}

export default Header;