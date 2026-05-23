'use client';

import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <CheckCircle className="w-20 h-20 text-accent mx-auto mb-6" />
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Concern submitted
        </h1>
        
        <p className="text-lg text-gray-600 mb-8">
          Your concern has been received. It will be analyzed and sent to leadership within 24 hours. You cannot be identified from this submission.
        </p>
        
        <Link
          href="/"
          className="inline-block bg-brand hover:bg-accent text-white font-bold py-3 px-8 rounded-lg transition-colors"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
