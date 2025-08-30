import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Database, Globe, Cpu, Terminal, Smartphone } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      icon: Globe,
      title: 'HTML & CSS',
      description: 'Master the fundamentals of web development with HTML5 and CSS3.',
      duration: '4 weeks',
      level: 'Beginner',
      students: '2.5K',
      color: 'text-orange-500'
    },
    {
      icon: Code,
      title: 'Python Programming',
      description: 'Learn Python from basics to advanced concepts with real projects.',
      duration: '8 weeks',
      level: 'Beginner',
      students: '3.2K',
      color: 'text-blue-500'
    },
    {
      icon: Terminal,
      title: 'Java Development',
      description: 'Build robust applications with Java and object-oriented programming.',
      duration: '10 weeks',
      level: 'Intermediate',
      students: '1.8K',
      color: 'text-red-500'
    },
    {
      icon: Cpu,
      title: 'C Programming',
      description: 'Understand system programming and memory management with C.',
      duration: '6 weeks',
      level: 'Beginner',
      students: '1.5K',
      color: 'text-gray-600'
    },
    {
      icon: Database,
      title: 'Operating Systems',
      description: 'Deep dive into OS concepts, processes, and system architecture.',
      duration: '12 weeks',
      level: 'Advanced',
      students: '980',
      color: 'text-purple-500'
    },
    {
      icon: Smartphone,
      title: 'JavaScript',
      description: 'Create interactive web applications with modern JavaScript.',
      duration: '6 weeks',
      level: 'Intermediate',
      students: '2.8K',
      color: 'text-yellow-500'
    }
  ];

  return (
    <section id="courses" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            POPULAR COURSES
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Master In-Demand{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose from our comprehensive curriculum designed by industry experts. 
            Start your journey in programming, web development, and computer science.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card 
              key={course.title} 
              className="card-hover bg-card border-border shadow-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-muted ${course.color}`}>
                    <course.icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
                    {course.level}
                  </span>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">
                  {course.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {course.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                  <span>📅 {course.duration}</span>
                  <span>👥 {course.students} students</span>
                </div>
                
                <Button className="w-full btn-primary">
                  Start Learning
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground transition-colors">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;