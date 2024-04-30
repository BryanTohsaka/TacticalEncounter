import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Comingsoon = () => {
  return (
    <div className='coming-soon w-screen h-screen'><Navbar />
        <div className='w-screen h-screen bg-zinc-950/80 flex-col text-center content-center'>
            <h1 className='text-white lg:text-6xl text-3xl font-bold tracking-wider mb-20 '>PROXIMAMENTE</h1>
            <p className='text-slate-300 lg:text-2xl text-sm px-10 lg:px-32 mb-10'>Estamos trabajando arduamente para diseñar y probar las reglas de esta facción con el objetivo de asegurarnos de hacer reglas divertidas y que aporten a la experiencia global del juego, vuelve más adelante para descargar las reglas de esta facción. </p>
            <Link to="/" className='text-white bg-rose-700 px-7 py-3 rounded-md uppercase text-sm font-semibold'>volver al inicio</Link>
        </div>
        
    </div>
  )
}

export default Comingsoon