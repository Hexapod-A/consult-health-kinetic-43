import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Counter from './Counter';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const words = ["Reimagining", "Transforming", "Revolutionizing"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsTyping(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-glow rounded-full opacity-30 animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-glow rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-glow rounded-full opacity-10 animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen text-center pt-20">
          
          {/* Dynamic Headline */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-navy mb-4">
              <span className={`transition-all duration-500 ${isTyping ? 'opacity-100' : 'opacity-50'}`}>
                {words[currentWordIndex]}
              </span>
              <br />
              <span className="text-primary">Preventive Care</span>
              <br />
              <span className="text-slate">with Virtual Simulations</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              AI-powered virtual simulations to help providers, payers, and health systems identify high-risk patients early, 
              optimize resources, reduce preventable costs, and improve outcomes.
            </p>
          </div>

          {/* KPI Ribbon */}
          <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 glass rounded-2xl border border-border/20 max-w-6xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange mb-2">
                  $<Counter start={0} end={52.4} prefix="" suffix="B" />
                </div>
                <div className="text-sm text-muted-foreground">Annual cost of preventable readmissions in the U.S.</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal mb-2">
                  <Counter start={0} end={20} prefix="" suffix="% → 80%" />
                </div>
                <div className="text-sm text-muted-foreground">20% of patients drive 80% of healthcare costs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  <Counter start={0} end={8} prefix="" suffix="-10" />
                </div>
                <div className="text-sm text-muted-foreground">Weeks Average pilot implementation timeline</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-navy mb-2">
                  <Counter start={0} end={24} prefix="" suffix="/7" />
                </div>
                <div className="text-sm text-muted-foreground">Monitoring & predictive insights</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => window.open('https://calendly.com/dtengu-conulthealth/30min', '_blank')}
              className="group"
            >
              Schedule a Call
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
              <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;