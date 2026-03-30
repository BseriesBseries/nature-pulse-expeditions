import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
  useMediaQuery,
  Container,
  Avatar,
  Fade,
  Grow,
  Divider,
  Stack,
  Paper,
  Collapse,
  useScrollTrigger,
} from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import MapIcon from '@mui/icons-material/Map';
import PublicIcon from '@mui/icons-material/Public';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import InfoIcon from '@mui/icons-material/Info';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { companyLogo } from '../constants/images';

const NAV_ITEMS = [
  { text: 'Home', path: '/', icon: HomeIcon },
  { text: 'Packages', path: '/package-rate', icon: ExploreIcon },
  { text: 'Itineraries', path: '/tour-safaris', icon: MapIcon },
  { text: 'Discover', path: '/discover-tanzania', icon: PublicIcon },
  { 
    text: 'Pages', 
    icon: MenuBookIcon, 
    type: 'dropdown',
    items: [
      { 
        text: 'About Us', 
        path: '/about', 
        icon: InfoIcon, 
        description: 'Our story, mission & team',
        color: '#1976d2'
      },
      { 
        text: 'Why Choose Us', 
        path: '/why-choose-us', 
        icon: EmojiEventsIcon, 
        description: 'What makes us different',
        color: '#2e7d32'
      },
      { 
        text: 'Contact', 
        path: '/contact', 
        icon: ContactMailIcon, 
        description: 'Get in touch with us',
        color: '#ed6c02'
      },
    ],
  },
  { text: 'Book Now', path: '/contact', icon: CalendarTodayIcon, highlight: true },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobilePagesOpen, setMobilePagesOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const location = useLocation();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  const scrolled = trigger;

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    setDropdownOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  const handleDrawerToggle = useCallback(() => {
    setMobileOpen(prev => !prev);
    if (mobileOpen) setMobilePagesOpen(false);
  }, [mobileOpen]);

  const handleDrawerClose = useCallback(() => {
    setMobileOpen(false);
    setMobilePagesOpen(false);
  }, []);

  const handleMobilePagesToggle = () => {
    setMobilePagesOpen(!mobilePagesOpen);
  };

  const isPagesActive = () => {
    const pagePaths = ['/about', '/why-choose-us', '/contact'];
    return pagePaths.includes(location.pathname);
  };

  // Handle dropdown open with delay clearance
  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setDropdownOpen(true);
  };

  // Handle dropdown close with small delay to allow mouse movement
  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150); // 150ms delay allows mouse to move from button to dropdown
  };

  const DesktopNavItem = ({ item }) => {
    const isActive = location.pathname === item.path;
    const isDropdownActive = item.type === 'dropdown' && isPagesActive();
    
    if (item.type === 'dropdown') {
      return (
        // Wrap in Box that handles both mouse enter and leave
        <Box 
          sx={{ position: 'relative' }}
          onMouseEnter={handleDropdownEnter}
          onMouseLeave={handleDropdownLeave}
        >
          <Button
            disableRipple
            sx={{
              minWidth: 'auto',
              px: 2,
              py: 1,
              color: scrolled ? 'text.primary' : 'text.primary',
              position: 'relative',
              textTransform: 'none',
              fontSize: '0.9rem',
              fontWeight: isDropdownActive ? 600 : 500,
              letterSpacing: '0.5px',
              transition: 'all 0.3s ease',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: isDropdownActive ? '80%' : '0%',
                height: '2px',
                bgcolor: 'secondary.main',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              },
              '&:hover::after': {
                width: '80%',
              },
              '&:hover': {
                bgcolor: 'transparent',
              },
            }}
            endIcon={
              <ArrowDropDownIcon 
                sx={{ 
                  fontSize: 20,
                  transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                }} 
              />
            }
          >
            <Stack direction="row" spacing={1} alignItems="center">
              {item.icon && <item.icon sx={{ fontSize: 18 }} />}
              <Typography sx={{ fontWeight: 'inherit', fontSize: 'inherit' }}>
                {item.text}
              </Typography>
            </Stack>
          </Button>
          
          {/* Dropdown positioned relative to the wrapper Box */}
          <Fade in={dropdownOpen} timeout={200}>
            <Paper
              elevation={0}
              onMouseEnter={handleDropdownEnter} // Keep open when hovering dropdown
              onMouseLeave={handleDropdownLeave} // Close when leaving dropdown
              sx={{
                position: 'absolute',
                top: 'calc(100% + 8px)',
                left: '50%',
                transform: 'translateX(-50%)',
                width: 280,
                borderRadius: 2,
                overflow: 'hidden',
                zIndex: 1300,
                border: '1px solid',
                borderColor: 'divider',
                boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: -8,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  borderLeft: '8px solid transparent',
                  borderRight: '8px solid transparent',
                  borderBottom: `8px solid ${theme.palette.background.paper}`,
                },
              }}
            >
              <Box sx={{ p: 1 }}>
                {item.items.map((subItem) => {
                  const isSubActive = location.pathname === subItem.path;
                  const SubIcon = subItem.icon;
                  
                  return (
                    <Box
                      key={subItem.text}
                      component={RouterLink}
                      to={subItem.path}
                      onClick={() => setDropdownOpen(false)}
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        textDecoration: 'none',
                        color: 'text.primary',
                        p: 1.5,
                        borderRadius: 1,
                        mb: 0.5,
                        bgcolor: isSubActive ? alpha(theme.palette.secondary.main, 0.1) : 'transparent',
                        border: '1px solid',
                        borderColor: isSubActive ? 'secondary.main' : 'transparent',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          bgcolor: alpha(theme.palette.secondary.main, 0.08),
                          transform: 'translateX(4px)',
                          '& .arrow-icon': {
                            opacity: 1,
                            transform: 'translateX(0)',
                          },
                        },
                      }}
                    >
                      <Avatar
                        sx={{
                          width: 36,
                          height: 36,
                          bgcolor: alpha(subItem.color, 0.1),
                          color: subItem.color,
                          mr: 1.5,
                          fontSize: '1.2rem',
                        }}
                      >
                        <SubIcon sx={{ fontSize: 20 }} />
                      </Avatar>
                      <Box sx={{ flex: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <Typography 
                            sx={{ 
                              fontWeight: isSubActive ? 600 : 500,
                              fontSize: '0.9rem',
                              color: isSubActive ? 'secondary.main' : 'text.primary',
                            }}
                          >
                            {subItem.text}
                          </Typography>
                          <KeyboardArrowRightIcon 
                            className="arrow-icon"
                            sx={{ 
                              fontSize: 16,
                              opacity: 0,
                              transform: 'translateX(-4px)',
                              transition: 'all 0.2s ease',
                              color: 'secondary.main',
                            }} 
                          />
                        </Box>
                        <Typography 
                          variant="caption" 
                          sx={{ 
                            color: 'text.secondary',
                            display: 'block',
                            mt: 0.3,
                          }}
                        >
                          {subItem.description}
                        </Typography>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Paper>
          </Fade>
        </Box>
      );
    }

    const IconComponent = item.icon;

    if (item.highlight) {
      return (
        <Button
          component={RouterLink}
          to={item.path}
          disableRipple
          sx={{
            ml: 1,
            px: 3,
            py: 1,
            borderRadius: 6,
            textTransform: 'none',
            fontSize: '0.9rem',
            fontWeight: 600,
            letterSpacing: '0.5px',
            color: 'white',
            bgcolor: 'secondary.main',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              bgcolor: 'secondary.dark',
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
            },
          }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            {IconComponent && <IconComponent sx={{ fontSize: 18 }} />}
            <span>{item.text}</span>
          </Stack>
        </Button>
      );
    }

    return (
      <Button
        component={RouterLink}
        to={item.path}
        disableRipple
        sx={{
          minWidth: 'auto',
          px: 2,
          py: 1,
          color: scrolled ? 'text.primary' : 'text.primary',
          position: 'relative',
          textTransform: 'none',
          fontSize: '0.9rem',
          fontWeight: isActive ? 600 : 500,
          letterSpacing: '0.5px',
          transition: 'all 0.3s ease',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: isActive ? '80%' : '0%',
            height: '2px',
            bgcolor: 'secondary.main',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          },
          '&:hover::after': {
            width: '80%',
          },
          '&:hover': {
            bgcolor: 'transparent',
          },
        }}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          {IconComponent && <IconComponent sx={{ fontSize: 18 }} />}
          <span>{item.text}</span>
        </Stack>
      </Button>
    );
  };

  const MobileNavItem = ({ item }) => {
    if (item.type === 'dropdown') {
      const isActive = isPagesActive();
      
      return (
        <>
          <ListItem
            onClick={handleMobilePagesToggle}
            sx={{
              py: 1.5,
              px: 2,
              borderRadius: 2,
              mx: 1,
              mb: 0.5,
              bgcolor: isActive ? alpha(theme.palette.secondary.main, 0.1) : 'transparent',
              color: isActive ? 'secondary.main' : 'text.primary',
              cursor: 'pointer',
              border: '1px solid',
              borderColor: isActive ? 'secondary.main' : 'transparent',
              transition: 'all 0.2s ease',
              '&:hover': {
                bgcolor: isActive ? alpha(theme.palette.secondary.main, 0.15) : 'action.hover',
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 40, color: 'inherit' }}>
              <item.icon sx={{ fontSize: 22 }} />
            </ListItemIcon>
            <ListItemText 
              primary={item.text}
              primaryTypographyProps={{
                fontWeight: isActive ? 600 : 500,
                fontSize: '1rem',
              }}
            />
            {mobilePagesOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          
          <Collapse in={mobilePagesOpen} timeout="auto" unmountOnExit>
            <Box sx={{ mx: 2, mb: 2 }}>
              {item.items.map((subItem) => {
                const isSubActive = location.pathname === subItem.path;
                const SubIcon = subItem.icon;
                
                return (
                  <ListItem
                    key={subItem.text}
                    component={RouterLink}
                    to={subItem.path}
                    onClick={handleDrawerClose}
                    sx={{
                      py: 1.5,
                      px: 2,
                      borderRadius: 2,
                      mb: 0.5,
                      bgcolor: isSubActive ? 'secondary.main' : 'grey.50',
                      color: isSubActive ? 'white' : 'text.primary',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        bgcolor: isSubActive ? 'secondary.dark' : 'secondary.light',
                        color: 'white',
                        '& .MuiListItemIcon-root': {
                          color: 'white',
                        },
                      },
                    }}
                  >
                    <ListItemIcon 
                      sx={{ 
                        minWidth: 36, 
                        color: isSubActive ? 'white' : subItem.color 
                      }}
                    >
                      <SubIcon sx={{ fontSize: 20 }} />
                    </ListItemIcon>
                    <Box sx={{ flex: 1 }}>
                      <Typography 
                        sx={{ 
                          fontWeight: isSubActive ? 600 : 500,
                          fontSize: '0.95rem',
                        }}
                      >
                        {subItem.text}
                      </Typography>
                      <Typography 
                        variant="caption" 
                        sx={{ 
                          color: isSubActive ? 'rgba(255,255,255,0.8)' : 'text.secondary',
                          display: 'block',
                        }}
                      >
                        {subItem.description}
                      </Typography>
                    </Box>
                    {isSubActive && (
                      <Box
                        sx={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          bgcolor: 'white',
                          ml: 1,
                        }}
                      />
                    )}
                  </ListItem>
                );
              })}
            </Box>
          </Collapse>
        </>
      );
    }

    const isActive = location.pathname === item.path;
    const IconComponent = item.icon;

    if (item.highlight) {
      return (
        <ListItem
          component={RouterLink}
          to={item.path}
          onClick={handleDrawerClose}
          sx={{
            py: 1.5,
            px: 2,
            borderRadius: 2,
            mx: 1,
            mb: 1,
            bgcolor: 'secondary.main',
            color: 'white',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            transition: 'all 0.2s ease',
            '&:hover': {
              bgcolor: 'secondary.dark',
              transform: 'translateX(4px)',
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: 40, color: 'white' }}>
            <IconComponent sx={{ fontSize: 22 }} />
          </ListItemIcon>
          <ListItemText 
            primary={item.text}
            primaryTypographyProps={{
              fontWeight: 600,
              fontSize: '1rem',
            }}
          />
        </ListItem>
      );
    }

    return (
      <ListItem
        component={RouterLink}
        to={item.path}
        onClick={handleDrawerClose}
        sx={{
          py: 1.5,
          px: 2,
          borderRadius: 2,
          mx: 1,
          mb: 0.5,
          bgcolor: isActive ? alpha(theme.palette.secondary.main, 0.1) : 'transparent',
          color: isActive ? 'secondary.main' : 'text.primary',
          border: '1px solid',
          borderColor: isActive ? 'secondary.main' : 'transparent',
          transition: 'all 0.2s ease',
          '&:hover': {
            bgcolor: isActive ? alpha(theme.palette.secondary.main, 0.15) : 'action.hover',
            transform: 'translateX(4px)',
          },
        }}
      >
        <ListItemIcon sx={{ minWidth: 40, color: 'inherit' }}>
          <IconComponent sx={{ fontSize: 22 }} />
        </ListItemIcon>
        <ListItemText 
          primary={item.text}
          primaryTypographyProps={{
            fontWeight: isActive ? 600 : 500,
            fontSize: '1rem',
          }}
        />
        {isActive && (
          <Box
            sx={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              bgcolor: 'secondary.main',
            }}
          />
        )}
      </ListItem>
    );
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{
          bgcolor: scrolled 
            ? 'rgba(255, 255, 255, 0.95)' 
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid' : 'none',
          borderColor: 'divider',
          transition: theme.transitions.create(
            ['background-color', 'backdrop-filter', 'border-color', 'box-shadow'],
            { duration: 400 }
          ),
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              justifyContent: 'space-between',
              px: { xs: 1, sm: 2 },
              py: scrolled ? 1 : 1.5,
              minHeight: { xs: 64, md: 80 },
              transition: theme.transitions.create(['padding', 'min-height'], {
                duration: 400,
              }),
            }}
          >
            <Grow in={true} timeout={800}>
              <Box
                component={RouterLink}
                to="/"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                  gap: 2,
                }}
              >
                <Avatar
                  src={companyLogo}
                  alt="Nature Pulse"
                  sx={{
                    width: { xs: 42, md: 50 },
                    height: { xs: 42, md: 50 },
                    border: '2px solid',
                    borderColor: scrolled ? 'secondary.main' : 'primary.main',
                    boxShadow: scrolled ? '0 4px 12px rgba(0,0,0,0.1)' : 'none',
                    transition: 'all 0.4s ease',
                  }}
                />
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'text.primary',
                      fontWeight: 700,
                      letterSpacing: '2px',
                      lineHeight: 1.2,
                      fontSize: { xs: '1rem', md: '1.1rem' },
                    }}
                  >
                    NATURE PULSE
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'text.secondary',
                      letterSpacing: '3px',
                      textTransform: 'uppercase',
                      fontSize: '0.7rem',
                      fontWeight: 500,
                    }}
                  >
                    EXPEDITIONS
                  </Typography>
                </Box>
              </Box>
            </Grow>

            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="toggle menu"
                onClick={handleDrawerToggle}
                sx={{
                  color: 'text.primary',
                  bgcolor: scrolled ? 'grey.100' : 'rgba(255,255,255,0.8)',
                  border: '1px solid',
                  borderColor: 'divider',
                  p: 1,
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: 'secondary.main',
                    color: 'white',
                    borderColor: 'secondary.main',
                  },
                }}
              >
                {mobileOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            ) : (
              <Fade in={true} timeout={1000}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  {NAV_ITEMS.map((item) => (
                    <DesktopNavItem key={item.text} item={item} />
                  ))}
                </Box>
              </Fade>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Toolbar sx={{ minHeight: { xs: 64, md: 80 } }} />

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          '& .MuiDrawer-paper': {
            width: 320,
            bgcolor: 'background.default',
            borderTopLeftRadius: 24,
            borderBottomLeftRadius: 24,
            boxShadow: '-10px 0 40px rgba(0,0,0,0.1)',
          },
        }}
      >
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ p: 3, pb: 2 }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar
                src={companyLogo}
                alt="Logo"
                sx={{
                  width: 50,
                  height: 50,
                  border: '2px solid',
                  borderColor: 'secondary.main',
                }}
              />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: '1.5px', fontSize: '1.1rem' }}>
                  NATURE PULSE
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', letterSpacing: '2px' }}>
                  EXPEDITIONS
                </Typography>
              </Box>
            </Stack>
          </Box>

          <Divider sx={{ mx: 2 }} />

          <List sx={{ pt: 2, pb: 2, flex: 1, overflowY: 'auto' }}>
            {NAV_ITEMS.map((item) => (
              <MobileNavItem key={item.text} item={item} />
            ))}
          </List>

          <Box sx={{ p: 3, bgcolor: 'grey.50', borderTop: '1px solid', borderColor: 'divider' }}>
            <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', textAlign: 'center' }}>
              © {new Date().getFullYear()} Nature Pulse Expeditions
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', textAlign: 'center', mt: 0.5 }}>
              Premium Safari Experiences
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;