const SiteFooter = () => (
  <footer className="py-12 bg-primary text-primary-foreground">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-heading text-lg">Connecting Dots</p>
      <p className="font-body text-sm text-primary-foreground/60">
        © {new Date().getFullYear()} Ioana Ognibeni. All rights reserved.
      </p>
    </div>
  </footer>
);

export default SiteFooter;
