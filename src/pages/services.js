import Content from "../components/content.js" 
import Image from "../components/front-image.js" 
import { useState } from 'react';
function ServicePage() {
    const [imageSrc] = useState('services.png');
    const [content] = useState('Our Services');
    return (
        <>
        <Image imageSrc={imageSrc} content={content}/>
       <Content/>
       </>
    )
}
export default ServicePage;