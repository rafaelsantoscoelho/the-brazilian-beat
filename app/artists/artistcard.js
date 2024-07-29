import Link from "next/link";

export default function ArtistCard({artist}) {
    const fmt_birthDate = artist.birthDate.substring(0, 4);
    const fmt_deathDate = artist.deathDate ? artist.deathDate.substring(0, 4) : "present";
    const fmt_href = "./artists/" + artist.id; 

    return (
        <Link href={fmt_href} className="border p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="flex flex-col items-center">
                <img src={artist.imageUrl1} alt={artist.name} className="w-32 h-32 object-cover rounded-full mb-4 border-2" />
                <h2 className="text-xl font-bold text-center bg-green-700 text-white py-1 px-3 rounded">
                    {artist.name}
                </h2>
            </div>
        </Link>
    );
}