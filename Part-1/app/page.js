// app/page.js
import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Welcome to Next.js Level 1</h1>
      <p>This is the Home Page.</p>
      
      <Link href="/about">Go to About Page ➡️</Link>
    </main>
  );
}
