const websiteSchema = JSON.stringify({
 "@context": "https://schema.org",
 "@type": "WebSite",
 name: "Saad Al Amin",
 url: "https://saadalamin.com",
 description:
  "Saad Al Amin is a Bangladeshi artist, Film Maker and Graphics Designer born 3rd august in Dhaka, Bangladesh. He was raised and educated in Dhaka, Bangladesh. He started his primary education at the age of 6. His father&apos;s name is Ruhul Amin. He is a businessman and religious leader before 2010. Furthermore, he is now working with his own Company. He is...",
 image: {
  "@type": "ImageObject",
  url: "https://saadalamin.com/images/persons/saad2.jpg",
  width: 800,
  height: 800,
 },
 publisher: {
  "@type": "WebSite",
  name: "Saad Al Amin",
  logo: {
   "@type": "ImageObject",
   url: "https://saadalamin.com/images/persons/saad2.jpg",
  },
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
