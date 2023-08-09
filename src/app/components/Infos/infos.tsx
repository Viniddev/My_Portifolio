import { FaFlagUsa } from 'react-icons/fa'
import { GiBrazilFlag } from 'react-icons/Gi'
import "./infos.scss"

export function Infos(){
    return(      
        <div className="infos">
            <h3>languages</h3>
            <div className="languages-info">
                <span><FaFlagUsa/> EN - Intermadiary</span>
                <span><GiBrazilFlag/> PT - Native Speaker</span>
            </div>

            <h3>Education</h3>
            <div className="educational-Info">
                <span>🎓</span>
                <span>Text about my education</span>
            </div>
        </div>
    ) 
}