import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import theme from './theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TourSafaris from './pages/TourSafaris';
import ContactPage from './pages/ContactPage';
import TripDetail from './pages/TripDetail';

import ChatWidget from './components/ChatWidget';

import AboutUs from './pages/AboutUs';
import WhyChooseUs from './pages/WhyChooseUs';
//import ContactPage from './pages/ContactPage';
import PackageRate from './pages/PackageRate';
//import Itineraries from './pages/Itineraries';
import DiscoverTanzania from './pages/DiscoverTanzania';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <Box component="main" sx={{ flex: 1, pt: 0 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/trip/:id" element={<TripDetail />} />
              <Route path="/package-rate" element={<PackageRate />} />
              <Route path="/discover-tanzania" element={<DiscoverTanzania />} />
              <Route path="/tour-safaris" element={<TourSafaris />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/why-choose-us" element={<WhyChooseUs />} />  
              <Route element={<ChatWidget />}/>
              <Route path="/admin/login" element={<AdminLogin />} />
              //<Route path="/admin/dashboard" element={<AdminDashboard />} />
          
              {/*
              <Route path="/best-time" element={<BestTime />} />
              <Route path="/planning" element={<Planning />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/great-migration" element={<GreatMigration />} />
              <Route path="/our-story" element={<OurStory />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/offers" element={<Offers />} />*/}


            </Routes>
          </Box>
          <Footer />
          <ChatWidget />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;