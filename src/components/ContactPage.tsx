import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send,
  CheckCircle,
  ArrowRight,
  Calendar,
  Video,
  Users,
  Headphones
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    subject: '',
    message: '',
    contactReason: ''
  });

  const contactReasons = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'support', label: 'Technical Support' },
    { value: 'partnership', label: 'Partnership Opportunity' },
    { value: 'feedback', label: 'Product Feedback' },
    { value: 'media', label: 'Media & Press' },
    { value: 'enterprise', label: 'Enterprise Solutions' }
  ];

  const contactMethods = [
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7 Support',
      action: 'Start Chat',
      color: 'bg-blue-500'
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us a detailed message',
      availability: 'Response within 4 hours',
      action: 'Send Email',
      color: 'bg-green-500'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with a specialist',
      availability: 'Mon-Fri, 9AM-6PM PST',
      action: 'Call Now',
      color: 'bg-purple-500'
    },
    {
      icon: Video,
      title: 'Video Call',
      description: 'Schedule a personalized demo',
      availability: 'By appointment',
      action: 'Book Call',
      color: 'bg-orange-500'
    }
  ];

  const officeLocations = [
    {
      city: 'San Francisco',
      address: '123 Market Street, Suite 400',
      zipCode: 'San Francisco, CA 94103',
      phone: '+1 (415) 555-0123',
      email: 'sf@careercompass.com'
    },
    {
      city: 'New York',
      address: '456 Broadway, Floor 12',
      zipCode: 'New York, NY 10013',
      phone: '+1 (212) 555-0456',
      email: 'ny@careercompass.com'
    },
    {
      city: 'Austin',
      address: '789 Congress Ave, Suite 200',
      zipCode: 'Austin, TX 78701',
      phone: '+1 (512) 555-0789',
      email: 'austin@careercompass.com'
    }
  ];

  const faqs = [
    {
      question: 'How quickly can I expect a response?',
      answer: 'We aim to respond to all inquiries within 4 hours during business hours, and within 24 hours during weekends.'
    },
    {
      question: 'Do you offer enterprise solutions?',
      answer: 'Yes! We provide customized solutions for organizations looking to support their employees\' career development.'
    },
    {
      question: 'Can I schedule a demo?',
      answer: 'Absolutely! You can book a personalized demo through our video call option or contact our sales team directly.'
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Let's Start Your
                <span className="text-primary"> Career Journey</span> Together
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Have questions about our platform? Want to explore partnership opportunities? 
                Or simply need support? We're here to help you succeed.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <Badge variant="secondary">24/7 Support</Badge>
                <Badge variant="secondary">Expert Guidance</Badge>
                <Badge variant="secondary">Quick Response</Badge>
                <Badge variant="secondary">Personalized Help</Badge>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Free consultation available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Personalized demo sessions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Enterprise solutions available</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1565688527174-775059ac429c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBndWlkYW5jZUUyMHByb2Zlc3Npb25hbCUyMG1lZXRpbmd8ZW58MXx8fHwxNzU3NzY2MDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional consultation meeting"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose How You'd Like to Connect
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We offer multiple ways to get in touch. Pick the method that works best for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                  <CardContent className="p-6">
                    <div className={`${method.color} p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{method.description}</p>
                    <div className="flex items-center justify-center space-x-1 text-xs text-muted-foreground mb-4">
                      <Clock className="h-3 w-3" />
                      <span>{method.availability}</span>
                    </div>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@company.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          placeholder="Your company name"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="role">Your Role</Label>
                        <Input
                          id="role"
                          placeholder="e.g., Software Engineer"
                          value={formData.role}
                          onChange={(e) => handleInputChange('role', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contactReason">Reason for Contact</Label>
                      <Select value={formData.contactReason} onValueChange={(value) => handleInputChange('contactReason', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a reason" />
                        </SelectTrigger>
                        <SelectContent>
                          {contactReasons.map((reason) => (
                            <SelectItem key={reason.value} value={reason.value}>
                              {reason.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        placeholder="Brief description of your inquiry"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Please provide details about your inquiry..."
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info & FAQs */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Quick Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Contact Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">General Inquiries</p>
                      <p className="text-muted-foreground text-sm">hello@careercompass.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Headphones className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Support</p>
                      <p className="text-muted-foreground text-sm">support@careercompass.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Enterprise Sales</p>
                      <p className="text-muted-foreground text-sm">enterprise@careercompass.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Phone Support</p>
                      <p className="text-muted-foreground text-sm">+1 (855) CAREER-1</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Common Questions */}
              <Card>
                <CardHeader>
                  <CardTitle>Common Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-border last:border-b-0 pb-4 last:pb-0">
                      <h4 className="font-medium mb-2">{faq.question}</h4>
                      <p className="text-muted-foreground text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Schedule a Call CTA */}
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Calendar className="h-6 w-6" />
                    <h3 className="text-lg font-semibold">Schedule a Free Consultation</h3>
                  </div>
                  <p className="mb-4 opacity-90">
                    Book a 30-minute call with our career experts to discuss your goals and how we can help.
                  </p>
                  <Button variant="secondary" className="w-full">
                    Book Your Call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Office Locations
            </h2>
            <p className="text-xl text-muted-foreground">
              Visit us at one of our offices around the country.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {officeLocations.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>{office.city}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Address</p>
                      <p className="font-medium">{office.address}</p>
                      <p className="font-medium">{office.zipCode}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium">{office.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">{office.email}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}