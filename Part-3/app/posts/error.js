'use client';

export default function Error({ error, reset }) {
  return (
    <div style={{ padding: '20px', border: '1px solid red', borderRadius: '8px', color: 'red' }}>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button 
        onClick={() => reset()}
        style={{ padding: '8px 16px', cursor: 'pointer' }}
      >
        Try Again
      </button>
    </div>
  );
}