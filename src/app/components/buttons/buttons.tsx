import "./buttons.scss"
import { InstaIcon } from "../icons/insta-icon"
import { GitIcon } from "../icons/git-icon"
import { LinkedinIcon } from "../icons/linkedin-icon"
import { EmailIcon } from "../icons/email-icons"

export function Buttons(){
    return(
        <div className="social">
                <a href="https://www.instagram.com/viniddev_/" className="buttons" target="_blank"><InstaIcon/></a>
                <a href="https://github.com/Viniddev"  className="buttons" target="_blank"><GitIcon/></a>
                <a href="https://www.linkedin.com/in/vin%C3%ADcius-dias-rodrigues-107602231/"  className="buttons" target="_blank"><LinkedinIcon/></a>
                <a href="mailTo: diasvinicius95@outlook.com"  className="buttons" target="_blank"><EmailIcon/></a>
        </div>
    )
}