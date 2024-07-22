import ComposerDetails from "../composerdetails";
import composersData from "../composers.json";

export default function Page11() {
    return (
        <ComposerDetails composer={composersData[10]} />
    );
}