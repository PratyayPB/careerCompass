import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Mic, 
  Video, 
  CheckCircle, 
  Clock,
  MessageSquare,
  Users,
  BookOpen,
  ArrowRight,
  Star,
  Lightbulb
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function InterviewPage() {
  const [isRecording, setIsRecording] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const interviewTypes = [
    {
      type: 'Technical',
      description: 'Practice coding problems and technical concepts',
      duration: '45-60 min',
      questions: 25,
      difficulty: 'Advanced'
    },
    {
      type: 'Behavioral',
      description: 'STAR method and soft skills assessment',
      duration: '30-45 min',
      questions: 15,
      difficulty: 'Intermediate'
    },
    {
      type: 'System Design',
      description: 'Architecture and scalability discussions',
      duration: '60-90 min',
      questions: 8,
      difficulty: 'Expert'
    },
    {
      type: 'Case Study',
      description: 'Business scenarios and problem-solving',
      duration: '45-60 min',
      questions: 12,
      difficulty: 'Advanced'
    }
  ];

  const sampleQuestions = {
    technical: [
      'Explain the difference between synchronous and asynchronous programming.',
      'How would you optimize a slow-performing database query?',
      'Describe the trade-offs between different sorting algorithms.',
      'What are the benefits and drawbacks of microservices architecture?'
    ],
    behavioral: [
      'Tell me about a time when you had to work with a difficult team member.',
      'Describe a situation where you had to learn a new skill quickly.',
      'How do you handle competing priorities and tight deadlines?',
      'Give an example of when you went above and beyond in your role.'
    ]
  };

  const interviewTips = [
    {
      category: 'Before the Interview',
      tips: [
        'Research the company culture and recent news',
        'Practice your elevator pitch',
        'Prepare specific examples using the STAR method',
        'Test your technology setup for virtual interviews'
      ]
    },
    {
      category: 'During the Interview',
      tips: [
        'Listen carefully and ask clarifying questions',
        'Use specific examples from your experience',
        'Show enthusiasm and genuine interest',
        'Ask thoughtful questions about the role and team'
      ]
    },
    {
      category: 'After the Interview',
      tips: [
        'Send a personalized thank-you email within 24 hours',
        'Reflect on what went well and areas for improvement',
        'Follow up appropriately if you don\'t hear back',
        'Continue practicing for future opportunities'
      ]
    }
  ];

  const mockInterviewFeatures = [
    {
      icon: Video,
      title: 'Video Practice',
      description: 'Record yourself answering questions to improve your presentation and body language.'
    },
    {
      icon: Mic,
      title: 'Audio Analysis',
      description: 'Get feedback on your speaking pace, clarity, and use of filler words.'
    },
    {
      icon: Clock,
      title: 'Timed Sessions',
      description: 'Practice with realistic time constraints to build confidence and efficiency.'
    },
    {
      icon: CheckCircle,
      title: 'Instant Feedback',
      description: 'Receive immediate insights and suggestions for improvement after each session.'
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
                Master Your Interview
                <span className="text-primary"> Performance</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Practice with realistic mock interviews, get AI-powered feedback, and build the confidence 
                you need to land your dream job. Prepare for technical, behavioral, and case study interviews.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <Badge variant="secondary">Mock Interviews</Badge>
                <Badge variant="secondary">AI Feedback</Badge>
                <Badge variant="secondary">Video Recording</Badge>
                <Badge variant="secondary">Industry-Specific</Badge>
              </div>
              <Button size="lg" className="text-lg px-8 py-3">
                Start Mock Interview
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1559523182-a284c3fb7cff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb2IlMjBpbnRlcnZpZXclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU3NzY0NzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional job interview"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interview Types */}
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
              Choose Your Interview Type
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Practice with different interview formats tailored to your industry and role.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interviewTypes.map((type, index) => (
              <motion.div
                key={type.type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {type.type}
                      <Badge variant={type.difficulty === 'Expert' ? 'destructive' : type.difficulty === 'Advanced' ? 'default' : 'secondary'}>
                        {type.difficulty}
                      </Badge>
                    </CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{type.duration}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <MessageSquare className="h-4 w-4" />
                        <span>{type.questions} questions</span>
                      </span>
                    </div>
                    <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Start Practice
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mock Interview Interface */}
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
              Practice Mock Interview
            </h2>
            <p className="text-xl text-muted-foreground">
              Experience a realistic interview environment with our interactive platform.
            </p>
          </motion.div>

          <Tabs defaultValue="technical" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="technical">Technical Questions</TabsTrigger>
              <TabsTrigger value="behavioral">Behavioral Questions</TabsTrigger>
            </TabsList>

            <TabsContent value="technical" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Technical Interview Practice</span>
                    <Badge variant="outline">Question {currentQuestion + 1} of {sampleQuestions.technical.length}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-6 bg-muted/50 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Interview Question:</h3>
                    <p className="text-muted-foreground">
                      {sampleQuestions.technical[currentQuestion]}
                    </p>
                  </div>

                  <div className="flex items-center justify-center space-x-4">
                    <Button
                      variant={isRecording ? "destructive" : "default"}
                      size="lg"
                      onClick={() => setIsRecording(!isRecording)}
                      className="flex items-center space-x-2"
                    >
                      {isRecording ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                      <span>{isRecording ? 'Stop Recording' : 'Start Recording'}</span>
                    </Button>
                    <Button variant="outline" size="lg">
                      <RotateCcw className="h-5 w-5 mr-2" />
                      Reset
                    </Button>
                  </div>

                  <div className="flex justify-between">
                    <Button 
                      variant="outline" 
                      onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                      disabled={currentQuestion === 0}
                    >
                      Previous Question
                    </Button>
                    <Button 
                      onClick={() => setCurrentQuestion(Math.min(sampleQuestions.technical.length - 1, currentQuestion + 1))}
                      disabled={currentQuestion === sampleQuestions.technical.length - 1}
                    >
                      Next Question
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="behavioral" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Behavioral Interview Practice</span>
                    <Badge variant="outline">STAR Method Recommended</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-6 bg-muted/50 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Interview Question:</h3>
                    <p className="text-muted-foreground mb-4">
                      {sampleQuestions.behavioral[currentQuestion % sampleQuestions.behavioral.length]}
                    </p>
                    <div className="text-sm text-muted-foreground">
                      <strong>Tip:</strong> Use the STAR method (Situation, Task, Action, Result) to structure your response.
                    </div>
                  </div>

                  <div className="flex items-center justify-center space-x-4">
                    <Button
                      variant={isRecording ? "destructive" : "default"}
                      size="lg"
                      onClick={() => setIsRecording(!isRecording)}
                      className="flex items-center space-x-2"
                    >
                      {isRecording ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                      <span>{isRecording ? 'Stop Recording' : 'Start Recording'}</span>
                    </Button>
                    <Button variant="outline" size="lg">
                      <RotateCcw className="h-5 w-5 mr-2" />
                      Reset
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Features */}
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
              Advanced Practice Features
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive tools to help you excel in any interview situation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockInterviewFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interview Tips */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Expert Interview Tips
            </h2>
            <p className="text-xl text-muted-foreground">
              Learn from industry professionals and improve your interview performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {interviewTips.map((section, index) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Lightbulb className="h-5 w-5 text-primary" />
                      <span>{section.category}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{tip}</span>
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
    </div>
  );
}