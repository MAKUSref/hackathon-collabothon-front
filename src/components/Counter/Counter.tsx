import { useState } from "react";
import { StyledButton } from "./Counter.style";
import Button from '@mui/material/Button';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <Button variant="contained">btn from mui</Button>
      
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
