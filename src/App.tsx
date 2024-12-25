import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { LegalNoticePage } from './pages/LegalNoticePage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { CustomCursor } from './components/cursor/CustomCursor';
import { ScrollToTop } from './components/navigation/ScrollToTop';
import { CookieBanner } from './components/cookies/CookieBanner';
import { ChatbotContainer } from './components/chat/ChatbotContainer';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-black cursor-none">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/legal" element={<LegalNoticePage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
        <CustomCursor />
        <CookieBanner />
        <ChatbotContainer />
      </div>
    </Router>
  );
}