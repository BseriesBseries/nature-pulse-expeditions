import React, { useState, useEffect } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Typography,
  Grid,
  Box,
  Button,
  Paper,
  Chip,
  Divider,
  Rating,
  Avatar,
  Card,
  CardMedia,
  CardContent,
  Tab,
  Tabs,
  Breadcrumbs,
  Link,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  useTheme,
  alpha,
  Skeleton,
  Fade,
  Zoom,
  Stack,
  Tooltip,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  LocationOn,
  CalendarToday,
  Groups,
  CheckCircle,
  ExpandMore,
  WhatsApp,
  Email,
  Phone,
  ArrowBack,
  Share,
  Favorite,
  FavoriteBorder,
  AccessTime,
  Check,
  Close,
  PhotoLibrary,
  Bed,
  RestaurantMenu,
  Terrain,
  ArrowForward,
} from '@mui/icons-material';

// Import local tour images
import tour1 from '../assets/images/tourandsafaris/tour1.jpg';
import tour2 from '../assets/images/tourandsafaris/tour2.jpg';
import tour3 from '../assets/images/tourandsafaris/tour3.jpg';
import tour4 from '../assets/images/tourandsafaris/tour4.jpg';
import tour5 from '../assets/images/tourandsafaris/tour5.jpg';
import tour6 from '../assets/images/tourandsafaris/tour6.jpg';

// Styled Components
const GlassCard = styled(Paper)(({ theme }) => ({
  background: alpha(theme.palette.background.paper, 0.9),
  backdropFilter: 'blur(20px)',
  borderRadius: theme.spacing(3),
  border: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
  overflow: 'hidden',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: `0 20px 40px ${alpha(theme.palette.common.black, 0.1)}`,
  },
}));

const DayCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  border: 'none',
  background: alpha(theme.palette.background.paper, 0.8),
  backdropFilter: 'blur(10px)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateX(8px)',
    boxShadow: theme.shadows[4],
  },
}));

const GalleryImage = styled(CardMedia)(({ theme }) => ({
  height: 280,
  borderRadius: theme.spacing(2),
  cursor: 'pointer',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'scale(1.03)',
    boxShadow: theme.shadows[8],
  },
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  '& .MuiTabs-indicator': {
    height: 3,
    borderRadius: '3px 3px 0 0',
    backgroundColor: theme.palette.secondary.main,
  },
  '& .MuiTab-root': {
    textTransform: 'none',
    fontWeight: 500,
    fontSize: '1rem',
    minHeight: 56,
    transition: 'all 0.2s',
    '&:hover': {
      color: theme.palette.secondary.main,
      backgroundColor: alpha(theme.palette.secondary.main, 0.05),
    },
    '&.Mui-selected': {
      color: theme.palette.secondary.main,
      fontWeight: 600,
    },
  },
}));

const FeatureChip = styled(Chip)(({ theme }) => ({
  borderRadius: theme.spacing(1.5),
  fontWeight: 500,
  fontSize: '0.85rem',
  '& .MuiChip-icon': {
    color: 'inherit',
  },
}));

const IconBox = styled(Box)(({ theme, color = 'secondary' }) => ({
  width: 56,
  height: 56,
  borderRadius: theme.spacing(1.5),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: alpha(theme.palette[color].main, 0.1),
  color: theme.palette[color].main,
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette[color].main,
    color: theme.palette[color].contrastText,
    transform: 'scale(1.1) rotate(5deg)',
  },
}));

const TabPanel = ({ children, value, index, ...other }) => (
  <Fade in={value === index} timeout={400}>
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 4 }}>{children}</Box>}
    </div>
  </Fade>
);

const TripDetail = () => {
  const { id } = useParams();
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tabValue, setTabValue] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [expandedDay, setExpandedDay] = useState(0);
  const theme = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      const trips = {
        1: {
          id: 1,
          name: 'Big Five Encounters & Zanzibar Beaches',
          shortDescription: 'Experience the best of Tanzania with thrilling wildlife safaris and relaxation on pristine Zanzibar beaches.',
          fullDescription: 'This comprehensive safari combines the thrill of witnessing the Big Five in their natural habitat with the relaxation of Zanzibar\'s stunning beaches.',
          highlights: [
            'Game drives in Serengeti National Park',
            'Ngorongoro Crater exploration',
            'Tarangire elephant herds',
            'Spice tour in Zanzibar',
            'Prison Island snorkeling',
            'Sunset dhow cruise',
          ],
          itinerary: [
            {
              day: 1,
              title: 'Arrival in Arusha',
              description: 'Arrive at Kilimanjaro International Airport. Meet your guide and transfer to your hotel.',
              accommodation: 'Arusha Serena Hotel',
              meals: ['Dinner'],
              activities: ['Airport transfer', 'Welcome briefing'],
            },
            {
              day: 2,
              title: 'Arusha to Tarangire National Park',
              description: 'After breakfast, drive to Tarangire National Park. Afternoon game drive in search of elephants.',
              accommodation: 'Tarangire Safari Lodge',
              meals: ['Breakfast', 'Lunch', 'Dinner'],
              activities: ['Game drive', 'Bird watching'],
            },
            {
              day: 3,
              title: 'Tarangire to Serengeti',
              description: 'Morning game drive in Tarangire, then drive to Serengeti.',
              accommodation: 'Serengeti Serena Safari Lodge',
              meals: ['Breakfast', 'Lunch', 'Dinner'],
              activities: ['Game drive', 'Scenic drive'],
            },
            {
              day: 4,
              title: 'Full Day in Serengeti',
              description: 'Full day exploring Serengeti. Picnic lunch in the bush.',
              accommodation: 'Serengeti Serena Safari Lodge',
              meals: ['Breakfast', 'Lunch', 'Dinner'],
              activities: ['Full day game drive', 'Bush picnic'],
            },
            {
              day: 5,
              title: 'Serengeti to Ngorongoro',
              description: 'Morning game drive in Serengeti, then drive to Ngorongoro.',
              accommodation: 'Ngorongoro Wildlife Lodge',
              meals: ['Breakfast', 'Lunch', 'Dinner'],
              activities: ['Game drive', 'Maasai village visit'],
            },
            {
              day: 6,
              title: 'Ngorongoro Crater Tour',
              description: 'Descend into the Ngorongoro Crater for a half-day game drive.',
              accommodation: 'Lake Manyara Wildlife Lodge',
              meals: ['Breakfast', 'Lunch', 'Dinner'],
              activities: ['Crater game drive', 'Picnic lunch'],
            },
            {
              day: 7,
              title: 'Lake Manyara to Zanzibar',
              description: 'Morning game drive in Lake Manyara. Afternoon flight to Zanzibar.',
              accommodation: 'Zanzibar Beach Resort',
              meals: ['Breakfast', 'Lunch'],
              activities: ['Game drive', 'Flight to Zanzibar'],
            },
            {
              day: 8,
              title: 'Zanzibar Beach Relaxation',
              description: 'Free day to relax on the beautiful beaches of Zanzibar.',
              accommodation: 'Zanzibar Beach Resort',
              meals: ['Breakfast'],
              activities: ['Beach relaxation', 'Swimming'],
            },
            {
              day: 9,
              title: 'Stone Town Tour',
              description: 'Guided tour of this UNESCO World Heritage site.',
              accommodation: 'Stone Town Hotel',
              meals: ['Breakfast'],
              activities: ['Stone Town tour', 'Spice market visit'],
            },
            {
              day: 10,
              title: 'Departure',
              description: 'Transfer to Zanzibar International Airport for your flight home.',
              accommodation: 'None',
              meals: ['Breakfast'],
              activities: ['Airport transfer'],
            },
          ],
          pricing: [
            { type: 'Budget Camping', price: '2,150', persons: '1-2', note: 'Shared facilities' },
            { type: 'Mid-Range Lodge', price: '2,650', persons: '3-4', note: 'Private facilities' },
            { type: 'Luxury Lodge', price: '3,250', persons: '5-6', note: 'All-inclusive' },
          ],
          included: [
            'Park fees',
            'Professional English-speaking guide',
            '4x4 safari vehicle with pop-up roof',
            'Accommodation as per itinerary',
            'Meals during safari',
            'Bottled drinking water',
            'Airport transfers',
            'Flight to Zanzibar',
          ],
          excluded: [
            'International flights',
            'Travel insurance',
            'Visa fees',
            'Tips & gratuities',
            'Personal expenses',
            'Alcoholic beverages',
          ],
          accommodations: [
            {
              name: 'Arusha Serena Hotel',
              image: tour1,
              description: 'Luxury hotel in Arusha with beautiful gardens and pool.',
              amenities: ['Pool', 'Restaurant', 'Bar', 'WiFi', 'Spa'],
            },
            {
              name: 'Tarangire Safari Lodge',
              image: tour2,
              description: 'Lodge overlooking Tarangire River.',
              amenities: ['Pool', 'Restaurant', 'Bar', 'Game drives'],
            },
            {
              name: 'Serengeti Serena Safari Lodge',
              image: tour3,
              description: 'Lodge with stunning views of the Serengeti plains.',
              amenities: ['Pool', 'Restaurant', 'Bar', 'Safari tours'],
            },
          ],
          faqs: [
            {
              question: 'What is the best time to go?',
              answer: 'The best time for wildlife viewing is during the dry season (June to October).',
            },
            {
              question: 'Do I need a visa?',
              answer: 'Yes, most visitors need a visa for Tanzania.',
            },
            {
              question: 'What should I pack?',
              answer: 'Light clothing in neutral colors, warm jacket, comfortable shoes, sunscreen, hat, camera.',
            },
          ],
          images: [tour1, tour2, tour3, tour4, tour5, tour6],
          duration: '10 days / 9 nights',
          groupSize: '2-6 people',
          bestTime: 'June to October',
          difficulty: 'Easy',
          rating: 4.8,
          reviewCount: 124,
        },
        2: {
          id: 2,
          name: 'Paradise Beaches & Big Five Safari Thrills',
          shortDescription: 'Combine the excitement of a Big Five safari with the tranquility of Zanzibar\'s paradise beaches.',
          fullDescription: 'Experience the perfect blend of adventure and relaxation on this comprehensive Tanzania safari.',
          highlights: [
            'Big Five Safari in Northern Tanzania',
            'Zanzibar White Sand Beaches',
            'Stone Town UNESCO Heritage Site',
            'Spice Farm Tour',
            'Prison Island Excursion',
          ],
          itinerary: [
            {
              day: 1,
              title: 'Arrival in Arusha',
              description: 'Arrive at Kilimanjaro International Airport.',
              accommodation: 'Arusha Planet Lodge',
              meals: ['Dinner'],
              activities: ['Airport transfer'],
            },
            {
              day: 2,
              title: 'Arusha to Tarangire',
              description: 'Drive to Tarangire National Park. Afternoon game drive.',
              accommodation: 'Tarangire Safari Lodge',
              meals: ['Breakfast', 'Lunch', 'Dinner'],
              activities: ['Game drive'],
            },
            {
              day: 3,
              title: 'Tarangire to Lake Manyara',
              description: 'Morning game drive in Tarangire, then drive to Lake Manyara.',
              accommodation: 'Lake Manyara Wildlife Lodge',
              meals: ['Breakfast', 'Lunch', 'Dinner'],
              activities: ['Game drive'],
            },
            {
              day: 4,
              title: 'Lake Manyara to Serengeti',
              description: 'Drive to Serengeti via Ngorongoro Conservation Area.',
              accommodation: 'Serengeti Heritage Camp',
              meals: ['Breakfast', 'Lunch', 'Dinner'],
              activities: ['Game drive', 'Scenic drive'],
            },
            {
              day: 5,
              title: 'Full Day in Serengeti',
              description: 'Full day exploring Serengeti with picnic lunch.',
              accommodation: 'Serengeti Heritage Camp',
              meals: ['Breakfast', 'Lunch', 'Dinner'],
              activities: ['Full day game drive'],
            },
            {
              day: 6,
              title: 'Serengeti to Ngorongoro',
              description: 'Morning game drive in Serengeti, then drive to Ngorongoro.',
              accommodation: 'Ngorongoro Wildlife Lodge',
              meals: ['Breakfast', 'Lunch', 'Dinner'],
              activities: ['Game drive'],
            },
            {
              day: 7,
              title: 'Ngorongoro Crater Tour',
              description: 'Descend into the Ngorongoro Crater for game drive.',
              accommodation: 'Lake Manyara Wildlife Lodge',
              meals: ['Breakfast', 'Lunch', 'Dinner'],
              activities: ['Crater game drive'],
            },
            {
              day: 8,
              title: 'Lake Manyara to Zanzibar',
              description: 'Morning transfer to Arusha for flight to Zanzibar.',
              accommodation: 'Zanzibar Beach Resort',
              meals: ['Breakfast'],
              activities: ['Flight to Zanzibar'],
            },
            {
              day: 9,
              title: 'Zanzibar Beach Relaxation',
              description: 'Free day to relax on beautiful beaches.',
              accommodation: 'Zanzibar Beach Resort',
              meals: ['Breakfast'],
              activities: ['Beach relaxation'],
            },
            {
              day: 10,
              title: 'Spice Farm & Stone Town',
              description: 'Morning spice farm tour. Afternoon Stone Town tour.',
              accommodation: 'Stone Town Hotel',
              meals: ['Breakfast'],
              activities: ['Spice tour', 'Stone Town tour'],
            },
            {
              day: 11,
              title: 'Prison Island Excursion',
              description: 'Boat trip to Prison Island to see giant tortoises.',
              accommodation: 'Stone Town Hotel',
              meals: ['Breakfast'],
              activities: ['Prison Island', 'Snorkeling'],
            },
            {
              day: 12,
              title: 'Departure',
              description: 'Transfer to Zanzibar International Airport.',
              accommodation: 'None',
              meals: ['Breakfast'],
              activities: ['Airport transfer'],
            },
          ],
          pricing: [
            { type: 'Budget Camping', price: '2,150', persons: '1-2', note: 'Shared facilities' },
            { type: 'Mid-Range Lodge', price: '2,650', persons: '3-4', note: 'Private facilities' },
            { type: 'Luxury Lodge', price: '3,250', persons: '5-6', note: 'All-inclusive' },
          ],
          included: [
            'Park fees',
            'Professional guide',
            '4x4 safari vehicle',
            'Accommodation',
            'Meals during safari',
            'Bottled water',
            'Airport transfers',
            'Flight to Zanzibar',
          ],
          excluded: [
            'International flights',
            'Travel insurance',
            'Visa fees',
            'Tips',
            'Personal expenses',
          ],
          accommodations: [
            {
              name: 'Arusha Planet Lodge',
              image: tour4,
              description: 'Comfortable lodge in Arusha.',
              amenities: ['Pool', 'Restaurant', 'Bar', 'WiFi'],
            },
            {
              name: 'Serengeti Heritage Camp',
              image: tour5,
              description: 'Mobile camp with authentic safari experience.',
              amenities: ['Restaurant', 'Bar', 'Game drives'],
            },
            {
              name: 'Zanzibar Beach Resort',
              image: tour6,
              description: 'Beachfront resort with stunning ocean views.',
              amenities: ['Pool', 'Restaurant', 'Bar', 'WiFi', 'Spa'],
            },
          ],
          faqs: [
            {
              question: 'Is this safari suitable for families?',
              answer: 'Yes, this safari is family-friendly.',
            },
          ],
          images: [tour2, tour3, tour4, tour5, tour6, tour1],
          duration: '12 days / 11 nights',
          groupSize: '2-6 people',
          bestTime: 'June to March',
          difficulty: 'Easy',
          rating: 4.9,
          reviewCount: 89,
        },
        3: {
          id: 3,
          name: 'Ngorongoro Crater & Lake Manyara Adventure',
          shortDescription: 'Discover the wonders of Ngorongoro Crater and Lake Manyara.',
          fullDescription: 'This compact 7-day safari focuses on two of Tanzania\'s most spectacular destinations.',
          highlights: [
            'Ngorongoro Crater Game Drive',
            'Lake Manyara National Park',
            'Tree-climbing Lions',
            'Flamingo Watching',
            'Maasai Village Visit',
          ],
          itinerary: [
            {
              day: 1,
              title: 'Arrival in Arusha',
              description: 'Arrive at Kilimanjaro International Airport.',
              accommodation: 'Arusha Coffee Lodge',
              meals: ['Dinner'],
              activities: ['Airport transfer'],
            },
            {
              day: 2,
              title: 'Arusha to Lake Manyara',
              description: 'Drive to Lake Manyara. Afternoon game drive.',
              accommodation: 'Lake Manyara Wildlife Lodge',
              meals: ['Breakfast', 'Lunch', 'Dinner'],
              activities: ['Game drive'],
            },
            {
              day: 3,
              title: 'Lake Manyara to Ngorongoro',
              description: 'Morning game drive in Lake Manyara.',
              accommodation: 'Ngorongoro Wildlife Lodge',
              meals: ['Breakfast', 'Lunch', 'Dinner'],
              activities: ['Game drive'],
            },
            {
              day: 4,
              title: 'Ngorongoro Crater Tour',
              description: 'Full day exploring the Ngorongoro Crater.',
              accommodation: 'Ngorongoro Wildlife Lodge',
              meals: ['Breakfast', 'Lunch', 'Dinner'],
              activities: ['Crater game drive'],
            },
            {
              day: 5,
              title: 'Maasai Village Visit',
              description: 'Morning visit to a traditional Maasai village.',
              accommodation: 'Ngorongoro Wildlife Lodge',
              meals: ['Breakfast', 'Lunch', 'Dinner'],
              activities: ['Cultural visit', 'Coffee tour'],
            },
            {
              day: 6,
              title: 'Ngorongoro to Arusha',
              description: 'Morning drive back to Arusha.',
              accommodation: 'Arusha Coffee Lodge',
              meals: ['Breakfast', 'Lunch'],
              activities: ['Scenic drive'],
            },
            {
              day: 7,
              title: 'Departure',
              description: 'Transfer to Kilimanjaro International Airport.',
              accommodation: 'None',
              meals: ['Breakfast'],
              activities: ['Airport transfer'],
            },
          ],
          pricing: [
            { type: 'Budget Camping', price: '2,150', persons: '2-3', note: 'Shared facilities' },
            { type: 'Mid-Range Lodge', price: '2,650', persons: '2-4', note: 'Private facilities' },
          ],
          included: [
            'Park fees',
            'Professional guide',
            '4x4 safari vehicle',
            'Accommodation',
            'Meals during safari',
            'Bottled water',
            'Airport transfers',
          ],
          excluded: [
            'International flights',
            'Travel insurance',
            'Visa fees',
            'Tips',
            'Personal expenses',
          ],
          accommodations: [
            {
              name: 'Arusha Coffee Lodge',
              image: tour3,
              description: 'Luxury lodge on a coffee plantation.',
              amenities: ['Restaurant', 'Bar', 'WiFi', 'Coffee tours'],
            },
            {
              name: 'Lake Manyara Wildlife Lodge',
              image: tour2,
              description: 'Lodge overlooking Lake Manyara.',
              amenities: ['Pool', 'Restaurant', 'Bar'],
            },
          ],
          faqs: [
            {
              question: 'What makes Ngorongoro Crater special?',
              answer: 'It\'s the largest intact caldera in the world.',
            },
          ],
          images: [tour3, tour2, tour4, tour1],
          duration: '7 days / 6 nights',
          groupSize: '2-6 people',
          bestTime: 'Year-round',
          difficulty: 'Easy',
          rating: 4.7,
          reviewCount: 156,
        },
        4: {
          id: 4,
          name: 'Great Wildebeest Migration Spectacle',
          shortDescription: 'Witness the greatest wildlife spectacle on earth.',
          fullDescription: 'Experience one of nature\'s most incredible events as millions of wildebeest cross the Serengeti.',
          highlights: [
            'Mara River Crossing',
            'Great Migration Spectacle',
            'Big Five Sightings',
            'Hot Air Balloon Safari',
            'Bush Breakfast',
          ],
          itinerary: [
            {
              day: 1,
              title: 'Arrival in Arusha',
              description: 'Arrive at Kilimanjaro International Airport.',
              accommodation: 'Arusha Serena Hotel',
              meals: ['Dinner'],
              activities: ['Airport transfer', 'Briefing'],
            },
            {
              day: 2,
              title: 'Arusha to Serengeti',
              description: 'Fly to Serengeti. Afternoon game drive.',
              accommodation: 'Serengeti Migration Camp',
              meals: ['Breakfast', 'Lunch', 'Dinner'],
              activities: ['Flight to Serengeti', 'Game drive'],
            },
            {
              day: 3,
              title: 'Northern Serengeti - Mara River',
              description: 'Full day tracking the Great Migration.',
              accommodation: 'Serengeti Migration Camp',
              meals: ['Breakfast', 'Lunch', 'Dinner'],
              activities: ['Migration tracking', 'River crossings'],
            },
            {
              day: 4,
              title: 'Northern Serengeti Game Drives',
              description: 'Morning and afternoon game drives.',
              accommodation: 'Serengeti Migration Camp',
              meals: ['Breakfast', 'Lunch', 'Dinner'],
              activities: ['Game drives', 'Wildlife photography'],
            },
            {
              day: 5,
              title: 'Hot Air Balloon & Bush Breakfast',
              description: 'Early morning hot air balloon safari.',
              accommodation: 'Serengeti Migration Camp',
              meals: ['Breakfast', 'Lunch', 'Dinner'],
              activities: ['Balloon safari', 'Bush breakfast'],
            },
            {
              day: 6,
              title: 'Serengeti to Ngorongoro',
              description: 'Final morning game drive in Serengeti.',
              accommodation: 'Ngorongoro Crater Lodge',
              meals: ['Breakfast', 'Lunch', 'Dinner'],
              activities: ['Game drive', 'Scenic drive'],
            },
            {
              day: 7,
              title: 'Ngorongoro Crater',
              description: 'Full day exploring Ngorongoro Crater.',
              accommodation: 'Ngorongoro Crater Lodge',
              meals: ['Breakfast', 'Lunch', 'Dinner'],
              activities: ['Crater game drive'],
            },
            {
              day: 8,
              title: 'Departure',
              description: 'Drive back to Arusha. Transfer to airport.',
              accommodation: 'None',
              meals: ['Breakfast'],
              activities: ['Airport transfer'],
            },
          ],
          pricing: [
            { type: 'Budget Camping', price: '2,150', persons: '1-2', note: 'Shared facilities' },
            { type: 'Mid-Range Lodge', price: '2,650', persons: '3-4', note: 'Private facilities' },
            { type: 'Luxury Lodge', price: '3,250', persons: '5-6', note: 'All-inclusive' },
          ],
          included: [
            'Park fees',
            'Professional guide',
            '4x4 safari vehicle',
            'Accommodation',
            'Meals during safari',
            'Bottled water',
            'Airport transfers',
            'Internal flights',
          ],
          excluded: [
            'International flights',
            'Travel insurance',
            'Visa fees',
            'Tips',
            'Balloon safari',
          ],
          accommodations: [
            {
              name: 'Serengeti Migration Camp',
              image: tour4,
              description: 'Seasonal camp close to migration action.',
              amenities: ['Restaurant', 'Bar', 'Game drives'],
            },
            {
              name: 'Ngorongoro Crater Lodge',
              image: tour5,
              description: 'Luxury lodge on the crater rim.',
              amenities: ['Pool', 'Restaurant', 'Bar', 'WiFi', 'Spa'],
            },
          ],
          faqs: [
            {
              question: 'When is the best time to see the migration?',
              answer: 'The best time for river crossings is July to October.',
            },
          ],
          images: [tour4, tour5, tour6, tour1, tour2],
          duration: '8 days / 7 nights',
          groupSize: '2-6 people',
          bestTime: 'July to October',
          difficulty: 'Moderate',
          rating: 5.0,
          reviewCount: 203,
        },
        5: {
          id: 5,
          name: 'Tarangire, Serengeti & Ngorongoro Classic',
          shortDescription: 'The classic Northern Circuit safari.',
          fullDescription: 'This 7-day safari takes you through the highlights of Northern Tanzania.',
          highlights: [
            'Tarangire Elephant Herds',
            'Serengeti Game Drives',
            'Ngorongoro Crater',
            'Baobab Trees',
            'Bird Watching',
          ],
          itinerary: [
            {
              day: 1,
              title: 'Arrival in Arusha',
              description: 'Arrive at Kilimanjaro International Airport.',
              accommodation: 'Arusha Serena Hotel',
              meals: ['Dinner'],
              activities: ['Airport transfer'],
            },
            {
              day: 2,
              title: 'Arusha to Tarangire',
              description: 'Drive to Tarangire National Park.',
              accommodation: 'Tarangire Sopa Lodge',
              meals: ['Breakfast', 'Lunch', 'Dinner'],
              activities: ['Game drive'],
            },
            {
              day: 3,
              title: 'Tarangire to Serengeti',
              description: 'Morning game drive in Tarangire.',
              accommodation: 'Serengeti Sopa Lodge',
              meals: ['Breakfast', 'Lunch', 'Dinner'],
              activities: ['Game drive', 'Olduvai Gorge visit'],
            },
            {
              day: 4,
              title: 'Full Day in Serengeti',
              description: 'Full day exploring Serengeti.',
              accommodation: 'Serengeti Sopa Lodge',
              meals: ['Breakfast', 'Lunch', 'Dinner'],
              activities: ['Game drives'],
            },
            {
              day: 5,
              title: 'Serengeti to Ngorongoro',
              description: 'Morning game drive in Serengeti.',
              accommodation: 'Ngorongoro Sopa Lodge',
              meals: ['Breakfast', 'Lunch', 'Dinner'],
              activities: ['Game drive'],
            },
            {
              day: 6,
              title: 'Ngorongoro Crater Tour',
              description: 'Descend into Ngorongoro Crater.',
              accommodation: 'Ngorongoro Sopa Lodge',
              meals: ['Breakfast', 'Lunch', 'Dinner'],
              activities: ['Crater game drive'],
            },
            {
              day: 7,
              title: 'Departure',
              description: 'Drive back to Arusha. Transfer to airport.',
              accommodation: 'None',
              meals: ['Breakfast'],
              activities: ['Airport transfer'],
            },
          ],
          pricing: [
            { type: 'Budget Camping', price: '2,150', persons: '1-2', note: 'Shared facilities' },
            { type: 'Mid-Range Lodge', price: '2,650', persons: '3-4', note: 'Private facilities' },
          ],
          included: [
            'Park fees',
            'Professional guide',
            '4x4 safari vehicle',
            'Accommodation',
            'Meals during safari',
            'Bottled water',
            'Airport transfers',
          ],
          excluded: [
            'International flights',
            'Travel insurance',
            'Visa fees',
            'Tips',
            'Personal expenses',
          ],
          accommodations: [
            {
              name: 'Tarangire Sopa Lodge',
              image: tour5,
              description: 'Lodge on a hillside with views.',
              amenities: ['Pool', 'Restaurant', 'Bar'],
            },
            {
              name: 'Serengeti Sopa Lodge',
              image: tour4,
              description: 'Lodge on the slopes of Nyaromongo Hills.',
              amenities: ['Pool', 'Restaurant', 'Bar', 'WiFi'],
            },
          ],
          faqs: [
            {
              question: 'What is the Sopa Lodges chain?',
              answer: 'Sopa Lodges are mid-range lodges known for excellent locations.',
            },
          ],
          images: [tour5, tour4, tour3, tour2, tour1],
          duration: '7 days / 6 nights',
          groupSize: '3-6 people',
          bestTime: 'June to October',
          difficulty: 'Easy',
          rating: 4.6,
          reviewCount: 178,
        },
        6: {
          id: 6,
          name: 'Elephants Galore & Famous Ngorongoro Crater',
          shortDescription: 'Perfect for elephant lovers.',
          fullDescription: 'Focus on two of Tanzania\'s most elephant-rich areas.',
          highlights: [
            'Tarangire Elephant Herds',
            'Ngorongoro Crater',
            'Baobab Trees',
            'Hippo Pools',
            'Bird Paradise',
          ],
          itinerary: [
            {
              day: 1,
              title: 'Arrival in Arusha',
              description: 'Arrive at Kilimanjaro International Airport.',
              accommodation: 'Arusha Coffee Lodge',
              meals: ['Dinner'],
              activities: ['Airport transfer'],
            },
            {
              day: 2,
              title: 'Arusha to Tarangire',
              description: 'Drive to Tarangire. Afternoon game drive.',
              accommodation: 'Tarangire Treetops',
              meals: ['Breakfast', 'Lunch', 'Dinner'],
              activities: ['Game drive'],
            },
            {
              day: 3,
              title: 'Full Day in Tarangire',
              description: 'Full day exploring Tarangire.',
              accommodation: 'Tarangire Treetops',
              meals: ['Breakfast', 'Lunch', 'Dinner'],
              activities: ['Game drives', 'Walking safari'],
            },
            {
              day: 4,
              title: 'Tarangire to Ngorongoro',
              description: 'Morning game drive in Tarangire.',
              accommodation: 'Ngorongoro Serena Lodge',
              meals: ['Breakfast', 'Lunch', 'Dinner'],
              activities: ['Game drive'],
            },
            {
              day: 5,
              title: 'Ngorongoro Crater',
              description: 'Full day exploring Ngorongoro Crater.',
              accommodation: 'Ngorongoro Serena Lodge',
              meals: ['Breakfast', 'Lunch', 'Dinner'],
              activities: ['Crater game drive'],
            },
            {
              day: 6,
              title: 'Departure',
              description: 'Drive back to Arusha. Transfer to airport.',
              accommodation: 'None',
              meals: ['Breakfast'],
              activities: ['Airport transfer'],
            },
          ],
          pricing: [
            { type: 'Budget Camping', price: '2,150', persons: '1-2', note: 'Shared facilities' },
            { type: 'Mid-Range Lodge', price: '2,650', persons: '3-4', note: 'Private facilities' },
          ],
          included: [
            'Park fees',
            'Professional guide',
            '4x4 safari vehicle',
            'Accommodation',
            'Meals during safari',
            'Bottled water',
            'Airport transfers',
          ],
          excluded: [
            'International flights',
            'Travel insurance',
            'Visa fees',
            'Tips',
            'Personal expenses',
          ],
          accommodations: [
            {
              name: 'Tarangire Treetops',
              image: tour6,
              description: 'Unique treehouse-style lodge.',
              amenities: ['Pool', 'Restaurant', 'Bar', 'Walking safaris'],
            },
            {
              name: 'Ngorongoro Serena Lodge',
              image: tour1,
              description: 'Lodge on the crater rim.',
              amenities: ['Restaurant', 'Bar', 'WiFi'],
            },
          ],
          faqs: [
            {
              question: 'Why is Tarangire good for elephants?',
              answer: 'Tarangire has the highest density of elephants in Tanzania.',
            },
          ],
          images: [tour6, tour1, tour2, tour3],
          duration: '5 days / 4 nights',
          groupSize: '2-6 people',
          bestTime: 'Year-round',
          difficulty: 'Easy',
          rating: 4.5,
          reviewCount: 145,
        },
      };

      setTrip(trips[id] || null);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [id]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: trip?.name,
          text: trip?.shortDescription,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    }
  };

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Skeleton variant="rectangular" height={400} sx={{ borderRadius: 3, mb: 4 }} />
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Skeleton variant="text" height={60} />
            <Skeleton variant="text" height={30} width="60%" />
            <Skeleton variant="rectangular" height={200} sx={{ mt: 2, borderRadius: 2 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Skeleton variant="rectangular" height={300} sx={{ borderRadius: 3 }} />
          </Grid>
        </Grid>
      </Container>
    );
  }

  if (!trip) {
    return (
      <Container maxWidth="lg" sx={{ py: 12, textAlign: 'center' }}>
        <Zoom in>
          <Box>
            <Typography variant="h2" sx={{ fontSize: '4rem', mb: 2 }}>🦁</Typography>
            <Typography variant="h4" gutterBottom fontWeight={700} sx={{ fontSize: '2rem' }}>
              Safari Not Found
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph sx={{ maxWidth: 400, mx: 'auto', mb: 4, fontSize: '1rem' }}>
              The adventure you're looking for seems to have wandered off into the savanna.
            </Typography>
            <Button 
              variant="contained" 
              color="secondary" 
              component={RouterLink} 
              to="/tour-safaris"
              size="large"
              endIcon={<ArrowForward />}
              sx={{ fontSize: '0.9rem', py: 1.2, px: 3 }}
            >
              Explore All Safaris
            </Button>
          </Box>
        </Zoom>
      </Container>
    );
  }

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '60vh', md: '70vh' },
          backgroundImage: `linear-gradient(to bottom, transparent 0%, ${alpha(theme.palette.background.default, 0.9)} 100%), url(${trip.images[0]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          mb: -8,
        }}
      >
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Fade in timeout={1000}>
            <Box>
              <Stack direction="row" spacing={1} justifyContent="center" sx={{ mb: 3 }}>
                <Chip 
                  label="Premium Safari" 
                  color="secondary" 
                  size="medium"
                  sx={{ fontWeight: 600, fontSize: '0.8rem' }}
                />
                <Chip 
                  label={trip.duration} 
                  variant="outlined" 
                  size="medium"
                  sx={{ color: 'white', borderColor: 'white', fontSize: '0.8rem' }}
                />
              </Stack>
              
              <Typography 
                variant="h2" 
                sx={{ 
                  color: 'white', 
                  fontWeight: 800,
                  textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                  mb: 2,
                  fontSize: { xs: '2rem', md: '4rem' },
                }}
              >
                {trip.name}
              </Typography>
              
              <Typography 
                variant="h6" 
                sx={{ 
                  color: 'rgba(255,255,255,0.9)',
                  maxWidth: 700,
                  mx: 'auto',
                  fontWeight: 400,
                  fontSize: { xs: '1rem', md: '1.25rem' },
                }}
              >
                {trip.shortDescription}
              </Typography>
            </Box>
          </Fade>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        {/* Breadcrumbs */}
        <GlassCard sx={{ mb: 3, px: 3, py: 2 }}>
          <Breadcrumbs separator={<ArrowForward sx={{ fontSize: 14 }} />}>
            <Link component={RouterLink} to="/" color="inherit" underline="hover" sx={{ fontSize: '0.9rem' }}>
              Home
            </Link>
            <Link component={RouterLink} to="/tour-safaris" color="inherit" underline="hover" sx={{ fontSize: '0.9rem' }}>
              Safaris
            </Link>
            <Typography color="text.primary" fontWeight={600} sx={{ fontSize: '0.9rem' }}>
              {trip.name}
            </Typography>
          </Breadcrumbs>
        </GlassCard>

        {/* Main Content Grid */}
        <Grid container spacing={4}>
          {/* Left Content */}
          <Grid item xs={12} lg={8}>
            {/* Header Card */}
            <GlassCard sx={{ mb: 4, p: 4 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
                <Button
                  startIcon={<ArrowBack />}
                  component={RouterLink}
                  to="/tour-safaris"
                  variant="outlined"
                  size="medium"
                  sx={{ borderRadius: 2, fontSize: '0.85rem' }}
                >
                  Back
                </Button>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Tooltip title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}>
                    <IconButton 
                      onClick={() => setIsFavorite(!isFavorite)}
                      sx={{ 
                        bgcolor: isFavorite ? alpha(theme.palette.error.main, 0.1) : 'transparent',
                        '&:hover': { bgcolor: alpha(theme.palette.error.main, 0.2) }
                      }}
                    >
                      {isFavorite ? <Favorite color="error" /> : <FavoriteBorder />}
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Share">
                    <IconButton onClick={handleShare}>
                      <Share />
                    </IconButton>
                  </Tooltip>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3, flexWrap: 'wrap' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <Rating value={trip.rating} precision={0.1} readOnly size="medium" />
                  <Typography variant="body1" fontWeight={600} sx={{ fontSize: '1rem' }}>
                    {trip.rating}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
                    ({trip.reviewCount} reviews)
                  </Typography>
                </Box>
                <Divider orientation="vertical" flexItem />
                <FeatureChip icon={<LocationOn />} label="Tanzania" size="medium" variant="outlined" />
                <FeatureChip icon={<AccessTime />} label={trip.duration} size="medium" variant="outlined" />
                <FeatureChip icon={<Groups />} label={trip.groupSize} size="medium" variant="outlined" />
              </Box>

              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, fontSize: '1.05rem' }}>
                {trip.fullDescription}
              </Typography>
            </GlassCard>

            {/* Tabs Section */}
            <GlassCard>
              <StyledTabs value={tabValue} onChange={handleTabChange} variant="scrollable" scrollButtons="auto">
                <Tab label="Overview" icon={<CheckCircle sx={{ fontSize: 18 }} />} iconPosition="start" />
                <Tab label="Itinerary" icon={<CalendarToday sx={{ fontSize: 18 }} />} iconPosition="start" />
                <Tab label="Stay" icon={<Bed sx={{ fontSize: 18 }} />} iconPosition="start" />
                <Tab label="Pricing" icon={<ArrowForward sx={{ fontSize: 18 }} />} iconPosition="start" />
                <Tab label="FAQ" icon={<ExpandMore sx={{ fontSize: 18 }} />} iconPosition="start" />
                <Tab label="Gallery" icon={<PhotoLibrary sx={{ fontSize: 18 }} />} iconPosition="start" />
              </StyledTabs>

              <Divider />

              {/* Overview Tab */}
              <TabPanel value={tabValue} index={0}>
                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h5" gutterBottom fontWeight={700} sx={{ mb: 3, fontSize: '1.6rem' }}>
                      Safari Highlights
                    </Typography>
                    <Stack spacing={2}>
                      {trip.highlights.map((highlight, index) => (
                        <Zoom in key={index} style={{ transitionDelay: `${index * 100}ms` }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <IconBox color="secondary">
                              <Check sx={{ fontSize: 20 }} />
                            </IconBox>
                            <Typography variant="body1" sx={{ fontSize: '1rem' }}>{highlight}</Typography>
                          </Box>
                        </Zoom>
                      ))}
                    </Stack>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Typography variant="h5" gutterBottom fontWeight={700} sx={{ mb: 3, fontSize: '1.6rem' }}>
                      What's Included
                    </Typography>
                    <Stack spacing={1.5}>
                      {trip.included.slice(0, 6).map((item, index) => (
                        <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                          <CheckCircle color="success" fontSize="small" />
                          <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>{item}</Typography>
                        </Box>
                      ))}
                    </Stack>
                  </Grid>
                </Grid>

                <Paper sx={{ mt: 4, p: 3, bgcolor: alpha(theme.palette.info.main, 0.05), borderRadius: 3 }}>
                  <Typography variant="h6" gutterBottom color="info.main" sx={{ fontSize: '1.25rem' }}>
                    Good to Know
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={3}>
                      <Box sx={{ textAlign: 'center' }}>
                        <IconBox color="info" sx={{ mx: 'auto', mb: 1 }}>
                          <CalendarToday />
                        </IconBox>
                        <Typography variant="caption" display="block" color="text.secondary" sx={{ fontSize: '0.7rem' }}>Best Time</Typography>
                        <Typography variant="body2" fontWeight={600} sx={{ fontSize: '0.85rem' }}>{trip.bestTime}</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <Box sx={{ textAlign: 'center' }}>
                        <IconBox color="info" sx={{ mx: 'auto', mb: 1 }}>
                          <Terrain />
                        </IconBox>
                        <Typography variant="caption" display="block" color="text.secondary" sx={{ fontSize: '0.7rem' }}>Difficulty</Typography>
                        <Typography variant="body2" fontWeight={600} sx={{ fontSize: '0.85rem' }}>{trip.difficulty}</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <Box sx={{ textAlign: 'center' }}>
                        <IconBox color="info" sx={{ mx: 'auto', mb: 1 }}>
                          <AccessTime />
                        </IconBox>
                        <Typography variant="caption" display="block" color="text.secondary" sx={{ fontSize: '0.7rem' }}>Duration</Typography>
                        <Typography variant="body2" fontWeight={600} sx={{ fontSize: '0.85rem' }}>{trip.duration}</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <Box sx={{ textAlign: 'center' }}>
                        <IconBox color="info" sx={{ mx: 'auto', mb: 1 }}>
                          <Groups />
                        </IconBox>
                        <Typography variant="caption" display="block" color="text.secondary" sx={{ fontSize: '0.7rem' }}>Group Size</Typography>
                        <Typography variant="body2" fontWeight={600} sx={{ fontSize: '0.85rem' }}>{trip.groupSize}</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>
              </TabPanel>

              {/* Itinerary Tab */}
              <TabPanel value={tabValue} index={1}>
                <Typography variant="h5" gutterBottom fontWeight={700} sx={{ mb: 1, fontSize: '1.6rem' }}>
                  Day-by-Day Adventure
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph sx={{ fontSize: '0.9rem' }}>
                  Your journey through Tanzania's wilderness
                </Typography>

                <Stepper orientation="vertical" nonLinear activeStep={expandedDay} sx={{ mt: 3 }}>
                  {trip.itinerary?.map((day, index) => (
                    <Step key={day.day} completed={false}>
                      <StepLabel
                        onClick={() => setExpandedDay(expandedDay === index ? -1 : index)}
                        sx={{ cursor: 'pointer' }}
                      >
                        <Typography variant="h6" fontWeight={600} sx={{ fontSize: '1.1rem' }}>
                          Day {day.day}: {day.title}
                        </Typography>
                      </StepLabel>
                      <StepContent>
                        <DayCard elevation={0}>
                          <Typography variant="body2" paragraph sx={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                            {day.description}
                          </Typography>
                          
                          <Grid container spacing={2} sx={{ mt: 2 }}>
                            <Grid item xs={12} sm={6}>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                <Bed fontSize="small" color="action" />
                                <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.75rem' }}>Accommodation</Typography>
                              </Box>
                              <Typography variant="body2" fontWeight={600} sx={{ fontSize: '0.9rem' }}>{day.accommodation}</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                <RestaurantMenu fontSize="small" color="action" />
                                <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.75rem' }}>Meals</Typography>
                              </Box>
                              <Box sx={{ display: 'flex', gap: 0.5 }}>
                                {day.meals.map((meal) => (
                                  <Chip key={meal} label={meal} size="small" color="primary" variant="outlined" sx={{ fontSize: '0.7rem' }} />
                                ))}
                              </Box>
                            </Grid>
                          </Grid>

                          <Box sx={{ mt: 2 }}>
                            <Typography variant="caption" color="text.secondary" display="block" gutterBottom sx={{ fontSize: '0.75rem' }}>
                              Activities
                            </Typography>
                            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                              {day.activities.map((activity) => (
                                <Chip 
                                  key={activity} 
                                  label={activity} 
                                  size="small" 
                                  sx={{ bgcolor: alpha(theme.palette.secondary.main, 0.1), color: 'secondary.main', fontSize: '0.75rem' }}
                                />
                              ))}
                            </Stack>
                          </Box>
                        </DayCard>
                      </StepContent>
                    </Step>
                  ))}
                </Stepper>
              </TabPanel>

              {/* Accommodation Tab */}
              <TabPanel value={tabValue} index={2}>
                <Typography variant="h5" gutterBottom fontWeight={700} sx={{ fontSize: '1.6rem' }}>
                  Where You'll Stay
                </Typography>
                <Grid container spacing={3} sx={{ mt: 1 }}>
                  {trip.accommodations?.map((acc, index) => (
                    <Grid item xs={12} md={4} key={index}>
                      <Card sx={{ borderRadius: 3, overflow: 'hidden', height: '100%' }}>
                        <CardMedia
                          component="img"
                          height="200"
                          image={acc.image}
                          alt={acc.name}
                          sx={{ transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}
                        />
                        <CardContent>
                          <Typography variant="h6" gutterBottom fontWeight={600} sx={{ fontSize: '1.1rem' }}>
                            {acc.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" paragraph sx={{ fontSize: '0.85rem' }}>
                            {acc.description}
                          </Typography>
                          <Stack direction="row" spacing={0.5} flexWrap="wrap" useFlexGap>
                            {acc.amenities.map((amenity) => (
                              <Chip key={amenity} label={amenity} size="small" variant="outlined" sx={{ fontSize: '0.7rem' }} />
                            ))}
                          </Stack>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </TabPanel>

              {/* Pricing Tab */}
              <TabPanel value={tabValue} index={3}>
                <Typography variant="h5" gutterBottom fontWeight={700} sx={{ fontSize: '1.6rem' }}>
                  Choose Your Experience
                </Typography>
                
                <Grid container spacing={3} sx={{ mt: 1 }}>
                  {trip.pricing.map((price, index) => (
                    <Grid item xs={12} md={4} key={index}>
                      <Card 
                        sx={{ 
                          borderRadius: 3, 
                          p: 3, 
                          height: '100%',
                          position: 'relative',
                          overflow: 'hidden',
                          transition: 'all 0.3s',
                          '&:hover': { transform: 'translateY(-8px)', boxShadow: theme.shadows[8] },
                          ...(index === 1 && {
                            border: `2px solid ${theme.palette.secondary.main}`,
                            boxShadow: `0 8px 32px ${alpha(theme.palette.secondary.main, 0.2)}`,
                          })
                        }}
                      >
                        {index === 1 && (
                          <Box
                            sx={{
                              position: 'absolute',
                              top: 12,
                              right: -28,
                              bgcolor: 'secondary.main',
                              color: 'white',
                              py: 0.5,
                              px: 4,
                              transform: 'rotate(45deg)',
                              fontSize: '0.7rem',
                              fontWeight: 700,
                            }}
                          >
                            POPULAR
                          </Box>
                        )}
                        
                        <Box sx={{ textAlign: 'center', mb: 3 }}>
                          <Avatar sx={{ mx: 'auto', mb: 2, bgcolor: alpha(theme.palette.primary.main, 0.1), color: 'primary.main', width: 56, height: 56 }}>
                            <Terrain sx={{ fontSize: 28 }} />
                          </Avatar>
                          <Typography variant="h6" fontWeight={700} sx={{ fontSize: '1.1rem' }}>{price.type}</Typography>
                          <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>{price.note}</Typography>
                        </Box>

                        <Divider sx={{ my: 2 }} />

                        <Box sx={{ textAlign: 'center', mb: 3 }}>
                          <Typography variant="h3" fontWeight={800} color="primary.main" sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
                            ${price.price}
                          </Typography>
                          <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.75rem' }}>per person</Typography>
                        </Box>

                        <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 2, fontSize: '0.85rem' }}>
                          Up to {price.persons} persons
                        </Typography>

                        <Button 
                          variant={index === 1 ? "contained" : "outlined"} 
                          color="secondary" 
                          fullWidth
                          component={RouterLink}
                          to="/contact"
                          sx={{ fontSize: '0.85rem', py: 1 }}
                        >
                          Select
                        </Button>
                      </Card>
                    </Grid>
                  ))}
                </Grid>

                <Paper sx={{ mt: 4, p: 4, borderRadius: 3, bgcolor: 'grey.50' }}>
                  <Typography variant="h6" gutterBottom sx={{ fontSize: '1.25rem' }}>What's Included / Not Included</Typography>
                  <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                      <Typography variant="subtitle2" color="success.main" gutterBottom fontWeight={700} sx={{ fontSize: '0.9rem' }}>
                        <CheckCircle sx={{ fontSize: 16, mr: 0.5, verticalAlign: 'middle' }} />
                        Included
                      </Typography>
                      <Stack spacing={1}>
                        {trip.included.map((item, i) => (
                          <Typography key={i} variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>• {item}</Typography>
                        ))}
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography variant="subtitle2" color="error.main" gutterBottom fontWeight={700} sx={{ fontSize: '0.9rem' }}>
                        <Close sx={{ fontSize: 16, mr: 0.5, verticalAlign: 'middle' }} />
                        Not Included
                      </Typography>
                      <Stack spacing={1}>
                        {trip.excluded.map((item, i) => (
                          <Typography key={i} variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>• {item}</Typography>
                        ))}
                      </Stack>
                    </Grid>
                  </Grid>
                </Paper>
              </TabPanel>

              {/* FAQ Tab */}
              <TabPanel value={tabValue} index={4}>
                <Typography variant="h5" gutterBottom fontWeight={700} sx={{ fontSize: '1.6rem' }}>
                  Common Questions
                </Typography>
                <Box sx={{ mt: 2 }}>
                  {trip.faqs?.map((faq, index) => (
                    <Accordion 
                      key={index} 
                      elevation={0} 
                      sx={{ 
                        mb: 1.5, 
                        border: '1px solid', 
                        borderColor: 'divider',
                        borderRadius: '12px !important',
                        overflow: 'hidden',
                        '&:before': { display: 'none' },
                      }}
                    >
                      <AccordionSummary expandIcon={<ExpandMore color="secondary" />}>
                        <Typography fontWeight={600} sx={{ fontSize: '1rem' }}>{faq.question}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                          {faq.answer}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Box>
              </TabPanel>

              {/* Gallery Tab */}
              <TabPanel value={tabValue} index={5}>
                <Typography variant="h5" gutterBottom fontWeight={700} sx={{ fontSize: '1.6rem' }}>
                  Photo Gallery
                </Typography>
                <Grid container spacing={2} sx={{ mt: 1 }}>
                  {trip.images.map((image, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <GalleryImage
                        component="img"
                        image={image}
                        alt={`Safari moment ${index + 1}`}
                        onClick={() => window.open(image, '_blank')}
                      />
                    </Grid>
                  ))}
                </Grid>
              </TabPanel>
            </GlassCard>
          </Grid>

          {/* Right Sidebar */}
          <Grid item xs={12} lg={4}>
            <Box sx={{ position: 'sticky', top: 100 }}>
              <GlassCard sx={{ mb: 3, p: 3 }}>
                <Typography variant="h6" gutterBottom fontWeight={700} sx={{ fontSize: '1.1rem' }}>
                  Quick Contact
                </Typography>
                <Stack spacing={2}>
                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<WhatsApp />}
                    href="https://wa.me/255000000000"
                    sx={{ justifyContent: 'flex-start', borderRadius: 2, py: 1.5 }}
                  >
                    <Box sx={{ textAlign: 'left' }}>
                      <Typography variant="body2" fontWeight={600} sx={{ fontSize: '0.85rem' }}>WhatsApp</Typography>
                      <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>Quick response</Typography>
                    </Box>
                  </Button>
                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<Email />}
                    component={RouterLink}
                    to="/contact"
                    sx={{ justifyContent: 'flex-start', borderRadius: 2, py: 1.5 }}
                  >
                    <Box sx={{ textAlign: 'left' }}>
                      <Typography variant="body2" fontWeight={600} sx={{ fontSize: '0.85rem' }}>Email Us</Typography>
                      <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>Detailed inquiry</Typography>
                    </Box>
                  </Button>
                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<Phone />}
                    href="tel:+255000000000"
                    sx={{ justifyContent: 'flex-start', borderRadius: 2, py: 1.5 }}
                  >
                    <Box sx={{ textAlign: 'left' }}>
                      <Typography variant="body2" fontWeight={600} sx={{ fontSize: '0.85rem' }}>Call Now</Typography>
                      <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>+255 000 000 000</Typography>
                    </Box>
                  </Button>
                </Stack>
              </GlassCard>

              <GlassCard sx={{ p: 3, bgcolor: alpha(theme.palette.success.main, 0.05) }}>
                <Typography variant="h6" gutterBottom fontWeight={700} color="success.main" sx={{ fontSize: '1.1rem' }}>
                  Why Book With Us?
                </Typography>
                <Stack spacing={2}>
                  {[
                    'Expert local guides',
                    'Best price guarantee',
                    '24/7 support',
                    'Flexible booking',
                  ].map((item, i) => (
                    <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <CheckCircle color="success" fontSize="small" />
                      <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>{item}</Typography>
                    </Box>
                  ))}
                </Stack>
              </GlassCard>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom CTA - White Background */}
        <Paper 
          sx={{ 
            mt: 6, 
            p: { xs: 4, md: 6 }, 
            borderRadius: 4,
            bgcolor: 'white',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          }}
        >
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Typography variant="h4" gutterBottom fontWeight={800} sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' }, color: 'text.primary' }}>
              Ready for Your Adventure?
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 600, mx: 'auto', mb: 4, fontSize: '1rem', color: 'text.secondary' }}>
              Join thousands of travelers who have experienced the magic of Tanzania with us.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button
                variant="contained"
                size="large"
                component={RouterLink}
                to="/contact"
                sx={{ 
                  bgcolor: 'secondary.main', 
                  color: 'white',
                  fontWeight: 700,
                  px: 4,
                  py: 1.5,
                  borderRadius: 3,
                  fontSize: '0.9rem',
                  '&:hover': { bgcolor: 'secondary.dark' },
                }}
              >
                Book Now
              </Button>
              <Button
                variant="outlined"
                size="large"
                component={RouterLink}
                to="/contact"
                sx={{ 
                  borderColor: 'grey.400', 
                  color: 'text.primary',
                  fontWeight: 700,
                  px: 4,
                  py: 1.5,
                  borderRadius: 3,
                  fontSize: '0.9rem',
                  '&:hover': { borderColor: 'secondary.main', bgcolor: alpha(theme.palette.secondary.main, 0.05) },
                }}
              >
                Customize Trip
              </Button>
            </Stack>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default TripDetail;