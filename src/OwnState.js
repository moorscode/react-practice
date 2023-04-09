import { useState, useCallback } from "react";

const OwnState = () => {
    const [a, setA] = useState(false);

    const toggle = useCallback(() => {
        setA(!a);
    }, [a]);

    return (
        <div>
            <button onClick={toggle}>Toggle</button><input type="checkbox" disabled checked={a ? 'checked' : ''} />
            <em>{parseInt(Math.random() * 1000, 10)}</em>
        </div>
    )
};

export default OwnState;