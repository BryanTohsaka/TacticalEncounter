import { IoCloudDownload } from "react-icons/io5";
const Manual = () => {
  return (
    <div className="manual-section w-full h-fit mt-28 p-10 flex lg:justify-around flex-col-reverse lg:flex-row">
        <div className="">
        <a href="" className="text-center mt-8 patreon-btn flex items-center justify-center">Apoyanos en Patreon </a>
        <a href="" className="text-center mt-8 shop-btn flex items-center justify-center">Visita nuestra tienda online</a>
        </div>
        <div className="lg:w-1/2 flex flex-col lg:items-end">
            <p className=" text-center text-white font-regular lg:text-right text-xl">Este manual es <span className="font-bold">100% gratuito</span> , si lo disfrutas, por favor apóyanos, queremos darte más y mejores manuales para fortalecer a la comunidad.</p>
            <a href="" className="text-center mt-8 download-btn flex items-center justify-center">Descarga el manual <IoCloudDownload className=" ml-3" /> </a>
        </div>
    </div>
  )
}

export default Manual