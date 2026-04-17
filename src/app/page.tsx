"use client"; // Required for interactivity in Next.js App Router

import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [display, setDisplay] = useState("");

  // --- Math Logic ---
  const calculate = (expression: any) => {
    try {
      // Use Function constructor instead of eval for better React safety
      return String(new Function(`return ${expression}`)());
    } catch {
      return "Error";
    }
  };

  const fibonacci = (num: any) => {
    let n = parseInt(num);
    if (isNaN(n)) return "Error";
    if (n <= 1) return "1";
    let a = 1, b = 1, result = 0;
    for (let i = 2; i <= n; i++) {
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

  // --- Click Handler (Event Delegation) ---
  const handleButtonClick = (e: any) => {
    if (e.target.tagName !== 'BUTTON') return;
    const value = e.target.innerText;

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

  // --- Styles ---
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

      {/* Screen Area - Value is now linked to React State */}
      <textarea
        readOnly
        value={display}
        className="w-full h-[20vh] bg-[#1A161A] text-[#E0E0E0] text-[8rem] text-right font-['Digital'] p-5 rounded-[10px] shadow-[inset_0_4px_10px_rgba(0,0,0,0.5)] outline-none resize-none mb-[10px] overflow-hidden"
      />

      {/* Buttons Area - Using one onClick for the whole container */}
      <div
        onClick={handleButtonClick}
        className="flex w-full h-[75vh] gap-[10px] flex-grow"
      >
        <div className="grid grid-cols-3 grid-rows-4 gap-[10px] flex-[3]">
          <button className={numBtn}>1</button>
          <button className={numBtn}>2</button>
          <button className={numBtn}>3</button>
          <button className={numBtn}>4</button>
          <button className={numBtn}>5</button>
          <button className={numBtn}>6</button>
          <button className={numBtn}>7</button>
          <button className={numBtn}>8</button>
          <button className={numBtn}>9</button>
          <button className={numBtn}>0</button>
          <button className={clearBtn}>C</button>
          <button className={equalBtn}>=</button>
        </div>

        <div className="grid grid-cols-1 grid-rows-6 gap-[10px] flex-[1]">
          <button className={opBtn}>+</button>
          <button className={opBtn}>-</button>
          <button className={opBtn}>*</button>
          <button className={opBtn}>/</button>
          <button className={opBtn}>f</button>
          <button className={opBtn}>f!</button>
        </div>
      </div>
    </div>
  );
}