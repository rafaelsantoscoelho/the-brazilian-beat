import ComposerDetails from "../composerdetails";
import composersData from "../composers.json";

export default function Page7() {
    return (
        <ComposerDetails composer={composersData[6]} />
    );
}