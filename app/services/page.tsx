import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { services, siteConfig } from "@/lib/site";

const servicePhotos = [
  {
    src: "/image/images_01.jpg",
    alt: "Caregivers making a bed in a home",
  },
  {
    src: "/image/images_08.jpg",
    alt: "A caregiver spending time with an older adult at home",
  },
  {
    src: "/image/images_06.jpg",
    alt: "A caregiver helping create a comfortable home environment",
  },
  {
    src: "/image/images_03.jpg",
    alt: "A caregiver offering personal support to an older adult",
  },
  {
    src: "/image/images_10.jpg",
    alt: "A caregiver providing a reassuring hand to an older adult",
  },
  {
    src: "/image/images_12.jpg",
    alt: "A caregiver sharing a warm moment with an older adult",
  },
];

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Our Services</p>
        <h1 className="mt-3 text-4xl font-bold text-foreground">Care That Fits Your Loved One&apos;s Routine</h1>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          TTJ PRO provides compassionate, dependable support designed around each individual&apos;s needs, preferences, and daily rhythm.
        </p>
      </div>

      <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-3">
        {servicePhotos.map((photo) => (
          <div key={photo.src} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article key={service.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">{service.title}</h2>
              <p className="mt-3 text-base leading-7 text-muted-foreground">{service.description}</p>
            </article>
          );
        })}
      </div>

      <div className="mt-12 rounded-[2rem] border border-border bg-muted/70 p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground">Need help choosing the right care plan?</h2>
        <p className="mt-3 text-base text-muted-foreground">
          Call {siteConfig.phone} for a free consultation and a personalized conversation about your family&apos;s needs.
        </p>
        <Button asChild size="lg" className="mt-6">
          <Link href={siteConfig.phoneHref}>Free Consultation</Link>
        </Button>
      </div>
    </main>
  );
}
