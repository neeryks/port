import Marquee from "react-fast-marquee";

const images = [
    ["/logos/django.png","Django"],
    ["/logos/document.png","Vue"],
    ["/logos/html-5.png","HTML5"],
    ["/logos/js.png","Javascript"],
    [ "/logos/node-js.png","NodeJS"],
    ["/logos/python.png","Python"],
    ["/logos/social1.png","Docker"],
    ["/logos/social2.png","Aws"],
    ["/logos/social.png","CSS3"],
    ["/logos/structure.png","ReactJS"],
    ["/logos/django.png","Django"],
    ["/logos/document.png","Vue"],
    ["/logos/html-5.png","HTML5"],
    ["/logos/js.png","Javascript"],
    [ "/logos/node-js.png","NodeJS"],
    ["/logos/python.png","Python"],
    ["/logos/social1.png","Docker"],
    ["/logos/social2.png","Aws"],
    ["/logos/social.png","CSS3"],
    ["/logos/structure.png","ReactJS"],
    ["/logos/django.png","Django"],
    ["/logos/document.png","Vue"],
    ["/logos/html-5.png","HTML5"],
    ["/logos/js.png","Javascript"],
    [ "/logos/node-js.png","NodeJS"],
    ["/logos/python.png","Python"],
    ["/logos/social1.png","Docker"],
    ["/logos/social2.png","Aws"],
    ["/logos/social.png","CSS3"],
    ["/logos/structure.png","ReactJS"],
    ["/logos/django.png","Django"],
    ["/logos/document.png","Vue"],
    ["/logos/html-5.png","HTML5"],
    ["/logos/js.png","Javascript"],
    [ "/logos/node-js.png","NodeJS"],
    ["/logos/python.png","Python"],
    ["/logos/social1.png","Docker"],
    ["/logos/social2.png","Aws"],
    ["/logos/social.png","CSS3"],
    ["/logos/structure.png","ReactJS"],
    
    
];

const images2 = [
    
    ["/logos/html-5.png","HTML5"],
    ["/logos/js.png","Javascript"],
    [ "/logos/node-js.png","NodeJS"],
    ["/logos/python.png","Python"],
    ["/logos/social1.png","Docker"],
    ["/logos/social2.png","Aws"],
    ["/logos/social.png","CSS3"],
    ["/logos/structure.png","ReactJS"],
    ["/logos/django.png","Django"],
    ["/logos/document.png","Vue"],
    ["/logos/html-5.png","HTML5"],
    ["/logos/js.png","Javascript"],
    [ "/logos/node-js.png","NodeJS"],
    ["/logos/python.png","Python"],
    ["/logos/social1.png","Docker"],
    ["/logos/social2.png","Aws"],
    ["/logos/social.png","CSS3"],
    ["/logos/structure.png","ReactJS"],
    ["/logos/django.png","Django"],
    ["/logos/document.png","Vue"],
    
    ["/logos/html-5.png","HTML5"],
    ["/logos/js.png","Javascript"],
    [ "/logos/node-js.png","NodeJS"],
    ["/logos/python.png","Python"],
    ["/logos/social1.png","Docker"],
    ["/logos/social2.png","Aws"],
    ["/logos/social.png","CSS3"],
    ["/logos/structure.png","ReactJS"],
    ["/logos/django.png","Django"],
    ["/logos/document.png","Vue"],
    
    ["/logos/html-5.png","HTML5"],
    ["/logos/js.png","Javascript"],
    [ "/logos/node-js.png","NodeJS"],
    ["/logos/python.png","Python"],
    ["/logos/social1.png","Docker"],
    ["/logos/social2.png","Aws"],
    ["/logos/social.png","CSS3"],
    ["/logos/structure.png","ReactJS"],
    ["/logos/django.png","Django"],
    ["/logos/document.png","Vue"],
    

];


export default function ScrollMarquee(){
    
   return (
       <>
       <div className="flex flex-col w-screen overflow-hidden">
        <Marquee loop={0} gradient={false} speed={20}>
        {images.map((image, index) => (
            <div key={index} className="flex justify-center items-center rounded-md mx-1 bg-slate-800 zoom-on-hover">
                <img className="mr-4 ml-4 my-2 rounded-md" src={image[0]} alt="neeryks logo" style={{ width: "20px", height: "20px"}} />
                <span className="font-bold text-sm mr-4">{image[1]}</span>
            </div>
            
        ))}
        </Marquee>
        <Marquee loop={0} gradient={false} speed={20}>
        {images2.map((image, index) => (
            <div key={index} className="flex justify-center items-center rounded-md mx-1 bg-slate-800 mt-2 zoom-on-hover">
                <img className="mr-4 ml-4 my-2 rounded-md" src={image[0]} alt="neeryks logo" style={{ width: "20px", height: "20px"}} />
                <span className="font-bold text-sm mr-4">{image[1]}</span>
            </div>
            
        ))}
        </Marquee>
        </div>
       
       </>
   );
   
}