// app/counter/page.js
'use client'; // This directive marks this file as a Client Component

import { useState } from 'react';

export default function CounterPage() {
  const [count, setCount] = useState(0);

  return (
    <main style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Interactive Counter (Client Component)</h1>
      <p>Current Count: <strong>{count}</strong></p>
      
      <button 
        onClick={() => setCount(count + 1)}
        style={{ padding: '8px 16px', cursor: 'pointer' }}
      >
        Increment +1
      </button>
    </main>
  );
}