import './App.css';
import ParentState from './ParentState';
import ParentStateMemo from './ParentStateMemo';
import OwnState from './OwnState';
import OwnStateMemo from './OwnStateMemo';
import OwnStateMemo2 from './OwnStateMemo2';
import { useCallback, useState } from "react";

function App() {
  const [a, setA] = useState(false);
  const [b, setB] = useState(false);
  const [c, setC] = useState(false);
  const [d, setD] = useState(false);

  const toggleA = useCallback(() => {
    setA(!a);
  }, [a]);

  const toggleB = useCallback(() => {
    setB(!b);
  }, [b]);

  const toggleC = useCallback(() => {
    setC(!c);
  }, [c]);

  const toggleD = useCallback(() => {
    setD(!d);
  }, [d]);

  const toggleAll = () => {
    toggleA();
    toggleB();
    toggleC();
    toggleD();
  }

  const random = Math.random();

  return (
    <div className="App">
      <h3>Parent manages state</h3>
      <div className="row">
        <div className="item">
          <ParentState value={b} onToggle={() => { setB(!b) }} />

        </div>
        <div className="item">
          <ParentState value={a} onToggle={toggleA} />
          useCallback
        </div>
        <div className="item">
          <ParentStateMemo value={d} onToggle={() => setD(!d)} />
          Memoized
        </div>
        <div className="item">
          <ParentStateMemo value={c} onToggle={toggleC} />
          Memoized + useCallback
        </div>
      </div>

      <h3>Manage own state</h3>
      <div className="row">
        <div className="item">
          <OwnState />
        </div>
        <div className="item">
          <OwnStateMemo />
          Memoized
        </div>
      </div>

      <h3>With Random prop</h3>
      <div className="row">
        <div className="item">
          <OwnState random={random} />
        </div>
        <div className="item">
          <OwnStateMemo random={random} />
          Memoized
        </div>
        <div className="item">
          <OwnStateMemo2 random={random} />
          Memoized + ignore props
        </div>
      </div>
      <div className="row">
        <div className="item">
          <button onClick={toggleAll}>Toggle All</button></div>
      </div>
    </div>
  );
}

export default App;
