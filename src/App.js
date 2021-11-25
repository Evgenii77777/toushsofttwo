import React, { useState } from "react";
import shortid from "shortid";
import Counter from "./components/Counter/Counter";
import style from "./components/Counter/Counter.module.css";

const App = () => {
  const [counts, setCounts] = useState([]);

  const addCount = () => {
    const count = {
      id: shortid.generate(),
    };
    setCounts((prevCounts) => [count, ...prevCounts]);
  };

  const deleteCount = (countId) => {
    setCounts((prevCount) => prevCount.filter((count) => count.id !== countId));
  };

  const totalCount = counts.length;

  const removeCount = () => {
    setCounts([]);
  };

  return (
    <div>
      <div className={style.container}>
        <button className={style.btn} type="button" onClick={addCount}>
          Add
        </button>
        <button className={style.btn} type="button" onClick={removeCount}>
          Remove
        </button>
      </div>

      <div className={style.wrapperText}>
        <h2>Всего счетчиков: {totalCount}</h2>
      </div>
      <ul className={style.list}>
        {counts.map(({ id }) => (
          <li key={id}>
            <Counter id={id} onDeleteCount={deleteCount} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
