import ComposerDetails from "../composerdetails";
import composersData from "../composers.json";

export default function Page10() {
    return (
        <ComposerDetails composer={composersData[9]} />
    );
}