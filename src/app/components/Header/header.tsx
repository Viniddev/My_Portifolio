import Image from "next/image"
import "./header.scss"

export function Header(){
    return(
        <div className="header">
            <div className="apresentation">
                <h1>Hi, I'm Vinícius!</h1>
                <h2>Software Enginier</h2>
            </div>
            <Image
                src="/me.jpg"
                alt="Foto de perfil"
                width={320}
                height={320}
                priority
            />
        </div>
    )
}