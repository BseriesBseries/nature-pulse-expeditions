// src/pages/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Chip,
  IconButton,
  TextField,
  InputAdornment,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Avatar,
  LinearProgress,
  Tabs,
  Tab,
  Snackbar,
  Alert,
  TextareaAutosize,
  Switch,
  FormControlLabel,
  Stack,
} from '@mui/material';
import {
  Email as EmailIcon,
  Message as MessageIcon,
  Logout,
  Search,
  MoreVert,
  Delete,
  CheckCircle,
  Visibility,
  TrendingUp,
  VerifiedUser,
  Refresh,
  People,
  HelpOutline,
  Category,
  Add,
  Edit,
} from '@mui/icons-material';
import axios from 'axios';

const API_URL = 'http://localhost:8000';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [inquiryTypes, setInquiryTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);
  const [selectedFaq, setSelectedFaq] = useState(null);
  const [selectedInquiryType, setSelectedInquiryType] = useState(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [faqDialogOpen, setFaqDialogOpen] = useState(false);
  const [inquiryTypeDialogOpen, setInquiryTypeDialogOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [tabValue, setTabValue] = useState(0);
  const [stats, setStats] = useState({
    contacts: {
      total_submissions: 0,
      pending_submissions: 0,
      processed_submissions: 0,
      last_7_days: 0,
      response_rate: 0,
    },
    newsletter: {
      total: 0,
      active: 0,
      inactive: 0,
    },
    faqs: {
      total: 0,
      active: 0,
    },
    inquiry_types: {
      total: 0,
      active: 0,
    },
  });
  const [notes, setNotes] = useState('');
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  
  // Form states
  const [faqForm, setFaqForm] = useState({
    question: '',
    answer: '',
    category: 'general',
    order: 0,
    is_active: true,
  });
  
  const [inquiryTypeForm, setInquiryTypeForm] = useState({
    name: '',
    description: '',
    order: 0,
    is_active: true,
  });

  // Setup axios interceptor
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }, []);

  // Check authentication
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('adminLoggedIn');
    if (!isLoggedIn) {
      navigate('/admin/login');
    }
  }, [navigate]);

  // Load all data
  const loadData = async () => {
    setLoading(true);
    try {
      // Load contacts - your API returns { success: true, count: number, data: [] }
      const contactsRes = await axios.get(`${API_URL}/admin/contacts/`);
      if (contactsRes.data.success) {
        setContacts(contactsRes.data.data);
        console.log('Contacts loaded:', contactsRes.data.data);
      } else {
        console.error('Contacts API error:', contactsRes.data);
      }
      
      // Load stats
      const statsRes = await axios.get(`${API_URL}/admin/stats/`);
      if (statsRes.data.success) {
        setStats(statsRes.data.stats);
        console.log('Stats loaded:', statsRes.data.stats);
      } else {
        console.error('Stats API error:', statsRes.data);
      }
      
      // Load subscribers
      const subscribersRes = await axios.get(`${API_URL}/admin/subscribers/`);
      if (subscribersRes.data.success) {
        setSubscribers(subscribersRes.data.data);
        console.log('Subscribers loaded:', subscribersRes.data.data);
      } else {
        console.error('Subscribers API error:', subscribersRes.data);
      }
      
      // Load FAQs
      const faqsRes = await axios.get(`${API_URL}/admin/faqs/`);
      if (faqsRes.data.success) {
        setFaqs(faqsRes.data.data);
        console.log('FAQs loaded:', faqsRes.data.data);
      } else {
        console.error('FAQs API error:', faqsRes.data);
      }
      
      // Load inquiry types
      const inquiryTypesRes = await axios.get(`${API_URL}/admin/inquiry-types/`);
      if (inquiryTypesRes.data.success) {
        setInquiryTypes(inquiryTypesRes.data.data);
        console.log('Inquiry types loaded:', inquiryTypesRes.data.data);
      } else {
        console.error('Inquiry types API error:', inquiryTypesRes.data);
      }
      
    } catch (error) {
      console.error('Error loading data:', error);
      if (error.response) {
        console.error('Response status:', error.response.status);
        console.error('Response data:', error.response.data);
        if (error.response.status === 401) {
          handleLogout();
        }
      }
      showSnackbar('Error loading data: ' + (error.response?.data?.error || error.message), 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    localStorage.removeItem('adminEmail');
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    delete axios.defaults.headers.common['Authorization'];
    navigate('/admin/login');
  };

  const showSnackbar = (message, severity = 'success') => {
    setSnackbar({ open: true, message, severity });
  };

  const handleMenuOpen = (event, contact) => {
    setAnchorEl(event.currentTarget);
    setSelectedContact(contact);
    setNotes(contact.notes || '');
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleViewDetails = (contact) => {
    setSelectedContact(contact);
    setNotes(contact.notes || '');
    setDetailsOpen(true);
    handleMenuClose();
  };

  const handleMarkProcessed = async () => {
    try {
      const response = await axios.post(`${API_URL}/admin/contacts/${selectedContact.id}/`, {
        notes: notes
      });
      
      if (response.data.success) {
        showSnackbar('Marked as processed successfully');
        loadData(); // Reload data
        setDetailsOpen(false);
      } else {
        showSnackbar(response.data.error || 'Failed to mark as processed', 'error');
      }
    } catch (error) {
      console.error('Error marking as processed:', error);
      showSnackbar('Error marking as processed', 'error');
    }
  };

  const handleReply = (contact) => {
    window.location.href = `mailto:${contact.email}?subject=Re: Your Inquiry - Nature Pulse Expeditions`;
    handleMenuClose();
  };

  const handleDeleteContact = async () => {
    try {
      const response = await axios.delete(`${API_URL}/admin/contacts/${selectedContact.id}/`);
      
      if (response.data.success) {
        showSnackbar('Deleted successfully');
        loadData(); // Reload data
        setDeleteDialogOpen(false);
        handleMenuClose();
      } else {
        showSnackbar(response.data.error || 'Failed to delete', 'error');
      }
    } catch (error) {
      console.error('Error deleting:', error);
      showSnackbar('Error deleting', 'error');
    }
  };

  // FAQ CRUD Operations
  const handleCreateFaq = async () => {
    try {
      const response = await axios.post(`${API_URL}/admin/faqs/create/`, faqForm);
      
      if (response.data.success) {
        showSnackbar('FAQ created successfully');
        loadData();
        setFaqDialogOpen(false);
        setFaqForm({ question: '', answer: '', category: 'general', order: 0, is_active: true });
      } else {
        showSnackbar(response.data.error || 'Failed to create FAQ', 'error');
      }
    } catch (error) {
      console.error('Error creating FAQ:', error);
      showSnackbar('Error creating FAQ', 'error');
    }
  };

  const handleUpdateFaq = async () => {
    try {
      const response = await axios.put(`${API_URL}/admin/faqs/${selectedFaq.id}/`, faqForm);
      
      if (response.data.success) {
        showSnackbar('FAQ updated successfully');
        loadData();
        setFaqDialogOpen(false);
        setSelectedFaq(null);
      } else {
        showSnackbar(response.data.error || 'Failed to update FAQ', 'error');
      }
    } catch (error) {
      console.error('Error updating FAQ:', error);
      showSnackbar('Error updating FAQ', 'error');
    }
  };

  const handleDeleteFaq = async (faq) => {
    try {
      const response = await axios.delete(`${API_URL}/admin/faqs/${faq.id}/`);
      
      if (response.data.success) {
        showSnackbar('FAQ deleted successfully');
        loadData();
      } else {
        showSnackbar(response.data.error || 'Failed to delete FAQ', 'error');
      }
    } catch (error) {
      console.error('Error deleting FAQ:', error);
      showSnackbar('Error deleting FAQ', 'error');
    }
  };

  // Inquiry Type CRUD Operations
  const handleCreateInquiryType = async () => {
    try {
      const response = await axios.post(`${API_URL}/admin/inquiry-types/create/`, inquiryTypeForm);
      
      if (response.data.success) {
        showSnackbar('Inquiry type created successfully');
        loadData();
        setInquiryTypeDialogOpen(false);
        setInquiryTypeForm({ name: '', description: '', order: 0, is_active: true });
      } else {
        showSnackbar(response.data.error || 'Failed to create inquiry type', 'error');
      }
    } catch (error) {
      console.error('Error creating inquiry type:', error);
      showSnackbar('Error creating inquiry type', 'error');
    }
  };

  const handleUpdateInquiryType = async () => {
    try {
      const response = await axios.put(`${API_URL}/admin/inquiry-types/${selectedInquiryType.id}/`, inquiryTypeForm);
      
      if (response.data.success) {
        showSnackbar('Inquiry type updated successfully');
        loadData();
        setInquiryTypeDialogOpen(false);
        setSelectedInquiryType(null);
      } else {
        showSnackbar(response.data.error || 'Failed to update inquiry type', 'error');
      }
    } catch (error) {
      console.error('Error updating inquiry type:', error);
      showSnackbar('Error updating inquiry type', 'error');
    }
  };

  const handleDeleteInquiryType = async (inquiryType) => {
    try {
      const response = await axios.delete(`${API_URL}/admin/inquiry-types/${inquiryType.id}/`);
      
      if (response.data.success) {
        showSnackbar('Inquiry type deleted successfully');
        loadData();
      } else {
        showSnackbar(response.data.error || 'Failed to delete inquiry type', 'error');
      }
    } catch (error) {
      console.error('Error deleting inquiry type:', error);
      showSnackbar('Error deleting inquiry type', 'error');
    }
  };

  const getStatusChip = (isProcessed) => {
    if (isProcessed) {
      return <Chip label="Processed" size="small" sx={{ bgcolor: '#e8f5e9', color: '#2e7d32' }} />;
    }
    return <Chip label="Pending" size="small" sx={{ bgcolor: '#fff3e0', color: '#ed6c02' }} />;
  };

  // Filter data based on search term
  const filteredContacts = contacts.filter(contact => 
    contact.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.message?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredFaqs = faqs.filter(faq =>
    faq.question?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredInquiryTypes = inquiryTypes.filter(it =>
    it.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredSubscribers = subscribers.filter(sub =>
    sub.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sub.first_name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const statCards = [
    { 
      title: 'Contact Submissions', 
      value: stats.contacts?.total_submissions || 0, 
      icon: <EmailIcon sx={{ fontSize: 32 }} />, 
      color: '#2196F3',
      subValue: `${stats.contacts?.response_rate || 0}% response rate`
    },
    { 
      title: 'Newsletter Subscribers', 
      value: stats.newsletter?.total || 0, 
      icon: <People sx={{ fontSize: 32 }} />, 
      color: '#4CAF50',
      subValue: `${stats.newsletter?.active || 0} active`
    },
    { 
      title: 'FAQs', 
      value: stats.faqs?.total || 0, 
      icon: <HelpOutline sx={{ fontSize: 32 }} />, 
      color: '#FF9800',
      subValue: `${stats.faqs?.active || 0} active`
    },
    { 
      title: 'Inquiry Types', 
      value: stats.inquiry_types?.total || 0, 
      icon: <Category sx={{ fontSize: 32 }} />, 
      color: '#9C27B0',
      subValue: `${stats.inquiry_types?.active || 0} active`
    },
  ];

  return (
    <Box sx={{ bgcolor: '#f5f5f0', minHeight: '100vh' }}>
      {/* Header */}
      <Paper sx={{ p: 2, position: 'sticky', top: 0, zIndex: 100 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar sx={{ bgcolor: '#c9a84c' }}><VerifiedUser /></Avatar>
            <Box>
              <Typography variant="h6">Tours & Safaris Admin Dashboard</Typography>
              <Typography variant="caption">{localStorage.getItem('adminEmail')}</Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button variant="outlined" onClick={loadData} startIcon={<Refresh />}>
              Refresh
            </Button>
            <Button variant="outlined" color="error" onClick={handleLogout} startIcon={<Logout />}>
              Logout
            </Button>
          </Box>
        </Box>
      </Paper>

      <Container maxWidth="xl" sx={{ py: 4 }}>
        {/* Stats Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {statCards.map((card, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box>
                      <Typography variant="body2" color="text.secondary">{card.title}</Typography>
                      <Typography variant="h3" sx={{ fontSize: '2rem', fontWeight: 700 }}>{card.value}</Typography>
                      <Typography variant="caption" color="text.secondary">{card.subValue}</Typography>
                    </Box>
                    <Box sx={{ color: card.color }}>{card.icon}</Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Tabs */}
        <Paper sx={{ mb: 3 }}>
          <Tabs value={tabValue} onChange={(e, v) => setTabValue(v)}>
            <Tab label="Contact Submissions" icon={<EmailIcon />} iconPosition="start" />
            <Tab label="FAQs" icon={<HelpOutline />} iconPosition="start" />
            <Tab label="Inquiry Types" icon={<Category />} iconPosition="start" />
            <Tab label="Newsletter Subscribers" icon={<People />} iconPosition="start" />
          </Tabs>
        </Paper>

        {/* Search Bar */}
        <Paper sx={{ p: 2, mb: 3 }}>
          <TextField
            fullWidth
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: <InputAdornment position="start"><Search /></InputAdornment>,
            }}
          />
        </Paper>

        {/* ==================== CONTACT SUBMISSIONS TAB ==================== */}
        {tabValue === 0 && (
          <Paper>
            <Box sx={{ p: 2, borderBottom: '1px solid #e0e0e0', bgcolor: '#fafaf8', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box>
                <Typography variant="h6">Contact Submissions</Typography>
                <Typography variant="caption">From your website contact form</Typography>
              </Box>
              <Chip label={`${filteredContacts.length} total`} />
            </Box>
            
            {loading ? <LinearProgress /> : (
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell><strong>Name</strong></TableCell>
                      <TableCell><strong>Email</strong></TableCell>
                      <TableCell><strong>Phone</strong></TableCell>
                      <TableCell><strong>Message</strong></TableCell>
                      <TableCell><strong>Date</strong></TableCell>
                      <TableCell><strong>Status</strong></TableCell>
                      <TableCell><strong>Actions</strong></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredContacts.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={7} align="center">
                          <Typography sx={{ py: 4, color: 'text.secondary' }}>
                            No contact submissions found
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredContacts.map((contact) => (
                        <TableRow 
                          key={contact.id} 
                          sx={{ 
                            bgcolor: !contact.is_processed ? '#fff8e1' : 'inherit',
                            '&:hover': { bgcolor: '#fafaf8' }
                          }}
                        >
                          <TableCell>
                            <Typography fontWeight={600}>{contact.full_name}</Typography>
                          </TableCell>
                          <TableCell>{contact.email}</TableCell>
                          <TableCell>{contact.phone}</TableCell>
                          <TableCell>
                            <Typography variant="body2" sx={{ maxWidth: 300 }}>
                              {contact.short_message}
                            </Typography>
                          </TableCell>
                          <TableCell>{new Date(contact.submitted_at).toLocaleDateString()}</TableCell>
                          <TableCell>{getStatusChip(contact.is_processed)}</TableCell>
                          <TableCell>
                            <IconButton onClick={(e) => handleMenuOpen(e, contact)}>
                              <MoreVert />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Paper>
        )}

        {/* ==================== FAQs TAB ==================== */}
        {tabValue === 1 && (
          <Paper>
            <Box sx={{ p: 2, borderBottom: '1px solid #e0e0e0', bgcolor: '#fafaf8', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box>
                <Typography variant="h6">FAQs</Typography>
                <Typography variant="caption">Frequently Asked Questions</Typography>
              </Box>
              <Button variant="contained" startIcon={<Add />} onClick={() => { setSelectedFaq(null); setFaqForm({ question: '', answer: '', category: 'general', order: 0, is_active: true }); setFaqDialogOpen(true); }}>
                Add FAQ
              </Button>
            </Box>
            
            {loading ? <LinearProgress /> : (
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell><strong>Question</strong></TableCell>
                      <TableCell><strong>Category</strong></TableCell>
                      <TableCell><strong>Order</strong></TableCell>
                      <TableCell><strong>Status</strong></TableCell>
                      <TableCell><strong>Actions</strong></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredFaqs.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={5} align="center">
                          <Typography sx={{ py: 4, color: 'text.secondary' }}>No FAQs found</Typography>
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredFaqs.map((faq) => (
                        <TableRow key={faq.id}>
                          <TableCell>
                            <Typography fontWeight={600}>{faq.question}</Typography>
                            <Typography variant="caption" color="text.secondary">{faq.answer?.substring(0, 80)}...</Typography>
                          </TableCell>
                          <TableCell>
                            <Chip label={faq.category_display || faq.category} size="small" />
                          </TableCell>
                          <TableCell>{faq.order}</TableCell>
                          <TableCell>
                            <Chip 
                              label={faq.is_active ? 'Active' : 'Inactive'} 
                              size="small"
                              sx={{ bgcolor: faq.is_active ? '#e8f5e9' : '#ffebee', color: faq.is_active ? '#2e7d32' : '#c62828' }}
                            />
                          </TableCell>
                          <TableCell>
                            <IconButton onClick={() => { setSelectedFaq(faq); setFaqForm(faq); setFaqDialogOpen(true); }}>
                              <Edit />
                            </IconButton>
                            <IconButton onClick={() => handleDeleteFaq(faq)} color="error">
                              <Delete />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Paper>
        )}

        {/* ==================== INQUIRY TYPES TAB ==================== */}
        {tabValue === 2 && (
          <Paper>
            <Box sx={{ p: 2, borderBottom: '1px solid #e0e0e0', bgcolor: '#fafaf8', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box>
                <Typography variant="h6">Inquiry Types</Typography>
                <Typography variant="caption">Categories for contact form inquiries</Typography>
              </Box>
              <Button variant="contained" startIcon={<Add />} onClick={() => { setSelectedInquiryType(null); setInquiryTypeForm({ name: '', description: '', order: 0, is_active: true }); setInquiryTypeDialogOpen(true); }}>
                Add Inquiry Type
              </Button>
            </Box>
            
            {loading ? <LinearProgress /> : (
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell><strong>Name</strong></TableCell>
                      <TableCell><strong>Description</strong></TableCell>
                      <TableCell><strong>Order</strong></TableCell>
                      <TableCell><strong>Status</strong></TableCell>
                      <TableCell><strong>Actions</strong></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredInquiryTypes.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={5} align="center">
                          <Typography sx={{ py: 4, color: 'text.secondary' }}>No inquiry types found</Typography>
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredInquiryTypes.map((type) => (
                        <TableRow key={type.id}>
                          <TableCell>
                            <Typography fontWeight={600}>{type.name}</Typography>
                          </TableCell>
                          <TableCell>{type.description || '-'}</TableCell>
                          <TableCell>{type.order}</TableCell>
                          <TableCell>
                            <Chip 
                              label={type.is_active ? 'Active' : 'Inactive'} 
                              size="small"
                              sx={{ bgcolor: type.is_active ? '#e8f5e9' : '#ffebee', color: type.is_active ? '#2e7d32' : '#c62828' }}
                            />
                          </TableCell>
                          <TableCell>
                            <IconButton onClick={() => { setSelectedInquiryType(type); setInquiryTypeForm(type); setInquiryTypeDialogOpen(true); }}>
                              <Edit />
                            </IconButton>
                            <IconButton onClick={() => handleDeleteInquiryType(type)} color="error">
                              <Delete />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Paper>
        )}

        {/* ==================== NEWSLETTER SUBSCRIBERS TAB ==================== */}
        {tabValue === 3 && (
          <Paper>
            <Box sx={{ p: 2, borderBottom: '1px solid #e0e0e0', bgcolor: '#fafaf8' }}>
              <Typography variant="h6">Newsletter Subscribers</Typography>
              <Typography variant="caption">People who subscribed to updates</Typography>
            </Box>
            
            {loading ? <LinearProgress /> : (
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell><strong>Email</strong></TableCell>
                      <TableCell><strong>Name</strong></TableCell>
                      <TableCell><strong>Subscribed Date</strong></TableCell>
                      <TableCell><strong>Status</strong></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredSubscribers.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={4} align="center">
                          <Typography sx={{ py: 4, color: 'text.secondary' }}>No subscribers found</Typography>
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredSubscribers.map((sub) => (
                        <TableRow key={sub.id}>
                          <TableCell>{sub.email}</TableCell>
                          <TableCell>{sub.first_name || '-'}</TableCell>
                          <TableCell>{new Date(sub.subscribed_at).toLocaleDateString()}</TableCell>
                          <TableCell>
                            <Chip 
                              label={sub.is_active ? 'Active' : 'Inactive'} 
                              size="small"
                              sx={{ bgcolor: sub.is_active ? '#e8f5e9' : '#ffebee', color: sub.is_active ? '#2e7d32' : '#c62828' }}
                            />
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Paper>
        )}
      </Container>

      {/* Action Menu for Contacts */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={() => handleViewDetails(selectedContact)}>
          <Visibility sx={{ mr: 1 }} /> View Details
        </MenuItem>
        <MenuItem onClick={() => handleReply(selectedContact)}>
          <EmailIcon sx={{ mr: 1 }} /> Reply via Email
        </MenuItem>
        {selectedContact && !selectedContact.is_processed && (
          <MenuItem onClick={handleMarkProcessed}>
            <CheckCircle sx={{ mr: 1 }} /> Mark as Processed
          </MenuItem>
        )}
        <MenuItem onClick={() => setDeleteDialogOpen(true)} sx={{ color: 'error.main' }}>
          <Delete sx={{ mr: 1 }} /> Delete
        </MenuItem>
      </Menu>

      {/* Contact Details Dialog */}
      <Dialog open={detailsOpen} onClose={() => setDetailsOpen(false)} maxWidth="md" fullWidth>
        {selectedContact && (
          <>
            <DialogTitle>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6">Inquiry Details</Typography>
                {getStatusChip(selectedContact.is_processed)}
              </Box>
            </DialogTitle>
            <DialogContent dividers>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="caption" color="text.secondary">Full Name</Typography>
                  <Typography variant="body1" fontWeight={600}>{selectedContact.full_name}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="caption" color="text.secondary">Email Address</Typography>
                  <Typography variant="body1" fontWeight={600}>{selectedContact.email}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="caption" color="text.secondary">Phone Number</Typography>
                  <Typography variant="body1" fontWeight={600}>{selectedContact.phone}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="caption" color="text.secondary">Submission Date</Typography>
                  <Typography variant="body1" fontWeight={600}>{new Date(selectedContact.submitted_at).toLocaleString()}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="caption" color="text.secondary">Message</Typography>
                  <Paper sx={{ p: 2, bgcolor: '#fafaf8', mt: 1 }}>
                    <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>{selectedContact.message}</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="caption" color="text.secondary">Staff Notes</Typography>
                  <TextareaAutosize
                    minRows={3}
                    style={{ width: '100%', padding: '12px', marginTop: '8px', borderRadius: '8px', border: '1px solid #e0e0e0', fontFamily: 'inherit', fontSize: '14px' }}
                    placeholder="Add internal notes..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setDetailsOpen(false)}>Close</Button>
              <Button variant="contained" startIcon={<EmailIcon />} onClick={() => handleReply(selectedContact)}>Reply via Email</Button>
              {!selectedContact.is_processed && (
                <Button variant="contained" color="success" startIcon={<CheckCircle />} onClick={handleMarkProcessed}>Mark as Processed</Button>
              )}
            </DialogActions>
          </>
        )}
      </Dialog>

      {/* FAQ Dialog */}
      <Dialog open={faqDialogOpen} onClose={() => setFaqDialogOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>{selectedFaq ? 'Edit FAQ' : 'Add New FAQ'}</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <TextField label="Question" fullWidth value={faqForm.question} onChange={(e) => setFaqForm({ ...faqForm, question: e.target.value })} />
            <TextField label="Answer" fullWidth multiline rows={4} value={faqForm.answer} onChange={(e) => setFaqForm({ ...faqForm, answer: e.target.value })} />
            <TextField label="Category" fullWidth select SelectProps={{ native: true }} value={faqForm.category} onChange={(e) => setFaqForm({ ...faqForm, category: e.target.value })}>
              <option value="safari">Safari Packages</option>
              <option value="trekking">Mountain Trekking</option>
              <option value="booking">Booking & Payment</option>
              <option value="transport">Transportation</option>
              <option value="accommodation">Accommodation</option>
              <option value="general">General Questions</option>
            </TextField>
            <TextField label="Display Order" type="number" fullWidth value={faqForm.order} onChange={(e) => setFaqForm({ ...faqForm, order: parseInt(e.target.value) })} />
            <FormControlLabel control={<Switch checked={faqForm.is_active} onChange={(e) => setFaqForm({ ...faqForm, is_active: e.target.checked })} />} label="Active" />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setFaqDialogOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={selectedFaq ? handleUpdateFaq : handleCreateFaq}>{selectedFaq ? 'Update' : 'Create'}</Button>
        </DialogActions>
      </Dialog>

      {/* Inquiry Type Dialog */}
      <Dialog open={inquiryTypeDialogOpen} onClose={() => setInquiryTypeDialogOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>{selectedInquiryType ? 'Edit Inquiry Type' : 'Add New Inquiry Type'}</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <TextField label="Name" fullWidth value={inquiryTypeForm.name} onChange={(e) => setInquiryTypeForm({ ...inquiryTypeForm, name: e.target.value })} />
            <TextField label="Description" fullWidth multiline rows={3} value={inquiryTypeForm.description} onChange={(e) => setInquiryTypeForm({ ...inquiryTypeForm, description: e.target.value })} />
            <TextField label="Display Order" type="number" fullWidth value={inquiryTypeForm.order} onChange={(e) => setInquiryTypeForm({ ...inquiryTypeForm, order: parseInt(e.target.value) })} />
            <FormControlLabel control={<Switch checked={inquiryTypeForm.is_active} onChange={(e) => setInquiryTypeForm({ ...inquiryTypeForm, is_active: e.target.checked })} />} label="Active" />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setInquiryTypeDialogOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={selectedInquiryType ? handleUpdateInquiryType : handleCreateInquiryType}>{selectedInquiryType ? 'Update' : 'Create'}</Button>
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation */}
      <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this inquiry? This action cannot be undone.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleDeleteContact} color="error" variant="contained">Delete</Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar */}
      <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={() => setSnackbar({ ...snackbar, open: false })} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
        <Alert severity={snackbar.severity} onClose={() => setSnackbar({ ...snackbar, open: false })}>{snackbar.message}</Alert>
      </Snackbar>
    </Box>
  );
};

export default AdminDashboard;