import ComposerDetails from "../composerdetails";
import composersData from "../composers.json";

export default function Page3() {
    return (
        <ComposerDetails composer={composersData[2]} />
    );
}