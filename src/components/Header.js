import React from "react";
import Form from "./Form";

const Header = ({ inputPoints, setPoints, inputPayer, setPayer, addTransaction }) => {

    return (
        <div className="App-header flex flex-row items-center">
            <img className='App-Fetch-Doggie basis-1/6 justify-start' src='/fetch-doggie.png' alt='Fetch Rewards Logo' />
            <h1 className="text-3xl font-bold basis-1/6">
                Hello Doggo!
            </h1>
            <div className="items-right basis-4/6">
                <Form
                    inputPoints={inputPoints}
                    setPoints={setPoints}
                    inputPayer={inputPayer}
                    setPayer={setPayer}
                    addTransaction={addTransaction}
                />
            </div>
      </div>

    );
  
}

export default Header;
