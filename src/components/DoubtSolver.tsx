import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Bot, Users, Clock, Star, Zap } from 'lucide-react';

const DoubtSolver = () => {
  const features = [
    {
      icon: Bot,
      title: 'AI-Powered Assistant',
      description: 'Get instant answers to your coding questions with our intelligent AI chatbot.',
      time: 'Instant',
      availability: '24/7'
    },
    {
      icon: Users,
      title: 'Expert Mentors',
      description: 'Connect with experienced developers and instructors for personalized guidance.',
      time: '< 30 mins',
      availability: 'Daily 9AM-11PM'
    },
    {
      icon: MessageCircle,
      title: 'Peer Community',
      description: 'Learn from fellow students and share knowledge in our supportive community.',
      time: '< 5 mins',
      availability: '24/7'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CS Student',
      avatar: '👩‍💻',
      rating: 5,
      text: 'The AI chatbot helped me debug my Python code in seconds. Amazing!'
    },
    {
      name: 'Mike Johnson',
      role: 'Web Developer',
      avatar: '👨‍💼',
      rating: 5,
      text: 'Mentors are incredibly knowledgeable and patient. Best learning experience!'
    },
    {
      name: 'Priya Patel',
      role: 'Beginner',
      avatar: '👩‍🎓',
      rating: 5,
      text: 'The community is so supportive. I never feel stuck anymore.'
    }
  ];

  return (
    <section id="doubt-solver" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            DOUBT SOLVER
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Never Get Stuck{' '}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              While Learning
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get help when you need it most. Our multi-layered support system ensures 
            you always have someone to turn to for guidance and answers.
          </p>
        </div>

        {/* Support Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="card-hover bg-card border-border shadow-card text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="p-4 rounded-xl bg-primary/10 text-primary w-fit mx-auto mb-4">
                  <feature.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {feature.description}
                </p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Response Time:</span>
                    <span className="font-medium text-green-600">{feature.time}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Availability:</span>
                    <span className="font-medium text-primary">{feature.availability}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Chat Interface Mockup */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-card border-border shadow-elegant">
            <CardHeader className="border-b border-border">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-primary text-primary-foreground">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground">EduTech AI Assistant</h3>
                  <p className="text-sm text-muted-foreground">Online • Typically replies instantly</p>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-6">
              <div className="space-y-4">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-primary text-primary-foreground p-3 rounded-lg max-w-xs">
                    <p className="text-sm">I'm getting a syntax error in my Python function. Can you help?</p>
                  </div>
                </div>
                
                {/* AI Response */}
                <div className="flex space-x-3">
                  <div className="p-2 rounded-full bg-primary/10 text-primary h-fit">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="bg-muted p-3 rounded-lg max-w-md">
                    <p className="text-sm text-card-foreground mb-2">
                      I'd be happy to help! Please share your code and I'll identify the syntax error for you.
                    </p>
                    <p className="text-xs text-muted-foreground">
                      💡 <strong>Pro tip:</strong> Make sure to check your indentation and colons after function definitions!
                    </p>
                  </div>
                </div>
                
                {/* Typing indicator */}
                <div className="flex space-x-3">
                  <div className="p-2 rounded-full bg-primary/10 text-primary h-fit">
                    <Users className="h-4 w-4" />
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-8">What Students Say</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name} 
                className="card-hover bg-card border-border shadow-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{testimonial.avatar}</div>
                  <div className="flex justify-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-accent p-8 rounded-2xl text-accent-foreground max-w-2xl mx-auto">
            <Zap className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Get Help Instantly</h3>
            <p className="mb-6 opacity-90">
              Join thousands of students who never get stuck thanks to our comprehensive support system.
            </p>
            <Button className="bg-white text-accent hover:bg-gray-100">
              <MessageCircle className="mr-2 h-4 w-4" />
              Start Getting Help
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoubtSolver;