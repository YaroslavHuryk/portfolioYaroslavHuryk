import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";
function Portfolio(){
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const queryParams = new URLSearchParams({
        type: "project"
        }).toString();
        fetch(`http://localhost:3001/api/announcements?${queryParams}`)
        .then(response => response.json())
        .then(data => {
            setProjects(data);
        });

    }, []);

    return (
        <div className="pt-36 w-full md:p-20 md:pt-36 p-10">
            <h1 className="pb-8 text-center font-bold text-4xl text-white">Portfolio</h1>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
               
                {projects.map((project) => (
                    <ProjectCard
                        key={project._id}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.content}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    )
}

export default Portfolio;