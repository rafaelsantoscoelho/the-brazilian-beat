"use client"


export default function InstrumentSelector({
  selectedCategory,
  setSelectedCategory,
  selectedInstrument,
  setSelectedInstrument
})
{
    const categoriesDefaultInstrumentsMap = {"strings":"cavaquinho", "woodwinds":"flute", "percussion":"pandeiro", "keyboard":"piano"};

    const categoriesMap = [{"name": "strings", "id": 1}, {"name": "keyboard", "id": 2}, {"name": "percussion", "id": 3}, {"name": "woodwinds", "id": 4}];
    const categoriesToInstrumentsMap = {"strings" : ["cavaquinho", "violao de 7 cordas"], "percussion" : ["pandeiro"], "woodwinds" : ["flute", "saxophone"], "keyboard" : ["accordion", "piano"]};


    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
        setSelectedInstrument(categoriesDefaultInstrumentsMap[event.target.value]);
    };

  const handleInstrumentChange = (event) => {
    setSelectedInstrument(event.target.value);
  };

  return (
    <div className="flex flex-col space-y-4">
      <select
        className="bg-gray-200 p-2 rounded"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="keyboard">Select Category</option>
        {categoriesMap.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
          </option>
        ))}
      </select>

      <select
        className="bg-gray-200 p-2 rounded"
        value={selectedInstrument}
        onChange={handleInstrumentChange}
        disabled={!selectedCategory}
      >
        <option value={categoriesToInstrumentsMap[selectedCategory][0]}>Select Instrument</option>
        {selectedCategory && categoriesToInstrumentsMap[selectedCategory].map((instrument) => (
          <option key={instrument} value={instrument}>
            {instrument.charAt(0).toUpperCase() + instrument.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}
