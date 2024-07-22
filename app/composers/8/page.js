import ComposerDetails from "../composerdetails";
import composersData from "../composers.json";

export default function Page8() {
    return (
        <ComposerDetails composer={composersData[7]} />
    );
}