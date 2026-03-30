import React, { useState, useEffect } from 'react';
import {
  Box,
  Fab,
  Zoom,
  Tooltip,
  Paper,
  Typography,
  Stack,
  useTheme,
  alpha,
  Badge,
} from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X'; // For MUI v5.14.9+
// If XIcon not available, use: import TwitterIcon from '@mui/icons-material/Twitter';

const SOCIAL_LINKS = [
  {
    name: 'WhatsApp',
    icon: WhatsAppIcon,
    color: '#25D366',
    link: 'https://wa.me/255000000000',
    label: 'Chat on WhatsApp',
  },
  {
    name: 'Facebook',
    icon: FacebookIcon,
    color: '#1877F2',
    link: 'https://m.me/naturepulseexpeditions',
    label: 'Messenger',
  },
  {
    name: 'Telegram',
    icon: TelegramIcon,
    color: '#0088cc',
    link: 'https://t.me/naturepulse',
    label: 'Telegram',
  },
  {
    name: 'Instagram',
    icon: InstagramIcon,
    color: '#E4405F',
    link: 'https://ig.me/m/naturepulseexpeditions',
    label: 'Instagram DM',
  },
  {
    name: 'X',
    icon: XIcon, // or TwitterIcon
    color: '#000000',
    link: 'https://twitter.com/messages/compose?recipient_id=naturepulse',
    label: 'X / Twitter',
  },
];

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBadge, setShowBadge] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    if (isOpen) setShowBadge(false);
  }, [isOpen]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSocialClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: 1,
      }}
    >
      {/* Social Media Buttons */}
      <Zoom in={isOpen}>
        <Stack spacing={1.5} alignItems="flex-end" sx={{ mb: 1 }}>
          {SOCIAL_LINKS.map((social, index) => (
            <Zoom
              key={social.name}
              in={isOpen}
              style={{ transitionDelay: isOpen ? `${index * 50}ms` : '0ms' }}
            >
              <Paper
                elevation={4}
                onClick={() => handleSocialClick(social.link)}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  py: 1,
                  px: 2,
                  borderRadius: 3,
                  cursor: 'pointer',
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateX(-8px)',
                    boxShadow: `0 8px 24px ${alpha(social.color, 0.25)}`,
                    borderColor: social.color,
                    '& .social-icon': {
                      transform: 'scale(1.1)',
                      color: social.color,
                    },
                  },
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 500, fontSize: '0.9rem' }}
                >
                  {social.label}
                </Typography>
                <Box
                  className="social-icon"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    bgcolor: alpha(social.color, 0.1),
                    color: social.color,
                    transition: 'all 0.3s ease',
                  }}
                >
                  <social.icon sx={{ fontSize: 20 }} />
                </Box>
              </Paper>
            </Zoom>
          ))}
        </Stack>
      </Zoom>

      {/* Main Toggle Button */}
      <Tooltip title={isOpen ? 'Close' : 'Chat with us'} placement="left" arrow>
        <Fab
          onClick={toggleChat}
          sx={{
            width: 64,
            height: 64,
            bgcolor: isOpen ? 'grey.800' : 'secondary.main',
            color: 'white',
            boxShadow: isOpen
              ? '0 8px 32px rgba(0,0,0,0.3)'
              : '0 8px 32px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease',
            '&:hover': {
              bgcolor: isOpen ? 'grey.900' : 'secondary.dark',
              transform: 'scale(1.05)',
            },
          }}
        >
          <Badge
            variant="dot"
            color="error"
            invisible={!showBadge}
            overlap="circular"
            sx={{
              '& .MuiBadge-badge': {
                top: 8,
                right: 8,
                boxShadow: '0 0 0 2px white',
              },
            }}
          >
            <Zoom in={!isOpen} style={{ transitionDuration: '200ms' }}>
              <ChatIcon sx={{ fontSize: 28 }} />
            </Zoom>
            <Zoom in={isOpen} style={{ transitionDuration: '200ms' }}>
              <CloseIcon sx={{ fontSize: 28, position: 'absolute' }} />
            </Zoom>
          </Badge>
        </Fab>
      </Tooltip>
    </Box>
  );
};

export default ChatWidget;