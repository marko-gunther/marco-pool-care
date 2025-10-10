import { useEffect } from "react";

const StructuredData = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "MG Piscinas - Limpeza de Piscinas",
      description:
        "Limpeza e manutenção de piscinas em Campo Morão e região. Serviço profissional, rápido e confiável.",
      image: "https://lovable.dev/opengraph-image-p98pqg.png",
      "@id": "https://lovable.app",
      url: "https://lovable.app",
      telephone: "+55-44-99853-7410",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Campo Morão",
        addressRegion: "PR",
        addressCountry: "BR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -24.0458,
        longitude: -52.3778,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "08:00",
          closes: "18:00",
        },
      ],
      sameAs: ["https://wa.me/5544998537410"],
      areaServed: {
        "@type": "City",
        name: "Campo Morão",
      },
      serviceType: [
        "Limpeza de Piscina",
        "Manutenção de Piscina",
        "Tratamento de Água",
        "Limpeza Residencial",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+55-44-99853-7410",
        contactType: "customer service",
        areaServed: "BR",
        availableLanguage: "Portuguese",
      },
    });

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default StructuredData;
