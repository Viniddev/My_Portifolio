import "./buttons.scss"
import { InstaIcon } from "../icons/insta-icon"
import { GitIcon } from "../icons/git-icon"
import { LinkedinIcon } from "../icons/linkedin-icon"
import { EmailIcon } from "../icons/email-icons"

export function Buttons(){
    return(
        <div className="social">
                <a href="" className="buttons"><InstaIcon/></a>
                <a href=""  className="buttons"><GitIcon/></a>
                <a href=""  className="buttons"><LinkedinIcon/></a>
                <a href=""  className="buttons"><EmailIcon/></a>
        </div>
    )
}