import Header from '@/components/Header';
import InteractiveHero from '@/components/InteractiveHero';
import InteractiveCourses from '@/components/InteractiveCourses';
import AIRoadmap from '@/components/AIRoadmap';
import SkillLens from '@/components/SkillLens';
import InteractiveCodeLab from '@/components/InteractiveCodeLab';
import DoubtSolver from '@/components/DoubtSolver';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <InteractiveHero />
        <InteractiveCourses />
        <AIRoadmap />
        <SkillLens />
        <InteractiveCodeLab />
        <DoubtSolver />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
