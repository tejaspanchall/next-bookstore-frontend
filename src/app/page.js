'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { JournalBookmark, Book, People, Laptop } from 'react-bootstrap-icons';

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[var(--color-secondary)] text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl font-bold mb-6">Welcome to BookCafe</h1>
            <p className="text-xl mb-8">Your digital library for educational resources. Discover, read, and learn with our extensive collection of books.</p>
            <button
              onClick={() => router.push('/catalog')}
              className="px-8 py-4 bg-[var(--color-bg-primary)] text-[var(--color-primary)] rounded-lg font-bold text-lg hover:bg-[var(--color-bg-secondary)] transition-colors shadow-lg"
            >
              Explore Our Catalog
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute transform rotate-6 bg-[var(--color-bg-primary)] rounded-lg shadow-xl p-4 w-64 h-80 z-10">
                <div className="h-48 bg-[var(--color-bg-secondary)] rounded mb-4"></div>
                <div className="h-4 bg-[var(--color-text-light)] rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-[var(--color-text-light)] rounded w-1/2"></div>
              </div>
              <div className="absolute transform -rotate-6 bg-[var(--color-bg-primary)] rounded-lg shadow-xl p-4 w-64 h-80">
                <div className="h-48 bg-[var(--color-bg-secondary)] rounded mb-4"></div>
                <div className="h-4 bg-[var(--color-text-light)] rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-[var(--color-text-light)] rounded w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[var(--color-bg-secondary)]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[var(--color-text-primary)]">Why Choose BookCafe?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[var(--color-bg-primary)] p-8 rounded-lg shadow-md text-center">
              <div className="text-[var(--color-primary)] text-4xl mb-4 flex justify-center">
                <Book />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[var(--color-text-primary)]">Extensive Collection</h3>
              <p className="text-[var(--color-text-secondary)]">Access thousands of educational books across various subjects and disciplines.</p>
            </div>
            
            <div className="bg-[var(--color-bg-primary)] p-8 rounded-lg shadow-md text-center">
              <div className="text-[var(--color-primary)] text-4xl mb-4 flex justify-center">
                <People />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[var(--color-text-primary)]">Community Learning</h3>
              <p className="text-[var(--color-text-secondary)]">Join a community of learners and educators sharing knowledge and resources.</p>
            </div>
            
            <div className="bg-[var(--color-bg-primary)] p-8 rounded-lg shadow-md text-center">
              <div className="text-[var(--color-primary)] text-4xl mb-4 flex justify-center">
                <Laptop />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[var(--color-text-primary)]">Digital Access</h3>
              <p className="text-[var(--color-text-secondary)]">Read anywhere, anytime with our digital platform optimized for all devices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-[var(--color-secondary)] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[rgba(255,255,255,0.1)] p-6 rounded-lg">
              <p className="italic mb-4">&quot;BookCafe has transformed how I access educational materials. The interface is intuitive and the collection is impressive.&quot;</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[var(--color-bg-primary)]"></div>
                <div className="ml-4">
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm opacity-75">Literature Student</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[rgba(255,255,255,0.1)] p-6 rounded-lg">
              <p className="italic mb-4">&quot;As an educator, I find BookCafe to be an invaluable resource for both myself and my students. The digital access makes learning accessible to everyone.&quot;</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[var(--color-bg-primary)]"></div>
                <div className="ml-4">
                  <p className="font-semibold">Dr. Michael Chen</p>
                  <p className="text-sm opacity-75">Professor of History</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-xl max-w-2xl mx-auto">Join our growing community of readers and educators who are discovering the power of digital learning.</p>
          </div>
        </div>
      </section>
    </main>
  );
}