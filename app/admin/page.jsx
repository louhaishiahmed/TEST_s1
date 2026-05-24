'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { submissions } from '@/lib/demoData';
import { Sparkles, AlertCircle, FileText, Lock, AlertTriangle, TrendingUp, Download } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function AdminPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [resolvedIssues, setResolvedIssues] = useState({});
  
  // Compute stats
  const totalSubmissions = submissions.length;
  const openIssues = submissions.filter(s => s.status === 'Open' && !resolvedIssues[s.id]).length;
  const safetyFlags = submissions.filter(s => s.safety_flag === true).length;
  const averageUrgency = (
    submissions.reduce((sum, s) => sum + s.urgency, 0) / submissions.length
  ).toFixed(1);

  const categories = ['All', 'Academic', 'Facilities', 'Conduct', 'Safety', 'Other'];

  // Filter and sort submissions
  const filteredSubmissions = (
    activeFilter === 'All'
      ? submissions
      : submissions.filter(s => s.category === activeFilter)
  ).sort((a, b) => b.urgency - a.urgency);

  // Category badge colors
  const categoryColors = {
    Academic: 'bg-blue-100 text-blue-800',
    Facilities: 'bg-orange-100 text-orange-800',
    Conduct: 'bg-purple-100 text-purple-800',
    Safety: 'bg-red-100 text-red-800',
    Other: 'bg-gray-100 text-gray-800'
  };

  // Urgency dot and color
  const getUrgencyColor = (urgency) => {
    if (urgency <= 4) return 'text-green-500';
    if (urgency <= 7) return 'text-amber-500';
    return 'text-red-500';
  };

  // Urgency border color
  const getUrgencyBorderColor = (urgency) => {
    if (urgency <= 4) return 'border-l-green-500';
    if (urgency <= 7) return 'border-l-amber-500';
    return 'border-l-red-500';
  };

  // Urgency background tint
  const getUrgencyBgTint = (urgency) => {
    if (urgency <= 4) return 'bg-green-50';
    if (urgency <= 7) return 'bg-amber-50';
    return 'bg-red-50';
  };

  // Chart data - submissions per category
  const categoryData = [
    { name: 'Academic', count: submissions.filter(s => s.category === 'Academic').length },
    { name: 'Facilities', count: submissions.filter(s => s.category === 'Facilities').length },
    { name: 'Conduct', count: submissions.filter(s => s.category === 'Conduct').length },
    { name: 'Safety', count: submissions.filter(s => s.category === 'Safety').length },
    { name: 'Other', count: submissions.filter(s => s.category === 'Other').length }
  ];

  // Chart data - submission volume by week
  const weeklyData = [
    { week: 'Week 1', submissions: 2 },
    { week: 'Week 2', submissions: 4 },
    { week: 'Week 3', submissions: 3 },
    { week: 'Week 4', submissions: 5 }
  ];

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
              <p className="text-sm text-gray-600">Asia Pacific University · Week of 24 May 2026 · Last updated today</p>
            </div>
            <button className="flex cursor-pointer items-center gap-2 px-4 py-2 bg-white border border-[#2D6A4F] text-[#2D6A4F] rounded-lg font-medium hover:bg-gray-50 transition-colors">
              <Download className="w-4 h-4" />
              Export Report
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Total Submissions Card */}
            <div className="bg-[#2D6A4F] rounded-lg shadow-sm p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-green-100 mb-2">Total Submissions</p>
                  <p className="text-4xl font-bold">{totalSubmissions}</p>
                </div>
                <FileText className="w-12 h-12 text-green-200" />
              </div>
            </div>

            {/* Open Issues Card */}
            <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-amber-400">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-2">Open Issues</p>
                  <p className="text-4xl font-bold text-gray-900">{openIssues}</p>
                </div>
                <AlertCircle className="w-12 h-12 text-amber-500" />
              </div>
            </div>

            {/* Safety Flags Card */}
            <div className={`bg-white rounded-lg shadow-sm p-6 border-l-4 ${safetyFlags > 0 ? 'border-red-500' : 'border-gray-300'}`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-2">Safety Flags</p>
                  <p className={`text-4xl font-bold ${safetyFlags > 0 ? 'text-red-600' : 'text-gray-500'}`}>{safetyFlags}</p>
                </div>
                <AlertTriangle className={`w-12 h-12 ${safetyFlags > 0 ? 'text-red-500' : 'text-gray-400'}`} />
              </div>
            </div>

            {/* Average Urgency Card */}
            <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-blue-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-2">Average Urgency</p>
                  <p className="text-4xl font-bold text-gray-900">{averageUrgency}</p>
                </div>
                <TrendingUp className="w-12 h-12 text-blue-500" />
              </div>
            </div>
          </div>

          <div className="mt-8 bg-lightgreen rounded-lg p-6">
            <style>{`
              @keyframes pulse {
                0%, 100% {
                  opacity: 1;
                }
                50% {
                  opacity: 0.5;
                }
              }
              .pulse-dot {
                animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
              }
            `}</style>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-brand" />
              <h2 className="text-lg font-bold text-gray-900">AI Weekly Digest</h2>
              <div className="w-2 h-2 bg-green-500 rounded-full pulse-dot" />
            </div>
            <p className="text-gray-700 mb-4">
              This week's top concern is classroom overcrowding in the Engineering block, reported across 6 separate submissions. Two safety-related issues require immediate attention from Security. Conduct complaints have increased 40% compared to last week.
            </p>
            <p className="text-sm text-gray-600">
              Generated by AI — updated every Monday
            </p>
          </div>

          {/* Filter Bar */}
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`cursor-pointer px-4 py-2 rounded-full font-medium transition-colors ${
                  activeFilter === category
                    ? 'bg-brand text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Issue Feed */}
          <div className="mt-8 space-y-4">
            {filteredSubmissions.map((submission) => {
              const isResolved = resolvedIssues[submission.id];
              return (
                <div key={submission.id} className={`rounded-lg shadow-sm p-6 border-l-4 ${getUrgencyBorderColor(submission.urgency)} ${getUrgencyBgTint(submission.urgency)}`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[submission.category]}`}>
                        {submission.category}
                      </span>
                      {submission.safety_flag && (
                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          Safety Alert
                        </span>
                      )}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      isResolved
                        ? 'bg-green-100 text-green-800'
                        : submission.status === 'Open'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {isResolved ? 'Resolved' : submission.status}
                    </span>
                  </div>

                  <p className="text-gray-700 mb-3">{submission.summary}</p>

                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-gray-600">Urgency</span>
                      <span className="text-xs font-bold text-gray-700">{submission.urgency}/10</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all ${
                          submission.urgency <= 4
                            ? 'bg-green-500'
                            : submission.urgency <= 7
                            ? 'bg-amber-500'
                            : 'bg-red-500'
                        }`}
                        style={{ width: `${(submission.urgency / 10) * 100}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{submission.date}</span>
                    {submission.status === 'Open' && !isResolved && (
                      <button
                        onClick={() => setResolvedIssues({ ...resolvedIssues, [submission.id]: true })}
                        className="cursor-pointer px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded transition-colors"
                      >
                        Mark as Resolved
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Trends Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Trends this month</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Category Bar Chart */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Submissions by Category</h3>
                <ResponsiveContainer width="100%" height={380}>
                  <BarChart data={categoryData} layout="vertical" margin={{ left: 140, right: 30, top: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" allowDecimals={false} />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip cursor={{ fill: 'rgba(0, 0, 0, 0.1)' }} />
                    <Legend />
                    <Bar dataKey="count" fill="#2D6A4F" radius={[0, 4, 4, 0]} name="Submissions" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Weekly Line Chart */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Submission Volume by Week</h3>
                <ResponsiveContainer width="100%" height={380}>
                  <AreaChart data={weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" />
                    <YAxis allowDecimals={false} domain={[0, 'auto']} />
                    <Tooltip cursor={{ fill: 'rgba(0, 0, 0, 0.1)' }} />
                    <Legend />
                    <Area type="monotone" dataKey="submissions" stroke="#2D6A4F" fill="#2D6A4F" fillOpacity={0.1} strokeWidth={2} dot={{ fill: '#2D6A4F', r: 5 }} activeDot={{ r: 7 }} name="Submissions" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
