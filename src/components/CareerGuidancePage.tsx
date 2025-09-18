import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import {
  User,
  BrainCircuit,
  Target,
  TrendingUp,
  Clock,
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import getGuide from '../firebase/career-guide';
type CareerGuidancePage =
  {
    guidance: string;
  }
export function CareerGuidancePage({ user }) {
  const [formData, setFormData] = useState({
    name: '',
    experience: '',
    currentRole: '',
    industry: '',
    goals: '',
    challenges: ''
  });

  const [loading, setLoading] = useState(false);
  const [guidance, setGuidance] = useState<string | null>("");
  const [responded, setResponded] = useState(false);
  const lines = guidance!
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .map((l) => l.replace(/\*\*/g, ""));
  const guidanceAreas = [
    {
      icon: Target,
      title: 'Goal Setting',
      description: 'Define clear, achievable career objectives aligned with your values and aspirations.',
      features: ['SMART Goals Framework', 'Priority Assessment', 'Timeline Planning']
    },
    {
      icon: TrendingUp,
      title: 'Skill Development',
      description: 'Identify skill gaps and create personalized learning plans for career advancement.',
      features: ['Skills Assessment', 'Learning Pathways', 'Progress Tracking']
    },
    {
      icon: BrainCircuit,
      title: 'Strategic Planning',
      description: 'Develop comprehensive career strategies tailored to your industry and goals.',
      features: ['Market Analysis', 'Opportunity Mapping', 'Risk Assessment']
    },
    {
      icon: User,
      title: 'Personal Branding',
      description: 'Build a strong professional brand that showcases your unique value proposition.',
      features: ['Brand Strategy', 'Online Presence', 'Networking Tips']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Software Engineer',
      company: 'Tech Corp',
      content: 'The career guidance helped me transition from a junior to senior role in just 18 months.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Manager',
      company: 'Growth Inc',
      content: 'Excellent personalized advice that aligned perfectly with my career aspirations.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Manager',
      company: 'Innovation Labs',
      content: 'The strategic planning session was a game-changer for my career trajectory.',
      rating: 5
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
                Expert Career Guidance for
                <span className="text-primary"> Your Success</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Get personalized career advice from industry experts who understand your field.
                Our comprehensive guidance helps you navigate career challenges and accelerate your professional growth.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <Badge variant="secondary">1-on-1 Sessions</Badge>
                <Badge variant="secondary">Industry Experts</Badge>
                <Badge variant="secondary">Personalized Plans</Badge>
                <Badge variant="secondary">Ongoing Support</Badge>
              </div>
              <Button size="lg" className="text-lg px-8 py-3">
                Book Your Session
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1565688527174-775059ac429c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBndWlkYW5jZSUyMHByb2Zlc3Npb25hbCUyMG1lZXRpbmd8ZW58MXx8fHwxNzU3NzY2MDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Career guidance consultation"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Assessment Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get Your Personalized Assessment
            </h2>
            <p className="text-xl text-muted-foreground">
              Tell us about yourself and we'll provide tailored career guidance recommendations.
            </p>
          </motion.div>

          <Card>
            <CardHeader>
              <CardTitle>Career Assessment Form</CardTitle>
              <CardDescription>
                This information helps us provide more personalized guidance for your career journey.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    required
                    disabled={loading}
                    id="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">Years of Experience</Label>
                  <Select required disabled={loading} value={formData.experience} onValueChange={(value) => handleInputChange('experience', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-2">0-2 years</SelectItem>
                      <SelectItem value="3-5">3-5 years</SelectItem>
                      <SelectItem value="6-10">6-10 years</SelectItem>
                      <SelectItem value="10+">10+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="currentRole">Current Role</Label>
                <Input
                required
                  disabled={loading}
                  id="currentRole"
                  placeholder="e.g., Software Developer, Marketing Manager"
                  value={formData.currentRole}
                  onChange={(e) => handleInputChange('currentRole', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="industry">Industry</Label>
                <Select required disabled={loading} value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="consulting">Consulting</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="goals">Career Goals</Label>
                <Textarea
                required
                  disabled={loading}
                  id="goals"
                  placeholder="Describe your short-term and long-term career goals..."
                  value={formData.goals}
                  onChange={(e) => handleInputChange('goals', e.target.value)}
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="challenges">Current Challenges</Label>
                <Textarea
                required
                  disabled={loading}
                  id="challenges"
                  placeholder="What career challenges are you facing? What would you like help with?"
                  value={formData.challenges}
                  onChange={(e) => handleInputChange('challenges', e.target.value)}
                  rows={3}
                />
              </div>
              {
                user ?
                  (
                    <Button variant="outline" className="w-full" size="lg" disabled={loading}
                      onClick={() => {
                        setLoading(true);
                        getGuide(formData).then(
                          (text) => {
                            setGuidance(text);
                            setLoading(false);
                            setResponded(true);
                          });
                      }}>
                      {loading ? "Generating Guidance..." : "Get My Personalized Guidance"}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  ) :
                  (
                    <Link to="/">
                      <Button variant="outline" className="w-full" size="lg">
                        Create Account or Login!
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  )
              }

            </CardContent>
          </Card>

          <Card hidden={!responded}>
            <CardHeader>
              <CardTitle>Career Guidence</CardTitle>
              <CardDescription>
                Here's your personalized guidance for your career journey.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4 text-left">
                {
                  lines.map((line, index) => {
                    // Heading for numbered sections
                    if (/^\d\./.test(line)) {
                      return (
                        <h3
                          key={index}
                          className="font-semibold text-lg text-foreground mt-4"
                        >
                          {line}
                        </h3>
                      );
                    }

                    // Bullet points
                    if (/^[-•]/.test(line)) {
                      return (
                        <li key={index} className="ml-6 list-disc text-muted-foreground">
                          {line.replace(/^[-•]\s*/, "")}
                        </li>
                      );
                    }

                    // Normal paragraph
                    return (
                      <p key={index} className="text-muted-foreground">
                        {line}
                      </p>
                    );
                  })}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* Guidance Areas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30" hidden>
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Career Guidance
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our holistic approach covers all aspects of career development to ensure your success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guidanceAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <area.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{area.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {area.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {area.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              See how our career guidance has helped professionals achieve their goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </p>
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