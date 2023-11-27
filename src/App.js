import React, { useState } from 'react';

const HeavyComponent = ({ onClick, title }) => {
  return (
    <>
      <h3>{title}</h3>
      <p>Some other stuff here</p>
      <button className="button" onClick={onClick}>
        Done!
      </button>
    </>
  );
};

const HeavyComponentMemo = React.memo(HeavyComponent, (before, after) => {
  return before.title === after.title;
});

export default function App() {
  const [value, setValue] = useState("");

  const onClick = () => {
    // submit stuff to the backend
    console.log(value);
  };

  return (
    <div className="App">
      <h1>Closures example</h1>

      <>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        <HeavyComponentMemo title="Welcome closures" onClick={onClick} />
      </>
    </div>
  );
}
