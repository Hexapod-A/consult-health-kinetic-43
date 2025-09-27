import { Button } from '@/components/ui/button';
import { ArrowLeft, Users, Award, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Teams = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Back */}
      <div className="container mx-auto px-6 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-glow rounded-full opacity-20 animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-glow rounded-full opacity-30 animate-float" style={{ animationDelay: '3s' }} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-navy mb-6 animate-fade-in">
              Meet Our <span className="text-primary">Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Healthcare innovators, data scientists, and clinical experts united in transforming preventive care.
            </p>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="glass rounded-xl p-8 border border-primary/20 text-center animate-fade-in">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-navy mb-4">Collaborative</h3>
              <p className="text-muted-foreground">Working together across disciplines to solve healthcare's biggest challenges.</p>
            </div>
            
            <div className="glass rounded-xl p-8 border border-emerald/20 text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-emerald/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-emerald" />
              </div>
              <h3 className="text-2xl font-semibold text-navy mb-4">Expert-Driven</h3>
              <p className="text-muted-foreground">Deep expertise in healthcare, AI, and data science from leading institutions.</p>
            </div>
            
            <div className="glass rounded-xl p-8 border border-accent/20 text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-navy mb-4">Mission-Focused</h3>
              <p className="text-muted-foreground">Driven by the goal to make healthcare more predictive, equitable, and effective.</p>
            </div>
          </div>

          {/* Team Content Placeholder */}
          <div className="text-center py-16">
            <div className="glass rounded-2xl p-12 max-w-4xl mx-auto border border-primary/20">
              <h2 className="text-3xl font-bold text-navy mb-6">Our Team is Growing</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're building a world-class team of healthcare innovators. Stay tuned as we introduce our founding members and advisors.
              </p>
              <Button 
                variant="magnetic" 
                size="lg"
                onClick={() => window.open('https://calendly.com/dtengu-conulthealth/30min', '_blank')}
              >
                Join Our Mission
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teams;