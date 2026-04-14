import SkillBlock from "./SkillBlock";
function Skills() {
    return (
        <div className="w-full mt-16 h-auto md:pt-24 md:mt-0">
            <h2 className="text-2xl md:text-4xl text-center font-bold text-opacity-90 text-white mb-6 md:mb-12">Skills</h2>
            <div className="grid grid-cols-2 mb-24 gap-12 md:grid-cols-6">
                <SkillBlock skillName="Git" skillImage="/public/git.png" />
                <SkillBlock skillName="React" skillImage="/public/react.png" />
                <SkillBlock skillName="CSS" skillImage="/public/css.png" />
                <SkillBlock skillName="HTML" skillImage="/public/html.png" />
                <SkillBlock skillName="JavaScript" skillImage="/public/js.png" />
                <SkillBlock skillName="Tailwind CSS" skillImage="/public/tailwind.png" />
            </div>
        </div>
    )
}

export default Skills;