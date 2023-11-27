import React, { useState } from 'react';
import SearchBar from './SearchBar';

const HeavyComponent = ({ onClick, title }) => {
  return (
    <>
      <h3>{title}</h3>
      <p>Some stuff here</p>
      <button className="button" onClick={onClick}>
        Done!
      </button>
    </>
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