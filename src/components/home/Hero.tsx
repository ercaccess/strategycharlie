import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll('.reveal-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-[85vh] flex flex-col items-center justify-center pt-20 pb-32 overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
        
        <div className="space-y-8 reveal-on-scroll">
          <h1 className="text-[44px] md:text-[80px] font-serif font-bold tracking-tight text-foreground leading-[1.05]">
            You're great at running your business. <br className="hidden md:block" />
            <span className="text-primary">Your marketing? Could use some work.</span>
          </h1>
          
          <p className="text-[17px] sm:text-[19px] font-sans text-foreground max-w-2xl mx-auto leading-relaxed">
            Let's talk about how to get found, get booked, and grow — without becoming a marketing nerd yourself.
          </p>
        </div>

        <div className="mt-12 space-y-6 reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
          <div className="flex flex-col items-center gap-3">
            <Button 
              asChild 
              size="lg" 
              className="btn-primary text-[18px] px-10 py-7 h-auto w-full sm:w-auto"
            >
              <Link to="/contact">Book a 15-Minute Fit Call</Link>
            </Button>
            <p className="text-[17px] font-sans text-foreground">Ask anything. No pressure.</p>
          </div>

          <div className="pt-4">
            <Link 
              to="/snapshot" 
              className="inline-flex items-center gap-2 text-[17px] font-sans text-foreground hover:text-primary transition-colors group"
            >
              Or get your Free Growth Snapshot first
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
