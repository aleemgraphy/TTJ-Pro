import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

import { navigation, siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <p className="text-2xl font-bold text-foreground">TTJ PRO</p>
          <p className="mt-4 max-w-sm text-base leading-7 text-muted-foreground">
            Compassionate, local support for seniors and families who want reliable, dignified in-home care.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {navigation.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="transition-colors hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground">Contact</h3>
          <div className="mt-4 space-y-3 text-sm text-muted-foreground">
            <a
              href={siteConfig.phoneHref}
              aria-label="Call TTJ PRO at 425-247-5341"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {siteConfig.phone}
            </a>
            <p className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {siteConfig.serviceArea}
            </p>
            <Link href="/contact" className="block text-primary hover:underline">
              Contact TTJ PRO
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 text-sm text-muted-foreground sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 TTJ PRO NEAT HOME CARE & SUPPORT SERVICES</p>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hover:text-primary">
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
