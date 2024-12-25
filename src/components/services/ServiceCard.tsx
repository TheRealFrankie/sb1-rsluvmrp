import { useState } from 'react';
import { ChevronDown, Check, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useScrollToContact } from '@/hooks/useScrollToContact';
import type { Benefit } from '@/types/services';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  brief: string;
  description: string;
  benefits: Benefit[];
}

export function ServiceCard({ 
  icon: Icon, 
  title, 
  brief, 
  description, 
  benefits 
}: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const scrollToContact = useScrollToContact();

  return (
    <div className={cn(
      "bg-black/50 border border-purple-500/20 rounded-lg p-6",
      "transition-all duration-300 ease-in-out",
      "hover:border-purple-500/40",
      isExpanded ? "md:row-span-2" : ""
    )}>
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <Icon className="w-8 h-8 text-purple-400" />
        </div>
        <h3 className="text-xl font-mono text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{brief}</p>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center text-purple-400 hover:text-purple-300 transition-colors font-mono mb-4"
        >
          Discover How It Works
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
            <p className="text-gray-400 mb-4">{description}</p>
            
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="mt-1 flex-shrink-0">
                    <Check className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-mono">{benefit.title}</h4>
                    <p className="text-gray-400 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={scrollToContact}
              className="mt-6 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 rounded font-mono transition-colors"
            >
              Jetzt starten
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}