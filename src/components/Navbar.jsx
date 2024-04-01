import logo from '../assets/tactical.png'
const Navbar = () => {
  return (
    <div className="bg-[#010101]/30 backdrop-blur-lg p-5 flex justify-between items-center fixed w-full z-20 border-b-[1px] border-neutral-700">
        <a href="#"><img src={logo} alt="tactical encounters logo" className='w-48'/></a>
        
        <div className="">
            <ul className='menu-items lg:inline-flex hidden '>
                <li><a href="#">Acerca del juego</a></li>
                <li><a href="#">Como jugar</a></li>
                <li><a href="#">Miniaturas</a></li>
                <li><a href="#">Comunidad</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar