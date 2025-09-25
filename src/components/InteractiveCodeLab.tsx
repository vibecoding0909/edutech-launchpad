import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { 
  Play, 
  Code, 
  Terminal, 
  Users, 
  Zap,
  CheckCircle,
  Monitor
} from 'lucide-react';

const features = [
  {
    icon: Monitor,
    title: "Interactive IDE",
    description: "Full-featured code editor with syntax highlighting and autocomplete"
  },
  {
    icon: Zap,
    title: "Instant Execution",
    description: "Run your code instantly and see results in real-time"
  },
  {
    icon: CheckCircle,
    title: "Auto Testing",
    description: "Automated testing to validate your solutions"
  },
  {
    icon: Users,
    title: "Collaborative Coding",
    description: "Code together with peers in real-time"
  }
];

const codeExamples = {
  python: `# Python - Data Analysis
import pandas as pd
import matplotlib.pyplot as plt

def analyze_sales_data(data):
    """Analyze sales performance"""
    # Group by category and sum sales
    category_sales = data.groupby('category')['sales'].sum()
    
    # Create visualization
    plt.figure(figsize=(10, 6))
    category_sales.plot(kind='bar')
    plt.title('Sales by Category')
    plt.ylabel('Total Sales ($)')
    
    return category_sales

# Load sample data
sales_data = pd.read_csv('sales.csv')
results = analyze_sales_data(sales_data)
print("Analysis complete!")`,
  
  javascript: `// JavaScript - Interactive Web App
class TaskManager {
  constructor() {
    this.tasks = [];
    this.nextId = 1;
  }

  addTask(title, priority = 'medium') {
    const task = {
      id: this.nextId++,
      title,
      priority,
      completed: false,
      createdAt: new Date()
    };
    this.tasks.push(task);
    this.render();
    return task;
  }

  toggleTask(id) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
      this.render();
    }
  }

  render() {
    const container = document.getElementById('tasks');
    container.innerHTML = this.tasks
      .map(task => \`
        <div class="task \${task.completed ? 'completed' : ''}">
          <h3>\${task.title}</h3>
          <span class="priority \${task.priority}">\${task.priority}</span>
        </div>
      \`).join('');
  }
}

const manager = new TaskManager();
manager.addTask('Build CodeLab Feature', 'high');`,

  react: `// React - Modern Component
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveCounter = () => {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleIncrement = () => {
    setIsAnimating(true);
    setCount(prev => prev + 1);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleDecrement = () => {
    setIsAnimating(true);
    setCount(prev => Math.max(0, prev - 1));
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div className="counter-container">
      <motion.div 
        className="counter-display"
        animate={{ 
          scale: isAnimating ? 1.2 : 1,
          color: count > 10 ? '#10b981' : '#3b82f6'
        }}
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={count}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {count}
          </motion.span>
        </AnimatePresence>
      </motion.div>
      
      <div className="counter-controls">
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

export default InteractiveCounter;`
};

const languages = [
  { name: "Python", emoji: "🐍", projects: 45, color: "bg-yellow-500" },
  { name: "JavaScript", emoji: "⚡", projects: 67, color: "bg-yellow-400" },
  { name: "React", emoji: "⚛️", projects: 34, color: "bg-blue-500" },
  { name: "Java", emoji: "☕", projects: 23, color: "bg-orange-500" },
  { name: "C++", emoji: "⚙️", projects: 19, color: "bg-blue-600" },
  { name: "Go", emoji: "🔷", projects: 12, color: "bg-cyan-500" }
];

const InteractiveCodeLab = () => {
  const [activeTab, setActiveTab] = useState('python');
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState('');
  const { ref, inView } = useInView({ threshold: 0.2 });

  const handleRunCode = () => {
    setIsRunning(true);
    setOutput('Running code...');
    
    setTimeout(() => {
      const outputs = {
        python: "Analysis complete!\nSales by Category:\nElectronics: $125,430\nClothing: $89,234\nBooks: $43,567",
        javascript: "Task Manager initialized successfully!\n✅ Task added: 'Build CodeLab Feature'\n🎯 Priority: high\n📅 Created: " + new Date().toLocaleString(),
        react: "Component rendered successfully!\n🎨 Counter component is interactive\n✨ Animations enabled\n🔄 State management active"
      };
      setOutput(outputs[activeTab as keyof typeof outputs]);
      setIsRunning(false);
    }, 2000);
  };


  return (
    <section id="codelab" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Interactive <span className="bg-gradient-primary bg-clip-text text-transparent">CodeLab</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Practice coding in a real development environment with instant feedback and collaborative features.
          </p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          {/* Features */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Why Choose CodeLab?</h3>
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div 
                  key={feature.title}
                  className="flex items-start gap-4 p-4 rounded-lg bg-card/50 hover:bg-card transition-colors"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Interactive Code Editor */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Live Code Editor
                </CardTitle>
                <CardDescription>
                  Try coding in different languages with instant execution
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="python">Python</TabsTrigger>
                    <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                    <TabsTrigger value="react">React</TabsTrigger>
                  </TabsList>
                  
                  <div className="relative">
                    <TabsContent value={activeTab} className="mt-4">
                      <div className="rounded-lg overflow-hidden border">
                        <SyntaxHighlighter
                          language={activeTab === 'react' ? 'jsx' : activeTab}
                          style={vscDarkPlus}
                          customStyle={{
                            margin: 0,
                            fontSize: '12px',
                            maxHeight: '300px',
                            overflow: 'auto'
                          }}
                        >
                          {codeExamples[activeTab as keyof typeof codeExamples]}
                        </SyntaxHighlighter>
                      </div>
                    </TabsContent>
                  </div>
                </Tabs>

                <div className="flex gap-2">
                  <Button 
                    onClick={handleRunCode}
                    disabled={isRunning}
                    className="btn-primary flex-1"
                  >
                    {isRunning ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Terminal className="h-4 w-4 mr-2" />
                      </motion.div>
                    ) : (
                      <Play className="h-4 w-4 mr-2" />
                    )}
                    {isRunning ? 'Running...' : 'Run Code'}
                  </Button>
                </div>

                {output && (
                  <motion.div 
                    className="p-3 bg-background rounded-lg border border-border font-mono text-sm"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-green-400 mb-1">Output:</div>
                    <pre className="text-muted-foreground whitespace-pre-wrap">{output}</pre>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Supported Languages */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-8">Supported Languages & Frameworks</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {languages.map((lang, index) => (
              <motion.div
                key={lang.name}
                className="p-4 rounded-lg bg-card hover:bg-card/80 transition-colors cursor-pointer group"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {lang.emoji}
                </div>
                <h4 className="font-semibold text-foreground mb-1">{lang.name}</h4>
                <Badge variant="secondary" className="text-xs">
                  {lang.projects} projects
                </Badge>
              </motion.div>
            ))}
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" className="btn-primary">
              Start Coding Now
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveCodeLab;