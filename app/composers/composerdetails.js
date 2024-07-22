export default function ComposerDetails({composer}) {

    return (
            <div className="min-h-screen bg-gray-100 p-6">
              <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <img className="h-48 w-full object-cover md:h-full md:w-48" src={composer.imageUrl2} alt={composer.name} />
                  </div>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Composer</div>
                    <h1 className="block mt-1 text-lg leading-tight font-medium text-black">{composer.name}</h1>
                    <p className="mt-2 text-gray-500">
                      {composer.detailedBio}
                    </p>
                    <div className="mt-4">
                      <h2 className="text-xl font-semibold">Famous Compositions</h2>
                      <ul className="list-disc list-inside ml-4 mt-2 text-gray-500">
                        <li>Composition 1</li>
                        <li>Composition 2</li>
                        <li>Composition 3</li>
                        <li>Composition 4</li>
                      </ul>
                    </div>
                    <div className="mt-4">
                      <h2 className="text-xl font-semibold">Listen on YouTube</h2>
                      <div className="flex flex-col mt-2 space-y-2">
                        <a href="https://www.youtube.com/watch?v=EGWg4YpS1ls" className="text-indigo-600 hover:underline">Video 1</a>
                        <a href="https://www.youtube.com/watch?v=hXKqlokiFzs" className="text-indigo-600 hover:underline">Video 2</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
}