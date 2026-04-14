function SkillBlock({ skillName, skillImage }) {
    return (
        <div className="flex flex-col items-center justify-center">
            <div  className="rounded-full h-36 w-36 p-6 border-[8px] border-orange-500"><img className="h-20" src={skillImage} alt={skillName} /></div>
            <p className="text-center text-bold text-xl text-opacity-70 text-white">{skillName}</p>
        </div>
    );
}

export default SkillBlock;