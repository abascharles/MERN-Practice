import { use, useEffect } from 'react';
import { useState, UseEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('green');
  //Use effect
  useEffect(() => {
    document.title = `Count: ${count} ${color}`;

    //clean up code
    return () => {};
  }, [count]);

  //Function to update count
  function addCount() {
    setCount(count + 1);
  }

  function changeColor() {
    setColor(c => (c === 'green' ? 'red' : 'green'));
  }
  return (
    <div>
      <p style={{ color: color }}>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default MyComponent;
