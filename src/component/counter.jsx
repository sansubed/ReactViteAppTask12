import styles from "./counter.module.css";
import React, { useState } from "react";

/*2. functional component: Counter()
input parameter: props -> (count is used to retrieve the property of the object props)
output: html returning the useState variable 'currentState' based on the increment and 
        the decrement.

*/

export default function Counter(props) {
  const [currentCount, setCurrentCount] = useState(props.count);

  return (
    <>
      <div className={styles.body}>
        <h1>Press increment or decrement:</h1>
        <button
          onClick={function () {
            return setCurrentCount(currentCount + 1);
          }}
        >
          Increment
        </button>
      </div>
      <br />
      <br />

      <div>
        <button
          onClick={function () {
            return setCurrentCount(currentCount - 1);
          }}
        >
          Decrement
        </button>
        <br />
        <br />
        <div className={styles.maincontent}>
          <div className={styles.result}>Result: {currentCount}</div>
        </div>
      </div>
    </>
  );
}
