import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Counter from './Counter';
import { User, Stethoscope, Building, X, Play } from 'lucide-react';

const SolutionsSection = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const solutions = [
    {
      icon: User,
      title: "For Patients",
      description: "Personal health digital twin providing actionable insights for better health choices and outcomes.",
      metric: { value: 35, suffix: "%", label: "Engagement Lift" },
      color: "emerald",
      features: [
        "Personalized health predictions",
        "Risk factor identification", 
        "Care pathway optimization",
        "Real-time health monitoring"
      ],
      videoPlaceholder: "Patient journey simulation showing personalized care recommendations and risk predictions"
    },
    {
      icon: Stethoscope,
      title: "For Clinicians", 
      description: "Simulated care paths with outcome predictions and intelligent decision support for providers.",
      metric: { value: 25, suffix: "%", label: "Decision Time Reduction" },
      color: "primary",
      features: [
        "Predictive care modeling",
        "Clinical decision support",
        "Outcome forecasting", 
        "Treatment optimization"
      ],
      videoPlaceholder: "Clinical dashboard showing AI-powered treatment recommendations and outcome predictions"
    },
    {
      icon: Building,
      title: "For Insurers",
      description: "Population health insights, cost reduction strategies, and premium optimization through predictive analytics.", 
      metric: { value: 12, suffix: "%", label: "Medical Spend Reduction" },
      color: "navy",
      features: [
        "Population risk analysis",
        "Cost prediction modeling",
        "Claims optimization",
        "Premium strategy insights"
      ],
      videoPlaceholder: "Population health analytics showing cost reduction trends and risk stratification"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.getAttribute('data-card') || '0');
            setVisibleCards(prev => [...new Set([...prev, cardIndex])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const cardElements = sectionRef.current?.querySelectorAll('.solution-card');
    cardElements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: {
        bg: "bg-emerald/5",
        border: "border-emerald/20",
        icon: "text-emerald",
        iconBg: "bg-emerald/10",
        button: "bg-emerald hover:bg-emerald/90"
      },
      primary: {
        bg: "bg-primary/5", 
        border: "border-primary/20",
        icon: "text-primary",
        iconBg: "bg-primary/10",
        button: "bg-primary hover:bg-primary/90"
      },
      navy: {
        bg: "bg-navy/5",
        border: "border-navy/20", 
        icon: "text-navy",
        iconBg: "bg-navy/10",
        button: "bg-navy hover:bg-navy/90"
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="solutions" ref={sectionRef} className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-navy mb-6">
            Our <span className="text-primary">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming healthcare with AI-powered digital twins tailored for every stakeholder in the ecosystem.
          </p>
        </div>

        {/* Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            const isVisible = visibleCards.includes(index);
            const colorClasses = getColorClasses(solution.color);
            
            return (
              <div
                key={index}
                data-card={index}
                className={`solution-card group perspective-1000 transition-all duration-700 delay-${index * 200} ${
                  isVisible ? 'animate-scale-in opacity-100' : 'opacity-0 scale-95'
                }`}
              >
                <div className={`
                  relative p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer preserve-3d
                  ${colorClasses.bg} ${colorClasses.border}
                  hover:shadow-xl hover:-translate-y-2 hover:rotate-1 animate-tilt
                  ${selectedCard === index ? 'shadow-2xl -translate-y-2' : ''}
                `}>
                  {/* Icon */}
                  <div className={`w-16 h-16 ${colorClasses.iconBg} rounded-2xl flex items-center justify-center mb-6 animate-float`}>
                    <Icon className={`w-8 h-8 ${colorClasses.icon}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-navy mb-4">{solution.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{solution.description}</p>

                  {/* Metric */}
                  <div className="mb-6">
                    <div className={`text-3xl font-bold ${colorClasses.icon} mb-2`}>
                      <Counter 
                        start={0} 
                        end={solution.metric.value} 
                        suffix={solution.metric.suffix}
                        triggerOnView={isVisible}
                      />
                    </div>
                    <div className="text-sm text-muted-foreground">{solution.metric.label}</div>
                  </div>

                  {/* CTA */}
                  <Button
                    variant="outline"
                    onClick={() => setSelectedCard(selectedCard === index ? null : index)}
                    className="w-full group-hover:shadow-md transition-all"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    View Demo
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal for Solution Details */}
      {selectedCard !== null && (
        <div className="fixed inset-0 bg-navy/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-background rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative animate-scale-in">
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 ${getColorClasses(solutions[selectedCard].color).iconBg} rounded-xl flex items-center justify-center mr-4`}>
                  {(() => {
                    const Icon = solutions[selectedCard].icon;
                    return <Icon className={`w-6 h-6 ${getColorClasses(solutions[selectedCard].color).icon}`} />;
                  })()}
                </div>
                <h3 className="text-3xl font-bold text-navy">{solutions[selectedCard].title}</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Video Placeholder */}
                <div className="bg-muted/50 rounded-xl aspect-video flex items-center justify-center">
                  <div className="text-center p-8">
                    <Play className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">{solutions[selectedCard].videoPlaceholder}</p>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-navy">Key Features</h4>
                  <ul className="space-y-3">
                    {solutions[selectedCard].features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className={`w-6 h-6 ${getColorClasses(solutions[selectedCard].color).iconBg} rounded-full flex items-center justify-center mr-3`}>
                          <div className={`w-2 h-2 ${getColorClasses(solutions[selectedCard].color).icon} rounded-full`} />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Button variant="hero" size="lg" className="w-full">
                      Request Demo for {solutions[selectedCard].title}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SolutionsSection;