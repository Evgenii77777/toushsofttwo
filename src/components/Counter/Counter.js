import React from "react";
import style from "../Counter/Counter.module.css";

const Counter = ({ onDeleteCount, value, handleValue, index }) => {
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
              onClick={() => handleValue(index, "decr")}
            >
              -
            </button>
            <button
              className={style.btntwo}
              tupe="button"
              onClick={() => handleValue(index, "reset")}
            >
              Reset
            </button>
            <button
              className={style.btn}
              tupe="button"
              onClick={() => handleValue(index, "increment")}
            >
              +
            </button>
            <button
              className={style.btntwo}
              tupe="button"
              onClick={() => onDeleteCount(index)}
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
