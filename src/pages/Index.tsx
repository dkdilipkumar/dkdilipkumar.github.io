
import Header from "@/components/portfolio/Header";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Contact from "@/components/portfolio/Contact";
import SocialLinks from "@/components/portfolio/SocialLinks";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <Header />
      <main className="space-y-8">
        <About />
        <Skills />
        <Projects />
        <Contact />
        <SocialLinks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
