import { useState } from "react";

import "./App.css";
import Counter from "./component/counter";

function App() {

  return (
    <>
      <div>
        <Counter count={0} />
      </div>
    </>
  );
}

export default App;
