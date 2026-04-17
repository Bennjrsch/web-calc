"use client";

import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [display, setDisplay] = useState("");

  const calculate = (expression: any) => {
    if (!expression || typeof expression !== "string") return "Error";

    try {
      const result = String(new Function(`return ${expression}`)());
      return String(result)
    } catch (err) {
      return "Error";
    }
  };

  const fibonacci = (num: any) => {
    let n = parseInt(num);
    if (isNaN(n) || n < 0) return "Error";

    if (n === 0) return "0";
    if (n === 1 || n === 2) return "1";

    let a = 1, b = 1, result = 0;
    for (let i = 3; i <= n; i++) {
      result = a + b;
      a = b;
      b = result;
    }
    return String(result);
  };

  const factorial = (num: any) => {
    let n = parseInt(num);
    if (isNaN(n) || n < 0) return "Error";
    if (n === 0) return "1";
    let res = 1;
    for (let i = 2; i <= n; i++) res *= i;
    return String(res);
  };

  const handleButtonClick = (value: string) => {
    if (value === '=') {
      setDisplay(calculate(display));
    } else if (value === 'C') {
      setDisplay("");
    } else if (value === 'f') {
      setDisplay(fibonacci(display));
    } else if (value === 'f!') {
      setDisplay(factorial(display));
    } else {
      setDisplay(prev => prev + value);
    }
  };

  const baseButton = "w-full h-full flex items-center justify-center rounded-[12px] text-[2rem] font-bold transition-all duration-100 active:translate-y-[4px] shadow-[0_6px_0_#1A161A] active:shadow-[0_2px_0_#1A161A]";
  const numBtn = `${baseButton} bg-[#3F373E] text-[#BDBDBD]`;
  const opBtn = `${baseButton} bg-[#373E4D] text-[#8EACCD]`;
  const clearBtn = `${baseButton} bg-[#4D3737] text-[#FF8A8A]`;
  const equalBtn = `${baseButton} bg-[#374D3C] text-[#95E1D3]`;

  return (
    <div className="w-screen h-screen bg-[#30292F] flex flex-col p-[10px] overflow-hidden">
      <Head>
        <title>Kalkulator</title>
      </Head>

      <textarea
        readOnly
        value={display}
        className="w-full h-[20vh] bg-[#1A161A] text-[#E0E0E0] text-[8rem] text-right font-['Digital'] p-5 rounded-[10px] shadow-[inset_0_4px_10px_rgba(0,0,0,0.5)] outline-none resize-none mb-[10px] overflow-hidden"
      />

      <div className="flex w-full h-[75vh] gap-[10px] flex-grow">
        <div className="grid grid-cols-3 grid-rows-4 gap-[10px] flex-[3]">
          <button className={numBtn} onClick={() => handleButtonClick('1')}>1</button>
          <button className={numBtn} onClick={() => handleButtonClick('2')}>2</button>
          <button className={numBtn} onClick={() => handleButtonClick('3')}>3</button>
          <button className={numBtn} onClick={() => handleButtonClick('4')}>4</button>
          <button className={numBtn} onClick={() => handleButtonClick('5')}>5</button>
          <button className={numBtn} onClick={() => handleButtonClick('6')}>6</button>
          <button className={numBtn} onClick={() => handleButtonClick('7')}>7</button>
          <button className={numBtn} onClick={() => handleButtonClick('8')}>8</button>
          <button className={numBtn} onClick={() => handleButtonClick('9')}>9</button>
          <button className={numBtn} onClick={() => handleButtonClick('0')}>0</button>
          <button className={clearBtn} onClick={() => handleButtonClick('C')}>C</button>
          <button className={equalBtn} onClick={() => handleButtonClick('=')}>=</button>
        </div>

        <div className="grid grid-cols-1 grid-rows-6 gap-[10px] flex-[1]">
          <button className={opBtn} onClick={() => handleButtonClick('+')}>+</button>
          <button className={opBtn} onClick={() => handleButtonClick('-')}>-</button>
          <button className={opBtn} onClick={() => handleButtonClick('*')}>*</button>
          <button className={opBtn} onClick={() => handleButtonClick('/')}>/</button>
          <button className={opBtn} onClick={() => handleButtonClick('f')}>f</button>
          <button className={opBtn} onClick={() => handleButtonClick('f!')}>f!</button>
        </div>
      </div>
    </div>
  );
}