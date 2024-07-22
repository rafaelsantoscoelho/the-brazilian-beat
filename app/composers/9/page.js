import ComposerDetails from "../composerdetails";
import composersData from "../composers.json";

export default function Page9() {
    return (
        <ComposerDetails composer={composersData[8]} />
    );
}