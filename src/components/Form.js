import React from "react";

const Form = ({ inputPoints, setPoints, inputPayer, setPayer, addTransaction }) => {

  return (
    <div className="form flex flex-row">
      <input
        type="text"
        className="input px-2 mx-2 text-black text-lg w-1/2"
        placeholder={"Enter Payer Company Here"}
        value={inputPayer}
        onChange={e => setPayer(e.target.value)}

      />

      <input
        type="text"
        className="input px-2 mx-2 text-black text-lg"
        placeholder={"Enter Points Here"}
        value={inputPoints}
        onChange={e => setPoints(e.target.value)}
      />
      <button onClick={addTransaction} className="submit mx-2 px-2 bg-black border-2 text-xl">
        Submit
      </button>
    </div>
  );
};

export default Form;
