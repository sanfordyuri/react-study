import React, { useEffect, useState } from "react";

function Example() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `Você clicou ${counter} vezes`
  })

  return (
    <div>
      <p>Contador = {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Adicionar +1</button>
    </div>
  );
}

export default Example;
