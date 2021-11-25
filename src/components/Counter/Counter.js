import React, { useState } from "react";
import style from "../Counter/Counter.module.css";

const Counter = ({ id, onDeleteCount }) => {
  const [value, setValue] = useState(0);
  const handleIncrement = () => setValue(value + 1);
  const handleDecrement = () => setValue(Math.max(value - 1, 0));
  const handleReset = () => setValue(0);

  return (
    <>
      <div>
        <div className={style.container}>
          <div className={style.wrapper}>{value}</div>
          {(value % 2 === 0 && (
            <div className={style.wraper}>Введено четное число</div>
          )) || <div className={style.wraper}>Введено нечетное число</div>}

          <div className={style.btnWrapper}>
            <button
              className={style.btn}
              tupe="button"
              onClick={handleDecrement}
            >
              -
            </button>
            <button
              className={style.btntwo}
              tupe="button"
              onClick={handleReset}
            >
              Reset
            </button>
            <button
              className={style.btn}
              tupe="button"
              onClick={handleIncrement}
            >
              +
            </button>
            <button
              className={style.btntwo}
              tupe="button"
              onClick={() => onDeleteCount(id)}
            >
              Удалить
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
