import { useEffect, useRef, useState } from 'react';
import Counter from './Counter';
import { Database, Activity, Users, Shield } from 'lucide-react';

const ImpactSection = () => {
  const [isPaused, setIsPaused] = useState(false);
  const marqueeRef = useRef<HTMLDivElement>(null);

  const metrics = [
    {
      icon: Users,
      label: "Members Modeled",
      value: "250K+",
      description: "Healthcare members with active digital twins"
    },
    {
      icon: Activity,
      label: "Conditions Tracked",
      value: "50+",
      description: "Medical conditions monitored and predicted"
    },
    {
      icon: Database,
      label: "Data Points Processed",
      value: "120M+",
      description: "Healthcare events analyzed and modeled"
    },
    {
      icon: Shield,
      label: "Interoperability",
      value: "FHIR/HL7",
      description: "Full compatibility with healthcare standards"
    },
    {
      icon: Users,
      label: "Accuracy Rate",
      value: "91%",
      description: "AI model prediction accuracy achieved"
    },
    {
      icon: Activity,
      label: "Cost Reduction",
      value: "$15M+",
      description: "Total healthcare costs saved to date"
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
            Real <span className="text-emerald-light">Impact</span> Metrics
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
                <Counter start={0} end={99} suffix=".9%" />
              </div>
              <div className="text-sm text-primary-foreground/70">System Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-light mb-2">
                <Counter start={0} end={24} suffix="/7" />
              </div>
              <div className="text-sm text-primary-foreground/70">Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-light mb-2">
                <Counter start={0} end={256} suffix="-bit" />
              </div>
              <div className="text-sm text-primary-foreground/70">Encryption</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-light mb-2">
                <Counter start={0} end={100} suffix="%" />
              </div>
              <div className="text-sm text-primary-foreground/70">HIPAA Compliant</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;