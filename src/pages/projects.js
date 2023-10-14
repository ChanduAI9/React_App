import Image from "../components/front-image.js" 
import Projects from"../components/Projects.js";
import { useState } from 'react';
function ProjectsPage() {
    const [imageSrc] = useState('Projects.png');
    const [content] = useState('Projects');
    return (
        <>
       <Image imageSrc={imageSrc} content={content}/>
       <Projects/>
        </>
    )
}
export default ProjectsPage;