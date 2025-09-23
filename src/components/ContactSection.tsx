import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Send, CheckCircle, Linkedin, Twitter, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      
      toast({
        title: "Message Sent Successfully! 🎉",
        description: "Thank you for your interest. We'll get back to you within 24 hours.",
      });

      // Reset form after success animation
      setTimeout(() => {
        setFormData({ name: '', email: '', company: '', message: '' });
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 border-2 border-primary rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 border-2 border-emerald rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-navy mb-6">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your healthcare delivery? Let's start the conversation about building your digital twin solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="relative">
            <div className="glass rounded-2xl p-8 border border-border/50">
              <h3 className="text-2xl font-semibold text-navy mb-6">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="h-12"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="h-12"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                
                <div>
                  <Input
                    name="company"
                    placeholder="Company/Organization"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="h-12"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your healthcare challenges and how we can help... *"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="resize-none"
                    disabled={isSubmitting}
                  />
                </div>

                <Button
                  type="submit"
                  variant={isSubmitted ? "outline" : "hero"}
                  size="lg"
                  className="w-full relative overflow-hidden"
                  disabled={isSubmitting}
                >
                  {isSubmitting && (
                    <div className="absolute inset-0 bg-gradient-primary/20 animate-pulse" />
                  )}
                  
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2 text-emerald animate-scale-in" />
                      Message Sent!
                    </>
                  ) : isSubmitting ? (
                    <>
                      <div className="w-5 h-5 mr-2 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>

              {/* Success Animation */}
              {isSubmitted && (
                <div className="absolute inset-0 flex items-center justify-center bg-background/90 rounded-2xl animate-fade-in">
                  <div className="text-center">
                    <CheckCircle className="w-16 h-16 text-emerald mx-auto mb-4 animate-scale-in" />
                    <h4 className="text-xl font-semibold text-navy mb-2">Thank You!</h4>
                    <p className="text-muted-foreground">We'll be in touch within 24 hours.</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="glass rounded-2xl p-8 border border-border/50">
              <h3 className="text-2xl font-semibold text-navy mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-navy">Email</div>
                    <div className="text-muted-foreground">info@conulthealth.com</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald/10 rounded-xl flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-emerald" />
                  </div>
                  <div>
                    <div className="font-medium text-navy">Phone</div>
                    <div className="text-muted-foreground">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-navy" />
                  </div>
                  <div>
                    <div className="font-medium text-navy">Address</div>
                    <div className="text-muted-foreground">Pittsburgh, PA</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass rounded-2xl p-8 border border-border/50">
              <h3 className="text-2xl font-semibold text-navy mb-6">Follow Us</h3>
              
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/company/conult-health"
                  className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 animate-tilt"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://twitter.com/conulthealth"
                  className="w-12 h-12 bg-emerald/10 rounded-xl flex items-center justify-center text-emerald hover:bg-emerald hover:text-primary-foreground transition-all duration-300 animate-tilt"
                  aria-label="Twitter"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="https://youtube.com/conulthealth"
                  className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center text-navy hover:bg-navy hover:text-primary-foreground transition-all duration-300 animate-tilt"
                  aria-label="YouTube"
                >
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="glass rounded-2xl p-8 border border-border/50">
              <h3 className="text-2xl font-semibold text-navy mb-6">Why Partner With Us</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Calendly Link</span>
                  <a href="https://calendly.com/dtengu-conulthealth/30min" target="_blank" className="font-semibold text-primary hover:underline">Schedule Now</a>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Implementation Time</span>
                  <span className="font-semibold text-emerald">8-10 weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Response Time</span>
                  <span className="font-semibold text-navy">&lt; 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;