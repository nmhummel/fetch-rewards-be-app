import React from "react";

const Form = ({ inputPoints, setPoints, inputPayer, setPayer, handleSubmit }) => {
  return (
    <div className="form flex flex-row">
      <input
        value={inputPayer}
        onChange={e => setPayer(e.target.value)}
        className="input px-2"
        placeholder={"Enter Payer Company Here"}
      />

      <input
        value={inputPoints}
        onChange={e => setPoints(e.target.value)}
        className="input px-2"
        placeholder={"Enter Points Here"}
      />
      <button onClick={handleSubmit} className="submit">
        Submit
      </button>
    </div>
  );
};

export default Form;
