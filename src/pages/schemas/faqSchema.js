const faqs = [
 [
  "Who is Saad Al Amin?",
  "Saad Al Amin is a Bangladeshi artist, filmmaker and graphics designer born 3 August 2005 in Dhaka, Bangladesh. He founded Muktir Ghonta and Videophics in 2018. He has also founded Creative Youth Community - CYC.",
 ],
 [
  "How do I ask Saad Al Amin a question?",
  "You can ask Saad Al Amin a question by filling out the Q&A form on the website.",
 ],
];

let faqSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 mainEntity: [],
};

faqs.forEach((faq) => {
 faqSchema.mainEntity.push({
  "@type": "Question",
  name: faq[0],
  acceptedAnswer: {
   "@type": "Answer",
   text: faq[1],
  },
 });
});

faqSchema = JSON.stringify(faqSchema);

export default faqSchema;
