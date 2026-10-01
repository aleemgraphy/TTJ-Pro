import { MapPin, MessageSquareMore, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export default function ContactSection() {
  return (
    <section id="service-area" className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/80">Service Area</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Serving Bellevue & Surrounding Puget Sound Areas</h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-primary-foreground/85">
            Local care and personalized support, tailored for families across Bellevue and neighboring communities.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.12em] text-primary-foreground/70">Free Consultation</p>
                <a
                  href={siteConfig.phoneHref}
                  aria-label="Call TTJ PRO at 425-247-5341"
                  className="text-xl font-semibold text-primary-foreground hover:underline"
                >
                  {siteConfig.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.12em] text-primary-foreground/70">Service Area</p>
                <p className="text-lg font-medium">{siteConfig.serviceArea}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary/20 text-secondary">
              <MessageSquareMore className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.12em] text-primary-foreground/70">Get Started</p>
              <h3 className="text-xl font-semibold">Need a Care Plan?</h3>
            </div>
          </div>

          <div className="rounded-2xl border border-dashed border-white/20 bg-white/5 p-5">
            <div className="grid grid-cols-5 gap-1 rounded-xl bg-white p-2" aria-label="QR code placeholder for contact intake">
              {Array.from({ length: 25 }).map((_, index) => (
                <div
                  key={index}
                  className={
                    (index + 1) % 3 === 0 || (index + 3) % 5 === 0 || index % 7 === 0
                      ? "aspect-square rounded-sm bg-primary"
                      : "aspect-square rounded-sm bg-transparent"
                  }
                />
              ))}
            </div>
          </div>

          <Button asChild variant="secondary" className="mt-6 w-full justify-center text-base">
            <a href="/contact">Request a Free Consultation</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
