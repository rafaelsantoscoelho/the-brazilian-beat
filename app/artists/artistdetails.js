export default function ArtistDetails({ artist }) {
  const fmt_birthDate = artist.birthDate.substring(0, 4);
  const fmt_deathDate = artist.deathDate ? artist.deathDate.substring(0, 4) : "present";
  return (
    <div className="min-h-screen bg-gray-100 py-12 flex justify-center">
      <div className="max-w-5xl bg-white rounded-3xl shadow-md overflow-hidden p-12 flex flex-col md:flex-row">
        <div className="w-full md:w-2/5 flex flex-col items-center justify-center p-8">
          <div className="md:ml-0 md:text-left mb-1"> 
            <h2 className="text-2xl font-bold  text-black mb-1">
              {artist.name}
            </h2>
            <p className="text-gray-500  text-md mb-1"> 
              {`${fmt_birthDate} - ${fmt_deathDate}`}
            </p>
          </div>
          <div className="w-50 h-50 overflow-hidden rounded-3xl shadow-md mt-1 mb-6"> 
            <img
              className="w-full h-full object-fit: cover rounded-3xl"
              src={artist.imageUrl2}
              alt={artist.name}
            />
          </div>
          <div className="md:ml-0 md:text-left mb-1"> 
            <h2 className="text-2xl font-bold  text-black mb-1">
              Most well-known album
            </h2>
            <p className="text-gray-500  text-md mb-1"> 
              {artist.albums[0] + " ("+artist.albums[2]+")"}
            </p>
          </div>
          <div className="w-50 h-50 overflow-hidden rounded-3xl shadow-md mt-1"> 
            <img
              className="w-full h-full object-fit: cover rounded-3xl"
              src={artist.albums[1]}
              alt={artist.name}
            />
          </div>

        </div>
        <div className="w-full md:w-3/5 p-12">
          <div className="mb-4">
            <h2 className="text-2xl font-bold  text-black mb-4 bg-yellow-400 rounded px-2 py-1 inline-block">Short bio</h2>
            <p className="text-gray-500 ">{artist.detailedBio}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold  text-black mb-4 bg-yellow-400 rounded px-2 py-1 inline-block">
              Famous compositions
            </h2>
            <ul className="list-disc list-inside ml-4 text-gray-500 ">
              {artist.compositions.map((composition, index) => (
                <li key={index} className="mb-2 text-md ">{composition}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}