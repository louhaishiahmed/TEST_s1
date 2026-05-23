'use client';

import Link from 'next/link';
import { Shield, Brain, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Your voice, without your name.
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8">
            Students and employees can report problems anonymously. Leadership will actually see them.
          </p>
          <Link
            href="/submit"
            className="inline-block bg-brand hover:bg-accent text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Submit a Concern
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <Shield className="w-12 h-12 text-brand mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Fully Anonymous
              </h3>
              <p className="text-gray-600">
                No name, no email, no login. Nothing that identifies you.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <Brain className="w-12 h-12 text-brand mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                AI-Powered Analysis
              </h3>
              <p className="text-gray-600">
                Every submission is read, categorized, and prioritized automatically.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <Users className="w-12 h-12 text-brand mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Reaches Decision-Makers
              </h3>
              <p className="text-gray-600">
                Insights go directly to the Dean or Director, not a suggestion box.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
