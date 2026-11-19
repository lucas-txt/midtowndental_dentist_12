export const site = {
  name: "Midtown Dental",
  legalName: "Midtown Dental Bismarck",
  tagline: "Serving Bismarck and the surrounding community",
  description:
    "Bismarck/Mandan North Dakota Dentist - We stay up to date on all the latest technology to make your smile sparkle. From pediatric to preventative care and everything in between, Midtown Dental has you covered!",
  address: "2000 N 12th St, Bismarck, ND 58501",
  addressLines: ["2000 N 12th St", "Bismarck, ND 58501"],
  phone: "(701) 222-1286",
  phoneHref: "tel:7012221286",
  email: "info@midtowndb.com",
  emailHref: "mailto:info@midtowndb.com",
  formsEmail: "NewPatientServices@midtowndb.com",
  formsEmailHref: "mailto:NewPatientServices@midtowndb.com",
  hours: [
    { days: "Monday - Wednesday", time: "8am - 5pm" },
    { days: "Thursday", time: "7am - 2pm" },
    { days: "Friday", time: "Closed" },
    { days: "Saturday - Sunday", time: "Closed" },
  ],
  links: {
    appointment:
      "https://www.patientconnect365.com/MicrositeAppointments/RequestAppointment/NorthDakota/Bismarck/58501/Midtown_Dental",
    payOnline: "https://swipesimple.com/links/lnk_c90f4603",
    directions: "https://maps.app.goo.gl/DFrKg7KMJ8q8wB1e9",
    googleReviews:
      "https://www.google.com/maps/place/Midtown+Dental/@46.8279101,-100.7951698,17z/data=!3m1!4b1!4m7!3m6!1s0x52d783a3c4dc6e89:0xe3f1ea40181627db!8m2!3d46.8279101!4d-100.7929811!9m1!1b1",
    directionsCid: "https://www.google.com/maps?cid=16425166876999821275",
    facebook: "https://www.facebook.com/MidtownDentalBismarckND/",
    instagram: "https://www.instagram.com/midtowndentalbismarck/",
    developer: "https://mintbrandmarketing.com/",
    patientForm: "/assets/docs/new-patient-form.pdf",
  },
  mapQuery: "2000 N 12th St, Bismarck, ND 58501",
  copyright: "© 2026 Midtown Dental",
} as const;

export const navLinks = [
  { href: "/about-us", label: "About Us" },
  { href: "/meet-our-dentists", label: "Dentists" },
  { href: "/services", label: "Services" },
  { href: "/patient-center", label: "Patient Center" },
  { href: "/insurance-and-payment-information", label: "Insurance & Payment" },
  { href: "/contact-us", label: "Contact" },
] as const;

export type ServiceProcedure = {
  title: string;
  copy: string;
};

export type ServiceCategory = {
  id: string;
  name: string;
  label: string;
  summary: string;
  image: string;
  imageAlt: string;
  procedures: ServiceProcedure[];
};

export const services: ServiceCategory[] = [
  {
    id: "routine",
    name: "Routine Dental Care",
    label: "Preventive",
    summary:
      "Regular visits that keep your smile healthy, from comprehensive cleanings to early detection.",
    image: "/assets/images/service-routine.jpg",
    imageAlt: "Dental cleaning tools prepared for a routine visit",
    procedures: [
      {
        title: "Dental Cleanings",
        copy: "During your cleaning, our experienced dental hygenists will give your teeth a comprehensive cleaning. We will remove plaque, tartar and stains and polish your teeth to help make them sparkle!",
      },
      {
        title: "X-rays",
        copy: "As part of your dental visit an X-Ray of your teeth will be performed to detect tooth decay, measure proper bone levels and screen for any pathological issues of the jaw.",
      },
      {
        title: "Cavity Care",
        copy: "If we find a cavity through X-rays or during your exam we have many options to take care of this. If caught early enough we can perform a filling that matches the natural color of your tooth and prevent further decay. Seeing your dentist every 6 months allows us to continually monitor small cavities and prevent them from turning into emergency situations.",
      },
      {
        title: "Oral Cancer Screenings",
        copy: "A visual and physical exam of your mouth and connected tissues will be performed to look for any signs of cancer or precancerous conditions.",
      },
      {
        title: "Home Care Education",
        copy: "After completing your cleaning, our team will review specific tools and techniques that will help keep your mouth clean and healthy until your next dental visit.",
      },
    ],
  },
  {
    id: "periodontal",
    name: "Periodontal Care",
    label: "Gum health",
    summary:
      "Understanding, treating and stabilizing periodontal disease so your gums and bone stay healthy.",
    image: "/assets/images/service-periodontal.jpg",
    imageAlt: "Healthy gums being examined during a periodontal appointment",
    procedures: [
      {
        title: "What is Periodontal Disease?",
        copy: "Periodontal disease occurs when bacteria collects in vulnerable areas of the mouth. This bacteria causes an inflammatory response from the body that will lead to bone loss and gum recession. This bone loss could lead to the loosening and loss of the teeth and/or periodontal abscesses. If you smoke, have diabetes, or have a close relative with the disease you are at a much higher risk of developing periodontal disease. There is also scientific evidence showing an increased risk of heart disease with inflammation of your gums. Therefore, treating and preventing periodontal disease benefits both your oral health and general well being.",
      },
      {
        title: "Periodontal Disease Treatment",
        copy: "If you are diagnosed with periodontal disease through our screening process, a treatment plan that fits your specific needs will be proposed. Although everyone‘s condition is unique a treatment plan will usually include deep cleanings (scaling and root planing) to help stop the progression of the disease. This will be followed with another appointment to measure the success of the deep cleanings. If successful treatment was not achieved we will explore other options such as surgeries that will be needed to correct the condition.",
      },
      {
        title: "Care for Stabilized Periodontal Disease",
        copy: "Once the disease is stabilized a periodontal maintenance appointment will be scheduled every three to four months. This appointment will consist of a thorough cleaning and monitoring of the gum and bone levels. This will help to prevent the disease from progressing and maintain good gum and bone health.",
      },
      {
        title: "Periodontal Disease Prevention",
        copy: "Periodontal disease occurs from many things such as bacteria, smoking, diabetes, and a genetic predisposition. Strong home care combined with regular dental visits can keep you on track to prevent or stop the progression of periodontal disease.",
      },
    ],
  },
  {
    id: "cosmetic",
    name: "Cosmetic Dentistry",
    label: "Smile design",
    summary:
      "Considered changes to the color, shape and strength of your teeth — always with your natural smile in mind.",
    image: "/assets/images/service-cosmetic.jpg",
    imageAlt: "Cosmetic dentistry consultation with a bright smile",
    procedures: [
      {
        title: "Porcelain or Cosmetic Veneers",
        copy: "Dental veneers are used to cover the frontal surface of teeth and can be used to change the color, shape, size or length of the tooth through a minimally invasive process. We will help you visualize what type of results can be achieved through this service.",
      },
      {
        title: "Teeth Whitening",
        copy: "Are you dissatisfied with the staining on your teeth? Our staff will discuss all your options available to make your smile shine!",
      },
      {
        title: "Crowns",
        copy: "A dental crown is a tooth-shaped cap that covers the top of the tooth to restore its shape, size and strength as well as improve the appearance. A crown will be cemented into place and completely cover the visible portion of the tooth. A crown may be utilized for a number of different reasons, from protecting a weak or cracked tooth to covering misshapened or discolored teeth.",
      },
    ],
  },
  {
    id: "restorative",
    name: "Restorative",
    label: "Rebuild",
    summary:
      "Bridges, implants and dentures that restore function and confidence when teeth are missing or damaged.",
    image: "/assets/images/service-restorative.jpg",
    imageAlt: "Restorative dentistry model showing a dental bridge",
    procedures: [
      {
        title: "Dental Bridges",
        copy: "Dental bridges are used to bridge a gap created by teeth that are missing. Bridges offer many benefits including restoring your smile, strengthen the ability to chew and speak, improve appearance and prevent remaining teeth from moving out of position.",
      },
      {
        title: "Implants",
        copy: "Dental implants are replacement tooth roots that provide a strong foundation for a single tooth replacement or to help anchor dentures. These are made custom for you, allowing us to make these look like your natural teeth and they can last a lifetime.",
      },
      {
        title: "Partial or Complete Dentures",
        copy: "A denture is a removable replacement that can be used when missing some (partial dentures) or all (complete dentures) of your teeth. We will make the dentures to closely resemble your natural teeth and give you a smile to be proud of!",
      },
    ],
  },
  {
    id: "pediatric",
    name: "Pediatric Dentistry",
    label: "Little smiles",
    summary:
      "A gentle, early start for children — from a first tooth to a lifetime of healthy habits.",
    image: "/assets/images/service-pediatric.jpg",
    imageAlt: "Child receiving a gentle dental check-up",
    procedures: [
      {
        title: "Pediatric Oral Health Consulting",
        copy: "The ADA recommends you bring your child to their first appointment within 6 months of their first tooth appearing in their mouth or one year of age. We will examine your baby to make sure everything looks healthy and help discuss healthy habits for home care of their gums and teeth to get their dental care off to a great start!",
      },
      {
        title: "Pediatric Dental Examination",
        copy: "Our dental staff understands the importance of dental care starting at a very young age. We will begin with a thorough examination, identifying any possible cavities or dental ailments to begin treatment before they worsen.",
      },
      {
        title: "Pediatric Dental Cleaning",
        copy: "Our dental hygienist staff will inspect the health of the teeth and gums. They will remove plaque from the teeth as well as polish and floss the teeth to remove any excess plaque.",
      },
      {
        title: "X-rays",
        copy: "If necessary, we will also complete X-rays of your child’s teeth. Getting X-rays early can help identify any issues at a young age such as cavities or missing adult teeth. This will allow us to create a care plan at an early age and monitor any changes.",
      },
    ],
  },
];

export type Doctor = {
  slug: string;
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  intro: string;
  bio: string[];
  education: { school: string; detail: string }[];
  memberships?: string[];
  personal: string;
  quote?: string;
};

export const doctors: Doctor[] = [
  {
    slug: "dr-andrew-schmid",
    name: "Dr. Andrew Schmid",
    role: "Dentist · Midtown Dental Bismarck",
    image: "/assets/images/dr-andrew-schmid.jpg",
    imageAlt: "Dr. Andrew Schmid of Midtown Dental",
    intro:
      "A Bismarck native, Dr. Schmid brings hometown care and a commitment to continuing education to every visit.",
    bio: [
      "Dr. Schmid is a native of Bismarck, ND where he attended the University of Mary, majoring in Biology, and earned his Doctor of Dental Surgery degree in 2015 from the University of Creighton School of Dentistry in Omaha, NE.",
      "Dr. Schmid is a proud supporter of his community and is a member of the Bismarck Mandan Chamber, Donated Dental Services program, the American Dental Association and the North Dakota Dental Association. He leads a local Spear study club and has invested numerous hours in a variety of continuing education opportunities to stay up to date on all the latest techniques.",
    ],
    education: [
      { school: "University of Mary", detail: "Biology" },
      {
        school: "University of Creighton School of Dentistry",
        detail: "Doctor of Dental Surgery, 2015",
      },
    ],
    memberships: [
      "Bismarck Mandan Chamber",
      "Donated Dental Services program",
      "American Dental Association",
      "North Dakota Dental Association",
      "Local Spear study club",
    ],
    personal:
      "When he is not working, Dr. Schmid enjoys spending time with his wife and their 3 children. He has a love of the outdoors and enjoys hunting with his Pudelpointer, Teddy, as well as golfing, running and traveling.",
  },
  {
    slug: "dr-madison-morrell",
    name: "Dr. Madison Morrell",
    role: "Dentist · Midtown Dental Bismarck",
    image: "/assets/images/dr-madison-morrell.jpg",
    imageAlt: "Dr. Madison Morrell of Midtown Dental",
    intro:
      "Dr. Morrell pairs preventive care with a genuine interest in each patient — so every visit feels like a positive one.",
    bio: [
      "Dr. Morrell is a native of Bismarck, ND. She completed her undergraduate studies at Minnesota State University Moorhead and earned her Doctor of Dental Surgery degree from the University of Creighton School of Dentistry in Omaha, NE.",
      "Dr. Morrell takes great pride in making her patients feel comfortable and confident and believes dental visits should be a positive experience. She focuses on preventative care and takes the time to get to know her patients to provide care that fits each patient’s individual needs.",
    ],
    education: [
      { school: "Minnesota State University Moorhead", detail: "Undergraduate studies" },
      {
        school: "University of Creighton School of Dentistry",
        detail: "Doctor of Dental Surgery",
      },
    ],
    quote:
      "Dr. Morrell takes great pride in making her patients feel comfortable and confident and believes dental visits should be a positive experience.",
    personal:
      "When not at the office, Dr. Morrell enjoys spending time with her husband, Tony, walking their lab, reading and being with family and friends.",
  },
];

export const insuranceProviders = [
  { name: "Delta Dental", note: "Delta Dental" },
  { name: "United Concordia", note: "United Concordia" },
  { name: "TDA", note: "TDA" },
  { name: "MetLife", note: "MetLife" },
] as const;

export const paymentMethods = [
  { name: "Cash", icon: "banknote" },
  { name: "Check", icon: "pen-line" },
  { name: "Discover", icon: "credit-card" },
  { name: "Mastercard", icon: "credit-card" },
  { name: "Visa", icon: "credit-card" },
  { name: "CareCredit", icon: "heart-handshake" },
] as const;

export const firstVisitItems = [
  "New patient forms",
  "Medical history",
  "List of medications you are currently taking",
  "Insurance card, if applicable",
] as const;

export const practiceValues = [
  {
    title: "Patient Care",
    copy: "Our high level patient care starts with a warm and welcoming environment. We will treat you with dignity, care, respect, kindness and understanding. With every patient, we take the time to explain the procedures being performed so you can feel confident in your care.",
    image: "/assets/images/patient-care.jpg",
    imageAlt: "A calm, welcoming moment in the Midtown Dental practice",
  },
  {
    title: "Cutting Edge Technology",
    copy: "We stay up to date on all the latest technology to make your smile sparkle. From pediatric to preventative care and everything in between, Midtown Dental has you covered!",
    image: "/assets/images/cutting-edge.jpg",
    imageAlt: "Modern dental technology used at Midtown Dental",
  },
  {
    title: "Friendly Staff",
    copy: "We are committed to providing our patients with friendly and prompt care to allow you the most positive dental experience.",
    image: "/assets/images/friendly-staff.jpg",
    imageAlt: "The friendly team at Midtown Dental",
  },
] as const;

export const faqs = [
  {
    question: "How do I schedule an appointment?",
    answer:
      "Give us a call at (701) 222-1286 during business hours to schedule your appointment, or use the online appointment request link.",
  },
  {
    question: "What should I bring to my first visit?",
    answer:
      "At your first visit, we will need your new patient forms, medical history, list of medications you are currently taking and your insurance card if applicable.",
  },
  {
    question: "Where can I find the new patient forms?",
    answer:
      "Download the new patient form from our Patient Center. Please fill it out and bring it with you to your first appointment, or email it to NewPatientServices@midtowndb.com.",
  },
  {
    question: "How early should I arrive?",
    answer:
      "On the day of your appointment, please arrive 10 minutes early so we can get you checked in and to fill out any additional paperwork.",
  },
  {
    question: "Which insurance plans do you accept?",
    answer:
      "We are currently providers of Delta Dental, United Concordia, TDA and MetLife. Call us at (701) 222-1286 to verify your plan.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Cash, Check, Discover, Mastercard, Visa and CareCredit.",
  },
  {
    question: "Do you offer financing?",
    answer:
      "Take control of the health of your mouth. With the CareCredit healthcare credit card you can benefit from special dental financing options for your dental care. Call or ask us at your next appointment to learn more.",
  },
  {
    question: "Where are you located?",
    answer:
      "Midtown Dental Bismarck is located at 2000 N 12th St, Bismarck, ND 58501 — in the heart of Bismarck, serving the capital city and surrounding area.",
  },
] as const;

export const contactFaqs = faqs.filter((_, index) =>
  [0, 3, 7].includes(index),
);

export const insuranceFaqs = faqs.filter((_, index) =>
  [4, 5, 6].includes(index),
);

export const patientFaqs = faqs.filter((_, index) =>
  [0, 1, 2, 3, 4, 5].includes(index),
);
