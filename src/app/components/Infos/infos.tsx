import "./infos.scss"
import { SectionTitle } from '../section-title/section-title'
import { BrasilIcon } from "./iconsFlags/brasilFlag"
import { EuaFlag } from "./iconsFlags/euaFlag"

export function Infos(){
    return(      
        <div className="infos">
            <SectionTitle text='Languages'/>
            <div className="languages-info">
                <span> <EuaFlag/> EN - Intermadiary</span>
                <span> <BrasilIcon/> PT - Native Speaker</span>
            </div>

            <SectionTitle text='Education'/>
            <div className="educational-Info">
                <span className="emoji">🎓</span>
                <span>
                    Graduating in Computer Science from FUMEC University and Computer Technician from the Polytechnic School of Minas Gerais. 
                    I am a great enthusiast in the field of programming, I really like to learn new technologies and develop applications that
                    help solve common problems in the lives of the people around me. I am always willing to learn more and open to
                    new opportunities!
                </span>
            </div>
        </div>
    ) 
}