import {Header} from './components/Header/header'
import { Experience } from './components/experience/experience'
import { Infos } from './components/Infos/infos'
import { Buttons } from './components/buttons/buttons'
import { EmailIcon } from './components/icons/email-icons'

import "./styles/home.scss"

export default function Home() {
  return (
    <main className='conteiner'>
      <Header/>
      <Experience/>
      <Infos/>
      <div className='contact-me'>
        <Buttons/>
        <button className='btn-primary'>
          Contact me <EmailIcon/>
        </button>
      </div>
    </main>
  )
}
