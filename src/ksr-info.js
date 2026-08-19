export const ksrInfo = {
  name: 'KSR Realty Ventures Pvt. Ltd.',
  shortName: 'KSR Realty',
  phone: '+91 7470750708',
  phoneHref: 'tel:+917470750708',
  email: 'connect@ksrrealtyventures.com',
  emailHref: 'mailto:connect@ksrrealtyventures.com',
  address: '708, Cliffton Corporate, Vijay Nagar, Indore',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=KSR+REALTY+708+Cliffton+Corporate+Vijay+Nagar+Indore',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.1108943137306!2d75.8981487!3d22.761265500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396303784f45f729%3A0x58584369c3d645de!2sKSR%20REALTY%20VENTURES%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1779450050775!5m2!1sen!2sin',
  socials: {
    instagram: 'https://www.instagram.com/ksrrealtyventures?igsh=MXBpa2Vzd29jYWE2cQ==',
    facebook: 'https://www.facebook.com/share/1BMHHoz5WC/',
    linkedin: 'https://www.linkedin.com/company/ksr-realty-ventures-pvt-ltd/',
  },
};

export function whatsappUrl(message = 'Hello KSR Realty, I am interested in property options in Indore.') {
  return `https://wa.me/917470750708?text=${encodeURIComponent(message)}`;
}

export const ksrServices = [
  'Buy Property',
  'Sell Property',
  'Rent / Lease',
  'Verified Builder Projects',
  'Complimentary VIP Site Visits',
  'Zero Brokerage Advisory',
  'RERA-checked Projects',
  'Home Loan Assistance',
  'Property Valuation',
  'Legal Support',
  'Turnkey Construction',
  'Residential Construction',
  'Commercial Construction',
  'Interior & Renovation',
];

