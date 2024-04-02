import HeroImg from "../assets/hero.webp";

const Hero = () => {
  return (
    <>
      <div className="hero-bg w-full h-screen">
        <div className=" text-white z-10 lg:w-2/3 ml-10 lg:ml-32 h-screen flex flex-col justify-center gap-2">
          <h1 className="text-5xl lg:text-8xl font-bold">Ya no estás en Kansas…</h1>
          <p className=" font-semibold text-xl lg:text-2xl mb-3 mt-5">¡Bienvenido a Tactical Encounters!</p>
          <p className="text-lg lg:text-xl font-regular">Una Lucha Desesperada por la Supervivencia.</p>

          <a href="" className="bg-red-700 hover:bg-red-500 hover:scale-105 w-fit px-6 py-3 rounded-lg mt-10 transition-all duration-300">
            Empieza a jugar
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
