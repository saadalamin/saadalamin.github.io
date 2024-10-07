const websiteSchema = JSON.stringify({
 "@context": "https://schema.org",
 "@type": "WebSite",
 name: "Saad Al Amin",
 potentialAction: {
  "@type": "SearchAction",
  target: {
   "@type": "EntryPoint",
   urlTemplate: "https://saadalamin.com/search?q={search_term_string}",
  },
  "query-input": "required name=search_term_string",
 },
});

export default websiteSchema;
