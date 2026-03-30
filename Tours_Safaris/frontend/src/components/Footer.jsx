import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  TextField,
  Button,
  InputAdornment,
  Avatar,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import SendIcon from "@mui/icons-material/Send";

import { useNavigate } from "react-router-dom";


import { companyLogo } from "../constants/images";

const FooterLink = styled(Link)(({ theme }) => ({
  color: "rgba(255,255,255,0.75)",
  textDecoration: "none",
  fontSize: "0.9rem",
  display: "block",
  marginBottom: theme.spacing(1),
  transition: "0.3s",
  "&:hover": {
    color: theme.palette.secondary.light,
  },
}));


const NewsletterInput = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "rgba(255,255,255,0.08)",
    "& fieldset": {
      borderColor: "rgba(255,255,255,0.3)",
    },
    "& input": {
      color: "white",
    },
  },
}));

const Footer = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
const goToLogin = () => {
  navigate("/admin/login");
  window.scrollTo({ top: 0, behavior: "instant" });
};

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#1a1a1a",
        color: "white",
        pt: 10,
        pb: 5,
        width: "100%",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          px: { xs: 3, md: 8, lg: 12 },
        }}
      >
        {/* Logo */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mb: 6,
          }}
        >
          <Avatar
            src={companyLogo}
            sx={{
              width: 60,
              height: 60,
              border: "2px solid",
              borderColor: "secondary.main",
            }}
          />

          <Typography
            variant="h5"
            sx={{
              letterSpacing: 2,
              fontWeight: 600,
            }}
          >
            NATURE PULSE EXPEDITIONS
          </Typography>
        </Box>

        {/* Main Footer Grid - Full Width Distribution */}
        <Grid container spacing={4} justifyContent="space-between">
          {/* Explore */}
          <Grid item xs={12} sm={6} md="auto">
            <Typography variant="h6" sx={{ color: "secondary.light", mb: 2 }}>
              Explore
            </Typography>

            <FooterLink component={RouterLink} to="/">Home</FooterLink>
            <FooterLink component={RouterLink} to="/package-rate">Packages</FooterLink>
            <FooterLink component={RouterLink} to="/tour-safaris">Itineraries</FooterLink>
            <FooterLink component={RouterLink} to="/discover-tanzania">Discover</FooterLink>
            <FooterLink component={RouterLink} to="/contact">Book Now</FooterLink>
          </Grid>

          {/* About */}
          <Grid item xs={12} sm={6} md="auto">
            <Typography variant="h6" sx={{ color: "secondary.light", mb: 2 }}>
              About
            </Typography>

            <FooterLink component={RouterLink} to="/about">About Us</FooterLink>
            <FooterLink component={RouterLink} to="/why-choose-us">Why Choose Us</FooterLink>
            <FooterLink component={RouterLink} to="/our-story">Our Story</FooterLink>
            <FooterLink component={RouterLink} to="/journal">Journal</FooterLink>
            <FooterLink component={RouterLink} to="/contact">Contact</FooterLink>
          </Grid>

          {/* Safari Info */}
          <Grid item xs={12} sm={6} md="auto">
            <Typography variant="h6" sx={{ color: "secondary.light", mb: 2 }}>
              Safari Info
            </Typography>

            <FooterLink component={RouterLink} to="/best-time">Best Time to Visit</FooterLink>
            <FooterLink component={RouterLink} to="/planning">Safari Planner</FooterLink>
            <FooterLink component={RouterLink} to="/faq">FAQ</FooterLink>
            <FooterLink component={RouterLink} to="/great-migration">Great Migration</FooterLink>
          </Grid>

          {/* Legal */}
          <Grid item xs={12} sm={6} md="auto">
            <Typography variant="h6" sx={{ color: "secondary.light", mb: 2 }}>
              Legal
            </Typography>

            <FooterLink component={RouterLink} to="/privacy-policy">Privacy Policy</FooterLink>
            <FooterLink component={RouterLink} to="/terms">Terms of Use</FooterLink>
            <FooterLink component={RouterLink} to="/sitemap">Sitemap</FooterLink>
            <FooterLink component={RouterLink} to="/offers">Special Offers</FooterLink>
          </Grid>

          {/* Contact - Takes remaining space */}
          <Grid item xs={12} md="auto" sx={{ minWidth: { md: 280, lg: 320 } }}>
            <Typography variant="h6" sx={{ color: "secondary.light", mb: 2 }}>
              Connect With Us
            </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <LocationOnIcon sx={{ mr: 1, fontSize: 20 }} />
            <Typography variant="body2">Arusha, Tanzania</Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <PhoneIcon sx={{ mr: 1, fontSize: 20 }} />
            <Typography variant="body2">+255 713 414 727</Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
            <EmailIcon sx={{ mr: 1, fontSize: 20 }} />
            <Typography variant="body2">
              info@naturepulseexpeditions.com
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <LoginIcon sx={{ mr: 1, fontSize: 20 }} />
            <Typography
              variant="body2"
              onClick={goToLogin}
              sx={{
                cursor: "pointer",
                color: "inherit",
                textDecoration: "none",
                "&:hover": { color: "inherit" }
              }}
            >
              Admin Login
            </Typography>
          </Box>


            {/* Social */}
            <Box sx={{ display: "flex", gap: 1, mb: 3 }}>
              <IconButton sx={{ color: "white" }}>
                <InstagramIcon />
              </IconButton>

              <IconButton sx={{ color: "white" }}>
                <FacebookIcon />
              </IconButton>

              <IconButton sx={{ color: "white" }}>
                <LinkedInIcon />
              </IconButton>

              <IconButton sx={{ color: "white" }}>
                <YouTubeIcon />
              </IconButton>
            </Box>

            {/* Newsletter - Full width */}
            <NewsletterInput
              fullWidth
              size="small"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button sx={{ color: "secondary.light", minWidth: "auto" }}>
                      <SendIcon />
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>

        <Divider sx={{ my: 5, bgcolor: "rgba(255,255,255,0.1)" }} />

        {/* Bottom Bar */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.6 }}>
            © {new Date().getFullYear()} Nature Pulse Expeditions. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.6 }}>
              Developed & Maintaining by Bseries inc(bseriescompany@gmail.com)
          </Typography>

          <Box sx={{ display: "flex", gap: 3 }}>
            <FooterLink component={RouterLink} to="/terms">Terms</FooterLink>
            <FooterLink component={RouterLink} to="/privacy-policy">Privacy</FooterLink>
            <FooterLink component={RouterLink} to="/sitemap">Sitemap</FooterLink>
            <FooterLink component={RouterLink} to="/contact">Support</FooterLink>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;