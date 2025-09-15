import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { 
  Search, 
  Calendar, 
  User, 
  Clock, 
  ArrowRight, 
  TrendingUp,
  BookOpen,
  Star,
  Filter,
  Tag
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function InsightsPage({loadedPosts}) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { value: 'all', label: 'All Posts' },
    { value: 'career-tips', label: 'Career Tips' },
    { value: 'industry-trends', label: 'Industry Trends' },
    { value: 'skill-development', label: 'Skill Development' },
    { value: 'interview-prep', label: 'Interview Prep' },
    { value: 'leadership', label: 'Leadership' },
    { value: 'remote-work', label: 'Remote Work' }
  ];

  const featuredPost = loadedPosts.length > 0 ? loadedPosts[0] : {
    id: 0,
    title: 'No Featured Post',
    body: '',
    author: '',
    authorRole: '',
    publishDate: '',
    readTime: '',
    category: '',
    tags: [],
    image: 'https://cdn.pixabay.com/photo/2025/05/23/23/08/mountains-9618595_1280.jpg',
    featured: false
  };
  
  let blogPosts = loadedPosts;

  const trendingTags = [
    'Career Growth', 'Remote Work', 'Leadership', 'AI & Technology', 'Interview Tips',
    'Skill Development', 'Work-Life Balance', 'Industry Trends'
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.body.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Career Insights &
              <span className="text-primary"> Expert Advice</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Stay ahead of the curve with our comprehensive collection of career advice, 
              industry trends, and professional development insights from leading experts.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  placeholder="Search articles, tips, and insights..."
                  className="pl-10 py-3 text-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {trendingTags.map((tag) => (
                  <Badge 
                    key={tag} 
                    variant="secondary" 
                    className="cursor-pointer hover:bg-secondary/80"
                    onClick={() => setSearchQuery(tag)}
                  >
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <ImageWithFallback
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-2 mb-3">
                    <Badge variant="outline">
                      {categories.find(cat => cat.value === featuredPost.category)?.label}
                    </Badge>
                    <span className="text-muted-foreground">•</span>
                    <div className="flex items-center space-x-1 text-muted-foreground text-sm">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-3 leading-tight">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {featuredPost.body}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <User className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{featuredPost.createdBy}</p>
                        <p className="text-muted-foreground text-xs">{featuredPost.authorRole}</p>
                      </div>
                    </div>
                    
                    <Button>
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <h2 className="text-2xl font-bold">Latest Articles</h2>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Filter by:</span>
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">
                        {categories.find(cat => cat.value === post.category)?.label}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                      <span>•</span>
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                    
                    <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    
                    <CardDescription className="line-clamp-3">
                      {post.body}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="bg-primary/10 p-1.5 rounded-full">
                          <User className="h-3 w-3 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{post.createdBy}</p>
                          <p className="text-muted-foreground text-xs">{post.authorRole}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated with Weekly Insights
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get the latest career advice, industry trends, and professional development tips 
              delivered to your inbox every week.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="bg-primary-foreground text-primary border-primary-foreground"
              />
              <Button variant="secondary" className="whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
            
            <p className="text-sm opacity-75 mt-4">
              Join 50,000+ professionals who trust our insights. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}