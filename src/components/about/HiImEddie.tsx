import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export function HiImEddie() {
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
    <section ref={sectionRef} className="py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="reveal-on-scroll">
            <div className="aspect-square max-w-md mx-auto relative group">
              <div className="absolute inset-0 bg-alt-section translate-x-4 translate-y-4 -z-10"></div>
              <img 
                src="https://media-api-prod.apigateway.co/files/v3/AG-VZ2KR6DZ5N/FileID-7561faf3-c323-4a02-9294-df1a4f7bb79a/uploaded-1781223814270617310.png" 
                alt="Eddie, Digital Marketing Strategist"
                className="w-full h-full object-cover border border-border shadow-sm"
              />
            </div>
          </div>

          <div className="space-y-6 reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground tracking-tight">
              Hi, I'm Eddie.
            </h1>
            <div className="space-y-4 text-lg font-sans text-muted-foreground leading-relaxed">
              <p>
                I'm not a guru, and I don't run an agency factory. What I am is a strategist who's spent nearly 20 years in digital marketing, based right here in Burlington, Ontario.
              </p>
              <p>
                I've seen every marketing fad come and go. I know which "best practices" are pure hype, and more importantly, I know which problems actually move revenue for local service businesses.
              </p>
              <p>
                My approach is direct, a little irreverent, and completely allergic to fluff. We sit on the same side of the table—business owner to business owner—looking at the bottlenecks holding your growth back, and we deploy targeted solutions to fix them.
              </p>
              <p>
                I don't work alone, though — and I've been deliberate about who and what stands behind me. We run on two kinds of muscle: an <Link to="/services" className="text-primary hover:underline">AI workforce</Link> that I direct at your specific bottleneck, and hand-picked human specialists, vetted over years of working together, for the jobs that need craft. My role is matching the right resource to the right problem. You get a senior strategist's attention with a full team's execution behind it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
