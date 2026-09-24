// Dynamic Metadata Function for SEO
export async function generateMetadata({ params }) {
  const { id } = await params;
  return {
    title: `Post #${id} - Level 4`,
    description: `Detailed view for post number ${id}`,
  };
}

// Data Fetching with ISR (Revalidates every 60 seconds)
async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 60 }, // ISR: Regenerate page background after 60s
  });
  if (!res.ok) throw new Error('Post not found');
  return res.json();
}

export default async function PostPage({ params }) {
  const { id } = await params;
  const post = await getPost(id);

  return (
    <article style={{ padding: '20px', maxWidth: '600px', fontFamily: 'sans-serif' }}>
      <h1>{post.title}</h1>
      <p style={{ color: '#555', lineHeight: '1.6' }}>{post.body}</p>
      <small style={{ color: '#888' }}>Page ID: {id} | ISR Revalidation: 60s</small>
    </article>
  );
}