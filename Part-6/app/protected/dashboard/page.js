export default function ProtectedDashboard() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', border: '2px solid green' }}>
      <h1>🔒 Protected Dashboard</h1>
      <p>Welcome! You can only see this page if you are authenticated via Middleware.</p>
    </div>
  );
}