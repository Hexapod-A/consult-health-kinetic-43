import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText, Calendar, Clock, User, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import healthcareAnalytics from '@/assets/blog-healthcare-analytics.jpg';
import virtualSimulations from '@/assets/blog-virtual-simulations.jpg';
import healthcareTeam from '@/assets/blog-healthcare-team.jpg';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Predictive Healthcare Analytics",
      excerpt: "Exploring how AI-powered virtual simulations are transforming preventive care and reducing healthcare costs through advanced predictive modeling.",
      image: healthcareAnalytics,
      author: "Dr. Sarah Chen",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Research & Innovation",
      featured: true
    },
    {
      id: 2,
      title: "Virtual Simulations: Revolutionizing Patient Care Pathways",
      excerpt: "How virtual twin technology enables healthcare providers to simulate care pathways, predict outcomes, and optimize treatment plans for better patient outcomes.",
      image: virtualSimulations,
      author: "Michael Rodriguez",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "Industry Insights",
      featured: true
    },
    {
      id: 3,
      title: "Building Collaborative Healthcare Teams with AI",
      excerpt: "The role of artificial intelligence in enhancing team collaboration, improving care coordination, and driving better healthcare outcomes across organizations.",
      image: healthcareTeam,
      author: "Dr. Emily Johnson",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Case Studies",
      featured: false
    }
  ];

  const categories = [
    { name: "Research & Innovation", count: 8 },
    { name: "Industry Insights", count: 12 },
    { name: "Case Studies", count: 6 },
    { name: "Technology Updates", count: 4 }
  ];

  return (
    <div className="min-h-screen bg-white">
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
      <section className="py-20 bg-gradient-hero relative overflow-hidden rounded-3xl mx-6 mb-16">
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

      {/* Featured Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-navy mb-12 text-center">Featured Articles</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <article 
                key={post.id} 
                className="group cursor-pointer animate-fade-in" 
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center text-sm text-muted-foreground space-x-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-navy group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-white transition-all">
                    Read More
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Categories & Recent Posts */}
      <section className="py-16 bg-muted/30 rounded-3xl mx-6">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Categories */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-navy mb-8">Categories</h3>
              <div className="space-y-4">
                {categories.map((category, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 glass rounded-xl border border-border/20 hover:shadow-md transition-all cursor-pointer animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="font-medium text-navy">{category.name}</span>
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm">
                      {category.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-navy mb-8">Recent Articles</h3>
              <div className="space-y-8">
                {blogPosts.map((post, index) => (
                  <article 
                    key={post.id}
                    className="flex flex-col md:flex-row gap-6 p-6 glass rounded-2xl border border-border/20 hover:shadow-lg transition-all cursor-pointer group animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="md:w-48 flex-shrink-0">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-32 md:h-24 object-cover rounded-xl group-hover:scale-105 transition-transform"
                      />
                    </div>
                    
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center text-sm text-muted-foreground space-x-4">
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                          {post.category}
                        </span>
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h4 className="text-lg font-semibold text-navy group-hover:text-primary transition-colors">
                        {post.title}
                      </h4>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="glass rounded-2xl p-12 border border-primary/20">
              <h3 className="text-3xl font-bold text-navy mb-6">Stay Updated</h3>
              <p className="text-lg text-muted-foreground mb-8">
                Get the latest insights on healthcare innovation, virtual twin technology, and preventive care delivered to your inbox.
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
                  Subscribe to Newsletter
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