import { useEffect, useRef, useState } from 'react';
import { Building2, Users, TrendingUp, Shield } from 'lucide-react';

const AboutSection = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const timelineSteps = [
    {
      icon: Building2,
      title: "Healthcare Challenge",
      description: "Rising costs, preventable readmissions, Excess LOS and poor care coordination plagues our health systems.",
      stat: "70% of readmissions are preventable"
    },
    {
      icon: Users,
      title: "Our Vision",
      description: "Our vision is to democratize advanced healthcare analytics - making predictive, equitable insights available to every provider, from rural hospitals to large health systems.",
      stat: "Virtual twins for every patient"
    },
    {
      icon: TrendingUp,
      title: "Proven Innovation",
      description: "Leveraging AI and virtual twin technology to simulate care paths and predict outcomes.",
      stat: "91% model accuracy achieved"
    },
    {
      icon: Shield,
      title: "Trusted Expertise",
      description: "Holistic data integration | Explainable AI | Fairness audits | Patient engagement loops | Focus on underserved markets.",
      stat: "HIPAA compliant & SOC2 ready"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = parseInt(entry.target.getAttribute('data-step') || '0');
            setVisibleSteps(prev => [...new Set([...prev, stepIndex])]);
          }
        });
      },
      { threshold: 0.6 }
    );

    const stepElements = sectionRef.current?.querySelectorAll('.timeline-step');
    stepElements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-primary rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-emerald rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-navy mb-6">
            About <span className="text-primary">Conult Health</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Our Mission: Empower the entire healthcare ecosystem to deliver smarter, equitable, and preventive care by harnessing data.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-emerald to-navy rounded-full mx-auto" />
        </div>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Timeline Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
            {timelineSteps.map((step, index) => {
              const Icon = step.icon;
              const isVisible = visibleSteps.includes(index);
              
              return (
                <div
                  key={index}
                  data-step={index}
                  className={`timeline-step relative transition-all duration-700 delay-${index * 200} ${
                    isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'
                  }`}
                >
                  {/* Step Number & Icon */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center shadow-lg animate-tilt">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="glass rounded-xl p-6 hover:shadow-lg transition-all duration-300 animate-tilt">
                    <h3 className="text-xl font-semibold text-navy mb-3">{step.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{step.description}</p>
                    <div className="text-sm font-mono text-primary font-semibold bg-primary/10 rounded-lg px-3 py-2 inline-block">
                      {step.stat}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="glass rounded-2xl p-12 max-w-4xl mx-auto border border-primary/20">
            <blockquote className="text-2xl md:text-3xl font-semibold text-navy mb-4 italic">
              "Our vision is to democratize advanced healthcare analytics - making predictive, equitable insights available to every provider, from rural hospitals to large health systems."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;