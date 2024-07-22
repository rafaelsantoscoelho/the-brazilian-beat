import ComposerDetails from "../composerdetails";
import composersData from "../composers.json";

export default function Page12() {
    return (
        <ComposerDetails composer={composersData[11]} />
    );
}