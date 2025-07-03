import { use, useEffect } from 'react';
import { useState, UseEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  //Use effect
  useEffect(() => {
    document.title = `Count: ${count}`;
  });

  //Function to update count
  function addCount() {
    setCount(count + 1);
  }
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={addCount}>Add</button>
    </div>
  );
}

export default MyComponent;
