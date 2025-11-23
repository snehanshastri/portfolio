const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border/40">
      <div className="container mx-auto max-w-6xl text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Sneha N Shastri. Crafted with passion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
