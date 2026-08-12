// Single source of truth for per-route SEO metadata.
//
// - Keys MUST match the route `path` strings used in `src/main.jsx` exactly
//   (including trailing slashes), because:
//     1. `src/Components/SEO.jsx` looks up the current route here to render
//        the <Helmet> tags for that page.
//     2. `prerender.js` builds its route list from `Object.keys(seoData)` and
//        generates a static `dist/<route>/index.html` for every key — a route
//        missing from this file will NOT get its own prerendered page, and
//        Ctrl+U / crawlers will fall back to the home page's HTML for it.
// - Keep `description` under ~160 characters and `keywords` short & relevant.
export const seoData = {
  "/": {
    title: "Elder Care Services at Home in Delhi NCR | Senocare",
    description:
      "Professional elder care, nursing, physiotherapy and home attendant services in Delhi, Noida and Gurgaon by Senocare.",
    keywords:
      "elder care services, home nursing, physiotherapy at home, senior care Delhi NCR, Senocare",
  },

  "/our-story/": {
    title: "Our Story | Senocare",
    description:
      "Learn about Senocare's mission, vision and commitment to compassionate elderly care services.",
    keywords: "Senocare story, elderly care mission, senior care company",
  },

  "/our-team": {
    title: "Meet Our Expert Team Members | Senocare",
    description:
      "We are a team of elder care experts who have worked in the senior living industry in India.",
    keywords: "Senocare team, nurses, physiotherapists, caregivers",
  },

  "/package": {
    title: "Home Healthcare Packages | Senocare",
    description:
      "Explore Senocare's home healthcare packages combining nursing, physiotherapy, doctor visits and more, tailored to your needs.",
    keywords: "home healthcare packages, senior care plans, Senocare package",
  },

  "/faq": {
    title: "Frequently Asked Questions (FAQs) | Senocare",
    description:
      "We have compiled some of the most frequently asked questions about elderly and senior citizen care at Senocare.",
    keywords: "Senocare FAQ, home care questions, nursing FAQ",
  },

  "/volunteer": {
    title: "Volunteer Registration | Elderly & Senior Citizen Helpers",
    description:
      "Want to volunteer for senior citizens? Explore elderly care volunteer programs, plus reviews from former volunteers.",
    keywords: "volunteer elderly care, volunteer healthcare, Senocare volunteer",
  },

  "/privacy-policy": {
    title: "Privacy Policy | Senocare",
    description:
      "Read Senocare's privacy policy covering the collection, use and disclosure of personal information shared by users on our website.",
    keywords: "privacy policy, data protection, Senocare privacy",
  },

  "/term-and-conditions": {
    title: "Terms and Conditions | Senocare",
    description:
      "Please read Senocare's website terms and conditions before taking our services. Using the website means you agree to these terms.",
    keywords: "terms and conditions, Senocare terms, website terms",
  },

  "/disclaimer": {
    title: "Disclaimer | Senocare",
    description:
      "Read the official disclaimer for Senocare's elderly and senior care home services.",
    keywords: "Senocare disclaimer, healthcare disclaimer, home care terms",
  },

  "/our-vision": {
    title: "Our Vision | Senocare",
    description:
      "Our vision is to create a safe, happy and healthy environment for seniors in India, with access to healthcare and hassle-free daily living support.",
    keywords: "Senocare vision, home healthcare vision, senior care vision",
  },

  "/nursing-care": {
    title: "Nursing Services | Skilled Nurses & Attendants | Senocare",
    description:
      "Senocare offers professional nursing services by skilled nurses and attendants for personalized care at home, 24/7.",
    keywords: "home nursing care services, skilled nurses at home, nursing attendants",
  },

  "/featured-products/3-function-hospital-beds": {
    title: "3 Function Hospital Beds: Comfort & Support | Senocare",
    description:
      "Discover 3 function hospital beds offering comfort, functionality, and support. Rent the perfect solution for your healthcare needs.",
    keywords: "3 function hospital bed rental, hospital bed for home, Senocare",
  },

  "/featured-products/5-functional-hospital-bed": {
    title: "5 Functional Hospital Bed | Quality Medical Equipment",
    description:
      "Discover the versatile 5 functional hospital bed, essential for medical care. Rent quality medical equipment for optimal patient comfort.",
    keywords: "5 function hospital bed rental, medical equipment rental, Senocare",
  },

  "/featured-products/multipara-monitor": {
    title: "Multipara Monitor for Rent | Senocare",
    description:
      "Rent a multipara monitor from Senocare for advanced patient monitoring. High-quality devices available for comprehensive care.",
    keywords: "multipara monitor rental, patient monitor for home, Senocare",
  },

  "/featured-products/grab-bars/": {
    title: "Grab Bars for Elderly Safety - Rent with Senocare",
    description:
      "Rent grab bars for elderly safety with Senocare. Ensure a secure and accessible living environment for your loved ones.",
    keywords: "grab bars for elderly, bathroom safety rails, Senocare rental",
  },

  "/arthritis": {
    title: "Arthritis Explained: Causes, Symptoms, Home Physiotherapy",
    description:
      "Discover the causes, symptoms, and home physiotherapy for arthritis. Learn about managing arthritis symptoms and treatments at home.",
    keywords: "arthritis treatment at home, arthritis physiotherapy, Senocare",
  },

  "/physiotherapy-home-service/stroke-paralysis": {
    title: "Physiotherapy for Stroke Paralysis at Home | Senocare",
    description:
      "Understand stroke paralysis, its causes, and effective physiotherapy-led recovery strategies to regain movement at home.",
    keywords: "stroke paralysis physiotherapy, stroke recovery at home, Senocare",
  },

  "/expert-wound-care-management-for-seniors/": {
    title: "Expert Wound Care Management for Seniors | Senocare",
    description:
      "Learn effective wound care management strategies for seniors. Essential tips and techniques to promote healing and prevent complications.",
    keywords: "wound care for seniors, wound management at home, Senocare",
  },

  "/nursing-care/post-operative-care-at-home/": {
    title: "Post Operative Care at Home | Senocare",
    description:
      "Discover effective strategies for post-operative care at home. Ensure optimal recovery with expert advice and personalized nursing support.",
    keywords: "post operative care at home, post surgery nursing, Senocare",
  },

  "/home-attendant-services-for-elderly": {
    title: "Home Attendant Services for Elderly | Senocare",
    description:
      "Compassionate home attendant services for elderly by Senocare. Certified attendants provide hygiene, mobility, and medical support at home.",
    keywords: "home attendant for elderly, elder care attendant, Senocare",
  },

  "/nursing-care/palliative-care-for-lymphoma": {
    title: "Palliative Care for Lymphoma Patients | Senocare",
    description:
      "Navigate lymphoma challenges with care. Explore palliative support for lymphoma patients, addressing physical and emotional needs.",
    keywords: "palliative care for lymphoma patients, cancer palliative care, Senocare",
  },

  "/nursing-care/palliative-care-at-home": {
    title: "Palliative Care at Home: Support for Serious Illness | Senocare",
    description:
      "Explore specialized palliative care at home for serious illnesses like cancer and heart disease. Better quality of life and symptom management.",
    keywords: "palliative care at home, end of life care, Senocare",
  },

  "/dementia": {
    title: "Managing Dementia: Effective Tips from Senocare Experts",
    description:
      "Managing dementia can be overwhelming. Get effective tips on medication, therapy, and lifestyle changes from trusted Senocare experts.",
    keywords: "dementia care at home, Alzheimer's care, Senocare",
  },

  "/physiotherapy-home-service": {
    title: "Physiotherapy at Home Services: Expert Care in Your Space",
    description:
      "Physiotherapy at Home Services provides personalized, expert care in the comfort of your home. Skilled therapists help with recovery and mobility.",
    keywords: "physiotherapy home service, physiotherapist at home, Senocare",
  },

  "/physiotherapy-at-home-in-gurgaon/": {
    title: "Physiotherapy at Home in Gurgaon: Elevate Well-being | Senocare",
    description:
      "Experience expert physiotherapy at home in Gurgaon with Senocare. Tailored care, vital checkups, and dietary support at your doorstep.",
    keywords: "physiotherapy at home in Gurgaon, Senocare Gurgaon",
  },

  "/physiotherapy-at-home-in-delhi": {
    title: "Physiotherapy at Home in Delhi: Elevate Well-being with Senocare",
    description:
      "Physiotherapy at Home in Delhi by Senocare. Personalized care, vital checkups, and dietary support for optimal well-being at your doorstep.",
    keywords: "physiotherapy at home in Delhi, Senocare Delhi",
  },

  "/physiotherapy-at-home-in-noida/": {
    title: "Physiotherapy at Home in Noida: Senocare's Healing Touch",
    description:
      "Experience personalized physiotherapy at home in Noida with Senocare. Skilled therapists deliver top-notch care at your doorstep.",
    keywords: "physiotherapy at home in Noida, Senocare Noida",
  },

  "/physiotherapy-at-home-in-faridabad/": {
    title: "Physiotherapy at Home in Faridabad: Senocare's Wellness",
    description:
      "Experience optimal well-being with Senocare's physiotherapy at home in Faridabad. Certified therapists, tailored plans, clinic-like convenience.",
    keywords: "physiotherapy at home in Faridabad, Senocare Faridabad",
  },

  "/doctor-on-home-visit/": {
    title: "Doctors for Home Visit in Delhi & NCR | Senocare",
    description:
      "Book trusted doctors for home visits in Delhi & NCR with Senocare. Get medical care at your doorstep from experienced professionals.",
    keywords: "doctor home visit Delhi NCR, at home doctor consultation, Senocare",
  },

  "/critical-care/": {
    title: "Critical Care at Home | Senocare",
    description:
      "Senocare offers critical care at home services for elderly patients, with skilled medical professionals providing compassionate ICU-level care.",
    keywords: "critical care at home, ICU care at home, Senocare",
  },

  "/tele-consultation/": {
    title: "Tele Consultation for Seniors | Senocare",
    description:
      "Explore convenient tele consultation services for senior citizens at Senocare. Expert healthcare guidance from the comfort of home.",
    keywords: "tele consultation for seniors, online doctor consultation, Senocare",
  },

  "/vaccination-at-home/": {
    title: "Vaccination at Home in Delhi NCR | Senocare",
    description:
      "Safe, convenient vaccination at home for adults and seniors in Delhi NCR. Certified nurses, all vaccines. Book with Senocare now.",
    keywords: "vaccination at home, home vaccination Delhi NCR, Senocare",
  },

  "/icu-at-home-service/": {
    title: "ICU at Home Services | Senocare",
    description:
      "ICU at Home by Senocare: expert critical care in your home. Skilled nursing, 24/7 monitoring, IV treatments, and more for optimal well-being.",
    keywords: "ICU at home service, home ICU setup, Senocare",
  },

  "/nutrition-and-diet/": {
    title: "Nutrition & Diet Counseling at Home | Senocare",
    description:
      "Get personalized nutrition and diet counseling at home from Senocare's expert dietitians for faster recovery and better health.",
    keywords: "diet and nutrition care at home, dietitian for elderly, Senocare",
  },

  "/photo-gallery/": {
    title: "Elderly and Senior Citizen Care Photo Gallery | Senocare",
    description:
      "Browse our photo gallery of elderly and senior citizen care moments, from health & fitness to travel, memories and milestones.",
    keywords: "Senocare photo gallery, senior citizen care pictures",
  },

  "/latest-events/": {
    title: "Latest Events for Senior Citizens | Senocare",
    description:
      "Explore all the latest events and activities specially designed for senior citizens by Senocare.",
    keywords: "senior citizen events, activities for elderly, Senocare events",
  },

  "/featured-products/": {
    title: "Rent Medical Equipment | Senocare",
    description:
      "Get access to high-quality medical equipment on rent for your healthcare needs. Save costs and ensure patient care with reliable rentals.",
    keywords: "hospital bed rental, wheelchair rental, medical equipment rental, Senocare",
  },

  "/testimonials/": {
    title: "Client Reviews & Customer Testimonials | Senocare",
    description:
      "Senocare excels in delivering quality elder care services. Read what our clients and customers have to say about our care.",
    keywords: "Senocare reviews, client testimonials, senior care feedback",
  },

  "/video-reviews/": {
    title: "Client Video Reviews & Ratings | Senocare",
    description:
      "View client video reviews and ratings about our caregivers, home care services, and senior citizen care at Senocare.",
    keywords: "Senocare video reviews, caregiver ratings, client videos",
  },

  "/press/": {
    title: "News, Press & Media Presence | Senocare",
    description:
      "Find news releases, photos, videos, and publications about Senocare's elderly and senior care services.",
    keywords: "Senocare press, Senocare in the news, senior care media",
  },

  "/physiotherapy-home-service/cupping-therapy-for-headaches": {
    title: "Cupping Therapy for Headaches | Senocare",
    description:
      "Discover natural relief with cupping therapy for headaches. Explore how cupping can alleviate headache symptoms holistically.",
    keywords: "cupping therapy for headaches, headache relief, Senocare",
  },

  "/physiotherapy-home-service/cupping-therapy-for-neck-pain/": {
    title: "Cupping Therapy for Neck Pain | Senocare",
    description:
      "Discover natural relief with cupping therapy for neck pain. Explore how cupping can ease neck stiffness and discomfort holistically.",
    keywords: "cupping therapy for neck pain, neck pain relief, Senocare",
  },

  "/physiotherapy-home-service/dry-needling/": {
    title: "Dry Needling Therapy: Benefits and Types | Senocare",
    description:
      "Discover the advantages and types of dry needling therapy. Senocare offers at-home sessions for musculoskeletal pain relief.",
    keywords: "dry needling therapy, musculoskeletal pain relief, Senocare",
  },

  "/physiotherapy-home-service/physiotherapy-for-lumbar-spondylosis/": {
    title: "Managing Lumbar Spondylosis with Physiotherapy | Senocare",
    description:
      "Manage lumbar spondylosis effectively with physiotherapy. Discover causes, symptoms, and exercises for a pain-free back with Senocare.",
    keywords: "lumbar spondylosis physiotherapy, back pain treatment, Senocare",
  },

  "/physiotherapy-home-service/paralysis-treatment-at-home/": {
    title: "Paralysis Treatment at Home | Senocare",
    description:
      "Discover effective paralysis treatment at home with physiotherapy exercises. Improve strength, mobility, and independence.",
    keywords: "paralysis treatment at home, paralysis physiotherapy, Senocare",
  },

  "/physiotherapy-home-service/physiotherapy-exercises-for-paralysis/": {
    title: "Home Physiotherapy Exercises for Paralysis | Senocare",
    description:
      "Unlock recovery with physiotherapy exercises for paralysis. Improve strength and mobility at home with expert guidance.",
    keywords: "physiotherapy exercises for paralysis, paralysis rehab, Senocare",
  },

  "/physiotherapy-home-service/electrotherapy-in-physiotherapy/": {
    title: "Electrotherapy in Physiotherapy: Electrical Healing | Senocare",
    description:
      "Explore the healing power of electrotherapy in physiotherapy. Electrical currents stimulate nerves and aid natural healing.",
    keywords: "electrotherapy physiotherapy, pain relief therapy, Senocare",
  },

  "/physiotherapy-home-service/ultrasound-therapy/": {
    title: "Ultrasound Therapy in Physiotherapy: Benefits & Healing | Senocare",
    description:
      "Explore the advantages of ultrasound therapy in physiotherapy. This non-invasive treatment promotes healing and alleviates pain.",
    keywords: "ultrasound therapy physiotherapy, non-invasive pain relief, Senocare",
  },

  "/holistic-care-gurgaon/": {
    title: "Elder Care Services in Gurgaon | Senocare",
    description:
      "Looking for reliable elder care services in Gurgaon? Our experienced team provides compassionate and professional care for your loved ones.",
    keywords: "holistic care in Gurgaon, elder care Gurgaon, Senocare",
  },

  "/holistic-care-delhi/": {
    title: "Elder Care Services in Delhi | Senocare",
    description:
      "Get compassionate and reliable elder care services in Delhi. Our team provides personalized care for seniors, tailored to their needs.",
    keywords: "holistic care in Delhi, elder care Delhi, Senocare",
  },

  "/holistic-care-noida/": {
    title: "Elderly Care Home in Noida | Senocare",
    description:
      "Looking for an elderly care home in Noida? We offer a safe and caring environment for seniors. Contact us for personalized care.",
    keywords: "holistic care in Noida, elder care Noida, Senocare",
  },

  "/holistic-care-hyderabad/": {
    title: "Elder Care Services in Hyderabad | Senocare",
    description:
      "Senocare offers holistic elder care services in Hyderabad, combining nursing, physiotherapy and day-to-day support for seniors.",
    keywords: "holistic care in Hyderabad, elder care Hyderabad, Senocare",
  },

  "/physiotherapy-home-service/parkinsons-disease-treatment/": {
    title: "Optimizing Health: Parkinson's Disease Treatment Solutions",
    description:
      "Explore effective Parkinson's disease treatment options for comprehensive care. Advancements in managing symptoms and quality of life.",
    keywords: "Parkinson's disease treatment, Parkinson's physiotherapy, Senocare",
  },

  "/physiotherapy-home-service/back-pain-treatment-at-home/": {
    title: "Effective Back Pain Treatment at Home: Tips & Remedies",
    description:
      "Discover top home remedies and exercises for effective back pain relief. Practical tips and treatments to manage back discomfort at home.",
    keywords: "back pain treatment at home, back pain physiotherapy, Senocare",
  },

  "/physiotherapy-home-service/ankle-sprain/": {
    title: "Effective Physiotherapy for Ankle Sprain | Senocare",
    description:
      "Recover faster from an ankle sprain with Senocare's expert physiotherapy. Tailored treatments reduce pain and improve mobility.",
    keywords: "ankle sprain physiotherapy, ankle injury recovery, Senocare",
  },

  "/physiotherapy-home-service/adhesive-capsulitis-treatment/": {
    title: "Adhesive Capsulitis (Frozen Shoulder) Treatment | Senocare",
    description:
      "Explore effective solutions for adhesive capsulitis (frozen shoulder). Get relief from pain and restore mobility with targeted treatments.",
    keywords: "frozen shoulder treatment, adhesive capsulitis physiotherapy, Senocare",
  },

  "/physiotherapy-home-service/plantar-fasciitis/": {
    title: "Plantar Fasciitis Treatment | Senocare Physiotherapy",
    description:
      "Relieve heel pain from plantar fasciitis with expert care at Senocare Physiotherapy. Personalized treatments restore mobility.",
    keywords: "plantar fasciitis treatment, heel pain relief, Senocare",
  },

  "/physiotherapy-home-service/ankylosing-spondylitis/": {
    title: "Ankylosing Spondylitis Treatment | Senocare Physiotherapy",
    description:
      "Senocare offers expert physiotherapy for ankylosing spondylitis, helping manage pain, improve mobility, and enhance quality of life.",
    keywords: "ankylosing spondylitis treatment, spine physiotherapy, Senocare",
  },

  "/physiotherapy-home-service/rheumatoid-arthritis/": {
    title: "Manage Rheumatoid Arthritis Effectively | Senocare",
    description:
      "Explore insights on rheumatoid arthritis, its symptoms, causes, and treatment options with Senocare's physiotherapy support.",
    keywords: "rheumatoid arthritis treatment, joint pain physiotherapy, Senocare",
  },

  "/physiotherapy-home-service/footdrop/": {
    title: "Foot Drop: Causes and Physiotherapy Treatment | Senocare",
    description:
      "Discover the causes and treatment options for foot drop, including physiotherapy exercises and bracing to improve mobility.",
    keywords: "foot drop treatment, foot drop physiotherapy, Senocare",
  },

  "/physiotherapy-home-service/fibromyalgia/": {
    title: "Fibromyalgia: Symptoms and Treatment | Senocare",
    description:
      "Learn about fibromyalgia, its symptoms, causes, and effective treatment options. Manage pain and improve quality of life naturally.",
    keywords: "fibromyalgia treatment, fibromyalgia physiotherapy, Senocare",
  },

  "/nursing-care/expert-post-stroke-care/": {
    title: "Expert Post-Stroke Care: Vital Support for Recovery | Senocare",
    description:
      "Discover essential post-stroke care strategies. Ensure optimal recovery with expert nursing guidance from Senocare.",
    keywords: "post stroke care at home, stroke recovery nursing, Senocare",
  },

  "/care-packages/": {
    title: "Elderly Care Packages | Senocare",
    description:
      "Affordable and customized elderly care packages for home healthcare and support, tailored to every family's needs.",
    keywords: "elder care packages, home healthcare plans, senior care packages",
  },

  "/nursing-care-delhi/": {
    title: "Expert Home Care Nurse Services in Delhi | Senocare",
    description:
      "Senocare offers professional home care nurse services in Delhi. Experienced nurses for personalized medical care and comfort at home.",
    keywords: "nursing care at home in Delhi, home nurse Delhi, Senocare",
  },

  "/nursing-care-gurgaon/": {
    title: "Patient Care Services in Gurgaon: Compassionate & Reliable",
    description:
      "Patient care services in Gurgaon offer professional and compassionate care for individuals at home, tailored to your needs.",
    keywords: "nursing care at home in Gurgaon, home nurse Gurgaon, Senocare",
  },

  "/nursing-care-noida/": {
    title: "Home Care Services in Noida: Reliable & Compassionate Care",
    description:
      "Home care services in Noida offer expert, compassionate care for your loved ones. Trained professionals ensure comfort and support at home.",
    keywords: "nursing care at home in Noida, home nurse Noida, Senocare",
  },

  "/health-fitness/": {
    title: "Elder Healthcare Services at Home | Senocare",
    description:
      "Senocare's elder healthcare services include medical assistance, medicine reminders and home delivery of medicines in Delhi, Gurgaon and Noida.",
    keywords: "elder healthcare at home, senior health services, Senocare",
  },

  "/memories-milestones/": {
    title: "Celebrate Special Occasions and Milestones for Seniors | Senocare",
    description:
      "Our Care Managers help plan birthdays, anniversaries, festival decor, pooja services, and personalized photo shoots for your parents.",
    keywords: "milestone celebrations for seniors, senior citizen events, Senocare",
  },

  "/safety-homecare/": {
    title: "Home Security and Maintenance Services for Elderly | Senocare",
    description:
      "Senocare helps with efficient home maintenance and security — plumber, electrician, carpenter and more at affordable rates.",
    keywords: "home security for elderly, home maintenance services, Senocare",
  },

  "/form-filing/": {
    title: "Doorstep Banking & Form Filing Services for Seniors | Senocare",
    description:
      "Senocare provides income tax return filing, paperwork, documentation, and doorstep banking services for senior citizens.",
    keywords: "form filing for seniors, doorstep banking, Senocare",
  },

  "/technology-troubleshooting/": {
    title: "Technology Assistance for Seniors in Delhi NCR | Senocare",
    description:
      "Want to teach your parents how to video chat from abroad? Senocare offers technology assistance for seniors to get familiar with apps.",
    keywords: "technology help for seniors, tech support for elderly, Senocare",
  },

  "/travel-tours/": {
    title: "Travel & Tours Services for Elderly in Delhi NCR | Senocare",
    description:
      "Want to plan your parents' travel from miles away? Senocare helps with travel and visa assistance, bookings and passport renewal.",
    keywords: "travel assistance for elderly, senior travel services, Senocare",
  },

  "/package/subscription/": {
    title: "Subscribe to a Senocare Care Package",
    description:
      "Give us the details of your care needs so our team can match you with the right Senocare care package for your parents.",
    keywords: "Senocare subscription, elder care package signup",
  },

  "/package/customize-plan": {
    title: "Customize Your Senocare Care Package",
    description:
      "Build a customized elder care plan with Senocare. Choose from health, safety, travel, forms, technology and milestone services.",
    keywords: "customize care plan, personalized elder care, Senocare",
  },

  "/subscribe-form/": {
    title: "Registration Form | Senocare",
    description:
      "Register for Senocare and select your preferred elder care package and subscription duration.",
    keywords: "Senocare registration form, subscribe to elder care",
  },

  "/automated-wheelchairs/": {
    title: "Automated Wheelchair Rental for Elderly | Senocare",
    description:
      "Rent automated wheelchairs for elderly individuals. Enhance mobility and independence with Senocare's convenient rental services.",
    keywords: "automated wheelchair rental, wheelchair for elderly, Senocare",
  },

  "/featured-products/stollers/": {
    title: "Strollers for Elderly Rental | Senocare",
    description:
      "Explore Senocare's rental options for strollers designed for elderly individuals — comfortable, reliable mobility solutions.",
    keywords: "stroller rental for elderly, mobility aids for seniors, Senocare",
  },

  "/featured-products/walkers-for-elderly/": {
    title: "Rent Walkers for Elderly | Senocare",
    description:
      "Discover convenience with Senocare's rental service for walkers designed specifically for the elderly. Rent reliable mobility aids today.",
    keywords: "walker rental for elderly, mobility aids for seniors, Senocare",
  },
};
