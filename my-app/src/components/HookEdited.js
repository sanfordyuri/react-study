import { useCallback, useState } from "react";

function HookEdited() {
  const [isEnable, setStatus] = useToggle();

  return (
    <div>
      <button onClick={setStatus}>Change Status</button>
      Status: {isEnable ? "Ativo" : "Inativo"}
    </div>
  );
}

const useToggle = (isActive = false) => {
  const [state, setState] = useState(isActive);

  const toggle = useCallback(() => setState((state) => !state), []);

  return [state, toggle];
};

export default HookEdited;
