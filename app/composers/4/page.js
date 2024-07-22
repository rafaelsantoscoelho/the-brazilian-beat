import ComposerDetails from "../composerdetails";
import composersData from "../composers.json";

export default function Page4() {
    return (
        <ComposerDetails composer={composersData[3]} />
    );
}