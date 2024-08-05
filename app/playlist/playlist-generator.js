"use client";

import { useState } from 'react';
import tracksData from './tracks.json';

export default function RandomPlaylistGenerator() {
  const [numSongs, setNumSongs] = useState(0);
  const [playlist, setPlaylist] = useState([]);

  const generatePlaylist = () => {
    if (numSongs > 60) {
      alert('The number of songs cannot be greater than 60.');
      setPlaylist([]);
      return;
    }

    const allTracks = tracksData.composers.flatMap(composer =>
      composer.tracks.map(track => ({
        composer: composer.name,
        ...track
      }))
    );

    const shuffledTracks = allTracks.sort(() => 0.5 - Math.random());
    const selectedTracks = shuffledTracks.slice(0, numSongs);

    setPlaylist(selectedTracks);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-2">Random Playlist Generator</h1>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-4 py-4 flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/4 lg:mr-4 bg-white shadow-md p-4 rounded mb-4 lg:mb-0">
          <div className="mb-4">
            <label htmlFor="numSongs" className="block text-sm font-medium text-gray-700">
              Number of songs (maximum of 60):
            </label>
            <input
              type="number"
              id="numSongs"
              value={numSongs}
              onChange={(e) => setNumSongs(Number(e.target.value))}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            onClick={generatePlaylist}
            className="w-full px-4 py-2 bg-blue-800 hover:bg-blue-600 text-white font-bold rounded-md"
          >
            Generate Playlist
          </button>
        </div>
        <section className="w-full lg:w-3/4 bg-white shadow-md p-6 rounded">
          {playlist.length > 0 ? (
            <ul className="list-disc pl-5">
              {playlist.map((track, index) => (
                <li key={index} className="mb-2">
                  <strong>{track.title}</strong> by {track.composer} ({track.year})
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-600">No songs in the playlist yet. Enter a number and generate a playlist!</p>
          )}
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
