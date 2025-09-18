import { Button } from '@/components/ui/button';
import { ArrowRight, Handshake, Calendar } from 'lucide-react';

const PartnershipSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="partnership" className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-glow rounded-full opacity-20 animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-glow rounded-full opacity-30 animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <div className="mb-12 animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold text-navy mb-6">
              Let's Build the <span className="text-primary">Future</span>
              <br />
              of Healthcare <span className="text-emerald">Together</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Partner with us to revolutionize healthcare delivery through AI-powered digital twins. 
              Ready to transform outcomes and reduce costs for your organization?
            </p>
          </div>

          {/* Partnership Value Props */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="glass rounded-xl p-6 border border-primary/20 animate-tilt">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">Strategic Partnership</h3>
              <p className="text-muted-foreground text-sm">Long-term collaboration focused on mutual success and innovation.</p>
            </div>
            
            <div className="glass rounded-xl p-6 border border-emerald/20 animate-tilt" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 h-12 bg-emerald/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-emerald" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">Rapid Implementation</h3>
              <p className="text-muted-foreground text-sm">Get started with pilot programs in as little as 6-10 weeks.</p>
            </div>
            
            <div className="glass rounded-xl p-6 border border-navy/20 animate-tilt" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-6 h-6 text-navy" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">Proven ROI</h3>
              <p className="text-muted-foreground text-sm">Measurable cost reductions and improved outcomes from day one.</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              variant="magnetic" 
              size="xl"
              onClick={scrollToContact}
              className="group min-w-[240px]"
            >
              <Calendar className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
              Schedule a Call
            </Button>
            
            <Button 
              variant="glassmorphic" 
              size="xl"
              onClick={scrollToContact}
              className="group min-w-[240px]"
            >
              <Handshake className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              Partner with Us
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Partnership Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">6-10</div>
              <div className="text-sm text-muted-foreground">Weeks to Pilot</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-navy mb-2">100%</div>
              <div className="text-sm text-muted-foreground">HIPAA Compliant</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate mb-2">SOC2</div>
              <div className="text-sm text-muted-foreground">In Progress</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;