import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function OptimizedPage() {
  return (
    <div className={inter.className} style={{ padding: '20px' }}>
      <h1>Level 7: Image & Font Optimization</h1>
      <p>This paragraph uses Google Font (Inter) zero-CLS optimization.</p>
      
      {/* Next.js Image component handles automatic WebP conversion & responsive resizing */}
      <Image 
        src="https://images.unsplash.com/photo-1518770660439-4636190af475"
        alt="Tech Image"
        width={600}
        height={400}
        priority // Preloads image for better LCP
        style={{ borderRadius: '8px', objectFit: 'cover' }}
      />
    </div>
  );
}