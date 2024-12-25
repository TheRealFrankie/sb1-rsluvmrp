import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { LegalNoticeContent } from '@/components/legal/LegalNoticeContent';

export function LegalNoticePage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="pt-24 pb-16">
        <LegalNoticeContent />
      </main>
      <Footer />
    </div>
  );
}