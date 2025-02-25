const faqs = [
  [
    "Who is Saad Al Amin?",
    "Saad Al Amin is a Bangladeshi artist, filmmaker and graphics designer born 3 August 2005 in Dhaka, Bangladesh. He founded Muktir Ghonta and Videophics in 2018. He has also founded Creative Youth Community - CYC.",
  ],
  [
    "What are the achievements of Saad Al Amin?",
    "Saad has directed 12,000+ projects globally and performed alongside artists like Atif Aslam.",
  ],
  [
    "What is Saad Al Amin famous for?",
    "He is the founder of Qaseeda Band, Muktir Ghonta, and Videophics, leading in music, film, and marketing.",
  ],
  [
    "How do I ask Saad Al Amin a question?",
    "You can ask Saad Al Amin a question by filling out the Q&A form on the website.",
  ],
  // Musical Artist (Qaseeda, Sufi & Traditional Music)
  [
    "What inspired Saad Al Amin's latest single 'Aj Jochna Raate'?",
    "'Aj Jochna Raate' is inspired by the beauty of nature, spirituality, and Bangladeshi traditional music, blending melodious folk and Sufi elements.",
  ],
  [
    "How does Saad Al Amin blend traditional Bangladeshi music with modern genres?",
    "He fuses folk music like Bhatiyali, Baul, Jari-Sari, and Qawwali with contemporary sounds while preserving the cultural essence.",
  ],
  [
    "Where can I listen to Saad Al Amin’s music?",
    "His music is available on platforms like Spotify, Apple Music, YouTube, and SoundCloud.",
  ],
  [
    "What is the message behind Saad Al Amin's music?",
    "His songs often carry deep spiritual, philosophical, and social messages, emphasizing self-discovery and cultural roots.",
  ],

  // Filmmaker (Bangladeshi Social & Cultural Cinema)
  [
    "What themes does Saad Al Amin explore in his films?",
    "His films focus on social justice, spirituality, cultural heritage, and the human struggle, often using metaphorical storytelling.",
  ],
  [
    "How did Saad Al Amin’s background influence his filmmaking style?",
    "Growing up in Bangladesh, he was deeply influenced by folk traditions, Sufi philosophy, and socio-political issues, shaping his unique visual storytelling.",
  ],
  [
    "Has Saad Al Amin made any documentary films?",
    "Yes, his documentary 'The Dreamer' explores the aspirations and struggles of a young artist, reflecting personal and societal conflicts.",
  ],
  [
    "Where can I watch Saad Al Amin's films?",
    "His films are available on YouTube, festival screenings, and streaming platforms like Vimeo.",
  ],

  // Social Innovator (Muktir Ghonta, Social Movements)
  [
    "What is the mission of Muktir Ghonta, founded by Saad Al Amin?",
    "Muktir Ghonta aims to raise awareness about social injustice, freedom of speech, and youth activism through media and education.",
  ],
  [
    "How has Saad Al Amin contributed to social innovation in Bangladesh?",
    "He has worked on projects supporting education, freedom of expression, and cultural preservation while documenting historical events.",
  ],
  [
    "What impact has Muktir Ghonta had on Bangladeshi society?",
    "It has mobilized youth movements, provided educational resources, and documented crucial socio-political events in Bangladesh.",
  ],
  [
    "How can I support or join Muktir Ghonta?",
    "You can visit their website, follow their social media pages, and participate in their initiatives by volunteering or donating.",
  ],

  // Technology & Digital Marketing (Videophics, Elan Records USA)
  [
    "What services does Saad Al Amin’s company Videophics offer?",
    "Videophics specializes in digital marketing, content creation, branding, and video production for businesses and artists.",
  ],
  [
    "What is Elan Records USA, and what does it do?",
    "Elan Records is an independent music label supporting emerging artists with distribution, marketing, and creative production.",
  ],
  [
    "How does Saad Al Amin use digital marketing in music and film?",
    "He leverages SEO, social media campaigns, and content strategies to amplify artistic and cinematic projects globally.",
  ],
  [
    "How can I collaborate with Saad Al Amin on a music or film project?",
    "You can reach out via his website www.saadalamin.com or contact his team through email.",
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

export default { faqSchema, faqs };
