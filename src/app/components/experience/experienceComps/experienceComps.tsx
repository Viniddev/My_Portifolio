import Image from "next/image"
import { experienceProps } from "./types"

interface props {
    data: experienceProps
}

const ExperienceComps: React.FC<props> = ({ data }) =>{
    return(
        <div className="content">
                <Image
                    src={data.image}
                    alt={data.alt}
                    width={36}
                    height={34}
                    priority
                />
                <div className="experience-unit">
                    <div className={`experience-measure ${data.measure}`}>{data.time} year</div>
                </div>
         </div>
    )
}

export default ExperienceComps;
