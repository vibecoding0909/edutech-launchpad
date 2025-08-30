import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code2, Play, Terminal, FileCode, CheckCircle, Users } from 'lucide-react';

const CodeLab = () => {
  const features = [
    {
      icon: Terminal,
      title: 'Interactive IDE',
      description: 'Code directly in your browser with our full-featured development environment.'
    },
    {
      icon: Play,
      title: 'Instant Execution',
      description: 'Run your code immediately and see results in real-time with no setup required.'
    },
    {
      icon: CheckCircle,
      title: 'Auto Testing',
      description: 'Automated test cases validate your solutions and provide instant feedback.'
    },
    {
      icon: Users,
      title: 'Collaborative Coding',
      description: 'Work together with peers on projects and share your solutions.'
    }
  ];

  const languages = [
    { name: 'Python', icon: '🐍', projects: '150+' },
    { name: 'JavaScript', icon: '🟨', projects: '120+' },
    { name: 'Java', icon: '☕', projects: '90+' },
    { name: 'C++', icon: '⚡', projects: '75+' },
    { name: 'HTML/CSS', icon: '🌐', projects: '100+' },
    { name: 'React', icon: '⚛️', projects: '80+' }
  ];

  return (
    <section id="codelab" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
            HANDS-ON PRACTICE
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Practice Coding with{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              CodeLab
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Master programming through hands-on practice. Our interactive coding environment 
            lets you write, test, and debug code right in your browser.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left: Features */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground mb-8">Why Choose CodeLab?</h3>
            
            {features.map((feature, index) => (
              <div 
                key={feature.title} 
                className="flex items-start space-x-4"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Code Editor Mockup */}
          <div className="relative">
            <Card className="bg-gray-900 border-gray-700 shadow-elegant">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-4 text-gray-400 text-sm">main.py</span>
                </div>
              </CardHeader>
              <CardContent className="text-green-400 font-mono text-sm leading-relaxed">
                <div className="space-y-2">
                  <div><span className="text-blue-400">def</span> <span className="text-yellow-400">fibonacci</span>(n):</div>
                  <div className="ml-4"><span className="text-purple-400">if</span> n &lt;= 1:</div>
                  <div className="ml-8"><span className="text-purple-400">return</span> n</div>
                  <div className="ml-4"><span className="text-purple-400">return</span> fibonacci(n-1) + fibonacci(n-2)</div>
                  <div className="mt-4"># Test your solution</div>
                  <div><span className="text-yellow-400">print</span>(fibonacci(10))</div>
                  <div className="mt-4 text-green-300">✓ Output: 55</div>
                  <div className="text-green-300">✓ All test cases passed!</div>
                </div>
              </CardContent>
            </Card>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-accent rounded-xl hero-float opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-primary rounded-xl hero-float opacity-25" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>

        {/* Supported Languages */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-8">Supported Languages & Frameworks</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {languages.map((lang, index) => (
              <Card 
                key={lang.name} 
                className="card-hover bg-card border-border shadow-card text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">{lang.icon}</div>
                  <h4 className="font-semibold text-card-foreground mb-2">{lang.name}</h4>
                  <p className="text-sm text-muted-foreground">{lang.projects} projects</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-primary p-8 rounded-2xl text-white max-w-2xl mx-auto">
            <Code2 className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Start Coding Today</h3>
            <p className="mb-6 opacity-90">
              Join over 50,000 students who are mastering programming with our interactive CodeLab.
            </p>
            <Button className="bg-white text-primary hover:bg-gray-100">
              <FileCode className="mr-2 h-4 w-4" />
              Try CodeLab Free
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeLab;