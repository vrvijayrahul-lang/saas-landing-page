import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Twitter = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
);

const Github = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
);

const Linkedin = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
);
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-white border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-foreground">SaaSify</span>
            </Link>
            <p className="text-muted mb-8 max-w-xs leading-relaxed">
              Empowering modern teams to build, scale, and automate their businesses faster with AI.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-light-background flex items-center justify-center text-muted hover:text-primary hover:bg-primary/10 transition-colors">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-light-background flex items-center justify-center text-muted hover:text-primary hover:bg-primary/10 transition-colors">
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-light-background flex items-center justify-center text-muted hover:text-primary hover:bg-primary/10 transition-colors">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-6">Product</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-muted hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="#" className="text-muted hover:text-primary transition-colors">Integrations</Link></li>
              <li><Link href="#" className="text-muted hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link href="#" className="text-muted hover:text-primary transition-colors">Changelog</Link></li>
              <li><Link href="#" className="text-muted hover:text-primary transition-colors">Docs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-muted hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-muted hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-muted hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-muted hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="#" className="text-muted hover:text-primary transition-colors">Partners</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-6">Subscribe</h4>
            <p className="text-sm text-muted mb-4">
              Stay up to date with the latest features and releases.
            </p>
            <form className="flex flex-col gap-2">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full pl-4 pr-12 py-3 rounded-xl border border-border bg-light-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                  required
                />
                <button 
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 w-9 bg-primary text-white rounded-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} SaaSify Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-muted hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-muted hover:text-foreground transition-colors">Terms of Service</Link>
            <Link href="#" className="text-muted hover:text-foreground transition-colors">Cookies Config</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
