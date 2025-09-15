import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  MapPin, 
  Target, 
  Clock, 
  BookOpen, 
  Award, 
  CheckCircle,
  ArrowRight,
  Calendar,
  Zap
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function RoadmapGeneratorPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    currentRole: '',
    targetRole: '',
    industry: '',
    timeframe: '',
    skills: [] as string[],
    experience: ''
  });

  const [generatedRoadmap, setGeneratedRoadmap] = useState<any>(null);

  const availableSkills = [
    'JavaScript', 'Python', 'React', 'Node.js', 'Data Analysis', 'Machine Learning',
    'Project Management', 'Leadership', 'Communication', 'Marketing', 'Design',
    'Sales', 'Finance', 'Strategy', 'Operations'
  ];

  const sampleRoadmap = {
    title: 'Software Developer to Senior Software Engineer',
    duration: '12-18 months',
    phases: [
      {
        title: 'Foundation Building',
        duration: '3 months',
        skills: ['Advanced JavaScript', 'System Design Basics', 'Testing'],
        milestones: ['Complete advanced JS course', 'Build 2 complex projects', 'Learn testing frameworks']
      },
      {
        title: 'Skill Enhancement',
        duration: '6 months',
        skills: ['System Architecture', 'Mentoring', 'Code Review'],
        milestones: ['Lead a small project', 'Mentor a junior developer', 'Contribute to architecture decisions']
      },
      {
        title: 'Leadership Development',
        duration: '6 months',
        skills: ['Technical Leadership', 'Communication', 'Process Improvement'],
        milestones: ['Lead cross-functional projects', 'Present technical solutions', 'Implement process improvements']
      }
    ]
  };

  const handleSkillToggle = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill) 
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const generateRoadmap = () => {
    setGeneratedRoadmap(sampleRoadmap);
    setCurrentStep(3);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Tell Us About Your Current Situation</CardTitle>
              <CardDescription>
                Help us understand where you are now to create the perfect roadmap for your career journey.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="currentRole">Current Role</Label>
                  <Input
                    id="currentRole"
                    placeholder="e.g., Junior Developer"
                    value={formData.currentRole}
                    onChange={(e) => setFormData(prev => ({ ...prev, currentRole: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">Experience Level</Label>
                  <Select value={formData.experience} onValueChange={(value) => setFormData(prev => ({ ...prev, experience: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                      <SelectItem value="mid">Mid Level (3-5 years)</SelectItem>
                      <SelectItem value="senior">Senior Level (6+ years)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="industry">Industry</Label>
                <Select value={formData.industry} onValueChange={(value) => setFormData(prev => ({ ...prev, industry: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="consulting">Consulting</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={() => setCurrentStep(2)} className="w-full" size="lg">
                Continue to Goals
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        );

      case 2:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Define Your Career Goals</CardTitle>
              <CardDescription>
                Where do you want to be, and what skills do you want to develop?
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="targetRole">Target Role</Label>
                  <Input
                    id="targetRole"
                    placeholder="e.g., Senior Software Engineer"
                    value={formData.targetRole}
                    onChange={(e) => setFormData(prev => ({ ...prev, targetRole: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeframe">Timeframe</Label>
                  <Select value={formData.timeframe} onValueChange={(value) => setFormData(prev => ({ ...prev, timeframe: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select timeframe" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="6-months">6 months</SelectItem>
                      <SelectItem value="1-year">1 year</SelectItem>
                      <SelectItem value="2-years">2 years</SelectItem>
                      <SelectItem value="3-years">3+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <Label>Skills to Develop</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {availableSkills.map((skill) => (
                    <div key={skill} className="flex items-center space-x-2">
                      <Checkbox
                        id={skill}
                        checked={formData.skills.includes(skill)}
                        onCheckedChange={() => handleSkillToggle(skill)}
                      />
                      <Label htmlFor={skill} className="text-sm cursor-pointer">
                        {skill}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <Button variant="outline" onClick={() => setCurrentStep(1)} className="flex-1">
                  Back
                </Button>
                <Button onClick={generateRoadmap} className="flex-1" size="lg">
                  Generate Roadmap
                  <Zap className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        );

      case 3:
        return generatedRoadmap && (
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-6 w-6 text-primary" />
                  <span>{generatedRoadmap.title}</span>
                </CardTitle>
                <CardDescription className="flex items-center space-x-4">
                  <Badge variant="secondary" className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{generatedRoadmap.duration}</span>
                  </Badge>
                  <Badge variant="outline">{formData.industry}</Badge>
                </CardDescription>
              </CardHeader>
            </Card>

            {generatedRoadmap.phases.map((phase: any, index: number) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <span>{phase.title}</span>
                      <Badge variant="secondary">{phase.duration}</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center space-x-2">
                        <BookOpen className="h-4 w-4" />
                        <span>Skills to Develop</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {phase.skills.map((skill: string) => (
                          <Badge key={skill} variant="outline">{skill}</Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 flex items-center space-x-2">
                        <Award className="h-4 w-4" />
                        <span>Key Milestones</span>
                      </h4>
                      <ul className="space-y-2">
                        {phase.milestones.map((milestone: string, i: number) => (
                          <li key={i} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span className="text-sm">{milestone}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            <div className="flex space-x-4">
              <Button onClick={() => setCurrentStep(1)} variant="outline" className="flex-1">
                Create New Roadmap
              </Button>
              <Button className="flex-1">
                Download Roadmap
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        );

      default:
        return null;
    }
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
                Create Your Personalized
                <span className="text-primary"> Career Roadmap</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Get a step-by-step plan tailored to your current role, target position, and timeline. 
                Our AI-powered generator creates comprehensive roadmaps with milestones, skills, and resources.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <Badge variant="secondary">AI-Powered</Badge>
                <Badge variant="secondary">Personalized</Badge>
                <Badge variant="secondary">Industry-Specific</Badge>
                <Badge variant="secondary">Milestone Tracking</Badge>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1661577804141-6f0180f82373?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2FkbWFwJTIwcGxhbm5pbmclMjBzdHJhdGVneXxlbnwxfHx8fDE3NTc3NjYwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Career roadmap planning"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="px-4 sm:px-6 lg:px-8 mb-8">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-center space-x-8 mb-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center space-x-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                  step <= currentStep 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {step <= currentStep && currentStep > step ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    step
                  )}
                </div>
                <span className={`text-sm ${step <= currentStep ? 'text-foreground' : 'text-muted-foreground'}`}>
                  {step === 1 ? 'Current Situation' : step === 2 ? 'Career Goals' : 'Your Roadmap'}
                </span>
                {step < 3 && (
                  <div className={`w-16 h-0.5 ${step < currentStep ? 'bg-primary' : 'bg-muted'}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {renderStepContent()}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      {currentStep === 1 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30 mt-16">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Personalized Path</h3>
                <p className="text-muted-foreground">
                  Every roadmap is tailored to your specific situation, goals, and industry.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Timeline Planning</h3>
                <p className="text-muted-foreground">
                  Clear milestones and deadlines to keep you on track towards your goals.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Learning Resources</h3>
                <p className="text-muted-foreground">
                  Curated resources and recommendations for skill development.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}