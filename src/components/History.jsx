import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import factions from "./factions.json";
import Navbar from "./Navbar";
import { IoCloudDownload } from "react-icons/io5";
import ScrollTop from "./ScrollTop";
import Gigecover from "../assets/Gigecover.webp"

const History = () => {
  
  const { name } = useParams();
  const faction = factions.find((faction) => faction.name === name);
  const [factionImage, setFactionImage] = useState(null);
  const [factionImage2, setFactionImage2] = useState(null);
  const [coverImage, setCoverImage] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      const response = await fetch(`assets/${faction.img1}`);
      const blob = await response.blob();
      setFactionImage(URL.createObjectURL(blob));
    };
  
    const loadImage2 = async () => {
      const response = await fetch(`assets/${faction.img2}`);
      const blob = await response.blob();
      setFactionImage2(URL.createObjectURL(blob));
    };
  
    const loadCover = async () => {
      const response = await fetch(`assets/${faction.cover}`);
      const blob = await response.blob();
      setCoverImage(URL.createObjectURL(blob));
    };
  
    loadImage();
    loadImage2();
    loadCover();
  }, [faction.img1, faction.img2, faction.cover]);

  if (!faction) {
    return <div>Faction data not found</div>;
  }

  return (
    
    <div className="bg-neutral-900 w-full">
      <ScrollTop />
      <Navbar />
      <div className="cover bg-lime-200 w-full lg:py-48 py-32 flex justify-center items-center" style={{ backgroundImage: `url(${coverImage})` }}></div>

      <div className="px-10 lg:px-32 mt-14 ">
        <h2 className="text-2xl font-bold text-neutral-200 uppercase text-center mb-10">{faction.title}</h2>
        <p className="text-xl font-regular text-white">{faction.intro}</p> 
        <p className="text-xl font-regular text-white mt-10">{faction.intro1}</p>
        <p className="text-xl font-regular text-white mt-10">{faction.intro2}</p>
        <div className="lg:flex mt-20">
          {factionImage && <img src={factionImage} alt={faction.title} className="lg:w-1/3 mr-10" />}
          <div>
            <p className="text-slate-300 font-medium text-lg mb-10 ">{faction.content1}</p>
            <p className="text-slate-300 font-medium text-lg ">{faction.content11}</p>
          </div>
          
        </div>
        <p className="text-slate-300 font-medium text-lg mt-10">{faction.content2}</p>
        <div className="flex lg:flex-row flex-col-reverse mt-20">
          <div>
          <p className="text-slate-300 font-medium text-lg mr-10 mb-10">{faction.content3}</p>
          <p className="text-slate-300 font-medium text-lg mr-10 mb-10">{faction.content31}</p>
          <p className="text-slate-300 font-medium text-lg mr-10 mb-10">{faction.content32}</p>
          <a href={faction.rules} className="text-neutral-700 w-fit lg:text-lg text-[.8em] mt-10 mb-10 px-6 py-3 lg:px-10 lg:py-5 rounded-md bg-lime-300 flex justify-center items-center gap-4">
              Descarga las reglas de facción <IoCloudDownload className="text-xl" />
          </a>
          </div>
          
          
          {factionImage2 && <img src={factionImage2} alt={faction.title} className="lg:w-1/3 mb-10" />}
        </div>
      </div>
    </div>
  );
};

export default History;
