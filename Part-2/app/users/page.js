// Server Component - Async data fetching
async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store' // Dynamic fetching (SSR behavior)
  });
  if (!res.ok) throw new Error('Failed to fetch data');
  return res.json();
}

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div>
      <h1>Users List (Fetched from Server)</h1>
      <ul style={{ listStyleType: 'square' }}>
        {users.map((user) => (
          <li key={user.id} style={{ marginBottom: '10px' }}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}