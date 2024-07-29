export default function ArtistDetails({ artist }) {
  const fmt_birthDate = artist.birthDate.substring(0, 4);
  const fmt_deathDate = artist.deathDate ? artist.deathDate.substring(0, 4) : "present";
  return (
    <div className="min-h-screen bg-gray-100 py-12 flex justify-center">
      <div className="max-w-5xl bg-white rounded-3xl shadow-md overflow-hidden p-12 flex flex-col md:flex-row">
        <div className="w-full md:w-2/5 flex flex-col items-center justify-center p-8">
          <div className="h-1/2 overflow-hidden rounded-3xl shadow-md">
            <img
              className="w-full h-full object-fit: cover rounded-3xl"
              src={artist.imageUrl2}
              alt={artist.name}
            />
          </div>
          <div className="mt-4 md:ml-0 md:text-left">
            <h2 className="text-2xl font-bold font-serif text-black mb-2">
              {artist.name}
            </h2>
            <p className="text-gray-500 font-serif text-md mb-4">
              {`${fmt_birthDate} - ${fmt_deathDate}`}
            </p>
          </div>
        </div>
        <div className="w-full md:w-3/5 p-12">
          <div className="mb-4">
            <h2 className="text-2xl font-bold font-serif text-black mb-2">Short bio</h2>
            <p className="text-gray-500 font-serif">{artist.detailedBio}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold font-serif text-black mb-2">
              Famous compositions
            </h2>
            <ul className="list-disc list-inside ml-4 text-gray-500 font-serif">
              {artist.compositions.map((composition, index) => (
                <li key={index} className="mb-2 text-md font-serif">{composition}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}