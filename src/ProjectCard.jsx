function ProjectCard({ title, description, imageUrl, link }) {
    return (
        <div className="bg-white bg-opacity-10 p-4 rounded-lg">
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-sans font-bold text-white mb-2">{title}</h2>
            <p className="text-white font-mono opacity-70">{description}</p>
            <a href={link} className="text-orange-500  font-sans mt-4 inline-block" target="_blank" rel="noopener noreferrer">
                View Project
            </a>
        </div>
    );
}
export default ProjectCard;