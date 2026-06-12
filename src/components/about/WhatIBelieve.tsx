import { useEffect, useRef } from "react";
import { Crosshair, ShieldAlert, Wrench, TrendingUp } from "lucide-react";

export function WhatIBelieve() {
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

  const beliefs = [
    {
      icon: <Crosshair className="h-6 w-6 text-primary" />,
      title: "Nobody buys skills, they buy outcomes.",
      description: "Clients don't care how hard I work or what tools I use. They care if the phone rings."
    },
    {
      icon: <ShieldAlert className="h-6 w-6 text-primary" />,
      title: "The problem you blame is rarely the problem costing you.",
      description: "You might think you need more traffic, when you actually have a leaky bucket closing the leads you already have."
    },
    {
      icon: <Wrench className="h-6 w-6 text-primary" />,
      title: "Tools don't fix businesses.",
      description: "Software, AI, and funnels are useless on their own. Deployed tools aimed precisely at the right problem do the heavy lifting."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      title: "Steady monthly momentum beats expensive bursts.",
      description: "Stop throwing huge budgets at short-term blitzes that fizzle out. Compound growth comes from consistent, deliberate action."
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-alt-section">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground tracking-tight">
            What I Believe
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {beliefs.map((belief, index) => (
            <div 
              key={index}
              className="bg-background border border-border p-8 md:p-10 reveal-on-scroll group hover:border-primary/50 transition-colors"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary/5 w-14 h-14 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                {belief.icon}
              </div>
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
                {belief.title}
              </h3>
              <p className="text-lg font-sans text-muted-foreground leading-relaxed">
                {belief.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
