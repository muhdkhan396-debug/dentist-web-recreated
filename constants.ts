import { NavItem, PricingItem, Testimonial, DoctorProfile } from './types';

export const BUSINESS_INFO = {
  name: "NYC Implant Dentist",
  altName: "Aesthetic Dentistry of Manhattan",
  phone: "(917) 675-7468",
  email: "hello@alexgausedds.com",
  location: "Midtown Manhattan, NYC",
  bookingUrl: "https://txt.care/0-Co_Ev",
};

export const NAVIGATION: NavItem[] = [
  { label: 'Home', path: '/' },
  { 
    label: 'Services', 
    path: '/services',
    children: [
      { label: 'Single Tooth Implants', path: '/dental-implants' },
      { label: 'All-on-4 / Immediate Load', path: '/immediate-load-implants' },
      { label: 'Oral Rehabilitation', path: '/oral-rehabilitation' },
      { label: 'Implant Dentures', path: '/implant-dentures' },
      { label: 'Bone Grafting & Sinus Lift', path: '/bone-graft-sinus-lift' },
      { label: 'Tooth Extractions', path: '/tooth-extractions' },
      { label: 'Soft Tissue Grafting', path: '/soft-tissue-grafting' },
      { label: 'Maintenance & Repair', path: '/implant-maintenance-and-repair' },
      { label: 'Restorative Solutions', path: '/restorative-solutions' },
      { label: 'Advanced Planning', path: '/advanced-implant-planning' },
    ]
  },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Smile Gallery', path: '/smilegallery' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const DOCTOR: DoctorProfile = {
  name: "Alex Gause D.D.S.",
  credentials: {
    education: "University of North Carolina at Chapel Hill - Adams School of Dentistry",
    residency: "Brooklyn, NY",
    advanced_training: "Kois Center - Seattle (graduate)",
    memberships: [
      "American Dental Association",
      "National Dental Association",
      "International College of Implantologists"
    ]
  },
  experience: "Founded Aesthetic Dentistry of Manhattan in 2014",
  headshot_url: "https://images.squarespace-cdn.com/content/v1/664e5061fa71855fc54da6e5/d9314965-49e4-4679-b9cd-a4fc184c1e88/Hi+Res+Headshot.JPG"
};

export const PRICING_DATA: PricingItem[] = [
  {
    service_id: "single_tooth_implant",
    name: "Single Tooth Implant",
    price_range: "Starting at $4,000",
    includes: "Implant placement, abutment, and crown",
    description: "A permanent solution for replacing a missing tooth"
  },
  {
    service_id: "all_on_x_full_arch",
    name: "All-on-X Full Arch",
    price_range: "Starting at $20,000 per arch",
    includes: "Implant placement and full-arch prosthesis",
    description: "Full arch replacement"
  },
  {
    service_id: "implant_retained_dentures",
    name: "Implant-Retained Dentures",
    price_range: "Starting at $15,000",
    includes: "For a stable, comfortable alternative to traditional dentures",
    description: "Secure denture solution"
  },
  {
    service_id: "oral_rehabilitation_full",
    name: "Full Oral Rehabilitation",
    price_range: "$25,000–$50,000+",
    includes: "Full-arch implants, restorations, bite correction",
    description: "Complete mouth reconstruction. Monthly from ~$399."
  },
  {
    service_id: "bone_grafting",
    name: "Bone Grafting",
    price_range: "Starting at $750",
    includes: "Bone grafting at time of extraction is an additional fee",
    description: "Jawbone strengthening procedure"
  },
  {
    service_id: "sinus_lift",
    name: "Sinus Lift",
    price_range: "$750-$2,500",
    includes: "Required if additional bone is needed for successful implant placement",
    description: "Upper jaw bone augmentation"
  },
  {
    service_id: "maintenance_visits",
    name: "Implant Maintenance",
    price_range: "Starting at $250",
    includes: "Includes cleaning and implant evaluation",
    description: "Regular implant care"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "maria_u",
    name: "Maria U",
    procedure: "Single Tooth Implant / Full Rehabilitation",
    quote: "I never felt like I was going to the dentist, I always felt like I was with family.",
    image_url: null
  },
  {
    id: "trauma_patient",
    name: "Trauma Recovery Patient",
    procedure: "Single Tooth Implant",
    quote: "I was always worried about pain, but my comfort was a priority at every step. I never had a problem with pain.",
    image_url: null
  },
  {
    id: "failed_root_canal",
    name: "Restorative Patient",
    procedure: "Implant for Failed Root Canal",
    quote: "I know that the team is always going to take care of me, I trust every part of the process.",
    image_url: null
  }
];

export const GALLERY_IMAGES = [
  "https://images.squarespace-cdn.com/content/v1/664e5061fa71855fc54da6e5/ccb97d74-9b4e-4da4-aa62-af147d2a7a26/1.png",
  "https://images.squarespace-cdn.com/content/v1/664e5061fa71855fc54da6e5/973c9daa-5f62-4e14-a7cb-0a0c243609c4/Harvey+2.png",
  "https://images.squarespace-cdn.com/content/v1/664e5061fa71855fc54da6e5/7e474f2c-a961-4db5-9b6b-bb5e12be5aa1/3.png",
  "https://images.squarespace-cdn.com/content/v1/664e5061fa71855fc54da6e5/c1ebb284-9a45-40c0-8f6e-c7770de7a2be/1.png",
  "https://images.squarespace-cdn.com/content/v1/664e5061fa71855fc54da6e5/22c838aa-439d-468a-afcf-d00d06d2ead5/1.png",
  "https://images.squarespace-cdn.com/content/v1/664e5061fa71855fc54da6e5/b044652a-8541-4b01-8f89-0e9062089e25/2.png"
];