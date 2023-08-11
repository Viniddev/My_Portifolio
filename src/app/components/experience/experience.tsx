import "./experience.scss"
import { SectionTitle } from "../section-title/section-title"
import { experienceProps } from "./experienceComps/types"
import ExperienceComps from "./experienceComps/experienceComps"

const experiences:experienceProps[] = [
    {
        image: "/react 2.png",
        alt:"react",
        time:"1",
        measure:"ex1"
    },
    {
        image: "/ts 2.png",
        alt:"typescript",
        time:"1",
        measure:"ex1"
    },
    {
        image: "/js 2.png",
        alt:"Javascript",
        time:"2",
        measure:"ex2"
    },
    {
        image: "/java 2.png",
        alt:"java",
        time:"2",
        measure:"ex2"
    },
]

export function Experience(){
    return(
        <div className="experience">
            <SectionTitle text="Experience"/>
            <p>
                Computer Science student currently doing freelance and looking for an oportunity as a Front-end Developer!
            </p>

            <div className="experience-time">
                {experiences.map((experience, index) => 
                (<ExperienceComps key={index} data={experience} />))}
            </div>
        </div>
    )
}