'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2, Shield, Lock } from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function SubmitPage() {
  const router = useRouter();
  const [issue, setIssue] = useState('');
  const [email, setEmail] = useState('');
  const [privacyExpanded, setPrivacyExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate
    if (!issue.trim()) {
      return;
    }

    setIsLoading(true);

    // Simulate loading for 1.5 seconds
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Redirect to thank-you
    router.push('/thank-you');
  };

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-[#F8F7F4] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Green Protection Banner */}
          <div className="bg-[#D8F3DC] border-b border-green-200 px-4 sm:px-8 py-4 flex items-center gap-3">
            <Lock className="w-5 h-5 text-[#1B4332]" />
            <p className="text-sm font-medium text-[#1B4332]">
              Your identity is fully protected — we collect nothing that identifies you.
            </p>
          </div>

          <div className="p-4 sm:p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              <Shield className="w-8 h-8 text-[#2D6A4F]" />
              Submit a Concern
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Issue Textarea */}
              <div>
                <label htmlFor="issue" className="block text-sm font-medium text-gray-700 mb-2">
                  What is the issue?
                </label>
                <textarea
                  id="issue"
                  value={issue}
                  onChange={(e) => setIssue(e.target.value)}
                  placeholder="Describe the problem in your own words..."
                  required
                  maxLength="500"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent resize-none"
                  rows="6"
                />
                <p className="text-xs text-gray-500 mt-2">
                  {issue.length} / 500 characters
                </p>
              </div>

              {/* Optional Email Section */}
              <div className="pt-6 border-t border-gray-200">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Want to be notified when your issue is resolved? (Optional)
                </label>
                <p className="text-xs text-gray-500 mb-3">
                  Your email will never be shown to anyone — not the admin, not leadership. It stays encrypted in our system only.
                </p>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                />

                {/* Privacy Commitment */}
                <style>{`
                  .privacy-commitment {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.3s ease-in-out;
                  }
                  .privacy-commitment.expanded {
                    max-height: 300px;
                  }
                `}</style>
                <button
                  type="button"
                  onClick={() => setPrivacyExpanded(!privacyExpanded)}
                  className="mt-3 text-sm text-[#2D6A4F] hover:text-[#1B4332] font-medium transition-colors cursor-pointer"
                >
                  View our privacy commitment →
                </button>

                <div className={`privacy-commitment ${privacyExpanded ? 'expanded' : ''}`}>
                  <div className="mt-3 p-4 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-700 space-y-2">
                    <p>• We never collect your name, IP address, device, or location.</p>
                    <p>• If you provide your email, it is encrypted and used only to notify you. No one else sees it.</p>
                    <p>• Submissions containing threats, hate speech, or harmful content are automatically filtered and will not reach anyone.</p>
                    <p>• Your concern is reviewed by AI before it reaches leadership — individual identity is never exposed.</p>
                    <p>• You can submit without an email at any time.</p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading || !issue.trim()}
                className="w-full cursor-pointer bg-[#2D6A4F] hover:bg-[#1B4332] disabled:bg-gray-400 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit a Concern'
                )}
              </button>
            </form>

            {/* Privacy Disclaimer */}
            <p className="mt-8 text-sm text-gray-500 text-center">
              We never collect your name, email, IP address, or any information that could identify you.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
