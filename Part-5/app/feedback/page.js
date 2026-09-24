import { revalidatePath } from 'next/cache';

// In-memory array to simulate a database store
const feedbackList = [];

export default async function FeedbackPage() {
  // Server Action function
  async function addFeedback(formData) {
    'use server';
    
    const name = formData.get('name');
    const comment = formData.get('comment');

    if (name && comment) {
      feedbackList.push({ id: Date.now(), name, comment });
      // Revalidate page data instantly
      revalidatePath('/Part-5/feedback');
    }
  }

  return (
    <div style={{ padding: '20px', maxWidth: '500px', fontFamily: 'sans-serif' }}>
      <h2>Submit Feedback (Server Actions)</h2>
      
      <form action={addFeedback} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          required 
          style={{ padding: '8px' }}
        />
        <textarea 
          name="comment" 
          placeholder="Your Feedback" 
          required 
          style={{ padding: '8px', minHeight: '80px' }}
        />
        <button type="submit" style={{ padding: '10px', cursor: 'pointer', background: '#0070f3', color: '#fff', border: 'none' }}>
          Submit Feedback
        </button>
      </form>

      <hr style={{ margin: '30px 0' }} />

      <h3>Recent Feedbacks ({feedbackList.length})</h3>
      <ul>
        {feedbackList.map((item) => (
          <li key={item.id} style={{ marginBottom: '10px' }}>
            <strong>{item.name}:</strong> {item.comment}
          </li>
        ))}
      </ul>
    </div>
  );
}