import { TermsSection } from './TermsSection';
import { ScopeAndProvider } from './sections/ScopeAndProvider';
import { Services } from './sections/Services';
import { WebsiteUsage } from './sections/WebsiteUsage';
import { Registration } from './sections/Registration';
import { IntellectualProperty } from './sections/IntellectualProperty';
import { Liability } from './sections/Liability';
import { Privacy } from './sections/Privacy';
import { Changes } from './sections/Changes';
import { FinalProvisions } from './sections/FinalProvisions';

export function TermsContent() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-mono font-bold text-white mb-12 text-center">
        Terms of Service <span className="text-purple-400">(Nutzungsbedingungen)</span>
      </h1>
      
      <div className="space-y-12 bg-black/50 border border-purple-500/20 rounded-lg p-8">
        <p className="text-gray-300">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        
        <ScopeAndProvider />
        <Services />
        <WebsiteUsage />
        <Registration />
        <IntellectualProperty />
        <Liability />
        <Privacy />
        <Changes />
        <FinalProvisions />
      </div>
    </div>
  );
}