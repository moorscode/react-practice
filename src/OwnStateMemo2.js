import { memo } from "react";
import OwnState from "./OwnState";

const OwnStateMemo2 = memo(OwnState, (prevProps, nextProps ) => {
    return true;
});

export default OwnStateMemo2;
