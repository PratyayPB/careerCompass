import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Target, 
  Users, 
  Award, 
  Heart, 
  Compass, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Shield,
  Zap
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Personalized Guidance',
      description: 'Every career journey is unique. We provide tailored advice that fits your specific goals, industry, and circumstances.'
    },
    {
      icon: Users,
      title: 'Expert Community',
      description: 'Learn from industry professionals, career coaches, and mentors who have walked the path you want to take.'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Growth',
      description: 'We believe in lifelong learning and continuous improvement, both for our users and our platform.'
    },
    {
      icon: Heart,
      title: 'Genuine Care',
      description: 'Your success is our success. We genuinely care about helping you achieve your career aspirations.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      bio: '15+ years in executive recruiting and career coaching. Former VP at Fortune 500 companies.',
      image: 'https://images.unsplash.com/photo-1565688527174-775059ac429c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBndWlkYW5jZSUyMHByb2Zlc3Npb25hbCUyMG1lZXRpbmd8ZW58MXx8fHwxNzU3NzY2MDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Product',
      bio: 'Former tech lead at major startups. Passionate about building tools that empower professionals.',
      image: 'https://images.unsplash.com/photo-1559523182-a284c3fb7cff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb2IlMjBpbnRlcnZpZXclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU3NzY0NzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Content',
      bio: 'Award-winning journalist and career writer. Specializes in making complex career advice accessible.',
      image: 'https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBjYXJlZXJ8ZW58MXx8fHwxNzU3NzY2MDIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'David Park',
      role: 'VP of Growth',
      bio: 'Growth strategist with experience scaling B2B SaaS platforms. Focus on user success and retention.',
      image: 'https://images.unsplash.com/photo-1661577804141-6f0180f82373?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2FkbWFwJTIwcGxhbm5pbmclMjBzdHJhdGVneXxlbnwxfHx8fDE3NTc3NjYwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const stats = [
    { icon: Users, value: '50,000+', label: 'Professionals Guided' },
    { icon: Globe, value: '150+', label: 'Countries Served' },
    { icon: Award, value: '95%', label: 'Success Rate' },
    { icon: Star, value: '4.9/5', label: 'User Rating' }
  ];

  const timeline = [
    {
      year: '2020',
      title: 'The Beginning',
      description: 'Founded with a vision to democratize career guidance and make expert advice accessible to everyone.'
    },
    {
      year: '2021',
      title: 'AI Integration',
      description: 'Launched our AI-powered roadmap generator, providing personalized career paths at scale.'
    },
    {
      year: '2022',
      title: 'Global Expansion',
      description: 'Expanded to serve professionals in over 50 countries with localized content and guidance.'
    },
    {
      year: '2023',
      title: 'Expert Network',
      description: 'Built a network of 500+ industry experts and career coaches across various fields.'
    },
    {
      year: '2024',
      title: 'Platform Evolution',
      description: 'Launched advanced interview prep tools and enhanced personalization features.'
    }
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
                Empowering Careers,
                <span className="text-primary"> One Professional</span> at a Time
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                CareerCompass was born from a simple belief: everyone deserves access to expert 
                career guidance, regardless of their background, location, or current position. 
                We're here to help you navigate your professional journey with confidence.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <Badge variant="secondary">Founded 2020</Badge>
                <Badge variant="secondary">Global Platform</Badge>
                <Badge variant="secondary">AI-Powered</Badge>
                <Badge variant="secondary">Expert-Backed</Badge>
              </div>
              <Button size="lg" className="text-lg px-8 py-3">
                Join Our Mission
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBjYXJlZXJ8ZW58MXx8fHwxNzU3NzY2MDIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team collaboration in modern office"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="bg-primary/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Compass className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              To democratize career development by providing personalized, expert-backed guidance 
              that helps professionals at every stage unlock their full potential and achieve 
              meaningful career success.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Trusted Guidance</h3>
                  <p className="text-muted-foreground text-sm">Expert-vetted advice you can rely on</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Zap className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Actionable Insights</h3>
                  <p className="text-muted-foreground text-sm">Practical steps for immediate impact</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Globe className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Global Accessibility</h3>
                  <p className="text-muted-foreground text-sm">Available to professionals worldwide</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and shape how we serve our community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-6">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              From a simple idea to a global platform serving thousands of professionals.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start space-x-6"
                >
                  <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-lg font-bold z-10">
                    {item.year}
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate professionals dedicated to your career success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-6">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of professionals who have transformed their careers with CareerCompass. 
              Your future starts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-3">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}