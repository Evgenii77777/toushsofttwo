import React, { useState } from "react";
import Counter from "./components/Counter/Counter";
import style from "./components/Counter/Counter.module.css";

const App = () => {
  const [values, setValues] = useState([]);

  const addCount = () => {
    const newValues = [...values];
    const newApliedVal = newValues.map((value) =>
      value % 2 === 0 ? (value += 1) : value
    );
    setValues([...newApliedVal, 0]);
  };

  const removeCount = () => {
    setValues([]);
  };

  const deleteCount = (index) => {
    const newArr = [...values];
    newArr.splice(index, 1);
    const newApliedVal = newArr.map((value) =>
      value % 2 !== 0 ? (value -= 1) : value
    );
    setValues(newApliedVal);
  };

  const totalCount = values.length;

  let total = 0;
  const totalValues = values.forEach((val) => {
    return console.log((total += val));
  });
  console.log(totalValues);

  const handleValue = (index, modifier) => {
    const newValues = [...values];
    if (modifier === "increment") {
      newValues[index] = newValues[index] + 1;
    } else if (modifier === "decr") {
      newValues[index] = Math.max(newValues[index] - 1, 0);
    } else if (modifier === "reset") {
      newValues[index] = 0;
    }
    setValues(newValues);
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
      <div className={style.wrapperText}>
        <h2>Всего сумма: {total}</h2>
      </div>
      <ul className={style.list}>
        {values.map((value, index) => (
          <li key={index}>
            <Counter
              onDeleteCount={deleteCount}
              value={value}
              handleValue={handleValue}
              index={index}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
