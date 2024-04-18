import React from 'react';
import { useParams } from 'react-router-dom';
import factions from './factions.json'
import Navbar from './Navbar';
import img1 from '../assets/gigerianus.webp'

const History = () => {
  const { name } = useParams();
  const faction = factions.find((faction) => faction.name === name);
  const imgRute ='../assets/'

  if (!faction) {
    return <div>Faction data not found</div>;
  }

  return (
    <>
      <Navbar />
      <div className='w-full bg-lime-400 lg:py-48 py-32 flex justify-center items-center'>
        <h2 className='text-2xl font-bold text-neutral-600 uppercase'>{faction.title}</h2>
      </div>
      <div >
        <h1 className='text-4xl font-bold text-white'>{faction.title}</h1>
        <p className='text-slate-400 font-medium'>{faction.content}</p>
        <img src={img1} alt="" />
      </div>
    </>
    
  );
}

export default History
