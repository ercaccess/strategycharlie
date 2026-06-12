import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description: string;
  url?: string;
  schema?: string;
}

export const SEO = ({ title, description, url, schema }: SEOProps) => {
  const location = useLocation();

  useEffect(() => {
    document.title = title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

    const ogUrl = url || `https://strategycharlie.com${location.pathname}`;
    const ogTags = [
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: ogUrl },
      { property: "og:type", content: "website" },
    ];

    ogTags.forEach(({ property, content }) => {
      let metaTag = document.querySelector(`meta[property="${property}"]`);
      if (!metaTag) {
        metaTag = document.createElement("meta");
        metaTag.setAttribute("property", property);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute("content", content);
    });

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", ogUrl);

    let scriptEl: HTMLScriptElement | null = null;
    if (schema) {
      const existingScript = document.querySelector('script[data-seo-schema="true"]');
      if (existingScript) {
        existingScript.remove();
      }

      scriptEl = document.createElement("script");
      scriptEl.type = "application/ld+json";
      scriptEl.setAttribute("data-seo-schema", "true");
      scriptEl.text = schema;
      document.head.appendChild(scriptEl);
    }

    return () => {
      if (scriptEl && document.head.contains(scriptEl)) {
        document.head.removeChild(scriptEl);
      }
    };
  }, [title, description, location.pathname, url, schema]);

  return null;
};
