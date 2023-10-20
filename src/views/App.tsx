import { useEffect } from "react";
import Counter from "../components/Counter/Counter";
import { useGetNameQuery } from "../api/apiSlice";

const App = () => {
  const { data, isLoading } = useGetNameQuery({ id: 15 });

  useEffect(() => {
    if (isLoading) return;

    console.log(data);
  }, [isLoading, data]);

  return (
    <>
      <h1>Vite + React</h1>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Counter />
    </>
  );
};

export default App;
