import ComposerDetails from "../composerdetails";
import composersData from "../composers.json";

export default function Page6() {
    return (
        <ComposerDetails composer={composersData[5]} />
    );
}