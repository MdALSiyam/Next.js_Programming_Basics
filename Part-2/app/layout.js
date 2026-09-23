import './globals.css';

export const metadata = {
  title: 'Level 2 - Next.js Basics',
  description: 'Learning Layouts and Data Fetching',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'sans-serif', margin: 0, padding: 0 }}>
        <header style={{ padding: '1rem', background: '#333', color: '#fff' }}>
          <h2>My Next.js App (Level 2)</h2>
          <nav style={{ display: 'flex', gap: '15px' }}>
            <a href="/Part-2" style={{ color: '#fff' }}>Home</a>
            <a href="/Part-2/dashboard" style={{ color: '#fff' }}>Dashboard</a>
            <a href="/Part-2/users" style={{ color: '#fff' }}>Users (Data Fetch)</a>
          </nav>
        </header>
        
        <main style={{ padding: '20px', minHeight: '80vh' }}>
          {children}
        </main>

        <footer style={{ padding: '1rem', background: '#f1f1f1', textAlign: 'center' }}>
          <p>© 2026 Level 2 Learning</p>
        </footer>
      </body>
    </html>
  );
}