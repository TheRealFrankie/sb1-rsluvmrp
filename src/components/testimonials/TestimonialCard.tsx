import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  company: string;
  content: string;
  stats?: Array<{
    value: string;
    label: string;
  }>;
}

export function TestimonialCard({ name, company, content, stats }: TestimonialCardProps) {
  return (
    <div className="relative bg-black/50 border border-purple-500/20 rounded-lg p-8 transition-all duration-300 hover:border-purple-500/40">
      <Quote className="absolute top-6 right-6 w-8 h-8 text-purple-500/20" />
      
      <div className="space-y-6">
        <p className="text-gray-300 relative z-10">{content}</p>
        
        {stats && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-4 border-t border-purple-500/20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-xl font-bold text-purple-400">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
        
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
            <span className="text-xl font-bold text-white">
              {name.charAt(0)}
            </span>
          </div>
          <div>
            <div className="font-mono text-white">{name}</div>
            <div className="text-sm text-gray-400">{company}</div>
          </div>
        </div>
      </div>
    </div>
  );
}