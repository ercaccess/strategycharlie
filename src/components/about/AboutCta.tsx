import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function AboutCta() {
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
    <section ref={sectionRef} className="py-24 md:py-32 bg-alt-section border-t border-border/50">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <div className="space-y-8 reveal-on-scroll">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground leading-tight">
            Ready to fix the bottleneck?
          </h2>
          <p className="text-[17px] md:text-[19px] font-sans text-foreground leading-relaxed max-w-2xl mx-auto">
            Let's talk about what's actually holding your revenue back, and whether we're the right fit to solve it.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button asChild size="lg" className="btn-primary w-full sm:w-auto px-8 py-6 text-base">
              <Link to="/contact">Book a 15-Minute Fit Call</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto px-8 py-6 text-base rounded-none border-primary text-primary hover:bg-primary/5 bg-transparent">
              <Link to="/snapshot">Free Growth Snapshot</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
