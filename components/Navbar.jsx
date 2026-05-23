'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="font-bold text-2xl text-brand">
            VoiceUp
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-6">
            <Link
              href="/submit"
              className="text-gray-700 hover:text-brand transition-colors"
            >
              Submit a Concern
            </Link>
            <Link
              href="/admin"
              className="text-gray-700 hover:text-brand transition-colors"
            >
              Admin
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-gray-800 transition-all ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-gray-800 transition-all ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-gray-800 transition-all ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/submit"
              className="block text-gray-700 hover:text-brand transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Submit a Concern
            </Link>
            <Link
              href="/admin"
              className="block text-gray-700 hover:text-brand transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Admin
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
