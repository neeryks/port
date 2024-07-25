import Marquee from "react-fast-marquee";

const images = [
    "/logos/django.png",
    "/logos/document.png",
    "/logos/html-5.png",
    "/logos/js.png",
    "/logos/node-js.png",
    "/logos/python.png",
    "/logos/social1.png",
    "/logos/social2.png",
    "/logos/social.png",
    "/logos/structure.png",
    "/logos/django.png",
    "/logos/document.png",
    "/logos/html-5.png",
    "/logos/js.png",
    "/logos/node-js.png",
    "/logos/python.png",
    "/logos/social1.png",
    "/logos/social2.png",
    "/logos/social.png",
    "/logos/structure.png",
    "/logos/django.png",
    "/logos/document.png",
    "/logos/html-5.png",
    "/logos/js.png",
    "/logos/node-js.png",
    "/logos/python.png",
    "/logos/social1.png",
    "/logos/social2.png",
    "/logos/social.png",
    "/logos/structure.png",
    "/logos/django.png",
    "/logos/document.png",
    "/logos/html-5.png",
    "/logos/js.png",
    "/logos/node-js.png",
    "/logos/python.png",
    "/logos/social1.png",
    "/logos/social2.png",
    "/logos/social.png",
    "/logos/structure.png",
    "/logos/django.png",
    "/logos/document.png",
    "/logos/html-5.png",
    "/logos/js.png",
    "/logos/node-js.png",
    "/logos/python.png",
    "/logos/social1.png",
    "/logos/social2.png",
    "/logos/social.png",
    "/logos/structure.png",
];


export default function ScrollMarquee(){
    
   return (
       <>
       
        <Marquee loop={0} gradient={false} speed={20} className="bg-white opacity-100">
        {images.map((image, index) => (
            <img className="mr-6 ml-6 my-6" src={image} alt="neeryks logo" style={{ width: "50px", height: "50px"}} />
        ))}
        </Marquee>
       
       </>
   );
   
}