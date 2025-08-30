import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Courses from '@/components/Courses';
import AIRoadmap from '@/components/AIRoadmap';
import CodeLab from '@/components/CodeLab';
import DoubtSolver from '@/components/DoubtSolver';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Courses />
        <AIRoadmap />
        <CodeLab />
        <DoubtSolver />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
