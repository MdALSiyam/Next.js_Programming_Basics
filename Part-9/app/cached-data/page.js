import { unstable_cache } from 'next/cache';

// Cached server function
const getCachedStats = unstable_cache(
  async () => {
    // Simulating heavy database query
    return {
      activeUsers: 1420,
      generatedAt: new Date().toLocaleTimeString(),
    };
  },
  ['app-stats'], // Cache key
  { revalidate: 300 } // Cache for 5 minutes
);

export default async function CachedPage() {
  const stats = await getCachedStats();

  return (
    <div style={{ padding: '20px' }}>
      <h1>Level 9: Advanced Caching Strategy</h1>
      <p>Active Users: <strong>{stats.activeUsers}</strong></p>
      <p>Cache Generated At: <strong>{stats.generatedAt}</strong></p>
      <small>Data is cached on the server for 5 minutes.</small>
    </div>
  );
}