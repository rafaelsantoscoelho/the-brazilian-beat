"use client";

import { useState } from 'react';
import InstrumentSelector from './instrument-selector';
import InstrumentInfo from './instrument-info';
import data from './instruments.json';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('keyboard');
  const [selectedInstrument, setSelectedInstrument] = useState('piano');

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-2">Instruments</h1>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-4 py-4 flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/5 bg-white shadow-md p-4 rounded mb-4 lg:mb-0">
          <InstrumentSelector
            data={data}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedInstrument={selectedInstrument}
            setSelectedInstrument={setSelectedInstrument}
          />
        </div>
        <section className="w-full lg:w-4/5 bg-white shadow-md p-6 rounded flex flex-col lg:flex-row items-center lg:items-start">
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start mb-4 lg:mb-0">
            <h2 className="text-2xl font-bold mb-4 bg-yellow-400 rounded px-2 py-1 inline-block">{data[selectedCategory][selectedInstrument].name}</h2>
            <img src={data[selectedCategory][selectedInstrument].image} alt={data[selectedCategory][selectedInstrument].name} className="h-96 object-cover rounded shadow-md mb-4 lg:mb-0" />
          </div>
          <div className="lg:w-1/2 lg:ml-8 flex flex-col items-center mr-8">
            <p className="text-base mb-4">{data[selectedCategory][selectedInstrument].description}</p>
            <h3 className="text-xl font-bold mb-2 text-center bg-yellow-400 rounded px-2 py-1 inline-block">Notable Artists</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data[selectedCategory][selectedInstrument].artists.map((artist, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img src={artist.photo} alt={artist.name} className="w-80 h-60 rounded-lg shadow-md mb-2" />
                  <p className="text-center font-medium">{artist.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600 text-base">
            CPRG306B | Web Dev 2 | Spring 2024 | Final Project | Rafael Santos Coelho
          </p>
        </div>
      </footer>
    </div>
  );
}