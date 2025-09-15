import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LandingPage } from './components/LandingPage';
import { CareerGuidancePage } from './components/CareerGuidancePage';
import { RoadmapGeneratorPage } from './components/RoadmapGeneratorPage';
import { InterviewPage } from './components/InterviewPage';
import { FAQPage } from './components/FAQPage';
import { InsightsPage } from './components/InsightsPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col" style={{ background: 'var(--background)' }}>
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/career-guidance" element={<CareerGuidancePage />} />
            <Route path="/roadmap-generator" element={<RoadmapGeneratorPage />} />
            <Route path="/interview-prep" element={<InterviewPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Catch-all route for unmatched paths */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}