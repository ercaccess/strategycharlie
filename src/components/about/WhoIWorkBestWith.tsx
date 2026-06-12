import { useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";

export function WhoIWorkBestWith() {
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

  const traits = [
    "Established local service business owners who are great at their craft.",
    "Operators who are too busy running their business to mess with algorithms.",
    "Leaders who are completely done wasting money on marketing that doesn't connect to revenue.",
    "Businesses anchored in Burlington, or operating anywhere across Canada and the US."
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-32">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground tracking-tight mb-6">
            Who I Work Best With
          </h2>
          <p className="text-[19px] font-sans text-muted-foreground leading-relaxed">
            I don't work with startups searching for a business model. I partner with proven operators who need serious leverage.
          </p>
        </div>

        <div className="space-y-6">
          {traits.map((trait, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-6 border border-border bg-background reveal-on-scroll"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <p className="text-lg md:text-xl font-sans text-foreground leading-relaxed">
                {trait}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
