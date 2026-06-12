import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const servicesLinks = [
    { title: "AI Receptionist", href: "/services/ai-receptionist" },
    { title: "AI Sales Assistant", href: "/services/ai-sales-follow-up" },
    { title: "AI Social Media Manager", href: "/services/ai-social-media-manager" },
    { title: "Custom AI Employees", href: "/services/custom-ai-employees" },
    { title: "Local Visibility & Listings", href: "/services/local-visibility" },
    { title: "Reviews & Reputation", href: "/services/reviews-reputation" },
    { title: "Websites That Convert", href: "/services/websites" },
    { title: "Customer Campaigns", href: "/services/campaigns-retention" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          
          <Link to="/" className="relative z-10">
            <span className="font-serif text-2xl font-bold tracking-tight text-foreground">Strategy Charlie</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link 
              to="/what-makes-us-different" 
              className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === '/what-makes-us-different' ? 'text-primary' : 'text-foreground'}`}
            >
              What Makes Us Different
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors focus:outline-none">
                <span className={location.pathname.startsWith('/services') ? 'text-primary' : ''}>Services</span>
                <ChevronDown className="h-4 w-4 opacity-50" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64 bg-background border-border shadow-xl p-2 rounded-none">
                <div className="px-2 py-2 mb-2 border-b border-border">
                  <Link to="/services" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                    Services Hub
                  </Link>
                </div>
                {servicesLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild className="cursor-pointer focus:bg-accent focus:text-accent-foreground rounded-none">
                    <Link to={link.href} className="w-full text-sm py-2">
                      {link.title}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === '/about' ? 'text-primary' : 'text-foreground'}`}
            >
              About
            </Link>

            <div className="flex items-center gap-4 pl-4 border-l border-border">
              <Button asChild variant="outline" className="hidden xl:inline-flex rounded-none border-border hover:bg-accent hover:text-accent-foreground">
                <Link to="/snapshot">Free Growth Snapshot</Link>
              </Button>
              <Button asChild className="btn-primary">
                <Link to="/contact">Book a 15-Minute Fit Call</Link>
              </Button>
            </div>
          </nav>

          <div className="lg:hidden flex items-center gap-4">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10 text-foreground hover:bg-accent focus:ring-0">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-sm bg-background border-l-border p-6 rounded-none">
                <SheetHeader className="mb-8 text-left">
                  <SheetTitle className="font-serif text-2xl font-bold tracking-tight text-foreground">Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6">
                  <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-foreground hover:text-primary transition-colors">Home</Link>
                  <Link to="/what-makes-us-different" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-foreground hover:text-primary transition-colors">What Makes Us Different</Link>
                  
                  <div className="space-y-3">
                    <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-foreground hover:text-primary transition-colors flex items-center gap-2">
                      Services
                    </Link>
                    <div className="pl-4 flex flex-col gap-3 border-l-2 border-border ml-2">
                      {servicesLinks.map((link) => (
                        <Link key={link.href} to={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-foreground hover:text-primary transition-colors">
                          {link.title}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-foreground hover:text-primary transition-colors">About</Link>
                  
                  <div className="pt-6 mt-2 border-t border-border flex flex-col gap-4">
                    <Button asChild className="btn-primary w-full justify-center" onClick={() => setIsMobileMenuOpen(false)}>
                      <Link to="/contact">Book a 15-Minute Fit Call</Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full justify-center rounded-none border-border" onClick={() => setIsMobileMenuOpen(false)}>
                      <Link to="/snapshot">Free Growth Snapshot</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </header>
  );
}
