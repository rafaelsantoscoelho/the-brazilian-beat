"use client"

import ArtistCard from "./artistcard";
import artistsData from "./artists.json";


export default function ArtistsPage() {
    return (
        <div className="container mx-auto p-4">
            <header className="text-center my-4">
                <h1 className="text-3xl font-bold">Artists</h1>
            </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artistsData.map((artist) => (
              <ArtistCard key={artist.id} artist={artist}/>
            ))}
          </div>
        </div>
      );
}