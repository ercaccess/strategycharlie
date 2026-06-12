import { Hero } from "@/components/home/Hero";
import { ItsNotYou } from "@/components/home/ItsNotYou";
import { FiveProblems } from "@/components/home/FiveProblems";
import { AiWorkforce } from "@/components/home/AiWorkforce";
import { HowWeWork } from "@/components/home/HowWeWork";
import { CtaSnapshot } from "@/components/home/CtaSnapshot";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <>
      <SEO 
        title="Digital Marketing Agency in Burlington, Ontario | Strategy Charlie"
        description="Strategy Charlie is a Burlington-based digital marketing agency that pairs AI workforce tools with local search, reputation, and website growth strategies to scale local service businesses."
        schema={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Strategy Charlie",
          "url": "https://strategycharlie.com",
          "areaServed": ["CA", "US"],
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Burlington",
            "addressRegion": "ON",
            "addressCountry": "CA"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "email": "hello@strategycharlie.com",
            "availableLanguage": "English"
          },
          "sameAs": [
            "https://strategyoversparkles.substack.com/",
            "https://x.com/strategycharlie"
          ]
        })}
      />
      <Hero />
      <ItsNotYou />
      <FiveProblems />
      <AiWorkforce />
      <HowWeWork />
      <CtaSnapshot />
    </>
  );
};

export default Index;
