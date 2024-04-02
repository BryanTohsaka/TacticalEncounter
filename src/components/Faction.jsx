import Gigerianus from '../assets/gigerianus.webp'
import Human from '../assets/human.webp'
import Venyator from '../assets/veniator.webp'
import Citadel from '../assets/citadel.webp'
import Staynetech from '../assets/staynetech.webp'
import Mercenarios from '../assets/merc.webp'

const Faction = () => {
  return (
    <div className='flex w-full h-fit flex-col justify-center items-center'>
    <h2 className='font-bold text-3xl mb-10 lg:mb-0 md:mb-0 lg:text-5xl text-white'>Facciones</h2>
    <div className="w-full h-fit px-8 lg:px-36 md:p-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <a href='#' className='faction-card hover:shadow-[0px_0px_89px_0px_#4c51bf] hover:shadow-[0px_0px_89px_0px_#4c51bf]'>
        <div className='faction-blur'>
          <p>Gigerianus</p>
        </div>
        <img src={Gigerianus} alt="" />
      </a>
      <a href='' className='faction-card hover:shadow-[0px_0px_89px_0px_#D9002E]'>
        <div className='faction-blur'>
          <p>Fuerza de Defensa Humana</p>
        </div>
        <img src={Human} alt="" />
      </a>
      <a href='' className='faction-card hover:shadow-[0px_0px_89px_0px_#fff]'>
        <div className='faction-blur'>
          <p>Venyator</p>
        </div>
        <img src={Venyator} alt="" />
      </a>
      <a href='' className='faction-card hover:shadow-[0px_0px_89px_0px_#007AD9] '>
        <div className='faction-blur'>
          <p>Citadel</p>
        </div>
        <img src={Citadel} alt="" />
      </a>
      <a href='' className='faction-card hover:shadow-[0px_0px_89px_0px_#C1FF73]'>
        <div className='faction-blur'>
          <p>Staynetech</p>
        </div>
        <img src={Staynetech} alt="" />
      </a>
      <a href='' className='faction-card hover:shadow-[0px_0px_89px_0px_#009E16]'>
        <div className='faction-blur'>
          <p>mercenarios</p>
        </div>
        <img src={Mercenarios} alt="" />
      </a>
    </div>
    </div>
  )
}

export default Faction