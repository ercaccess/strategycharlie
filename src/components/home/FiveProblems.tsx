import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function FiveProblems() {
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

  const problems = [
    {
      title: "Not Enough People Finding You",
      description: "You know you do great work, but when people search for what you do, your competitors show up first. It feels like you're invisible in your own neighbourhood.",
      fix: "The fix: Local Visibility & Listings",
      link: "/services/local-visibility"
    },
    {
      title: "Not Enough Leads",
      description: "Traffic isn't the problem, but conversions are. People visit your site or call after hours, and you lose them because no one is there to guide them to the next step.",
      fix: "The fix: AI Receptionist",
      link: "/services/ai-receptionist"
    },
    {
      title: "Stalled Sales",
      description: "You're having good conversations, but they drift. Quotes sit unanswered, and following up feels like nagging. You're leaving money on the table simply because of silence.",
      fix: "The fix: AI Sales Assistant & Follow-Up",
      link: "/services/ai-sales-follow-up"
    },
    {
      title: "No Repeat Business",
      description: "Customers buy once and disappear. They liked your work, but they forget about you when they need it again, because there's no system to stay top of mind naturally.",
      fix: "The fix: Customer Campaigns & Retention",
      link: "/services/campaigns-retention"
    },
    {
      title: "Clients Don't Stick Around",
      description: "For memberships, subscriptions, and service contracts, churn is eating your growth. Keeping a client should be easier than finding a new one, but they slip away unnoticed.",
      fix: "The fix: Customer Campaigns & Retention",
      link: "/services/campaigns-retention"
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="reveal-on-scroll mb-20">
          <h2 className="text-sm font-sans font-bold tracking-[0.2em] uppercase text-primary mb-6">
            Five Costly Problems We Solve
          </h2>
          <hr className="w-12 border-t-2 border-primary mb-8" />
          <p className="text-[17px] md:text-[19px] font-sans leading-relaxed text-foreground max-w-[65ch]">
            After two decades helping businesses grow, we know owners don't need more tactics — they need customers, sales, and momentum. That's why we don't start with a menu of services; we start with the problem costing you the most money.
          </p>
        </div>

        <ol className="space-y-16 md:space-y-24">
          {problems.map((problem, index) => (
            <li key={index} className="reveal-on-scroll relative group">
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 md:items-baseline">
                <div className="md:w-1/4">
                  <span className="text-3xl md:text-[40px] font-serif text-primary">
                    0{index + 1}
                  </span>
                </div>
                <div className="md:w-3/4 space-y-4">
                  <h3 className="text-[32px] md:text-[44px] leading-[1.1] font-serif font-semibold text-foreground">
                    {problem.title}
                  </h3>
                  <p className="text-[17px] md:text-[19px] font-sans text-foreground leading-relaxed max-w-[65ch]">
                    {problem.description}
                  </p>
                  <div className="pt-4">
                    <Link 
                      to={problem.link}
                      className="inline-flex items-center gap-2 text-[17px] font-sans text-primary hover:text-foreground transition-colors group/link"
                    >
                      {problem.fix}
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
