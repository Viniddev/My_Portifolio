import "./experience.scss"
import Image from "next/image"
import { SectionTitle } from "../section-title/section-title"

export function Experience(){
    return(
        <div className="experience">
            <SectionTitle text="Experience"/>
            <p>
                Computer Science student currently doing freelance and looking for an oportunity as a Front-end Developer!
            </p>
            <div className="experience-time">
                <div className="content">
                    <Image
                        src="/react 2.png"
                        alt="react"
                        width={36}
                        height={34}
                        priority
                    />

                    <div className="experience-unit">
                        <div className="experience-measure ex1"> 1 year</div>
                    </div>
                </div>
                
                <div className="content">
                    <Image
                        src="/ts 2.png"
                        alt="typescript"
                        width={36}
                        height={34}
                        priority
                    />
                    
                    <div className="experience-unit">
                        <div className="experience-measure ex1"> 1 year</div>
                    </div>
                </div>

                <div className="content">
                    <Image
                        src="/js 2.png"
                        alt="javascript"
                        width={36}
                        height={34}
                        priority
                    />

                    <div className="experience-unit">
                        <div className="experience-measure ex2">2 years</div>
                    </div>
                </div>
                <div className="content">
                    <Image
                        src="/java 2.png"
                        alt="java"
                        width={36}
                        height={34}
                        priority
                    />

                    <div className="experience-unit">
                        <div className="experience-measure ex2">2 years</div>
                    </div>
                </div>
            </div>
        </div>
    )
}