import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-illustration.png';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-accent/20 rounded-full hero-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-secondary/15 rounded-full hero-float" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-4 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="hero-fade-in text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Empowering Students with{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Modern Learning
              </span>
            </h1>
            
            <p className="hero-fade-in-delay-1 text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              Explore coding tutorials, AI roadmaps, interactive practice labs, and more. 
              Join thousands of students who are already learning with EduTech.
            </p>

            <div className="hero-fade-in-delay-2 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="btn-primary group">
                Explore Courses
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="hero-fade-in-delay-2 mt-12 text-center lg:text-left">
              <p className="text-sm text-muted-foreground mb-4">Learn. Practice. Grow.</p>
              <div className="flex items-center justify-center lg:justify-start space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10K+</div>
                  <div className="text-sm text-muted-foreground">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="hero-fade-in-delay-1 relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="EduTech Learning Platform - Students learning with modern technology"
                className="w-full h-auto rounded-2xl shadow-elegant"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-primary rounded-2xl hero-float opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-accent rounded-2xl hero-float opacity-15" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;