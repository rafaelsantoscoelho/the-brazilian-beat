import Link from "next/link";

export default function ComposerCard({composer}) {
    const fmt_birthDate = composer.birthDate.substring(0, 4);
    const fmt_deathDate = composer.deathDate ? composer.deathDate.substring(0, 4) : "present";

    return (
        <Link href="./composers/1/" className="border p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="flex flex-col items-center">
                <img src={composer.imageUrl1} alt={composer.name} className="w-32 h-32 object-cover rounded-full mb-4 border-2" />
                <h2 className="text-xl font-semibold text-center">{composer.name}</h2>
                <p className="text-gray-600 text-center">{fmt_birthDate} - {fmt_deathDate}</p>
            </div>
        </Link>
    );
}