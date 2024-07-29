import ArtistDetails from "../artistdetails";
import artistsData from "../artists.json";

export default function ArtistPage({params}) {
    return (
        <ArtistDetails artist={artistsData[params.id - 1]} />
    );
}