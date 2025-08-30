import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, Target, TrendingUp, Award, BarChart3, Zap, CheckCircle2, Clock } from 'lucide-react';

const SkillLens = () => {
  const features = [
    {
      icon: Eye,
      title: 'Skill Assessment',
      description: 'AI-powered evaluation of your current programming abilities across multiple languages and frameworks.',
      metrics: '15+ Technologies'
    },
    {
      icon: TrendingUp,
      title: 'Progress Tracking',
      description: 'Real-time monitoring of your learning journey with detailed analytics and milestone tracking.',
      metrics: 'Live Analytics'
    },
    {
      icon: Target,
      title: 'Gap Analysis',
      description: 'Identify skill gaps and get personalized recommendations to reach your career goals faster.',
      metrics: 'Smart Insights'
    },
    {
      icon: Award,
      title: 'Skill Certification',
      description: 'Earn verified badges and certificates that showcase your expertise to employers and peers.',
      metrics: 'Industry Recognized'
    }
  ];

  const skillCategories = [
    {
      category: 'Frontend Development',
      skills: ['React', 'Vue.js', 'Angular', 'TypeScript'],
      level: 85,
      color: 'bg-blue-500'
    },
    {
      category: 'Backend Development',
      skills: ['Node.js', 'Python', 'Java', 'Database'],
      level: 72,
      color: 'bg-green-500'
    },
    {
      category: 'DevOps & Cloud',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
      level: 58,
      color: 'bg-purple-500'
    },
    {
      category: 'Mobile Development',
      skills: ['React Native', 'Flutter', 'iOS', 'Android'],
      level: 43,
      color: 'bg-orange-500'
    }
  ];

  const assessmentSteps = [
    {
      step: '1',
      title: 'Take Assessment',
      description: 'Complete our comprehensive skill evaluation in 20 minutes.',
      icon: Clock,
      status: 'current'
    },
    {
      step: '2', 
      title: 'Get Analysis',
      description: 'Receive detailed breakdown of your strengths and areas for improvement.',
      icon: BarChart3,
      status: 'upcoming'
    },
    {
      step: '3',
      title: 'Track Progress',
      description: 'Monitor your skill development with real-time analytics and insights.',
      icon: TrendingUp,
      status: 'upcoming'
    }
  ];

  return (
    <section id="skilllens" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            SKILL LENS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            See Your Skills{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Crystal Clear
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Advanced skill assessment and tracking platform that gives you deep insights into your 
            programming abilities and helps you grow systematically.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="card-hover bg-card border-border shadow-card text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="p-4 rounded-xl bg-primary/10 text-primary w-fit mx-auto mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg font-bold text-card-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                  {feature.description}
                </p>
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                  {feature.metrics}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Assessment Steps */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">How SkillLens Works</h3>
            
            <div className="space-y-6">
              {assessmentSteps.map((step, index) => (
                <div key={step.step} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white ${
                      step.status === 'current' ? 'bg-primary' : 'bg-muted-foreground'
                    }`}>
                      {step.step}
                    </div>
                    {index < assessmentSteps.length - 1 && (
                      <div className="w-px h-12 bg-border ml-6 mt-2"></div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <step.icon className="h-5 w-5 text-primary" />
                      <h4 className="text-lg font-semibold text-foreground">{step.title}</h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-primary rounded-xl text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Zap className="h-6 w-6" />
                <h4 className="text-xl font-bold">Start Your Assessment</h4>
              </div>
              <p className="mb-4 opacity-90">
                Get a comprehensive view of your programming skills in just 20 minutes.
              </p>
              <Button className="bg-white text-primary hover:bg-gray-100">
                <Eye className="mr-2 h-4 w-4" />
                Take Skill Assessment
              </Button>
            </div>
          </div>

          {/* Right: Skill Categories Dashboard */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Your Skill Overview</h3>
            
            <Card className="bg-card border-border shadow-elegant mb-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <span>Skill Progress Dashboard</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {skillCategories.map((category, index) => (
                  <div key={category.category} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-card-foreground">{category.category}</h4>
                      <span className="text-sm font-bold text-primary">{category.level}%</span>
                    </div>
                    
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`${category.color} h-2 rounded-full transition-all duration-1000`}
                        style={{ width: `${category.level}%` }}
                      ></div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-card border-border shadow-card text-center">
                <CardContent className="p-6">
                  <Award className="h-8 w-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-card-foreground">12</div>
                  <div className="text-sm text-muted-foreground">Badges Earned</div>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border shadow-card text-center">
                <CardContent className="p-6">
                  <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-card-foreground">85%</div>
                  <div className="text-sm text-muted-foreground">Overall Progress</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillLens;