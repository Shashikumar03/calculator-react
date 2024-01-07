import React, { useState } from "react";

function Form() {
  const [value, setValue] = useState("");
  function handleForm(e) {
    e.preventDefault();
  }

  function cal(e) {
    try {
      setValue(eval(value).toString());
    } catch (error) {
      setValue(error);
    }
  }

  function handleInput() {}
  return (
    <>
      <form action="" onSubmit={handleForm}>
        <div className="form-container">
          <div className="display">
            <input
              type="text"
              placeholder="0"
              value={value}
              onChange={handleInput}
              readOnly
            />
          </div>
          <div className="button">
            <button onClick={(e) => setValue(value + e.target.value)} value={7}>
              7
            </button>
            <button onClick={(e) => setValue(value + e.target.value)} value={8}>
              8
            </button>
            <button onClick={(e) => setValue(value + e.target.value)} value={9}>
              9
            </button>
            <button
              onClick={(e) => setValue(value + e.target.value)}
              value={"/"}
            >
              /
            </button>
            <button onClick={(e) => setValue(value + e.target.value)} value={4}>
              4
            </button>
            <button onClick={(e) => setValue(value + e.target.value)} value={5}>
              5
            </button>
            <button onClick={(e) => setValue(value + e.target.value)} value={5}>
              6
            </button>
            <button
              onClick={(e) => setValue(value + e.target.value)}
              value={"-"}
            >
              -
            </button>
            <button onClick={(e) => setValue(value + e.target.value)} value={1}>
              1
            </button>
            <button onClick={(e) => setValue(value + e.target.value)} value={2}>
              2
            </button>
            <button onClick={(e) => setValue(value + e.target.value)} value={3}>
              3
            </button>
            <button
              onClick={(e) => setValue(value + e.target.value)}
              value={"*"}
            >
              *
            </button>
            <button onClick={(e) => setValue(value + e.target.value)} value={0}>
              0
            </button>
            <button
              onClick={(e) => setValue(value + e.target.value)}
              value={"."}
            >
              .
            </button>
            <button className="equal" onClick={cal} value={"="}>
              =
            </button>
            <button
              onClick={(e) => setValue(value + e.target.value)}
              value={"+"}
              className="plus"
            >
              +
            </button>

            <button onClick={(e) => setValue("")}>ce</button>
            <button
              onClick={(e) => setValue(value.substring(0, value.length - 1))}
              value={"+"}
            >
              del
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
