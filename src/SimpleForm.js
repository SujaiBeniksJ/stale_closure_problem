import React, { useState } from 'react';
import SearchBar from './SearchBar';

const HeavyComponent = ({ onClick, title }) => {
  return (
    <div className="heavy">
      <h3>{title}</h3>
      <p>This is a heavy component</p>
      <p>Click below button to log the input value.</p>
      <button className="button" onClick={onClick}>
        Done!
      </button>
    </div>
  );
};

const HeavyComponentMemo = React.memo(HeavyComponent, (before, after) => {
  return before.title === after.title;
});

function SimpleForm() {
  const [input, setInput] = useState();

  const onClick = () => {
    // submit stuff to the backend
    console.log(input);
  };

  return (
    <div className="App">
      <h1>Stale Closure Problem</h1>

      <>
        <SearchBar value={input} onChange={(value) => setInput(value)} />
        <HeavyComponentMemo title="Stale Closure" onClick={onClick} />
      </>
    </div>
  );
}

export default SimpleForm;