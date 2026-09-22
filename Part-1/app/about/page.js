// app/about/page.js
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>About Us Page ℹ️</h1>
      <p>Next.js makes full-stack React development smooth and powerful.</p>
      
      <Link href="/">⬅️ Back to Home</Link>
    </main>
  );
}