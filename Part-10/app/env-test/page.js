export default function EnvTestPage() {
  const isProd = process.env.NODE_ENV === 'production';

  return (
    <div style={{ padding: '20px' }}>
      <h1>Level 10: Deployment Readiness</h1>
      <p>Environment Mode: <strong>{process.env.NODE_ENV}</strong></p>
      <p>Status: {isProd ? '🚀 Ready for Production Deployment' : '🛠️ Running in Development'}</p>
    </div>
  );
}