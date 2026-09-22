// app/blog/[id]/page.js

export default async function BlogPost({ params }) {
  // In Next.js App Router, params are resolved asynchronously
  const { id } = await params;

  return (
    <main style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Blog Post ID: {id}</h1>
      <p>This page dynamically renders based on the URL parameter.</p>
    </main>
  );
}