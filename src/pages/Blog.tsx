import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
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
              Conult <span className="text-primary">Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Exploring the future of healthcare through virtual simulations, predictive analytics, and preventive care innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="glass rounded-xl p-8 border border-primary/20 text-center animate-fade-in">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-navy mb-4">Research & Innovation</h3>
              <p className="text-muted-foreground">Deep dives into virtual twin technology and healthcare AI breakthroughs.</p>
            </div>
            
            <div className="glass rounded-xl p-8 border border-emerald/20 text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-emerald/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-emerald" />
              </div>
              <h3 className="text-2xl font-semibold text-navy mb-4">Industry Insights</h3>
              <p className="text-muted-foreground">Market trends, policy updates, and healthcare transformation strategies.</p>
            </div>
            
            <div className="glass rounded-xl p-8 border border-accent/20 text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-navy mb-4">Case Studies</h3>
              <p className="text-muted-foreground">Real-world applications and success stories from our partnerships.</p>
            </div>
          </div>

          {/* Coming Soon Content */}
          <div className="text-center py-16">
            <div className="glass rounded-2xl p-12 max-w-4xl mx-auto border border-primary/20">
              <h2 className="text-3xl font-bold text-navy mb-6">Coming Soon</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're preparing insightful content about healthcare innovation, virtual twin technology, and the future of preventive care. 
                Subscribe to stay updated on our latest research and industry insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="magnetic" 
                  size="lg"
                  onClick={() => window.open('https://calendly.com/dtengu-conulthealth/30min', '_blank')}
                >
                  Schedule a Call
                </Button>
                <Button variant="outline" size="lg" disabled>
                  Subscribe to Updates
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;