import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Badge } from './ui/badge';
import { 
  Search, 
  HelpCircle, 
  BookOpen, 
  MessageSquare, 
  Phone, 
  Mail,
  Clock,
  Users,
  CheckCircle
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function FAQPage() {
  const faqCategories = [
    {
      category: 'Getting Started',
      icon: BookOpen,
      faqs: [
        {
          question: 'How do I create my first career roadmap?',
          answer: 'Navigate to the Roadmap Generator, fill out the assessment form with your current role, target position, and timeline. Our AI will create a personalized roadmap with milestones and skill development plans.'
        },
        {
          question: 'Is CareerCompass free to use?',
          answer: 'We offer a free tier with basic features including career assessment and limited roadmap generation. Premium plans unlock advanced features like unlimited roadmaps, 1-on-1 mentoring, and detailed analytics.'
        },
        {
          question: 'What industries do you support?',
          answer: 'We support a wide range of industries including Technology, Finance, Healthcare, Marketing, Consulting, Education, and more. Our guidance is tailored to industry-specific requirements and trends.'
        }
      ]
    },
    {
      category: 'Career Guidance',
      icon: Users,
      faqs: [
        {
          question: 'How are mentors selected and vetted?',
          answer: 'All mentors go through a rigorous screening process including background checks, skill assessments, and interview evaluations. They must have 5+ years of industry experience and proven track records of helping others succeed.'
        },
        {
          question: 'How long does it take to see results?',
          answer: 'Most users see improvements in their career clarity within 2-3 weeks. Actual career advancement depends on your goals, industry, and dedication to following the roadmap. On average, users achieve their career goals 40% faster.'
        },
        {
          question: 'Can I change my career path mid-journey?',
          answer: 'Absolutely! Career paths can evolve, and we encourage adapting your roadmap as you grow. You can update your goals and generate new roadmaps at any time. Your progress and learnings are always preserved.'
        }
      ]
    },
    {
      category: 'Technical Support',
      icon: HelpCircle,
      faqs: [
        {
          question: 'I\'m having trouble with video interviews. What should I do?',
          answer: 'First, check your browser permissions for camera and microphone access. Ensure you\'re using a supported browser (Chrome, Firefox, Safari). If issues persist, try clearing your browser cache or contact our support team.'
        },
        {
          question: 'How do I download my career roadmap?',
          answer: 'Once your roadmap is generated, click the "Download Roadmap" button at the bottom of the page. You can export it as a PDF or share it via email. Premium users can also sync with calendar apps.'
        },
        {
          question: 'Can I access my account from multiple devices?',
          answer: 'Yes, your account syncs across all devices. Simply log in with your credentials on any device to access your roadmaps, progress, and session history. Mobile apps are available for iOS and Android.'
        }
      ]
    },
    {
      category: 'Billing & Plans',
      icon: CheckCircle,
      faqs: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans. All payments are processed securely through industry-standard encryption.'
        },
        {
          question: 'Can I cancel my subscription anytime?',
          answer: 'Yes, you can cancel your subscription at any time from your account settings. You\'ll continue to have access to premium features until the end of your billing period. No cancellation fees apply.'
        },
        {
          question: 'Do you offer student discounts?',
          answer: 'Yes! Students with valid .edu email addresses receive 50% off all premium plans. Recent graduates (within 6 months) are also eligible for this discount. Contact support to verify your eligibility.'
        }
      ]
    }
  ];

  const supportChannels = [
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7',
      action: 'Start Chat'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      availability: 'Response within 4 hours',
      action: 'Send Email'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with a specialist',
      availability: 'Mon-Fri, 9AM-6PM PST',
      action: 'Call Now'
    }
  ];

  const quickStats = [
    { value: '10k+', label: 'Questions Answered' },
    { value: '95%', label: 'Resolution Rate' },
    { value: '<2hrs', label: 'Avg Response Time' },
    { value: '4.9/5', label: 'Support Rating' }
  ];

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
                Frequently Asked
                <span className="text-primary"> Questions</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Find answers to common questions about CareerCompass, our features, and how to make 
                the most of your career development journey.
              </p>
              
              {/* Search Bar */}
              <div className="relative mb-8">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  placeholder="Search for answers..."
                  className="pl-10 py-3 text-lg"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Getting Started</Badge>
                <Badge variant="secondary">Career Guidance</Badge>
                <Badge variant="secondary">Technical Issues</Badge>
                <Badge variant="secondary">Billing</Badge>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1484069560501-87d72b0c3669?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVxdWVudGx5JTIwYXNrZWQlMjBxdWVzdGlvbnMlMjBoZWxwfGVufDF8fHx8MTc1Nzc2NjAyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Help and support center"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {quickStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Find Your Answers
            </h2>
            <p className="text-xl text-muted-foreground">
              Browse through our comprehensive FAQ organized by category.
            </p>
          </motion.div>

          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <div className="p-6 border-b border-border">
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <category.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{category.category}</h3>
                      <Badge variant="outline">{category.faqs.length} questions</Badge>
                    </div>
                  </div>
                  <CardContent className="p-0">
                    <Accordion type="single" collapsible className="w-full">
                      {category.faqs.map((faq, faqIndex) => (
                        <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`}>
                          <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4">
                            <p className="text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Channels */}
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
              Still Need Help?
            </h2>
            <p className="text-xl text-muted-foreground">
              Our support team is here to help you succeed. Choose your preferred way to get assistance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="p-6">
                    <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <channel.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{channel.title}</h3>
                    <p className="text-muted-foreground mb-3">{channel.description}</p>
                    <div className="flex items-center justify-center space-x-1 text-sm text-muted-foreground mb-4">
                      <Clock className="h-4 w-4" />
                      <span>{channel.availability}</span>
                    </div>
                    <Button className="w-full">{channel.action}</Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our team is always here to help. Reach out with any questions, suggestions, 
              or feedback you might have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-3">
                Contact Support
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                Submit Feedback
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}