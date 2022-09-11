import React from "react";

const CurrentPoints = ({ title, handleCurrentPointsClick }) => {
  return (
    <div className="w-full px-4 bg-white rounded-md shadow-card">
      <h3 className="py-4 text-lg font-bold text-hub-blue">{title}</h3>
      <div className="grid grid-cols-2 grid-rows-2 mx-auto gap-x-2 gap-y-4">
        <div
          onClick={() => {
            handleCurrentPointsClick('SOUTH - W');
          }}
          className="w-full leading-6 cursor-pointer"
        >
          <div className="w-full square-box">
            <div className="square-box-content">
              <img className="object-cover object-center w-full h-full" alt='hi' src='hi.png' />
            </div>
          </div>
          <p className="pt-1.5 font-normal text-xs truncate">Austin, TX</p>
        </div>
        <div
          onClick={() => {
            handleCurrentPointsClick('CALIFORNIA');
          }}
          className="w-full leading-6 cursor-pointer"
        >
          <div className="w-full square-box">
            <div className="square-box-content">
            <img className="object-cover object-center w-full h-full" alt='hi' src='hi.png' />
            </div>
          </div>
          <p className="pt-1.5 font-normal text-xs truncate">Los Angeles, CA</p>
        </div>
        <div
          onClick={() => {
            handleCurrentPointsClick('MID ATLANTIC');
          }}
          className="w-full leading-6 cursor-pointer"
        >
          <div className="w-full square-box">
            <div className="square-box-content">
            <img className="object-cover object-center w-full h-full" alt='hi' src='hi.png' />
            </div>
          </div>
          <p className="pt-1.5 font-normal text-xs truncate">New York, NY</p>
        </div>
        <div
          onClick={() => {
            handleCurrentPointsClick('SOUTH - E');
          }}
          className="w-full leading-6 cursor-pointer"
        >
          <div className="w-full square-box">
            <div className="square-box-content">
            <img className="object-cover object-center w-full h-full" alt='hi' src='hi.png' />
            </div>
          </div>
          <p className="pt-1.5 font-normal text-xs truncate">Orlando, FL</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentPoints;
