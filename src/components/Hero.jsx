import HeroImg from "../assets/hero.webp";

const Hero = () => {
  return (
    <>
      <div className="absolute text-white z-10 lg:w-2/3 ml-32 h-screen flex flex-col justify-center">
        <h1 className="text-8xl font-bold">Ya no estás en Kansas…</h1>
        <p className=" font-semibold text-2xl mb-3 mt-5">¡Bienvenido a Tactical Encounters!</p>
        <p className="text-xl font-regular">Prepárate para la acción más intensa y emocionante <br /> en el mundo de los wargames.</p>

        <a href="" className="bg-red-700 hover:bg-red-500 hover:scale-105 w-fit px-6 py-3 rounded-lg mt-10 transition-all duration-300" >Empieza a jugar</a>
      </div>

      <div className="bg-gradient-to-br from-yellow-600 to-gray-900/0 w-full h-screen">
        <img src={HeroImg} alt="" className="opacity-70 h-screen w-fit" />
      </div>
    </>
  );
};

export default Hero;
