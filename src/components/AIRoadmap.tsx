import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, Target, Trophy, Rocket, CheckCircle } from 'lucide-react';

const AIRoadmap = () => {
  const roadmapSteps = [
    {
      icon: Target,
      title: 'Skill Assessment',
      description: 'Our AI analyzes your current skills and learning goals to create a personalized path.',
      duration: 'Day 1',
      status: 'completed'
    },
    {
      icon: Brain,
      title: 'AI-Powered Learning Path',
      description: 'Get a customized curriculum based on industry demands and your career aspirations.',
      duration: 'Week 1-2',
      status: 'current'
    },
    {
      icon: Rocket,
      title: 'Interactive Practice',
      description: 'Hands-on coding exercises and projects with real-time AI feedback and guidance.',
      duration: 'Week 3-12',
      status: 'upcoming'
    },
    {
      icon: Trophy,
      title: 'Career Preparation',
      description: 'Interview prep, portfolio building, and job placement assistance with AI insights.',
      duration: 'Week 13+',
      status: 'upcoming'
    }
  ];

  const careerPaths = [
    { name: 'Frontend Developer', demand: '95%', jobs: '15K+' },
    { name: 'Backend Developer', demand: '92%', jobs: '12K+' },
    { name: 'Full Stack Developer', demand: '98%', jobs: '18K+' },
    { name: 'Data Scientist', demand: '89%', jobs: '8K+' },
    { name: 'DevOps Engineer', demand: '87%', jobs: '6K+' },
    { name: 'Mobile Developer', demand: '85%', jobs: '10K+' }
  ];

  return (
    <section id="roadmap" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            AI-POWERED ROADMAP
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Your Personalized{' '}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Learning Journey
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our AI creates a customized learning path based on your goals, current skills, 
            and industry demands. Track your progress and adapt as you grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Roadmap Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground mb-8">Your Learning Timeline</h3>
            
            {roadmapSteps.map((step, index) => (
              <div key={step.title} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className={`p-3 rounded-full ${
                    step.status === 'completed' ? 'bg-green-100 text-green-600' :
                    step.status === 'current' ? 'bg-primary/10 text-primary' :
                    'bg-muted text-muted-foreground'
                  }`}>
                    {step.status === 'completed' ? (
                      <CheckCircle className="h-6 w-6" />
                    ) : (
                      <step.icon className="h-6 w-6" />
                    )}
                  </div>
                  {index < roadmapSteps.length - 1 && (
                    <div className="w-px h-16 bg-border ml-6 mt-2"></div>
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold text-foreground">{step.title}</h4>
                    <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Career Paths */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Popular Career Paths</h3>
            
            <div className="grid gap-4">
              {careerPaths.map((path, index) => (
                <Card 
                  key={path.name} 
                  className="card-hover bg-card border-border shadow-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-card-foreground mb-2">{path.name}</h4>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>🔥 {path.demand} in demand</span>
                          <span>💼 {path.jobs} jobs available</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold`}>
                          {path.demand}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-primary rounded-xl text-white">
              <h4 className="text-xl font-bold mb-4">Ready to Start Your Journey?</h4>
              <p className="mb-6 opacity-90">
                Take our 5-minute assessment and get your personalized AI roadmap instantly.
              </p>
              <Button className="bg-white text-primary hover:bg-gray-100">
                <Brain className="mr-2 h-4 w-4" />
                Get My AI Roadmap
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIRoadmap;