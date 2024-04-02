const Feactures = () => {
  return (
    <div className="w-full h-fit p-8 lg:p-36 md:p-24">
      <div className="flex justify-between flex-col lg:flex-row ">
        <div className="bg-Feactures bg-cover w-full lg:w-1/2 rounded-md h-80 lg:h-auto mb-10 lg:mb-0"></div>
        <div className="w-full lg:w-1/2 lg:ml-10 text-white">
          <h2 className="mb-3 font-bold lg:text-[36px] text-3xl">El Último Refugio</h2>
          <p className="mb-10">
          En el año 2016, una nave alienígena masiva se estrelló en el viejo continente liberando una letal raza de alienígenas parasitarios que amenazan con devorar el mundo. 
            <br /> <br />
            La humanidad se vio obligada a abandonar las ciudades y refugiarse en fortalezas diseñadas para sobrevivir a los devoradores y resistir la embestida de otra raza que viene a cazar a los restos de la humanidad y los devoradores. 
            <br /><br />
            ¡Ahora, el destino de la humanidad pende de un hilo mientras se enfrenta a una doble amenaza: la implacable invasión de los alienígenas y la caza implacable proveniente de otro mundo! 
          </p>
          <a href="" className="bg-red-700 hover:bg-red-500 hover:scale-105 w-fit px-6 py-3 rounded-md mt-10 transition-all duration-300">
            Empieza a jugar
          </a>
        </div>
      </div>
      <div className="flex justify-between flex-col-reverse lg:flex-row mt-20 lg:mt-40">
        <div className="w-full lg:w-1/2 lg:mr-10 text-white flex flex-col lg:items-end ">
          <h2 className="mb-3 font-bold lg:text-[36px] text-3xl">El Último Refugio</h2>
          <p className="mb-10 lg:text-right">
          En el año 2016, una nave alienígena masiva se estrelló en el viejo continente liberando una letal raza de alienígenas parasitarios que amenazan con devorar el mundo. 
            <br /> <br />
            La humanidad se vio obligada a abandonar las ciudades y refugiarse en fortalezas diseñadas para sobrevivir a los devoradores y resistir la embestida de otra raza que viene a cazar a los restos de la humanidad y los devoradores. 
            <br /><br />
            ¡Ahora, el destino de la humanidad pende de un hilo mientras se enfrenta a una doble amenaza: la implacable invasión de los alienígenas y la caza implacable proveniente de otro mundo! 
          </p>
          <a href="" className="bg-red-700 hover:bg-red-500 hover:scale-105 w-fit px-6 py-3 rounded-md transition-all duration-300">
            Empieza a jugar
          </a>
        </div>
        <div className="bg-Feactures bg-cover w-full lg:w-1/2 rounded-md h-80 lg:h-auto mb-10 lg:mb-0"></div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Feactures;