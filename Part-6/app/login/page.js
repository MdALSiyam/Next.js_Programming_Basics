'use client';

import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    // Setting dummy auth cookie
    document.cookie = 'auth_token=valid_token; path=/';
    router.push('/Part-6/protected/dashboard');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Login Page</h1>
      <p>Click below to simulate login and gain access to protected routes.</p>
      <button 
        onClick={handleLogin}
        style={{ padding: '10px 20px', background: 'green', color: '#fff', border: 'none', cursor: 'pointer' }}
      >
        Simulate Login
      </button>
    </div>
  );
}