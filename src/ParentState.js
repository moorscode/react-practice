const ParentState = ({ onToggle, value }) => {
    return (
        <div>
            <button onClick={onToggle}>Toggle</button><input type="checkbox" disabled checked={value ? 'checked' : ''} />
            <em>{parseInt(Math.random() * 1000, 10)}</em>
        </div>
    )
};

export default ParentState;