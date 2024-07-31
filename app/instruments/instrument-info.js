import instrumentsData from './instruments.json';

export default function InstrumentInfo({ selectedCategory, selectedInstrument }) {
  if (!selectedCategory || !selectedInstrument) {
    return <div className="text-center text-gray-500">Please select an instrument to see details.</div>;
  }

  const instrument = instrumentsData[selectedCategory][selectedInstrument];

  return (
    <div className="bg-white shadow-md p-6 rounded">
      <h2 className="text-2xl font-bold mb-4">{instrument.name}</h2>
      <img src={instrument.image} alt={instrument.name} className="w-full max-w-md rounded shadow-md mb-4" />
      <p className="text-base mb-4">{instrument.description}</p>
      <h3 className="text-xl font-bold mb-2">Notable Artists</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {instrument.artists.map((artist, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={artist.photo} alt={artist.name} className="w-32 h-32 rounded-full shadow-md mb-2" />
            <p className="text-center font-medium">{artist.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
