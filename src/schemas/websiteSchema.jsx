const websiteSchema = JSON.stringify({
 "@context": "https://schema.org",
 "@type": "WebSite",
 name: "Saad Al Amin",
 url: "https://saadalamin.com",
 description:
  "Saad Al Amin is a Bangladeshi artist, film maker and graphics designer born 3 August 2005 in Dhaka, Bangladesh. He founded Muktir Ghonta and Videophics in 2018. He has also founded Creative Youth Community - CYC.",
 image: {
  "@type": "ImageObject",
  url: "https://saadalamin.com/images/persons/saad2.jpg",
  width: 800,
  height: 800,
 },
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
