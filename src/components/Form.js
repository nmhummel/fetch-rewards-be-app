import React from "react";

const Form = ({ inputPoints, setPoints, inputPayer, setPayer, handleAddingTransactions }) => {
  let now = new Date();
  let convert = now.toISOString()
  const newTransaction = { payerCompany: inputPayer, points: inputPoints, timestamp: convert }

  const addTransaction = (e) => {
    e.preventDefault();
    if (inputPoints === "" || inputPayer === "") {
      alert("Please include both Company name and Points value.");
      return;
    }
    console.log("type", handleAddingTransactions)
    debugger
    handleAddingTransactions(newTransaction);
    setPoints("");
    setPayer("");

  }
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
