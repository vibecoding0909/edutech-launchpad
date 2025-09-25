import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { 
  Code, 
  Brain, 
  Smartphone, 
  Database, 
  Globe, 
  Cpu,
  Search,
  Filter,
  Star,
  Users,
  Clock
} from 'lucide-react';

const courses = [
  {
    id: 1,
    icon: Code,
    title: "Web Development Bootcamp",
    description: "Complete guide to HTML, CSS, JavaScript, and React",
    duration: "12 weeks",
    level: "Beginner",
    students: "2,340",
    rating: 4.8,
    color: "text-blue-500",
    category: "web",
    price: "$299"
  },
  {
    id: 2,
    icon: Brain,
    title: "Machine Learning Fundamentals",
    description: "Introduction to AI and ML concepts with Python",
    duration: "8 weeks",
    level: "Intermediate",
    students: "1,890",
    rating: 4.9,
    color: "text-purple-500",
    category: "ai",
    price: "$399"
  },
  {
    id: 3,
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Build iOS and Android apps with React Native",
    duration: "10 weeks",
    level: "Intermediate",
    students: "1,567",
    rating: 4.7,
    color: "text-green-500",
    category: "mobile",
    price: "$349"
  },
  {
    id: 4,
    icon: Database,
    title: "Database Design & SQL",
    description: "Master database concepts and SQL queries",
    duration: "6 weeks",
    level: "Beginner",
    students: "2,123",
    rating: 4.6,
    color: "text-orange-500",
    category: "database",
    price: "$199"
  },
  {
    id: 5,
    icon: Globe,
    title: "Full Stack Development",
    description: "Complete web application development with MERN stack",
    duration: "16 weeks",
    level: "Advanced",
    students: "987",
    rating: 4.9,
    color: "text-red-500",
    category: "web",
    price: "$599"
  },
  {
    id: 6,
    icon: Cpu,
    title: "Data Structures & Algorithms",
    description: "Essential computer science concepts for interviews",
    duration: "8 weeks",
    level: "Intermediate",
    students: "3,456",
    rating: 4.8,
    color: "text-indigo-500",
    category: "cs",
    price: "$279"
  }
];

const categories = [
  { id: 'all', label: 'All Courses', count: courses.length },
  { id: 'web', label: 'Web Development', count: courses.filter(c => c.category === 'web').length },
  { id: 'ai', label: 'AI & ML', count: courses.filter(c => c.category === 'ai').length },
  { id: 'mobile', label: 'Mobile', count: courses.filter(c => c.category === 'mobile').length },
  { id: 'database', label: 'Database', count: courses.filter(c => c.category === 'database').length },
  { id: 'cs', label: 'Computer Science', count: courses.filter(c => c.category === 'cs').length }
];

const InteractiveCourses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null);
  const { ref, inView } = useInView({ threshold: 0.2 });

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });


  return (
    <section id="courses" className="py-20 bg-background/50" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Popular <span className="bg-gradient-primary bg-clip-text text-transparent">Courses</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular courses designed to help you master new skills and advance your career.
          </p>
        </motion.div>

        {/* Search and Filter Controls */}
        <motion.div 
          className="mb-12 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <motion.div
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="gap-2"
                >
                  <Filter className="h-3 w-3" />
                  {category.label}
                  <Badge variant="secondary" className="text-xs">
                    {category.count}
                  </Badge>
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Courses Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
        >
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => {
              const IconComponent = course.icon;
              return (
                <motion.div
                  key={course.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6 }}
                  onHoverStart={() => setHoveredCourse(course.id)}
                  onHoverEnd={() => setHoveredCourse(null)}
                >
                  <Card className="h-full hover-card-lift transition-all duration-300 group cursor-pointer relative overflow-hidden">
                    <motion.div 
                      className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                      animate={hoveredCourse === course.id ? { opacity: 0.05 } : { opacity: 0 }}
                    />
                    
                    <CardHeader className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <motion.div 
                          className={`p-3 rounded-lg bg-background/50 ${course.color}`}
                          animate={hoveredCourse === course.id ? { rotate: 360 } : { rotate: 0 }}
                          transition={{ duration: 0.6 }}
                        >
                          <IconComponent className="h-6 w-6" />
                        </motion.div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{course.rating}</span>
                        </div>
                      </div>
                      
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {course.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {course.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="relative z-10">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            <span>{course.students}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs">
                            {course.level}
                          </Badge>
                          <span className="font-bold text-primary text-lg">{course.price}</span>
                        </div>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={hoveredCourse === course.id ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Button className="w-full btn-primary group/btn">
                            Start Learning
                            <motion.div
                              animate={hoveredCourse === course.id ? { x: 5 } : { x: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              →
                            </motion.div>
                          </Button>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredCourses.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-muted-foreground text-lg">No courses found matching your criteria.</p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </motion.div>
        )}

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button size="lg" variant="outline" className="btn-secondary">
            View All Courses
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveCourses;