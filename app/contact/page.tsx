import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import ContactForm from "@/components/contact-form";
import { siteConfig } from "@/lib/site";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Contact</p>
        <h1 className="mt-3 text-4xl font-bold text-foreground">Request a Free Consultation</h1>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          Share a few details about your loved one&apos;s needs and a member of the TTJ PRO team will be in touch.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
        <aside className="space-y-6">
          <div className="rounded-[2rem] border border-border bg-card p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Call</p>
            <a
              href={siteConfig.phoneHref}
              aria-label="Call TTJ PRO at 425-247-5341"
              className="mt-3 inline-flex items-center gap-3 text-2xl font-bold text-foreground hover:text-primary"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {siteConfig.phone}
            </a>
            <p className="mt-3 text-base text-muted-foreground">Free Consultation</p>
          </div>

          <div className="rounded-[2rem] border border-border bg-card p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Email</p>
            <a
              href={siteConfig.emailHref}
              aria-label="Email TTJ PRO at ttjproneatcare@gmail.com"
              className="mt-3 inline-flex items-center gap-3 text-lg font-semibold text-foreground hover:text-primary"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
              {siteConfig.email}
            </a>
          </div>

          <div className="rounded-[2rem] border border-border bg-card p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Service Area</p>
            <div className="mt-4 flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-primary" aria-hidden="true" />
              <p className="text-base text-muted-foreground">{siteConfig.serviceArea}</p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-border bg-card p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Scan to Connect</p>
            <div className="mt-4 rounded-2xl border border-dashed border-border bg-muted/50 p-5">
              <div className="grid grid-cols-5 gap-1 rounded-xl bg-white p-3" aria-label="QR code placeholder for contact intake">
                {Array.from({ length: 25 }).map((_, index) => (
                  <div
                    key={index}
                    className={
                      (index + 1) % 3 === 0 || (index + 2) % 5 === 0 || index % 7 === 0
                        ? "aspect-square rounded-sm bg-primary"
                        : "aspect-square rounded-sm bg-transparent"
                    }
                  />
                ))}
              </div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Update the QR destination in the site configuration to match your approved contact page.
            </p>
          </div>
        </aside>

        <ContactForm />
      </div>

      <div className="mt-10 rounded-[2rem] border border-border bg-muted/50 p-6 text-sm text-muted-foreground sm:text-base">
        Please submit your inquiry only with the details needed for a first conversation. We do not collect medical records or insurance information through this basic marketing form. For immediate help, call {siteConfig.phone}.
      </div>

      <div className="mt-6 text-center text-sm text-muted-foreground">
        <Link href="/services" className="font-medium text-primary hover:underline">
          Explore services
        </Link>
      </div>
    </main>
  );
}
