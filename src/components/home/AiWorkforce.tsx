import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AiWorkforce() {
  const sectionRef = useRef<HTMLElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll('.reveal-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8 reveal-on-scroll">
            <h2 className="text-sm font-sans font-bold tracking-[0.2em] uppercase text-primary-foreground mb-6">
              Your AI Workforce
            </h2>
            <hr className="w-12 border-t-2 border-primary-foreground/50 mb-6" />
            <h3 className="text-4xl md:text-5xl font-serif font-semibold leading-tight">
              Managed by a <br/> Strategist
            </h3>
            <p className="text-[17px] md:text-[19px] font-sans text-primary-foreground leading-relaxed">
              Think of AI as your 2026 advantage: receptionists that answer every call 24/7, follow-up systems that never let a lead go cold, and reputation specialists that keep your business visible and trusted.
            </p>
            <p className="text-[17px] md:text-[19px] font-sans text-primary-foreground leading-relaxed font-medium">
              The tools are powerful, but tools without strategy is how owners got burned last time. We deploy your AI workforce against the specific problem that's costing you money — nothing more.
            </p>
            <div className="pt-6">
              <Button asChild size="lg" variant="secondary" className="rounded-none px-8 py-6 text-[18px] group">
                <Link to="/services" className="inline-flex items-center gap-2">
                  Explore All Services
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="reveal-on-scroll border border-primary-foreground/20 p-10 md:p-12 bg-primary-foreground/5 backdrop-blur-sm">
            <h4 className="font-serif text-2xl font-medium mb-8">The AI Advantage</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 border-b border-primary-foreground/20 pb-6">
                <span className="font-bold text-[17px] font-sans text-primary-foreground">01</span>
                <div>
                  <p className="font-semibold text-[17px] font-sans mb-1">Always On</p>
                  <p className="text-[17px] font-sans text-primary-foreground">Never misses a call, message, or lead.</p>
                </div>
              </li>
              <li className="flex gap-4 border-b border-primary-foreground/20 pb-6">
                <span className="font-bold text-[17px] font-sans text-primary-foreground">02</span>
                <div>
                  <p className="font-semibold text-[17px] font-sans mb-1">Perfect Memory</p>
                  <p className="text-[17px] font-sans text-primary-foreground">Follows up exactly when promised, every time.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-[17px] font-sans text-primary-foreground">03</span>
                <div>
                  <p className="font-semibold text-[17px] font-sans mb-1">Scalable</p>
                  <p className="text-[17px] font-sans text-primary-foreground">Handles 10 leads or 1,000 without breaking a sweat.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
