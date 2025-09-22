import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import conultLogo from '@/assets/conult-logo.png';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'impact', label: 'Impact' },
    { id: 'partnership', label: 'Partnership' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      setScrollProgress(scrollPercent);
      setIsScrolled(scrollTop > 50);

      // Update active section
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const currentSection = sectionElements.find(el => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-muted z-50">
        <div 
          className="h-full bg-gradient-primary transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-1 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src={conultLogo} alt="Conult Health Analytics" className="h-10 w-10" />
              <span className="font-bold text-xl text-foreground">Conult</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => scrollToSection('contact')}
              >
                Contact Us
              </Button>
              <Button 
                variant="hero" 
                size="sm"
                onClick={() => window.open('https://calendly.com/dtengu-conulthealth/30min', '_blank')}
              >
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Section Indicators */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-3">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              activeSection === section.id
                ? 'bg-primary border-primary scale-125'
                : 'bg-transparent border-muted-foreground hover:border-primary hover:scale-110'
            }`}
            aria-label={`Navigate to ${section.label}`}
          />
        ))}
      </div>
    </>
  );
};

export default Navigation;