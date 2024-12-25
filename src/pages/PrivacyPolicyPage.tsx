import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PrivacyPolicyContent } from '@/components/privacy/PrivacyPolicyContent';

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="pt-24 pb-16">
        <PrivacyPolicyContent />
      </main>
      <Footer />
    </div>
  );
}