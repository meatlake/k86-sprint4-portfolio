"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { quizQuestions } from "../quizQuestions";

const page = () => {
  const [countCoder, setCountCoder] = useState(0);
  const [countAnimator, setCountAnimator] = useState(0);
  const [countArtist, setCountArtist] = useState(0);
  const [countVormgever, setCountVormgever] = useState(0);

  const [question, setQuestion] = useState(0);
  let questionNumber = 0;

  let vormgeverTotal = countVormgever;
  let animatorTotal = countAnimator;
  let artistTotal = countArtist;
  let coderTotal = countCoder;

  const onClickCoder = () => {
    setCountCoder(countCoder + 1);
    setQuestion(question + 1);
  };

  const onClickAnimator = () => {
    setCountAnimator(countAnimator + 1);
    setQuestion(question + 1);
  };

  const onClickArtist = () => {
    setCountArtist(countArtist + 1);
    setQuestion(question + 1);
  };

  const onClickVormgever = () => {
    setCountVormgever(countVormgever + 1);
    setQuestion(question + 1);
  };

  return (
    <div className="absolute top-0 left-0 flex flex-col justify-between py-12 px-4 items-center w-screen h-screen bg-bg-image bg-cover bg-no-repeat">
      <Link
        className="absolute top-10 left-10 bg-white px-6 py-2 rounded-full border-2 border-transparent text-blue-700 font-semibold text-xl hover:bg-blue-700 hover:text-white hover:border-2 hover:border-white"
        href="/"
      >
        Go back
      </Link>
      <div>
        <h1 className="font-semibold text-white mb-4 text-2xl">
          Jij bent een:
        </h1>
        <ul className="flex flex-wrap gap-8 mb-28 text-white">
          <li className="flex flex-col items-center text-xl bg-[#8BBC3F] font-semibold border border-2 rounded-xl p-4 min-w-36">
            Vormgever
            <span className="text-3xl font-semibold">{vormgeverTotal}</span>
          </li>
          <li className="flex flex-col items-center text-xl bg-[#DFA22B] font-semibold border border-2 rounded-xl p-4 min-w-36">
            Animator
            <span className="text-3xl font-medium">{animatorTotal}</span>
          </li>
          <li className="flex flex-col items-center text-xl bg-[#70629C] font-semibold border border-2 rounded-xl p-4 min-w-36">
            3D Artist<span className="text-3xl font-medium">{artistTotal}</span>
          </li>
          <li className="flex flex-col items-center text-xl bg-[#E4513B] font-semibold border border-2 rounded-xl p-4 min-w-36">
            Coder<span className="text-3xl font-medium">{coderTotal}</span>
          </li>
        </ul>
      </div>
      <div className="p-12 backdrop-blur-lg border border-2 rounded-xl">
        <h1 className="text-5xl text-white font-semibold">
          {quizQuestions[questionNumber].question}
        </h1>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-x-10 gap-y-6">
        <button
          onClick={onClickCoder}
          className="p-10 text-2xl min-w-64 bg-blue-500 rounded-lg text-white hover:bg-blue-700 transition-colors duration-200 ease-in-out font-semibold"
        >
          {quizQuestions[questionNumber].answers[0].content}
        </button>
        <button
          onClick={onClickAnimator}
          className="p-10 text-2xl min-w-64 bg-blue-500 rounded-lg text-white hover:bg-blue-700 transition-colors duration-200 ease-in-out font-semibold"
        >
          {quizQuestions[questionNumber].answers[1].content}
        </button>
        <button
          onClick={onClickVormgever}
          className="p-10 text-2xl min-w-64 bg-blue-500 rounded-lg text-white hover:bg-blue-700 transition-colors duration-200 ease-in-out font-semibold"
        >
          {quizQuestions[questionNumber].answers[2].content}
        </button>
        <button
          onClick={onClickArtist}
          className="p-10 text-2xl min-w-64 bg-blue-500 rounded-lg text-white hover:bg-blue-700 transition-colors duration-200 ease-in-out font-semibold"
        >
          {quizQuestions[questionNumber].answers[3].content}
        </button>
      </div>
    </div>
  );
};

export default page;
