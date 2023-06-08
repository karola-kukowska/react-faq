import { useState } from "react";
import Questions from "./components/Questions";
import data from "./data";

const App = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <Questions questions={questions} />
    </main>
  );
};
export default App;
