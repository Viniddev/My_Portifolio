import Image from 'next/image'
import { FaFlagUsa } from 'react-icons/fa'
import { GiBrazilFlag } from 'react-icons/Gi'
import { BsBookHalf } from 'react-icons/Bs'

export default function Home() {
  return (
    <main>
      <div className="header">
        <Image
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
      </div>

      <div className="apresentation">
        <h1>Hi, im Vinicius!</h1>
        <h2>Software Enginier</h2>
      </div>

      <div className="experience">
        <h3>Experience</h3>
        <p>texto</p>
        <div className="experience-time"></div>
      </div>

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

      <div className="buttons">
        <div className="social">

        </div>
        <button>Contact me</button>
      </div>
    </main>
  )
}
