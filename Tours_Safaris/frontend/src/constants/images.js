// src/constants/images.js

// Company Logo
import companyLogo from '../assets/images/dashboard/logo.png';

// Hero Images
import heroSafari from '../assets/images/hero/hero-safari.jpg';
//import heroLodge from '../assets/images/hero/hero-lodge.jpg';
//import heroContact from '../assets/images/hero/hero-contact.jpg';

// Lodge Images
//import mwibaLodge from '../assets/images/lodges/mwiba-lodge.jpg';
//import milaCamp from '../assets/images/lodges/mila-camp.jpg';
//import songaCamp from '../assets/images/lodges/songa-camp.jpg';
//import nyasiCamp from '../assets/images/lodges/nyasi-camp.jpg';
//import legendaryLodge from '../assets/images/lodges/legendary-lodge.jpg';

// Itinerary Images
import migrationSafari from '../assets/images/tourandsafaris/tour3.jpg';
import walkingSafari from '../assets/images/tourandsafaris/tour5.jpg';

// Gallery Images
import gallery1 from '../assets/images/gallery/gallery1.jpg';
import gallery2 from '../assets/images/gallery/gallery2.jpg';
import gallery3 from '../assets/images/gallery/gallery3.jpg';
import gallery4 from '../assets/images/gallery/gallery4.jpg';
import gallery5 from '../assets/images/gallery/gallery5.jpg';
import gallery6 from '../assets/images/gallery/gallery6.jpg';
import gallery7 from '../assets/images/gallery/gallery7.jpg';
import gallery8 from '../assets/images/gallery/gallery8.jpg';

// Fallback image if specific image is missing
import fallbackImage from '../assets/images/fallback.jpg';

// Export logo separately
export { companyLogo };

// Export all images
export const heroImages = {
  safari: heroSafari,
  //lodge: heroLodge,
  //contact: heroContact,
};

export const lodgeImages = {
  //mwiba: mwibaLodge,
  //mila: milaCamp,
  //songa: songaCamp,
  //nyasi: nyasiCamp,
  //legendary: legendaryLodge,
};

export const itineraryImages = {
  migration: migrationSafari,
  walking: walkingSafari,
};

export const galleryImages = [
  { id: 1, url: gallery1, title: 'Great Migration', location: 'Serengeti' },
  { id: 2, url: gallery2, title: 'Luxury Lodge', location: 'Mwiba Reserve' },
  { id: 3, url: gallery3, title: 'Elephant Herd', location: 'Tarangire' },
  { id: 4, url: gallery4, title: 'Sunset Safari', location: 'Serengeti' },
  { id: 5, url: gallery5, title: 'Ngorongoro Crater', location: 'Ngorongoro' },
  { id: 6, url: gallery6, title: 'Walking Safari', location: 'Ruaha' },
  { id: 7, url: gallery7, title: 'Hot Air Balloon', location: 'Serengeti' },
  { id: 8, url: gallery8, title: 'Lion Pride', location: 'Masai Mara' },
];

export { fallbackImage };