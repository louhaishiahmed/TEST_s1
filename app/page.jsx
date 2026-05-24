'use client';

import Link from 'next/link';
import { Shield, Brain, Users, ArrowRight, CheckCircle, Zap, Bell } from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{
        background: 'radial-gradient(circle at center, #2D6A4F 0%, #1B4332 100%)'
      }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl sm:text-7xl font-bold text-white mb-4">
            Your voice, without your name.
          </h1>
          <p className="text-lg sm:text-xl text-gray-100 mb-8">
            Students and employees can report problems anonymously. Leadership will actually see them.
          </p>
          
          {/* Trust Badges */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8 text-sm text-gray-200">
            <div className="flex items-center justify-center gap-2">
              <span>🔒 Zero data collected</span>
            </div>
            <div className="hidden sm:block text-gray-300">|</div>
            <div className="flex items-center justify-center gap-2">
              <span>⚡ AI-analyzed instantly</span>
            </div>
            <div className="hidden sm:block text-gray-300">|</div>
            <div className="flex items-center justify-center gap-2">
              <span>👤 Seen only by leadership</span>
            </div>
          </div>
          
          <Link
            href="/submit"
            className="inline-block cursor-pointer bg-white hover:bg-gray-50 text-[#2D6A4F] font-bold py-3 px-8 rounded-lg transition-colors"
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
            <div className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-green-600 hover:shadow-lg hover:-translate-y-1 transition-all">
              <Shield className="w-12 h-12 text-[#2D6A4F] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Fully Anonymous
              </h3>
              <p className="text-gray-600">
                No name, no email, no login. Nothing that identifies you.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-blue-600 hover:shadow-lg hover:-translate-y-1 transition-all">
              <Brain className="w-12 h-12 text-[#2D6A4F] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                AI-Powered Analysis
              </h3>
              <p className="text-gray-600">
                Every submission is read, categorized, and prioritized automatically.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-purple-600 hover:shadow-lg hover:-translate-y-1 transition-all">
              <Users className="w-12 h-12 text-[#2D6A4F] mb-4" />
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

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-6">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center max-w-xs">
              <div className="relative mb-4">
                <div className="absolute -top-2 -right-2 bg-[#2D6A4F] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <CheckCircle className="w-16 h-16 text-[#2D6A4F]" />
              </div>
              <p className="text-lg font-semibold text-gray-900 mb-2">You write your concern</p>
              <p className="text-sm text-gray-600">Takes less than a minute. No account needed.</p>
            </div>

            {/* Arrow */}
            <div className="hidden md:block text-gray-300">
              <ArrowRight size={32} />
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center max-w-xs">
              <div className="relative mb-4">
                <div className="absolute -top-2 -right-2 bg-[#2D6A4F] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <Zap className="w-16 h-16 text-[#2D6A4F]" />
              </div>
              <p className="text-lg font-semibold text-gray-900 mb-2">AI reads and prioritizes</p>
              <p className="text-sm text-gray-600">Every submission is analyzed and scored instantly.</p>
            </div>

            {/* Arrow */}
            <div className="hidden md:block text-gray-300">
              <ArrowRight size={32} />
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center max-w-xs">
              <div className="relative mb-4">
                <div className="absolute -top-2 -right-2 bg-[#2D6A4F] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <Bell className="w-16 h-16 text-[#2D6A4F]" />
              </div>
              <p className="text-lg font-semibold text-gray-900 mb-2">Leadership is notified</p>
              <p className="text-sm text-gray-600">The right person sees the right issue at the right time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1B4332] text-white py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-lg font-bold">VoiceUp</span>
          <span className="text-sm text-gray-200">Giving every voice a destination.</span>
        </div>
      </footer>
    </>
  );
}
