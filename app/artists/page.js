"use client"

import ArtistCard from "./artistcard";
import artistsData from "./artists.json";


export default function ArtistsPage() {
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {artistsData.map((artist) => (
                      <ArtistCard key={artist.id} artist={artist} />
                  ))}
              </div>
          </main>
      </div>
  );
}