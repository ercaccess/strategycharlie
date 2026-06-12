import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export function HowWeWork() {
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

  const steps = [
    {
      number: "1",
      title: "Diagnose",
      description: <>We look under the hood to find the specific problem costing you the most right now.</>
    },
    {
      number: "2",
      title: "Fix",
      description: <>We deploy exactly what that problem needs — an <Link to="/services/ai-receptionist" className="text-primary hover:underline">AI receptionist</Link>, a <Link to="/services/ai-sales-follow-up" className="text-primary hover:underline">follow-up system</Link>, or <Link to="/services/local-visibility" className="text-primary hover:underline">local SEO</Link>. No bloated bundles.</>
    },
    {
      number: "3",
      title: "Compound",
      description: <>We build monthly momentum, measured in real customers and revenue, not vanity metrics.</>
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-20 reveal-on-scroll flex flex-col items-center">
          <h2 className="text-sm font-sans font-bold tracking-[0.2em] uppercase text-primary mb-6">
            How We Work
          </h2>
          <hr className="w-12 border-t-2 border-primary mb-8" />
          <p className="text-3xl md:text-4xl font-serif text-foreground max-w-2xl mx-auto">
            A system built for momentum.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((step, index) => (
            <div key={index} className="reveal-on-scroll">
              <div className="text-[28px] font-serif text-primary mb-4">
                0{step.number}
              </div>
              <div>
                <h3 className="text-[28px] md:text-[32px] font-serif font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-[17px] md:text-[19px] font-sans text-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 pt-12 border-t border-border text-center reveal-on-scroll">
          <p className="text-[17px] md:text-[19px] font-sans text-foreground italic max-w-3xl mx-auto">
            "When your problem is obvious — like missing calls after hours — we skip the ceremony and fix it fast."
          </p>
        </div>
      </div>
    </section>
  );
}
