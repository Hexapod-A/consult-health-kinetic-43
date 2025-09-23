import { useEffect, useRef, useState } from 'react';
import Counter from './Counter';
import { Database, Activity, Users, Shield } from 'lucide-react';

const ImpactSection = () => {
  const [isPaused, setIsPaused] = useState(false);
  const marqueeRef = useRef<HTMLDivElement>(null);

  const metrics = [
    {
      icon: Users,
      label: "10% reduction in preventable readmissions",
      value: "$2.3M",
      description: "Annual savings for mid-sized hospital"
    },
    {
      icon: Activity,
      label: "Readmission penalties avoided",
      value: "70%",
      description: "Can be avoided with better performance"
    },
    {
      icon: Database,
      label: "Members modeled",
      value: "30MM",
      description: "From initial 250k member baseline"
    },
    {
      icon: Shield,
      label: "SDoH integration impact",
      value: "Reduces bias",
      description: "Improves model recall and equity"
    },
    {
      icon: Users,
      label: "Break-even target",
      value: "Year 3",
      description: "With 35+ enterprise customers"
    },
    {
      icon: Activity,
      label: "Shared savings optimization",
      value: "ACO Focus",
      description: "Maximizing value-based care outcomes"
    }
  ];

  useEffect(() => {
    if (marqueeRef.current && !isPaused) {
      const marquee = marqueeRef.current;
      let animationId: number;
      
      const animate = () => {
        if (marquee.scrollLeft >= marquee.scrollWidth / 2) {
          marquee.scrollLeft = 0;
        } else {
          marquee.scrollLeft += 0.5;
        }
        animationId = requestAnimationFrame(animate);
      };
      
      animationId = requestAnimationFrame(animate);
      
      return () => cancelAnimationFrame(animationId);
    }
  }, [isPaused]);

  return (
    <section id="impact" className="py-16 bg-navy text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:60px_60px]" />
      </div>

      <div className="relative z-10">
        <div className="text-center mb-12 px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Impact We're <span className="text-emerald-light">Designing For</span>
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Measurable results driving healthcare transformation across the ecosystem.
          </p>
        </div>

        {/* Scrolling Metrics Band */}
        <div 
          ref={marqueeRef}
          className="flex space-x-12 overflow-hidden whitespace-nowrap"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            maskImage: 'linear-gradient(to right, transparent, white 10%, white 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, white 10%, white 90%, transparent)'
          }}
        >
          {/* Duplicate metrics for seamless loop */}
          {[...metrics, ...metrics].map((metric, index) => {
            const Icon = metric.icon;
            
            return (
              <div
                key={index}
                className="flex-shrink-0 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20 min-w-[320px] animate-tilt hover:bg-primary-foreground/15 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-emerald-light/20 rounded-xl flex items-center justify-center mr-4">
                    <Icon className="w-6 h-6 text-emerald-light" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-emerald-light font-mono">
                      {metric.value}
                    </div>
                    <div className="text-sm text-primary-foreground/70">{metric.label}</div>
                  </div>
                </div>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  {metric.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Stats */}
        <div className="container mx-auto px-6 mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-light mb-2">
                Better
              </div>
              <div className="text-sm text-primary-foreground/70">Health tracking with consistency</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-light mb-2">
                Network
              </div>
              <div className="text-sm text-primary-foreground/70">Optimizations for insurers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-light mb-2">
                Member
              </div>
              <div className="text-sm text-primary-foreground/70">Satisfaction improvements</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-light mb-2">
                Premium
              </div>
              <div className="text-sm text-primary-foreground/70">Quality enhancements</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;