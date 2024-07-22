export default function ComposerDetails({ composer }) {
  const fmt_birthDate = composer.birthDate.substring(0, 4);
  const fmt_deathDate = composer.deathDate ? composer.deathDate.substring(0, 4) : "present";
  return (
    <div className="min-h-screen bg-gray-100 py-12 flex justify-center">
      <div className="max-w-5xl bg-white rounded-3xl shadow-md overflow-hidden p-12 flex flex-col md:flex-row">
        <div className="w-full md:w-2/5 flex flex-col items-center justify-center p-8">
          <div className="h-2/3 overflow-hidden rounded-3xl shadow-md">
            <img
              className="w-full h-full object-fit: cover rounded-3xl"
              src={composer.imageUrl2}
              alt={composer.name}
            />
          </div>
          <div className="mt-4 text-center md:text-left">
            <h2 className="text-3xl font-bold text-black mb-2">
              {composer.name}
            </h2>
            <p className="text-gray-500 text-md mb-4">
              {`${fmt_birthDate} - ${fmt_deathDate}`}
            </p>
            <div className="bg-gray-200 h-0.5 w-full mb-4"></div>
          </div>
        </div>
        <div className="w-full md:w-3/5 p-12">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-black mb-2">Biography</h2>
            <p className="text-gray-500">{composer.detailedBio}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-black mb-2">
              Famous Compositions
            </h2>
            <ul className="list-disc list-inside ml-4 text-gray-500">
              {composer.compositions.map((composition, index) => (
                <li key={index} className="mb-2 text-md">{composition}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}