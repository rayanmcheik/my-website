'use client';
import { useRouter } from 'next/navigation';

export default function OrderButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push('/Visionpage/page.tsx')}
      className="p-2 text-black rounded-lg bg-white border-2 border-b-black hover:bg-black hover:text-white"
    >
      Order Now
    </button>
  );
}
