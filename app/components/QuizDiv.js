import React from "react";
import { useState } from "react";

const QuizDiv = () => {
  return (
    <>
      <h1 className="text-white font-semibold text-2xl mb-1">Quiz</h1>
      <div className="p-12 backdrop-blur-lg border border-2 rounded-xl">
        <h1 className="text-5xl text-white font-semibold">Vraag 1</h1>
      </div>
      <div className="mt-12 grid grid-cols-2 gap-x-10 gap-y-6">
        <button
          onClick={onClickCoder}
          className="p-10 text-2xl min-w-64 bg-blue-500 rounded-lg text-white hover:bg-blue-700 transition-colors duration-200 ease-in-out font-semibold"
        >
          A
        </button>
        <button
          onClick={onClickAnimator}
          className="p-10 text-2xl min-w-64 bg-blue-500 rounded-lg text-white hover:bg-blue-700 transition-colors duration-200 ease-in-out font-semibold"
        >
          B
        </button>
        <button
          onClick={onClickVormgever}
          className="p-10 text-2xl min-w-64 bg-blue-500 rounded-lg text-white hover:bg-blue-700 transition-colors duration-200 ease-in-out font-semibold"
        >
          C
        </button>
        <button
          onClick={onClickArtist}
          className="p-10 text-2xl min-w-64 bg-blue-500 rounded-lg text-white hover:bg-blue-700 transition-colors duration-200 ease-in-out font-semibold"
        >
          D
        </button>
      </div>
    </>
  );
};

export default QuizDiv;
