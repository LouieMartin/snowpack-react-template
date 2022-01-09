import React from 'react';
import { createState, useState } from '@hookstate/core';
import './App.scss';

const globalCount = createState(0);

setInterval(() => globalCount.set((n) => n + 1), 3000);

export const App = () => {
  const count = useState(globalCount);
  const increment = () => count.set((n) => n + 1);
  const decrement = () => count.set((n) => n - 1);

  return (
    <div className="flex flex-col justify-center items-center h-screen text-gray-900">
      <h1 className="font-bold text-6xl">Count {count.get()}</h1>
      <button
        className="border border-gray-900 p-3 rounded-full w-52 mt-5"
        onClick={increment}
      >
        Increment
      </button>
      <button
        className="border border-gray-900 p-3 rounded-full w-52 mt-5"
        onClick={decrement}
      >
        Decrement
      </button>
    </div>
  );
};
