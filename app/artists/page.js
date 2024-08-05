"use client";

import { useState } from 'react';
import ArtistCard from './artistcard';
import artistsData from './artists.json';

export default function ArtistsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSkillChange = (e) => {
    setSelectedSkill(e.target.value);
  };

  const filteredArtists = artistsData.filter((artist) => {
    const matchesName = artist.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSkill = selectedSkill === '' || artist.title.toLowerCase().includes(selectedSkill.toLowerCase());
    return matchesName && matchesSkill;
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <h1 className="text-3xl font-bold text-center flex-1">
            Artists
          </h1>
        </div>
      </header>
      <main className="flex-1 container mx-auto p-4">
        <div className="mb-4 flex flex-col md:flex-row items-center">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search by name"
            className="mt-1 block w-full md:w-1/2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mr-4"
          />
          <select
            value={selectedSkill}
            onChange={handleSkillChange}
            className="mt-1 block w-full md:w-1/2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">All skills</option>
            <option value="saxophonist">Saxophonist</option>
            <option value="flutist">Flutist</option>
            <option value="composer">Composer</option>
            <option value="pianist">Pianist</option>
            <option value="mandolinist">Mandolinist</option>
            <option value="guitarist">Guitarist</option>
            <option value="conductor">Conductor</option>
            <option value="clarinetist">Clarinetist</option>
            <option value="arranger">Arranger</option>
            <option value="singer">Singer</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </main>
    </div>
  );
}
