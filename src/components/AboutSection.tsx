import { useEffect, useRef, useState } from 'react';
import { Building2, Users, TrendingUp, Shield } from 'lucide-react';

const AboutSection = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const timelineSteps = [
    {
      icon: Building2,
      title: "The Healthcare Challenge",
      description: "Rising costs, preventable readmissions, and poor care coordination plague health systems worldwide.",
      stat: "30% of readmissions are preventable"
    },
    {
      icon: Users,
      title: "Our Vision",
      description: "We believe in shifting healthcare from reactive to predictive, preventive, and personalized care.",
      stat: "Digital twins for every patient"
    },
    {
      icon: TrendingUp,
      title: "Proven Innovation",
      description: "Leveraging AI and digital twin technology to simulate care paths and predict outcomes.",
      stat: "91% model accuracy achieved"
    },
    {
      icon: Shield,
      title: "Trusted Expertise",
      description: "Founded by leaders from Cardinal Health, JPMorgan, HDAI, and Archway Health.",
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
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're on a mission to transform healthcare delivery through intelligent digital twins and predictive analytics.
          </p>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-primary via-emerald to-navy rounded-full" />
          
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
                    {/* Timeline Dot */}
                    <div className="hidden md:block absolute top-24 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg" />
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
              "Empowering health systems to shift from reactive to predictive, preventive, and personalized care."
            </blockquote>
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm">Cardinal Health</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <div className="w-8 h-8 bg-emerald/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-emerald" />
                </div>
                <span className="text-sm">JPMorgan</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <div className="w-8 h-8 bg-navy/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-4 h-4 text-navy" />
                </div>
                <span className="text-sm">HDAI</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <div className="w-8 h-8 bg-slate/10 rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 text-slate" />
                </div>
                <span className="text-sm">Archway Health</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;