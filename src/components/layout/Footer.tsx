import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border mt-auto">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          
          <div className="md:col-span-4 space-y-6">
            <Link to="/" className="inline-block">
              <span className="font-serif text-2xl font-bold tracking-tight text-foreground">Strategy Charlie</span>
            </Link>
            <div className="space-y-4">
              <p className="text-foreground text-[17px] font-sans max-w-xs leading-relaxed">
                <Link to="/digital-marketing-burlington" className="hover:text-primary transition-colors underline decoration-border underline-offset-4 hover:decoration-primary">Burlington, Ontario</Link> — serving local businesses across Canada and the US
              </p>
              <p className="text-foreground text-[17px] font-sans font-medium">
                Strategy Over Sparkles.
              </p>
            </div>
            <div>
              <a href="mailto:hello@strategycharlie.com" className="text-foreground text-[17px] font-sans hover:text-primary transition-colors underline decoration-border underline-offset-4 hover:decoration-primary">
                hello@strategycharlie.com
              </a>
            </div>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            <div className="space-y-4">
              <h3 className="text-[13px] font-sans font-semibold text-primary uppercase tracking-widest">Agency</h3>
              <ul className="space-y-3">
                <li><Link to="/what-makes-us-different" className="text-[17px] font-sans text-foreground hover:text-primary transition-colors">What Makes Us Different</Link></li>
                <li><Link to="/services" className="text-[17px] font-sans text-foreground hover:text-primary transition-colors">Services</Link></li>
                <li><Link to="/about" className="text-[17px] font-sans text-foreground hover:text-primary transition-colors">About</Link></li>
                <li><Link to="/contact" className="text-[17px] font-sans text-foreground hover:text-primary transition-colors">Contact</Link></li>
                <li><Link to="/snapshot" className="text-[17px] font-sans text-primary font-medium hover:text-primary/80 transition-colors">Free Growth Snapshot</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-[13px] font-sans font-semibold text-primary uppercase tracking-widest">Services</h3>
              <ul className="space-y-3">
                <li><Link to="/services/ai-receptionist" className="text-[17px] font-sans text-foreground hover:text-primary transition-colors">AI Receptionist</Link></li>
                <li><Link to="/services/ai-sales-follow-up" className="text-[17px] font-sans text-foreground hover:text-primary transition-colors">AI Sales Assistant</Link></li>
                <li><Link to="/services/ai-social-media-manager" className="text-[17px] font-sans text-foreground hover:text-primary transition-colors">AI Social Media Manager</Link></li>
                <li><Link to="/services/custom-ai-employees" className="text-[17px] font-sans text-foreground hover:text-primary transition-colors">Custom AI Employees</Link></li>
                <li><Link to="/services/local-visibility" className="text-[17px] font-sans text-foreground hover:text-primary transition-colors">Local Visibility & Listings</Link></li>
                <li><Link to="/services/reviews-reputation" className="text-[17px] font-sans text-foreground hover:text-primary transition-colors">Reviews & Reputation</Link></li>
                <li><Link to="/services/websites" className="text-[17px] font-sans text-foreground hover:text-primary transition-colors">Websites That Convert</Link></li>
                <li><Link to="/services/campaigns-retention" className="text-[17px] font-sans text-foreground hover:text-primary transition-colors">Customer Campaigns & Retention</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-[13px] font-sans font-semibold text-primary uppercase tracking-widest">Elsewhere</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://strategyoversparkles.substack.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[17px] font-sans text-foreground hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    Strategy Over Sparkles
                    <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">↗</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://x.com/strategycharlie" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[17px] font-sans text-foreground hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    @strategycharlie on X
                    <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">↗</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[17px] font-sans text-foreground">
            © {currentYear} Strategy Charlie. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
