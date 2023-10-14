import About from "../components/about.js";
import Aboutdes from'../components/about-desc.js';
import Image from "../components/front-image.js" 
import { useState } from 'react';
function AboutPage() {
    const [imageSrc] = useState('about.png');
  const [content] = useState('About Us');
    return (
        <>
       <Image imageSrc={imageSrc} content={content}/>
       <div className="cont">
       <Aboutdes/>
       <About/>
       </div>
        </>
    )
}
export default AboutPage;