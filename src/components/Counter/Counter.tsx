import { useState } from "react";
import { StyledButton } from "./Counter.style";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <StyledButton onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </StyledButton>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  );
};

export default Counter;
