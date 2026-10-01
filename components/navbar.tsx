"use client";

import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { navigation, siteConfig } from "@/lib/site";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="TTJ PRO home page">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
            T
          </div>
          <div className="leading-tight">
            <div className="text-base font-semibold text-foreground">TTJ PRO</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Home Care
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <a
            href={siteConfig.phoneHref}
            aria-label="Call TTJ PRO at 425-247-5341"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Phone className="h-4 w-4" />
            Free Consultation: {siteConfig.phone}
          </a>
        </div>

        <div className="md:hidden">
          <Button
            variant="outline"
            size="icon"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen((open) => !open)}
            className="min-h-[44px] min-w-[44px]"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 sm:px-6">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="min-h-[44px] rounded-xl px-3 py-3 text-base font-medium text-foreground hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={siteConfig.phoneHref}
              aria-label="Call TTJ PRO at 425-247-5341"
              className="mt-2 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-medium text-primary-foreground"
              onClick={() => setMenuOpen(false)}
            >
              <Phone className="h-4 w-4" />
              Free Consultation: {siteConfig.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
