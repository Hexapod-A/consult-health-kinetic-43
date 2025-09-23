import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Counter from './Counter';
import { User, Stethoscope, Building, X, ChevronRight, Heart, Users, TrendingUp, Pill } from 'lucide-react';

const SolutionsSection = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const organizationSolutions = [
    {
      icon: Building,
      title: "For Payers",
      subtitle: "Population Health Intelligence to Optimize Spend",
      description: "AI-driven analytics uncover cost drivers, stratify risk, and enable predictive care management — helping payers reduce avoidable utilization and improve member health.",
      color: "teal",
      features: [
        "Predictive analytics for high-cost members",
        "Utilization trend analysis & leakage detection", 
        "Preventive intervention recommendations",
        "Risk adjustment and premium optimization support"
      ]
    },
    {
      icon: Users,
      title: "For ACOs",
      subtitle: "Maximize Shared Savings with Proactive Insights",
      description: "Conult's platform simulates care pathways, identifies quality gaps, and enables smarter care coordination to meet MSSP and value-based care benchmarks.",
      color: "orange",
      features: [
        "Simulated care pathways for cost & outcome forecasting",
        "Early identification of high-risk populations",
        "Quality score improvement insights (HEDIS, STAR)",
        "Shared savings impact modeling & reporting"
      ]
    },
    {
      icon: TrendingUp,
      title: "For Health Systems",
      subtitle: "Enterprise-Wide Care Optimization",
      description: "Drive system-wide efficiencies by aligning care teams, reducing unwarranted variation, and providing real-time operational intelligence to leadership.",
      color: "primary",
      features: [
        "Real-time operational dashboards",
        "Variation reduction analytics",
        "Service line profitability analysis", 
        "Capacity and throughput optimization"
      ]
    },
    {
      icon: Pill,
      title: "For Pharmaceuticals",
      subtitle: "Evidence Generation and Patient Journey Simulation",
      description: "Leverage AI to model therapy impact, predict adherence challenges, and generate real-world evidence for value-based contracting and clinical trial design.",
      color: "navy",
      features: [
        "Patient cohort simulation for therapy outcomes",
        "Adherence risk prediction & intervention triggers",
        "Real-world evidence generation & trial optimization",
        "Market access and pricing strategy support"
      ]
    }
  ];

  const individualSolutions = [
    {
      icon: User,
      title: "Patients",
      description: "Personalized risk scores, actionable alerts, education.",
      features: [
        "Personalized health predictions",
        "Risk factor identification", 
        "Care pathway optimization",
        "Real-time health monitoring"
      ]
    },
    {
      icon: Stethoscope,
      title: "Clinicians", 
      description: "Simulated care pathways, outcome predictions, decision support.",
      features: [
        "Predictive care modeling",
        "Clinical decision support",
        "Outcome forecasting", 
        "Treatment optimization"
      ]
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
      },
      teal: {
        bg: "bg-teal/5",
        border: "border-teal/20", 
        icon: "text-teal",
        iconBg: "bg-teal/10",
        button: "bg-teal hover:bg-teal/90"
      },
      orange: {
        bg: "bg-orange/5",
        border: "border-orange/20", 
        icon: "text-orange",
        iconBg: "bg-orange/10",
        button: "bg-orange hover:bg-orange/90"
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
            Transforming healthcare with AI-powered virtual twins tailored for every stakeholder in the ecosystem.
          </p>
        </div>

        {/* Section 1: Organizations */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-navy text-center mb-12">Organizations</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {organizationSolutions.map((solution, index) => {
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
                    hover:shadow-xl hover:-translate-y-2 animate-tilt
                    ${selectedCard === index ? 'shadow-2xl -translate-y-2' : ''}
                  `}>
                    {/* Icon */}
                    <div className={`w-16 h-16 ${colorClasses.iconBg} rounded-2xl flex items-center justify-center mb-6 animate-float`}>
                      <Icon className={`w-8 h-8 ${colorClasses.icon}`} />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-navy mb-2">{solution.title}</h3>
                    <h4 className={`text-lg font-semibold ${colorClasses.icon} mb-4`}>{solution.subtitle}</h4>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{solution.description}</p>

                    {/* CTA */}
                    <Button
                      variant="outline"
                      onClick={() => setSelectedCard(selectedCard === index ? null : index)}
                      className="w-full group-hover:shadow-md transition-all"
                    >
                      <ChevronRight className="w-4 h-4 mr-2" />
                      Learn More
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 2: Individuals */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {individualSolutions.map((solution, index) => {
              const Icon = solution.icon;
              const cardIndex = index + organizationSolutions.length;
              const isVisible = visibleCards.includes(cardIndex);
              
              return (
                <div
                  key={cardIndex}
                  data-card={cardIndex}
                  className={`solution-card group perspective-1000 transition-all duration-700 delay-${index * 200} ${
                    isVisible ? 'animate-scale-in opacity-100' : 'opacity-0 scale-95'
                  }`}
                >
                  <div className="relative p-8 rounded-2xl border-2 bg-background/50 border-border/20 transition-all duration-300 cursor-pointer preserve-3d hover:shadow-xl hover:-translate-y-2 animate-tilt">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 animate-float">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-navy mb-4">{solution.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{solution.description}</p>

                    {/* CTA */}
                    <Button
                      variant="outline"
                      onClick={() => setSelectedCard(selectedCard === cardIndex ? null : cardIndex)}
                      className="w-full group-hover:shadow-md transition-all"
                    >
                      <ChevronRight className="w-4 h-4 mr-2" />
                      Learn More
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
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
              {selectedCard < organizationSolutions.length ? (
                // Organization Solution Details
                <>
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 ${getColorClasses(organizationSolutions[selectedCard].color).iconBg} rounded-xl flex items-center justify-center mr-4`}>
                      {(() => {
                        const Icon = organizationSolutions[selectedCard].icon;
                        return <Icon className={`w-6 h-6 ${getColorClasses(organizationSolutions[selectedCard].color).icon}`} />;
                      })()}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-navy">{organizationSolutions[selectedCard].title}</h3>
                      <p className={`text-lg ${getColorClasses(organizationSolutions[selectedCard].color).icon}`}>{organizationSolutions[selectedCard].subtitle}</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold mb-4 text-navy">Key Features</h4>
                    <ul className="space-y-3">
                      {organizationSolutions[selectedCard].features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className={`w-6 h-6 ${getColorClasses(organizationSolutions[selectedCard].color).iconBg} rounded-full flex items-center justify-center mr-3`}>
                            <div className={`w-2 h-2 ${getColorClasses(organizationSolutions[selectedCard].color).icon} rounded-full`} />
                          </div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                // Individual Solution Details
                <>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                      {(() => {
                        const Icon = individualSolutions[selectedCard - organizationSolutions.length].icon;
                        return <Icon className="w-6 h-6 text-primary" />;
                      })()}
                    </div>
                    <h3 className="text-3xl font-bold text-navy">{individualSolutions[selectedCard - organizationSolutions.length].title}</h3>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold mb-4 text-navy">Key Features</h4>
                    <ul className="space-y-3">
                      {individualSolutions[selectedCard - organizationSolutions.length].features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                            <div className="w-2 h-2 text-primary rounded-full bg-primary" />
                          </div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SolutionsSection;