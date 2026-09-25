import { prisma } from '@/Part-8/lib/prisma';
import { revalidatePath } from 'next/cache';

export default async function PrismaUsersPage() {
  const users = await prisma.user.findMany();

  async function createUser(formData) {
    'use server';
    const name = formData.get('name');
    const email = formData.get('email');

    if (email) {
      await prisma.user.create({
        data: { name, email },
      });
      revalidatePath('/Part-8/users');
    }
  }

  return (
    <div style={{ padding: '20px', maxWidth: '500px' }}>
      <h2>Prisma + Next.js Server Actions</h2>
      
      <form action={createUser} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input name="name" placeholder="User Name" required style={{ padding: '8px' }} />
        <input name="email" type="email" placeholder="User Email" required style={{ padding: '8px' }} />
        <button type="submit" style={{ padding: '10px', background: '#0070f3', color: '#fff', border: 'none' }}>
          Add User to Database
        </button>
      </form>

      <hr style={{ margin: '20px 0' }} />

      <h3>Registered Users</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
}