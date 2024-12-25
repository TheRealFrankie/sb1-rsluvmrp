import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { TermsContent } from '@/components/terms/TermsContent';

export function TermsPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="pt-24 pb-16">
        <TermsContent />
      </main>
      <Footer />
    </div>
  );
}