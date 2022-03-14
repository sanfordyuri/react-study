import React, { useState } from "react";

function Example() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>Contador = {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Adicionar +1</button>
    </div>
  );
}

export default Example;
