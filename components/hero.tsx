import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(212,155,40,0.14),_transparent_40%),linear-gradient(180deg,#f8fbfb_0%,#ffffff_100%)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center">
          <span className="mb-5 inline-flex w-fit items-center rounded-full border border-primary/20 bg-accent px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Local Care & Personalized Support in Bellevue & Surrounding Areas
          </span>

          <h1 className="max-w-xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Compassionate In-Home Care & Support Services You Can Trust
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
            Providing high-quality, non-medical care where your loved ones feel most comfortable — right at home.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={siteConfig.phoneHref}
              aria-label="Call TTJ PRO at 425-247-5341"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <PhoneCall className="h-4 w-4" />
              Call for Free Consultation: {siteConfig.phone}
            </a>
            <Button asChild variant="outline" size="lg" className="min-h-[48px]">
              <Link href="/services">
                Explore Our Care Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="w-full max-w-md rounded-[2rem] border border-border bg-card p-6 shadow-lg shadow-primary/5">
            <div className="rounded-[1.5rem] bg-primary/5 p-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-primary">Support That Feels Like Home</span>
                <span className="rounded-full bg-secondary/15 px-2 py-1 text-xs font-medium text-secondary-foreground/90">
                  Local
                </span>
              </div>

              <div className="space-y-4">
                {[
                  "Personal care and daily routines",
                  "Companionship and social connection",
                  "Household support with reliability",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl bg-white p-3 shadow-sm">
                    <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-secondary/15 text-secondary">
                      ✓
                    </div>
                    <p className="text-sm text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
