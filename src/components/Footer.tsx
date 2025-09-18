import { Linkedin, Twitter, Youtube, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import conultLogo from '@/assets/conult-logo.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:40px_40px]" />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src={conultLogo} alt="Conult Health Analytics" className="h-10 w-10" />
              <span className="font-bold text-2xl">Conult Health Analytics</span>
            </div>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-6 max-w-md">
              Transforming healthcare through AI-powered digital twins. Empowering better decisions, 
              reducing costs, and improving outcomes for patients, clinicians, and insurers.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/conult-health"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-emerald-light hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/conulthealth"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-emerald-light hover:scale-110 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/conulthealth"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-emerald-light hover:scale-110 transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-emerald-light transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-primary-foreground/80 hover:text-emerald-light transition-colors">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#impact" className="text-primary-foreground/80 hover:text-emerald-light transition-colors">
                  Impact
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-emerald-light transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Compliance</h4>
            <ul className="space-y-3">
              <li className="text-primary-foreground/80">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-light rounded-full" />
                  <span>HIPAA Compliant</span>
                </div>
              </li>
              <li className="text-primary-foreground/80">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-light rounded-full animate-pulse" />
                  <span>SOC2 In Progress</span>
                </div>
              </li>
              <li className="text-primary-foreground/80">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-light rounded-full" />
                  <span>FHIR/HL7 Compatible</span>
                </div>
              </li>
            </ul>

            {/* Back to Top Button */}
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="mt-6 bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-emerald-light hover:text-navy hover:border-emerald-light"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
            © {currentYear} Conult Health Analytics. All rights reserved.
          </div>
          
          <div className="flex space-x-6 text-sm">
            <a href="/privacy" className="text-primary-foreground/60 hover:text-emerald-light transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-primary-foreground/60 hover:text-emerald-light transition-colors">
              Terms of Service
            </a>
            <a href="/security" className="text-primary-foreground/60 hover:text-emerald-light transition-colors">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;