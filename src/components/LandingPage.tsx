import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { 
  Compass, 
  Map, 
  MessageSquare, 
  HelpCircle, 
  BookOpen, 
  ArrowRight,
  Star,
  Users,
  Award,
  TrendingUp
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function LandingPage() {
  const features = [
    {
      icon: Compass,
      title: 'Career Guidance',
      description: 'Get personalized career advice from industry experts and mentors who understand your field.',
      image: 'https://images.unsplash.com/photo-1565688527174-775059ac429c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBndWlkYW5jZSUyMHByb2Zlc3Npb25hbCUyMG1lZXRpbmd8ZW58MXx8fHwxNzU3NzY2MDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      path: '/career-guidance',
      delay: 0.1
    },
    {
      icon: Map,
      title: 'Roadmap Generator',
      description: 'Create customized learning paths and career roadmaps tailored to your goals and current skill level.',
      image: 'https://images.unsplash.com/photo-1661577804141-6f0180f82373?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2FkbWFwJTIwcGxhbm5pbmclMjBzdHJhdGVneXxlbnwxfHx8fDE3NTc3NjYwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      path: '/roadmap-generator',
      delay: 0.2
    },
    {
      icon: MessageSquare,
      title: 'Interview Preparation',
      description: 'Practice with mock interviews, get feedback, and master the art of presenting your best self.',
      image: 'https://images.unsplash.com/photo-1559523182-a284c3fb7cff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb2IlMjBpbnRlcnZpZXclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU3NzY0NzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      path: '/interview-prep',
      delay: 0.3
    },
    {
      icon: HelpCircle,
      title: 'FAQ & Support',
      description: 'Find answers to common questions and get support when you need it most.',
      image: 'https://images.unsplash.com/photo-1484069560501-87d72b0c3669?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVxdWVudGx5JTIwYXNrZWQlMjBxdWVzdGlvbnMlMjBoZWxwfGVufDF8fHx8MTc1Nzc2NjAyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      path: '/faq',
      delay: 0.4
    },
    {
      icon: BookOpen,
      title: 'Career Insights',
      description: 'Stay updated with the latest industry trends, career tips, and professional development articles.',
      image: 'https://images.unsplash.com/photo-1695473507908-ff60e604c113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9nJTIwaW5zaWdodHMlMjBrbm93bGVkZ2UlMjBzaGFyaW5nfGVufDF8fHx8MTc1Nzc2NjAyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      path: '/insights',
      delay: 0.5
    }
  ];

  const stats = [
    { icon: Users, value: '10k+', label: 'Professionals Guided' },
    { icon: Award, value: '95%', label: 'Success Rate' },
    { icon: Star, value: '4.9/5', label: 'User Rating' },
    { icon: TrendingUp, value: '2x', label: 'Career Growth' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 -z-10" />
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Navigate Your Career
              <br />
              <span className="text-primary">With Confidence</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get personalized career guidance, create custom roadmaps, and ace your interviews 
              with our comprehensive platform designed for ambitious professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/career-guidance">
                <Button size="lg" className="text-lg px-8 py-3">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="mt-16"
          >
            <div className="relative max-w-4xl mx-auto">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBjYXJlZXJ8ZW58MXx8fHwxNzU3NzY2MDIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern office workspace representing career growth"
                className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
          </motion.div>
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
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive platform provides all the tools and guidance you need 
              to advance your career and achieve your professional goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: feature.delay }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <ImageWithFallback
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Link to={feature.path}>
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Explore {feature.title}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of professionals who have already taken control of their career journey 
              with CareerCompass.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="text-lg px-8 py-3">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/roadmap-generator">
                <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Try Roadmap Generator
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}