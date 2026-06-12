import { useEffect, useRef } from "react";

export function ItsNotYou() {
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
    <section ref={sectionRef} className="py-24 bg-alt-section text-foreground">
      <div className="container mx-auto px-6 max-w-4xl flex justify-center">
        <div className="space-y-8 reveal-on-scroll max-w-2xl text-center flex flex-col items-center">
          <h2 className="text-sm font-sans font-bold tracking-[0.2em] uppercase text-primary mb-6">
            It's Not You
          </h2>
          <hr className="w-12 border-t-2 border-primary mb-6" />
          <p className="text-[17px] md:text-[19px] font-sans leading-relaxed text-foreground text-left">
            If digital marketing feels harder than it should, it's not because you missed the memo or aren't trying hard enough — it's because most owners were handed a pile of half-truths and told "good luck."
          </p>
          <p className="text-[17px] md:text-[19px] font-sans leading-relaxed text-foreground text-left">
            We build a monthly growth system so marketing stops being expensive bursts that fizzle out, and starts being steady progress on a budget that fits a real business.
          </p>
        </div>
      </div>
    </section>
  );
}
