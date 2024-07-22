import ComposerDetails from "../composerdetails";
import composersData from "../composers.json";

export default function Page1() {
    return (
        <ComposerDetails composer={composersData[0]} />
    );
}