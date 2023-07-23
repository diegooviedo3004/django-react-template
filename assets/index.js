import React from 'react';
import ReactDOM from "react-dom";

function Hello() {
  const [count, setCount] = React.useState(0);

  const handleUp = () => {
    setCount(count + 1);
  }

  return (
    <>
      {count}
      <button onClick={handleUp}>UP!</button>
    </>
  )
}

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
);