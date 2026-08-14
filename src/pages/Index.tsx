import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import WhyCoaching from "@/components/WhyCoaching";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Insights from "@/components/Insights";
import SiteFooter from "@/components/SiteFooter";

const Index = () => (
  <>
    <SiteHeader />
    <Hero />
    <WhyCoaching />
    <About />
    <div id="services">
      <Services />
    </div>
    <Testimonials />
    <Insights />
    <Contact />
    <SiteFooter />
  </>
);

export default Index;
