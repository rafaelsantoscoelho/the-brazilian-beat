"use client"

import { useState } from 'react';
import InstrumentSelector from './instrument-selector';
import InstrumentInfo from './instrument-info';
import instrumentsData from './instruments.json';

export default function InstrumentsPage() {
  const [selectedCategory, setSelectedCategory] = useState('keyboard');
  const [selectedInstrument, setSelectedInstrument] = useState('piano');

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-2">The Brazilian Beat</h1>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-4 py-4">
        <div
          className="mx-auto bg-white shadow-md py-2 px-4 rounded flex justify-center space-x-4"
          style={{ maxWidth: "fit-content" }}
        >
          <InstrumentSelector
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedInstrument={selectedInstrument}
            setSelectedInstrument={setSelectedInstrument}
          />
        </div>
        <section className="mt-16 mb-8">
          <InstrumentInfo
            selectedCategory={selectedCategory}
            selectedInstrument={selectedInstrument}
          />
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
