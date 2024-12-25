import { useState } from 'react';
import { ChevronDown, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useNavigateToRegister } from '@/hooks/useNavigateToRegister';

interface SolutionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  metrics: Array<{
    value: string;
    label: string;
  }>;
  features: string[];
}

export function SolutionCard({ 
  icon: Icon, 
  title, 
  description, 
  metrics,
  features 
}: SolutionCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigateToRegister = useNavigateToRegister();

  return (
    <div className={cn(
      "group bg-black/50 border border-purple-500/20 rounded-lg p-8",
      "transition-all duration-300 ease-in-out",
      "hover:border-purple-500/40",
      isExpanded ? "md:row-span-2" : ""
    )}>
      <div className="flex flex-col h-full">
        <div className="mb-6">
          <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-purple-400" />
          </div>
          <h3 className="text-2xl font-mono text-white mb-2">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-purple-400">{metric.value}</div>
              <div className="text-sm text-gray-400">{metric.label}</div>
            </div>
          ))}
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center text-purple-400 hover:text-purple-300 transition-colors font-mono mb-4"
        >
          Funktionen anzeigen
          <ChevronDown className={cn(
            "ml-2 w-4 h-4 transition-transform duration-300",
            isExpanded ? "rotate-180" : ""
          )} />
        </button>

        <div className={cn(
          "grid gap-4 transition-all duration-300 ease-in-out",
          isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}>
          <div className="overflow-hidden">
            <ul className="space-y-2 mb-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>

            <button 
              onClick={navigateToRegister}
              className="w-full px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 rounded font-mono transition-colors"
            >
              Jetzt starten
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}