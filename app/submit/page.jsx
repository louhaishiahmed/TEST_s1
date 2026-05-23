'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function SubmitPage() {
  const router = useRouter();
  const [issue, setIssue] = useState('');
  const [category, setCategory] = useState('');
  const [severity, setSeverity] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate
    if (!issue.trim() || !category || !severity) {
      return;
    }

    setIsLoading(true);

    // Simulate loading for 1.5 seconds
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Redirect to thank-you
    router.push('/thank-you');
  };

  const severityOptions = ['Low', 'Medium', 'Urgent'];

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-4 sm:p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Submit a Concern</h1>

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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent resize-none"
                rows="6"
              />
            </div>

            {/* Category Dropdown */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent bg-white"
              >
                <option value="">Select a category</option>
                <option value="Academic">Academic</option>
                <option value="Facilities">Facilities</option>
                <option value="Conduct">Conduct</option>
                <option value="Safety">Safety</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Severity Pills */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Severity
              </label>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {severityOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setSeverity(option)}
                    className={`px-6 py-2 rounded-full font-medium transition-colors ${
                      severity === option
                        ? 'bg-accent text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || !issue.trim() || !category || !severity}
              className="w-full bg-brand hover:bg-accent disabled:bg-gray-400 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit'
              )}
            </button>
          </form>

          {/* Privacy Disclaimer */}
          <p className="mt-8 text-sm text-gray-500 text-center">
            We never collect your name, email, IP address, or any information that could identify you.
          </p>
        </div>
      </div>
    </>
  );
}
