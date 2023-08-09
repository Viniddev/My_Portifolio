import {Header} from './components/Header/header'
import { Experience } from './components/experience/experience'
import { Infos } from './components/Infos/infos'
import { Buttons } from './components/buttons/buttons'

import "./styles/home.scss"

export default function Home() {
  return (
    <main className='conteiner'>
      <Header/>
      <Experience/>
      <Infos/>
      <Buttons/>
    </main>
  )
}
