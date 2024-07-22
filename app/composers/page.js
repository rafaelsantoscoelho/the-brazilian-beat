"use client"

import ComposerCard from "./composercard";
import composersData from "./composers.json";


export default function ComposersPage() {
    return (
        <div className="container mx-auto p-4">
            <header className="text-center my-4">
                <h1 className="text-3xl font-bold">Choro Composers</h1>
            </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {composersData.map((composer) => (
              <ComposerCard key={composer.id} composer={composer}/>
            ))}
          </div>
        </div>
      );
}