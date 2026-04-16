import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import WhyCoaching from "@/components/WhyCoaching";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import SiteFooter from "@/components/SiteFooter";

const Index = () => (
  <>
    <SiteHeader />
    <Hero />
    <WhyCoaching />
    <div id="services">
      <Services />
    </div>
    <About />
    <Testimonials />
    <Contact />
    <SiteFooter />
  </>
);

export default Index;
