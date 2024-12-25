import { ContactForm } from './ContactForm';

export function ContactSection() {
  return (
    <section className="py-24" id="contact">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-mono font-bold text-white mb-4">
            Jetzt Starten_
          </h2>
          <p className="text-gray-400">
            Bereit, Ihr Unternehmen mit KI zu transformieren? Lassen Sie uns besprechen, wie wir helfen können.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}